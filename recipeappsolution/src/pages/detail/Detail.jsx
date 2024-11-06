import React from 'react'
import {DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngContainer, OtherPart } from './Detail.style'
import {useLocation} from  "react-router-dom";
import diet from "../../assets/diet.svg";


const Detail = () => {
  const {state} = useLocation()
  console.log("state geldi mi:" , state);
  return (
      <DetailContainer>
            <HeaderContainer>
              <h1>{state.label}</h1>
              <img src={diet} alt={diet} />
            </HeaderContainer>



            <DetailPart>
              <OtherPart>
                <h4>
                  NUTRIENTS
                </h4>


                  <p>
                    {state.totalNutrients.CA.label} : {' '}
                    {Math.round(state.totalNutrients.CA.quantity)}
                    {state.totalNutrients.CA.unit}
                  </p>

                  <p>
                    {state.totalNutrients.CHOCDF.label} : {' '}
                    {Math.round(state.totalNutrients.CHOCDF.quantity)}
                    {state.totalNutrients.CHOCDF.unit}
                  </p>

                  <p>
                    {state.totalNutrients.CHOLE.label} : {' '}
                    {Math.round(state.totalNutrients.CHOLE.quantity)}
                    {state.totalNutrients.CHOLE.unit}
                  </p>

                  p


              </OtherPart>
            </DetailPart>

      </DetailContainer>

  )
}

export default Detail
