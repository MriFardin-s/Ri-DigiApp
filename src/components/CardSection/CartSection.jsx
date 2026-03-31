import { ShoppingCart } from 'lucide-react';
import React from 'react';

const CartSection = ({ carts, handleRemove, setCarts }) => {
    const handleCheckout = () => {

        setCarts([]);

    };
    return (
        <div className="p-10 max-w-4xl mx-auto shadow-sm">
            <h1 className="text-2xl font-extrabold text-[#101727] mb-6">Your Cart</h1>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-4">

                {carts.length > 0 ? (
                    <>
                        {carts.map((cart) => (
                            <div
                                key={cart.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm">
                                        <img
                                            src={cart.img}
                                            alt={cart.name}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-[#101727]">
                                            {cart.name}
                                        </h2>
                                        <span className="text-[#627382] text-base font-medium">${cart.price}</span>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => handleRemove(cart.id)}
                                        className="text-[#FF3980] hover:text-red-700 font-bold text-base transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}


                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[#627382] font-normal text-base">Total:</span>
                                <span className="text-2xl font-bold text-[#101727]">
                                    ${carts.reduce((sum, cart) => sum + Number(cart.price), 0)}
                                </span>
                            </div>
                            <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#6D28D9] text-[#FFFFFF] font-bold py-4 rounded-2xl shadow-lg transition-all">
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                ) : (

                    <div className="py-20 text-center items-center">
                        <div className="text-[420px] mb-8 flex justify-center w-full">
                            <ShoppingCart className='text-gray-300 w-24 h-24' />
                        </div>
                        <h2 className="text-xl font-bold text-gray-400">
                            Please Add a Cart
                        </h2>
                        <p className="text-gray-400 mt-2">Your shopping bag is empty!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSection;