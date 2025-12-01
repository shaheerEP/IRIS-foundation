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

  // Also copy the full next package into the netlify publish folder so the runtime has access
  // to Next's internals (this helps the plugin requiring 'next/dist/server/lib/start-server.js')
  const nextPackageSrc = path.resolve(process.cwd(), 'node_modules', 'next');
  const nextPackageDest = path.resolve(dest, 'node_modules', 'next');
  // Also copy to .netlify/dist/node_modules so plugin runtime can resolve require paths
  const nextPackageDestDist = path.resolve(process.cwd(), '.netlify', 'dist', 'node_modules', 'next');
  if (fs.existsSync(nextPackageSrc)) {
    try {
      fs.mkdirSync(path.dirname(nextPackageDest), { recursive: true });
      fs.cpSync(nextPackageSrc, nextPackageDest, { recursive: true });
      console.log('Copied node_modules/next to .netlify/next/node_modules/next');
      try {
        fs.mkdirSync(path.dirname(nextPackageDestDist), { recursive: true });
        fs.cpSync(nextPackageSrc, nextPackageDestDist, { recursive: true });
        console.log('Copied node_modules/next to .netlify/dist/node_modules/next');
      } catch (err) {
        // If we can't make this dir or copy to dist (it may not exist yet), just warn
        console.warn('Warning: could not copy node_modules/next to .netlify/dist/node_modules/next:', err.message);
      }
    } catch (err) {
      console.error('Error copying node_modules/next into .netlify/next:', err);
      process.exitCode = 1;
    }
  } else {
    console.log('node_modules/next not found; skipping copying of next package.');
  }
}

main();
