import React from 'react'
import { isReadable } from 'stream'

const Select = ({
  label,
  values,
  name,
  ...selectProps
}: {
  label: string
  values: string[]
  name: string
} & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className='relative'>
        <select
          className='block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-900 py-2.5 px-2.5 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          id={name}
          name={name}
          {...selectProps}
        >
          {values.map((val, idx) => (
            <option key={idx} value={val}>
              {val}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Select
