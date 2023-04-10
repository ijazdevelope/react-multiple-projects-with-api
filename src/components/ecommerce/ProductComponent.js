import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../scss/components/ecommerce/product/product.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ImageSkeleton from './ImageSkeleton';


const ProductComponent = () => {

    const state = useSelector(state => state.ProductReducer?.products);

    const renderList = state?.map(product => {
        const { id, category, image, price, title } = product;
        return (
            <SkeletonTheme baseColor="#d9d1d1" highlightColor="#444">
                <div key={id} className="col d-flex flex-column">
                    <Link className='d-flex flex-grow-1 text-decoration-none' to={`/product/${id}`}>
                        <div className="card d-flex flex-column flex-grow-1 p-3 overflow-hidden">
                            <ImageSkeleton src={image} />
                            {/* <p className='c-skeleton'>
                                <Skeleton count={3} />
                            </p>
                            <img src={image} className="card-img-top c-product__img" alt="product-img" /> */}
                            <div className="card-body pb-0 d-flex flex-column justify-content-end">
                                <h5 className="card-title text-dark text-capitalize">{title}</h5>
                                <strong className="card-text text-dark">${price}</strong>
                                <p className='text-secondary text-capitalize m-0'>{category}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </SkeletonTheme>
        )
    })


    return (
        <>
            <h3 className='my-3'>All Products</h3>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 pb-4 c-product">
                {renderList}
            </div>
        </>
    )
}

export default ProductComponent
