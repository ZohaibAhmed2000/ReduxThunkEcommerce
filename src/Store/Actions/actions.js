import axios from "axios"
import ActionType from '../Constants/constants'


const getProductAction = ()=>{
    return async(dispatch)=>{
        try{
            dispatch({
                type: ActionType.PRODUCT_LOADING,
            })
            const data = await axios.get("https://fakestoreapi.com/products");
            dispatch({
                type:ActionType.PRODUCT_GOT,
                payload: data.data
            }) 
        }
        catch(error){
            dispatch({
                type:ActionType.PRODUCT_FAIL,
            })
        }
    }

}

export  {getProductAction};









