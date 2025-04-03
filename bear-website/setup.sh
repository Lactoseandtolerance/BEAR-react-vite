#!/bin/bash

# Create the directory structure
mkdir -p src/assets/collections/{primal,ethereal,techno}
mkdir -p src/components/{core,layouts,commerce,animations,collection}
mkdir -p src/hooks
mkdir -p src/context
mkdir -p src/pages/{collections,product}
mkdir -p src/services
mkdir -p src/styles/themes
mkdir -p src/utils

# Create placeholder asset directories for each collection
mkdir -p public/assets/collections/{primal,ethereal,techno}

# Create basic placeholder images
touch public/assets/home-hero-bg.jpg
touch public/assets/collections/primal/cover.jpg
touch public/assets/collections/ethereal/cover.jpg
touch public/assets/collections/techno/cover.jpg

echo "Project directory structure created successfully!"