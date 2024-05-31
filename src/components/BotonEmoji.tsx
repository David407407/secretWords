import React, { useEffect, useState } from 'react'

type Props = {}

const BotonEmoji = (props: Props) => {
    

  return (
    <button className="w-36 lg:w-full text-white outfit font-bold lg:text-lg bg-[#D9324F] hover:scale-105 transition-all rounded-xl px-6 py-3 flex items-center justify-center gap-4">
        <p>{"😆"}</p> 
        Emociones
    </button>
  )
}

export default BotonEmoji