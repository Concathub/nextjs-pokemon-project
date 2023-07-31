import React from "react";
import { Pokemon } from "@/types";
import Link from "next/link";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">Pokemon List</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.id}
              className="border rounded p-4 flex flex-col items-center"
            >
              <Link href={`/pokemon/${pokemon.name}`}>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-32 h-32 object-contain mb-2"
                />
                <span>{pokemon.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonList;
