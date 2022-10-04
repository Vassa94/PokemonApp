import  React, { FC, PropsWithChildren } from "react";


import Head from "next/head"
import { Navbar } from './../ui';

interface Props {
    title?: string;
}

export const Layout: FC<PropsWithChildren<Props>>= (  {children, title} ) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name="author" content="Ignacio Vassallo"/>
            <meta name="descripcion" content={'Información de Pokemon ${ title }'} />
            <meta name="keywords" content={'${ title },Pokemon,pokedex,id'}/>
        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px',
        }}>
            {children}
        </main>


    </>
  )
};
