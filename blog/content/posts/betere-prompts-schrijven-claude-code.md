---
title: "Betere prompts schrijven voor Claude Code: 7 beproefde technieken"
description: "Leer hoe je effectieve prompts schrijft voor Claude Code met praktische technieken voor CLAUDE.md, slash commands, en context management. 7 beproefde tips."
date: "2026-03-16"
lastModified: "2026-03-16"
author: "Bram"
category: "Tips & Tricks"
tags: ["Claude Code", "Prompts", "CLAUDE.md", "Context Management"]
image: "/images/default-og.png"
imageAlt: "Claude Code terminal interface met een voorbeeld van een goed gestructureerde prompt"
published: true
faqs:
  - question: "Wat is de beste manier om Claude Code prompts te structureren?"
    answer: "Begin met specifieke context, gebruik concrete bestandspaden en geef duidelijke instructies. Vermeld welke bestanden Claude moet lezen en wat het eindresultaat moet zijn. Bijvoorbeeld: 'Analyseer src/components/auth.js voor een bug in de login flow en fix het probleem zonder de bestaande tests te breken.'"
  - question: "Waarom is het CLAUDE.md bestand zo belangrijk voor prompts?"
    answer: "Het CLAUDE.md bestand bevat projectspecifieke context die Claude bij elke sessie automatisch laadt. Hierin definieer je code-standaarden, architectuur-patterns en veelgebruikte commando's. Dit voorkomt dat je dezelfde context steeds opnieuw moet typen en zorgt voor consistente resultaten."
  - question: "Hoe voorkom ik dat Claude Code mijn prompts vergeet tijdens lange sessies?"
    answer: "Gebruik /clear tussen verschillende taken, houd je CLAUDE.md up-to-date met belangrijke instructies, en gebruik /compact om de conversatie samen te vatten. Voor complexe taken kun je ook subagenten gebruiken om de context gefocust te houden."
---

# Betere prompts schrijven voor Claude Code: 7 beproefde technieken

Claude Code is een krachtige AI-coding assistent, maar de kwaliteit van de output hangt direct samen met hoe je je prompts formuleert. <cite index="15-11,15-26">De meer precise je initial prompt, de minder correcties je nodig hebt</cite>. In deze gids leer je de technieken die het verschil maken tussen frustratie en succesvol programmeren met AI.

## Waarom goede prompts het verschil maken

<cite index="5-26,5-27">Het verschil tussen een vage instructie en een goed geconstrueerde prompt kan het gat betekenen tussen generieke outputs en precies wat je nodig hebt. Een slecht gestructureerde prompt vereist mogelijk meerdere heen-en-weer uitwisselingen om de intentie te verduidelijken, terwijl een goed ontworpen prompt je er in één keer brengt</cite>.

Claude Code werkt fundamentaal anders dan traditionele code-editors. <cite index="15-49,15-50,15-51">Omdat Claude je hele project kan zien, kan het er doorheen werken. Wanneer je Claude vraagt om "de authenticatie-bug te fixen", zoekt het naar relevante bestanden, leest meerdere bestanden om de context te begrijpen, maakt gecoördineerde bewerkingen over hen heen, voert tests uit om de fix te verifiëren, en commit de wijzigingen als je erom vraagt. Dit verschilt van inline code-assistenten die alleen het huidige bestand zien</cite>.

## 1. Context is koning: gebruik specifieke bestandsverwijzingen

De kracht van Claude Code ligt in zijn vermogen om je hele codebase te begrijpen. Gebruik dit door specifiek te zijn over welke bestanden relevant zijn.

### Doe dit wel:
```bash
# Specifieke bestandsverwijzingen
Analyseer src/components/UserAuth.tsx voor performance issues. 
Check ook hooks/useAuth.js en __tests__/auth.test.js voor context.
```

### Doe dit niet:
```bash
# Vage instructies
Maak de auth component sneller.
```

