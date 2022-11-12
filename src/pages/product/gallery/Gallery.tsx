import React, {FC, useState} from 'react';
import styles from './gallery.module.scss'

import cn from 'clsx';

export const Gallery: FC<{ images: string[] }> = ({images}) => {
    const [currentIndex, setCurrentIndex]  = useState<number>(0)

    const newImages = images.slice(0, 4);

    return (
        <div className={styles.gallery}>
            <div style={{
                backgroundImage: `url(${images[currentIndex]})`
            }} className={cn(styles.image, styles.main)}
            />

            <div className={styles.list}>
                {newImages.map((image, index) => (
                    <button
                        key={image}
                        className={cn(styles.item, {
                        [styles.active]: index === currentIndex
                    })}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <div
                            style={{
                            backgroundImage: `url(${image})`
                        }}
                            className={styles.image}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

