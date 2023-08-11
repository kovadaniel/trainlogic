import { RootState } from "../store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// this hooks fixes typing for redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
