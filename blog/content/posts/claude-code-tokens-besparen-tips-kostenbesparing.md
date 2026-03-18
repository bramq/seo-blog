---
title: "Claude Code Tokens Besparen: 10 Praktische Tips voor 70% Kostenbesparing"
description: "Leer hoe je Claude Code tokens bespaart met 10 bewezen strategieën. Van /cost monitoring tot CLAUDE.md optimalisatie - reduceer je kosten tot 70%."
date: "2026-03-18"
lastModified: "2026-03-18"
author: "Bram"
category: "Tips & Tricks"
tags: ["tokens", "kosten", "optimalisatie", "context management"]
image: "/images/default-og.png"
imageAlt: "Claude Code interface met token monitoring dashboard en kostenbesparingtips"
published: true
faqs:
  - question: "Hoeveel kosten Claude Code tokens per dag?"
    answer: "Een productieve ontwikkelaar gebruikt gemiddeld $5-15 per dag bij goede gewoonten. Zonder optimalisatie kan dit oplopen tot $20-40 per dag. Met de juiste strategieën kun je kosten tot 70% reduceren."
  - question: "Wat is het verschil tussen /clear en /compact?"
    answer: "/clear wist de volledige conversatiegeschiedenis en start een schone sessie. /compact vat de conversatie samen en behoudt belangrijke context terwijl overtollige tokens worden weggenomen. Gebruik /clear tussen ongerelateerde taken en /compact voor lange sessies."
  - question: "Welke model keuze bespaart de meeste tokens?"
    answer: "Sonnet is perfect voor 80% van de ontwikkelingstaken en kost slechts een vijfde van Opus. Reserveer Opus alleen voor complexe architectuur beslissingen en multi-file refactoring. Deze keuze alleen kan al 60% kosten besparen."
---

# Claude Code Tokens Besparen: 10 Praktische Tips voor 70% Kostenbesparing

Claude Code tokens kunnen snel oplopen. <cite index="21-8">Gemiddeld kost Claude Code ~$100-200/developer per maand met Sonnet 4.6</cite>, maar zonder optimalisatie loopt dit vaak uit de hand. Het goede nieuws is dat je met de juiste aanpak aardig wat kunt besparen op je tokens.

In dit artikel ontdek je 10 praktische manieren om Claude Code tokens te besparen, van basis commands tot geavanceerde configuratie. Deze tips zijn getest door duizenden ontwikkelaars en gebaseerd op de nieuwste Anthropic documentatie.

## Waarom tokens besparen belangrijk is

Wanneer je Claude veel context geeft, gebruikje meer tokens. <cite index="21-12">Token kosten schalen met context grootte: hoe meer context Claude verwerkt, hoe meer tokens je gebruikt</cite>. In de praktijk geeft een gemiddelde ontwikkelaar <cite index="21-6">$6 per dag uit, met dagelijkse kosten onder $12 voor 90% van de gebruikers</cite>.

<cite index="21-12">Token kosten schalen met context grootte: hoe meer context Claude verwerkt, hoe meer tokens je gebruikt</cite>. Een typische ontwikkelaar gebruikt tussen de <cite index="21-6">$6 per dag gemiddeld, met dagelijkse kosten onder $12 voor 90% van de gebruikers</cite>.

Zonder goede gewoonten kan hetzelfde werk <cite index="25-8,25-9">$20-40 per dag kosten in plaats van $5-15 per dag</cite>. Het verschil? Token optimalisatie.

## Hoe controleer je je token gebruik?

Voordat je gaat optimaliseren, moet je weten waar je staat. Claude Code biedt ingebouwde monitoring:

### Het /cost commando gebruiken

<cite index="21-1,21-15">Gebruik /cost om je huidige token gebruik te controleren, of configureer je status lijn om het continu weer te geven</cite>. Het commando toont:

- Totale kosten per sessie
- Input/output token verdeling 
- API duur en totale tijd
- Code wijzigingen tracking

```bash
/cost
# Output:
# Total cost: $0.55
# Total duration (API): 6m 19.7s
# Input tokens: 45,231
# Output tokens: 8,942
```

### Externe monitoring tools

Voor uitgebreidere analyse kun je tools zoals **ccusage** gebruiken:

```bash
npx ccusage
# Toont dagelijks, maandelijks en sessie-gebaseerd gebruik
npx ccusage daily --breakdown
# Per-model kostenverdeling
```

