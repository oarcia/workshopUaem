const app = require('./app');

//esta parte es un callback arreglaremos el codigo para dejarlo 
//con async await

async function main(){
   await app.listen(3000);
   console.log('server is runing')
}
main();