import React,{ useState } from "react";
import styles from "./Header.module.scss";
import { SlBasket } from "react-icons/sl";
import Orders from "../Orders/index.tsx";
import { useAppContext } from "./../../useAppContext.tsx";

const Header:React.FC=()=>{
    const {orders} = useAppContext();

    let [cartOpen, setCartOpen]=useState<boolean>(false);

    const showOrders=()=>{
        let summa=0;
        orders.forEach(el=>summa+=Number.parseFloat(el.price));
        return(
            <div>
                {orders.map(el=>(
                    <Orders key={el.id} item={el}/>
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} руб.</p>
            </div>
        );
    }
    
    const showNothing=()=>{
        return(
            <div className={styles.empty}>
                <h2>Корзина пуста</h2>
    
            </div>
        );
    }

        return(
        <header>
            <div>
                <span className={styles.logo}>Мыло ручной работы</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <SlBasket onClick={()=>setCartOpen((prevCartOpen)=>!prevCartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>

                {cartOpen && (
                    <div className={styles.shopCart}>
                        {orders.length>0 ? 
                            showOrders() : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;