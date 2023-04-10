import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../../redux/actions/Actions';

const ProductListing = () => {

    const state = useSelector(state => state.allProducts?.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log('Error occured due to internet connection or api response', err));
        dispatch(setProducts(response?.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
