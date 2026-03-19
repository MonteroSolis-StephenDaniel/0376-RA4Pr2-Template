# 0376-RA4Pr2 — Projecte Col·laboratiu: Mastermind
 
**Alumnes:** Awa Gikineh · Daniel Montero
**Mòdul:** 0376 - Implantació d'aplicacions Web
**Curs:** 2025/2026
 
---
 
## Bateria de preguntes sobre Git i GitHub
 
---
 
### 1. Reconeix la utilitat de les aplicacions d'ofimàtica web
 
**1. Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**
 
GitHub és una aplicació web que permet a múltiples persones treballar sobre els mateixos arxius de codi des de qualsevol lloc amb connexió a internet. Ofereix eines com les branques, les pull requests i els comentaris en línia que faciliten la revisió i integració del treball de cada membre de l'equip sense necessitat d'estar al mateix lloc físic.
 
---
 
**2. Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?**
 
- **Accés remot:** es pot accedir al projecte des de qualsevol dispositiu.
- **Còpia de seguretat:** el codi està emmagatzemat al núvol, evitant pèrdues per fallades de maquinari.
- **Historial de canvis:** es pot consultar i revertir qualsevol versió anterior.
- **Col·laboració:** diverses persones poden treballar simultàniament sense sobreescriure's.
- **Visibilitat:** els repositoris públics permeten que altres desenvolupadors coneguin i contribueixin al projecte.
 
---
 
**3. Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?**
 
GitHub utilitza Git com a sistema de control de versions, de manera que cada `commit` registra l'estat del projecte en un moment determinat. Això permet comparar versions, identificar quan es va introduir un error i tornar a un estat anterior si cal. Les branques permeten desenvolupar noves funcionalitats sense afectar la versió estable.
 
---
 
**4. En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**
 
És especialment útil en:
- Projectes de desenvolupament de programari amb múltiples col·laboradors.
- Projectes web (HTML, CSS, JavaScript).
- Aplicacions mòbils o d'escriptori.
- Projectes de codi obert on qualsevol pot contribuir.
- Treballs acadèmics en grup que requereixen un seguiment de les aportacions individuals.
 
---
 
**5. Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?**
 
| Git | Emmagatzematge tradicional |
|---|---|
| Registra l'historial complet de canvis | Només guarda l'estat actual |
| Permet revertir a versions anteriors | No es pot recuperar versions anteriors fàcilment |
| Facilita el treball col·laboratiu | Cal enviar fitxers manualment (correu, USB…) |
| Detecta i gestiona conflictes | Els conflictes s'han de resoldre manualment |
| Funciona de forma distribuïda | Centralitzat en un dispositiu |
 
---
 
### 2. Classifica segons la funcionalitat i prestacions específiques
 
**6. Explica quina és la diferència entre Git i GitHub.**
 
**Git** és un sistema de control de versions distribuït que s'executa localment a l'ordinador. Permet fer commits, branques i merges sense connexió a internet.
 
**GitHub** és una plataforma web que allotja repositoris Git al núvol i afegeix funcionalitats col·laboratives com issues, pull requests, GitHub Actions i GitHub Pages. Git és l'eina; GitHub és el servei que l'utilitza.
 
---
 
**7. Quines funcionalitats ofereix GitHub a més del control de versions del codi?**
 
- **Issues:** gestió de tasques, errors i millores.
- **Pull Requests:** revisió i discussió de canvis abans d'integrar-los.
- **GitHub Pages:** allotjament gratuït de pàgines web estàtiques.
- **GitHub Actions:** automatització de fluxos de treball (CI/CD).
- **Wiki:** documentació integrada al repositori.
- **Projects:** taulers kanban per organitzar tasques.
- **Insights:** estadístiques d'activitat del repositori.
 
---
 
**8. Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**
 
- **Repositoris:** Espai on s'emmagatzema tot el codi, l'historial de versions i la documentació d'un projecte. Pot ser públic o privat.
 
- **Issues:** Sistema de seguiment de tasques, errors o propostes de millora. Permeten assignar responsables, afegir etiquetes i vincular-les a pull requests.
 
- **Pull Requests:** Sol·licitud per integrar els canvis d'una branca a una altra. Permeten revisar el codi, comentar línies concretes i aprovar o rebutjar els canvis abans del merge.
 
- **GitHub Pages:** Servei que permet publicar pàgines web estàtiques directament des d'un repositori de GitHub, de forma gratuïta, amb una URL del tipus `usuari.github.io/repositori`.
 
---
 
**9. Quina funció tenen les branques (branches) en Git?**
 
Les branques permeten treballar en paral·lel sobre el mateix projecte sense afectar la branca principal (`main`). Cada branca és una línia de desenvolupament independent on es poden fer canvis, provar funcionalitats o corregir errors. Un cop el treball està llest i revisat, es fusiona (`merge`) amb la branca principal.
 
---
 
**10. Per a què serveixen les pull requests en un projecte col·laboratiu?**
 
Les pull requests serveixen per proposar la integració dels canvis d'una branca a una altra de forma controlada. Permeten que altres membres de l'equip revisin el codi, facin comentaris, suggereixin millores i aprovin els canvis abans que s'integrin. Això garanteix la qualitat del codi i evita errors a la branca principal.
 
---
 
### 3. Gestiona els comptes d'usuari
 
**11. Què és un compte d'usuari a GitHub i per què és necessari per treballar amb repositoris remots?**
 
Un compte d'usuari a GitHub és un perfil personal que identifica cada desenvolupador a la plataforma. És necessari per poder crear repositoris, fer commits remots, col·laborar en projectes d'altres usuaris i accedir a funcionalitats com issues o pull requests. Sense compte, només es pot visualitzar repositoris públics.
 
