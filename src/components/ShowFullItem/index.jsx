import React from "react";
import styles from "./ShowFullItem.module.scss";

export default function ShowFullItem(props){
    return(
        <div className={styles.fullItem}>
            <div>
                <img src={"./images/"+props.item.img} onClick={()=>props.onShowItem(props.item)} alt="Error" />
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price} руб.</b>
                <div className={styles.addToCart} onClick={()=>props.onAdd(props.item)}>+</div>
            </div>
        </div>
    );
}