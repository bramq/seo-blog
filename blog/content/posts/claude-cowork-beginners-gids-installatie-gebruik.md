---
title: "Claude Cowork voor beginners: je eerste AI-werkkracht instellen"
description: "Ontdek hoe Claude Cowork werkt - van installatie tot je eerste geautomatiseerde taken. Complete gids voor beginners om tijd te besparen met Anthropic's AI-assistent."
date: "2026-03-23"
lastModified: "2026-03-23"
author: "Bram"
category: "Aan de slag"
tags: ["Claude Cowork", "AI automatisering", "Beginnersgids", "Desktop AI"]
image: "/images/default-og.png"
imageAlt: "Claude Cowork interface die bestanden organiseert op een computer desktop"
published: true
faqs:
  - question: "Wat is Claude Cowork en hoe verschilt het van gewone Claude?"
    answer: "Claude Cowork is een AI-assistent die direct met bestanden op je computer werkt, in plaats van alleen chatberichten. Waar gewone Claude tekst genereert die je moet kopiëren en plakken, kan Cowork echte bestanden maken - Excel-sheets, PowerPoint-presentaties, georganiseerde mappen. Het plant en voert taken zelfstandig uit, zodat je een doel kunt beschrijven en wegloopt om later het voltooide werk te vinden."
  - question: "Welk abonnement heb ik nodig voor Claude Cowork?"
    answer: "Je hebt minimaal een Claude Pro-abonnement (vanaf $20 per maand) nodig om toegang te krijgen tot Cowork. Het is ook beschikbaar voor Max-, Team- en Enterprise-plannen. De gratis versie van Claude ondersteunt Cowork niet, omdat het aanzienlijke computerkracht vereist voor bestandsbewerkingen en de geïsoleerde virtuele machine."
  - question: "Is Claude Cowork veilig om te gebruiken met mijn bestanden?"
    answer: "Cowork draait in een geïsoleerde virtuele machine op je computer en heeft alleen toegang tot mappen die je expliciet toestemming geeft. Het vraagt bevestiging voordat het belangrijke acties uitvoert. Begin altijd met een testmap met niet-gevoelige bestanden om te leren hoe het werkt. Gesprekken worden lokaal opgeslagen op je computer, niet in de cloud."
---

# Claude Cowork voor beginners: je eerste AI-werkkracht instellen

<cite index="1-5,2-4">Claude Cowork is Claude die direct met je bestanden, mappen en apps werkt — bestanden lezen, bewerken en echte outputs produceren op je machine</cite>. In plaats van alleen chatberichten krijgen zoals bij gewone Claude, voert Cowork taken zelfstandig uit en levert voltooide bestanden op.

<cite index="7-2,7-5">Aangekondigd in januari 2026 is Cowork momenteel in onderzoekspreview en alleen beschikbaar voor Max-abonnees, met een wachtlijst voor gebruikers op andere plannen</cite>. Deze gids laat je zien hoe je Claude Cowork installeert, instelt en je eerste geautomatiseerde taken uitvoert.

## Wat kan Claude Cowork voor je doen?

Met Cowork kun je een opdracht beschrijven, weglopen en later terugkomen met klaar werk — opgemaakte documenten, georganiseerde bestanden, samengevat onderzoek en meer. Dit verschilt fundamenteel van gewone Claude-chat:

**Gewone Claude Chat:**
- Genereert tekst die je moet kopiëren
- Werkt prompt-voor-prompt
- Kan geen bestanden aanmaken
- Beperkt tot conversatie

**Claude Cowork:**
- <cite index="13-17,13-18,13-19">Produceert echte bestanden, geen tekst die je kopieert en plakt. Vraag om een uitgavenspreadsheet, krijg een echte .xlsx met werkende formules. Vraag om een presentatie, krijg een echte .pptx met slides</cite>
- Plant en voert meertraps-taken uit
- Werkt rechtstreeks met je bestandssysteem
- <cite index="12-28,12-29">Kan zelfstandig plannen en werk uitvoeren direct op je computer. Je geeft het gewoon toegang tot een lokale map, en het kan bestanden organiseren, verspreide notities omzetten in opgemaakte documenten, of gegevens analyseren zonder constant toezicht</cite>

### Praktische voorbeelden voor beginners

