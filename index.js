
const app = require('./app');
const config = require('./config')


app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Diseñador por: NAUZ 2017")
    console.log("Desarrollado por: Ramla Pro. Software 2017");
    console.log("Dueño del producto: MK Capital SAS 2017");
});
