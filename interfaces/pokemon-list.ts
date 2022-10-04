export interface PokemonListResponse {
    count:    number;
    next?:     String;
    previous?: String;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
