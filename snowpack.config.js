// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  mount: {
    src: '/',
    dist: '/dist',
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-typescript',
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
