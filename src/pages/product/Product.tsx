import React from 'react';
import {useParams} from "react-router-dom";
import {Layout} from "../../UI/layout/Layout";
import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../../services/ProductService";
import {Button} from "../../UI/button/Button";

import styles from './product.module.scss'
import {Gallery} from "./gallery/Gallery";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Product = () => {
    const {id} = useParams()

    const {data:product, isError, isLoading} = useQuery(['products', id], () => ProductService.getProductById(id  || ''))
    const {removeFormCart, addToCart} = useActions()
    const {items} = useTypedSelector(state => state.cart);

    const isInCart = items.some(item => item.id === Number(id))

    if (!product) return <Layout><h2 className={styles.title}>Product is not found</h2></Layout>


    return (
        <Layout>
            <div className={styles.containers}>
                {isLoading && <div>Loading...</div>}

                <Gallery images={product?.images || []}/>
                <h2 className={styles.title}>{product?.title}</h2>

                <div className={styles.price}>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0
                    }).format(product.price)}
                </div>
                <Button
                    onClick={() => isInCart ? removeFormCart(Number(id)) : addToCart(product)}
                >
                    {isInCart
                        ? 'This product is already in cart'
                        : 'Add to cart'
                    }
                </Button>
            </div>
        </Layout>
    );
};

