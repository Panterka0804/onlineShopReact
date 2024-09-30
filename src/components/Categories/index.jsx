import  React, {useContext} from "react";
import styles from "./Categories.module.scss";
import { useAppContext } from "../../useAppContext";

export default function Categories(){

    const {chooseCategory}=useAppContext();

    const categories =[
        {
            key: "all",
            name: "Все товары"
        },
        {
            key: "Тематические",
            name: "Тематические"
        },
        {
            key: "Животные и птицы",
            name: "Животные и птицы"
        },
        {
            key: "Символ года",
            name: "Символ года"
        },
        {
            key: "Напитки",
            name: "Напитки"
        },
        {
            key: "Десерт",
            name: "Десерт"
        },
        {
            key: "Цветы",
            name: "Цветы"
        }
    ];

    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}