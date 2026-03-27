---
title: "Claude Code Dream Functie: Auto Memory Consolidatie Uitgelegd"
description: "Ontdek Claude Code's auto dream functie - een revolutionaire memory consolidatie feature die werkt als REM-slaap voor je AI assistent. Handmatig activeren & gebruiken."
date: "2026-03-27"
lastModified: "2026-03-27"
author: "Bram"
category: "Tips & Tricks"
tags: ["auto-dream", "memory", "consolidatie", "claude-code"]
image: "/images/default-og.png"
imageAlt: "Claude Code auto-dream functie visualisatie met memory consolidatie proces"
published: true
faqs:
  - question: "Wat doet de dream functie in Claude Code precies?"
    answer: "De auto-dream functie is een achtergrondproces dat Claude's geheugenbestanden consolideert tussen sessies. Het ruimt verouderde notities op, verwijdert tegenstrijdigheden, zet relatieve datums om naar absolute datums, en organiseert informatie in schone topicbestanden. Dit proces werkt als REM-slaap voor je AI-assistent."
  - question: "Hoe kan ik de dream functie handmatig activeren?"
    answer: "Je kunt auto-dream handmatig activeren door 'dream', 'auto dream' of 'consolidate my memory files' te typen in een Claude Code sessie. Het /dream commando bestaat maar is nog niet uitgerold naar alle gebruikers. De automatische trigger vereist 24 uur + 5 sessies."
  - question: "Waarom heeft Claude Code een slaapfunctie nodig?"
    answer: "Na 20+ sessies worden auto memory notities een chaos met tegenstrijdige informatie, verouderde relatieve datums en duplicaten. Zonder consolidatie raakt het geheugen vervuild met 'ruis' die Claude meer verwart dan helpt. Auto-dream houdt het geheugen schoon en bruikbaar."
---

# Claude Code Dream Functie: Auto Memory Consolidatie Uitgelegd

<cite index="6-8,6-24">Claude Code heeft stilletjes een functie gelanceerd die ze nog niet officieel hebben aangekondigd: Auto Dream. Het lost het grootste probleem met auto memory op: verval over tijd. De naamgeving is bewust gekozen</cite>, en de metafoor blijkt verrassend accuraat.

De dream functie van Claude Code werkt als een REM-slaapproces voor je AI-assistent. <cite index="6-35,6-36">Auto Dream is de REM-slaapcyclus. Het beoordeelt wat Auto Memory heeft verzameld, versterkt wat nog relevant is, verwijdert wat verouderd is, en reorganiseert de rest in schone, geïndexeerde topicbestanden</cite>.

## Wat is de Claude Code dream functie?

<cite index="6-3,6-4">Claude Code Auto Dream consolideert geheugenbestanden, ruimt verouderde notities op en voegt inzichten samen. Het is als REM-slaap voor je AI-agent</cite>. Deze functie draait als een achtergrondproces dat periodiek Claude's opgeslagen notities scant en reorganiseert.

De functie bouwt voort op het auto memory systeem dat in februari 2026 werd geïntroduceerd. <cite index="9-13,9-14">Auto memory laat Claude zijn eigen notities opslaan terwijl hij werkt - van build commands en debugging inzichten tot architectuurbesluiten en code style voorkeuren. Die notities worden opgeslagen in een apart geheugenbestand, meestal zichtbaar als MEMORY.md</cite>.

## Waarom heeft Claude een slaapfunctie nodig?

Het probleem ontstaat na uitgebreid gebruik. <cite index="6-11,6-12,6-13,6-14,6-15">Na 20+ sessies worden die notities een chaos. Tegenstrijdige entries stapelen zich op. Relatieve datums zoals "gisteren" verliezen hun betekenis. Verouderde debugging oplossingen verwijzen naar bestanden die niet meer bestaan. Het notitieboek dat Claude zou moeten helpen herinneren wordt in plaats daarvan ruis die het verwart</cite>.

De auto memory functie is als Claude's dagelijkse brein:
- Het maakt notities tijdens het werk
- Debugging patronen, build commands, architectuur beslissingen
- Je voorkeuren en workflow gewoontes