## 10 Bewezen strategieën om tokens te besparen

### 1. Strategische model selectie

### 1. Strategische model selectie

Hier kun je het meeste besparen. <cite index="9-1,9-2,9-3">Sonnet behandelt ~80% van coding taken goed. Schakel naar Opus met /model opus voor complexe redeneringen. ~60% kostenreductie</cite>.

<cite index="9-1,9-2,9-3">Sonnet behandelt ~80% van coding taken goed. Schakel naar Opus met /model opus voor complexe redeneringen. ~60% kostenreductie</cite>.

```bash
/model sonnet    # Standaard voor 80% van taken
/model opus      # Alleen voor complexe architectuur
/model haiku     # Voor eenvoudige taken
```

**Regel**: Begin elke sessie met Sonnet. Schakel alleen naar Opus wanneer je diepe analyse nodig hebt.

### 2. Context management met /clear en /compact

### 2. Context management met /clear en /compact

Dit is een van de grootste besparingen na model selectie. <cite index="21-16,21-17">Gebruik /clear om fris te beginnen bij het overschakelen naar ongerelateerd werk. Verouderde context verspilt tokens bij elke volgende message</cite>.

<cite index="21-16,21-17">Gebruik /clear om fris te beginnen bij het overschakelen naar ongerelateerd werk. Verouderde context verspilt tokens bij elke volgende message</cite>.

```bash
/clear      # Volledige reset tussen taken
/compact    # Vat lange conversaties samen
/rename     # Geef sessie naam voor later
/resume     # Keer terug naar benoemde sessie
```

**Workflow**:
1. <cite index="25-18">Wis de context met /clear voor elke nieuwe taak</cite>
2. <cite index="25-23">Run /compact als de context groot wordt</cite>
3. Gebruik /rename voordat je wist voor latere toegang

### 3. CLAUDE.md optimaliseren voor minimale tokens

### 3. CLAUDE.md optimaliseren voor minimale tokens

Een groot kostenfactor waar je niet altijd aan denkt: <cite index="23-26">context bloat door het laden van instructies die niet relevant zijn voor de huidige taak</cite>.

**Voor**: 11,000 tokens geladen bij sessie start
**Na**: 800 tokens (90% reductie)

**Voor**: 11,000 tokens geladen bij sessie start
**Na**: 800 tokens (90% reductie)

#### Optimale CLAUDE.md structuur:

```markdown
# Project Overview (450 tokens)
- Essentiële architectuur
- Belangrijkste commands
- Critical bugs lijst

## Quick Start (100 tokens)
npm run dev
npm test
npm run build

## Architecture Map (150 tokens)
/src/components - React componenten
/src/api - Backend routes
/src/utils - Helper functies
```

**Gouden regel**: Alleen laden wat je in 80% van de sessies nodig hebt.

### 4. Session-start hooks voor dynamische context

<cite index="13-5,13-6">De magie gebeurt met Claude Code's session-start hooks. Claude Code voert .claude/hooks/session-start.sh uit voordat je CLAUDE.md geladen wordt</cite>.

```bash
#!/bin/bash
# .claude/hooks/session-start.sh
echo "🚀 $(basename "$PWD") Status"
echo "────────────────────────────"

# Check database status
if docker ps | grep -q postgres; then
  echo "✅ Database: Connected"
else
  echo "❌ Database: Not running"
fi

# Git context
echo "📍 Branch: $(git branch --show-current)"
echo "  Last: $(git log -1 --oneline)"
```

Deze hook laadt alleen relevante, actuele informatie zonder statische documentatie.

### 5. Extended thinking tokens beperken

### 5. Extended thinking tokens beperken

Dit kan je kosten flink drukken. <cite index="9-4,9-5,9-6">Extended thinking reserveert tot 31,999 output tokens per request voor interne redenering. Dit reduceren vermindert verborgen kosten met ~70%. Zet op 0 om uit te schakelen voor triviale taken</cite>.

<cite index="9-4,9-5,9-6">Extended thinking reserveert tot 31,999 output tokens per request voor interne redenering. Dit reduceren vermindert verborgen kosten met ~70%. Zet op 0 om uit te schakelen voor triviale taken</cite>.

```bash
# In je .claude/settings.json
{
  "env": {
    "MAX_THINKING_TOKENS": "10000"
  }
}
```

### 6. Auto-compaction percentage aanpassen

