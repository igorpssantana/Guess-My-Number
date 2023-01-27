'use strict';

/*

    Nessa primeira aplicação web, o objetivo, através do uso do JS, é possibilitar o funcionamento do jogo através da manipulação simples de elementos com DOM. A seguir estão listados os problemas que busco resolver:

    1. Gerar um número aleatório e associar à classe number. Em seguida, permitir a comparação entre o input e o número gerado (retornando "verdadeiro" ou "falso"). 
    2. Então, setar um número de tentativas, igual a quantidade de números possíveis, e diminuir a cada tentativa errada (assim como resatar a cada tentativa correta).
    3. Juntamente com a etapa anterior, mostrar se o número apontado é menor ou maior que o a ser advinhado. Se for igual, vai direto para a etapa seguinte...
    4. Por fim, na hora do acerto, mudar a cor do plano de fundo, trocar o "?" pelo número correspondente e mostrar a mensagem de acerto. Além disso, registrar se houve ou não quebra de recorde.

*/

let numberToGuess = Math.floor(Math.random() * 21);
let userKick;

const checkNumber = document
  .querySelector('.check')
  .addEventListener('click', function () {
    userKick = Number(document.querySelector('.guess').value);

    if (userKick != '') {
      if (userKick === numberToGuess) {
        document.querySelector('body').classList.add('correct');
        document.querySelector('.message').textContent = '🎉 Correct Number ! ';
        document.querySelector('.number').textContent = numberToGuess;
        document.querySelector('h1').textContent = 'You Guessed My Number 🙂 !';
        if (
          Number(document.querySelector('.highscore').textContent) <
          Number(document.querySelector('.score').textContent)
        ) {
          document.querySelector('.highscore').textContent =
            document.querySelector('.score').textContent;
        }
      } else {
        document.querySelector('.message').textContent =
          userKick > 20
            ? '⚠  Stay in the range'
            : (document.querySelector('.message').textContent =
                userKick > numberToGuess ? '📈 Too high !!!' : '📉 Too low!!!');

        document.querySelector('.score').textContent -= 1;

        if (Number(document.querySelector('.score').textContent) < 1) {
          document.querySelector('.message').textContent = ' 😢 You lost!!!';
        }
        document.querySelector('.guess').value = '';
      }
    }
  });

const tryAgain = document
  .querySelector('.again')
  .addEventListener('click', function () {
    document.querySelector('body').classList.remove('correct');
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    numberToGuess = Math.floor(Math.random() * 21);
    document.querySelector('.score').textContent = '20';
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('.guess').value = '';
  });