<cite index="6-31,6-32,6-33,6-34">Maar zonder een consolidatiestap stapelen die notities zich op zoals ongeconsolideerde kortetermijnherinneringen. Tegenstrijdigheden blijven bestaan. Verouderde entries blijven hangen. De signaal-ruis verhouding verslechtert met elke sessie</cite>.

## Hoe werkt het auto-dream proces?

<cite index="6-39,6-40">Wanneer Auto Dream draait, volgt het een gestructureerd vierfasenproces. Elke fase heeft een specifiek doel, en samen transformeren ze verspreide sessienotities in georganiseerde projectkennis</cite>.

### Fase 1: Oriëntatie
<cite index="6-41,6-42,6-43">Claude leest de huidige geheugendirectory en neemt de inventaris op van wat bestaat. Het opent MEMORY.md (het indexbestand), scant de lijst van topicbestanden, en bouwt een mentale kaart van de huidige geheugenstaat. Deze fase beantwoordt: "Wat weet ik al, en hoe is het georganiseerd?"</cite>

### Fase 2: Signaal verzamelen
<cite index="6-44,6-45,6-46,6-47">Dit is waar Auto Dream doorzoekt door je sessietranscripten (de JSONL bestanden die Claude lokaal opslaat voor elke sessie). Het leest niet elk transcript van begin tot eind. Dat zou onbetaalbaar duur zijn voor projecten met honderden sessies. In plaats daarvan zoekt het nauwkeurig naar specifieke patronen: Gebruikerscorrecties, expliciete saves, terugkerende thema's, belangrijke beslissingen</cite>.

### Fase 3: Consolidatie
<cite index="21-21,21-22,21-24,21-25,21-29,21-30">Claude voegt nieuwe informatie toe aan bestaande topicbestanden en voert kritiek onderhoud uit: Converteert relatieve datums naar absolute datums. "Gisteren besloten we Redis te gebruiken" wordt "Op 2026-03-15 besloten we Redis te gebruiken." Verwijdert tegenstrijdige feiten. Voegt overlappende entries samen</cite>.

### Fase 4: Opruimen
<cite index="29-12,29-13,29-14,29-15">De finale fase dwingt een harde beperking af: houd MEMORY.md onder 200 regels. Dit is niet willekeurig. De geheugenindex wordt geïnjecteerd in elke Claude Code sessie's context. Een indexbestand van 500 regels verbruikt context tokens die beschikbaar zouden moeten zijn voor daadwerkelijk werk</cite>.

## Hoe activeer je de dream functie?

### Automatische activatie
<cite index="18-35,18-36,18-37,18-38,18-39">Twee voorwaarden moeten beide waar zijn voordat een consolidatiecyclus wordt geactiveerd: 24 uur + 5 sessies. Beide voorwaarden zijn vereist. Als je een lange sessie had over twee dagen, wordt Auto Dream niet geactiveerd (niet genoeg sessies). Als je 10 snelle sessies in twee uur draaide, wordt het ook niet geactiveerd (niet genoeg tijd)</cite>.

### Handmatige activatie
<cite index="18-1,18-9">In de tussentijd kun je het handmatig activeren door Claude direct te vertellen: "dream", "auto dream", "consolidate my memory files". Claude herkent de intentie en doorloopt hetzelfde vierfasenproces</cite>.

### Status controleren
<cite index="6-16,6-17,6-18,6-19">Controleer of Auto Dream actief is op je setup. Voer /memory uit binnen elke Claude Code sessie. Zoek naar "Auto-dream: on" in de selector. Als je het ziet, consolideert Claude al je geheugenbestanden op de achtergrond tussen sessies</cite>.

```bash
# Controleer je huidige geheugenstaat
/memory

# Zoek naar:
# Auto-dream: on
```

## Vier geheugensystemen in Claude Code

<cite index="23-4,23-5,23-6,23-7,23-8,23-9,23-10,23-11,23-12">Claude Code heeft nu vier verschillende geheugenlagen: - CLAUDE.md: instructies die je schrijft - Auto Memory: notities die Claude per sessie schrijft - Session Memory: gesprekscontinuïteit - Auto Dream: periodieke consolidatie van alles wat is opgebouwd. De sterkste setup draait alle vier. Een instructiehandleiding, een notulist, kortetermijngeheugen, en REM-slaap. Dat is de volledige geheugenarchitectuur van een werkende cognitieve agent</cite>.

