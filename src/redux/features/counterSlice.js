import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    error: null,
    loading: false
};

export const updateCounterAsync = createAsyncThunk("updateCounterAsync", async (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 5000);
    });
})

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
        resetCounter: (state) => {
            state.value = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCounterAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCounterAsync.fulfilled, (state, action) => {
                state.value += action.payload;
                state.loading = false;
            })
            .addCase(updateCounterAsync.rejected, (state) => {
                state.loading = false;
                state.error = new Error("Some error occurred");
            });
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount, resetCounter } = counterSlice.actions

export default counterSlice.reducer


