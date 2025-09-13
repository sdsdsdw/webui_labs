#!/bin/bash

for i in $(seq 1 1 13); do
    mkdir -p "lab$i"

    cat > "lab$i/index.html" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab $i</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="main.js"></script>
</body>
</html>
EOF

    > "lab$i/styles.css"
    > "lab$i/main.js"
done
