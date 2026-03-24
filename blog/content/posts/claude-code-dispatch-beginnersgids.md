---
title: "Claude Code Dispatch: Taken Toewijzen vanaf je Telefoon"
description: "Claude Code Dispatch laat je taken toewijzen vanaf je telefoon terwijl je desktop het werk doet. Complete beginnersgids voor setup en praktische tips."
date: "2026-03-24"
lastModified: "2026-03-24"
author: "Bram"
category: "Aan de slag"
tags: ["Claude Code", "Dispatch", "Remote Control", "Cowork", "Mobile", "Beginners"]
image: "/images/default-og.png"
imageAlt: "Claude Code Dispatch interface met telefoon en desktop synchronisatie"
published: true
faqs:
  - question: "Wat is Claude Code Dispatch en hoe werkt het?"
    answer: "Claude Code Dispatch is een functie waarmee je taken kunt toewijzen aan Claude vanaf je telefoon, terwijl je desktop het werkelijke werk uitvoert. Het creëert een persistente conversatie tussen je mobiele app en desktop app. Je stuurt een taak vanaf je telefoon, Claude voert deze lokaal uit op je desktop met toegang tot al je bestanden en connectors, en je krijgt het eindresultaat terug."
  - question: "Wat is het verschil tussen Claude Code Dispatch en Cowork Dispatch?"
    answer: "Het zijn eigenlijk dezelfde technologie. Wat mensen vaak 'Claude Code Dispatch' noemen is eigenlijk 'Claude Cowork Dispatch' - een functie binnen Anthropic's Cowork omgeving. Dispatch draait binnen Cowork (de GUI-versie) en niet binnen Claude Code (de terminal-versie). Claude Code heeft wel een vergelijkbare functie genaamd Remote Control, maar dat is voor actieve terminal sessies."
  - question: "Welk abonnement heb je nodig voor Claude Code Dispatch?"
    answer: "Je hebt een betaald Claude abonnement nodig. Dispatch is eerst uitgerold naar Max abonnees ($20/maand) in maart 2026, en Pro gebruikers krijgen er ook toegang toe. Het is momenteel niet beschikbaar voor gratis gebruikers. Je hebt ook zowel de Claude Desktop app als de Claude mobiele app nodig."
---

# Claude Code Dispatch: Taken Toewijzen vanaf je Telefoon

<cite index="2-2,2-3">Claude Dispatch is een functie binnen Cowork die je in staat stelt Claude een taak toe te wijzen vanaf je telefoon, weg te lopen, en terug te komen bij het voltooide werk op je desktop</cite>. Deze beginnersgids legt uit wat Dispatch is, hoe je het instelt, en welke taken het het beste kan uitvoeren.

## Wat is Claude Code Dispatch?

<cite index="9-41,9-42">Claude Code Dispatch is een asynchroon taaksysteem gebouwd binnen Anthropic's Cowork omgeving. Je wijst een taak toe vanaf je telefoon of elk ander apparaat, je desktop draait Claude lokaal, en je keert terug naar voltooide resultaten</cite>. <cite index="9-43">De conversatiethread blijft ook bestaan tussen sessies, zodat Claude context behoudt van eerdere taken</cite>.

### Hoe werkt het technisch?

<cite index="6-22">Dispatch creëert een enkele, persistente conversatiethread tussen de Claude mobiele app op je telefoon en de Claude Desktop app op je computer</cite>. Hier is wat er gebeurt:

- **Je telefoon stuurt tekstinstructies**
- **Je desktop doet het werk** met toegang tot lokale bestanden
- **Bestanden blijven op je machine** - geen externe data overdracht
- **Goedkeuringspoorten werken nog steeds** - als een taak bevestiging vereist, krijg je die op je telefoon

<cite index="6-34,6-35,6-36">Je Mac moet wakker blijven. Dit is eigenlijk een beveiligingsfunctie in vermomming. Geen always-on cloud server betekent geen always-on aanvalsoppervlak</cite>.

## Setup: Dispatch in 2 minuten instellen

<cite index="16-7,16-8">Setup duurt ongeveer twee minuten. Serieus</cite>. Hier is de stap-voor-stap handleiding:

### Vereisten

