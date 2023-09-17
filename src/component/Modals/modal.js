import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, carData }) => {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}>
            {carData && (
                <div>
                    <h2>{carData.name}</h2>
                </div>
            )}
        </Modal>
    );
};

export default CustomModal;