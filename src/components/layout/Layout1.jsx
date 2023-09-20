import Head from 'next/head'
import React from 'react'
import Header1 from './Header1'
import Footer from './Footer'

export default function Layout1({ children, headName, switcherBtn }) {
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
            <Header1 switcherBtn={switcherBtn} />
            {/* Main */}
            <main className="wrapper">
                {children}
            </main>
            {/* Main */}
            <Footer />

        </>

    )
}
