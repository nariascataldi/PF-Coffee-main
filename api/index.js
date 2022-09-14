const server = require('./src/app.js');
const { conn, PORT } = require('./src/db.js');
const  pushDiets  = require('./src/utils/pushDatabase/pushDiets.js');
const  pushCategories  = require('./src/utils/pushDatabase/pushCategories.js');
const  pushProducts  = require('./src/utils/pushDatabase/pushProducts.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  
  // pushDiets();  pushCategories();
  // pushProducts(); 
  
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); 
  });
});
