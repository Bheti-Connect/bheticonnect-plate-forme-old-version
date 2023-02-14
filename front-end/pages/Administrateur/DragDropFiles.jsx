import { useState } from "react";
import styled from "styled-components";



const DragDropFiles = () => {
    const [files, setFiles ] = useState(null)

    
    return (
        <>
            {
                !files && (
                    <DragDrop 
                        className="dropzone"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <h5>Glisser & déposer le fichier ici</h5>
                        <h5>or</h5>
                        <button>Select files</button>
                    </DragDrop>
                )
            }
        </>
    )
}

const DragDrop = styled.div`
    align-items: center;
    border: 2.4px dashed #F3F0E5;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: center;
    top: 10vh;
    padding: 20px;
    position: relative;
    width: 15vw;

    button{
        padding: 9px;
    }
`



export default DragDropFiles