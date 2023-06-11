import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getPokemons} from "../../redux/actions";


const Home = ()=>{

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getPokemons())
}, []);



    return(
        <div>
            <SearchBar/>
            <h1>Esta es la vista de home</h1>
        <CardsContainer/>
        </div>
    )
}

export default Home;