## Praktijktips voor auto-dream

### Laat het automatisch draaien
<cite index="18-19,18-20,18-21">Laat het automatisch draaien voor de meeste projecten. De standaard triggercondities (24u + 5 sessies) werken goed voor actieve ontwikkeling. Je hoeft dit niet te babysit</cite>.

### Forceer na grote wijzigingen
<cite index="18-22,18-23,18-24">Forceer een dream na grote refactors. Als je de helft van je codebase hebt hernoemd, frameworks hebt gemigreerd, of je API-structuur hebt gewijzigd, activeer dan een handmatige dream-cyclus. De oude geheugen-entries zullen meer verwarring dan duidelijkheid veroorzaken totdat ze zijn geconsolideerd</cite>.

### Controleer de output af en toe
<cite index="18-25,18-26,18-27,18-28">Bekijk je MEMORY.md na een dream-cyclus. Auto Dream is goed, maar niet perfect. Je zou een consolidatiekeuze kunnen spotten waar je het niet mee eens bent</cite>.

## REM-slaap vergelijking

De metafoor is opvallend accuraat. <cite index="21-4,21-5,21-6">Overdag absorbeert je brein ruwe zintuiglijke input en slaat het op als kortetermijnherinneringen. Tijdens REM-slaap speelt je brein de gebeurtenissen van de dag opnieuw af, versterkt verbindingen die ertoe doen, gooit weg wat niet belangrijk is, en organiseert alles in langetermijngeheugen. Mensen die niet genoeg REM-slaap krijgen hebben moeite om blijvende herinneringen te vormen</cite>.

<cite index="22-3,22-4,22-6,22-8">AutoDream draait tussen actieve sessies, niet tijdens ze. Dit weerspiegelt het slaapmodel: consolidatie gebeurt tijdens de rustperiode, zodat de volgende actieve sessie begint met een schonere, beter georganiseerde geheugenstaat. Net zoals je niet bewust controleert wat je brein 's nachts consolideert, werkt AutoDream automatisch</cite>.

## Waarschuwingen en beperkingen

<cite index="8-16,8-17,8-18">Auto-dream wordt gecontroleerd door een server-side feature flag (codenaam: tengu_onyx_plover). Het is geen simpele schakelaar in settings.json. Anthropic beheert de uitrol aan hun kant</cite>. <cite index="9-5,9-6,9-7">Auto dream is nog geen officiële functie binnen Claude Code. Referenties zijn opgedoken in community rapportages rond recente Claude Code versies, inclusief v2.1.83, waarbij gebruikers wijzen naar een schakelaar binnen de /memory interface. Hoewel de schakelaar suggereert dat de functie in een of andere vorm aanwezig is, kan het nog niet direct worden opgeroepen</cite>.

## Prestatievoordelen

Een praktijkvoorbeeld toont het effect aan: <cite index="29-16,29-17,29-18,29-19,29-20,29-21,29-22">De sessie die dit hele onderzoek startte bleek een van de meest productieve ooit. Claude refereerde aan een caching strategie die in sessie 6 was afgewezen maar relevant was geworden na architectuurwijzigingen in sessie 19. Het herinnerde niet alleen dat de strategie bestond, maar begreep ook de tijdlijn: oorspronkelijk afgewezen omdat we op een enkele server draaiden, nu relevant omdat we naar een gedistribueerde setup waren overgestapt. Dat soort temporele redenering over 19 sessies van opgebouwde context is precies wat consolidatie mogelijk maakt</cite>.

<cite index="18-40">Voor context over hoe zwaar een consolidatie kan zijn: in een waargenomen geval consolideerde Auto Dream het geheugen van 913 sessies in ongeveer 8-9 minuten</cite>.

## Conclusie

Claude Code's auto-dream functie vertegenwoordigt een doorbraak in AI geheugenmanagement. Door het REM-slaapproces te imiteren, houdt het je AI-assistent's geheugen schoon, georganiseerd en bruikbaar over langere projectperiodes.

De functie is nog in uitrol, maar je kunt hem al handmatig activeren. Controleer je /memory interface en probeer de handmatige triggers uit. Voor actieve Claude Code gebruikers kan dit het verschil maken tussen een AI die steeds meer verward raakt en een die daadwerkelijk leert van jullie samenwerking.