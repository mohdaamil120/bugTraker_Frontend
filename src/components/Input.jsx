import React from 'react'

export default function Input({ lable = "", name = "", type = "text", className = "", isRequired = true, placeholder = "", value = "", onChange = () => { }, }) {
  return (
    <div className='w-1/2'>
      <label for={name} className='block text-sm font-medium text-gray-800'>{lable}</label>
      <input value={value} onChange={onChange} type={type} id={name} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`} placeholder={placeholder} required={isRequired} />
    </div>
  )
}
