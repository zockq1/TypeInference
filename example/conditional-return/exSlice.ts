import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Ex<Tdata> {
  data: Tdata | undefined;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: Ex<string> = {
  data: undefined,
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const exSlice = createSlice({
  name: "ex",
  initialState: initialState,
  reducers: {},
});

export default exSlice.reducer;
