import {useState} from "react";
import axios from "axios";
import CocktailList from "../components/CocktailList";

const SearchPage=()=> {
    const [searchInput, setSearchInput]=useState('')
    const [search, setSearch]=useState([])

    const handleChange=(e)=> {
        setSearchInput(e.target.value)
    }

    const handleSubmit=()=> {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(({data})=>setSearch(data.drinks))
    }
    return (
        <div>
            <div className={'container'}>
                <h1 style={{marginTop: '30px'}}>Search page</h1>
                <div className={'search-wrapper'}>
                    <input className={'searchInput'} onChange={handleChange} type="text" placeholder={'Search...'}/>
                    <button className={'searchBtn'} onClick={handleSubmit}>Search</button>
                </div>
                <CocktailList cocktails={search}/>
            </div>
        </div>
    )
}

export default SearchPage;