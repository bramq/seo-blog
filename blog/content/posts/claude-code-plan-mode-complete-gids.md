---
title: "Claude Code Plan Mode: Je complete gids voor veilig AI-coderen"
description: "Leer hoe je Plan Mode in Claude Code gebruikt om veilig te plannen voor je wijzigingen zonder directe code aanpassingen. Met Shift+Tab en /plan command."
date: "2026-03-15"
lastModified: "2026-03-15"
author: "Bram"
category: "Tips & Tricks"
tags: ["Claude Code", "Plan Mode", "AI Coding", "Workflow", "Productiviteit"]
image: "/images/default-og.png"
imageAlt: "Claude Code Plan Mode interface met terminal scherm"
published: true
faqs:
  - question: "Hoe activeer je Plan Mode in Claude Code?"
    answer: "Er zijn drie manieren om Plan Mode te activeren: druk twee keer op Shift+Tab, typ /plan in de prompt, of start een nieuwe sessie met claude --permission-mode plan. In Plan Mode kan Claude alleen lezen en plannen maken, maar geen bestanden bewerken tot je toestemming geeft."
  - question: "Wat is het verschil tussen Plan Mode en normale Claude Code?"
    answer: "In Plan Mode heeft Claude alleen toegang tot read-only tools zoals Read, LS, Glob en Grep. Tools voor bewerken zoals Edit, Write en Bash zijn geblokkeerd. Claude maakt eerst een gestructureerd plan dat je kunt reviewen en bewerken voordat er code wordt geschreven."
  - question: "Wanneer moet je Plan Mode gebruiken in plaats van directe coding?"
    answer: "Gebruik Plan Mode voor complexe refactoring over meerdere bestanden, wanneer je onbekend bent met de codebase, voor multi-step implementaties, en bij architecturale wijzigingen. Voor eenvoudige wijzigingen aan 1-2 bestanden is normale mode vaak sneller."
---

# Claude Code Plan Mode: Je complete gids voor veilig AI-coderen

<cite index="6-18,6-19,6-20">Plan Mode is een speciale functie van Claude Code die de AI toestaat om wijzigingen te plannen voordat er code wordt geschreven. Wanneer geactiveerd, analyseert Claude je verzoek en codebase, en presenteert vervolgens een gedetailleerd actieplan – zonder daadwerkelijke bewerkingen te maken tot je goedkeuring geeft. Deze modus scheidt onderzoek en analyse van uitvoering, waardoor ontwikkelaars meer controle en veiligheid krijgen.</cite>

<cite index="7-25,7-26">Plan Mode is een van Claude Code's belangrijkste functies, vooral voor beginners. Wanneer je Plan Mode activeert met /plan, verandert Claude zijn gedrag: het analyseert het probleem, schetst een stap-voor-stap plan, toont zijn redenering, en wacht op je goedkeuring voordat het iets uitvoert.</cite>

## Waarom Plan Mode gebruiken?

De kracht van Plan Mode ligt in het voorkomen van kostbare fouten. <cite index="8-8,8-9">Zonder planning kan Claude in 15 minuten een chaos creëren: 14 bestanden aanpassen, globale query filters introduceren die bestaande endpoints breken, en de DbContext wijzigen op manieren die conflicteren met je migratiegeschiedenis.</cite>

<cite index="14-27,14-28,14-29">De workflow heeft één kernprincipe: laat Claude nooit code schrijven tot je een geschreven plan hebt gereviewed en goedgekeurd. Deze scheiding van planning en uitvoering is het belangrijkste wat je kunt doen. Het voorkomt verspilde moeite, houdt je in controle over architectuurbeslissingen, en levert significant betere resultaten met minimaal tokengebruik.</cite>

### Voordelen van Plan Mode

- **Veiligheid**: <cite index="15-6,15-7">Plan Mode is alleen-lezen. Het kan geen bestanden maken, wijzigen of verwijderen – waardoor het een veilige omgeving is voor verkenning en planning.</cite>
- **Consistentie**: <cite index="12-22,12-25,12-26">Plan Mode zorgt voor consistente, geformatteerde antwoorden met redelijke uitgebreidheid. De output is gestructureerd, voorspelbaar, en je krijgt goedkeuring voor uitvoering.</cite>
- **Snelheid**: <cite index="12-27,12-28">Plan mode is ongelooflijk snel! Dit in combinatie met de compactheid van de geproduceerde plannen heeft Opus veel efficiënter gemaakt wat betreft snelheid en tokengebruik.</cite>

## Hoe Plan Mode activeren

### Methode 1: Toetscombinatie
<cite index="21-1,21-2">Activeer het door twee keer op Shift+Tab te drukken, of gebruik het /plan commando (v2.1.0+). Verlaat met Shift+Tab opnieuw.</cite> <cite index="25-6,25-7,25-8">Let op: na het updaten naar Claude Code 2.1.3 is Plan mode niet langer toegankelijk via sneltoets op Windows. Shift+Tab schakelt alleen tussen Edit mode en Auto-accept mode. Plan mode ontbreekt volledig in de cyclus.</cite>

