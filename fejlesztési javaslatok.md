# ***Fejlesztés***:

## **importálás**:
*Az index oldal mindenkinek importálja a [szükséges dolgokat](#indexhtml). Neked a saját fájlodba csak a saját CSS-ed kell importálni.*

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

## **img**: 
*A képeknek a forrását a következőképp kell megadni hogy kompatibilis legyen a github hostolással:*

*helyes példa:*
`<img src="basic_assets/img/logo.png">`

Itt egy példa egy helytelen, de live-serverrel működő képimportra:
`<img src="/basic_assets/img/logo.png">`

Csak egy / jellel különbözik, de a github hostolás nem értelmezi.

## **linkek**: 
*Az oldalunkon belül egy másik oldalra mutató linket hagyományos módon kell elkészíteni, **KIVÉVE** hogy hozzá kell adni a **pagelink** class-t* 
(Ezt a javascript kezeli, hogy működjön, DE EHHEZ KELL A PAGELINK CLASS)

*helyes példa:*
`<a class="pagelink btn" href="company.html">A cégről</a>`


Itt egy példa egy helytelen linkre:
`<a class="btn" href="company.html">A cégről</a>`

**Fontos** hogy a más fajta linkekhez nem kell, és nem is szabad pagelink classt rakni

# ***Fontos fájlok***:

## **index.html**
*MINDÍG INNEN INDÍTSD AZ OLDALAD*
[/index.html](/index.html)

Egyszerre több funkciót lát el, nélküle nem megy egyik oldal sem:
1. Importálja a:
    1. Boxicons-t
    2. Bootstrapet
    3. JQuery-t
    4. style.css-t
    5. main.js-t
2. A fejlécet és láblécet tartalmazza
3. A menüt tartalmazza
4. Helyet biztosít a betöltendő oldalnak

Az index.html mindíg be van töltve az oldalon, és ebbe töltődik be dinamikusan minden más oldal amit a menüből megnyithatunk

## **styles.css**
*Minden oldalra vonatkozó alapstílus*
[/basic_assets/css/styles.css](/basic_assets/css/styles.css)

FONTOS!: Ha lehet akkor az *oldal*.css-el írd felül a stílust, ne ezt módosítsd 

A CSS elején megtalálható pár hasznos oldalas szabvány (színek, betűtípusok)

például:
```
--body-font: 'Poppins', sans-serif;
--text-color: rgb(34,34,34);
--header-color: rgb(199, 33, 39);
```
Ha valami nem úgy néz ki az oldalodon ahogy arra számítanál, érdemes ellenőrizni hogy ez a hibás-e

## **main.js**
*Nagyrészt a dinamkus betöltésért és a menü funkcionalitásáért felel*
[/basic_assets/js/main.js](/basic_assets/js/main.js)

Maga a JS fájl tele van kommentekkel amik elmagyarázzák (angolul) hogy az egyes részek mit, miért, és hogyan csinálnak.

Az weblapunk úgy működik, hogy minden oldal csak az [index.html](#indexhtml) egy részébe töltődik be. Ezt a részt a `id="content"` határozza meg.

Főbb funkciók:
1. Menü kinyitás és becsukás megoldása
2. Saját oldalunkra vezető linkek (beleértve a menüt) kezelése
3. Munkamenet mentése/visszaállítása