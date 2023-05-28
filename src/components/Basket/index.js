import React from 'react';
import { useSelector} from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket , } = useSelector(state => state.basket)
    const total = basket.reduce((acc,el) => {
        return acc + el.count * el.price
    },0)
    return (

        basket.length === 0 ? <h1 className="text-center p-[20px] w-[100%] bg-red-700 text-blue-100 text-[25px]">В корзине ничего нет !</h1> :
            <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="" style={{
                        background : "#181818"
                    }}>
                    {
                        basket.map(el => <BasketCard el={el}/>)
                    }
                    </tbody>
                </table>
                <div>
                    {/*{total}*/}
                </div>
            </div>



    );
};

export default Basket;