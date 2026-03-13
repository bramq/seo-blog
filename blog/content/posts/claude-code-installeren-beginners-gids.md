---
title: "Claude Code Installeren: Complete Beginnersgids 2026"
description: "Leer hoe je Claude Code installeert en gebruikt. Complete gids voor Windows, macOS en Linux met stap-voor-stap instructies, authenticatie en eerste stappen."
date: "2026-03-13"
lastModified: "2026-03-13"
author: "Bram"
category: "Aan de slag"
tags: ["Claude Code", "Installatie", "AI Coding", "Terminal", "Beginners"]
image: "/images/default-og.png"
imageAlt: "Claude Code terminal interface met installatie commands op verschillende besturingssystemen"
published: true
faqs:
  - question: "Kan ik Claude Code gratis gebruiken?"
    answer: "Nee, Claude Code vereist een betaald Anthropic-account. Je hebt minimaal Claude Pro ($20/maand), Claude Max ($100-200/maand), of een Console-account met API-credits nodig. De gratis Claude.ai-versie biedt geen toegang tot Claude Code. Voor beginners is Claude Pro meestal voldoende om de tool uit te proberen en te leren gebruiken."
  - question: "Welke systeemvereisten heeft Claude Code?"
    answer: "Claude Code werkt op macOS (10.15+), Linux (Ubuntu 20.04+, Debian 10+) en Windows (10/11 met Git for Windows of WSL). Je hebt minimaal 4GB RAM, een internetverbinding, en ongeveer 1GB vrije schijfruimte nodig. Voor Windows-gebruikers is WSL2 de aanbevolen methode voor de beste ervaring."
  - question: "Wat is het verschil tussen de native installer en npm installatie?"
    answer: "De native installer is de aanbevolen methode omdat het geen Node.js vereist, automatisch updates in de achtergrond uitvoert, en sneller opstart. De npm-methode is verouderd maar werkt nog steeds voor ontwikkelaars die Node.js al hebben geïnstalleerd. Native installaties zijn stabieler en vermijden pakketbeheer-conflicten."
---

# Claude Code Installeren: Complete Beginnersgids 2026

<cite index="1-1,2-6">Claude Code is een AI-aangedreven coding assistent die je helpt bij het bouwen van features, het oplossen van bugs en het automatiseren van ontwikkeltaken. Het begrijpt je volledige codebase en kan werken over meerdere bestanden en tools heen.</cite> In deze complete gids leer je precies hoe je Claude Code installeert en gebruikt, ongeacht je ervaring met de terminal.

Of je nu een complete beginner bent of al ervaring hebt met andere AI coding tools, deze handleiding neemt je stap-voor-stap mee door het installatieproces. We behandelen alle besturingssystemen, veelvoorkomende problemen en geven je de kennis die je nodig hebt om meteen productief te worden met Claude Code.

## Wat is Claude Code precies?

<cite index="1-3,1-4">Claude Code is een agentic coding tool die leeft in je terminal en beschikbaar is in je IDE, desktop app en browser.</cite> Het belangrijkste verschil met andere AI coding assistenten is dat Claude Code niet alleen code genereert, maar ook:

- **Volledige codebase-begrip**: <cite index="1-2">Het begrijpt je volledige codebase en kan werken over meerdere bestanden en tools heen.</cite>
- **Autonomous werkwijze**: Het kan zelfstandig bestanden bewerken, commando's uitvoeren en git workflows beheren
- **Context behoud**: Houdt context bij over lange sessies en complexe projecten
- **Natuurlijke taal interface**: Je communiceert in gewoon Nederlands of Engels

### Waarom kiezen voor Claude Code?

<cite index="24-22,24-24">Volgens onderzoek gebruikt 90% van de developers nu AI coding assistants, waarbij 65% zwaar afhankelijk is van deze tools. Top-presterende teams besparen gemiddeld 2-6 uur per week met AI coding tools.</cite>

Claude Code onderscheidt zich door:

