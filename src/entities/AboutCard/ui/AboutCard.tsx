import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Github from 'shared/assets/icons/github.svg?react'
import Telegram from 'shared/assets/icons/telegram.svg?react'
import Mail from 'shared/assets/icons/mail.svg?react'
import User from 'shared/assets/icons/user.svg?react'

import styles from './AboutCard.module.scss'

interface IProps {
    id: number,
    img: string,
    name: string,
    surname: string,
    post: string,
    github: string,
    githubUrl: string,
    telegram: string,
    telegramUrl: string,
    mail: string,
    mailUrl: string,
}

export const AboutCard: FC<IProps> = ({ img, name, surname, post, github, telegram, mail, githubUrl, telegramUrl, mailUrl }) => {
    return (
        <article className={styles.aboutCard}>
            <div className={styles.aboutCard__img}>
                <img src={img} alt="Foto" className={styles.aboutCard__img__image} />
            </div>
            <div className={styles.aboutCard__info}>
                <h2 className={styles.aboutCard__info__text}>
                    {name} {surname}<br />
                    <span className={styles.aboutCard__info__text__span}>{post}</span>
                </h2>
                <div className={styles.line}></div>
                <ul className={styles.socials}>
                    <li className={styles.socials__item}>
                        <NavLink to={githubUrl} className={styles.socials__link}>
                            <Github className={styles.socials__icon} />
                            {github}
                        </NavLink>
                    </li>
                    <li className={styles.socials__item}>
                        <NavLink to={telegramUrl} className={styles.socials__link}>
                            <Telegram className={styles.socials__icon} />
                            {telegram}
                        </NavLink>
                    </li>
                    <li className={styles.socials__item}>
                        <NavLink to={mailUrl} className={styles.socials__link}>
                            <Mail className={styles.socials__icon} />
                            {mail}
                        </NavLink>
                    </li>
                </ul>

            </div>



        </article>
    )
}