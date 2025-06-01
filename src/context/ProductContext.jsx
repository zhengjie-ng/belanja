import { createContext, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducers";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);
  const navigate = useNavigate();

  const handlerOnChangeInput = (e) => {
    dispatch({ type: "LOGIN_NAME_INPUT", value: e.target.value });
  };
  const handlerLoginClick = () => {
    dispatch({ type: "LOGIN" });
    navigate("/home");
  };

  const handlerLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handlerScanClick = () => {
    dispatch({ type: "SCAN" });
    navigate("/paymentMerchant");
  };

  const handlerMerchantPaymentChange = (e) => {
    dispatch({ type: "MERCHANT_PAYMENT_CHANGE", value: e.target.value });
  };

  const handlerClickBack = () => {
    dispatch({ type: "MERCHANT_BACK" });
    navigate(-1);
  };

  const handlerClickMerchantMakePayment = () => {
    if (state.merchant.payment) {
      dispatch({ type: "MERCHANT_MAKE_PAYMENT" });
      navigate("/settle");
    } else {
      alert("Please enter amount to pay.");
    }
  };

  const handlerSettleLater = () => {
    dispatch({ type: "SETTLE_LATER" });
    navigate("/home");
  };

  const handlerSplit = (value) => {
    dispatch({ type: "SPLIT", value: value });
    navigate(`/bill/${state.merchant.id}/`);
  };

  const handlerSplitBelanjaSwitch = (e) => {
    dispatch({ type: "SPLIT_BELANJA_SWITCH", value: e });
  };

  const handlerBillClick = (id) => {
    dispatch({ type: "BILL_CLICK", id: id });
  };

  const handlerClickBillSettleOption = (value) => {
    dispatch({ type: "CLICK_BILL_SETTLE_OPTIONS", value: value });
  };

  const handlerOnChangePayeeFloatInput = (e, id) => {
    dispatch({ type: "PAYEE_FLOAT_INPUT", value: e.target.value, id: id });
  };

  const handlerOnChangePayeePecentageInput = (e, id) => {
    dispatch({ type: "PAYEE_PERCENTAGE_INPUT", value: e.target.value, id: id });
  };
  const handlerChangeInputPayee = (selectedOption, actionMeta) => {
    dispatch({
      type: "CHANGE_INPUT_PAYEE",
      actionMeta: actionMeta,
    });
  };

  const handlerBillSubmit = ({
    id,
    mode,
    amount,
    senderName,
    senderId,
    place,
  }) => {
    dispatch({ type: "BILL_SUBMIT" });
    dispatch({
      type: "SEND_NOTIFICATIONS",
      payload: {
        id,
        mode,
        amount,
        senderName,
        senderId,
        place,
      },
    });
    navigate("/bills");
  };

  const handlerClickNotifications = () => {
    dispatch({ type: "CLICK_NOTIFICATIONS" });
    navigate("/notifications");
  };

  const handlerChangePayFriendInput = (e) => {
    dispatch({ type: "CHANGE_PAY_FRIEND_INPUT", value: e.target.value });
  };

  const handlerPayFriend = (id) => {
    dispatch({ type: "PAY_FRIEND", id: id });
  };

  const handlerPayFriendSubmit = ({
    id,
    mode,
    amount,
    senderName,
    senderId,
    place,
  }) => {
    dispatch({
      type: "SEND_NOTIFICATIONS",
      payload: {
        id,
        mode,
        amount,
        senderName,
        senderId,
        place,
      },
    });
    dispatch({ type: "PAY_FRIEND_SUBMIT", id: id });
    dispatch({ type: "CLEAR_MESSAGES" });
    navigate(`/payfriend/successful/${id}`);
  };

  const handleNotificationClick = (uuid) => {
    dispatch({ type: "NOTIFICATION_CLICK", uuid: uuid });
  };

  const handleNudgeFriend = ({
    id,
    mode,
    amount,
    senderName,
    senderId,
    place,
  }) => {
    dispatch({
      type: "SEND_NOTIFICATIONS",
      payload: {
        id,
        mode,
        amount,
        senderName,
        senderId,
        place,
      },
    });
    dispatch({ type: "NUDGE_FRIEND", id: id });
  };

  const handleClearMessages = () => {
    dispatch({ type: "CLEAR_MESSAGES" });
  };

  const handleNaviScan = () => {
    dispatch({ type: "GET_LOCATION" });
  };

  const data = {
    userList: state.userList,
    isLoggedIn: state.isLoggedIn,
    loginNameInput: state.loginNameInput,
    user: state.user,
    merchant: state.merchant,
    bills: state.bills,
    split_belanja_switch: state.split_belanja_switch,
    currentBill: state.currentBill,
    payFriendInput: state.payFriendInput,
    oneMap: state.oneMap,
    location: state.location,
    handlerLoginClick,
    handlerOnChangeInput,
    handlerLogoutClick,
    handlerScanClick,
    handlerMerchantPaymentChange,
    handlerClickBack,
    handlerClickMerchantMakePayment,
    handlerSettleLater,
    handlerSplit,
    handlerSplitBelanjaSwitch,
    handlerBillClick,
    handlerClickBillSettleOption,
    handlerOnChangePayeeFloatInput,
    handlerOnChangePayeePecentageInput,
    handlerChangeInputPayee,
    handlerBillSubmit,
    handlerClickNotifications,
    dispatch,
    handlerPayFriend,
    handlerChangePayFriendInput,
    handlerPayFriendSubmit,
    handleNotificationClick,
    handleNudgeFriend,
    handleClearMessages,
    handleNaviScan,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;
