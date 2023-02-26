import React from 'react'
import style from './header.module.css'

export const Header = ({ usd, eur }) => {


    return (
        <div className={style.header}>
            <ul className={style.list}>
                <li>usd: <span>{usd}</span></li>
                <li>eur: <span>{eur}</span></li>
            </ul>
        </div>
    )
}
