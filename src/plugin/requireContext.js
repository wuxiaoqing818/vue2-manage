
const files = require.context("./", false, /\.vue$/);
module.exports = files
    .keys()
    .reduce(
        (p, c) => ({
            ...p,
            [c.replace(/\.\/(.+)\.vue/, "$1")]: files(c).default
        }),
        {}
    );