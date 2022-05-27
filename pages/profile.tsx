import { getCookie } from 'cookies-next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GetServerSideProps } from 'next'
import { Input, Select } from '../components'
import { useRouter } from 'next/router'

const Profile = ({ email }: { email: string }) => {
  const router = useRouter()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = ev => {
    ev.preventDefault()

    const formElements = (ev.target as any).elements

    const {
      firstName: { value: firstName },
      lastName: { value: lastName },
      birthday: { value: birthday },
      gender: { value: gender },
      level: { value: level },
      dayPerWeek: { value: dayPerWeek },
    } = formElements

    alert(
      JSON.stringify({
        firstName,
        lastName,
        birthday,
        gender,
        level,
        dayPerWeek,
      })
    )

    router.push('/metric')
  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Profile</title>
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
          <h1 className='text-2xl'>
            Chào 👋🏻,{' '}
            <span className='text-lg text-gray-500 font-semibold'>{email}</span>
          </h1>
          <p className='text-base text-gray-400 font-light'>
            Điền thông tin của bạn dưới đây
          </p>
          <form
            onSubmit={handleSubmit}
            className='w-full border border-gray-200 px-16 py-8 mt-7 rounded'
          >
            <div className='flex justify-between'>
              <div className='w-1/4'>
                <Input label='Tên' name='firstName' required={true} />
              </div>
              <div className='w-1/4'>
                <Input label='Họ' name='lastName' required={true} />
              </div>
              <div className='w-1/4'>
                <Select
                  label='Giới tính'
                  name='gender'
                  values={['Không xác định', 'Nam', 'Nữ']}
                />
              </div>
            </div>

            <div className='w-3/5 mt-7'>
              <label htmlFor='birthday'>Ngày sinh</label>
              <input
                type='date'
                id='birthday'
                name='birthday'
                className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-400 placeholder:italic'
                required={true}
              />
            </div>

            <div className='flex mt-7 justify-between'>
              <div className='w-1/3'>
                <Select
                  label='Cấp độ luyện tập'
                  name='level'
                  values={['Mới bắt đầu', 'Trung bình', 'Chuyên nghiệp']}
                  required={true}
                />
              </div>
              <div className='w-1/3'>
                <Select
                  label='Số ngày tập mỗi tuần'
                  name='dayPerWeek'
                  values={Array.from(Array(7)).map((_, idx) =>
                    (idx + 1).toString()
                  )}
                  required={true}
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const email = getCookie('email', { req, res }) as string

  return {
    props: {
      email,
    },
  }
}

export default Profile
