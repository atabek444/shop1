import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(s => s.favorite)
    return (
        favorite.length === 0 ? <h1 className="text-center p-[20px] w-[100%] bg-red-700 text-blue-100 text-[25px]">В корзине ничего нет !</h1> :
        <div className={"container py-20"} style={{
            width : "90%" ,
            margin : "0 auto"
        }}>
      <div className="flex flex-wrap gap 24" style={{
          display : "flex" ,
          flexWrap : "wrap" ,
          gap : "5rem"

      }}>
          {favorite.map((el) => <ProductCard el={el}/>)}

      </div>
        </div>
    );
};

export default Favorite;