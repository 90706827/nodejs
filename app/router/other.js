'use strict';

module.exports = app => {

    const { router, controller } = app;
    
    app.router.get('/get', controller.news.get);
    app.router.get('/params/:id', controller.news.params);
    
    app.router.get('/news', controller.news.index);
    
    app.router.get('/', controller.home.index);
}