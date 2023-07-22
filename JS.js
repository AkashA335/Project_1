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
      
      imageElement.style.width = '780px'; 
      imageElement.style.height = '400px'; 
  
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
        text: 'You are waking up in a stranded island. You see an coconut tree.',
        image: 'https://th.bing.com/th/id/OIP.54rZYJU7arcGLb9JNRyfOAHaG8?w=209&h=196&c=7&r=0&o=5&pid=1.7',
        options: [
          {
            text: 'Take the coconut',
            setState: { coconut: true },
            nextText: 2
          },
          {
            text: 'Leave the coconut',
            nextText: 2
          }
        ]
      },
      {
        id: 2,
        text: 'You venture forth in search of answers to where you are when you come across a ship wreck.',
        image: 'https://th.bing.com/th/id/OIP.jL_5CR8yMTzDumDGxPqQ1gHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7',
        options: [
          {
            text: 'Leave the coconut and take the bottle',
            requiredState: (currentState) => currentState.coconut,
            setState: { coconut: false, sword: true },
            nextText: 3
          },
          {
            text: 'Leave the coconut and take the cash',
            requiredState: (currentState) => currentState.coconut,
            setState: { coconut: false, shield: true },
            nextText: 3
          },
          {
            text: 'Continue your wandering',
            nextText: 3
          }
        ]
      },

  {
    id: 3,
    text: 'After leaving the shiprect you start to feel tired and stumble upon a small hut next to a dangerous looking cave.',
    image: "https://th.bing.com/th/id/OIP.tnbzvHpc7okN0mTWqc2NXQHaEj?w=297&h=182&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Explore the cave',
        nextText: 4
      },
      {
        text: 'Sleep outside the hut',
        nextText: 5
      },
      {
        text: 'Sleep inside the hut',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the cave and are killed by terrible Lion in your sleep.',
    image: "https://th.bing.com/th/id/OIP.dXrLishSe7J3ocEtl5o8NgHaFE?w=279&h=190&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You are died from the sunburn',
    image: "https://th.bing.com/th/id/OIP.AYoLVvqVgMKFTQqqlwgEZgHaEV?w=302&h=180&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby cave.',
    image: "https://th.bing.com/th/id/OIP.x5x3ekJYAwYU-octl9oAsQHaEX?w=294&h=180&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Explore the cave',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the cave you come across a horrible Lion',
    image: "https://th.bing.com/th/id/OIP.cf00JzUMCU3PgN57SKTZdAHaF3?w=228&h=181&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Throw your bottle',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Give him your cash',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Share your coconut with it',
        requiredState: (currentState) => currentState.coconut,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the Lion easily catches.',
    image: "https://th.bing.com/th/id/OIP.wsnq4pJRW7Yq6sul-kQtxwHaCy?w=311&h=132&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Why the heck do you throw a bottle',
    image: "https://th.bing.com/th/id/OIP.K0MK_CdAh2nfY3XrNFWlsgHaF6?w=254&h=203&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Bruh have some common sense',
    image: "https://th.bing.com/th/id/OIP.URA7_TEa9X8tUYXJielNbgHaEK?w=332&h=187&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'The lion seems to be thirsty and drank your coconut and went to sleep.',
    image: "https://th.bing.com/th/id/OIP.06rFCxI0rP11T92X6AkJeQHaDM?w=319&h=150&c=7&r=0&o=5&pid=1.7",
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()