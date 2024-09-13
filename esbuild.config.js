// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  loader: { '.js': 'jsx' }, // Add this line
}).catch(() => process.exit(1));
