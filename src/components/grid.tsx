import manifest from "../../public/assets/manifest.json";
import { PictureFrame, PictureFrameSize } from "./picture-frame";

export enum GridCategory {
    ANIMALS = "animals",
    NATURE = "nature",
    MISC = "misc",
}

type GridProps = {
    category: GridCategory;
};

type GridItem = {
    size: PictureFrameSize;
    className: string;
};

const GRID_LAYOUT: GridItem[] = [
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.LARGE, className: "col-span-3 row-span-3" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },

    { size: PictureFrameSize.LARGE, className: "col-span-3 row-span-3" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
];

export const Grid: React.FC<GridProps> = ({ category }) => {
    const images = manifest.images[category];
    const repeatedImages = Array.from({ length: Math.ceil(images.length / GRID_LAYOUT.length) })
        .flatMap(() => GRID_LAYOUT)
        .slice(0, images.length);

    return (
        <div className="h-[calc(100vh-200px)] p-4 overflow-y-scroll">
            <div className="grid grid-cols-7 auto-rows-min gap-2">
                {repeatedImages.map((item, index) => (
                    <div key={index} className={item.className}>
                        <PictureFrame imageName={images[index % images.length]} variant={item.size} />
                    </div>
                ))}
            </div>
        </div>
    );
};
