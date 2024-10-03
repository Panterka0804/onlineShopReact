import React from "react";
import styles from "./Orders.module.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props{
    item:any;
}

const Orders:React.FC<Props>=({item})=>{

    const {deleteOrder} = useAppContext();

    return(
        <div className={styles.item}>
            <img src={"./images/"+ item.img} alt="Error" />
            <h2>{item.title}</h2>
            <b>{item.price} руб.</b>
            <RiDeleteBinLine onClick={()=>deleteOrder(item.id)} className={styles.deleteIcon}/>
        </div>
    );
};

export default Orders;