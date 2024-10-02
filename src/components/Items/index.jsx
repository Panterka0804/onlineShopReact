import React from "react";
import Item from "../Item";
import styles from "./Items.module.scss";
import { useAppContext } from "../../useAppContext";

export default function Items(){

const {currentItems} = useAppContext();

    return(
        <main>
            {currentItems.map(el=>(
                <Item key={el.id} item={el} />
            ))}
        </main>
    );
}