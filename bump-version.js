// bump-version.js
const fs = require('fs');
const semver = require('semver');
const { execSync } = require('child_process');

// Ścieżka do pliku package.json
const packageJsonPath = './package.json';

// Pobierz typ podbicia wersji z argumentów (domyślnie: patch)
const bumpType = process.argv[2] || 'patch';

try {
  // Wczytaj package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  // Obecna wersja
  const currentVersion = packageJson.version;

  if (!currentVersion) {
    throw new Error('Nie znaleziono wersji w package.json!');
  }

  // Nowa wersja
  const newVersion = semver.inc(currentVersion, bumpType);

  // Aktualizacja package.json
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');

  console.log(`Wersja została zaktualizowana z ${currentVersion} do ${newVersion}`);
  // Automatyczna aktualizacja Git
  execSync(`git add ${packageJsonPath}`);
  execSync(`git commit -m "Bump version to ${newVersion}"`);
  execSync(`git tag ${newVersion}`);
  console.log(`Zaktualizowano wersję i utworzono tag ${newVersion}`);
} catch (error) {
  console.error('Błąd podczas podbijania wersji:', error.message);
  process.exit(1);
}
