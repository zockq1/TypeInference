import store, { RootState } from "./store";

function getEx() {
  const { data, status } = store.getState().ex;

  if (status.isSuccess) {
    return { data: data as string, status: status };
  }

  return { data, status };
}

const { data, status } = getEx();

let temp = status.isSuccess ? data : "";