### Methode 2: Slash commando  
<cite index="24-8,24-9">Typ simpelweg /plan in de Claude Code prompt. Dit werd toegevoegd in januari 2026 en is de meest directe manier om plan mode te activeren.</cite>

### Methode 3: CLI flag
<cite index="11-1">Je kunt ook een query in Plan Mode direct uitvoeren met -p (dat wil zeggen, in "headless mode").</cite>

```bash
claude --permission-mode plan "Ik moet ons authenticatiesysteem refactoren naar OAuth2. Maak een gedetailleerd migratieplan."
```

### Methode 4: Mode selector
<cite index="24-10,24-11">Onderaan de Claude Code prompt box in VS Code zie je een mode indicator. Klik erop en selecteer Plan Mode uit de dropdown.</cite>

## Hoe Plan Mode werkt in de praktijk

<cite index="12-7,12-21">In plan mode heeft Claude toegang tot alleen-lezen en onderzoekstools: Read (bestanden en content bekijken), LS (directory listings), Glob (bestand patroon zoeken), Grep (content zoeken), Task (research agents), TodoRead/TodoWrite (taakbeheer), WebFetch (web content analyse), WebSearch (web searches), NotebookRead (Jupyter notebooks). Claude kan onderzoeken en plannen zonder iets aan te raken tot je goedkeuring geeft.</cite>

### Stap 1: Onderzoek fase
<cite index="17-18,17-22,17-23">Lees de relevante code. Begrijp de huidige staat voordat je wijzigingen voorstelt. Claude leest bestanden, zoekt patronen, en bouwt begrip - allemaal zonder iets te wijzigen. Deze fase is cruciaal omdat het voorkomt dat Claude aannames maakt over je architectuur.</cite>

### Stap 2: Plan generatie
<cite index="23-10">Claude genereert een gestructureerd plan met bestandswijzigingen, implementatievolgorde en overwegingen.</cite> <cite index="26-20">Zodra Claude klaar is met het genereren van een plan, slaat het het resultaat op als een markdown-bestand in ~/.claude/plans/ met een willekeurig gegenereerde naam.</cite>

### Stap 3: Plan review en bewerking
<cite index="11-5,22-2">Druk op Ctrl+G om het plan te openen in je standaard teksteditor, waar je het direct kunt bewerken voordat Claude doorgaat.</cite>

## Plan bewerken met Ctrl+G

<cite index="23-24,23-25,23-26">Probeer geen planbewerkingen via conversatie te beschrijven. Druk op Ctrl+G, bewerk het planbestand direct, en sla op. Het is sneller en preciezer.</cite> <cite index="24-18,24-19">Ctrl+G laat je Claude's plan direct in je editor bewerken voor goedkeuring. Dit is veel comfortabeler dan proberen wijzigingen via conversatie te beschrijven.</cite>

### Praktisch voorbeeld
<cite index="23-22,23-23">In dit geval voeg ik een notitie toe: "Voeg geen aparte pagination middleware toe - houd de paginatie logica in de query extension methods. Ik wil dit self-contained per feature." Ik verwijder ook een stap waar Claude van plan was een generieke PaginatedResponse<T> wrapper toe te voegen - ik wil feature-specifieke response models, geen generieke abstracties.</cite>

## Wanneer Plan Mode gebruiken (en wanneer niet)

### Gebruik Plan Mode voor:
- **Complexe refactoring**: <cite index="7-26">Een module hernoemen die geïmporteerd wordt door tientallen bestanden</cite>
- **Multi-file features**: <cite index="7-26">Een nieuw API endpoint toevoegen dat routes, controllers, models en tests raakt</cite>
- **Onbekende codebases**: <cite index="7-26">Wanneer je de impact wilt begrijpen voor je wijzigingen maakt</cite>
- **Architecturale wijzigingen**: Grote structurele veranderingen in je applicatie

### Plan Mode decision matrix

<cite index="8-33,8-34,8-35">Als je de exacte diff in één zin kunt beschrijven, sla de planning over. Dit komt direct uit Anthropic's officiële best practices: "Planning is het nuttigst wanneer je onzeker bent over de aanpak, wanneer de wijziging meerdere bestanden aanpast, of wanneer je onbekend bent met de code die gewijzigd wordt. Als je de diff in één zin kunt beschrijven, sla het plan over." 1-2 bestanden, voor de hand liggende wijziging → Normal Mode of Auto-Accept</cite>

| Situatie | Aantal bestanden | Complexiteit | Bekendheid codebase | Aanbeveling |
|----------|------------------|--------------|-------------------|-------------|
| Bug fix | 1-2 | Laag | Hoog | Normal Mode |
| Feature toevoeging | 3-5 | Gemiddeld | Gemiddeld | Plan Mode |
| Refactoring | 5+ | Hoog | Laag | Plan Mode (verplicht) |
| Architectuur wijziging | Veel | Zeer hoog | Variabel | Plan Mode + documentatie |

