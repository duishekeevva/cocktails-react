import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import Header from "./components/Header";
import MealPage from "./Pages/CocktailPage";
import IngredientPage from "./Pages/IngredientPage";
import CocktailPage from "./Pages/CocktailPage";

const App=()=> {
    return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/cocktail/:idDrink" element={<CocktailPage/>}/>
                    <Route path="/ingredient/:name" element={<IngredientPage/>}/>
                </Routes>
            </>
    )
}

export default App;