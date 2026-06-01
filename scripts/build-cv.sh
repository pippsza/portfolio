#!/usr/bin/env bash
# Compile all CV translations straight into public/cv (no copy step) + render
# first-page previews, then strip LaTeX build artifacts. Run after editing any
# public/cv/*.tex:  pnpm cv
#
# Requires XeLaTeX (texlive) + ImageMagick — LOCAL only. The site Docker build
# (node:alpine) has neither, so the produced PDFs/JPGs are committed to git and
# the site build just serves them from public/cv.
set -euo pipefail

cd "$(dirname "$0")/../public/cv"

NAMES=(Bohdan_Astakhov_CV_EN Bohdan_Astakhov_CV_UK Bohdan_Astakhov_CV_RU)
declare -A PREVIEW=(
  [Bohdan_Astakhov_CV_EN]=preview_en.jpg
  [Bohdan_Astakhov_CV_UK]=preview_uk.jpg
  [Bohdan_Astakhov_CV_RU]=preview_ru.jpg
)

for n in "${NAMES[@]}"; do
  echo "→ compiling $n.tex"
  xelatex -interaction=nonstopmode -halt-on-error "$n.tex" >/dev/null
  echo "→ preview ${PREVIEW[$n]}"
  magick -density 150 "$n.pdf[0]" -background white -flatten -quality 88 "${PREVIEW[$n]}"
done

# strip LaTeX artifacts (sources stay; PDFs + previews are the shipped assets)
rm -f ./*.aux ./*.log ./*.out

echo "✓ CV built: EN/UK/RU PDFs + previews in public/cv"
