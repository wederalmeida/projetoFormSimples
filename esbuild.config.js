import esbuildServe from 'esbuild-serve';

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/main.ts"],
        bundle: true,
        outfile: "public/js/script.js",
        sourcemap: true,
    },
    { root: "public" }
);