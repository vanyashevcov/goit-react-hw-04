import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: `VAR(--color-green-300)`,
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0 , 0 , 0 , 0.6)",
    // position: `fixed`,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
};
Modal.setAppElement("#root");

export const ImageModal = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
  description,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      //   closeTimeoutMS={200}
      shouldCloseOnEsc={true}
    >
      <img className={s.img} src={src} alt={alt} />
      <h3 className={s.title}>{description !== null ? description : alt}</h3>
    </Modal>
  );
};
