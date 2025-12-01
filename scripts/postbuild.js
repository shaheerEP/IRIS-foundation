const fs = require('fs');
const path = require('path');

async function main() {
  const src = path.resolve(process.cwd(), '.next');
  const dest = path.resolve(process.cwd(), '.netlify/next');

  if (!fs.existsSync(src)) {
    console.log('.next directory not found, skipping copy.');
    return;
  }

  // Ensure dest dir exists
  fs.mkdirSync(dest, { recursive: true });

  console.log('Copying .next to .netlify/next...');

  // Approach: use fs.cp (Node 16.7+), which is available in Node 20
  try {
    fs.cpSync(src, dest, { recursive: true });
    console.log('Copy complete.');
  } catch (err) {
    console.error('Error copying .next to .netlify/next:', err);
    process.exitCode = 1;
  }
}

main();
