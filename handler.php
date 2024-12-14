<?php
// Map of file names to titles
$titles = [
    'blog1' => 'blog',
    'blog2' => 'blog',
    'index' => 'home',
    '404' => '404page',
    'aboutme' => 'about-me',
    'calculator' => 'calculator-project',
    'counter' => 'counter-project',
    'randomnumbergen' => 'random-project'
];

// Get the file name from the query parameter
$file = $_GET['file'] ?? 'index'; // Default to 'index'

// Set the title based on the file name
$title = $titles[$file] ?? 'Unknown Page';

// Serve the appropriate file content
$pagePath = "$file.html";

if (file_exists($pagePath)) {
    echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>$title</title>
</head>
<body>";
    include($pagePath);
    echo "</body>
</html>";
} else {
    // Handle 404 errors
    http_response_code(404);
    echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>404page</title>
</head>
<body>
    <h1>404 - Page Not Found</h1>
</body>
</html>";
}
?>
