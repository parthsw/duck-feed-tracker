// shortening require paths
require('app-module-path').addPath(__dirname);

const server = require('src/shared/server');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
