import { useState, useRef } from "react";
import styled from "styled-components";

const DragDropFiles = () => {
    const [files, setFiles ] = useState(null)
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files);
    }

    if(files) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
            </ul>
        </div>
    )

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
                        <input 
                            type="file"
                            multiple
                            onChange={(e) => setFiles(e.target.files)}
                            hidden
                            ref={inputRef}
                        />
                        <button onClick={() => inputRef.current.click()}>Select n</button>
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
    height: 100px;
    justify-content: center;
    top: 10vh;
    padding: 20px;
    position: absolute;
    width: 15vw;

    button{
        padding: 9px;
        cursor: pointer;
    }
`



export default DragDropFiles