- **Claude Desktop app** (macOS of Windows)
- **Claude mobiele app** (iOS of Android) 
- **Betaald abonnement** - <cite index="14-19,14-20">vanaf maart 2026 rolt Dispatch eerst uit naar Max plan gebruikers, met Pro gebruikers die volgen</cite>
- **Computer moet aan blijven** tijdens taken

### Installatieproces

1. **Update beide apps**
   - Download of update Claude Desktop
   - Update Claude mobiele app

2. **Open Cowork**
   - <cite index="10-22,10-23">Open Cowork op je telefoon of desktop, klik "Dispatch" in het linkerpaneel</cite>
   - Je komt terecht op een pagina die de functionaliteit beschrijft

3. **Activeer Dispatch**
   - <cite index="10-25">Klik "Get started" en geef Claude toegang tot je bestanden door die opties aan te zetten</cite>
   - Scan de QR-code met je telefoon
   - <cite index="16-10,16-11,16-12,16-13">Geen API keys. Geen configuratiebestanden. Geen OAuth dans. Scan en ga</cite>

4. **Test de verbinding**
   - <cite index="16-16,16-17,16-18">Eenmaal gekoppeld zie je hetzelfde gesprek op beide apparaten. Stuur een bericht vanaf je telefoon, het verschijnt op je desktop. Claude's reacties verschijnen op beide</cite>

## Wat kun je met Dispatch doen?

### Taken die goed werken

**Bestandsorganisatie en batch verwerking**
<cite index="9-15,9-16,9-17,9-18">Vraag het bestanden te hernoemen, ze naar mappen te verplaatsen, of een batch documenten te verwerken volgens een patroon. Dit zijn de repetitieve taken die altijd naar de achtergrond worden geschoven. Dispatch handelt ze af terwijl je iets anders doet</cite>.

**Ochtend inbox triage vanaf bed**
<cite index="6-49,6-50">Voor je zelfs opstaat, text je Dispatch: "Vat mijn top 10 ongelezen emails samen en markeer alles dringends." Tegen de tijd dat je je tanden poetst, weet je hoe je dag eruit ziet</cite>.

**Meeting voorbereiding tijdens het woon-werk verkeer**
<cite index="6-51,6-52">"Bekijk mijn agenda voor vandaag en bereid briefing documenten voor voor elke meeting met bestanden uit /projecten." Je loopt het kantoor binnen met de voorbereiding al gedaan</cite>.

**Snelle bestand opzoekingen**
<cite index="6-53,6-54">"Vind de PDF die ik vorige week downloadde over het Q1 budget." In plaats van remote toegang tot je computer, zoekt Dispatch je bestanden en stuurt terug wat het vindt</cite>.

### Voorbeelden uit de praktijk

**Presentaties bouwen vanuit Drive bestanden**
<cite index="2-29,2-30,2-31,2-32,2-33">Ik wees Dispatch naar een Google Drive map met zes onderzoeksdocumenten en vroeg om een outline van tien slides. Claude las alle zes bestanden, identificeerde de hoofdthema's, en produceerde een gestructureerde outline met sprekersnotities. Het hele proces draaide terwijl ik een wandeling van vijftien minuten maakte. Tegen de tijd dat ik mijn telefoon checkte, lag de outline in onze gedeelde thread, klaar voor feedback</cite>.

## Beperkingen en valkuilen

### Technische beperkingen

**Je desktop moet wakker blijven**
<cite index="13-10,13-11,13-12,13-13,13-14">Je desktop moet wakker en open blijven. Sluit het deksel, laat de machine slapen, verlies je internetverbinding — en Dispatch stopt met verwerken. De desktop is de compute engine. De telefoon is slechts de afstandsbediening</cite>.

**Geen notificaties**
<cite index="13-7,13-8,13-9">Geen geluid. Je opent de mobiele app en ziet ofwel een voltooid resultaat of een nog draaiende taak. Ik ben er toe gekomen handmatige telefoon timers in te stellen gebaseerd op hoe lang ik inschat dat een taak zal duren, wat absurd voelt voor een 2026 AI product</cite>.

**Platform ondersteuning**
<cite index="13-17,13-18,13-19,13-20,13-21">Platform ondersteuning is alleen macOS en Windows. Geen Linux. Geen ChromeOS. Geen iPad-als-desktop. De mobiele kant werkt op iOS en Android, maar de desktop kant vereist een traditioneel besturingssysteem met Claude Desktop</cite>.

