import axios from "axios";

const initialState = {
    product : [] ,
    basket :  [] ,
    favorite : []
}
export const getProduct = () => {
    return async (dispatch) => {
        try{
const url = await axios(`https://fakestoreapi.com/products`)
            const {data} = await url
            dispatch({type : "GET_PRODUCT", payload : data})
        }catch (e) {
            console.log(e)
        }
    }
}
export const Reducer  = (state = initialState , action) => {
    switch (action.type) {
        case "GET_PRODUCT" :
            return {...state , product: action.payload}
        case "DELETE_PRODUCT" :
               return {...state, basket: state.basket.filter(el => el.id  !== action.payload.id)}
        case "SUM_PRODUCT" :
            return {...state,basket: state.basket.reduce((acc,el )=> {
                return acc + el.price
                },1)}
        default:
            return state
    }


}