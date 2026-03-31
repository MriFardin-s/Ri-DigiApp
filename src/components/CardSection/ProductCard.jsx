import React from 'react';
import { useState } from 'react';

const ProductCard = ({ product,carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false)
    const handleIsBuy = () => {
        setIsBuy(!isBuy)
        setCarts([...carts,product])
    }
    return (

        <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">


            <span className="absolute top-6 right-6 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                {product.tag}
            </span>



            <div className="">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-2">
                    <img src={product.img} alt='' className="w-full h-full object-contain" />
                </div>

                <h3 className="text-2xl font-extrabold text-[#101727] mb-4">
                    {product.name}
                </h3>
                <p className="text-[#627382] font-normal text-base leading-relaxed mb-4 ">
                    {product.description}
                </p>

                <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#101727]">${product.price}</span>
                    <span className="text-[#627382] ml-1">/Mo</span>
                </div>

                <div className="space-y-3 mb-8">
                    {product.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2 text-lg">✓</span>
                            <span className="text-sm font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="mt-auto pt-4">
                <button onClick={handleIsBuy} className={`w-full ${
                    isBuy
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#6D28D9] text-[#FFFFFF]"}
                        
                        text-[#FFFFFF] font-bold py-4 rounded-2xl transition-colors`}>

                    {isBuy ? "add to Cart" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;