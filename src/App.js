import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const AppContext = createContext();

export default function App() {

  const [items,setItems]=useState([
    {
      id:1,
      title:'Мыло Бойцовский клуб',
      img:'1.jpg',
      desc:'Оригинальное сувенирное мыло, ручной работы, вдохновленное культовым фильмом, с приятным ароматами нотами клубники, сахарной ваты и сливок.',
      category:'Тематические',
      price:'230'
    },
    {
      id:2,
      title:'Мыло Белый кролик',
      img:'2.jpg',
      desc:'Мыло “Белый Кролик” – это не просто средство гигиенического ухода, а настоящий сувенир, наполненный нежностью и заботой о коже. Изготовленное из отборных натуральных ингредиентов, таких как масло ши, экстракт алоэ вера и мед, оно придает коже мягкость и эластичность.',
      category:'Животные и птицы',
      price:'250'
    },
    {
      id:3,
      title:'Мыло Дракончик',
      img:'3.jpg',
      desc:'Привлекательное и уникальное мыло “Дракончик” – это не просто обычное мыло, а оригинальный сувенир, который принесет радость и удовольствие своему обладателю. Это идеальный подарок для тех, кто ценит необычные и запоминающиеся вещи.',
      category:'Символ года',
      price:'150'
    },
    {
      id:4,
      title:'Мыло Кружка пива',
      img:'4.jpg',
      desc:'Представляем уникальное мыло “Кружка Пива” — идеальный мужской подарок, который сочетает в себе элегантность и оригинальность. Это не просто мыло; это настоящее произведение искусства, созданное для ценителей. Форма мыла в точности повторяет облик стильной кружки пива, что делает его неотразимо привлекательным для любителей пенного напитка.',
      category:'Напитки',
      price:'190'
    },
    {
      id:5,
      title:'Мыло Дельфин',
      img:'5.jpg',
      desc:'Ароматическое мыло ручной работы в виде дельфина. Мыло сувенирное, ручной работы, прекрасный подарок по любому поводу. Оно приготовлено из высококачественной основы, натуральными премиальными ароматическими маслами.',
      category:'Животные и птицы',
      price:'170'
    },
    {
      id:6,
      title:'Мыло Тарталетка с малиной',
      img:'6.jpg',
      desc:'Привлекательное сувенирное мыло в форме тарталетки с малиновым ароматом — идеальный подарок для любителей роскошных и ухоженных ванных процедур. Это уникальное мыло не только прекрасно ухаживает за кожей, но и обеспечивает неповторимый опыт благоухания. Мыло выполнено в форме тарталетки, придающей ему необычайный вид, что делает его прекрасным дополнением к ванной комнате или отличным сувениром. Изысканный аромат малины придает этому мылу особый шарм, наполняя воздух вокруг вас сладким и приятным ароматом.',
      category:'Десерт',
      price:'320'
    },
    {
      id:7,
      title:'Мыло Королевская кобра',
      img:'7.jpg',
      desc:'Мыло Королевская кобра – это уникальный аксессуар для вашей ванной комнаты и оригинальный подарок для ваших близких.',
      category:'Животные и птицы',
      price:'200'
    },
    {
      id:8,
      title:'Мыло Букет лаванды',
      img:'8.jpg',
      desc:'Ароматическое мыло ручной работы виде букетика лаванды. Мыло сувенирное, ручной работы, прекрасный подарок по любому поводу. Оно приготовлено из высококачественной основы, натуральными премиальными ароматическими маслами.',
      category:'Цветы',
      price:'310'
    },
    {
      id:9,
      title:'Мыло Тарталетка с мандаринами',
      img:'9.jpg',
      desc:'Мыло “Тарталетка с мандаринами” – уникальное ручной работы мыло, созданное с любовью и заботой о вашей коже. Это не просто средство для очищения, но и источник настоящего удовольствия благодаря своему нежному аромату и оригинальному дизайну.',
      category:'Десерт',
      price:'320'
    },
    {
      id:10,
      title:'Мыло Уточка',
      img:'10.jpg',
      desc:'Ароматическое мыло ручной работы в виде желтой уточки. Мыло сувенирное, ручной работы, прекрасный подарок по любому поводу. Оно приготовлено из высококачественной основы, натуральными премиальными ароматическими маслами.',
      category:'Животные и птицы',
      price:'150'
    },
  ]);

  const[orders,setOrders]=useState([]);

  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState({});

  useEffect(()=>{
    setCurrentItems(items);
  },[items]);

  const deleteOrder = (id)=>{
    setOrders(orders.filter((el)=> el.id !==id));
  }

  const addToOrder=(item)=>{
    if(!orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    } //добавление товаров только одного типа

     // setOrders([...orders,item]);
  }  //добавление товаров одного типа (без if неограниченное кол-во)

  const chooseCategory = (category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }else{
      setCurrentItems(items.filter((el)=>el.category===category));
    }
  }

  const onShowItem = (item) =>{
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <AppContext.Provider
      value={
      {
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem,
      }
    }
    >
    <div className="wrapper">
      <Header/>
      <Categories/>
      <Items/>
      {showFullItem && <ShowFullItem/>}
      <Footer/>  
    </div>
    </AppContext.Provider>
  );
}

