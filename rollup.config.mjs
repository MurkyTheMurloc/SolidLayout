import withSolid from "rollup-preset-solid";

import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin';
import css from "rollup-plugin-import-css";
import resolve from '@rollup/plugin-node-resolve';

export default withSolid({
    input: "./src/index.tsx",
    targets: ["esm"],
    plugins: [vanillaExtractPlugin(), css(), resolve()],
    output: {
        dir: "dist",
        format: "es",
        preserveModules: true,
        assetFileNames({name}) {
            const path = name?.replace("src/styles", 'assets');
            return path;
        }
    }
});