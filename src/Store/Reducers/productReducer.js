import ActionType from "../Constants/constants";

const INITIAL_STATE = {
    products_loading:false,
    products: []
}

const productReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ActionType.PRODUCT_LOADING:
            return {
                ...state,
                products_loading:true
            }
            case ActionType.PRODUCT_GOT:
                return {
                    ...state,
                    products_loading:false,
                    products:action.payload
                }
                case ActionType.PRODUCT_FAIL:
                    return {
                        ...state,
                        products_loading:false,
                        products:[]
                    }
        default:
          return  state;
    }
    
}

export{productReducer}