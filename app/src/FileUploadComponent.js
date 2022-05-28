import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import { useEffect, useState } from "react";
import { Button , Row } from 'react-bootstrap'

import styled from 'styled-components';


const FileUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
      };


    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <Row  className='d-flex justify-content-center'>
                <Button onClick={handleClick}>
                  Upload a file
                </Button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={onSelectFile}
                  style={{display: 'none'}} 
                />
            </Row>

            <Row className='d-flex justify-content-center'>
            {selectedFile &&  <img src={preview} /> }
            </Row>
        </div>
    )
};
export default FileUploadComponent;