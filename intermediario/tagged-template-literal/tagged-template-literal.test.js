import exercicios from "./sandbox.js";

// As chamadas de `exercicioUm` possuem delay. O teste leva cerca de 1s, pois há 3 chamadas
test('Avalia a resposta da proposta de exercício número UM de tagged template literals', async () => {
    const respostaUm = exercicios[1]`Eu preciso do ${'briefing'} para começar o ${'job'}`;
    const respostaDois = exercicios[1]`Vou ter que fazer uma ${'call'} para acertar os detalhes`;
    const respostaTres = exercicios[1]`O cliente gostou tanto do ${'pitch'} que aprovou o ${'budget'} na hora`;

    const resultadosEsperados = [
        'Eu preciso do briefing (resumo) para começar o job (tarefa)',
        'Vou ter que fazer uma call (chamada) para acertar os detalhes',
        'O cliente gostou tanto do pitch (apresentação) que aprovou o budget (orçamento) na hora'
    ];

    const promisesFinalizadas = await Promise.allSettled([respostaUm, respostaDois, respostaTres]);

    promisesFinalizadas.forEach((promise, i) => {
        expect(promise.value).toBe(resultadosEsperados[i]);
    })
});