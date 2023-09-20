import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from './Footer'
import Header2 from './Header2'

export default function Layout2({ children, headName, style, switcherBtn }) {
    useEffect(() => {
        document.querySelector("html").setAttribute("data-bs-theme", style);
      }, []);
    return (

        <>
            <Head>

                {/* metas */}
                <meta charSet="utf-8" />
                <meta name="author" content="TrendyCoder" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Tapsi - Portfolio Template" />
                <meta name="description" content="Tapsi - Portfolio Template" />
                {/*title*/}
                <title>Tapsi - {headName ? headName : "React NextJS Portfolio Template"} </title>
                {/* Favicon */}
                <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

            </Head>
            <Header2 switcherBtn={switcherBtn} /> 
            {/* Main */}
            <main className="wrapper">
                {children}
            </main>
            {/* Main */}
            <Footer />

        </>

    )
}
