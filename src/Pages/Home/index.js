import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchPokemons } from "../../Api/index";
import { store } from "../../index";
import "./home.scss";
import logo from "../../logo.svg"; 
import Pagination from "react-js-pagination";
import InputSearc from "../../Components/InputSearch";
import {relocate} from '../../Utils'

function Home() {
  const pokemonData = useSelector((state) => state.PokemonReducer);
  const [page, setPage] = useState(1);
  const [paginatedPokemons, setPaginatedPokemons] = useState([]);
  const [value, setValue] = useState("");
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [messageIfEmpty, setMessageIfEmpty] = useState("");
  const history = useHistory();
  useEffect(() => {
    store.dispatch(fetchPokemons());
  }, []);
  useEffect(() => {
    paginate(1);
  }, [filterPokemon]);
  useEffect(() => {
    paginate(1);
  }, [pokemonData]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    paginate(pageNumber);
  };

  const paginate = (page) => {
    if (pokemonData.pokemons.length !== 0) {
      let limit = 6;
      const offset = (page - 1) * limit;
      const newArray =
        filterPokemon.length === 0
          ? pokemonData.pokemons.slice(offset, offset + limit)
          : filterPokemon.slice(offset, offset + limit);
      setPaginatedPokemons(newArray);
    }
  };

  const handleChange = (e, callback) => {
    setValue(e.target.value);
    const filterData = pokemonData.pokemons.filter((pokemon) => {
      return (
        pokemon["name"].toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
      );
    });
    callback(filterData);
    setMessageIfEmpty(filterData.length === 0 ? "No such Pokemon!" : "");
  };

  return pokemonData["loading"] ? (
    <img className="App-logo" src={logo} alt="loading..." />
  ) : pokemonData["error"] ? (
    <h2>{pokemonData["error"]}</h2>
  ) : (
    <div className="Pokemons">
      <h2>Pokemons</h2>
      <InputSearc
        handleChange={(e) => handleChange(e, setFilterPokemon)}
        value={value}
      />
      {messageIfEmpty ? (
        <h3>{messageIfEmpty}</h3>
      ) : (
        <div className="mainPokemonInfo">
          {paginatedPokemons.length !== 0 &&
            paginatedPokemons.map((ex) => {
              return (
                <div
                  className="pokemonInfo"
                  key={ex.id}
                  onClick={() => relocate(ex.id, history)}
                >
                  <img src={ex.image} alt={`${ex.name} image`} />
                  <p>{ex.name}</p>
                </div>
              );
            })}
        </div>
      )}
      {pokemonData.pokemons.length !== 0 && !messageIfEmpty && (
        <div className="pagi">
          <Pagination
            activePage={page}
            itemsCountPerPage={6}
            totalItemsCount={
              filterPokemon.length === 0
                ? pokemonData.pokemons.length
                : filterPokemon.length
            }
            pageRangeDisplayed={10}
            onChange={handlePageChange}
            itemClassLast={"lastPage"}
            hideFirstLastPages={true}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
