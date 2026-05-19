#!/usr/bin/env node
// Usage: node scripts/gen-qr.js <campaign-code> [output-dir]
// Generates: qr-<CODE>.png (300x300, high contrast)
// URL format: https://voltsolenergy.com/go/<CODE>

const QRCode = require('qrcode');
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const code = process.argv[2];
const outputDir = process.argv[3] || '.';

if (!code) {
  console.error('Usage: node scripts/gen-qr.js <campaign-code> [output-dir]');
  process.exit(1);
}

const upperCode = code.toUpperCase();
const url = `https://voltsolenergy.com/go/${upperCode}`;
const outputFile = path.join(outputDir, `qr-${upperCode}.png`);

// Ensure output dir exists
fs.mkdirSync(outputDir, { recursive: true });

async function generate() {
  console.log(`Generating QR code for: ${url}`);

  // Generate QR as data URL (PNG buffer)
  const qrDataUrl = await QRCode.toDataURL(url, {
    width: 260,
    margin: 1,
    color: {
      dark: '#0F172A',  // Navy
      light: '#FFFFFF',
    },
    errorCorrectionLevel: 'H',
  });

  // Convert data URL to buffer and write
  const base64 = qrDataUrl.replace(/^data:image\/png;base64,/, '');
  const buffer = Buffer.from(base64, 'base64');

  // We'll create a slightly larger canvas with URL label below
  // If canvas module not available, just write the QR directly
  try {
    const { createCanvas, loadImage } = require('canvas');

    const CANVAS_WIDTH = 300;
    const CANVAS_HEIGHT = 340;
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Load and draw QR
    const img = await loadImage(buffer);
    ctx.drawImage(img, 20, 16, 260, 260);

    // URL text below
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('voltsolenergy.com/go/' + upperCode, CANVAS_WIDTH / 2, 296);

    // Small code label
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Campaign: ' + upperCode, CANVAS_WIDTH / 2, 318);

    const out = fs.createWriteStream(outputFile);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => {
      console.log(`✓ Saved: ${outputFile} (300x340px with URL label)`);
    });
  } catch {
    // Fallback: write plain QR without label
    fs.writeFileSync(outputFile, buffer);
    console.log(`✓ Saved: ${outputFile} (300x300px, no label — install 'canvas' package for labeled version)`);
  }
}

generate().catch(err => {
  console.error('Failed to generate QR code:', err.message);
  process.exit(1);
});
