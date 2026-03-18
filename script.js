
const MAX_INTENTS = 5;

let codiSecret = [];
let intentsRestants = MAX_INTENTS;
let jocAcabat = false;

function generarCodiSecret() {
    const codi = [];
    for (let i = 0; i < 4; i++) {
        codi.push(Math.floor(Math.random() * 10));
    }
    return codi;
}

function validarIntent(intent) {
    const pistes = [];
    const copiaCodi = [...codiSecret];
    const copiaIntent = [...intent];

    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === copiaCodi[i]) {
            pistes.push({ pos: i, valor: '1' });
    
            copiaCodi[i] = null;
            copiaIntent[i] = null;
        }
    }
  
    for (let i = 0; i < 4; i++) {
        if (copiaIntent[i] === null) continue; 
        const indexCodi = copiaCodi.indexOf(copiaIntent[i]);
        if (indexCodi !== -1) {
            pistes.push({ pos: i, valor: 'Ø' });
            copiaCodi[indexCodi] = null; 
        } else {
            pistes.push({ pos: i, valor: '×' });
        }
    }

    pistes.sort((a, b) => a.pos - b.pos);
    return pistes.map(p => p.valor);
}

function comprovarFinalJoc(pistes) {
    const esGuanyador = pistes.every(p => p === '1');
    if (esGuanyador) return 'guanya';
    if (intentsRestants <= 0) return 'perd';
    return 'continua';
}

function processarIntent(intent) {
    if (jocAcabat) return null;

    intentsRestants--;
    const pistes = validarIntent(intent);
    const estat = comprovarFinalJoc(pistes);

    if (estat === 'guanya' || estat === 'perd') {
        jocAcabat = true;
    }

    return {
        pistes,          
        estat,          
        intentsRestants, 
        codiSecret: estat !== 'continua' ? codiSecret : null  revelat al final
    };
}

codiSecret = generarCodiSecret();
