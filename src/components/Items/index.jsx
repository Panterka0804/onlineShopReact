import React from "react";
import Item from "../Item";
import styles from "./Items.module.scss";

export default function Items(props){
    return(
        <main>
            {props.allItems.map(el=>(
                <Item key={el.id} item={el} onShowItem={props.onShowItem} onAdd={props.onAdd}/>
            ))}
        </main>
    );
}