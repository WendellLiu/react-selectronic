const ghpages = require('gh-pages');

ghpages.publish(
  'static',
  {
    message: 'update demo page',
    push: false,
  },
  (error) => {
    console.log('finish');
    console.log(error);
  },
);
