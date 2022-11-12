import React from 'react';
import {Layout} from "../../UI/layout/Layout";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

export const Cart = () => {

    const {items} = useTypedSelector(state => state.cart);

    const {removeFormCart} = useActions()

    console.log(items)
    return (
        <div>
            <Layout>
                <h1>Cart</h1>
            </Layout>
        </div>
    );
};
