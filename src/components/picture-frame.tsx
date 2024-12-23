/* eslint-disable @next/next/no-img-element */
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

const PictureFrame: React.FC<PictureFrameProps> = ({ imageName, variant }) => {
    const sizeClasses = {
        [PictureFrameSize.MAIN]: "w-3/4 lg:w-2/5 aspect-[4/3]",
        [PictureFrameSize.SMALL]: "w-32 aspect-square",
        [PictureFrameSize.MEDIUM]: "w-64 aspect-square",
        [PictureFrameSize.LARGE]: "w-96 aspect-square",
    };
    return (
        <div className={`picture-frame ${sizeClasses[variant]} rounded-xl`}>
            <img src={`/assets/${imageName}`} alt={"Picture"} loading="lazy" className="rounded-xl object-cover object-top w-full h-full" />
        </div>
    );
};

export default PictureFrame;
