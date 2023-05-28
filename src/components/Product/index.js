import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer";
const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(s => s.main)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <div className={"container"}>
            <div className="product" style={{
                display : "flex" , justifyContent : "space-around" , flexWrap : "wrap" , gap : "2rem" , margin : "30px 0"
            }}>
                {
                    product.map(el => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Product;