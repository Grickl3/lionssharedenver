var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log("What is my purpose?");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your markup here.");
});

gulp.task('styles', function() {
	


	console.log("Styles updated.");
});

gulp.task('watch', function() {

	browserSync.init({
		server: {
			baseDir: "."
		}
	});

	watch('index.html', function() {
		browserSync.reload();
		// gulp.start('html');
	});

	watch('./styles/*.css', function() {
		// gulp.start('styles');
	});

});