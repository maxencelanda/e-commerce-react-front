import starFilled from "../assets/etoile_fill.png"
import starHalf from "../assets/etoile_half.png"
import starEmpty from "../assets/etoile_empty.png"

import getProducts from "../API"
import { CartContext } from '../context/Cart'
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ d }) {
    
    const { addToCart } = useContext(CartContext)

    /* STARS */
    const starsArray = [];
    let title = d.title

    for (let i = 0; i < Math.floor(d.rating.rate); i++){
        starsArray.push(starFilled);
    }
    while (starsArray.length < 5){
        starsArray.push(starEmpty);
    }
    
    const listImg = starsArray.map((s, k) => 
        <img key={k} src={s}/>
    );

    /* Title length */
    if (title.length > 63){
        title = title.substring(0, 60) + "..."
    }

    return (
        <div className='border rounded-md bg-white shadow-lg overflow-hidden w-3/4 mb-10 px-2 pt-1 pb-2'>
            <img src={d.image} className='w-full min-h-64 max-h-80'></img>
            <p className='bold mt-10 font-bold'>{title}</p>
            <p>{d.price}€</p>
            <div className="flex w-1/12">
                {listImg.map((image) => 
                    image
                )}
                <p className="ml-2">({d.rating.count})</p>
            </div>
            <p className="text-center"><Link to="/cart"><button onClick={() => addToCart(d)} className="text-center mt-10 bg-black text-white font-semibold p-2 rounded-xl">ADD TO CART</button></Link></p>
        <p></p>
        </div>
    )
}
