import React, { useState } from 'react'
import { getRandomNumber } from '../helpers/getRandomNumber';

type Props = {
    words: any,
}

const Card = (props: Props) => {
    const { words } = props
    const [ random, setRandom ] = useState(getRandomNumber(words.length-1))

    const { palabra, significado, dato, idioma } = words[random]

  return (
    <>
        <div className="w-11/12 lg:w-2/3  mx-auto rounded-3xl bg-[#A99A89] p-10">
            <h1 className="lg:text-6xl text-4xl  font-black text-right pb-4">{palabra}</h1>

            <div className="w-11/12 mx-auto bg-black h-[2px]"></div>

            <div className="w-4/5 mx-auto py-6 space-y-6">
                <p className="lg:text-2xl text-lg font-medium text-center">{significado}</p>
                <p className="lg:text-3xl text-xl font-medium"> <span className="text-white">Idioma</span> - {idioma}</p>
                {
                    dato !== palabra && (
                        <p className="lg:text-3xl text-xl font-medium"> <span className="text-white">Dato</span> - { dato }</p>
                    )
                }
                
            </div>
        </div>

        <div className="flex justify-between gap-80 my-24">
            <button onClick={() => setRandom(getRandomNumber(words.length-1))} className="w-40 mx-auto text-white outfit font-bold text-lg bg-[#D9324F] hover:scale-105 transition-all rounded-xl px-6 py-3 flex items-center justify-center gap-4">
                Otra palabra
            </button>
        </div>
    </>
    
  )
}

export default Card