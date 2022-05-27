import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Input } from '../components'

const Metric = () => {
  const router = useRouter()

  const handleSubmit: React.FormEventHandler = ev => {
    ev.preventDefault()

    const formElements = (ev.target as any).elements

    const {
      measureDay: { value: measureDay },
      weight: { value: weight },
      height: { value: height },
      chest: { value: chest },
      core: { value: core },
      butt: { value: butt },
      arms: { value: arms },
      legs: { value: legs },
    } = formElements

    alert(
      JSON.stringify({
        measureDay,
        weight,
        height,
        chest,
        core,
        butt,
        arms,
        legs,
      })
    )

    router.push('/dashboard')
  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Metric</title>
      </Head>

      <header className='py-7 px-14'>
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
      </header>

      <main className='flex justify-center items-center w-full mt-3'>
        <div className='w-4/5'>
          <h1 className='text-2xl'>📈 Nhập thông số</h1>
          <p className='text-base text-gray-400 font-light'>
            Thông số giúp bạn theo dõi quá trình phát triển của cơ thể
          </p>
          <form
            onSubmit={handleSubmit}
            className='w-full border border-gray-200 px-16 py-8 mt-7 rounded'
          >
            <div className='flex justify-between'>
              <div className='w-1/4'>
                <Input
                  label='Ngày đo'
                  name='measureDay'
                  required={true}
                  type='date'
                />
              </div>
              <div className='w-1/4'>
                <Input
                  label='Cân nặng'
                  name='weight'
                  required={true}
                  type='number'
                  placeholder='0.00 kg'
                />
              </div>
              <div className='w-1/4'>
                <Input
                  label='Chiều cao'
                  name='height'
                  required={true}
                  type='number'
                  placeholder='0.00 cm'
                />
              </div>
            </div>

            <div className='flex justify-between mt-7'>
              <div className='w-1/3'>
                <Input
                  label='Ngực'
                  name='chest'
                  type='number'
                  required={true}
                  placeholder='0.00 cm'
                />
              </div>
              <div className='w-1/3'>
                <Input
                  label='Bụng'
                  name='core'
                  type='number'
                  required={true}
                  placeholder='0.00 cm'
                />
              </div>
            </div>

            <div className='flex justify-between mt-7'>
              <div className='w-1/4'>
                <Input
                  label='Mông'
                  name='butt'
                  required={true}
                  placeholder='0.00 cm'
                  type='number'
                />
              </div>
              <div className='w-1/4'>
                <Input
                  label='Tay'
                  name='arms'
                  required={true}
                  placeholder='0.00 cm'
                  type='number'
                />
              </div>
              <div className='w-1/4'>
                <Input
                  label='Chân'
                  name='legs'
                  required={true}
                  placeholder='0.00 cm'
                  type='number'
                />
              </div>
            </div>

            <div className='flex mt-7 flex-col items-center'>
              <hr className='w-full block border border-gray-100' />
              <div className='w-full flex justify-end mt-3'>
                <button
                  type='submit'
                  className='w-2/5 block py-2 bg-red-400 rounded text-white'
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Metric
