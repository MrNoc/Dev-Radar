//Neste arquivo js, isolamos uma função para não ficar repetidia no código.
module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}