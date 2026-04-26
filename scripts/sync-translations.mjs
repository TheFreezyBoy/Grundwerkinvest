#!/usr/bin/env node
/**
 * Syncs translations/de.json (and any other non-EN locales) against translations/en.json.
 *
 * Rules:
 *  - New key in EN   → added to DE with empty string  (needs translation)
 *  - EN value changed → DE value reset to empty string (needs re-translation)
 *  - Key removed in EN → removed from DE
 *  - DE value already empty → left empty (don't overwrite in-progress work)
 *
 * A separate "snapshot" file (translations/.en-snapshot.json) tracks the last
 * known EN values so we can detect changes between runs.
 *
 * Usage: node scripts/sync-translations.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const translationsDir = resolve(root, 'translations')

const enPath = resolve(translationsDir, 'en.json')
const snapshotPath = resolve(translationsDir, '.en-snapshot.json')

const en = JSON.parse(readFileSync(enPath, 'utf8'))
const snapshot = existsSync(snapshotPath)
  ? JSON.parse(readFileSync(snapshotPath, 'utf8'))
  : {}

// Locales to sync (add more here as needed)
const targetLocales = ['de']

let totalAdded = 0
let totalReset = 0
let totalRemoved = 0

for (const locale of targetLocales) {
  const localePath = resolve(translationsDir, `${locale}.json`)
  const existing = existsSync(localePath)
    ? JSON.parse(readFileSync(localePath, 'utf8'))
    : {}

  const synced = {}
  let added = 0, reset = 0, removed = 0

  for (const [key, enValue] of Object.entries(en)) {
    const prevEnValue = snapshot[key]
    const currentTranslation = existing[key]

    if (!(key in existing)) {
      // New key
      synced[key] = ''
      added++
    } else if (prevEnValue !== undefined && prevEnValue !== enValue && currentTranslation !== '') {
      // EN value changed since last snapshot — reset translation
      synced[key] = ''
      reset++
    } else {
      // Keep existing translation (even if empty)
      synced[key] = currentTranslation
    }
  }

  // Count removed keys
  for (const key of Object.keys(existing)) {
    if (!(key in en)) removed++
  }

  writeFileSync(localePath, JSON.stringify(synced, null, 2) + '\n')
  console.log(`[${locale}] +${added} added, ~${reset} reset, -${removed} removed`)
  totalAdded += added
  totalReset += reset
  totalRemoved += removed
}

// Update snapshot to current EN
writeFileSync(snapshotPath, JSON.stringify(en, null, 2) + '\n')

if (totalAdded + totalReset + totalRemoved === 0) {
  console.log('✓ All translations are in sync.')
} else {
  console.log(`\n⚠ Keys needing translation: search for empty strings ("") in translations/de.json`)
}