### Wat werkt niet goed

<cite index="5-16,5-17">Voor nu kan Dispatch informatie op je Mac vinden en werkt het met Connectors, maar het is langzaam en ongeveer 50/50 kans of wat je probeert zal werken. Dat is niet goed genoeg om op te vertrouwen wanneer je weg bent van je bureau</cite>.

<cite index="9-19,9-20,9-21">Wat Dispatch niet doet is real-time, heen-en-weer samenwerking vervangen. Daarvoor wil je nog steeds een actieve Claude sessie wanneer je in de loop bent. Je bent het beste wanneer de taak duidelijk genoeg is om volledig over te dragen</cite>.

## Dispatch vs Remote Control: Wat is het verschil?

<cite index="9-22,9-23,9-24,9-25,9-26">Anthropic biedt ook een functie genaamd Remote Control, wat je niet moet verwarren met de andere. Ze lossen verschillende problemen op. Remote Control (claude --remote-control) laat je een actieve, interactieve Claude Code sessie voortzetten vanaf een ander apparaat. Je begint te werken aan iets op je bureau, dan pak je dezelfde sessie op je telefoon op midden in het gesprek. Je bent nog steeds aanwezig in de loop, alleen op een ander scherm</cite>.

**Dispatch is voor:**
- Taken die je volledig kunt overdragen
- Asynchrone workflows
- GUI-gebruikers (Cowork)
- "Fire and forget" taken

**Remote Control is voor:**
- Actieve terminal sessies voortzetten
- Developers (Claude Code)
- Real-time samenwerking
- Sessies tussen apparaten verplaatsen

## Veiligheid en machtigingen

<cite index="10-30,10-31">Een mobiele AI-agent afstandsbesturing geven van een desktop AI-agent creëert een keten waar instructies van je telefoon echte acties op je computer kunnen triggeren—inclusief het lezen, verplaatsen, of verwijderen van lokale bestanden, interactie met verbonden services, en het besturen van je browser, en het gebruiken van je desktop apps. Dit is krachtig, maar het betekent ook dat fouten (of kwaadaardige content die het model onderweg tegenkomt) echte gevolgen kunnen hebben</cite>.

### Best practices voor veilig gebruik

- **Controleer machtigingen** voordat je Dispatch activeert
- **Test met niet-kritieke bestanden** eerst
- **Gebruik specifieke instructies** - vage opdrachten leiden tot onvoorspelbare resultaten
- **Houd je computer beveiligd** - Dispatch erft alle machtigingen van Cowork

## Is Dispatch het waard?

<cite index="9-27,9-28,9-29,9-30">Ik heb de laatste tijd veel AI tools getest, en de meeste vragen je volledige aandacht de hele tijd. Je prompt, je wacht, je reageert, je wacht weer. Het is een loop die je vasthecht aan het scherm. Claude Code Dispatch breekt die loop volledig</cite>.

**Dispatch is nuttig voor:**
- Mensen die al Cowork gebruiken
- Repetitieve taken die je kunt overdragen
- Situaties waar je niet achter je bureau zit
- Workflows die niet real-time interactie vereisen

**Dispatch is niet nuttig voor:**
- Complexe, meertraps workflows
- Taken die veel heen-en-weer vereisen
- Situaties waar je desktop niet aan kan blijven
- Gebruikers die alleen gratis accounts hebben

## Volgende stappen

Als je klaar bent om Dispatch te proberen:

1. **Upgrade naar een betaald plan** als je dat nog niet hebt
2. **Update beide apps** naar de nieuwste versies
3. **Begin klein** met simpele taken zoals bestand zoeken
4. **Bouw geleidelijk op** naar complexere workflows
5. **Deel je ervaringen** - de community leert nog steeds wat het beste werkt

<cite index="16-38,16-39">Dispatch is nog een reden waarom de $20/maand misschien het behouden waard is. Houd gewoon je laptop open</cite>.

Dispatch vertegenwoordigt een verschuiving naar asynchrone AI - waar je werk kunt toewijzen en terugkomen naar resultaten. Voor de juiste workflows kan het een game-changer zijn.