Cowork kijkt naar de inhoud van bestanden. Die IMG_4521.png? Claude ziet meteen dat het een kassabon van een koffieleverancier is en zet het in de juiste map onder "Kassabons/Koffie-Leveranciers." Gebruikers hebben hiermee meer dan 300 bestanden in enkele minuten georganiseerd. Chaotische Downloads-mappen van jaren terug waren plotseling opgeruimd — omdat Claude werkelijk keek naar wat elk bestand inhield.

Andere beginnersvriendelijke taken:
- <cite index="3-28,3-29,3-30,3-31">Rapporten van rommelige inputs: stemopnames en verspreide notities omzetten in gepolijste documenten. Statistische analyse: uitbijters detectie, kruistabulatie en tijdreeks-analyse op je gegevensbestanden. Datavisualisatie: grafieken genereren met je gegevens. Datatransformatie: datasets schoonmaken, transformeren en verwerken</cite>

## Hoe installeer ik Claude Cowork?

### Stap 1: Controleer je abonnement

<cite index="11-4,11-5">Cowork is beschikbaar als onderzoekspreview voor betaalde plannen (Pro, Max, Team, Enterprise). Cowork vereist de nieuwste versie van Claude voor Windows. Download of update op claude.com/download</cite>.

Je hebt nodig:
- Claude Pro-abonnement (€20/maand) of hoger
- macOS of Windows (arm64 nog niet ondersteund)
- Stabiele internetverbinding
- Minimaal 500MB vrije ruimte

### Stap 2: Download Claude Desktop

1. **macOS:**
   - <cite index="14-14,14-15,14-16">Zoek naar "Download Claude Desktop voor macOS" in je accountinstellingen of dashboard. Klik om het .dmg-installatiebestand te downloaden. Open het gedownloade .dmg-bestand, sleep Claude naar je Applicaties-map</cite>

2. **Windows:**
   ```bash
   # Via winget (aanbevolen)
   winget install Anthropic.Claude
   ```
   Of download handmatig van claude.com/download

### Stap 3: Eerste opstart en login

<cite index="14-19,14-20,14-21,14-22">Zoek naar de mode-selector die "Chat" en "Tasks" toont. Klik "Tasks" om toegang te krijgen tot Cowork-functionaliteit. Claude biedt een interactieve intro die mogelijkheden en veiligheidsrichtlijnen uitlegt. Aanbevolen voor eerste gebruikers</cite>.

## Je eerste Claude Cowork-project opstarten

### Maak een veilige testomgeving

<cite index="14-23,14-24,14-25">Geef in eerste instantie geen toegang tot kritieke gegevens. Maak een testmap om veilig te leren hoe Claude werkt. Maak een map genaamd "Claude_Test" in je Documenten. Voeg enkele niet-gevoelige testbestanden toe (oude documenten, voorbeeldspreadsheets). In Claude, geef alleen toegang tot deze Claude_Test map</cite>.

```
Mapstructuur voor beginners:
📁 Claude_Test/
  📄 testdocument.pdf
  📄 voorbeeld.xlsx
  📁 afbeeldingen/
    🖼️ screenshot1.png
    🖼️ foto.jpg
  📁 teksten/
    📝 notities.txt
```

### Je eerste opdracht: bestanden organiseren

<cite index="14-27,14-28,14-29">"Organiseer de bestanden in Claude_Test map: maak submappen voor Documenten, Afbeeldingen en Data. Sorteer bestanden op type, hernoem met vandaag's datum voorvoegsel." Stap 1: Zorg dat Claude toegang heeft tot Claude_Test map. Stap 2: Type of plak de taakbeschrijving in Claude</cite>.

Voorbeeld opdracht voor beginners:
```
Organiseer alle bestanden in deze map in logische categorieën gebaseerd op hun inhoud. 
Hernoem bestanden met JJJJ-MM-DD voorvoegsel waar datums identificeerbaar zijn. 
Maak submappen die logisch zijn. 
Documenteer elke beslissing in ORGANISATIE-LOG.md met voor/na voor elk bestand. 
Verwijder niets.
```

## Hoe werkt Claude Cowork: het werkproces

Claude analyseert je verzoek en maakt een plan. Complexe klussen worden opgedeeld in kleinere stappen als dat nodig is. Het werkproces ziet er zo uit:

1. **Planning**: Claude analyseert je opdracht en maakt een stappenplan
2. **Bevestiging**: Je kunt het plan goedkeuren of aanpassen
3. **Uitvoering**: Claude voert de stappen uit en houdt je op de hoogte
4. **Levering**: Voltooide bestanden verschijnen in je map

