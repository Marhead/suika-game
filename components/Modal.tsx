
interface ModalProps {
    open: boolean;
}

const Modal = ({open}: ModalProps) => {
    const onClose = () => {
        open = !!open;
    }

    if (!open) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
            This is modal
            <button onClick={onClose}>모달닫기</button>
        </div>
    );
}

export default Modal;