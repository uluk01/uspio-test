import gulp from 'gulp';

import { filePaths } from '../config/paths.js';

const fonts = () => gulp.src(filePaths.src.fonts).pipe(gulp.dest(filePaths.build.fonts));

export { fonts };
