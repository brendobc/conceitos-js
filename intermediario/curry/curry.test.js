import exercicios from './sandbox.js';

test('Avalia a resposta da proposta de exercício número UM', () => {
    const dado = 'a b c d e';

    const respostaUnderline = exercicios[1]('_');
    const respostaEspacoDuplo = exercicios[1]('  ');
    const respostaSemEspaco = exercicios[1]('');

    expect(respostaUnderline(dado)).toBe('a_b_c_d_e');
    expect(respostaEspacoDuplo(dado)).toBe('a  b  c  d  e');
    expect(respostaSemEspaco(dado)).toBe('abcde');
});


test('Avalia a resposta da proposta de exercício número DOIS', () => {
    const fnLista = (...args) => args.join(', ');
    const fnOperacao = (a, b, c) => a * (b - c);

    const respostaLista = exercicios[2](fnLista, 4, 5, 6);
    const respostaOperacao = exercicios[2](fnOperacao, 15, 5);

    expect(respostaLista(1, 2, 3)).toBe('1, 2, 3, 4, 5, 6');
    expect(respostaOperacao(10)).toBe(100);
});