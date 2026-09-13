# Jendova dílna – nový web

Jekyll web spolku Jendova dílna s vlastní šablonou (bez Beautiful Jekyll). Obsah se upravuje v [Pages CMS](https://app.pagescms.org), web se staví na GitHub Pages.

## Struktura obsahu

| Složka / soubor | Co obsahuje | V Pages CMS |
| --- | --- | --- |
| `_krouzky/` | Kroužky – karty, detail a týdenní rozvrh | Kroužky |
| `_lektori/` | Profily lektorů, kroužky se k nim přiřadí podle jména | Lektoři |
| `_posts/` | Aktuality a pozvánky; pole `akce_datum` řídí „Nejbližší v dílně“ | Aktuality |
| `_data/nastaveni.yml` | Kontakty, účet, sociální sítě, školní rok | Nastavení webu |
| `_data/kategorie.yml` | Barvy kategorií kroužků | – |
| `pages/` | Stránky (kroužky, lektoři, galerie, o spolku…) | Stránky (jen `.md`) |
| `img/photos/` | Fotky galerie, zobrazí se automaticky | Galerie |

## Lokální náhled

```bash
docker compose up
```

Web běží na http://localhost:4000 a při uložení souboru se obnoví.

## Testovací web new.jendovadilna.cz

- `CNAME` obsahuje `new.jendovadilna.cz`
- `staging: true` v `_config.yml` přidá `noindex`, zakáže roboty a zobrazí pruh „Testovací verze“

## Překlopení na jendovadilna.cz

1. V `_config.yml` nastavit `url: "https://jendovadilna.cz"` a `staging: false`.
2. `CNAME` přepsat na `jendovadilna.cz`.
3. Obsah větve nahrát do původního repozitáře `marhul/Jendova-dilna-web` (větev `main`).
4. V Pages CMS přepnout repozitář zpět na původní.

Staré adresy zůstávají funkční: `/kalendar2/`, `/index/`, `/workshop3D/` a `/2025/12/21/test-prispevek.html` přesměrovává `jekyll-redirect-from`.
