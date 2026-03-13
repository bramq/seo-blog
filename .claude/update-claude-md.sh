#!/bin/bash
# Stop hook: update CLAUDE.md after each session

CLAUDE_MD="$(dirname "$(dirname "$0")")/CLAUDE.md"
DATE=$(date '+%Y-%m-%d %H:%M')

# Read stdin (session JSON from Claude Code)
SESSION_JSON=$(cat)

# Get recent git changes
GIT_LOG=$(git -C "$(dirname "$(dirname "$0")")" log --oneline -5 2>/dev/null || echo "geen commits")
GIT_STATUS=$(git -C "$(dirname "$(dirname "$0")")" status --short 2>/dev/null || echo "geen wijzigingen")

# Build session summary
SUMMARY="
---
## Sessie: $DATE

### Recente commits
\`\`\`
$GIT_LOG
\`\`\`

### Gewijzigde bestanden
\`\`\`
$GIT_STATUS
\`\`\`
"

# Append to CLAUDE.md (keep header, append session log)
# Remove previous session entries older than 5 sessions to keep file clean
HEADER=$(head -4 "$CLAUDE_MD")
EXISTING_SESSIONS=$(grep -c "^## Sessie:" "$CLAUDE_MD" 2>/dev/null || echo 0)

if [ "$EXISTING_SESSIONS" -ge 5 ]; then
  # Keep only the last 4 sessions + new one = 5 total
  # Rebuild: header + last 4 sessions + new session
  SESSIONS=$(awk '/^---$/{n++} n>=1' "$CLAUDE_MD" | tail -c 10000)
  echo "$HEADER" > "$CLAUDE_MD"
  echo "$SESSIONS" >> "$CLAUDE_MD"
fi

echo "$SUMMARY" >> "$CLAUDE_MD"
