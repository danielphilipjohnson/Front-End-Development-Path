

type Pokemon {
 
  game_indices
  height
  held_items
  id
  is_default
  location_area_encounters
  moves
  name
  order
  species
  sprites
  stats
  types
  weight
}



types Sprites {
  back_default: String!
  back_female: String!
  back_shiny: String!
  back_shiny_female: String!
  front_default: String!
  front_female: String!
  front_shiny: String!
  front_shiny_female: String!
  other:[otherSprites]
  versions: [Versions]
}


types Versions {

  generation-i:[]
  generation-ii:[]
  generation-iii:[]
  generation-iv:[]
  generation-v:[]
  generation-vi:[]
  generation-vii:[]
  generation-viii:[]
}


held_items: []











































# ability query

query {
  pokemon(id: 1){
    id
    abilities{
      ability {
        name
        url
      }
      is_hidden
      slot
    }
    order
  }
}

# form query


query {
  pokemon(id: 1){
    id
    forms {
      name
      url
    }
  }
}

# game indices query
query {
  pokemon(id: 1){
    id
    game_indices {
      game_index
      version {
        name
        url
      }
    }
  }
}


# move query

query {
  pokemon(id: 1){
    id
    moves {
     move {
      name
      url
    }
      version_group_details {
        level_learned_at
        move_learn_method{
          name
          url
        }
        version_group {
          name
          url
        }
      }
    }
  }
}



# species query

query {
  pokemon(id: 1){
    id
   	species {
      name
      url
    }
  }
}



# sprites query
## problem with officalArtwork
query {
  pokemon(id: 1){
    id
   	sprites {
      back_default
      back_shiny
      back_shiny_female
      front_default
      front_female
      front_shiny
      front_shiny_female
      other {
        dream_world {
          front_default
          front_female
        }
        officialArtwork {
          front_default
        }
      }
    }
  }
}




# stats query

query {
  pokemon(id: 1){
    id
    stats{
      base_stat 
      effort
      stat {
        name
        url
      }
    }
  }
}


# type query

query {
  pokemon(id: 1){
    id
    types {
      slot
      type {
        name
        url
      }
    }
  }
}

# query by name

query HeroNameAndFriends {
  
  pokemonByName(name:"bulbasaur") {
 
    name
    stats {
      effort
      base_stat
      stat {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      slot
      type{
        name
      }
    }
    species {
      name
    }
  }
  
}


make a fragment

// evo chain

{"baby_trigger_item":null,"chain":{"evolution_details":[],"evolves_to":[{"evolution_details":[{"gender":null,"held_item":null,"item":null,"known_move":null,"known_move_type":null,"location":null,"min_affection":null,"min_beauty":null,"min_happiness":null,"min_level":16,"needs_overworld_rain":false,"party_species":null,"party_type":null,"relative_physical_stats":null,"time_of_day":"","trade_species":null,"trigger":{"name":"level-up","url":"https://pokeapi.co/api/v2/evolution-trigger/1/"},"turn_upside_down":false}],"evolves_to":[{"evolution_details":[{"gender":null,"held_item":null,"item":null,"known_move":null,"known_move_type":null,"location":null,"min_affection":null,"min_beauty":null,"min_happiness":null,"min_level":32,"needs_overworld_rain":false,"party_species":null,"party_type":null,"relative_physical_stats":null,"time_of_day":"","trade_species":null,"trigger":{"name":"level-up","url":"https://pokeapi.co/api/v2/evolution-trigger/1/"},"turn_upside_down":false}],"evolves_to":[],"is_baby":false,"species":{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon-species/3/"}}],"is_baby":false,"species":{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon-species/2/"}}],"is_baby":false,"species":{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon-species/1/"}},"id":1}
















// http://pokeapi.co/api/v2/pokemon/25


// https://www.freecodecamp.org/news/learn-how-to-use-react-and-graphql-to-make-a-full-stack-social-network/
// https://www.freecodecamp.org/news/why-graphql-is-the-future-of-apis-6a900fb0bc81/

// https://www.freecodecamp.org/news/learn-how-to-use-react-and-graphql-to-make-a-full-stack-social-network/