1. **Enorme context window**: Tot 200.000+ tokens (een heel boek of codebase)
2. **Minder hallucinaties**: Nauwkeurigere code dan andere LLM's
3. **Privacy-focus**: Duidelijke beleid tegen het gebruiken van je code voor model training
4. **Agentic capabilities**: Kan multi-step workflows uitvoeren

## Systeemvereisten en voorbereiding

Voordat je begint met installeren, controleer of je systeem voldoet aan de volgende vereisten:

### Ondersteunde besturingssystemen

<cite index="35-1,35-2">Claude Code werkt op macOS, Linux, en Windows. Zie volledige systeemvereisten.</cite>

**macOS:**
- macOS 10.15 (Catalina) of nieuwer
- Terminal toegang (standaard aanwezig)
- Internetverbinding

**Linux:**
- <cite index="34-19,34-20">Ubuntu 20.04+ of Debian 10+. Andere distributies werken ook, maar deze zijn officieel ondersteund.</cite>
- <cite index="34-21">Alpine Linux gebruikers moeten libgcc, libstdc++, en ripgrep apart installeren.</cite>
- Bash, Zsh of andere shell

**Windows:**
- <cite index="34-1,34-2">Windows 10 of 11. Je hebt ook WSL (Windows Subsystem for Linux) of Git for Windows geïnstalleerd nodig.</cite>
- <cite index="34-3">Git for Windows biedt de Bash-omgeving die Claude Code vereist op native Windows.</cite>
- PowerShell, CMD, of Git Bash

### Benodigde resources

- **RAM**: <cite index="34-16">4GB of meer - De tool zelf is licht, maar heeft genoeg geheugen nodig om naast je andere ontwikkeltools te draaien.</cite>
- **Schijfruimte**: Ongeveer 1GB voor installatie en dependencies
- **Internetverbinding**: <cite index="34-15">Claude Code verwerkt je verzoeken via Anthropic's servers, dus het moet online zijn om te werken.</cite>

### Account vereisten

<cite index="21-1,21-2">Claude Code vereist een Pro, Max, Teams, Enterprise, of Console account. Het gratis Claude.ai plan bevat geen Claude Code toegang.</cite>

Je hebt een van deze opties nodig:
- **Claude Pro**: $20/maand - ideaal voor individuele developers
- **Claude Max**: $100-200/maand - voor intensief gebruik
- **Anthropic Console**: Pay-per-use met API credits
- **Enterprise accounts**: Voor teams en organisaties

## Hoe installeer je Claude Code?

<cite index="12-1,12-2,12-3">De aanbevolen methode is de native installer. Op macOS of Linux: curl -fsSL https://claude.ai/install.sh | bash. Op Windows: irm https://claude.ai/install.ps1 | iex in PowerShell.</cite>

### Methode 1: Native Installer (Aanbevolen)

<cite index="16-5,16-6">Anthropic beveelt het gebruik van de native binary installatie aan. Deze methode vermijdt pakketbeheer-conflicten en is het meest stabiel.</cite>

**Voor macOS en Linux:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Voor Windows (PowerShell):**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Voordelen van native installer:**
- <cite index="18-7,18-8">De native installer vereist geen Node.js. Alleen de legacy npm installatiemethode vereist Node.js 18.0+.</cite>
- <cite index="11-35,11-36">Native installaties updaten automatisch op de achtergrond. Je kunt het release kanaal configureren om te bepalen of je updates direct ontvangt of volgens een vertraagd stabiel schema, of auto-updates volledig uitschakelen.</cite>
- Snellere opstarttijd
- Geen dependency management

### Methode 2: Homebrew (macOS/Linux)

```bash
brew install --cask claude-code
```

**Let op**: <cite index="11-37,11-40,11-41">Homebrew en WinGet installaties vereisen handmatige updates. Gebruik brew upgrade claude-code of winget upgrade Anthropic.ClaudeCode om handmatig te updaten.</cite>

### Methode 3: WinGet (Windows)

```cmd
winget install Anthropic.ClaudeCode
```

### Methode 4: npm (Verouderd)

