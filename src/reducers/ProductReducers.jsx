import validator from "validator";
import dataUsers from "../data/Users";
import getRandom from "food-random-module";
import { v4 as uuid } from "uuid";

export const defaultProduct = {
  userList: dataUsers,
  isLoggedIn: false,
  loginNameInput: "",
  loginPasswordInput: "",
  loginError: "",
  user: null,
  merchant: {
    id: null,
    name: null,
    payment: null,
    mode: "belanja",
    date: { d: null, m: null, year: null },
  },
  bills: [],
  currentBill: null,
  split_belanja_switch: false,
  payFriendInput: null,
  wallet: 0,
  lifeTimeSpending: 0,
  friends: [],
  notifications: {
    notify: false,
    list: [],
  },
};

export function productReducer(state, action) {
  switch (action.type) {

    case "LOGIN_NAME_INPUT":
      return { ...state, loginNameInput: action.value, loginError: "" };

    case "LOGIN_PASSWORD_INPUT":
      return { ...state, loginPasswordInput: action.value, loginError: "" };

    case "LOGIN_ERROR":
      return { ...state, loginError: action.value };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loginError: "",
        loginNameInput: "",
        loginPasswordInput: "",
        bills: Array.isArray(action.payload.bills) ? action.payload.bills : [],
        wallet: action.payload.wallet ?? 0,
        lifeTimeSpending: action.payload.lifeTimeSpending ?? 0,
        friends: Array.isArray(action.payload.friends) ? action.payload.friends : [],
        notifications: action.payload.notifications ?? { notify: false, list: [] },
      };

    case "LOGIN": {
      let foundUser = null;

      if (validator.isEmail(state.loginNameInput)) {
        foundUser = state.userList.find(
          (user) => user.email === state.loginNameInput
        );
      } else if (validator.isMobilePhone(state.loginNameInput)) {
          foundUser = state.userList.find(
            (user) => user.mobile.toString() === state.loginNameInput
          );
      }

      if (!foundUser) {
        return {
          ...state,
          loginError: "User not found. Please check your email or mobile number.",
        };
      }

      if (foundUser.password !== state.loginPasswordInput) {
        return {
          ...state,
          loginError: "Incorrect password. Please try again.",
        };
      }

      return {
        ...state,
        isLoggedIn: true,
        user: foundUser,
        loginError: "",
        loginNameInput: "",
        loginPasswordInput: "",
        bills: Array.isArray(foundUser.bills) ? foundUser.bills : [],
      };
    }

    case "LOGOUT": {
      const user = { ...state.user, bills: state.bills };
      for (const key in state.userList) {
        if (state.userList[key].id === state.user.id) {
          state.userList[key] = user;
        }
      }

      return { ...state, isLoggedIn: false, user: null };
    }

    case "SCAN": {
      const firstName = getRandom("name");
      const lastName = getRandom("type");
      const newMerchantName = firstName.request + " " + lastName.request;
      return {
        ...state,
        merchant: { ...state.merchant, id: uuid(), name: newMerchantName },
      };
    }
    case "MERCHANT_PAYMENT_CHANGE": {
      return {
        ...state,
        merchant: { ...state.merchant, payment: action.value },
      };
    }

    case "MERCHANT_BACK": {
      return {
        ...state,
        merchant: { ...state.merchant, payment: null },
      };
    }

    case "MERCHANT_MAKE_PAYMENT": {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const Month = now.toLocaleDateString("en-US", { month: "short" });
      const year = now.getFullYear();

      const updatedWallet = (
        Number(state.user.wallet) - Number(state.merchant.payment)
      ).toFixed(2);

      return {
        ...state,
        user: {
          ...state.user,
          wallet: updatedWallet,
        },
        merchant: {
          ...state.merchant,
          id: uuid(),
          date: { ...state.date, d: day, m: month, Month: Month, year: year },
        },
      };
    }

    case "SETTLE_LATER": {
      let updatedMerchant = {
        ...state.merchant,
        fullPayeeList: [
          {
            id: state.user.id,
            name: state.user.name,
            float: "",
            percentage: "",
          },
        ],
      };

      return {
        ...state,
        bills: [updatedMerchant, ...state.bills],
        merchant: defaultProduct.merchant,
      };
    }

    case "SPLIT": {
      return {
        ...state,
        merchant: {
          ...state.merchant,
          mode: action.value,
        },
        bills: [state.merchant, ...state.bills],
        currentBill: {
          ...state.merchant,
          mode: action.value,
          settle: false,
          payeeList: [],
          fullPayeeList: [
            {
              id: state.user.id,
              name: state.user.name,
              float: "",
              percentage: "",
            },
          ],
        },
        split_belanja_switch: false,
      };
    }

    case "SPLIT_BELANJA_SWITCH": {
      let newMode = "belanja";
      if (action.value === false) {
        newMode = "split";
      } else if (action.value === true) {
        newMode = "belanja";
      }
      return {
        ...state,
        split_belanja_switch: action.value,
        currentBill: { ...state.currentBill, mode: newMode },
      };
    }

    case "BILL_CLICK": {
      const newCurrentBill = state.bills.find((bill) => bill.id === action.id);
      return { ...state, currentBill: newCurrentBill };
    }

    case "CLICK_BILL_SETTLE_OPTIONS": {
      return {
        ...state,
        currentBill: { ...state.currentBill, mode: action.value },
      };
    }

    case "PAYEE_FLOAT_INPUT": {
      const payee = state.currentBill.fullPayeeList.find(
        (payee) => payee.id === action.id
      );
      payee.float = action.value;
      const newFloatTotal = state.currentBill.fullPayeeList.reduce(
        (sum, payee) => Number(sum) + Number(payee.float),
        0
      );
      return {
        ...state,
        currentBill: { ...state.currentBill, floatTotal: newFloatTotal },
      };
    }

    case "PAYEE_PERCENTAGE_INPUT": {
      const payee = state.currentBill.fullPayeeList.find(
        (payee) => payee.id === action.id
      );
      const filteredValue = action.value.replace(".", "");
      payee.percentage = filteredValue;
      const newPercentageTotal = state.currentBill.fullPayeeList.reduce(
        (sum, payee) => Number(sum) + Number(payee.percentage),
        0
      );
      return {
        ...state,
        currentBill: {
          ...state.currentBill,
          percentageTotal: newPercentageTotal,
        },
      };
    }

    case "CHANGE_INPUT_PAYEE": {
      // console.log(action.actionMeta);
      let newFullPayeeList = state.currentBill.fullPayeeList;
      let newFloatTotal = state.currentBill.floatTotal;
      if (action.actionMeta.action === "select-option") {
        const payee = state.userList.find(
          (payee) => payee.id === action.actionMeta.option.value
        );

        const newPayee = {
          id: payee.id,
          name: payee.name,
          float: "",
          percentage: "",
        };

        newFloatTotal = state.currentBill.floatTotal;

        newFullPayeeList = [...state.currentBill.fullPayeeList, newPayee];
      } else if (action.actionMeta.action === "remove-value") {
        newFullPayeeList = state.currentBill.fullPayeeList.filter(
          (payee) => payee.id !== action.actionMeta.removedValue.value
        );

        newFloatTotal = newFullPayeeList.reduce(
          (sum, payee) => Number(sum) + Number(payee.float),
          0
        );
      }

      const newEqual = (
        Number(state.currentBill.payment) / Object.keys(newFullPayeeList).length
      ).toFixed(2);

      return {
        ...state,
        currentBill: {
          ...state.currentBill,
          fullPayeeList: newFullPayeeList,
          floatTotal: newFloatTotal,
          equal: newEqual,
        },
      };
    }

    case "BILL_SUBMIT": {
      const newCurrentBill = { ...state.currentBill, settle: true };
      state.currentBill.fullPayeeList.map((payee) => {
        if (newCurrentBill.mode === "=") {
          payee.final = newCurrentBill.equal;
        } else if (newCurrentBill.mode === "split") {
          payee.final = payee.float;
        } else if (newCurrentBill.mode === "%") {
          payee.final = (newCurrentBill.payment / 100) * payee.percentage;
        } else if (newCurrentBill.mode === "belanja") {
          if (payee.name === state.user.name) {
            payee.final = newCurrentBill.payment;
          } else {
            payee.final = 0;
          }
        }
        return payee;
      });

      const newBills = state.bills.map((bill) =>
        bill.id === newCurrentBill.id ? newCurrentBill : bill
      );

      const locatedPayee = {};
      Object.values(state.currentBill.fullPayeeList).forEach((payee) => {
        locatedPayee[payee.id] = payee;
      });

      //To reflect debt change in current user friends list
      const updatedFriends = state.user.friends.map((friend) => {
        if (
          locatedPayee[friend.id] &&
          friend.id === locatedPayee[friend.id].id
        ) {
          return {
            ...friend,
            debt: (
              Number(friend.debt) - Number(locatedPayee[friend.id].final)
            ).toFixed(2),
          };
        }
        return friend;
      });

      //To reflect debt change in overall userlist, so when another user sign in, the chamge will reflect in his/her friendlist
      const updatedUserlist = state.userList.map((payeeUser) => {
        if (
          locatedPayee[payeeUser.id] &&
          payeeUser.id === locatedPayee[payeeUser.id].id &&
          locatedPayee[payeeUser.id].id !== state.user.id
        ) {
          const updatedFriends = payeeUser.friends.map((payeeUserFriend) => {
            if (payeeUserFriend.id === state.user.id) {
              const finalDebt =
                Number(payeeUserFriend.debt) +
                Number(locatedPayee[payeeUser.id].final);
              return {
                ...payeeUserFriend,
                debt: finalDebt.toFixed(2),
              };
            }
            return payeeUserFriend;
          });

          return {
            ...payeeUser,
            friends: updatedFriends,
          };
        }
        return payeeUser;
      });
      // console.log(updatedUserlist);

      return {
        ...state,
        userList: updatedUserlist,
        bills: newBills,
        currentBill: newCurrentBill,
        user: {
          ...state.user,
          bills: newBills,
          friends: updatedFriends,
        },
      };
    }

    case "CLICK_NOTIFICATIONS": {
      return {
        ...state,
        user: {
          ...state.user,
          notifications: {
            ...state.user.notifications,
            notify: false,
          },
        },
      };
    }

    case "TOP_UP":
     return {
      ...state,
      user: {
      ...state.user,
      wallet: state.user.wallet + action.value,
      },
    };

    case "CHANGE_PAY_FRIEND_INPUT": {
      return {
        ...state,
        payFriendInput: action.value,
      };
    }

    case "PAY_FRIEND": {
      const currentFriend = state.user.friends.find(
        (friend) => friend.id === action.id
      );
      return {
        ...state,
        payFriendInput: Number(currentFriend.debt).toFixed(2),
      };
    }

    case "PAY_FRIEND_SUBMIT": {
      const updatedWallet = (
        Number(state.user.wallet) - Number(state.payFriendInput)
      ).toFixed(2);

      const updatedFriends = state.user.friends.map((friend) => {
        if (friend.id === action.id) {
          return { ...friend, debt: friend.debt - state.payFriendInput };
        }
        return friend;
      });

      //update userList for debt change
      const updatedUserlist = state.userList.map((user) => {
        if (user.id === action.id) {
          const updatedTheirFriends = user.friends.map((theirFriend) => {
            if (theirFriend.id === state.user.id) {
              return {
                ...theirFriend,
                debt: (
                  Number(theirFriend.debt) + Number(state.payFriendInput)
                ).toFixed(2),
              };
            }
            return theirFriend;
          });
          return {
            ...user,
            wallet: (
              Number(user.wallet) + Number(state.payFriendInput)
            ).toFixed(2),
            friends: updatedTheirFriends,
          };
        }
        return user;
      });

      return {
        ...state,
        userList: updatedUserlist,
        user: { ...state.user, wallet: updatedWallet, friends: updatedFriends },
      };
    }

    case "SEND_NOTIFICATIONS": {
      const { id, mode, amount, senderName, senderId, place } = action.payload;
      const now = new Date();
      const currentDate = {
        d: now.getDate(),
        m: now.getMonth() + 1,
        Month: now.toLocaleDateString("en-US", { month: "short" }),
        y: now.getFullYear(),
      };

      if (mode === "friendPaid" || mode === "nudge") {
        const newNotification = {
          id,
          mode,
          amount,
          senderName,
          senderId,
          place,
          notify: true,
          date: currentDate,
          uuid: uuid(),
        };

        const updatedUserList = state.userList.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              notifications: {
                ...user.notifications,
                list: [...user.notifications.list, newNotification],
                notify: true,
              },
            };
          }
          return user;
        });

        return { ...state, userList: updatedUserList };
      } else if (mode === "bill") {
        const locatedPayee = {};
        Object.values(state.currentBill.fullPayeeList).forEach((payee) => {
          locatedPayee[payee.id] = payee;
        });

        const updatedUserlist = state.userList.map((payeeUser) => {
          if (
            locatedPayee[payeeUser.id] &&
            payeeUser.id === locatedPayee[payeeUser.id].id &&
            locatedPayee[payeeUser.id].id !== state.user.id
          ) {
            const newNotification = {
              id: payeeUser.id,
              mode: state.currentBill.mode,
              amount: locatedPayee[payeeUser.id].final,
              senderName,
              senderId,
              place,
              notify: true,
              date: currentDate,
              uuid: uuid(),
            };
            return {
              ...payeeUser,
              notifications: {
                ...payeeUser.notifications,
                notify: true,
                list: [...payeeUser.notifications.list, newNotification],
              },
            };
          }
          return payeeUser;
        });

        return { ...state, userList: updatedUserlist };
      }
      return state;
    }

    case "NOTIFICATION_CLICK": {
      const updatedNotifications = state.user.notifications.list.map(
        (notification) => {
          if (notification.uuid === action.uuid) {
            return { ...notification, notify: false };
          }
          return notification;
        }
      );

      return {
        ...state,
        user: {
          ...state.user,
          notifications: {
            ...state.user.notifications,
            list: updatedNotifications,
          },
        },
      };
    }

    case "NUDGE_FRIEND": {
      const friend = state.userList.find((user) => user.id === action.id);
      return {
        ...state,
        user: {
          ...state.user,
          messages: {
            msgNudge: `You have Nudged ${friend.name} for payment.`,
          },
        },
      };
    }

    case "CLEAR_MESSAGES": {
      if (state.user.messages !== null) {
        return {
          ...state,
          user: {
            ...state.user,
            messages: null,
          },
        };
      }
      return { ...state };
    }


    default:
      throw Error("productReducer - unknown action:", action.type);
  }
}
