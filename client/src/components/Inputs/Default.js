import React from 'react'

export default function Default({placeholder, onChange, value, name, type }) {
  return (
    <input
      className="flex-1 outline-none text-lg pb-1"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      required
    />
  )
}
