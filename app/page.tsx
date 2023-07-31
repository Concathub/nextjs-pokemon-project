"use client";
import PokemonList from "@/components/pokemonlist/page";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        const pokemonList = data.results.map((pokemon: Pokemon) => {
          const id = pokemon.url.split("/")[6];
          return {
            id: id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        setPokemons(pokemonList);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching Pokemon data");
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}
