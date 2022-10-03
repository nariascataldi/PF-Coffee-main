const server = require('./src/app.js');
const { conn, PORT } = require('./src/db.js');
const backPort = PORT || 3020;
const  pushDiets  = require('./src/utils/pushDatabase/pushDiets.js');
const  pushCategories  = require('./src/utils/pushDatabase/pushCategories.js');
const  pushProducts  = require('./src/utils/pushDatabase/pushProducts.js');
const  pushProviders = require('./src/utils/pushDatabase/pushProviders.js');
// const  pushUsers = require('./src/utils/pushDatabase/pushUsers');
const pushNewsletter = require('./src/utils/pushDatabase/pushNewsletter.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  pushProviders();
  pushCategories();
  pushDiets();
  // pushUsers();
  pushProducts();
  pushNewsletter();


  server.listen(backPort, () => {
    console.log(`%s listening at ${backPort}`); 
  });
});
