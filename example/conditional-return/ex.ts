import { createSelector } from "@reduxjs/toolkit";
import store, { RootState } from "./store";

const selectEx = createSelector([(state: RootState) => state.ex], (ex) => {
  const { data, isSuccess } = ex;

  if (isSuccess) {
    return { data: data as string, isSuccess };
  }

  return { data, isSuccess };
});

const { data, isSuccess } = selectEx(store.getState());

let temp = isSuccess ? data : "";
