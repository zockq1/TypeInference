import store from "./store";

function getEx() {
  const { data, isSuccess } = store.getState().ex;

  if (isSuccess) {
    return { data: data as string, isSuccess };
  }

  return { data, isSuccess };
}

const { data, isSuccess } = getEx();

let temp = isSuccess ? data : "";
