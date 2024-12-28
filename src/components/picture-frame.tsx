/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type PictureFrameProps = {
    imageName: string | undefined;
    variant: PictureFrameSize;
};

export enum PictureFrameSize {
    MAIN = "main",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export const PictureFrame: React.FC<PictureFrameProps> = ({ imageName, variant }) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isImageCached, setIsImageCached] = useState(false);
    const basePath = process.env.NODE_ENV === "production" ? "/youri-art-gallery" : "";

    const sizeClasses = {
        [PictureFrameSize.MAIN]: "w-3/4 lg:w-3/5",
        [PictureFrameSize.SMALL]: "w-[128px]",
        [PictureFrameSize.MEDIUM]: "w-[264px]",
        [PictureFrameSize.LARGE]: "w-[400px]",
    };

    const aspectRatioClass = variant === PictureFrameSize.MAIN ? "pb-[75%]" : "pb-[100%]";

    useEffect(() => {
        if (imageName) {
            const img = new Image();
            img.src = `${basePath}${imageName}`;

            if (img.complete) {
                setIsLoading(false);
                setIsImageCached(true);
            }
        }
    }, [imageName, basePath]);

    const handleImageLoad = () => {
        setHasError(false);
        setIsLoading(false);
    };

    const handleImageError = () => {
        console.error("Image failed to load:", imageName);
        setHasError(true);
        setIsLoading(false);
    };

    return (
        <div className={`picture-frame ${sizeClasses[variant]} rounded-xl relative`}>
            <div className={`${aspectRatioClass}`}>
                <div className="absolute inset-0">
                    {isLoading && !isImageCached && <div className="absolute inset-0" />}
                    {imageName && (
                        <img
                            src={`${basePath}${imageName}`}
                            alt="Picture"
                            className={`rounded-xl object-cover object-top w-full h-full transition-opacity duration-1000 ${
                                isLoading && !isImageCached ? "opacity-0" : "opacity-100"
                            }`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    )}
                    {hasError && <div className="absolute inset-0 flex items-center justify-center text-red-500">Failed to load image</div>}
                </div>
            </div>
        </div>
    );
};
