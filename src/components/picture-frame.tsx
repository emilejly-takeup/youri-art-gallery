/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

type PictureFrameProps = {
    imageName: string;
    variant: PictureFrameSize;
};

export enum PictureFrameSize {
    MAIN = "main",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export const PictureFrame: React.FC<PictureFrameProps> = ({ imageName, variant }) => {
    const [isLoading, setIsLoading] = useState(true);
    const basePath = process.env.NODE_ENV === "production" ? "/youri-art-gallery" : "";

    const sizeClasses = {
        [PictureFrameSize.MAIN]: "w-3/4 lg:w-3/5",
        [PictureFrameSize.SMALL]: "w-32",
        [PictureFrameSize.MEDIUM]: "w-64",
        [PictureFrameSize.LARGE]: "w-96",
    };

    const aspectRatioClass = variant === PictureFrameSize.MAIN ? "pb-[75%]" : "pb-[100%]";

    return (
        <div className={`picture-frame ${sizeClasses[variant]} rounded-xl relative`}>
            <div className={`${aspectRatioClass}`}>
                <div className={`absolute inset-0 ${isLoading ? "animate-pulse" : ""}`}>
                    <img
                        src={`${basePath}/assets/${imageName}`}
                        alt={"Picture"}
                        loading="lazy"
                        className={`rounded-xl object-cover object-top w-full h-full ${
                            isLoading ? "opacity-0" : "opacity-100"
                        } transition-opacity duration-300`}
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
            </div>
        </div>
    );
};
