#!/bin/sh
rsync -av --exclude-from='exclude-list.txt' ./ output