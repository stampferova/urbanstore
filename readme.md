SUPERKODERS DevStack
======

Rozjetí projektu
------

### Windows

1. Před rozjetím projektu je potřeba nainstalovat
	1. [Node.js](https://nodejs.org/en/)
	1. [GIT pro command line](https://git-scm.com/download/)
1. Nainstalovat globální balíčky pomocí npm
	1. Gulp – v command line: npm install gulp-cli -g
1. Nyní je vše nainstalováno a můžeme přejít k rozjetí projektu
	1. Nainstalovat npm balíčky - v command line: npm install
	1. Spustit gulp - v command line: gulp (při dalším spouštění stačí již pouze příkaz gulp, pokud tedy není potřeba doinstalovat nové bower/npm balíčky)

### Mac

1. Před rozjetím projektu je potřeba naistalovat
	1. [xCode z AppStoru](https://itunes.apple.com/app/xcode/id497799835?mt=12) + projít prvním spuštěním
	1. [Command Line Tools](https://developer.apple.com/downloads/index.action?=command%20line%20tools) z Apple Developers (musí být k nainstalované verzi xCodu)
	1. [Homebrew](https://brew.sh/) - $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	1. [Node.js](https://nodejs.org/en/) – $ brew install node
1. Nainstalovat další závislosti
	1. Gulp – $ npm install gulp-cli -g
1. Spuštění projektu
	1. $ sh start.sh – **Tento příkaz automaticky spustí:**
		1. npm install --no-progress
		1. gulp (při dalším spouštění stačí již pouze příkaz gulp, pokud tedy není potřeba doinstalovat nové bower/npm balíčky)

Příkazy k práci s devstackem
-------------
**gulp** - Příkaz pro vykompilování již nastaveného projektu a spuštění watcherů
**gulp min** - Příkaz pro vykompilování minifikovaného projektu (minifikují se JS, CSS a obrázky). U tohoto příkazu se nepouští watcher
**gulp minwatch** - Příkaz pro vykompilování minifikovaného projektu a spuštění watcherů
**gulp export** - Příkaz pro vyexportování minifikovaného projektu do zipu (ideální pro verzování)
**gulp validate** - Příkaz pro validaci HTML

Adresa testovacího prostředí
-------------
Po rozjetí devstacku šablony běží na virtuální adrese http://localhost:3000/tpl (není-li obsazen port - přesná adresa se případně zobrazí v konzoli po spuštění příkazu gulp) nebo lze klasicky otevřít index.html z /web/tpl/

Adresářová struktura
------
1. **src** - složka se zdrojovými soubory
	1. **css** – složka se zdroji pro CSS ([stylus](http://stylus-lang.com/)/[scss](https://sass-lang.com/))
	1. **img** – složka s obrázky
	1. **js** – složka s javascripty
	1. **tpl** – složka s HTML psaném v templatovacím jazyku [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
	1. **fonts** – složka s webfonty (namusí být v každém projektu)
1. **tasks** - jednotlivé gulp tasky
1. **.babelrs** – konfigurace Babel
1. **.gitignore** - konfigurace ignorovaných složek pro GIT
1. **.editorconfig** - konfigurace IDE
1. **.eslintignore** - konfigurace linteru
1. **.eslintrc** - konfigurace linteru
1. **.stylintrc** - konfigurace linteru
1. **config.js** – konfigurace adresářové struktury
1. **README.md** - dokumentace projektu
1. **package.json** - definice npm závislostí devstacku
1. **start.sh** - spouštěcí shell skript pro MAC

### vykompilované složky
1. **node_modules** - node balíčky
1. **web** - vykompilované šablony s CSS, JS, HTML, fonty a obrázky

Tyto složky nikdy nepushujte do GITu.
