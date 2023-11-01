## **img**: 
#### A képeknek a forrását a következőképp kell megadni hogy kompatibilis legyen a github hostolással:

*helyes példa:*
`<img src="basic_assets/img/logo.png">`

Itt egy példa egy helytelen, de live-serverrel működő képimportra:
`<img src="/basic_assets/img/logo.png">`

Csak egy / jellel különbözik, de a github hostolás nem értelmezi.

## **linkek**: 
#### Az oldalunkon belül egy másik oldalra mutató linket ugyan úgy kell elkészíteni, ahogy azt amúgy is, DE hozzá kell adni a pagelink class-t (Ezt a javascript kezeli, hogy működjön, DE EHHEZ KELL A PAGELINK CLASS)

*helyes példa:*
`<a class="pagelink btn" href="company.html">A cégről</a>`


Itt egy példa egy helytelen linkre:
`<a class="btn" href="company.html">A cégről</a>`

**Fontos** hogy a más fajta linkekhez nem kell, és nem is szabad pagelink classt rakni

## **importálás**:
#### Az index oldal mindenkinek importálja a szükséges dolgokat. Neked a saját fájlodba csak a saját CSS-ed kell importálni. 
Ha valami pluszt is akarsz importálni, nyugodtan, de vigyázz arra hogy amit a saját oldaladon importálsz, az **felülírja** az index oldalról importált dolgokat 
Ezt előnyödre is lehet használni, például a háttér így van kikapcsolva a főoldalon

*helyes példa*:
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A cégünk</title>
    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="side_assets/company_assets/companystyle.css">
</head>
```