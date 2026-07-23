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

## Je eigen domein koppelen (kinesitherapie-fix.be)
1. Ga in Vercel naar **Project Settings → Domains**.
2. Vul `kinesitherapie-fix.be` in en klik **Add**.
3. Vercel toont welke DNS-instellingen (meestal een A-record en/of CNAME) je moet aanpassen bij je huidige domeinregistrar (waar je het .be-domein hebt geregistreerd).
4. Na het aanpassen van die instellingen (kan tot 24u duren) draait je domein op de nieuwe site.

Vraag dit gerust in de chat als je bij deze laatste stap hulp nodig hebt — dat hangt af van waar je domein precies geregistreerd staat.

## Nog aan te passen voordat je live gaat
- **Foto's**: alle afbeeldingen zijn nu tijdelijke placeholders (van picsum.photos). Vervang de `src="https://picsum.photos/..."` in `index.html` door links naar je eigen foto's, of zet je foto's in een map `images/` en verwijs daarnaar (bv. `src="images/praktijkruimte1.jpg"`).
- **Voetbalpagina**: de 5 blessures zijn een startpunt. Voeg je YouTube-video's toe door dit:
  ```html
  <div class="video-placeholder">Video volgt</div>
  ```
  te vervangen door:
  ```html
  <iframe src="https://www.youtube.com/embed/JOUW-VIDEO-ID" allowfullscreen></iframe>
  ```
