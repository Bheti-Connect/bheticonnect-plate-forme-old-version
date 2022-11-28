import styled from 'styled-components';


const Greeting = () => {

    const day = new Date();
    const hourNow = day.getHours();

    let greet = ''

    if ((hourNow > 18) && (hourNow < 24)) {
        greet = "👍🏾 Bonsoir";
    }   else if ((hourNow > 13) && (hourNow < 18))  {
        greet = "😏 Bon après-midi";
    }   else if ((hourNow > 0) && (hourNow < 13))  {
        greet = "🥳 Bonjour";
    } else {
        greet = " Bienvenue"
    }

    return (
        <GreetMe>
            <h5>{greet}, Richard</h5>
        </GreetMe>
    )
}

const GreetMe = styled.div`
position: absolute;
right: 20px;
width: 300px;
height: 60px;
padding-left: 20px;
background-color: #091a2b;
color: white;
border-radius: 40px;
h5 {
    font-weight: 700;
}

`

export default Greeting