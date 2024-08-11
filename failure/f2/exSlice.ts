import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Ex<Tdata> {
  data: Tdata | undefined;
  status: { isSuccess: boolean; isLoading: boolean; isError: boolean };
}

const initialState: Ex<string> = {
  data: undefined,
  status: { isSuccess: false, isLoading: false, isError: false },
};

const exSlice = createSlice({
  name: "ex",
  initialState: initialState,
  reducers: {},
});

export default exSlice.reducer;
