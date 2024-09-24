import React,{ useState } from "react";
import styles from "./Header.module.scss";
import { SlBasket } from "react-icons/sl";

export default function Header(){
    let[cartOpen, setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className={styles.logo}>Мыло ручной работы</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <SlBasket onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>

                {cartOpen && (
                    <div className={styles.shopCart}>

                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}