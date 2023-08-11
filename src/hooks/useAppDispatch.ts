import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

// this hooks fixes typing for redux
export const useAppDispatch: () => AppDispatch = useDispatch;