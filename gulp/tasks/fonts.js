import gulp from 'gulp';
import fs from 'fs';
import fonter from 'gulp-fonter-fix';

import { filePaths } from '../config/paths.js';

const fonts = () => {
  return gulp.src(filePaths.src.fonts).pipe(gulp.dest(filePaths.build.fonts));
};

export { fonts };
