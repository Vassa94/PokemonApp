import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from './../components/layout/Layout';
import { PokemonListResponse, SmallPokemon } from './../interfaces/pokemon-list';
import { PokemonCard} from '../components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}


const Home: NextPage<Props> = ({pokemons}) => {

  console.log({pokemons});

  return (
    <Layout title='Listado de Pokémons'>
    
    <Grid.Container gap={ 2 } justify='flex-start'>
      {
        pokemons.map( (pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}  />
        ))
      }

    </Grid.Container>

    </Layout>

    
  )

  
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get< PokemonListResponse >('/pokemon?limit=905')
  
  const pokemons: SmallPokemon[] = data.results.map( (poke,i) => ({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ i + 1 }.png`
  }) )

  return {
    props: {
      pokemons
    },
  };
};


export default Home;
