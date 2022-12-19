import { removeProduct } from "../../actions/productAction"

export const deleteProduct = id => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-odfw.onrender.com/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data);
        if (data.acknowledged) {
            dispatch(removeProduct(id))
        }
    }
}