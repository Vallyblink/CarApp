import ModalCard from "component/Cards/modalCard";
import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    width: "541px",
    height: "752px",
    top: "150px",
    left: "496px",
    borderRadius: "24px",
    },
     overlay: {
    background: "rgba(18, 20, 23, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
const CustomModal = ({ isOpen, onRequestClose, carData }) => {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
        style={customStyles}>
            {carData && (
                <div>
                    <ModalCard car = {carData}/>
                </div>
            )}
        </Modal>
    );
};

export default CustomModal;