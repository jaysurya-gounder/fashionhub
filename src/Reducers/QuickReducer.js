import { createSlice } from "@reduxjs/toolkit";

const QuickReducer = createSlice({
    name: 'quickView',
    initialState: {
        product: [],
        isOpen: false,
    },
    reducers: {
        popup: (state, action) => {
            switch (action.payload.type) {
                case 'OPEN_QUICK_VIEW':
                    return {
                        ...state,
                        product: action.payload.product,
                        isOpen: true,
                    };

                case 'CLOSE_QUICK_VIEW':
                    return {
                        ...state,
                        product: [],
                        isOpen: false,
                    };

                default:
                    return state;
            }
        }
    }
})

export const { popup } = QuickReducer.actions;
export default QuickReducer.reducer