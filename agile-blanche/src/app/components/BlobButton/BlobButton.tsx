'use client';

import './BlobButton.css';

interface BlobButtonProps {
    text?: string;
    onClick?: () => void;
    isBlack?: boolean;
    isWhite?: boolean;
    isHome?: boolean;
    isNav?: boolean;
}

export const BlobButton = ({isNav = false, isHome = false, isWhite = false, isBlack = false, text = 'Blob Button', onClick }: BlobButtonProps) => {
    return (
        <div className="buttons md:inline p-2 sm:p-3 lg:p-3">
            <button className={`${isWhite ? 'blob-btn-text-white blob-btn px-3 py-2 sm:px-4 sm:py-3 md:px-3 md:py-2 lg:px-4 lg:py-3 text-sm sm:text-base md:text-sm lg:text-lg font-[myFirstFont]' : ''} 
                                ${isBlack ? 'blob-btn blob-btn-black px-3 py-2 sm:px-4 sm:py-3 md:px-3 md:py-2 lg:px-4 lg:py-3 text-sm sm:text-base md:text-sm lg:text-lg font-[myFirstFont]' : ''}
                                ${isHome ? 'blob-btn-text-home blob-btn px-4 py-3 text-lg font-[myFirstFont] hover:font-[myFirstFontBold]' : ''} 
                                ${isNav ? 'blob-btn blob-btn-text sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 text-sm md:text-base lg:text-lg font-[myFirstFont]' : ''}`}>
                {text}
                <span className={`${isBlack ? 'blob-btn_inner-black' : ''}
                                    ${isHome ? 'blob-btn_inner-black' : ''} blob-btn__inner`}>
                    <span className="blob-btn__blobs">
                        <span className={`${isBlack ? 'blob-btn__blob-orange' : ''}
                                            ${isHome ? 'blob-btn_blob-home' : ''} blob-btn__blob`}></span>
                       <span className={`${isBlack ? 'blob-btn__blob-orange' : ''}
                                            ${isHome ? 'blob-btn_blob-home' : ''} blob-btn__blob`}></span>
                        <span className={`${isBlack ? 'blob-btn__blob-orange' : ''}
                                            ${isHome ? 'blob-btn_blob-home' : ''} blob-btn__blob`}></span>
                        <span className={`${isBlack ? 'blob-btn__blob-orange' : ''}
                                            ${isHome ? 'blob-btn_blob-home' : ''} blob-btn__blob`}></span>
                    </span>
                </span>
            </button>
        </div>
    );
}; 