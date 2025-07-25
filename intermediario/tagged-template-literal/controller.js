/** @typedef { String } PalavraIngles palavra a ser traduzida */
/** @typedef { String } Traducao tradução */
/** @typedef { Map<PalavraIngles, Traducao> } Vocabulario */

/** @type { Vocabulario } */
const vocabulario = new Map([
    ['call', 'chamada'],
    ['briefing', 'resumo'],
    ['job', 'tarefa'],
    ['budget', 'orçamento'],
    ['pitch', 'apresentação']
]);

/**
 * Monta um objeto com as traduções das palavras recebidas e o retorna
 * Para tal, usa-se os dados declarados na variável {@link vocabulario}
 * Caso haja alguma tradução que seja necessária existir, basta adicionar no objeto mencionado
 * 
 * Esta função simula uma requisição a um servidor que responde em 1 segundo
 * 
 * @param  {...String} palavras palavras em inglês a serem traduzidas. Precisam existir em {@link vocabulario}
 * @returns {Promise<{}>} objeto em que as keys são as palavras a serem traduzidas e os values são as traduções
 */
export async function getTraducoes(...palavras) {
    const objTraducoes = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(palavras.reduce(
                (acc, curr) => {
                    acc[curr] = vocabulario.get(curr);
                    return acc;
                },
                {}
            ))
        }, 1000);
    });

    return objTraducoes;
}