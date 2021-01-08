import { pokemons } from "./db";
const resolvers = {
  Query: {
    hello: () => "world!",
    pokemon: (parent, { id }, context, info) => {
      return pokemons.find((pokemon) => pokemon.id === id);
    },
    pokemonByName: (parent, { name }, context, info) => {
      return pokemons.find((pokemon) => pokemon.name === name);
    },
    pokemons: (parent, args, context, info) => {
      return pokemons;
    },
  },
};

export default resolvers;
