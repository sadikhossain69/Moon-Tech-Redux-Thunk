import { addProduct } from "../../actions/productAction"

export const addProductData = product => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-odfw.onrender.com/product`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(addProduct({
                ...product,
                _id: data.insertedId
            }))
        }
    }
}