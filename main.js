'use strict';

function main () {
  console.log('entered')
  const ASectionElement = document.querySelector('.A');
  const BSectionElement = document.querySelector('.B');
  const CSectionElement = document.querySelector('.C');
  const DSectionElement = document.querySelector('.D');
  
  const ABoxElement = document.querySelector('.house-A');
  const BBoxElement = document.querySelector('.house-B');
  const CBoxElement = document.querySelector('.house-C');
  const DBoxElement = document.querySelector('.house-D');
  
  const buttonA = document.querySelector('.btn-A');
  const buttonB = document.querySelector('.btn-B');
  const buttonC = document.querySelector('.btn-C');
  const buttonD = document.querySelector('.btn-D');

  const showA = function (event) {
    console.log('clicked')
    event.stopPropagation();
    ASectionElement.classList.toggle('hidden');
    ABoxElement.classList.toggle('selection')
    
    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
      BBoxElement.classList.remove('selection');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
      CBoxElement.classList.remove('selection');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
      DBoxElement.classList.remove('selection');
    }

  };

  buttonA.addEventListener('click', showA);

  const showB = function (event) {
    event.stopPropagation();
    BSectionElement.classList.toggle('hidden');
    BBoxElement.classList.toggle('selection');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
      ABoxElement.classList.remove('selection');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
      CBoxElement.classList.remove('selection');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
      DBoxElement.classList.remove('selection');
    }

  };

  buttonB.addEventListener('click', showB);

  const showC = function (event) {
    event.stopPropagation();
    CSectionElement.classList.toggle('hidden');
    CBoxElement.classList.toggle('selection');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
      ABoxElement.classList.remove('selection');
    }
    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
      BBoxElement.classList.remove('selection');
    }
    if (!DSectionElement.classList.contains('hidden')) {
      DSectionElement.classList.add('hidden');
      DBoxElement.classList.remove('selection');
    }

  };

  buttonC.addEventListener('click', showC);


  const showD = function (event) {
    event.stopPropagation();
    DSectionElement.classList.toggle('hidden');
    DBoxElement.classList.toggle('selection');

    if (!ASectionElement.classList.contains('hidden')) {
      ASectionElement.classList.add('hidden');
      ABoxElement.classList.remove('selection');
    }
    if (!BSectionElement.classList.contains('hidden')) {
      BSectionElement.classList.add('hidden');
      BBoxElement.classList.remove('selection');
    }
    if (!CSectionElement.classList.contains('hidden')) {
      CSectionElement.classList.add('hidden');
      CBoxElement.classList.remove('selection');
    }

  };

  buttonD.addEventListener('click', showD);



}
window.addEventListener('load', main);