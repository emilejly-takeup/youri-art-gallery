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
    { size: PictureFrameSize.LARGE, className: "col-span-3 row-span-3" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.MEDIUM, className: "col-span-2 row-span-2" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
    { size: PictureFrameSize.SMALL, className: "col-span-1 row-span-1" },
];

export const Grid: React.FC<GridProps> = ({ category }) => {
    const images = manifest.images[category];

    return (
        <div className="grid grid-cols-7 grid-rows-3 gap-2">
            {GRID_LAYOUT.map((item, index) => (
                <div key={index} className={item.className}>
                    <PictureFrame imageName={images[index % images.length]} variant={item.size} />
                </div>
            ))}
        </div>
    );
};
