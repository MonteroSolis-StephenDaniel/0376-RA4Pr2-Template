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
    terminal.scrollTop = terminal.scrollHeight; // auto-scroll avall
}
 

function actualitzarRondes() {
    intentsRestants--;
    document.getElementById('rondes-restants').textContent = intentsRestants;
}

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