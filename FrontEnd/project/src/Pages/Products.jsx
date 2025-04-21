/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState } from 'react';
import Productdisp from '../Components/ProductDisplay/Productdisp';
import { all_prod } from '../assets/product';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';

const Products = () => {
    const { productId } = useParams();
    // const product = all_prod.find((x) => x.id === Number(productId));
    const [Product, setProduct] = useState([]);
    
    const fetchProducts = async() => {
        try{
            const fetchProd = await fetch(`http://localhost:5000/api/products/get/${productId}`);

            const data = await fetchProd.json();
            console.log(data);
            setProduct(data);
        }
        catch(err){
            console.log(err);
        }
    }



    useEffect(() => {
        console.log("hii")
        fetchProducts();
    }, [])

    return (
        <div>
            <BreadCrums Product={Product} />
            <Productdisp Product={Product} />
        </div>
    );
}

export default Products;
