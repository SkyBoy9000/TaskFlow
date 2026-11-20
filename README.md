# TaskFlow

Mobilna aplikacija za dnevno načrtovanje nalog, izdelana z Expo in React Native.

## Člana skupine

- Amadej Javornik
- Marko Adamović

Razred: 4. TRB

## Opis aplikacije

TaskFlow je aplikacija za dijake in študente, ki želijo imeti organiziran dan. Naloge se lepo povežejo v dnevni načrt, urnik pa je mogoče prilagajati sproti. Uporabnik lahko:

- doda nalogo z uro (HH:MM),
- vidi naloge, samodejno razvrščene po uri,
- nalogo označi kot opravljeno (in oznako prekliče),
- nalogo odstrani,
- na zaslonu »O aplikaciji« prebere opis in prikaže avtorja.

## Zgradba projekta

```
src/
  app/           zasloni (Expo Router)
    _layout.tsx        navigacija (Stack)
    index.tsx          začetni zaslon: današnji načrt
    o-aplikaciji.tsx   drugi zaslon
  components/    ponovno uporabne komponente
    gumb.tsx
    kartica-naloge.tsx
  utils/         pomožne funkcije
    pomozne-funkcije.ts
  theme.ts       barve in skupni slogi
```

## Navodila za zagon

Potrebuješ [Node.js](https://nodejs.org/) (LTS), [Git](https://git-scm.com/) in na telefonu aplikacijo **Expo Go**.

1. Kloniraj repozitorij in odpri mapo projekta:

   ```bash
   git clone <URL-REPOZITORIJA>
   cd <IME-MAPE>
   ```

2. Namesti odvisnosti:

   ```bash
   npm install
   ```

3. Zaženi razvojni strežnik:

   ```bash
   npx expo start
   ```

4. Na telefonu odpri Expo Go in skeniraj QR-kodo iz terminala. Računalnik in telefon naj bosta v istem omrežju (Wi-Fi). Če povezava ne deluje, zaženi `npx expo start --tunnel`.

Preverjanje tipov: `npm run typecheck`.
