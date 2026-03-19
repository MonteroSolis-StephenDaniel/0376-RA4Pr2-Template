let codiSecret = [];

function generarCodiSecret() {
    const codi = [];
    for (let i = 0; i < 4; i++) {
        codi.push(Math.floor(Math.random() * 10));
    }
    return codi;
}
 
function validarIntent(intent) {
    const pistes = [];
    const copiaCodi   = [...codiSecret];
    const copiaIntent = [...intent];

    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === copiaCodi[i]) {
            pistes.push({ pos: i, valor: '1' });
            copiaCodi[i]   = null;
            copiaIntent[i] = null;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === null) continue;
        const idx = copiaCodi.indexOf(copiaIntent[i]);
        if (idx !== -1) {
            pistes.push({ pos: i, valor: 'Ø' });
            copiaCodi[idx] = null;
        } else {
            pistes.push({ pos: i, valor: '×' });
        }
    }

    pistes.sort((a, b) => a.pos - b.pos);
    return pistes.map(p => p.valor);
}

function comprovarFinalJoc(pistes, intentsRestants) {
    const esGuanyador = pistes.every(p => p === '1');

    if (esGuanyador) {
        logTerminal('CODI CORRECTE! Has guanyat!', 'exit');
        return true;
    }

    if (intentsRestants <= 0) {
        logTerminal('GAME OVER. El codi secret era: [ ' + codiSecret.join(' | ') + ' ]', 'error');
        return true;
    }

    return false;
}

codiSecret = generarCodiSecret();
