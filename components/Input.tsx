import React from 'react'

const Input = ({
  label,
  name,
  ...inputProps
}: {
  label: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        id={name}
        name={name}
        className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-gray-400 placeholder:italic'
        {...inputProps}
      />
    </>
  )
}

export default Input
