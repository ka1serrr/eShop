import React, {FC, PropsWithChildren} from 'react';
import styles from './layout.module.scss'

export const Layout: FC <PropsWithChildren<{title?: string}>> = ({title,children}) => {
    return (
        <div className={styles.layout}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {children}
        </div>
    );
};

