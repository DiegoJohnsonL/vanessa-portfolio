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
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {/*title*/}
                <title> Vanessa </title>
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
