const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCss, appJs, appImg } = require('./gulptasks/app')
const { depsCss, depsFonts } = require('./gulptasks/deps')
const { monitorarArquivos, servidor } = require('./gulptasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)