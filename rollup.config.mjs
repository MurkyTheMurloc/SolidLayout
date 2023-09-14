import withSolid from "rollup-preset-solid";
import gzipPlugin from 'rollup-plugin-gzip'

export default withSolid({
    input: "./src/index.tsx",
    targets: ["esm", "cjs"],
    plugins: [gzipPlugin()],
});