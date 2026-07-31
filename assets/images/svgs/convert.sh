#!/usr/bin/env bash

HEIGHT="${1:-32}"
INPUT_DIR="${2:-.}"
OUTPUT_DIR="${3:-./png}"

mkdir -p "$OUTPUT_DIR"

for svg in "$INPUT_DIR"/*.svg; do
    [ -e "$svg" ] || continue

    filename="$(basename "$svg" .svg)"
    png="$OUTPUT_DIR/$filename.png"

    if inkscape "$svg" \
        --export-type=png \
        --export-filename="$png" \
        --export-height="$HEIGHT"; then
        echo "Converted: $svg → $png"
    else
        echo "FAILED: $svg" >&2
    fi
done
