#!/usr/bin/env bash
set -euo pipefail

URL="${1:-http://localhost:8080}"

echo "🔎 Smoke test: check HTTP 200"
status=$(curl -s -o /tmp/page.html -w "%{http_code}" "$URL")
if [ "$status" != "200" ]; then
  echo "❌ Status attendu 200, obtenu $status"
  exit 1
fi
echo "✅ HTTP 200 OK"

echo "🔎 Smoke test: check page content."
if grep -q "Login" /tmp/page.html; then
  echo "✅ Login page content OK"
else
  echo "❌ Login page content manquant"
  exit 1
fi

echo "🎉 Tous les tests smoke passent"
