import React from 'react'

export default function Card({ title }) {

  return (
    <div className="max-w-[300px] shadow-2xl p-5 space-y-2 text-center">
      <img
        className="h-[100px] w-[100px] mx-auto rounded-full"
        src="https://plus.unsplash.com/premium_photo-1749666992906-f059c7d88139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fuga asperiores itaque, perferendis odit quidem quisquam deserunt error beatae, laborum tempore. Fugiat beatae quisquam laudantium dolor cum atque voluptatem voluptatum!</p>
    </div>


  )
}
