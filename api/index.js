const server = require('./src/app.js');
const { conn, PORT } = require('./src/db.js');
const  pushDiets  = require('./src/utils/pushDatabase/pushDiets.js');
const  pushCategories  = require('./src/utils/pushDatabase/pushCategories.js');
const  pushProducts  = require('./src/utils/pushDatabase/pushProducts.js');
const pushProviders = require('./src/utils/pushDatabase/pushProviders.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  
  pushCategories();
  pushProducts(); 
  pushProviders();
  // pushDiets();  
  
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); 
  });
});
