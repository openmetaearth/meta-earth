#!/usr/bin/env bash

set -o errexit -o nounset

function find_change_log() {
  local file="$1"
  local version="$2"
  local i
  i="$(grep -n "\[$version\]" "$file" | cut -d: -f1 | head -n 1)"
  if [[ -z "$i" ]]; then
    echo "cannot find version $version" >&2 && return
  fi
  local j
  j="$(tail -n +"$i" "$file" | grep -n "\-\-\-" | cut -d: -f1 | head -n 1)"
  if [[ -z "$j" ]]; then
    echo "cannot find the end of $version's changelog" >&2 && exit 1
  fi
  tail -n +"$i" "$file" | head -n "$j"
}

version=${1:-$VERSION}
changelog="$(find_change_log "./CHANGELOG.md" "$version")"
last_version=$(git tag --sort=-creatordate | grep -v '/' | head -n 2 | tail -n 1 || true)

echo "writing release note for version $version"
cat <<EOF >./release-note.md
<!-- Add upgrade instructions here -->

## 🚀 Highlights

<!-- Add any highlights of this release -->

$changelog

**Full Changelog**: https://github.com/st-chain/me-hub/compare/$last_version...$version.
EOF