<cite index="9-7,9-8,9-9">Auto-compaction triggert wanneer context dit % van capaciteit bereikt. Default 95% is te laat — kwaliteit degradeert hiervoor. Compacteren op 50% houdt sessies gezonder</cite>.

```bash
{
  "env": {
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```

### 7. Subagents voor goedkopere operaties

<cite index="9-10,9-11">Subagents (Task tool) draaien op dit model. Haiku is ~80% goedkoper en voldoende voor exploratie, file reading, en test running</cite>.

```bash
{
  "env": {
    "CLAUDE_CODE_SUBAGENT_MODEL": "haiku"
  }
}
```

<cite index="1-29,1-30">Het runnen van tests, documentatie ophalen, of log files verwerken kan significant context verbruiken. Delegeer deze aan subagents zodat de verbose output in de subagent's context blijft terwijl alleen een samenvatting terugkomt naar je hoofdconversatie</cite>.

### 8. MCP servers uitschakelen

<cite index="3-11,3-12,3-13">Elke enabled MCP server voegt tool definities toe aan je system prompt, wat deel van je context window verbruikt. Gebruik /context om MCP server context verbruik te identificeren, schakel dan servers uit die niet nodig zijn voor je huidige taak met @server-name disable of /mcp. Dit is vooral waardevol bij het naderen van context limieten</cite>.

```bash
/context              # Bekijk huidige context gebruik
@github disable       # Schakel GitHub MCP uit
/mcp                  # Beheer alle MCP servers
```

### 9. Specifieke prompting technieken

### 9. Specifieke prompting technieken

Good prompting voorkomt lange conversaties. <cite index="25-44,25-45,25-46,25-47">Geef relevante context vooraf. Als Claude je database schema moet kennen om een query te schrijven, plak het relevante schema excerpt in je prompt. Laat Claude niet het schema bestand lezen. Je controleert precies hoeveel tokens besteed worden aan context</cite>.

<cite index="25-44,25-45,25-46,25-47">Geef relevante context vooraf. Als Claude je database schema moet kennen om een query te schrijven, plak het relevante schema excerpt in je prompt. Laat Claude niet het schema bestand lezen. Je controleert precies hoeveel tokens besteed worden aan context</cite>.

**Goed**:
```
Based on this schema:
```sql
CREATE TABLE users (id SERIAL, email VARCHAR(255));
```
Write a query to find duplicate emails.
```

**Slecht**:
```
Read the database schema and find duplicate emails
```

<cite index="25-48,25-49,25-50">Vermijd open-ended exploratie. In plaats van "explore the codebase and tell me what you find," zeg "read src/lib.rs and list the public modules." Begrensde vragen krijgen begrensde antwoorden</cite>.

### 10. Prompt caching optimaliseren

<cite index="1-2,1-19">Claude Code optimaliseert automatisch kosten door prompt caching (wat kosten reduceert voor herhaalde content zoals system prompts) en auto-compaction</cite>.

Prompt caching is standaard ingeschakeld. <cite index="7-32,7-34">Houd prompt caching enabled voor productie gebruik omdat het significant kosten reduceert op herhaalde context</cite>.

## Geavanceerde optimalisatie strategieën

### Tiered documentation systeem

Implementeer een 3-tier systeem zoals gebruikt door ervaren teams:

**Tier 1**: Altijd geladen (800 tokens)
- CLAUDE.md basis
- Meest gebruikte commands  
- Critical mistakes lijst

**Tier 2**: Op aanvraag (0 tokens tot gebruikt)
- docs/TESTING.md
- docs/API.md
- docs/DEPLOYMENT.md

**Tier 3**: Archief (0 tokens)
- .claude/completions/
- .claude/sessions/
- Historische documentatie

### Context engineering met forbidden directories

<cite index="3-20,3-21">Gebruik je CLAUDE.md om expliciet te specificeren welke bestanden Claude kan lezen en welke directories verboden zijn. Dit voorkomt onnodig context verbruik van irrelevante code</cite>.

```markdown
## File Access Rules

### Allowed:
- /src/components
- /src/utils  
- /tests

### Forbidden:
- /node_modules
- /dist
- /.git
- /logs
```

### Hooks voor automatische optimalisatie

