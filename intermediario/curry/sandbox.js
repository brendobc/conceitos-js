/**
 * A `exercicioUm` receberá um caractere e deverá retornar uma função que recebe uma string
 * como parâmetro. O retorno dessa segunda função deve ser a mesma string, porém substitua todos os seus espaços pelo caractere previamente recebido.
 * 
 * @param {String} caractere caractere ou texto
 * @returns {Function} função que substitui os espaços em `string` por `caractere`
 */
function exercicioUm(caractere) {
    return (string) => "";
}


/**
 * Dada uma função `exercicioDois` cujos parâmetros são uma função `fn` e parâmetros rest `rest`,
 * retorne uma função `fn2` que faça com que `rest` seja aplicado à função `fn`
 * depois dos parâmetros recebidos por `fn2`
 * 
 * @param {Function} fn função que deve sofrer aplicação parcial
 * @param  {...any} rest argumentos que devem ser passados à direita da função `fn`
 * 
 * @returns {Function} fn2
 */
function exercicioDois(fn, ...rest) {
    return () => {};
}


export default {
    1: exercicioUm,
    2: exercicioDois
};