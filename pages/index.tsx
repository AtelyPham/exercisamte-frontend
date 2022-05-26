import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='container mx-auto relative h-screen md:pt-16 lg:pt-2'>
      <Head>
        <title>Exercisamte</title>
        <meta
          name='description'
          content='Exercisamte - Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='md:flex'>
        <div className='md:w-1/2 px-6 py-8 sm:px-8 sm:py-10'>
          <header className='flex justify-between items-center'>
            <div>
              <Link href='/'>
                <a>
                  <Image
                    src='/logo.png'
                    alt='Logo'
                    layout='intrinsic'
                    width={141}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <a className='text-base text-red-400 hover:text-red-500 active:text-red-400'>
                  Đăng nhập
                </a>
              </Link>
            </div>
          </header>

          <main className='mt-10'>
            <div>
              <div>
                <h1 className='text-5xl font-semibold md:font-bold lg:text-6xl lg:mt-40'>
                  Luyện tập với <br />
                  <span className='text-red-400'>Exercisamte</span>
                </h1>
                <p className='text-2xl text-gray-500 mt-3 md:text-lg md:font-light lg:text-3xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
              <div className='mt-5'>
                <button className='px-8 py-3 bg-red-400 rounded-md text-white hover:bg-red-500 active:bg-red-400 w-full md:w-52'>
                  Bắt đầu
                </button>
              </div>
            </div>
          </main>
        </div>

        <div className='w-full h-64 relative mt-4 md:hidden'>
          <Image
            src='/hero.png'
            layout='fill'
            priority
            alt='hero'
            objectFit='cover'
          />
        </div>

        <div className='hidden md:block w-1/2 h-auto relative'>
          <div
            className='absolute left-0 right-0 z-10'
            style={{
              width: '0',
              height: '0',
              borderTop: '630px solid white',
              borderRight: '80px solid transparent',
            }}
          />
          <Image
            src='/hero.png'
            layout='fill'
            priority
            alt='hero'
            objectFit='cover'
          />
        </div>
      </div>

      <footer className='absolute bottom-0 left-0 w-full p-4 md:px-6 md:py-8 mt-auto'>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022. Make with ❤️ by{' '}
          <a
            href='https://github.com/AtelyPham'
            className='hover:underline text-blue-400'
            target='_blank'
            rel='noreferrer'
          >
            Trung-Tin
          </a>{' '}
          and{' '}
          <a
            href='https://github.com/KDV-it'
            className='hover:underline text-blue-400'
            target='_blank'
            rel='noreferrer'
          >
            Duy-Khang
          </a>
          .
        </span>
      </footer>
    </div>
  )
}

export default Home
