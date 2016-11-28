var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

var TEMPLATE = 'multi-page';
var PUBLIC = 'public_html';

gulp.task('js', function(){
	return gulp.src('src/js/'+TEMPLATE+'/main.js')
		.pipe(plumber())
		.pipe(uglify()
			.on("error", notify.onError("Error: <%= error.message %>"))
		)
		.pipe(plumber.stop())
		.pipe(gulp.dest(PUBLIC+'/js'))
});

gulp.task('sass', function(){
	return gulp.src('src/sass/'+TEMPLATE+'/main.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle:'compressed'})
			.on('error', notify.onError("Error: <%= error.message %>"))
		)
		.pipe(plumber.stop())
		.pipe(gulp.dest(PUBLIC+'/css'))
});

gulp.task('default', ["sass", 'js'], function(){
	gulp.watch('src/sass/'+TEMPLATE+'/main.scss', ['sass']);
	gulp.watch('src/js/'+TEMPLATE+'/main.js', ['js']);
});

