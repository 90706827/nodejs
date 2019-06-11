'use strict';

const Service = require('egg').Service;

class NewsService extends Service {

    async getList() {
        let list = [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
        return list;
    }
}

module.exports = NewsService;
