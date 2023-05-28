
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {BsFillBookmarkHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";

const ProductDetails = () => {
    const [details , setDetails] = useState({})
    const getProduct = () => {
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then(res => setDetails(res.data))
    }
    useEffect(() => {
getProduct()
    }, [])
    console.log(details)
    const {productId} = useParams()
    const {
        category, image , title ,description,price
    } = details



    const {favorite } = useSelector(state => state.favorite)
    const found = favorite.some(some => some.id === details.id)
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type : "ADD_TO_BASKET", payload : details})
    }
    const addToFavorite = () => {
        dispatch({type : "ADD_TO_FAVORITE", payload : details})
    }
    return (
        <div className={"container flex items-center justify-around w-[90%] mx-auto my-[50px]"}>
            <img src={`${image}`} width={300} alt=""/>
      <div className=" w-[800px] bg-blue-900 rounded-[20px] p-10 ">
          <h1>{title}</h1>
          <h6>{ category}</h6>
          <h2>{description}</h2>

          <button onClick={addToBasket}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {details.price} $

          </button>
          <button onClick={addToFavorite}
                  className="mx-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
              <BsFillBookmarkHeartFill className={ found ?   "text-red-600" : "text-blue-100"}/>
          </button>
      </div>

        </div>
    );
};

export default ProductDetails;