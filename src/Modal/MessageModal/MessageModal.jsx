import React from 'react';
import { Modal } from 'react-bootstrap';

const MessageModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} centered> 
            <Modal.Body>
                <h5>Please contact admin for more info.</h5>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'> 
                <button className='btn btn-danger' onClick={handleClose}>Ok</button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessageModal;
