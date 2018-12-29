//require - подключение модуля, который мы установили через npm install
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del');

//Компилируем из sass в css
gulp.task('sass',function(){
    return gulp.src('app/sass/**/*.sass')
    //.pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

//Обновление ХТМЛ
gulp.task('html',function(){
  return gulp.src('app/*.html')
  .pipe(browserSync.reload({ stream: true }))

});

//Обновление JS
gulp.task('scripts',function(){
  return gulp.src('app/js/**/*.js')
  .pipe(browserSync.reload({ stream: true }))
});

//Инструмент, который запустит сервер и обеспечит
//следение за файлами и автоматическое обновление
//называется рифали-лоад (автообновление)
gulp.task('browser-sync',function(){
  browserSync({
    //Выбираем папку-сервер
    server : {
      baseDir: 'app'
    },
    //отключаем уведомления, если не нравится
    notify: false
  });
});

//Синхронизируем и удаляем папку dist
gulp.task('clean',function(){
    return del('dist');
});


//Если сас изменяется, то мы автоматически
//инжектим в сиэсэс изменения
gulp.task('watch', function() {
//Если у нас происходит изменение в данной директории
//выполняем эти таски
  gulp.watch('app/sass/**/*.sass',gulp.parallel('sass'));
  gulp.watch('app/*.html',gulp.parallel('html'));
  gulp.watch('app/js/**/*.js',gulp.parallel('scripts'));

});

//перечисляем таски которые необходимо выполнить
//до запуска таска - это позволяет наладить какую-то последовательность
//потому что нам нужно чтобы изменения скомпилировались до запуска вотчаЫ
gulp.task('run', gulp.parallel('watch','browser-sync','sass'));﻿

//Сборка проекта
gulp.task('pre-build',function(done){
    //Все готовые файлы css
    gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'));
    //Все готовые JS файлы
    gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));
    //Все готовые HTML
     gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
    //Все готовые IMG
     gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'));    
    done();

});
gulp.task('build', gulp.series('clean', 'scripts', 'sass', 'pre-build'));﻿


//The end
