import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

import { filePaths } from '../config/paths.js';
import { logger } from '../config/logger.js';

const createSvgSprite = () => {
  const task = gulp
    .src(filePaths.src.svgIcons, {})
    .pipe(logger.handleError('COPY ROOT FILES'))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
            example: true,
          },
          selector: '%f',
          transformData: (data) => {
            data.svg.map((item) => {
              // change id attribute
              item.data = item.data.replace(/id=\"([^\"]+)\"/gm, `id="${item.name}-$1"`);

              // change id in fill attribute
              item.data = item.data.replace(/fill=\"url\(\#([^\"]+)\)\"/gm, `fill="url(#${item.name}-$1)"`);

              // change id in mask attribute
              item.data = item.data.replace(/mask=\"url\(\#([^\"]+)\)\"/gm, `mask="url(#${item.name}-$1)"`);

              // replace double id for the symbol tag
              item.data = item.data.replace(`id="${item.name}-${item.name}"`, `id="${item.name}"`);
              return item;
            });
            return data; // modify the data and return it
          },
        },
      })
    )
    .pipe(gulp.dest(`${filePaths.srcFolder}/images`));
  return task;
};

export { createSvgSprite };
