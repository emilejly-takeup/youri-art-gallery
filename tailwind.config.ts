import type { Config } from "tailwindcss";

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                main: ["var(--font-main)"],
                italic: ["var(--font-italic)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
