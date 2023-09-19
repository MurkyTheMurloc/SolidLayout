import withSolid from "rollup-preset-solid";
import gzipPlugin from 'rollup-plugin-gzip'
import { terser } from "rollup-plugin-terser";

export default withSolid({
    input: "./src/index.tsx",
    targets: ["esm", "cjs"],
    plugins: [gzipPlugin(), terser()],
});