<cite index="10-1,10-2">Gebruik tab-completion in je terminal om specifieke bestandspaden toe te voegen aan je prompt. Vertel Claude precies welke bestanden het moet lezen voor context of welke het moet bewerken</cite>.

### Andere manieren om context te geven:

- **URLs**: <cite index="10-3,10-4">Je kunt een link naar een GitHub issue, een stuk documentatie, of een Stack Overflow antwoord direct in de chat plakken. Claude zal het lezen voor context</cite>
- **Screenshots**: <cite index="10-5,10-6,10-7">Werk je aan een UI? Sleep gewoon een screenshot van een design mockup of een diagram van je architectuur in de terminal. Visuele context kan ongelooflijk behulpzaam zijn</cite>
- **Expliciete instructies**: <cite index="10-8,10-9">Zeg niet alleen "voeg tests toe". Probeer in plaats daarvan zoiets als: "Schrijf een nieuwe unit test voor foo.py die de edge case dekt waarbij de gebruiker is uitgelogd. Gebruik geen mocks"</cite>

## 2. Het CLAUDE.md bestand: je geheime wapen

<cite index="1-11,1-12,1-13,1-14">Voer /init uit om een starter CLAUDE.md bestand te genereren op basis van je huidige projectstructuur, verfijn het vervolgens in de loop van de tijd. CLAUDE.md is een speciaal bestand dat Claude leest aan het begin van elk gesprek. Neem Bash commando's, code-stijl en workflow-regels op. Dit geeft Claude persistente context die het niet kan afleiden uit code alleen</cite>.

### Wat moet er in je CLAUDE.md?

<cite index="8-18,8-19,8-20,8-21,8-22,8-23,8-24,8-25,8-26,8-27,8-29">WHAT: vertel Claude over de tech, je stack, de projectstructuur. Geef Claude een kaart van de codebase. Dit is vooral belangrijk in monorepos! Vertel Claude wat de apps zijn, wat de gedeelde packages zijn, en waar alles voor dient zodat het weet waar het moet zoeken. WHY: vertel Claude het doel van het project en wat alles doet in de repository. Wat zijn het doel en de functie van de verschillende onderdelen van het project? HOW: vertel Claude hoe het aan het project moet werken. Gebruik je bijvoorbeeld bun in plaats van node? Je wilt alle informatie opnemen die het nodig heeft om werkelijk betekenisvol werk aan het project te doen. Hoe kan Claude Claude's wijzigingen verifiëren? Hoe kan het tests, typechecks en compilatiestappen uitvoeren? Maar de manier waarop je dit doet is belangrijk! Probeer niet elk commando dat Claude mogelijk nodig heeft in je CLAUDE.md bestand te stoppen - je krijgt suboptimale resultaten</cite>.

### Praktijkvoorbeeld van een effectief CLAUDE.md:

```markdown
# Project Context

## Tech Stack
- Frontend: Next.js 14 met TypeScript
- Backend: Node.js met Express
- Database: PostgreSQL met Prisma
- Testing: Jest en React Testing Library

## Key Commands
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- Type check: `npm run type-check`

## Code Style
- Gebruik functionele components met hooks
- Prefer const assertions voor types
- Tests naast source files met .test.ts extensie

## Architecture Notes
- API routes in `/pages/api/`
- Shared components in `/components/`
- Business logic in `/lib/`
```

### Beperkingen van CLAUDE.md

<cite index="8-4,8-8">Dit impliceert dat je CLAUDE.md bestand zo weinig mogelijk instructies moet bevatten - idealiter alleen die welke universeel van toepassing zijn op je taak</cite>. <cite index="8-16,8-17">Frontier thinking LLM's kunnen ongeveer 150-200 instructies volgen met redelijke consistentie. Kleinere modellen kunnen minder instructies bijhouden dan grotere modellen, en non-thinking modellen kunnen minder instructies bijhouden dan thinking modellen</cite>.

