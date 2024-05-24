"use client";
import Modal, { ModalProps } from "@/components/core/Modal/Modal";

interface Modal2FAProps {
    open: boolean;
    title: string;
    onClose: ()=>void;

}
export function Modal2FA({ title, open, onClose }: Modal2FAProps): React.JSX.Element {
    return (
        <Modal open={open} onClose={onClose} title={title}>
            <p>osjdsid</p>
        </Modal>
    );
}
