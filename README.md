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
| `img/photos/` | Fotky galerie, zobrazí se automaticky v části „Ze života dílny“ | Galerie |
| `img/aktuality/` | Fotky z článků; v galerii se samy seskupí pod názvem článku s odkazem | Aktuality, Galerie |

## Lokální náhled

```bash
docker compose up
```

Web běží na http://localhost:4000 a při uložení souboru se obnoví.

## Doména a testovací režim

- Web běží na `jendovadilna.cz` (soubor `CNAME`, `url` v `_config.yml`).
- `staging: true` v `_config.yml` by přidal `noindex`, zakázal roboty a zobrazil pruh „Testovací verze“. Na ostrém webu musí být `false`.

Staré adresy zůstávají funkční: `/kalendar2/`, `/index/`, `/workshop3D/` a `/2025/12/21/test-prispevek.html` přesměrovává `jekyll-redirect-from`.
