'use client';

import './BlobButton.css';

interface BlobButtonProps {
    text?: string;
    onClick?: () => void;
    isOrange?: boolean;
    isMd?: boolean;
}

export const BlobButton = ({isMd = false, isOrange = false, text = 'Blob Button', onClick }: BlobButtonProps) => {
    return (
        <div className="buttons md:inline p-2 sm:p-3 lg:p-3">
            <button className={`${!isOrange ? 'blob-btn-text' : ''} blob-btn px-3 py-2 sm:px-4 sm:py-3 md:px-3 md:py-2 lg:px-4 lg:py-3 text-sm sm:text-base md:text-sm lg:text-base`}>
                {text}
                <span className={`${isOrange ? 'blob-btn_inner-black' : ''} blob-btn__inner`}>
                    <span className="blob-btn__blobs">
                        <span className={`${isOrange ? 'blob-btn__blob-orange' : ''} blob-btn__blob`}></span>
                        <span className={`${isOrange ? 'blob-btn__blob-orange' : ''} blob-btn__blob`}></span>
                        <span className={`${isOrange ? 'blob-btn__blob-orange' : ''} blob-btn__blob`}></span>
                        <span className={`${isOrange ? 'blob-btn__blob-orange' : ''} blob-btn__blob`}></span>
                    </span>
                </span>
            </button>
        </div>
    );
}; 