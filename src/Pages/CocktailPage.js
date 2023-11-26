import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import IngredientList from "../components/IngredientList";

const MealPage = () => {
    const {idDrink} = useParams()
    const [cocktail, setCocktail] = useState({})
    const [ingredients, setIngredients] = useState([])

    const filterIngredients = (cocktail) => {
        for (const key in cocktail) {
            if (key.startsWith("strIngredient") && cocktail[key] !== null && cocktail[key] !== "") {
                setIngredients(prev => [...prev, cocktail[key]])
            }
        }
    }
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then(({data}) => {
                filterIngredients(data.drinks[0])
                setCocktail(data.drinks[0])
            })
    }, [idDrink])
    return (
        <>
            <div className={'container'}>
                <div className="row">
                    <div className="col-5">
                        <div className="box">
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} alt=""/>
                            <iframe style={{width:'100%'}} src={`https://www.youtube.com/embed/${cocktail
                                .strYoutube?.slice(cocktail.strYoutube.indexOf('=')
                                    + 1)
                            }`}
                                    frameBorder="4"></iframe>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="box">
                            <h2>Ingredients</h2>
                            <IngredientList ingredients={ingredients}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MealPage;