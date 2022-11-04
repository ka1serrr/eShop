import React, {FC, useEffect, useState} from 'react';
import styles from './home.module.scss';
import {ProductService} from "../../services/ProductService";


export const Home: FC = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     ProductService.getProducts()
    //         .then(data => setProducts(data.products))
    //         .catch(error => setError(error))
    //         .finally(() => setIsLoading(false))
    // }, [])

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await ProductService.getProducts()
                console.log(data)
                setProducts(products)
            }
            catch (error: any){
                setError(error)
            }
            finally {
                setIsLoading(false)
            }
        }

        fetch()
    }, [])

    return (
        <div>
            {error && <div className='text-red-500'>{error}</div>}
            {isLoading ?
                <div className='text-blue-400 text-2xl'>Loading...</div>  :

                products.length ? products.map(product => (
                <div key={product.id}>
                    {/*@ts-ignore*/}
                    {product.title}
                </div>)) : <div >Products not found </div>
            }
        </div>
    );
};

