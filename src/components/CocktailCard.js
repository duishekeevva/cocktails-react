import {Link} from "react-router-dom";

const CocktailCard=({cocktail})=> {
    return (
        <div className={'box'}>
            <img src={cocktail?.strDrinkThumb} alt=""/>
            <h5>
                <Link to={`/cocktail/${cocktail.idDrink}`}>
                    {cocktail?.strDrink}
                </Link>
            </h5>
            <p>{cocktail?.strCategory}</p>
        </div>
    )
}

export default CocktailCard;