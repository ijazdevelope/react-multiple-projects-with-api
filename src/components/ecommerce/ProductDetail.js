import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../../scss/components/ecommerce/product/product.scss';
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/Actions';
import Button from '../Button';

const ProductDetail = () => {

    const dispatch = useDispatch();
    const { productId } = useParams();
    const protDetail = useSelector(state => state?.ProductDetailReducer);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log('Error', err));
        dispatch(selectedProduct(response?.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div>
            {protDetail?.state === undefined ? (
                <p className='text-secondary'>Loading.....</p>
            ) : (
                <>
                    {protDetail?.state?.map(product => {
                        return (
                            <>
                                <div key={product?.id} className="card mb-3 p-4 rounded-0 c-product-detail">
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-md-4">
                                            <img src={product?.image} className="img-fluid rounded-start h-75 d-block m-auto m-md-0 c-product-detail__img" alt="prduct-detail-img" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body c-wrapper c-prouduct-detail">
                                                <div className='d-flex'>
                                                    {/* <span className='fa fa-arrow-left'></span> */}
                                                    <Link className='btn btn-primary mb-3 c-prouduct-detail__backt-link' to='/products'>Back to Products</Link>
                                                </div>
                                                <h5 className="card-title">{product?.title}</h5>
                                                <p className="card-text"><small className="text-muted">Ratings {product?.rating?.rate}</small></p>
                                                <p className="card-text"><small className="c-product-detail__price">Rs {product?.price}$</small></p>
                                                <p className="card-text col-12 col-md-6"> {product?.description} </p>
                                                <Button className="btn btn--add-to-cart" value="add to cart"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </>
            )
            }
        </div >
    )
}

export default ProductDetail;
