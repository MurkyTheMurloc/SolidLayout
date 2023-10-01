import withSolid from "rollup-preset-solid";

import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin';

export default withSolid({
    input: "./src/index.tsx",
    targets: ["esm", "cjs"],
    plugins: [vanillaExtractPlugin()],
    output: {
        dir: "dist",
        preserveModules: true,
        assetFileNames({name}) {
            const path = name?.replace("src/styles", 'assets');
            return path;
        }
    }
});