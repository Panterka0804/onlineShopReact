import React from "react";
import styles from "./ShowFullItem.module.scss";
import { useAppContext } from "../../useAppContext";

export default function ShowFullItem(){

    const {fullItem, onShowItem, addToOrder} = useAppContext();

    return(
        <div className={styles.fullItem}>
            <div>
                <img src={"./images/"+fullItem.img} onClick={()=>onShowItem(fullItem)} alt="Error" />
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <b>{fullItem.price} руб.</b>
                <div className={styles.addToCart} onClick={()=>addToOrder(fullItem)}>+</div>
            </div>
        </div>
    );
}