
window.addEventListener('DOMContentLoaded', init);

function init() {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      try {
        let output = document.querySelector('output');
        let firstNum = Number(document.querySelector('#first-num').value);
        let secondNum = Number(document.querySelector('#second-num').value);
        if (isNaN(firstNum) || isNaN(secondNum)){
            throw new ValueError('Incorrect data: not a number');
        }

        let operator = document.querySelector('#operator').value;
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (err) {
        alert('Error with input values');
        console.log(err);
      } finally {
        console.log('Finished');
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    //alert('test');
    //console.log(errorBtns);
    errorBtns[0].addEventListener('click', () => {
        console.log('You pressed Console Log');
    });
    errorBtns[1].addEventListener('click', () => {
        console.error('You pressed Console Error');
    });
    errorBtns[2].addEventListener('click', () => {
        console.count('Count');
    });
    errorBtns[3].addEventListener('click', () => {
        console.warn('You pressed Console Warn');
    });
    errorBtns[4].addEventListener('click', () => {
        console.assert(1 == 0, 'number is expected to be 0');
    });
    errorBtns[5].addEventListener('click', () => {
        console.clear();
    });
    errorBtns[6].addEventListener('click', () => {
        console.dir(errorBtns[6]);
    });
    errorBtns[7].addEventListener('click', () => {
        console.dirxml(errorBtns[7]);
    });
    errorBtns[8].addEventListener('click', () => {
        console.group('Button group');
    });
    errorBtns[9].addEventListener('click', () => {
        console.groupEnd('Button group');
    });
    errorBtns[10].addEventListener('click', () => {
        console.table(errorBtns);
    });
    errorBtns[11].addEventListener('click', () => {
        console.time();
    });
    errorBtns[12].addEventListener('click', () => {
        console.timeEnd();
    });
    errorBtns[13].addEventListener('click', () => {
        const thing = () => { the(); };
        const the = () => { clicked(); };
        const clicked = () => { you(); };
        const you = () => { console.trace(); };
        thing();
    });
    errorBtns[14].addEventListener('click', () => {
        console.log(newProblem);
    });
    window.onerror = (event) => {
        console.log("You triggered an error");
    };
}

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}