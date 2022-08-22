import React from 'react';
import productData from '../assets/fake-data/product';
import ProductView from '../components/ProductView';
import Button from './Button';

const ProductViewModal = () => {
    const product = productData.getProductBySlug('quan-jean-phong-cach-18');
    return (
        <div className={`product-view__modal ${product === undefined ? '' : ''}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}></ProductView>
                <div className="product-view__modal__content__close">
                    <Button size="sm">Dong</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