## Geavanceerde Plan Mode workflows

### 4-fase workflow van Anthropic
<cite index="8-22,8-23,8-24">Anthropic's officiële best practices bevelen een gestructureerde 4-fase workflow aan. Dit is het patroon dat ik volg voor elke niet-triviale taak: Lees de relevante code. Begrijp de huidige staat voordat je wijzigingen voorstelt.</cite>

1. **Explore**: Analyseer de codebase
2. **Plan**: Maak een gestructureerd implementatieplan  
3. **Execute**: Voer het plan stap voor stap uit
4. **Commit**: Maak een beschrijvende commit

<cite index="8-13">Het kernprincipe: fasen 1 en 2 (Explore + Plan) zijn het goedkoopst in termen van tokens en het meest waardevol in termen van resultaat.</cite>

### Opus Plan Mode
<cite index="12-1,12-6">Krijg toegang tot Opus Plan Mode door optie 4 te selecteren in het /model commando: "Gebruik Opus in plan mode, Sonnet 4.6 anders" Met Opus 4.6's 1M context, kun je nu plannen voor enorme codebases die eerder de context limieten overschreden!</cite>

## Veelvoorkomende problemen en oplossingen

### Windows Shift+Tab probleem
<cite index="23-34,23-35,23-36,23-37">Dit is een bekend probleem bij sommige Windows terminal configuraties. Shift + Tab schakelt misschien alleen tussen Normal en Auto-Accept, en slaat Plan Mode volledig over. Fix: Gebruik Alt + M in plaats daarvan, of typ /plan direct in de prompt. Als geen van beide werkt, controleer je terminal key binding configuratie - sommige terminals onderscheppen Shift + Tab voordat Claude Code het ontvangt.</cite>

### Plan Mode verdwijnt na compaction
<cite index="23-38,23-39,23-40,23-41">In eerdere versies kon het schakelen naar Plan Mode stilletjes verloren gaan wanneer Claude Code automatisch de conversatie compacteerde om context ruimte vrij te maken. Fix: Dit werd opgelost in v2.1.47. Update naar de laatste versie met npm update -g @anthropic-ai/claude-code. Als je de laatste versie gebruikt en dit nog steeds ervaart, ga opnieuw Plan Mode in met /plan nadat compaction triggert.</cite>

## CLAUDE.md optimaliseren voor Plan Mode

<cite index="8-35">Plan Mode output kwaliteit is direct evenredig aan hoe goed je CLAUDE.md bestand is.</cite> <cite index="23-3,23-33">CLAUDE.md maakt plannen 10x beter - De tijd die je investeert in het schrijven van een goede CLAUDE.md betaalt zich terug in elke Plan Mode sessie.</cite>

### Essentiële CLAUDE.md secties voor planning:
- Project overzicht en architectuur
- Coding standards en conventies  
- Bestandsorganisatie principes
- Testing strategieën
- Deployment procedures

## Handige shortcuts en commando's

| Shortcut | Actie |
|----------|-------|
| `Shift+Tab` (2x) | Activeer Plan Mode |
| `/plan` | Direct Plan Mode commando |
| `Ctrl+G` | Open plan in teksteditor |
| `Shift+Tab` | Verlaat Plan Mode |
| `/plan open` | Open plan bestand vanuit filesystem |

## Plan Mode in team workflows

<cite index="13-10">Project-relatieve plannen openen workflows die ~/.claude/plans/ niet kan ondersteunen: Review plan diffs in pull requests voordat iemand begint met coderen, annotaties doorvoeren over sessies zonder te vertrouwen op context compaction, het markdown bestand behandelen als een levende spec die meerdere teamleden direct bewerken.</cite>

### Samenwerkingsstrategieën:
- Sla plannen op in version control
- Review plannen in pull requests  
- Gebruik plannen als living documentation
- Deel plannen tussen teamleden voor consistentie

## Conclusie

<cite index="14-13,14-15,14-16">Lees diep, schrijf een plan, annoteer het plan tot het klopt, laat Claude dan alles uitvoeren zonder te stoppen, controleer types onderweg. Dat is het. Geen magische prompts, geen uitgebreide systeeminstructies, geen slimme hacks. Gewoon een gedisciplineerde pipeline die denken van typen scheidt.</cite>

Plan Mode is meer dan een functie - het is een fundamentele verschuiving naar veiliger, meer controleerbare AI-development. Door planning te scheiden van uitvoering, behoud je controle over architectuurbeslissingen terwijl je de kracht van Claude Code volledig benut.

<cite index="6-7">Ontwikkelaars hebben ontdekt dat deze plan → code → debug → commit cyclus (herhaald in kleine chunks) hen in controle houdt en de kwaliteit van de code die Claude uiteindelijk schrijft verbetert.</cite> Begin vandaag nog met Plan Mode en ervaar het verschil in je development workflow.