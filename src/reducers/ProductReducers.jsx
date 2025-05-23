import validator from "validator";
import dataUsers from "../data/Users";
import getRandom from "food-random-module";
import { v4 as uuid } from "uuid";

export const defaultProduct = {
  userList: dataUsers,
  isLoggedIn: false,
  loginNameInput: "alan@belanja.com",
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
};

export function productReducer(state, action) {
  switch (action.type) {
    case "LOGIN_NAME_INPUT": {
      return { ...state, loginNameInput: action.value };
    }

    case "LOGIN": {
      let newUser = null;
      if (validator.isEmail(state.loginNameInput)) {
        newUser = state.userList.find(
          (user) => user.email === state.loginNameInput
        );
      } else if (validator.isMobilePhone(state.loginNameInput)) {
        newUser = state.userList.find(
          (user) => user.mobile.toString() === state.loginNameInput
        );
      }
      return {
        ...state,
        isLoggedIn: !!newUser,
        user: newUser,
        bills: Array.isArray(newUser?.bills) ? newUser.bills : [],
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
      const month = now.toLocaleDateString("en-US", { month: "short" });
      const year = now.getFullYear();

      return {
        ...state,
        merchant: {
          ...state.merchant,
          id: uuid(),
          date: { ...state.date, d: day, m: month, year: year },
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
        user: {
          ...state.user,
          notifications: {
            ...state.user.notifications,
            notify: true,
            list: [state.merchant.id, ...state.user.notifications.list],
          },
        },
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

      // console.log(Number(state.currentBill.payment), "payment");
      // console.log(Object.keys(newFullPayeeList).length, "length");

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

      return {
        ...state,
        bills: newBills,
        currentBill: newCurrentBill,
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

    default:
      throw Error("productReducer - unknown action:", action.type);
  }
}