Configureer hooks die automatisch optimaliseren:

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "prettier --write $CLAUDE_FILE_PATHS"
      }]
    }]
  }
}
```

## Praktische workflow voor dagelijks gebruik

**Ochtend**:
1. Start een fresh session
2. <cite index="25-16">Zet het model op Sonnet</cite>
3. Review taken en plan batching

**Per taak**:
1. <cite index="25-18">Clear de context met /clear voor elke nieuwe taak</cite>
2. <cite index="25-19,25-20">Gebruik specifieke, gedetailleerde prompts. Noem de betrokken bestanden</cite>
3. <cite index="25-21">Schakel naar Opus alleen voor echt complexe taken, schakel daarna terug naar Sonnet</cite>

**Mid-sessie**:
1. Monitor token gebruik met /cost
2. <cite index="25-23">Run /compact als de context groot wordt</cite>
3. Gebruik /clear bij context switching

## Veelgemaakte fouten vermijden

### Context accumulation
**Probleem**: <cite index="22-28,22-29">Claude Code is stateless, wat betekent dat het de volledige conversatie geschiedenis herverwerkt bij elk nieuw bericht om context te behouden. Lange, onbeheerde chat sessies kunnen snel leiden tot hoge token aantallen en gedegradeerde prestaties</cite>.

**Oplossing**: Agressieve context management met /clear en /compact.

### Model overkill

<cite index="25-40,25-41,25-42,25-43">Sonnet behandelt ongeveer 80% van dagelijks ontwikkelwerk tegen een vijfde van de kosten van Opus. Opus output tokens kosten bijna 19 keer meer dan Haiku. Reserveer Opus voor complexe multi-file refactoring, subtiele debugging, en architectuur beslissingen waar het de eerste keer goed krijgen meer bespaart dan de token premium. Een typische multi-file refactor kost ongeveer $0.45 met Sonnet versus $5.25 met Opus</cite>.

### Open-ended prompts

<cite index="25-51,25-52,25-53">Het verschil tussen een drie-turn conversatie en een een-turn oplossing kan 50,000 tokens zijn. Met Opus pricing is dat ongeveer $1 bespaard op een enkele taak. Vermenigvuldig met tientallen taken per dag en de besparingen tellen op</cite>.

### Open-ended prompts

<cite index="25-51,25-52,25-53">Het verschil tussen een drie-turn conversatie en een een-turn oplossing kan 50,000 tokens zijn. Met Opus pricing is dat ongeveer $1 bespaard op een enkele taak. Vermenigvuldig met tientallen taken per dag en je ziet het effect echt terug in je facturering</cite>.

## Meetbare resultaten

Met deze strategieën rapporteren ontwikkelaars:

- **60% kostenbesparing** door model selectie alleen
- **90% token reductie** bij session start (11,000 → 1,300 tokens)
- **70% minder verborgen kosten** door thinking tokens beperken
- **50-80% algehele kostenreductie** door gecombineerde aanpak

- **60% kostenbesparing** door model selectie alleen
- **90% token reductie** bij session start (11,000 → 1,300 tokens)
- **70% minder verborgen kosten** door thinking tokens beperken
- **40-70% algehele kostenreductie** door gecombineerde aanpak

<cite index="7-41">De meeste ontwikkelaars zien deze resultaten wanneer ze deze strategieën toepassen</cite>.

## Monitoring en onderhoud

Succesvolle token optimalisatie vereist continue monitoring:

1. **Dagelijks**: Check /cost na belangrijke sessies
2. **Wekelijks**: Analyseer patronen met ccusage
3. **Maandelijks**: Review en aanpassen van CLAUDE.md en hooks

## Conclusie

Token besparing in Claude Code draait om drie kernprincipes:

1. **Smart model selectie**: Sonnet als default, Opus bij noodzaak
2. **Agressieve context management**: /clear tussen taken, /compact voor lange sessies  
3. **Specifieke prompting**: Benoem bestanden, vermijd exploratie

<cite index="25-24,25-25">Deze drie praktijken vertegenwoordigen ongeveer 80% van haalbare besparingen</cite>. De overige optimalisaties zijn verfijningen die bouwen op deze basis.

Start met één strategie die een direct probleem in je workflow oplost. De PostToolUse formatter hook is een goede eerste keuze omdat feedback direct zichtbaar is. Bouw daarna uit op basis van wat je leert.

Met deze aanpak kun je dezelfde productiviteit behalen tegen een fractie van de kosten - en vaak zelfs efficiënter werken door gefocuste, intentionele sessies.