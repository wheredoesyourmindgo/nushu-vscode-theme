#!/usr/bin/env bash
# Shell: variables in and out of strings, expansions, heredocs, functions
set -euo pipefail

readonly BACKUP_DIR="${HOME}/Backups"
log_file="/tmp/backup-$(date +%Y%m%d).log"
declare -a targets=("Documents" "Pictures" "$1")
declare -A sizes=([small]=10 [large]=100)

log() {
  local level="$1"; shift
  printf '[%s] %s: %s\n' "$(date +%T)" "$level" "$*" | tee -a "$log_file"
}

backup() {
  local src="$HOME/$1"
  if [[ ! -d "$src" ]]; then
    log WARN "missing $src"
    return 1
  elif [[ -n "${DRY_RUN:-}" ]]; then
    log INFO "would copy ${src} -> ${BACKUP_DIR}/${1,,}"
  else
    rsync -a --delete "$src/" "$BACKUP_DIR/$1/" 2>>"$log_file" || log ERROR "rsync failed ($?)"
  fi
}

for t in "${targets[@]}"; do
  backup "$t" &
done
wait

count=$(( ${#targets[@]} * 2 ))
echo "Done: $count jobs, ${sizes[large]} MB max, pid $$, last arg ${!#}, script ${0##*/}"

case "${2:-}" in
  -v|--verbose) cat "$log_file" ;;
  *) : ;;
esac

cat <<EOT > "$BACKUP_DIR/README"
Backed up on $(hostname) by $USER
Literal: \$HOME stays literal
EOT
