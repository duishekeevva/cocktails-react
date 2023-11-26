import {Link} from "react-router-dom";

const IngredientList =({ingredients})=> {
    return (
        <div className={'row'}>
            {
                ingredients.map((ingredient, idx)=>
                    <div className={'col-2'} key={idx+ingredient}>
                        <div className={'box'}>
                            <h5>
                                <Link className={'link-ingredient'} to={`/ingredient/${ingredient}`}>
                                    {ingredient}
                                </Link>
                            </h5>
                            <img className={'ingredient-img'}
                                 src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`} alt=""/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default IngredientList;