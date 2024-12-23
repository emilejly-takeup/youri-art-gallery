import PictureFrame, { PictureFrameSize } from "@/components/picture-frame";
import manifest from "../../public/assets/manifest.json";
import homeContent from "../../public/content/home.json";

// Array of available image names
const AVAILABLE_IMAGES = manifest.images;

export default function Home() {
    // Get a random image from the array
    const randomImage = AVAILABLE_IMAGES[Math.floor(Math.random() * AVAILABLE_IMAGES.length)];

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-24 my-12">
            <div className="flex flex-col gap-4 w-3/4 lg:w-1/3 text-lg md:text-xl xl:text-2xl italic text-center">
                <p>{homeContent["first-paragraph"]}</p>
                <p>{homeContent["second-paragraph"]}</p>
                <p>{homeContent["third-paragraph"]}</p>
                <p>{homeContent["fourth-paragraph"]}</p>
            </div>
            <PictureFrame imageName={randomImage} variant={PictureFrameSize.MAIN} />
        </div>
    );
}
