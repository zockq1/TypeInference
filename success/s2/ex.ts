import store from "./store";

const { data, isSuccess } = store.getState().ex;

let temp = isSuccess ? data : "";
