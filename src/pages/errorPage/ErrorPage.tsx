import React, {FC} from 'react';
import styles from './errorPage.module.scss'
export const ErrorPage: FC = () => {
    return (
        <div className={styles.containers}>
            <h2 className={styles.title}>Page does not exist</h2>
        </div>
    );
};

