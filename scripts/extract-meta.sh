#!/bin/bash
#
# Extrat Meta from list of files using ImageMagik Identify CLI tool and create
# nearly JSON data.
#
# Data needs post manipulation to build a real JSON obect and fix data format manipulation back to 8601

# Execute from image directory with a command like:
# ```
#  $ ../../dev/tarawera-everyday/scripts/extract-meta.sh | jq > ../../dev/tarawera-everyday/meta.json
# ```


# Start output array
echo "["

# Fastest execute for just dimensions
# parse=$(identify -format '{"name": "%f", "width": "%w", "height": "%h"},\n' *.jpg)

#identify -format '{"name": "%f", "width": "%w", "height": "%h", "dateTime": "%[EXIF:DateTime]", "dateTimeOriginal": "%[EXIF:DateTimeOriginal]"},\n' *.jpg

# Generate JSON string (unvalidated) of the key attributes
parse=$(identify -format '{"name": "%f", "width": "%w", "height": "%h", "dateTime": "%[EXIF:DateTime]", "dateTimeOriginal": "%[EXIF:DateTimeOriginal]"},\n' *.jpg)

# REmove last comma to make more valid
echo ${parse%?}

# close array
echo "]"
