import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(1);

    const [hasPrime, setHasPrime] = useState(true);

    useEffect(() => {
        setRating(
            Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        );
        setHasPrime(Math.random() < 0.5);
    }, []);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <div style={{ display: 'flex', justifyContent:'center' }}>
                <Image
                    src={image}
                    width={200}
                    height={200}
                    style={{objectFit:"contain", height: "200px"}}    
                    alt=""           
                />
            </div>


            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}

            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="EUR" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/f90" alt="" />
                    <p className="text-xs text-gray-500">Envío al dia siguiente gratis</p>
                </div>
            )}
            <button className="mt-auto button">Añadir al carrito</button>
        </div>
    );
}

export default Product
