import type { NextPage, GetStaticProps } from 'next'
import { Layout } from './../components/layout/Layout';

const Home: NextPage = (props) => {

  console.log(props);

  return (
    <Layout title='Listado de Pokémons'>
    
    <ul>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>

    </ul>

    </Layout>

    
  )

  
}


export const getStaticProps: GetStaticProps = async (ctx)=>{
  console.log("hola mundo");
  return {
    props: {

  }
}
}


export default Home;
