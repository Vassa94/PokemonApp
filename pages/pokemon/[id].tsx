import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import React, { useEffect } from 'react'
import { Layout } from '../../components/layout/Layout';
import { Pokemon } from '../../interfaces/pokemonInfo';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

interface Props {
  pokemon:Pokemon;
  }

const PokemonPage: NextPage<Props> = ({pokemon}) => {


  return (
    <Layout title='pokemon' >
      <Grid.Container css={{ marginTop: '5px'}} gap={2}  >
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding:"30px" }} >
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.['official-artwork'].front_default || '/no-images.png'}
                alt={pokemon.name}
                width="100%"
                height={300}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize' >{pokemon.name}</Text>

              <Button
                color="gradient"
                ghost
              >
                Guardar en favoritos
              </Button>  

            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>

              <Container direction='row' display='flex' gap={0} >
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={12}>
          <Card.Header>
            <Text h3>Ataques</Text>
            <Card.Body>
              <Text p> {pokemon.abilities.map}</Text>
            </Card.Body> 
          </Card.Header>
        </Grid>


      </Grid.Container>

    </Layout>
  )
};



// You should use getStaticPaths if you???re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemonAll = [...Array(905)].map( ( value, index ) => `${ index +1}`);

  return {
    paths: pokemonAll.map( id => ({
      params: {id}
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({params}) => {

  const {id} = params as {id:string};

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage
