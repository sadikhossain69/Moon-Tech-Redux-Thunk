import { loadProduct } from "../../actions/productAction"

export const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-odfw.onrender.com/products`)
        const data = await res.json()
        if(data.data.length) {
            dispatch(loadProduct(data.data))
        }
    }
}