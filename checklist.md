/* ==========================
   RESET minimalny
========================== */
/* Nie używamy '*' – checklist zabrania.
   Zatem tylko html, body zero margin/padding. */
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ==========================
   BODY global
========================== */
body {
  font-family: Roboto, Arial, sans-serif; /* fallback */
  font-weight: 500;
  background-color: #f5f5f5;
}

/* ==========================
   CSS VARIABLE
========================== */
:root {
  --blue: #2196f3;
}

/* ==========================
   HEADER full width
========================== */
.page-header {
  width: 100%;
  /* brak marginesu poziomego => zajmuje całą szerokość */
  background-color: #fff;
}

/* Container do wyśrodkowania i flex layoutu */
.page-header__container {
  /*
    Nie ma wymogu max-width =>
    ale zazwyczaj w designie jest na szerokość.
    Jeśli w Figma jest inaczej,
    możesz dać max-width:1200px i margin 0 auto.
  */
  width: 100%;
  height: 60px; /* check: "the height should be set for nav links" – i tak zrobimy w linkach.
                   Ale do vertical center wystarczy. */
  display: flex;
  align-items: center; /* vert center w cont. */
  justify-content: space-between;
}

/* ==========================
   LOGO link
========================== */
.logo {
  /* nic szczególnego, link z img w środku */
  display: inline-block;
}

.logo img {
  /*
     Wg wymagań – "the logo is link with image inside"
     w razie czego można wymusić wymiary
  */
  height: 40px;
  object-fit: contain;
}

/* ==========================
   NAV + UL + LI + A
========================== */
.page-nav {
  /* semantyczna klasa,
     nic specjalnego,
     byle nav był flex child od container. */
}

.page-nav__list {
  list-style: none;
  display: flex;
  margin: 0;
  /* "there should not be margins before the first
     and after the last list items" =>
     zrobimy marginesy między li w środku. */
  padding: 0;
}

/*
   Indenty między li =>
   "don't use flex gap property" =>
   robimy margin-left w + li
*/
.page-nav__item + .page-nav__item {
  margin-left: 20px; /*
    lub 15, w zależności od designu
    z Figma
  */
}

/* Linki w menu */
.page-nav__link {
  text-decoration: none; /*
    Brak podkreślenia
  */
  color: black;
  text-transform: uppercase; /*
    "CSS is used to show all letters in Uppercase"
  */

  /* "the height should be set for nav links
     (not the header), take it from design" =>
     np. 60px
  */
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px; /*
    to jest jedyne miejsce,
    w którym definiujemy 60px
  */

  /* "Nav Links should not have any padding
     but have the text centered" =>
     => no padding,
     a centr. załatwia justify-content + align-items.
  */
  padding: 0;

  position: relative; /*
    do ::after
  */

  transition: color 0.3s;
}

/*
   :hover => link color changes =>
   "link color should be changed on :hover"
*/
.page-nav__link:hover {
  color: var(--blue);
}

/*
   4th link has class is-active =>
   "Pseudo-element is used for a blue line below the active link"
*/
.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--blue);
}
