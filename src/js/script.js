 /* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import MusicPlayer from './containers/MusicPlayer';
import App from './containers/App';

let counter = 0;

const init = () => {

  particles(`.sectionOne`, `black`, `pink`, `rgba(0, 0, 0, 0)`);
  particles(`.sectionTwo`, `black`, `green`, `rgba(0, 0, 0, 0)`);

  window.addEventListener(`scroll`, fadeinElems);

  const $wolkjesBottom = document.querySelector(`.header__clouds`);
  const $wolkjesTweeBottom = document.querySelector(`.sectionTwo__clouds`);
  const $wolkjesDrieBottom = document.querySelector(`.sectionNine__clouds`);

  setInterval(() => neonflikker(), Math.round(Math.random() * 2500));

  setInterval(() => cloudsLeft($wolkjesBottom, 0.02), 1000 / 60);
  setInterval(() => cloudsLeft($wolkjesTweeBottom, 0.02), 1000 / 60);
  setInterval(() => cloudsLeft($wolkjesDrieBottom, 0.02), 1000 / 60);


  render(
    <MusicPlayer songCounter='1' />,
    document.querySelector(`.reactPlayer1`)
  );
  render(
    <MusicPlayer songCounter='2' />,
    document.querySelector(`.reactPlayer2`)
  );
  render(
    <MusicPlayer songCounter='3' />,
    document.querySelector(`.reactPlayer3`)
  );
  render(
    <MusicPlayer songCounter='4' />,
    document.querySelector(`.reactPlayer4`)
  );
  render(
    <MusicPlayer songCounter='5' />,
    document.querySelector(`.reactPlayer5`)
  );
  render(
    <MusicPlayer songCounter='6' />,
    document.querySelector(`.reactPlayer6`)
  );
  render(
    <App />,
    document.querySelector(`.react-mount`)
  );

};

const particles = (container, zwartwit, kleur, bgColor = `rgba(0, 0, 0, 0)`) => {

  const $el = document.querySelector(container);

  $el.style.background =  `url(/assets/img/${zwartwit}.png), url(/assets/img/${kleur}.png), ${bgColor}`;

  $el.onmousemove = function(e) {
    const mouseX = e.clientX / 150;
    const mouseY = e.clientY / 50;

    $el.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
    //werk met translate en transform.
  };
};

const cloudsLeft = ($el, value) => {

  if (counter > 100) {
    counter = 0;
  }
  counter += value;
  $el.style.backgroundPosition = `${counter}% 0%`;

};

const neonflikker = () => {

  const randomImage = Math.ceil(Math.random() * 6);

  const $container = document.querySelector(`.sectionThree`);
  const $img = document.querySelector(`.sectionThree__neon`);
  $img.setAttribute(`src`, `assets/img/sectionThree_neon${randomImage}.png`);

  $container.append($img);

};

const getTop = $el => {
  const el = document.querySelector($el);
  return el.getBoundingClientRect().top;
};

const getHeight = $el => {
  const el = document.querySelector($el);
  return el.clientHeight;
};

const fadeinElems = () => {

  if (getTop(`.sectionOne`) < (2 * window.innerHeight / 3) && getTop(`.sectionOne`) > - getHeight(`.sectionOne`)) {
    document.querySelector(`.sectionOne`).classList.add(`fadeLeft`);
  }

  if (getTop(`.sectionTwo`) < (2 * window.innerHeight / 3) && getTop(`.sectionTwo`) > - getHeight(`.sectionTwo`)) {
    document.querySelector(`.sectionTwo`).classList.add(`fadeRight`);
  }

  if (getTop(`.sectionThree`) < (2 * window.innerHeight / 3 + 50) && getTop(`.sectionThree`) > - getHeight(`.sectionThree`)) {
    document.querySelector(`.sectionThree`).classList.add(`fadeTop`);
  }

  if (getTop(`.sectionEleven`) < (2 * window.innerHeight / 3 + 50) && getTop(`.sectionEleven`) > - getHeight(`.sectionEleven`)) {
    document.querySelector(`.sectionEleven`).classList.add(`fadeTop`);
  }

  if (getTop(`.sectionFour__content`) < (2 * window.innerHeight / 3) && getTop(`.sectionFour__content`) > - getHeight(`.sectionFour__content`)) {
    document.querySelector(`.sectionFour__content`).classList.add(`fadeRight`);
  }

  if (getTop(`.sectionSix__content`) < (2 * window.innerHeight / 3) && getTop(`.sectionSix__content`) > - getHeight(`.sectionSix__content`)) {
    document.querySelector(`.sectionSix__content`).classList.add(`fadeBottom`);
  }

  if (getTop(`.sectionEight__content`) < (2 * window.innerHeight / 3) && getTop(`.sectionEight__content`) > - getHeight(`.sectionEight__content`)) {
    document.querySelector(`.sectionEight__content`).classList.add(`fadeBottom`);
  }

  if (getTop(`.sectionNine__content`) < (2 * window.innerHeight / 3) && getTop(`.sectionNine__content`) > - getHeight(`.sectionNine__content`)) {
    document.querySelector(`.sectionNine__content`).classList.add(`fadeBottom`);
  }

};

init();
