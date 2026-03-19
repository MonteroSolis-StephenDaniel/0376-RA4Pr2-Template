const MAX_INTENTS = 5;
let intentsRestants = MAX_INTENTS;


const selects = document.querySelectorAll('.code-input');

selects.forEach(select => {
    for (let i = 0; i <= 9; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
});


function logTerminal(missatge, tipus = 'normal') {
    const terminal = document.getElementById('terminal');
    const linia = document.createElement('p');
    linia.classList.add('line');

    if (tipus === 'error') {
        linia.classList.add('error');
        linia.textContent = '> [ERROR] ' + missatge;
    } else if (tipus === 'exit') {
        linia.classList.add('success');
        linia.textContent = '> [OK] ' + missatge;
    } else {
        linia.textContent = '> ' + missatge;
    }

    terminal.appendChild(linia);
    terminal.scrollTop = terminal.scrollHeight;
}


function actualitzarRondes() {
    intentsRestants--;
    document.getElementById('rondes-restants').textContent = intentsRestants;
}

// --- GESTOR D'ESDEVENIMENTS ---
document.getElementById('btn-enviar').addEventListener('click', () => {

    const intent = Array.from(selects).map(s => parseInt(s.value));

    logTerminal('Intent introduït: [ ' + intent.join(' | ') + ' ]');

    const pistes = validarIntent(intent);

    logTerminal('Pistes: ' + pistes.join('  '));

    if (comprovarFinalJoc(pistes, intentsRestants - 1)) {
        document.getElementById('btn-enviar').disabled = true;
        return;
    }

    actualitzarRondes();

    if (intentsRestants === 0) {
        logTerminal('GAME OVER. Has esgotat els intents.', 'error');
        document.getElementById('btn-enviar').disabled = true;
    }
});
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
