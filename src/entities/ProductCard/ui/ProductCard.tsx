import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MyButton } from 'shared/ui/MyButton'
import styles from './ProductCard.module.scss'

interface IProps {
    title: string,
    subtitle: string,
    ISBN13: string,
    price: string,
    image: string,
}

// Карточка товара

export const ProductCard: FC<IProps> = ({ title, subtitle, ISBN13, price, image}) => {
    return (
        <article className={styles.productCard} id={ISBN13}>
            <NavLink to={''}>
                <div>
                    <img src={image} alt="Фото Товара" className={styles.productCard__image} />
                    <h4 className={styles.productCard__title}>{title}</h4>
                    <p className={styles.productCard__subtitle}>{subtitle}</p>
                    <p className={styles.productCard__price}>{price}</p>
                </div>
            </NavLink>
            <div className={styles.productCard__popup}>
                <p className={styles.productCard__price}>{price}</p>
                <NavLink to={''}>
                    <h4 className={styles.productCard__title}>{title}</h4>
                    <p className={styles.productCard__subtitle}>{subtitle}</p>
                </NavLink>

                {/* Кнопка добавляющая продукт в корзину */}

                <MyButton className={styles.productCard__button}>
                    {/* Icon */}
                    Add to Cart
                </MyButton>
            </div>
        </article>
    )
}