import React, { useState } from 'react';
import { Next } from './Next';
import quotes from '../quotes.json';
import { getRandomColor, getRandomQuote } from '../helpers/getRandom'

export const BlockQuote = () => {

    const [ rQuote, setRQuote ] = useState( quotes[getRandomQuote()] );

    const changeQuote = ()=>{
        setRQuote(quotes[getRandomQuote()])
    }

    const color = getRandomColor().slice(0,6);

    return (
    <div className='container' style={{backgroundColor: `#${color}`, color: `#${color}`}}>    
        <section className='blockquote'>
            <header>
                <i className="fa-solid fa-quote-left"></i>
                <p>{rQuote.quote}</p>
            </header>

            <p><i>{rQuote.author}</i></p>

            <Next random={changeQuote} bg={`#${color}`}/>
        </section>
    </div>
    )
}
