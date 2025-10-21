const pagination = require('hexo-pagination');

hexo.extend.generator.register('memos', function(locals) {
  const config = this.config;
  const perPage = config.per_page || 20;
  const paginationDir = config.pagination_dir || 'page';
  
  // 获取所有 memos（layout 为 'talk' 的文章）
  const posts = locals.posts.filter(post => post.layout === 'talk')
    .sort('date', -1);
  
  // 使用 hexo-pagination 生成分页
  return pagination('memos', posts, {
    perPage: perPage,
    layout: ['talks'],
    format: paginationDir + '/%d/',
    data: {
      title: 'Memos'
    }
  });
});
