const ghpages = require('gh-pages');

ghpages.publish(
  'static',
  {
    message: 'update demo page',
    push: true,
  },
  (error) => {
    console.log('finish');
    console.log(error);
  },
);
