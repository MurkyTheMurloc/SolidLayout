import withSolid from "rollup-preset-solid";
import gzipPlugin from 'rollup-plugin-gzip'
import {typescriptPaths} from 'rollup-plugin-typescript-paths';
import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin';

export default withSolid({

    input: "./src/index.tsx",
    targets: ["esm", "cjs"],
    plugins: [vanillaExtractPlugin(), typescriptPaths(), gzipPlugin()],
});