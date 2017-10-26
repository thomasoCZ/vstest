var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');

// add gulp-uncss to remove unused css code

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}


gulp.task('sass', function() {

	var processors = [
	autoprefixer({browsers: ['last 4 versions']}),
	//cssnano(),
	];

	return gulp.src('scss/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.on('error', swallowError) 
	.pipe(postcss(processors))
	.pipe(sourcemaps.write())
	.on('error', swallowError) 
	.pipe(gulp.dest(''));

});


gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
	

});