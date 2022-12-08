import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const initialState = {
    filters: {
        brand: [],
        stock: false,
    },
    keyword: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: [...state.filters.brand, action.payload]
                }
            }
        case TOGGLE_STOCK:
            return {

            }
        default:
            return state
    }
}