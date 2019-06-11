'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/get', controller.news.get);
  router.get('/params/:id', controller.news.params);
  
  router.get('/news', controller.news.index);
};
