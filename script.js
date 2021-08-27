
(function() {

  // Displays Heading message for the day
  function greet() {
    const greeting = [
        {
            "Sunday": "You need Jesus! Go to Church!"
        },
        {
            "Monday": "Hello! It's Monday. Monday = Workday"
        },
        {
            "Tuesday": "No one cares about Tuesday"
        },
        {
            "Wednesday": "It's Wednesday. Who are you crushing on"
        },
        {
            "Thursday": "Throw back Thursday...Anyone?"
        },
        {
            "Friday": "Today is Friday. Get your groove on!"
        },
        {
            "Saturday": "Cleanliness is next to Godliness, Time for Chores!"
        }
    ]
    
    let greetingText = document.querySelector('.greeting-text');
    greetingText.textContent = greeting[day][today];
}



// Set Day, Hour, Minute and Sec
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = new Date().getDay();
let today = days[day];

function displayTime() {
    let currentDay = document.querySelector('.day');
    currentDay.textContent = today.toUpperCase();

    let hours = new Date().getHours().toString();
    hours = hours.length == 1 ? 0+hours : hours;
    hour.textContent = `${hours} :`;

    let minutes = new Date().getMinutes().toString();
    minutes = minutes.length == 1 ? 0+minutes : minutes;
    minute.textContent = `${minutes} :`;

    let seconds = new Date().getSeconds().toString();
    seconds = seconds.length == 1 ? 0+seconds : seconds;
    second.textContent = `${seconds}`;

    if (today) { greet(); }
}

setInterval(displayTime, 1000);
})();


// Display Motivational messages
let motivationalDiv = document.querySelector('.motivational');

const quotes = [
    {
      'quote':
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      'author': " Life"
    },
    {
      'quote':
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      'author': "John Kenneth Galbraith"
    },
    {
      'quote':
        "God save me from my friends. I can protect myself from my enemies.",
      'author': "Claude Louis Hector de Villars "
    },
    {
      'quote': "The price of anything is the amount of life you exchange for it.",
      'author': "David Thoreau"
    },
    {
      'quote':
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      'author': "Charles Lindbergh"
    },
    {
      'quote':
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      'author': " Tyne Daly"
    },
    {
        'author': 'Nelson Mandel',
        'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
        },
    {
        'author': 'Walt Disney',
        'quote': 'The way to get started is to quit talking and begin doing.'
        },
    {
        'author': 'Steve Jobs',
        'quote': 'Your time is limited, so don\’t waste it living someone else\’s life. Don\’t be trapped by dogma – which is living with the results of other people\’s thinking.'
        },
    {
        'author': 'Eleanor Roosevelt',
        'quote': 'If life were predictable it would cease to be life, and be without flavor.'
        },
    {
        'author': 'Oprah Winfrey',
        'quote': 'If you look at what you have in life, you\’ll always have more. If you look at what you don\’t have in life, you\’ll never have enough.'
        },
    {
        'author': 'James Cameron',
        'quote': 'If you set your goals ridiculously high and it\’s a failure, you will fail above everyone else\’s success.'
        },
    {
        'author': 'John Lennon',
        'quote': 'Life is what happens when you\’re busy making other plans.'
        }
  ];

  window.addEventListener('load', loadQuote);

  function loadQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random)

    document.querySelector(".quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = '-'+quotes[random].author;
  }


  