## 3. Context management: voorkom vervuiling

<cite index="10-9,10-10,10-21,10-22">Terwijl je chat met Claude, begint zijn context window, de hoeveelheid gespreksgeschiedenis die het kan onthouden, vol te raken. In lange sessies kan het eerdere instructies "vergeten" of zijn focus verliezen</cite>.

### Technieken voor schoon houden van context:

- **Gebruik /clear tussen taken**: <cite index="1-39">Fix: /clear tussen niet-gerelateerde taken</cite>
- **Reset na mislukte pogingen**: <cite index="1-41,1-42,1-43">Claude doet iets verkeerd, je corrigeert het, het is nog steeds verkeerd, je corrigeert opnieuw. Context is vervuild met mislukte benaderingen. Fix: Na twee mislukte correcties, /clear en schrijf een betere initiële prompt waarin je incorporeert wat je hebt geleerd</cite>
- **Gebruik /compact voor lange sessies**: Dit vat de conversatie samen zonder belangrijke context te verliezen

## 4. Maak Claude kritisch: geen ja-knikker

<cite index="2-40,2-41,2-42,2-43,2-44,2-45,2-46">Van nature heeft een AI de neiging om je te willen pleasen, in plaats van je gedachten te challengen. Dit zorgt vaak voor onvoldoende validatie en slechte stopmechanismes. Daarmee wordt de AI meer een 'yes man' dan een kritische denkpartner. Dat is niet handig, en vooral niet wenselijk als je aan het programmeren bent. Dan wil je juist het tegenovergestelde. Zorg er dus voor dat de prompts die je gebruikt kritische vragen bevatten. Geef ook aan dat de AI een denkpartner moet zijn en geen codegenerator. Laat hem push-back geven op complexiteit en assumptie valideren voordat er code wordt geschreven</cite>.

### Voorbeeld van een kritische prompt:

```
Ik ga deze wijziging naar productie deployen. Speel advocaat van de duivel:
- Welke edge cases heb ik gemist?
- Wat kan falen onder load?
- Welke aannames kunnen verkeerd zijn?
- Wat gebeurt er als externe services down zijn?

Wees pessimistisch. Denk als een hacker, niet als een bouwer.
```

## 5. Gebruik de juiste model voor de juiste taak

<cite index="14-27,14-28">Gebruik Opus voor: Architectuur beslissingen, complexe algoritmes. Gebruik Sonnet voor: Routine codering, refactoring, tests. Cost Optimization: Sonnet kost ongeveer 80% minder dan Opus. Strategisch wisselen kan maandelijkse rekeningen met 60% verminderen zonder kwaliteit op te offeren</cite>.

### Model switching commands:
```bash
/model opus    # Voor complexe redeneertaken
/model sonnet  # Voor snelle, routine coding
/model haiku   # Voor eenvoudige, snelle taken
```

## 6. Slash commands: automatiseer veelgebruikte workflows

Slash commands zijn herbruikbare prompt templates die je workflow kunnen versnellen. <cite index="22-13,22-14">Om commando's toe te voegen, maak je gewoon een .claude/commands folder aan, voeg de commandonaam toe als een bestand met een .md extensie. Je schrijft deze gewoon in natuurlijke taal en je kunt de $ARGUMENTS string gebruiken om argumenten in de prompt te plaatsen</cite>.

### Voorbeeld van nuttige slash commands:

```markdown
// .claude/commands/review.md
Voer een grondige code review uit op $ARGUMENTS met focus op:
- Security vulnerabilities
- Performance bottlenecks  
- Code maintainability
- Test coverage

Geef specifieke aanbevelingen met codevoorbeelden.
```

```markdown
// .claude/commands/fix-tests.md
Analyseer failing tests in $ARGUMENTS:
1. Identificeer de root cause
2. Fix de onderliggende code
3. Update tests indien nodig
4. Verifieer dat alle tests slagen
```

