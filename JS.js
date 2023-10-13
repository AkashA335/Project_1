const textElement = document.getElementById('text');
    const optionButtonsElement = document.getElementById('option-buttons');

    let state = {};

    function startGame() {
      state = {};
      showTextNode(1);
    }

    function showTextNode(textNodeIndex) {
      const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

      // Display the image
      const imageElement = document.createElement('img');
      imageElement.src = textNode.image;
      
      imageElement.style.width = '980px'; 
      imageElement.style.height = '580px';
      imageElement.style.borderRadius = '6%'; 

      textElement.innerHTML = '';
      textElement.appendChild(imageElement);

      const textContentElement = document.createElement('p');
      textContentElement.innerText = textNode.text;
      textElement.appendChild(textContentElement);

      while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
      }

      textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button');
          button.innerText = option.text;
          button.classList.add('btn');
          button.addEventListener('click', () => selectOption(option));
          optionButtonsElement.appendChild(button);
        }
      });
    }

    function showOption(option) {
      return option.requiredState == null || option.requiredState(state);
    }

    function selectOption(option) {
      const nextTextNodeId = option.nextText;
      if (nextTextNodeId <= 0) {
        return startGame();
      }
      state = Object.assign(state, option.setState);
      showTextNode(nextTextNodeId);
    }

    const textNodes = [
      {
        id: 1,
        text: 'There once lived a man named Lee. Who comitted a crime and being taken to a prison now .',
        image: './assets/1.png',
        options: [
          {
            text: 'Continue',
            nextText: 2
          },
        ]
      },
      {
        id: 2,
        text: 'On the way to the Prison they almost hit a man.',
        image: './assets/2.jpg',
        options: [
          {
            text: 'Continue',
            nextText: 3
          },
        ]
      },
      {
        id: 3,
        text: 'To Prevent the accident the Officer crashed the car.',
        image: './assets/3.png',
        options: [
          {
            text: 'Continue',
            nextText: 4
          },
        ]
      },
      {
        id: 4,
        text: 'Lee becomes unconsious.',
        image: './assets/4.png',
        options: [
          {
            text: 'Continue',
            nextText: 5 
          },
        ]
      },
      {
        id: 5,
        text: 'He woke up and looked around.',
        image: './assets/5.png',
        options: [
          {
            text: 'Continue',
            nextText: 6
          },
        ]
      },
      {
        id: 6,
        text: 'He saw the dead officer, took the keys from him and freed himself.',
        image: './assets/6.png',
        options: [
          {
            text: 'Continue',
            nextText: 7
          },
        ]
      },
      {
        id: 7,
        text: 'Suddenly the officer waked up and tried to attack Lee.',
        image: './assets/7.png',
        options: [
          {
            text: 'Continue',
            nextText: 8
          },
        ]
      },
      {
        id: 8,
        text: 'He saw a gun beside Him',
        image: './assets/8.png',
        options: [
          {
            text: 'Shoot the Officer',
            nextText: 9
          },
          {
            text: 'Dont shoot the Officer',
            nextText: 10
          },
        ]
      },
      {
        id: 9,
        text: 'You killed the officer.',
        image: './assets/9.png',
        options: [
          {
            text: 'Continue',
            nextText: 11
          },
        ]
      }, 
      {
        id: 10,
        text: 'The officer killed you.',
        image: './assets/10.png',
        options: [
          {
            text: 'Continue from the last Check point.',
            nextText: 8
          },
          {
            text: 'Restart the story.',
            nextText: -1
          },
        ]
      },
      {
        id: 11,
        text: 'Hearing the Gun shot the Zombies started to surround Lee.',
        image: './assets/11.png',
        options: [
          {
            text: 'Continue',
            nextText: 12
          },
        ]
      },
      {
        id: 12,
        text: 'Lee tried to escape from the horde.',
        image: './assets/12.png',
        options: [
          {
            text: 'Continue',
            nextText: 13
          },
        ]
      },
      {
        id: 13,
        text: 'He reached a nearby house.',
        image: './assets/13.png',
        options: [
          {
            text: 'Continue',
            nextText: 14
          },
        ]
      },
      {
        id: 14,
        text: 'He entered the House.',
        image: './assets/14.png',
        options: [
          {
            text: 'Continue',
            nextText: 15
          },
        ]
      },
      {
        id: 15,
        text: 'He searched for water and found some.',
        image: './assets/15.png',
        options: [
          {
            text: 'Continue',
            nextText: 16
          },
        ]
      },
      {
        id: 16,
        text: 'As he was looking around he found a walkie talkie and someone is talking in it.',
        image: './assets/16.png',
        options: [
          {
            text: 'Continue',
            nextText: 17
          },
        ]
      },
      {
        id: 17,
        text: 'The person who was speaking in the radio was Clementine.',
        image: './assets/17.png',
        options: [
          {
            text: 'Continue',
            nextText: 18
          },
        ]
      },
      {
        id: 18,
        text: 'While they were speaking a zombie tried to attack Lee from behind.',
        image: './assets/18.png',
        options: [
          {
            text: 'Continue',
            nextText: 19
          },
        ]
      },
      {
        id: 19,
        text: 'Clementine climbed down the tree to help Lee.',
        image: './assets/19.png',
        options: [
          {
            text: 'Continue',
            nextText: 20
          },
        ]
      },
      {
        id: 20,
        text: 'Lee is strugling to fight the Zombie. And he grabbed the hammer from Clementine.',
        image: './assets/20.png',
        options: [
          {
            text: 'Struggle and use the hammer.',
            nextText: 21
          },
          {
            text: 'Give up!',
            nextText: 22
          }
        ]
      },
      {
        id: 21,
        text: 'Lee killed the Zombie.',
        image: './assets/21.png',
        options: [
          {
            text: 'Continue',
            nextText: 23
          },
        ]
      },
      {
        id: 22,
        text: 'Lee was killed by the Zombie.',
        image: './assets/22.png',
        options: [
          {
            text: 'Continue from the last Check point.',
            nextText: 20
          },
          {
            text: 'Restart the story.',
            nextText: -1
          },
        ]
      },

]

startGame()