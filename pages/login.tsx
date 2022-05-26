import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='container flex justify-center items-center w-screen h-screen mx-auto'>
      <Head>
        <title>Login/Signup</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col items-center'>
        <div className='w-32 relative h-10'>
          <Link href='/'>
            <a>
              <Image src='/logo.png' alt='Logo' layout='fill' />
            </a>
          </Link>
        </div>
        <div className='py-7 flex justify-center lg:py-10'>
          <h1 className='text-4xl text-gray-700 text-center font-bold w-80 lg:w-4/6 lg:text-5xl'>
            Email dùng cho đăng ký/đăng nhập
          </h1>
        </div>
        <div className='w-full lg:w-4/6'>
          <form>
            <input
              type='email'
              placeholder='Nhập email...'
              className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-400 placeholder:italic'
              required
            />
            <button className='py-2 bg-red-400 rounded-md text-white hover:bg-red-500 active:bg-red-400 w-full mt-4 lg:mt-6'>
              Lấy link
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
