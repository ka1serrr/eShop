import React, {FC, useEffect, useState} from 'react';
import styles from './home.module.scss';
import {ProductService} from "../../services/ProductService";
import {useQuery} from "@tanstack/react-query";
import {ProductItem} from "../../UI/product-item/ProductItem";
import {Layout} from "../../UI/layout/Layout";


export const Home: FC = () => {

    const {data:products, isError, isLoading} = useQuery(['products'], () => ProductService.getProducts(), {
        select: ({products}) => products
    })


    return (
        <Layout title='Shop the collection'>
            <div className={styles.containers}>

                {isError && <div className='text-red-500'>{isError}</div>}
                {isLoading ?(
                    <div className='text-blue-400 text-2xl'>Loading...</div>

                    ): products?.length ? (
                        <div className={styles.wrapper}>
                            {products?.map(product => (
                            <ProductItem
                                product={product}
                                key={product.id}/>
                            ))}
                        </div>
                        ) : <div >Products not found </div>
                }
            </div>
        </Layout>
    );
};

