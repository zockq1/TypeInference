import store from "./store";

function getEx() {
  const ex = store.getState().ex;
  const { data, isSuccess } = ex;

  if (isSuccess) {
    return { data: data as string, isSuccess };
  }

  return ex;
}

const { data, isSuccess } = getEx();

let temp = isSuccess ? data : "";
