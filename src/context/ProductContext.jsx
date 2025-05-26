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

  const handlerBillSubmit = () => {
    dispatch({ type: "BILL_SUBMIT" });
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

  const handlerPayFriendSubmit = (id, mode, amount, name, nameId, place) => {
    dispatch({
      type: "SEND_NOTIFICATIONS",
      id: id,
      mode: mode,
      amount: amount,
      name: name,
      nameId: nameId,
      place: place,
    });
    dispatch({ type: "PAY_FRIEND_SUBMIT", id: id });
    navigate(`/payfriend/successful/${id}`);
  };

  const handleNotificationClick = (id) => {
    dispatch({ type: "NOTIFICATION_CLICK", id: id });
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
    handlerPayFriend,
    handlerChangePayFriendInput,
    handlerPayFriendSubmit,
    handleNotificationClick,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;
