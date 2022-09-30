
export const reduceCart = (fillCart)=>{
     // reduceCart
     let quantities = {};

     for (let i = 0; i < fillCart.length; i++) {
         if (!quantities[fillCart[i].title]) quantities[fillCart[i].title] = 1;
         else quantities[fillCart[i].title]++;
     }
 
     //console.log(quantities); // { coffe: 2, yogurt: 1, sandwich: 2 }
 
     // luego armamos nuestro reducedCart
 
     let reducedCart = [];
     let quantitiesKeys = Object.keys(quantities);
     let found;
 
     for (let j = 0; j < quantitiesKeys.length; j++) {
         found = fillCart.find((product) => product.title === quantitiesKeys[j]);
         reducedCart.push({ ...found, quantity: quantities[quantitiesKeys[j]] });
     }
 return reducedCart 
} 