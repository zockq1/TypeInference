import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Default {
  data: undefined;
  isSuccess: false;
  isLoading: false;
  isError: false;
}

interface Success<Tdata> {
  data: Tdata;
  isSuccess: true;
  isLoading: false;
  isError: false;
}

interface Loading<Tdata> {
  data: Tdata | undefined;
  isSuccess: false;
  isLoading: true;
  isError: false;
}

interface Error<Tdata> {
  data: Tdata | undefined;
  isSuccess: false;
  isLoading: false;
  isError: true;
}

type Ex<Tdata> = Success<Tdata> | Loading<Tdata> | Error<Tdata> | Default;

const initialState: Ex<string> = {
  data: undefined,
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const exSlice = createSlice({
  name: "ex",
  initialState: initialState as Ex<string>,
  reducers: {},
});

export default exSlice.reducer;
