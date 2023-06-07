import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = ()=>{
    return(
        <div>
            <SearchBar/>
            <h1>Esta es la vista de home</h1>
        <CardsContainer/>
        </div>
    )
}

export default Home;