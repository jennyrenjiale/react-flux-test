/**
 * Created by jialeren on 2018/10/8.
 */
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appDirectory,
    appSrc: resolveApp('src'),
    appBuild: resolveApp('build'),
    appHtml: resolveApp('src/index.html'),
};
