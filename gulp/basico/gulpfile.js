const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
    
    console.log('Tarefa antes 1')
    
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(callback) {

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')   
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = cb => {

    console.log('Tarefa fim')

    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2), 
    copiar, 
    fim,
    )