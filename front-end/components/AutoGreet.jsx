import React from 'react'

const AutoGreet = () => {
    const day = new Date();
    const hourNow = day.getHours();

    let greet = ''

    if ((hourNow > 18) && (hourNow < 24)) {
        greet = "🤗 Bonsoir";
    }   else if ((hourNow > 12) && (hourNow < 18))  { 
        greet = "😏 Bon après-midi";
    }   else if ((hourNow > 0) && (hourNow < 13))  {
        greet = "👋🏽 Bonjour";
    } else {
        greet = " Hello "
    }
    return (
        <div>
            {greet}
        </div>
    )
}

export default AutoGreet;