<cite index="2-4,2-5,13-16,13-17">Installatie via npm is verouderd. Gebruik een van de aanbevolen methoden hieronder.</cite> Maar als je toch npm wilt gebruiken:

```bash
npm install -g @anthropic-ai/claude-code
```

**Belangrijke waarschuwing**: <cite index="16-12,16-13">Gebruik nooit sudo npm install -g omdat dit permissie-problemen veroorzaakt. Als je EACCES errors krijgt, repareer dan je npm permissies.</cite>

### Installatie verifiëren

Na installatie, verifieer dat alles werkt:

```bash
claude --version
```

<cite index="14-3">Succes ziet eruit als: Een versienummer wordt weergegeven zonder errors.</cite> Als je "command not found" krijgt, herstart je terminal en probeer opnieuw.

## Platform-specifieke installatie-instructies

### Windows installatie gedetailleerd

<cite index="31-1,31-2,31-3">Claude Code op Windows vereist Git for Windows of WSL. Je kunt claude starten vanuit PowerShell, CMD, of Git Bash. Claude Code gebruikt Git Bash intern om commando's uit te voeren.</cite>

**Optie 1: Native Windows met Git Bash**

1. Installeer eerst [Git for Windows](https://git-scm.com/) als je dit nog niet hebt
2. Open PowerShell (geen Administrator rechten nodig)
3. Voer het installatie-commando uit:

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Optie 2: WSL2 (Aanbevolen voor Windows)**

<cite index="31-6,31-7,31-8">Zowel WSL 1 als WSL 2 worden ondersteund. WSL 2 ondersteunt sandboxing voor verbeterde beveiliging. WSL 1 ondersteunt geen sandboxing.</cite>

1. Installeer WSL2:
```powershell
wsl --install -d Ubuntu
```

2. Herstart je computer wanneer daarom gevraagd wordt
3. Open de Ubuntu terminal
4. Installeer Claude Code:
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### macOS installatie gedetailleerd

**Stap 1: Terminal openen**
- Open Terminal.app (te vinden in Applications > Utilities)
- Of gebruik Spotlight (Cmd+Space) en zoek "Terminal"

**Stap 2: Installeer Claude Code**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Stap 3: Verificatie**
```bash
claude --version
```

<cite index="34-28,34-29">Als je installeerde via de native installer (de curl methode), dan updatet Claude Code zichzelf automatisch op de achtergrond. Homebrew installaties updaten niet automatisch — je moet periodiek brew upgrade claude-code uitvoeren om actueel te blijven.</cite>

### Linux installatie gedetailleerd

Voor de meeste Linux distributies:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Alpine Linux specifieke stappen:**

<cite index="31-9,31-10">De native installer op Alpine en andere musl/uClibc-gebaseerde distributies vereist libgcc, libstdc++, en ripgrep. Installeer deze via je distributie's pakketbeheerder, stel dan USE_BUILTIN_RIPGREP=0 in.</cite>

```bash
apk add libgcc libstdc++ ripgrep
export USE_BUILTIN_RIPGREP=0
curl -fsSL https://claude.ai/install.sh | bash
```

## Je eerste Claude Code sessie starten

### Authenticatie instellen

<cite index="24-1,24-2,24-3">Na installatie authenticeren developers met hun Claude.ai subscriptie-accounts (aanbevolen voor de meeste gebruikers) of Claude Console accounts met API toegang en vooruitbetaalde credits. Wanneer je een interactieve sessie start met het claude commando, vindt authenticatie plaats via een browser-gebaseerde login flow. Credentials blijven lokaal bewaard na eerste authenticatie, waardoor herhaalde login vereisten wegvallen.</cite>

**Stap 1: Navigeer naar je project**
```bash
cd /pad/naar/je/project
```

**Stap 2: Start Claude Code**
```bash
claude
```

**Stap 3: Voltooi authenticatie**
<cite index="21-7,21-8">Na installatie, log in door claude uit te voeren en de browser prompts te volgen. Zie Authenticatie voor alle account types en team setup opties.</cite>

<cite index="34-37,34-38,34-39,34-40">Bij de eerste keer opstarten vraagt Claude Code je om in te loggen. Je ziet opties om te authenticeren met je Claude.ai subscriptie-account of je Anthropic Console account met API credits. Volg de instructies op het scherm — het opent een browser venster waar je de login voltooit. Eenmaal geauthenticeerd worden je credentials lokaal opgeslagen en hoef je niet opnieuw in te loggen tenzij je van account wisselt.</cite>

### Alternatief: API Key authenticatie

Voor servers, containers, of CI pipelines waar je geen browser kunt openen:

```bash
export ANTHROPIC_API_KEY=sk-ant-jouw-api-key
claude
```

<cite index="12-40,12-41">Stel de ANTHROPIC_API_KEY omgevingsvariabele in. Claude Code detecteert dit automatisch en slaat de browser OAuth flow over.</cite>

### Je eerste commando's

<cite index="24-5,24-6">De eerste sessie begint door naar een projectmap te navigeren en claude uit te voeren, wat een welkomstscherm toont met sessie-informatie en beschikbare commando's.</cite>

**Basis commando's om te proberen:**

```
# Krijg hulp
/help

# Vraag Claude om je project te analyseren
"Leg uit wat dit project doet"

# Vraag om code uitleg
"Leg uit wat dit bestand doet"

# Vraag om een bug te vinden
"Vind en repareer de bug in het login formulier"
```

<cite index="19-22,19-23">Claude leest je bestanden, stelt wijzigingen voor, en kan code direct bewerken met jouw goedkeuring. Het is een gesprek, geen eenmalige prompt.</cite>

### Slash commando's

<cite index="17-10">Zodra Claude Code draait, interacteer je via natuurlijke taal en slash commando's.</cite> Hier zijn de belangrijkste:

- `/help` - Toon alle beschikbare commando's
- `/clear` - Start een nieuw gesprek
- `/exit` of `/quit` - Verlaat Claude Code
- `/config` - Configureer voorkeuren
- `/bug` - Rapporteer een probleem

## Veelvoorkomende problemen oplossen

### "Command not found: claude"

<cite index="19-24,19-25,19-26">Command not found? Herstart je terminal. De installer updatet je PATH, maar bestaande sessies zien dit niet.</cite>

Oplossingen:
1. Herstart je terminal volledig
2. Voeg handmatig toe aan PATH:

```bash
# Voor Bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Voor Zsh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Windows-specifieke problemen

<cite index="19-27,19-28">Windows problemen? Gebruik PowerShell als Administrator, of beter nog, installeer WSL en gebruik de Linux instructies.</cite>

**Git Bash niet gevonden:**
Als Claude Code je Git Bash installatie niet kan vinden:

```powershell
$env:CLAUDE_CODE_GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"
```

### npm permissie-errors

<cite index="17-7,17-8">Het uitvoeren van sudo npm install -g creëert permissie-problemen en beveiligingsrisico's. Als je permissie-errors tegenkomt met npm, configureer dan een gebruikersniveau npm directory: mkdir -p ~/.npm-global && npm config set prefix ~/.npm-global, voeg dan export PATH=~/.npm-global/bin:$PATH toe aan je ~/.bashrc bestand.</cite>

**Oplossing:**
```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Authenticatie problemen

<cite index="19-29,19-30">Authenticatie problemen? Zorg ervoor dat je een geldig Claude account hebt op claude.ai.</cite>

**Controleer:**
- Je hebt een betaald Anthropic account
- Je internetverbinding werkt
- Je browser blokkeert geen pop-ups
- Je firewall blokkeert geen verbindingen

### Diagnostic tool gebruiken

<cite index="16-19,16-20">Het claude doctor commando is je eerste stop voor troubleshooting. Het analyseert je installatie en rapporteert potentiële problemen.</cite>

```bash
claude doctor
```

<cite index="17-23,17-24,17-25">Het claude doctor commando controleert je installatietype, versie, shell configuratie, en systeem dependencies. Als iets verkeerd geconfigureerd is, geeft het specifieke herstelstappen. Gebruik dit als je eerste-lijn troubleshooting tool voor elk probleem.</cite>

## Volgende stappen na installatie

### CLAUDE.md bestand aanmaken

<cite index="1-18,1-19">CLAUDE.md is een markdown bestand dat je toevoegt aan je project root dat Claude Code leest aan het begin van elke sessie. Gebruik het om coding standaarden, architectuurbeslissingen, favoriete bibliotheken, en review checklists in te stellen.</cite>

Maak een `.claude.md` bestand in je project root:

```markdown
# Project Naam

## Coding Standaarden
- Gebruik TypeScript voor alle nieuwe code
- Volg ESLint configuratie
- Schrijf tests voor alle publieke functies

## Architectuur
- React frontend met Next.js
- Node.js backend met Express
- PostgreSQL database

## Belangrijke Commands
- `npm test` - Run alle tests
- `npm run build` - Build voor productie
- `npm run dev` - Start development server
```

### VS Code integratie

<cite index="1-10,1-12">De VS Code extensie biedt inline diffs, @-mentions, plan review, en gesprekgeschiedenis direct in je editor. Installeer voor Cursor of zoek naar "Claude Code" in de Extensions view (Cmd+Shift+X op Mac, Ctrl+Shift+X op Windows/Linux).</cite>

1. Open VS Code
2. Ga naar Extensions (Ctrl+Shift+X)
3. Zoek "Claude Code"
4. Installeer de officiële extensie
5. Open Command Palette (Ctrl+Shift+P)
6. Type "Claude Code" en selecteer "Open in New Tab"

### Best practices voor beginners

1. **Start klein**: Begin met eenvoudige vragen over je code
2. **Wees specifiek**: "Fix the login bug" is beter dan "fix my code"
3. **Review altijd**: Controleer Claude's suggesties voordat je ze accepteert
4. **Gebruik context**: Zorg dat Claude je projectstructuur begrijpt
5. **Experimenteer**: Probeer verschillende manieren om dezelfde vraag te stellen

### Kosten beheren

<cite index="18-15,18-16,18-17">Belangrijk: De Anthropic API is pay-per-use en kan duur worden bij frequent gebruik. Voor reguliere Claude Code gebruikers is een Claude Max subscriptie waarschijnlijk de meer economische optie. Claude Max biedt hogere gebruikslimieten tegen vaste maandelijkse kosten, waardoor het ideaal is voor developers die Claude Code intensief gebruiken.</cite>

**Tips voor kostenbeheersing:**
- Start met $20 aan API credits om je gebruikspatronen te testen
- Overweeg Claude Max voor regelmatig gebruik
- Gebruik `/compact` om lange gesprekken samen te vatten
- Begin nieuwe sessies voor ongerelateerde taken

## Conclusie

Je hebt nu Claude Code succesvol geïnstalleerd en bent klaar om te beginnen met AI-assisted development. <cite index="18-22,18-23">Met Claude Code succesvol geïnstalleerd, heb je nu toegang tot een van de krachtigste AI development tools beschikbaar. Elke geweldige development journey begint met een solide fundament.</cite>

De volgende stappen zijn:
1. Experimenteer met basis commando's in een test project
2. Maak een CLAUDE.md bestand voor je hoofdproject
3. Probeer de VS Code integratie
4. Sluit je aan bij de [Claude Developers Discord](https://discord.com/invite/claude-developers) voor community support

Onthoud dat Claude Code het krachtigst is wanneer je het behandelt als een AI programming partner, niet alleen als een code generator. Stel vragen, vraag om uitleg, en laat het je helpen bij het begrijpen van complexe codebases.

<cite index="13-8,13-9,13-10">Gebruik het /bug commando om problemen direct binnen Claude Code te rapporteren, of dien een GitHub issue in. Sluit je aan bij de Claude Developers Discord om verbinding te maken met andere developers die Claude Code gebruiken. Krijg hulp, deel feedback, en bespreek je projecten met de community.</cite>

Veel succes met je AI-powered development journey!