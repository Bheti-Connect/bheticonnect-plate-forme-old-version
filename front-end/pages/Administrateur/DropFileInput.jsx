import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { ImageConfig } from './config/ImageConfig'; 
import uploadImg from '../../assets/images/cloud-upload-regular-240.png';
import styled from 'styled-components';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    
    return (
        <Container>
            <DivStyled
                ref={wrapperRef}
                className="drop_file_input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop_file_input__label">
                    <Image src={uploadImg} alt="" />
                    <p>Glissez-déposez vos fichiers ici</p>
                </div>
                <input className='the_input' type="file" value="" onChange={onFileDrop}/>
            </DivStyled>
            {
                fileList.length > 0 ? (
                    <FilePreview className="drop_file_preview">
                        <p className="drop_file_preview__title">
                            Fichier(s) chargé(s) :
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop_file_preview__item">
                                    <Image className='image' src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop_file_preview__item__info">
                                        <p>{item.name}</p>
                                        {/* <p>{Math.round(item.size / 1000)}KB</p> */}
                                    </div>
                                    <span className="drop_file_preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </FilePreview>
                ) : null
            }
        </Container>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

const Container = styled.div`
position: relative;
display: block;
align-items: center;
margin: auto;

`

const DivStyled = styled.div`
    position: relative;
    top: 6vh;
    width: 19vw;
    height: 17.5vh;
    border: 2px dashed #4267b2;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;

    background-color: #f5f8ff;

    .the_input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    &:hover,
    .drop_file_input.dragover {
        opacity: 0.9;
    }
    .drop_file_input__label {
        text-align: center;
        color: #B8B8B8;
        font-weight: 600;
        padding: 10px;
    }
    .drop_file_input__label img {
        width: 28%;
        height: 26%;
    }
`

const FilePreview = styled.div`
    margin-top: 30px;

    p {
    font-weight: 500;
    font-size: 12.5px;
}

.drop_file_preview__title {
    width: 200px;
    margin-bottom: 10px;
}

.drop_file_preview__item {
    width: 21vw;
    height: 6.3vh;
    position: relative;
    display: flex;
    margin-bottom: 10px;
    background-color: #D4E6F1;
    padding: 10px;
    border-radius: 30px;
    top: 6vh;
    right: 10vw;
    .image {
    width: 32px;
    height: 35px;
    margin-right: 10px;
}

.drop_file_preview__item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.drop_file_preview__item__del {
    background-color: #CB4335;
    color: #FFF;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
}

&:hover .drop_file_preview__item__del {
    opacity: 1;
}

}


`
export default DropFileInput;
