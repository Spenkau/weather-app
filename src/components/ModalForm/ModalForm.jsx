import React from 'react';

const ModalForm = (props) => {
    const {showModal, setShowModal} = props

    const toggleModal = () => {
        setShowModal(false);
    };

    return (
        <div className={`modal${showModal ? ' active' : ''}`} >
            <button className="close-modal" onClick={toggleModal}>
                <img src={process.env.PUBLIC_URL + "/images/down-arrow.png"} alt="hide window" style={{width: "30px", height: "30px"}}/>
            </button>
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    );
};

export default ModalForm;