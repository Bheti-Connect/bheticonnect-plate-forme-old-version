import React from 'react'
import { DropzoneArea } from 'react-dropzone';
import styled from 'styled-components';


const DropZone = () => {
    const getRootProps = ({ isDragActive }) => ({
        className: `dropzone ${isDragActive ? 'active' : ''}`,
        });
        
        const getInputProps = () => ({
            type: 'file',
            accept: '.jpg,.jpeg,.png,.gif',
        });
    return (
        <Dropzone>
            <DropzoneArea />
        </Dropzone>
    )
}

const Dropzone = styled.div`
    border: 2px dashed #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
`;


export default DropZone