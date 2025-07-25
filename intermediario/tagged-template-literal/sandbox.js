import { getTraducoes } from "./controller";

/**
 * Tag function que traduz ou adiciona um texto de apoio entre parênteses para as palavras em
 * inglês passadas com dolar brace `${}` logo após aparecerem no texto.
 * 
 * @example
 * // retorna 'posso fazer uma call (chamada)?'
 * exercicioUm`posso fazer uma ${'call'}?`;
 * 
 * @see {@link getTraducoes}
 * 
 * @param {Array<String>} string partes do texto entre as palavras a receberem texto de apoio
 * @param  {...any} palavrasIngles palavras em inglês que devem receber o texto de apoio ou tradução
 * @returns {String} texto completo com os textos de apoio
 */
function exercicioUm(string, ...palavrasIngles) {
    return '';
}

export default {
    1: exercicioUm
};
