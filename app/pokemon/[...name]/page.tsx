"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PokemonData {
  id: number;
}

interface PokemonDetailsProps {
  params: {
    name: string;
  };
}

const PokemonDetails = ({ params: { name } }: PokemonDetailsProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (e) {
        console.error("Error fetching Pokemon data");
      }
    };

    fetchPokemonData();
  }, [name]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-semibold">Pokemon Details</h2>
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 object-contain mb-2"
        />
        <p className="text-xl font-semibold">Name: {name}</p>
      </div>
      <div>
        <Link href="/">
          <p className="text-blue-500 hover:underline">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
