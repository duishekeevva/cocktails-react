import CocktailCard from "./CocktailCard";

const CocktailList=({cocktails})=> {
    return (
     <>
         <div className={'row'}>
             {
                 cocktails.map(cocktail=>
                     <div
                         key={cocktail.idDrink}
                         className={'col-4'}
                     >
                         <CocktailCard cocktail={cocktail}/>
                     </div>
                 )
             }
         </div>
     </>
    )
}

export default CocktailList;