#!/bin/sh
rm -rf ./output
rsync -av --exclude-from='exclude-list.txt' ./ output