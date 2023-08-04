import { useSelector } from "react-redux";
import { useActions } from "./use-action";
import { increment, decrement, set } from "../reduxStuff/action";

export const useCount = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
