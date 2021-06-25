import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../../components/menu_candidat'

export default function candidat() {
    return (
        <div>
            <Head>
                <title>A recruit | Candidat</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu/>
        </div>
    )
}