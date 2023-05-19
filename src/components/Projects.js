import React from 'react'
import AjkeKiKorbo from './projects/AjkeKiKorbo'
import ClothingStore from './projects/ClothingStore'

export default function Projects() {
  return (
    <div className='m-5'>
        <p className='text-5 p-5 text-center'>Projects</p>
        <p className='text-4 p-5'>Full Stack Web Applications</p>
        <AjkeKiKorbo />
        <ClothingStore />
    </div>
  )
}
