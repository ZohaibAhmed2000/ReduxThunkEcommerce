import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../Store/Actions/actions';

const Card = () => {
    const dispatch = useDispatch();
    const { products_loading, products } = useSelector((state) => state.productReducer)

    useEffect(() => {
        dispatch(getProductAction())
    }, [])
    return (
        <>
        {
            products_loading? <h1>Loading.....</h1>
            :
            <div className="container">
                <div className="row" >
                    { 
                        products.map((product) => {
                            let desclength = product.description;
                            console.log(desclength);
                            return (
                                <div className="col-3 mt-2" key={product.id}>
                                        <div className="card">
                                            <div className='text-center'>
                                                <img style={{ width: "60%", height: "20vh" }} src={product.image} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title card-title">{product.title}</h5>
                                                <p className="card-text card-desc">{product.description}</p>
                                                <button href="#" className="btn btn-primary">{`${product.price} PR`}</button>
                                            </div>
                                        </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        }    
        </>
    )
}

export default Card