function respostaExercicioUm(caractere) {
    return function(string) {
        return string.replaceAll(' ', caractere);
    }
}

function respostaExercicioDois(fn, ...rest) {
    return function(...argsInternos) {
        return fn.apply(this, [...argsInternos, ...rest]);
    };
}

export default {
    1: respostaExercicioUm,
    2: respostaExercicioDois
};