import CocktailCard from "./CocktailCard";

const CocktailList=({cocktails})=> {
    return (
     <div className={'container'}>
         <div className={'row'}>
             {
                 cocktails.map(cocktail=>
                     <div
                         key={cocktail.idDrink}
                         className={'col-3'}
                     >
                         <CocktailCard cocktail={cocktail}/>
                     </div>
                 )
             }
         </div>
     </div>
    )
}

export default CocktailList;