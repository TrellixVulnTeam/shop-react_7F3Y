import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';
import { withRouter } from 'react-router-dom';

const ProductView = (props) => {
    const product = props.product;

    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    const check = () => {
        let res = true;

        if (color === undefined) {
            alert('Vui long chon mau sac');
            return false;
        }
        if (size === undefined) {
            alert('Vui long chon kich co');
            return false;
        }
        return true;
    };

    const addToCart = () => {
        if (check()) {
            console.log({ color, size, quantity });
        }
    };

    const goToCart = () => {
        if (check()) props.history.push('/cart');
    };

    useEffect(() => {
        setPreviewImg(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt=""></img>
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt=""></img>
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg}></img>
                </div>
                <div className={`product__description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product__description__title">Chi tiết sản phẩm</div>
                    <div
                        className="product__description__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product__description__toggle">
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {descriptionExpand ? 'Thu gon' : 'Xem them'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <div className="product__info__title">{product.title}</div>

                <div className="product__info__item">
                    <span className="product__info__item__price">{numberWithCommas(product.price)}</span>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">Màu sắc</div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) => {
                            return (
                                <div
                                    className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setColor(item)}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">Kích cỡ</div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => {
                            return (
                                <div
                                    className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setSize(item)}
                                >
                                    <div className="product__info__item__list__item__size">{item}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">So luong</div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"> </i>
                        </div>
                        <div className="product__info__item__quantity__input">{quantity}</div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"> </i>
                        </div>
                    </div>
                </div>

                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>Thêm vào giỏ</Button>
                    <Button onClick={() => goToCart()}>Mua ngay</Button>
                </div>
            </div>
        </div>
    );
};

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
