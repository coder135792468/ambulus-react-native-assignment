import { store, RootState } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StateProvider from "./StateProvider";
import { setAbhaField, setIsAbhaCompleted } from "./slices/adhaSlice";
import { setOtpField, setIsOtpCompleted } from "./slices/otpSlice";

export {
  store,
  useDispatch,
  useSelector,
  StateProvider,
  RootState,
  setAbhaField,
  setIsAbhaCompleted,
  setOtpField,
  setIsOtpCompleted,
};
