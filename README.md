# Kinesitherapie Fix Heule — nieuwe website

## Bestanden in dit project
- `index.html` — de homepage (alles op één pagina)
- `voetbal.html` — de aparte voetbalpagina
- `css/style.css` — alle opmaak en kleuren
- `js/main.js` — klein scriptje (jaartal in de footer)

## Zo bekijk je de site lokaal
Dubbelklikken op `index.html` werkt soms, maar de betrouwbaarste manier:
1. Installeer in VS Code de extensie **Live Server**.
2. Open de hele projectmap in VS Code (`File → Open Folder`) — belangrijk: open de map, niet enkel het bestand.
3. Rechtsklik op `index.html` → **Open with Live Server**.

Zie je geen opmaak? Controleer dat `index.html` en de mappen `css/` en `js/` in dezelfde hoofdmap staan.

## Zo zet je dit op GitHub (zonder terminal)
1. Ga naar github.com en maak een gratis account (indien nog niet gedaan).
2. Klik rechtsboven op **+** → **New repository**.
3. Geef als naam bv. `kinesitherapie-fix-website`, zet op **Public**, klik **Create repository**.
4. Klik op **uploading an existing file**.
5. Sleep alle bestanden en mappen van dit project (`index.html`, `voetbal.html`, de map `css`, de map `js`, dit `README.md`) naar het uploadvak.
6. Klik onderaan op **Commit changes**.

Klaar — je code staat nu op GitHub.

## Zo zet je de site gratis online (Vercel)
1. Ga naar vercel.com en maak een gratis account met "Continue with GitHub".
2. Klik op **Add New → Project**.
3. Selecteer je `kinesitherapie-fix-website` repository.
4. Framework Preset: kies **Other** (het is een pure HTML-site, geen build nodig).
5. Laat "Build Command" en "Output Directory" op hun standaardwaarde staan en klik **Deploy**.
6. Na een minuutje krijg je een link zoals `kinesitherapie-fix-website.vercel.app` — je site staat live.

## Je eigen domein koppelen (kinesitherapie-fix.be)
1. Ga in Vercel naar **Project Settings → Domains**.
2. Vul `kinesitherapie-fix.be` in en klik **Add**.
3. Vercel toont welke DNS-instellingen (meestal een A-record en/of CNAME) je moet aanpassen bij je huidige domeinregistrar (waar je het .be-domein hebt geregistreerd).
4. Na het aanpassen van die instellingen (kan tot 24u duren) draait je domein op de nieuwe site.

Vraag dit gerust in de chat als je bij deze laatste stap hulp nodig hebt — dat hangt af van waar je domein precies geregistreerd staat.

## Foto's toevoegen (via GitHub, geen terminal nodig)

De site verwacht een map `images/` met daarin exact deze bestandsnamen:

**Praktijkruimte (homepage, bovenaan)**
- `praktijk-1.jpg` t.e.m. `praktijk-5.jpg` — foto's van de praktijkruimte
- `praktijk-over-ons.jpg` — foto bij de sectie "Wie we zijn"

**Team**
- `team-nynke.jpg`
- `team-emma.jpg`
- `team-wouter.jpg`

**Specialisaties**
- `spec-algemene-kinesitherapie.jpg`
- `spec-orthopedische-revalidatie.jpg`
- `spec-sportkinesitherapie.jpg`
- `spec-manuele-therapie.jpg`
- `spec-dry-needling.jpg`
- `spec-cupping.jpg`
- `spec-core-stability.jpg`
- `spec-tmd-kaakklachten.jpg`
- `spec-pre-postnatale-revalidatie.jpg`

**Stappen op GitHub:**
1. Ga naar je repository, klik **Add file → Create new file**.
2. Typ als bestandsnaam `images/.gitkeep` (dit maakt automatisch de map `images` aan) en klik **Commit changes**.
3. Klik op de nieuwe map **images** om erin te gaan.
4. Klik **Add file → Upload files**, sleep al je foto's naar binnen — **let op: de bestandsnamen moeten exact overeenkomen met de lijst hierboven** (hoofdlettergevoelig).
5. Klik **Commit changes**.

Zodra Vercel de nieuwe commit oppikt (automatisch, na een halve minuut), verschijnen je foto's live op de site. Grote foto's (>2-3 MB) kan je best eerst comprimeren (bv. via squoosh.app) voor een snellere site.

## Nog aan te passen voordat je live gaat
- **Voetbalpagina**: de 5 blessures zijn een startpunt. Voeg je YouTube-video's toe door dit:
  ```html
  <div class="video-placeholder">Video volgt</div>
  ```
  te vervangen door:
  ```html
  <iframe src="https://www.youtube.com/embed/JOUW-VIDEO-ID" allowfullscreen></iframe>
  ```
- **Online afspraaksysteem**: de knop "Maak hier je afspraak" linkt nog nergens naartoe — voeg de link naar je huidige afsprakensysteem toe in `index.html` en `voetbal.html`.
