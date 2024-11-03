import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"
import { HomeImg, ImgDiv } from './Home.style';
import homeSvg from "../../assets/home.svg"

const Home = () => {

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const [query, setQuery] = useState("chıcken");
  const [selectedMeal, setSelectedMeal]= useState("dinner");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  

  const getData= async() => {
if (query){
    try {
      const {data} = await axios(url);
      setRecipes(data.hits);
    }catch(error) {
      console.log(error)
    }
      }else{
        alert("Fill the form")
      }
};
    console.log(recipes)
  //useEffect(() => {
  //  getData()
  //}, [])


  const url = `https://api.edamam.com/search?q=${query}
  &app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


  return (
    <div>
      <Header 
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes && 
      <ImgDiv>
      <HomeImg src={homeSvg}/>
      </ImgDiv>}
      


      <Cards/>
    </div>
  );
}

export default Home;