---
 
**12. Quina diferència hi ha entre un repositori públic i un privat a GitHub?**
 
- **Repositori públic:** qualsevol persona pot veure el codi, clonar-lo i fer forks. Ideal per a projectes de codi obert.
- **Repositori privat:** només el propietari i els col·laboradors autoritzats hi poden accedir. Adequat per a projectes professionals o personals que no es volen compartir públicament.
 
---
 
**13. Com es pot afegir un col·laborador a un repositori de GitHub?**
 
Des del repositori, cal anar a **Settings → Collaborators → Add people**, buscar l'usuari pel seu nom d'usuari o correu electrònic i enviar-li una invitació. L'usuari haurà d'acceptar la invitació per tenir accés al repositori.
 
---
 
**14. Quins rols o permisos pot tenir un usuari dins d'un repositori?**
 
- **Read:** pot veure i clonar el repositori però no fer canvis.
- **Triage:** pot gestionar issues i pull requests sense modificar el codi.
- **Write:** pot fer push de canvis al repositori.
- **Maintain:** gestió del repositori sense accés a configuracions sensibles.
- **Admin:** accés total, inclosa la configuració i eliminació del repositori.
 
---
 
**15. Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**
 
Una mala gestió dels permisos pot provocar canvis no autoritzats, eliminació accidental de codi o filtracions d'informació sensible. Assignar el nivell mínim de permisos necessari per a cada rol garanteix la seguretat del projecte i evita errors difícils de revertir.
 
---
 
### 4. Aplica criteris de seguretat en l'accés dels usuaris
 
**16. Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**
 
- Qualsevol usuari podria modificar o eliminar codi críticament important.
- Es podrien introduir vulnerabilitats de seguretat de forma accidental o malintencionada.
- Es podria sobreescriure la branca `main` amb codi defectuós.
- Informació sensible podria ser exposada o eliminada.
 
---
 
**17. Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**
 
Les contrasenyes tradicionals poden ser interceptades o robades. Els **tokens d'accés personal (PAT)** i les **claus SSH** ofereixen un nivell de seguretat superior perquè es poden limitar a permisos concrets, revocar en qualsevol moment i no exposen la contrasenya principal del compte.
 
---
 
**18. Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?**
 
Si un repositori és públic, qualsevol persona podria accedir a aquestes credencials i utilitzar-les de forma malintencionada, comprometent servidors, bases de dades o serveis externs. Fins i tot en repositoris privats és un risc, ja que altres col·laboradors hi tindrien accés. A més, Git conserva l'historial, de manera que esborrar el fitxer no elimina les credencials de les versions anteriors.
 
---
 
**19. Quines bones pràctiques de seguretat s'han de seguir quan es treballa amb GitHub?**
 
- No pujar mai contrasenyes, tokens ni claus privades al repositori.
- Utilitzar un fitxer `.gitignore` per excloure fitxers sensibles com `.env`.
- Activar l'autenticació en dos factors (2FA) al compte de GitHub.
- Usar SSH o tokens en lloc de contrasenyes per autenticar-se.
- Revisar els permisos dels col·laboradors periòdicament.
- Protegir la branca `main` amb regles que requereixin aprovació de pull requests.
 
---
 
**20. Per què és important controlar qui pot fer push directament a la branca principal (`main`)?**
 
La branca `main` conté el codi estable i en producció. Permetre que qualsevol faci push directament augmenta el risc d'introduir errors sense revisió. Amb proteccions de branca es pot exigir que tots els canvis passin per una pull request i siguin aprovats per almenys un altre membre de l'equip.
 
---
 
### 5. Utilitza les aplicacions de forma cooperativa
 
**21. Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**
 
Cada membre clona el repositori i crea la seva pròpia branca per desenvolupar la seva part. Un cop acabada, obre una pull request per integrar els canvis a `main`. Els companys revisen el codi, comenten si cal i aproven el merge. Si hi ha conflictes, es resolen conjuntament. D'aquesta manera el treball de cadascú s'integra de forma ordenada i controlada.
 
---
 
**22. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**
 
Treballar amb branques aïlla els canvis de cada funcionalitat o correcció, de manera que si alguna cosa falla no afecta el codi estable. Permet que diverses persones treballin en paral·lel sense interferències i facilita la revisió del codi abans d'integrar-lo. La branca `main` sempre queda en un estat funcional.
 
---
 
### 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions
 
**23. Per què és important incloure un fitxer `README.md` en un repositori de GitHub?**
 
El `README.md` és la primera cosa que veu qualsevol persona que visita el repositori. Proporciona una descripció del projecte, instruccions d'instal·lació i ús, i qualsevol altra informació rellevant. Sense ell, els visitants no sabrien de quin projecte es tracta ni com utilitzar-lo.
 
---
 
**24. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**
 
- És un llenguatge lleuger i fàcil d'aprendre.
- Es renderitza automàticament a GitHub amb format visual (capçaleres, llistes, taules, codi…).
- El fitxer és text pla, compatible amb Git i llegible sense cap eina especial.
- Permet estructurar la documentació de forma clara i professional amb molt poc esforç.
 
---
 
**25. Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**
 
Una bona documentació permet que qualsevol desenvolupador entengui ràpidament l'estructura del projecte, com instal·lar-lo, com funciona i com contribuir-hi. Redueix el temps d'incorporació de nous membres, evita malentesos i facilita el manteniment a llarg termini. Sense documentació, el codi és molt més difícil d'entendre i reutilitzar.
 
---
 
*Documentació elaborada per Awa Gikineh i Daniel Montero — Curs 2025/2026*