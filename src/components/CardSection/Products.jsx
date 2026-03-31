import React from 'react';

import { use } from 'react';
import ProductCard from './ProductCard';






const Products = ({ productsPromise,carts, setCarts }) => {
    const products = use(productsPromise);

    

    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 mx-auto ">
            {products.map(product => (
                
                <ProductCard setCarts ={setCarts} carts ={carts} key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;