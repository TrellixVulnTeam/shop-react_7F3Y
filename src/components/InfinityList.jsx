import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import ProductCard from './ProductCard';

const InfinityList = (props) => {
    const listRef = useRef(null);

    const [data, setData] = useState(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    return (
        <div className={listRef}>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {data.map((item, index) => {
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
        </div>
    );
};

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default InfinityList;
