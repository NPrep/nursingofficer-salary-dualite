const { execSync } = require('node:child_process');
const puppeteer = require('puppeteer');

try {
  const executablePath = puppeteer.executablePath();
  if (executablePath) {
    process.env.PUPPETEER_EXECUTABLE_PATH = executablePath;
  }
} catch (err) {
  // Fallback: use default puppeteer behavior if executablePath fails
}

execSync('react-snap', { stdio: 'inherit', env: process.env });
