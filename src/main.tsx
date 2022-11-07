import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from "./pages/home/Home";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import {Product} from "./pages/product/Product";
import {Cart} from "./pages/cart/Cart";
import {ErrorPage} from "./pages/errorPage/ErrorPage";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products/:id' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Router>
    </QueryClientProvider>
)
