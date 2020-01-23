# Front-end assessment

Bij [viaBOVAG.nl](https://www.viabovag.nl) willen we het met de kandidaat graag o.a. over code hebben. Deze opdracht is een middel om je coding skills te presenteren. Je mag grotendeels zelf bepalen welke technieken en tooling je bij het uitvoeren van de opdracht gebruikt. Aangezien je naar een positie als front-end developer solliciteert ligt het gebruik van _HTML_, _CSS_ en _JavaScript_ voor de hand. Dit zien we dan ook graag terug in jouw code.

Tijdens het technisch interview zullen we de opgeleverde code bespreken en vragen stellen over gemaakte keuzes. Het hoeft geen briljante oplossing te zijn, maar het zal helpen het interview inhoud en vorm te geven. De bedoeling is dat je er maximaal een dagdeel aan besteed.

We kijken uit naar jouw oplossing!

## 👨‍💻 Voorbereiding

Zorg er voor dat je **Node.js** versie **8** of hoger geïnstalleerd hebt.

## 🏁 Doel van de opdracht

Bouw een webpagina die de voertuigen toont zoals ze ter beschikking worden gesteld door de *Vehicle API* (verderop meer hier over). Artistieke vrijheid is van toepassing. Gebruik dus je creativiteit met de manier waarop de voertuigen gespresenteerd worden.

💡 Tip: toon/verberg bij interactie (bijvoorbeeld een click event) uitgebreidere voertuigdetails.

**Aandachtspunten:**

* Mobile first approach: meer dan 60% van de bezoeken komt via mobiel
* Performance: essentieel voor een goede gebruikerservaring

## 🚙 Vehicle API

De voertuigen op viaBOVAG.nl worden aangeleverd middels de *Vehicle API*. Voor de opdracht gaan we gebruik maken van een vereenvoudigde, gemockte variant. Deze bevindt zich in de map `/api`. We starten de mock server als volgt:

```bash
$ cd api
$ npm i && npm start
```

De mock server is nu te bereiken op http://localhost:3000

### Routes

Haal details van alle voertuigen op:

```
GET /vehicles
```

Haal details van een specifiek voertuig op:

```
GET /vehicles/:id
```

Haal afbeelding op uit `public/images/` folder:

```
GET /images/:file
```
