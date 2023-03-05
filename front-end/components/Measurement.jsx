import styled from "styled-components"

const Measurement = ({name, status, value, percentage }) => {
    return (
        <Container>
            <div className="element_name">
                <h4>{name}</h4>
            </div>
            <div id="progressbar">
                <progress status={status} max='100' value={value}></progress>
            </div>
            <div>
            <h4>{percentage}</h4>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    div + div {
        margin-left: .1vw;
    }
    .element_name {
        margin-left: 1vw;
    }

    #progressbar{
        margin-top: 1.5vh;
        progress {
	display:inline-block;
	width:200px;
	height:20px;
	padding:15px 0 0 0;
	margin:0;
	background:none;
	border: 0;
	border-radius: 4px;
	text-align: left;
	position:relative;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 0.8em;
}
progress::-webkit-progress-bar {
	height:11px;
	width:150px;
	margin:0 auto;
	background-color: #E5E8E8;
	border-radius: 20px;
	box-shadow:0px 0px 6px #777 inset;
}
progress::-webkit-progress-value {
	display:inline-block;
	float:left;
	height:30px;
	margin:0px -10px 0 0;
	border-radius: 30px;
	box-shadow:0px 0px 6px #777 inset;
        ${props => {
            switch(props.status) {
            case 'success':
                return `
                background-color: #00ff00;
                color: #ffffff;
                `;
            case 'warning':
                return `
                background-color: #F39C12;
                color: #000000;
                `;
            case 'error':
                return `
                background-color: #ff0000;
                color: #ffffff;
                `;
            default:
                return `
                background-color: #229954;
                color: #000000;                `;
            }
        }}
    }
}
    
`

export default Measurement