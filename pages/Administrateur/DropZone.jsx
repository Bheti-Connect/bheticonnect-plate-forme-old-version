import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

function DropZone() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <DragDrop {...getRootProps()}>
        <input {...getInputProps()} />
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Glissez-déposez vos fichiers ici</p>
        }
        </DragDrop>
    )
}

const DragDrop = styled.div`
position: relative;
border: 2px dashed #4267b2;
background: #E5E7E9;
display: flex;
border-radius: 10px;
flex-direction: column;
align-items: center;
justify-content: center;
width: 16vw;
height: 15vh;
margin-top: 5vh;

`

export default DropZone;