# Hack IndieHackers Chrome Extension

A Chrome extension that removes popup elements with class 'simple-popup ember-view pw-pop' and IDs starting with 'ember'.

## Installation

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" and select the extension directory
5. The extension should now be installed and active

## How it works

This extension automatically removes intrusive popup elements that match specific criteria from web pages. It runs when pages load and continues to monitor for dynamically added popups.

## Files

- `manifest.json` - Extension configuration
- `content.js` - Script that removes the popup elements
- `images/` - Directory containing extension icons
