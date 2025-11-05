import React from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";

interface ImageLightboxProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
                                                                src,
                                                                alt,
                                                                isOpen,
                                                                onClose,
                                                            }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-none">
                <img src={src} alt={alt} className="max-h-[90vh] w-auto mx-auto object-contain rounded-lg"/>
            </DialogContent>
        </Dialog>
    );
};
