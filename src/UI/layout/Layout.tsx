import React, {FC, PropsWithChildren} from 'react';
import styles from './layout.module.scss'
import {Link} from "react-router-dom";

export const Layout: FC <PropsWithChildren<{title?: string}>> = ({title,children}) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <nav>
                    <Link to={'/'} className={styles.link}>Home</Link>
                    <Link to={'/cart'} className={styles.link}>Cart</Link>
                </nav>
            </header>
            {title && <h1 className={styles.title}>{title}</h1>}
            {children}
        </div>
    );
};