Zoals Anthropic het zelf zegt: "Het voelt veel minder als een pingpongspel en veel meer als berichten achterlaten voor een collega."

### Wat gebeurt er tijdens het werk?

<cite index="11-26,11-27">Cowork draait direct op je computer en geeft Claude toegang tot de bestanden die je kiest om te delen. Code draait veilig in een geïsoleerde ruimte, maar Claude kan echte wijzigingen aanbrengen in je bestanden</cite>.

Cowork draait in een virtuele machine (VM) op je computer. Dit geeft je een aantal voordelen op het gebied van veiligheid: Claude opereert binnen duidelijke grenzen, met controle over welke bestanden en netwerktoegang beschikbaar zijn. De VM-omgeving staat los van je hoofdbesturingssysteem. Dat gezegd hebbende — hoewel de VM isolatie biedt, heeft Claude wel toegang tot lokale bestanden waarvoor je toestemming geeft. Kijk altijd naar Claudes geplande acties voordat je ze goedkeurt, vooral als je met gevoelige bestanden werkt.

## Praktische use cases voor beginners

### 1. Downloads-map opruimen

Als je Downloads-map eruitziet als een bende, is Cowork precies wat je nodig hebt. Dit is een modus in Claude Desktop waar Claude het werk daadwerkelijk doet in plaats van erover te praten. Je geeft het een doel, geeft het toegang tot een map, en het kan het werk in meerdere stappen plannen en uitvoeren, waarna de resultaten terug in je bestanden belanden.

**Opdracht:**
```
Ruim mijn Downloads-map op:
- Sorteer bestanden op type (PDF, afbeeldingen, documenten, installers)
- Maak submappen per categorie
- Verwijder duplicaten
- Hernoem bestanden met betekenisvolle namen
- Maak een samenvatting van wat je hebt gedaan
```

### 2. Uitgavenrapport maken
<cite index="7-10">Anthropic geeft het voorbeeld van het samenstellen van een uitgavenrapport uit een map met kassabonfoto's — maar Claude Code-gebruikers hebben het systeem ook ingezet voor het beheren van mediabestanden, het scannen van social media posts, of het analyseren van gesprekken</cite>.

### 3. Presentatie maken van notities

Het moeilijkste deel van het schrijven van een rapport is meestal niet het schrijven zelf. Geef een verzameling bronbestanden door en Cowork creëert een gestructureerde opzet, waarbij het de zware werk van samenstelling en samenvatting voor je doet. Wat overblijft is verfijning.

## Geavanceerde functies voor als je meer ervaren wordt

### Geplande taken

Geplande taken laten Claude automatisch werk voor je voltooien — iets wat je niet kan doen in gewone chats buiten Cowork. Je stelt taken in en bewaart ze, zodat Claude ze op verzoek kan uitvoeren of op een schema dat jij bepaalt.

Voorbeelden van geplande taken:
- <cite index="15-20">Vrijdag bestand opruimen — "Organiseer mijn Downloads-map op type en verwijder alles ouder dan 30 dagen". Wekelijks uitgavenrapport — "Verwerk alle kassabonafbeeldingen uit /kassabons, maak een gecategoriseerde spreadsheet". Meeting voorbereiding — "Controleer mijn agenda voor morgen en bereid briefingdocumenten voor voor elke meeting"</cite>

### Projects functie

Met de Projects-functie in Cowork kun je gerelateerde taken verzamelen in aparte werkruimten die hun eigen bestanden, links, instructies en geheugen hebben. Dat maakt Cowork veel beter geschikt voor terugkerende of langlopende projecten. Je houdt alles op één plek, gericht op één werkgebied. Alle bestanden en instructies blijven op je computer. Je kunt bestaande projecten met één klik importeren, of helemaal opnieuw beginnen.

### Connectors en integraties
<cite index="2-12,5-24">Desktopbestanden: Claude kan toegang krijgen tot mappen en bestanden op je lokale machine. Connectors: Haal context op uit tools zoals Slack, Notion, Figma en meer. Het bedrijf heeft ook nieuwe MCP-connectors geleverd voor Google Drive, Google Agenda, Gmail, DocuSign, Apollo, Clay, Outreach, SimilarWeb, MSCI, LegalZoom, FactSet, WordPress en Harvey</cite>.

## Tips voor veilig gebruik

### Do's:
- Begin altijd met een testmap
- <cite index="7-12">Maak instructies zo duidelijk en ondubbelzinnig mogelijk</cite>
- Controleer het plan voordat je het laat uitvoeren
- Maak backups van belangrijke bestanden
- Start met eenvoudige taken

