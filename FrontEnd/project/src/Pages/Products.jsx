/* eslint-disable no-unused-vars */
import React from 'react';
import Productdisp from '../Components/ProductDisplay/Productdisp';
import { all_prod } from '../assets/product';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';

const Products = () => {
    const { productId } = useParams();
    const product = all_prod.find((x) => x.id === Number(productId));

    return (
        <div>
            <BreadCrums Product={product} />
            <Productdisp Product={product} />
        </div>
    );
}

export default Products;
