import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Layout } from '../../components/layout/Layout';

interface Props {
  pokemon:any;
}

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query);
        

  return (
    <Layout title='Algun pokemon' >
        <h1>Algun Pokemon</h1>
    </Layout>
  )
}

export default PokemonPage