### Dont's:
- Geef geen toegang tot je volledige harde schijf
- <cite index="7-11">Geef geen vage of tegenstrijdige instructies</cite>
- Laat het niet zonder toezicht werken met gevoelige gegevens
- Verwacht geen perfecte resultaten bij de eerste poging

<cite index="7-12">In een blogpost waarin het nieuwe hulpmiddel wordt aangekondigd, waarschuwt Anthropic expliciet voor het risico van prompt injectie of verwijderde bestanden, en beveelt aan dat gebruikers instructies zo duidelijk en ondubbelzinnig mogelijk maken</cite>.

## Beperkingen waar je rekening mee moet houden

<cite index="3-11,3-12,3-13,3-16,3-17">Cowork is een functiepreview, wat betekent dat sommige mogelijkheden nog niet beschikbaar zijn: Geheugen alleen in projecten: Geheugen wordt ondersteund binnen projecten maar wordt niet behouden over zelfstandige Cowork-sessies. Geen chat- of artifact-deling: Sessies kunnen niet worden gedeeld met anderen. Desktop-app vereist: Cowork draait op je desktopcomputer via de Claude Desktop-app. Sessiepersistentie: de Claude Desktop-app moet open blijven en je computer moet wakker blijven zodat Claude aan taken kan werken. Als je de app sluit of je computer gaat slapen, stoppen actieve taken</cite>.

## Kosten en abonnementen

<cite index="12-2,11-4">Aangekondigd in januari 2026 is Cowork Anthropic's onderzoekspreview. Cowork is beschikbaar als onderzoekspreview voor betaalde plannen (Pro, Max, Team, Enterprise)</cite>.

**Prijsoverzicht:**
- **Claude Pro**: €20/maand - Toegang tot Cowork
- **Claude Max**: €25/maand - Extra functies en limieten
- **Claude Team**: €30/maand per gebruiker
- **Claude Enterprise**: Op maat - Beheer en beveiligingsfuncties

## Volgende stappen: van beginner naar power user

Als je comfortabel bent met de basis, kun je beginnen met:

1. **Complexere workflows**: Cowork is Anthropic's autonoom bureauprogramma voor kenniswerk. Het gebruikt dezelfde technologie als Claude Code, maar dan in een interface die iedereen kan gebruiken. Dat betekent dat het meerdelige taken kan plannen, rechtstreeks met je bestanden kan werken, sub-agents kan inzetten, werkelijke eindproducten kan maken en nu ook geplande taken kan uitvoeren.

2. **Skills en plugins**: <cite index="15-6,15-7,15-8,15-9">Onze Skills Directory heeft meer dan 1.000 kant-en-klare skills die je kunt kopiëren naar Cowork — voor bestandsorganisatie, uitgaventracering, e-mail schrijven, wekelijkse rapporten en vrijwel al het andere. Eén klik om te kopiëren. Plak in je skills-map. klaar</cite>

3. **Browser automatisering**: <cite index="19-14,19-15,19-16">Claude Cowork kan daadwerkelijk websites bezoeken en acties ondernemen namens jou. De geautomatiseerde webbrowsing AI-mogelijkheden vereisen de Claude Chrome-extensie. Eenmaal geïnstalleerd, kun je Claude vragen om specifieke websites te bezoeken, inhoud te analyseren en zelfs door meerdere pagina's te navigeren</cite>

## Conclusie

Claude Cowork brengt AI-automatisering op je desktop op een manier die zelfs beginners kunnen gebruiken. Anthropic's aanpak is simpel: beschrijf wat je wilt, ga weg, en kom terug voor klaar werk. Dat is de belofte. In praktijk werkt het goed voor veel dagelijkse taken — bestandsorganisatie, documentcreatie, data-analyse.

Begin klein met een testmap, leer hoe het werkt, en bouw langzaam je vertrouwen op. Met de juiste benadering kan Cowork je uren per week besparen aan repetitieve taken.

Start klein met een testmap, leer hoe het werkt, en bouw langzaam je vertrouwen op. <cite index="5-18">Cowork brengt diezelfde kracht naar kenniswerkers</cite>, en met de juiste aanpak kan het uren per week besparen aan repetitieve taken.

De technologie ontwikkelt zich snel, dus houd de officiële documentatie in de gaten voor nieuwe functies en updates. Begin vandaag nog met je eerste georganiseerde map — je toekomstige zelf zal je dankbaar zijn.