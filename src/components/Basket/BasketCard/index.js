import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

const BasketCard = ({el}) => {
const dispatch = useDispatch()
const delProduct = () => {
    dispatch({type : "DELETE_PRODUCT" , payload : el})
}
// const sumProduct = () => {
//     dispatch({type:"SUM_PRODUCT", payload : el})
// }
const [quantity, setQuantity ]= useState(el.count)
    const [price , setPrice] = useState(el.price)
    useEffect(() => {

    } , [])
    return (

        <tr>
            <th scope="col" className="px-6 py-3">
                <img src={el.image} width={120} alt=""/>
            </th>
            <th scope="col" className="px-6 py-3">
                {el.title}
            </th>
            <th scope="col" className="px-6 py-3">
                      {quantity} /  {price}
                <button className={"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}
                        onClick={ () => {
               setQuantity(
                   quantity === 1 ? quantity : quantity - 1
               )
                   setPrice(
                       price === el.price ? el.price : price - el.price
                   )
                }} style={{
                            outline : "none" ,
                            margin : "0 0 0 20px"
                         }}>-</button>

                <button className={"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}
                        onClick={() => {
                            setQuantity(
                                quantity + 1
                            )
                            setPrice(
                                price + el.price
                            )

                        } } style={{
                    outline : "none" ,
                    margin : "0 20px"
                }}>+</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button style={{
                  padding : "10px 20px" ,
                  background : "red" ,
                  borderRadius : " 10px"
              }}
                      onClick={delProduct}
              >DELETE</button>
            </th>
            <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
            </th>
        </tr>

    );
};

export default BasketCard;