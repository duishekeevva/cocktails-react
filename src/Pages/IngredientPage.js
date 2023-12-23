import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CocktailList from "../components/CocktailList";

const IngredientPage=()=>{
    const {name}=useParams()
    const [ingredient,setIngredient]=useState([])

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data})=>{
                setIngredient(data.drinks)
            })
    }, [])

    return (
        <div>
            <CocktailList cocktails={ingredient}/>
        </div>
    )
}

export default IngredientPage;