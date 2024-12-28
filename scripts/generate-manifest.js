/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const imageDirectories = {
    nature: "public/assets/nature",
    animals: "public/assets/animals",
    misc: "public/assets/misc",
};

const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

const manifest = {
    images: {
        nature: [],
        animals: [],
        misc: [],
    },
};

for (const [category, dir] of Object.entries(imageDirectories)) {
    try {
        const files = fs.readdirSync(dir);
        manifest.images[category] = files
            .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
            .map((file) => `/assets/${category}/${file}`);
    } catch (e) {
        console.log(`Warning: Directory ${dir} not found or not accessible, error: ${e}`);
    }
}

fs.writeFileSync("public/assets/manifest.json", JSON.stringify(manifest, null, 2));

console.log("Manifest file generated successfully!");
