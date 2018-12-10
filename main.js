'use strict';

function main () {
  console.log('entered')
  const ASectionElement = document.querySelector('.A');
  const BSectionElement = document.querySelector('.B');
  const CSectionElement = document.querySelector('.C');
  const DSectionElement = document.querySelector('.D');
  const buttonA = document.querySelector('.btn-A');
  const buttonB = document.querySelector('.btn-B');
  const buttonC = document.querySelector('.btn-C');
  const buttonD = document.querySelector('.btn-D');

  const showA = function (event) {
    console.log('clicked')
    event.stopPropagation();
    ASectionElement.classList.toggle('hidden');

    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
    }

  };

  buttonA.addEventListener('click', showA);

  const showB = function (event) {
    event.stopPropagation();
    BSectionElement.classList.toggle('hidden');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
    }

  };

  buttonB.addEventListener('click', showB);

  const showC = function (event) {
    event.stopPropagation();
    CSectionElement.classList.toggle('hidden');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
    }
    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
    }

  };

  buttonC.addEventListener('click', showC);


  const showD = function (event) {
    event.stopPropagation();
    DSectionElement.classList.toggle('hidden');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
    }
    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
    }

  };

  buttonD.addEventListener('click', showD);



}
window.addEventListener('load', main);