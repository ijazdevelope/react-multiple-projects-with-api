import React from 'react';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ImageSkeleton = ({ src }) => {
    const [skeleton, setSkeleton] = useState(false);

    return (
        <>
            {!skeleton &&
                <p className='c-product__skeleton'>
                    <Skeleton count={3} />
                </p>
            }
            <img onLoad={() => setSkeleton(true)} src={src} className="card-img-top c-product__img" alt="product-img" />

        </>
    )
}

export default ImageSkeleton
