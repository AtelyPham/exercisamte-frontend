import Head from 'next/head'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Dashboard</title>
      </Head>

      <header>
        <h1 className='text-3xl text-red-400 font-bold mt-7'>Dashboard</h1>
      </header>
    </div>
  )
}

export default Dashboard
