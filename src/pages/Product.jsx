import React, { useEffect } from 'react';

import productData from '../assets/fake-data/product';
import ProductView from '../components/ProductView';

import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import Helmet from '../components/Helmet';
import Section, { SectionTitle, SectionBody } from '../components/Section';

const Product = (props) => {
    const product = productData.getProductBySlug(props.match.params.slug);

    const relatedProducts = productData.getProducts(8);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={3} mdCol={2} smCol={1} gap={20}>
                        {relatedProducts.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    title={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                ></ProductCard>
                            );
                        })}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
