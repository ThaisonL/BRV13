# Finance Dashboard

## Projectbeskrivning

- Detta är en dashboard view som är baserad på newsAPI och FMPs api för att samla in data om apples historiska värde och nuvarande aktievärde. Vi har samlat data och sammanställt i olika komponenter som visar data om apple ifrån upp emot 25 år sedan som visas i olika grafer tillexempel

- Det finns också en sökfunktion för NASDAQ företag som apples klassas som för att få en kortare beskrivning om företaget

- En sektion innehåller också dem senaste nyheterna inom ekonomi från NewsAPI

## Teknikval

Vi använde oss av Vite, React, React-router, redux-toolkit, Tailwind, Rechats.

## Installation

1. Klona detta repot i VsCode
   https://github.com/ThaisonL/BRV13.git

2. Gå in i terminalen och skriv: cd br-v9-v13 så att du sitter i rätt mapp.

3. Sedan skriv (i terminalen) npm install för att få rätt packet och bibliotek för att kunna köra programmet.

4. Skriv npm run dev i terminalen och följ länken för att starta projektet lokalt.

<<<<<<< HEAD
## Tillägg Individuell
1. Ny funktion

En knapp har lagts till i gränssnittet som växlar mellan mörk och ljus bakgrund. Detta uppdaterar tillståndet för dark mode via React's state management. darkMode-tillståndet skickas till alla relevanta komponenter via Outlet. När huvudkomponenten uppdaterar sitt tillstånd, skickas det vidare till alla barnkomponenter genom Outlet-kontexten. Detta gör att hela sidan dynamiskt anpassar sig beroende på användarens val av färgtema.

2. Övriga ändringar

Förbättrad tillgänglighet och tangentbordsnavigering
ARIA-attribut har tillämpats för att säkerställa att webbplatsen är tillgänglig för användare som använder skärmläsare. Tangentbordsnavigering har implementerats för att ge användare möjlighet att navigera mellan interaktiva element (t.ex. knappar, länkar och formulärfält) med enbart tangentbordet. Fokusmarkering på interaktiva element gör det lättare för användaren att följa vilka delar av webbplatsen som är aktiva.

Refaktorering av gammal kod
Tailwind CSS har använts för att finjustera designen och säkerställa att webbplatsen är responsiv på alla skärmstorlekar.
Media queries och flexbox har implementerats för att skapa en enhetlig och flexibel layout. 
Detta gör att webbplatsen fungerar lika bra på både stora och små skärmar. 
LocalStorage har implementeras för att lagra användardatan lokalt som då bevarar informationen även efter att sidan har laddats om.

=======

Tillägg Individuell
Ny Funktion: Sorteringsfunktionalitet
Denna funktion gör det möjligt för användare att organisera och sortera de visade företagen baserat på olika kriterier. Sorteringen sker genom en dropdown-meny där användare kan välja att sortera företagen efter följande alternativ:

Företagsnamn (Company Name):
Användare kan sortera företagen alfabetiskt, både från A till Z och från Z till A.

Aktiekurs (Stock Price):
Företagen kan sorteras efter aktiekurs, både från högsta till lägsta och från lägsta till högsta.

Marknadsvärde (Market Cap):
Företagen kan sorteras efter marknadsvärde, både från högsta till lägsta och från lägsta till högsta.

Funktionen:
När ett sorteringsalternativ väljs skickas det valda alternativet som en prop till komponenten FilterSortDropdown via setSortOption-funktionen. När användaren gör sitt val, uppdateras sortOption-tillståndet i Company-komponenten.

Company-komponenten använder sedan den uppdaterade sortOption-variabeln för att sortera listan med valda företag. Sorteringen görs i sortCompanies-funktionen, där olika kriterier som företagsnamn, marknadsvärde eller aktiekurs jämförs beroende på det valda alternativet.

Övriga ändringar
En knapp har lagts till i gränssnittet som växlar mellan mörk och ljus bakgrund. Detta uppdaterar tillståndet för dark mode via React's state management. darkMode-tillståndet skickas till alla relevanta komponenter via Outlet. När huvudkomponenten uppdaterar sitt tillstånd, skickas det vidare till alla barnkomponenter genom Outlet-kontexten. Detta gör att hela sidan dynamiskt anpassar sig beroende på användarens val av färgtema.

Förbättrad tillgänglighet och tangentbordsnavigering ARIA-attribut har tillämpats för att säkerställa att webbplatsen är tillgänglig för användare som använder skärmläsare. Tangentbordsnavigering har implementerats för att ge användare möjlighet att navigera mellan interaktiva element (t.ex. knappar, länkar och formulärfält) med enbart tangentbordet. Fokusmarkering på interaktiva element gör det lättare för användaren att följa vilka delar av webbplatsen som är aktiva.

Refaktorering av gammal kod Tailwind CSS har använts för att finjustera designen och säkerställa att webbplatsen är responsiv på alla skärmstorlekar. Media queries och flexbox har implementerats för att skapa en enhetlig och flexibel layout. Detta gör att webbplatsen fungerar lika bra på både stora och små skärmar. LocalStorage har implementeras för att lagra användardatan lokalt som då bevarar informationen även efter att sidan har laddats om.
>>>>>>> PL/Individuell
