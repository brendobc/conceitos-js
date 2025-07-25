import { getTraducoes } from "./controller";

export async function respostaExercicioUm(stringLista, ...palavrasIngles) {
    let resultado = stringLista[0];

    if(palavrasIngles.length === 0) {
        return resultado;
    }

    const traducoes = await getTraducoes(...palavrasIngles);

    for(let i=0; i < palavrasIngles.length;) {
        const traducao = traducoes[palavrasIngles[i]]
            ? ` (${traducoes[palavrasIngles[i]]})`
            : '';

        resultado += `${palavrasIngles[i]}${traducao}${stringLista[++i]}`;
    }

    return resultado;
}

export default {
    1: respostaExercicioUm
};