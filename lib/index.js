"use strict";

require("fslightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/*
import {suma, saludo} from './operaciones';
import Swal from 'sweetalert2';

document.write(`<h2>${suma(4,2)}</h2>`);

console.log(suma(1,2));
console.log(saludo);

Swal.fire({
  title: 'Sweet!',
  text: 'Luis Angel D.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})

/* import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component()); */