## 7. Hooks: automatiseer kwaliteitscontroles

<cite index="22-10">Het voegt enkele hooks toe voor welke code moet worden uitgevoerd voordat bewerkingen worden geaccepteerd, zoals Prettier uitvoeren op een specifiek bestand, of na bewerkingen, zoals een type check op een specifiek bestand schrijven om ervoor te zorgen dat het alleen goede en correcte bestanden accepteert</cite>.

### Voorbeeld hook configuratie:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write(*.py)",
        "hooks": [
          {
            "type": "command", 
            "command": "python -m black $file"
          }
        ]
      }
    ]
  }
}
```

<cite index="22-1">Je kunt ook het interactieve /hooks commando in Claude Code gebruiken om hooks te configureren via een menu-interface, wat vaak eenvoudiger is dan JSON direct bewerken</cite>.

## Veelgemaakte prompt-fouten vermijden

### De kitchen sink sessie
<cite index="1-36,1-37,1-38,1-39">Je begint met één taak, vraagt Claude dan iets ongerelateerds, gaat dan terug naar de eerste taak. Context is vol met irrelevante informatie. Fix: /clear tussen niet-gerelateerde taken</cite>.

### Eindeloos corrigeren
<cite index="1-40,1-41,1-42,1-43">Claude doet iets verkeerd, je corrigeert het, het is nog steeds verkeerd, je corrigeert opnieuw. Context is vervuild met mislukte benaderingen. Fix: Na twee mislukte correcties, /clear en schrijf een betere initiële prompt waarin je incorporeert wat je hebt geleerd</cite>.

### Te algemene instructies
In plaats van "maak dit beter", wees specifiek: "optimaliseer deze functie voor geheugengebruik door array operations te vervangen door generators".

## Advanced technieken

### Thinking mode activeren
<cite index="4-1">Gebruik altijd thinking mode true (om redenering te zien) en Output Style Explanatory (om gedetailleerde output te zien met ★ Insight boxes) in /config voor beter begrip van Claude's beslissingen</cite>.

### Ultrathink voor complexe problemen
<cite index="4-1">Gebruik ultrathink keyword in prompts voor high effort reasoning</cite>.

### Message queuing
<cite index="6-4,6-5,6-6,6-7">Nu zet ik gewoon alles in de wachtrij: "Voeg meer comments toe," "Eigenlijk ook ...," "En ... ook." Claude is echt slim in het weten wanneer het die dingen daadwerkelijk moet uitvoeren. Als het feedback van jou nodig heeft, gaat het de queued messages niet automatisch uitvoeren. Het is een behoorlijk slim systeem, maar wanneer het iets heeft afgerond, begint het ze aan te pakken wanneer het logisch is. Je kunt veel in de wachtrij zetten, je dag doorgaan, en in veel gevallen gewoon terugkomen naar een hoop werk dat op een goede en slimme manier is gedaan</cite>.

## Conclusie

Effectieve prompts voor Claude Code gaan over duidelijkheid, specificiteit en context. Door deze zeven technieken toe te passen - van het opzetten van een goed CLAUDE.md bestand tot het gebruik van hooks voor automatisering - transformeer je Claude Code van een handige tool naar een betrouwbare programmeerpartner.

De sleutel is om niet perfecte prompts te verwachten vanaf dag één. <cite index="15-2,15-17">Je hebt geen perfecte prompts nodig. Begin met wat je wilt, verfijn dan</cite>. Door deze technieken toe te passen en je workflow stap voor stap te verbeteren, bouw je een systeem op dat consistent kwalitatieve code produceert.

Start met het opzetten van je CLAUDE.md bestand, experimenteer met slash commands voor je meest gebruikte workflows, en voeg geleidelijk hooks toe voor automatisering. Voor je het weet, werk je sneller en effectiever dan ooit tevoren.