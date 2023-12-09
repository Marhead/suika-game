import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center" />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-white z-5">
                <button onClick={onClose}>모달 닫기</button>
                {children}
            </div>
        </>,
        document.getElementById("global-modal") as HTMLElement
    );
};