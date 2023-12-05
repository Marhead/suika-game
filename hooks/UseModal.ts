"use client";

import { useState, useEffect } from "react";

type UseModalReturn = [boolean, () => void, Element | null];

const useModal = (): UseModalReturn => {
    let [modal, setModal] = useState(false);
    let [portalElement, setPortalElement] = useState<Element | null>(null);

    useEffect(() => {
        setPortalElement(document.getElementById("portal"));
    }, [modal]);

    const modalHandler = () => {
        setModal(!modal);
    };

    return [modal, modalHandler, portalElement];
};

export default useModal;