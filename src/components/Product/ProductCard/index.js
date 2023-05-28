import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsFillBookmarkHeartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
// import ProductDetails from "../ProductDetails";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    // const {basket } = useSelector(state => state.basket)
    const {favorite } = useSelector(state => state.favorite)
    const found = favorite.some(some => some.id === el.id)
    // const btn = basket.some(some => some.id === el.id)

    const addToBasket = () => {
        dispatch({type : "ADD_TO_BASKET", payload : el})
    }
    const addToFavorite = () => {
        dispatch({type : "ADD_TO_FAVORITE", payload : el})
    }
    return (


            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Link to={`/product/details/${el.id}`} >
                        <img src={el.image} alt=""/>
                    </Link>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {el.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {el.description}
                    </p>
                    <button onClick={addToBasket}
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {el.price} $

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

export default ProductCard;