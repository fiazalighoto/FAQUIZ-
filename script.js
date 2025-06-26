// script.js

let currentSubject = "";
let currentIndex = 0;
let userAnswers = [];
let timerInterval;
let timeLeft = 600; // 10 minutes in seconds

const quizBank = {
  Science: [
    ["What is the powerhouse of the cell?", ["Nucleus","Mitochondria","Ribosome","Golgi body"], 1],["What is the powerhouse of the cell?", ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], 1],
  ["What is the chemical formula for water?", ["H2O", "CO2", "O2", "H2SO4"], 0],
  ["What planet is known as the Red Planet?", ["Earth", "Venus", "Mars", "Jupiter"], 2],
  ["What gas do plants absorb from the atmosphere?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], 2],
  ["What is the most abundant gas in Earth’s atmosphere?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 2],
  ["Which blood cells help fight infection?", ["Red cells", "White cells", "Platelets", "Plasma"], 1],
  ["What is the center of an atom called?", ["Proton", "Electron", "Nucleus", "Neutron"], 2],
  ["What unit is used to measure electric current?", ["Volt", "Ohm", "Ampere", "Watt"], 2],
  ["Which organ produces insulin?", ["Liver", "Pancreas", "Kidney", "Stomach"], 1],
  ["Which organ is responsible for pumping blood?", ["Lungs", "Kidney", "Heart", "Liver"], 2],
  ["What part of the plant conducts photosynthesis?", ["Roots", "Stem", "Leaves", "Flowers"], 2],
  ["Which planet has the most moons?", ["Earth", "Saturn", "Mars", "Venus"], 1],
  ["What is the boiling point of water in Celsius?", ["90°C", "100°C", "80°C", "120°C"], 1],
  ["What is Newton's third law?", ["F=ma", "Every action has equal and opposite reaction", "E=mc²", "a² + b² = c²"], 1],
  ["What vitamin is produced when the skin is exposed to sunlight?", ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], 2],
  ["Which particle has a negative charge?", ["Proton", "Neutron", "Electron", "Nucleus"], 2],
  ["Which branch of science deals with living things?", ["Physics", "Chemistry", "Biology", "Geology"], 2],
  ["Which blood type is known as the universal donor?", ["A", "B", "O", "AB"], 2],
  ["What is the chemical symbol for gold?", ["Au", "Ag", "Gd", "Go"], 0],
  ["Which state of matter has a definite volume but no fixed shape?", ["Solid", "Liquid", "Gas", "Plasma"], 1],
  ["Which gas is essential for human respiration?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 1],
  ["What part of the cell contains genetic material?", ["Cytoplasm", "Nucleus", "Cell wall", "Ribosome"], 1],
  ["Which layer of the Earth is liquid?", ["Crust", "Mantle", "Outer core", "Inner core"], 2],
  ["What is the unit of force?", ["Watt", "Ohm", "Newton", "Pascal"], 2],
  ["Which planet is closest to the Sun?", ["Venus", "Earth", "Mercury", "Mars"], 2],
  ["What is HCl commonly known as?", ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], 1],
  ["What is the hardest natural substance?", ["Gold", "Iron", "Diamond", "Quartz"], 2],
  ["What kind of bond involves sharing electrons?", ["Ionic", "Covalent", "Metallic", "Hydrogen"], 1],
  ["What is the basic unit of life?", ["Organ", "Tissue", "Cell", "Nucleus"], 2],
  ["What causes tides on Earth?", ["Sun", "Wind", "Moon's gravity", "Earth’s rotation"], 2],
  ["What is the SI unit of temperature?", ["Fahrenheit", "Kelvin", "Celsius", "Joule"], 1],
  ["Which instrument is used to measure temperature?", ["Barometer", "Thermometer", "Ammeter", "Hygrometer"], 1],
  ["What is the pH of pure water?", ["5", "6", "7", "8"], 2],
  ["What is the speed of light?", ["3 × 10⁸ m/s", "1.5 × 10⁶ m/s", "3 × 10⁶ m/s", "1 × 10⁸ m/s"], 0],
  ["Which organ filters blood in the human body?", ["Heart", "Lungs", "Kidneys", "Liver"], 2],
  ["What type of energy is stored in food?", ["Nuclear", "Kinetic", "Thermal", "Chemical"], 3],
  ["Which planet has a ring system?", ["Earth", "Jupiter", "Saturn", "Mars"], 2],
  ["What causes seasons on Earth?", ["Moon phases", "Sunspots", "Earth’s tilt", "Distance from Sun"], 2],
  ["Which element is most abundant in the human body?", ["Calcium", "Iron", "Oxygen", "Carbon"], 2],
  ["Which animal is a mammal?", ["Frog", "Shark", "Whale", "Lizard"], 2],
  ["Which vitamin is necessary for blood clotting?", ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"], 2],
  ["How many chromosomes are in human cells?", ["46", "23", "48", "22"], 0],
  ["What is the function of red blood cells?", ["Fight infection", "Clot blood", "Carry oxygen", "Store fat"], 2],
  ["What is the main gas in the Sun?", ["Oxygen", "Hydrogen", "Helium", "Carbon dioxide"], 1],
  ["Which law explains why we wear seatbelts?", ["First law of motion", "Second law", "Third law", "Law of gravity"], 0],
  ["What does DNA stand for?", ["Deoxyribonucleic Acid", "Dioxin Nucleic Acid", "Deoxy Natural Acid", "None of these"], 0],
  ["Which vitamin prevents scurvy?", ["Vitamin B", "Vitamin D", "Vitamin C", "Vitamin A"], 2],
  ["What is the function of enzymes?", ["Build cells", "Break down food", "Store energy", "Create hormones"], 1],
  ["Which planet is known for its Great Red Spot?", ["Mars", "Jupiter", "Saturn", "Neptune"], 1],
  ["What is the smallest bone in the human body?", ["Femur", "Tibia", "Stapes", "Ulna"], 2]
  ],
  Math: [
    ["What is the square of 12?", ["124", "122", "144", "121"], 2],
  ["What is the value of π (pi) approximately?", ["2.14", "3.14", "3.41", "4.13"], 1],
  ["What is the cube root of 27?", ["9", "3", "6", "2"], 1],
  ["Which of the following is a rational number?", ["√2", "π", "1/2", "√3"], 2],
  ["What is (a + b)²?", ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "None"], 1],
  ["If x = 3, what is x² + 2x?", ["15", "12", "18", "9"], 0],
  ["What is the factor of x² - 9?", ["(x + 3)(x - 3)", "(x + 9)(x - 1)", "(x - 3)(x - 3)", "(x + 9)(x + 1)"], 0],
  ["What is the solution of 2x = 10?", ["5", "4", "6", "2"], 0],
  ["What is the degree of polynomial 3x³ + 2x + 1?", ["1", "2", "3", "4"], 2],
  ["What is the value of x if 3x + 4 = 16?", ["4", "5", "6", "3"], 1],
  ["Which is a linear equation?", ["x² + 2 = 0", "2x + 3 = 0", "x³ - 3 = 0", "x⁴ = 1"], 1],
  ["The product of 0 and any number is?", ["1", "Same number", "0", "Infinity"], 2],
  ["What is 7²?", ["49", "14", "35", "21"], 0],
  ["What is the square root of 100?", ["5", "10", "20", "50"], 1],
  ["In a right triangle, the square of hypotenuse equals sum of?", ["All sides", "Opposite sides", "Other two sides", "Perpendicular sides"], 2],
  ["What is the value of x in the equation x/2 = 6?", ["12", "3", "10", "6"], 0],
  ["What is the volume formula of a cube?", ["l × b × h", "s × s", "s³", "4πr²"], 2],
  ["Area of a circle is?", ["πr²", "2πr", "πd", "πr"], 0],
  ["What is 5³?", ["15", "25", "125", "100"], 2],
  ["What is the LCM of 4 and 6?", ["24", "6", "12", "8"], 2],
  ["What is the HCF of 12 and 18?", ["3", "6", "12", "9"], 1],
  ["The graph of a linear equation is a?", ["Parabola", "Line", "Curve", "Circle"], 1],
  ["If a² = 49, then a = ?", ["7", "14", "-7", "±7"], 3],
  ["What is the identity: a² - b² = ?", ["(a - b)²", "(a + b)²", "(a + b)(a - b)", "a² + 2ab + b²"], 2],
  ["What is 3(2x + 4)?", ["6x + 12", "6x + 4", "5x + 8", "None"], 0],
  ["What is the solution of x² = 81?", ["±9", "9", "-9", "81"], 0],
  ["Which number is not a prime?", ["11", "13", "15", "17"], 2],
  ["The sides of a triangle are 3, 4, 5. It is a?", ["Equilateral", "Isosceles", "Scalene", "Right-angled"], 3],
  ["What is 10% of 200?", ["2", "10", "20", "25"], 2],
  ["What is (x + 2)(x - 2)?", ["x² - 4", "x² + 4", "x² - 2x + 4", "x² + 2x - 4"], 0],
  ["Convert 0.75 to a fraction:", ["3/4", "1/2", "1/4", "2/3"], 0],
  ["Value of 3x if x = 2?", ["3", "6", "9", "12"], 1],
  ["Find the average of 10, 20, 30:", ["15", "20", "25", "30"], 1],
  ["What is the perimeter of square with side 5?", ["10", "20", "25", "15"], 1],
  ["What is the next prime number after 7?", ["8", "9", "11", "13"], 2],
  ["x² + 2x + 1 is equal to?", ["(x + 1)(x + 1)", "(x + 2)(x + 2)", "(x + 1)(x - 1)", "(x + 1)(x + 2)"], 0],
  ["Which number is a perfect square?", ["20", "25", "30", "35"], 1],
  ["What is 0.25 as a percentage?", ["2.5%", "25%", "0.25%", "250%"], 1],
  ["What is the mean of 2, 4, 6, 8, 10?", ["5", "6", "7", "8"], 1],
  ["What is the mode of 3, 4, 4, 5, 6?", ["4", "5", "3", "6"], 0],
  ["A straight angle measures?", ["90°", "180°", "360°", "270°"], 1],
  ["How many degrees in a circle?", ["90", "180", "360", "270"], 2],
  ["The formula for simple interest is?", ["P × T", "P × R", "(P × R × T)/100", "(P + R + T)/100"], 2],
  ["What is the radius if diameter is 10 cm?", ["2", "4", "5", "10"], 2],
  ["What is the sum of angles in a triangle?", ["90°", "180°", "270°", "360°"], 1],
  ["Which is a factor of 24?", ["5", "6", "7", "11"], 1],
  ["What is 7 × 8?", ["56", "48", "63", "54"], 0],
  ["Which of these is a quadratic equation?", ["x + 1 = 0", "x² - 3x + 2 = 0", "x³ = 0", "x - 5 = 10"], 1],
  ["Area of a square with side 4 is?", ["8", "12", "16", "20"], 2],
  ["What is the reciprocal of 3/4?", ["3/4", "4/3", "7/3", "1/3"], 1]
  ],
  English:
    [  ["Which of the following is a synonym of 'abundant'?", ["Rare", "Plentiful", "Weak", "Ugly"], 1],
  ["Which word is an antonym of 'optimistic'?", ["Cheerful", "Hopeful", "Pessimistic", "Confident"], 2],
  ["What is the correct plural of 'analysis'?", ["Analysises", "Analys", "Analyses", "Analysises'"], 2],
  ["Identify the noun in the sentence: 'She sang beautifully.'", ["She", "Sang", "Beautifully", "None"], 0],
  ["Choose the correctly punctuated sentence.", ["I went to the store, and bought eggs.", "I went, to the store and bought eggs.", "I went to the store and bought eggs.", "I went to the store and, bought eggs."], 2],
  ["What is the past tense of 'go'?", ["Goes", "Gone", "Went", "Goed"], 2],
  ["What type of sentence is: 'Please close the door.'?", ["Declarative", "Interrogative", "Exclamatory", "Imperative"], 3],
  ["Which word is a conjunction?", ["Quickly", "Although", "Jump", "Desk"], 1],
  ["'He has been working since morning.' — What tense is this?", ["Present Simple", "Present Perfect", "Present Perfect Continuous", "Past Continuous"], 2],
  ["Choose the correct article: '___ hour ago'", ["A", "An", "The", "No article"], 1],
  ["Which sentence is in passive voice?", ["She wrote a letter.", "They are eating food.", "The letter was written by her.", "He will write a book."], 2],
  ["Which figure of speech is used: 'The wind whispered through the trees.'?", ["Simile", "Metaphor", "Hyperbole", "Personification"], 3],
  ["What is the synonym of 'benevolent'?", ["Cruel", "Kind", "Angry", "Lazy"], 1],
  ["Choose the correct spelling.", ["Recieve", "Receive", "Receeve", "Receve"], 1],
  ["'To break the ice' means?", ["To start a fight", "To go skating", "To begin conversation", "To be cold"], 2],
  ["Which word is a preposition?", ["Beautiful", "Quick", "Under", "Jump"], 2],
  ["Identify the adverb: 'She ran very fast.'", ["She", "Ran", "Very", "Fast"], 3],
  ["Which is a compound sentence?", ["He came.", "He came and he left.", "Coming late again.", "To come and go."], 1],
  ["Which part of speech is 'Wow'?", ["Verb", "Noun", "Interjection", "Adverb"], 2],
  ["Select the correct indirect speech: He said, 'I am tired.'", ["He said that I am tired.", "He said he was tired.", "He said that he tired.", "He said was tired."], 1],
  ["Choose the correct form: 'She ___ to school every day.'", ["Go", "Goes", "Gone", "Going"], 1],
  ["What is a synonym of 'courage'?", ["Fear", "Bravery", "Sadness", "Cowardice"], 1],
  ["Which is an example of a metaphor?", ["As brave as a lion", "Life is a journey", "Like a rock", "Soft like silk"], 1],
  ["Which of these is a complex sentence?", ["I slept.", "He came and went.", "I know that she is honest.", "Close the door."], 2],
  ["What is the antonym of 'victory'?", ["Triumph", "Glory", "Success", "Defeat"], 3],
  ["Choose the correct comparative form: '___ than yesterday.'", ["Hot", "More hot", "Hotter", "Hottest"], 2],
  ["Which word is NOT a noun?", ["Honesty", "Quickly", "Apple", "Car"], 1],
  ["Identify the main verb in: 'She has written a novel.'", ["She", "Has", "Written", "Novel"], 2],
  ["Which sentence is grammatically correct?", ["He don't know.", "He doesn't knows.", "He doesn't know.", "He not know."], 2],
  ["What is a synonym of 'transparent'?", ["Clear", "Thick", "Opaque", "Dark"], 0],
  ["Which word means 'fear of closed spaces'?", ["Hydrophobia", "Claustrophobia", "Agoraphobia", "Xenophobia"], 1],
  ["Choose the correct passive form: 'They will complete the work.'", ["The work will completed.", "The work will be completed.", "The work is completed.", "The work completed."], 1],
  ["Which sentence uses a gerund?", ["He is swim.", "Swimming is fun.", "He swims daily.", "To swim is good."], 1],
  ["Identify the correct plural form:", ["Cactus", "Cactuses", "Cacti", "Cactis"], 2],
  ["What is the antonym of 'ancient'?", ["Old", "Modern", "Past", "Classic"], 1],
  ["Which of the following is a modal verb?", ["Went", "Shall", "Going", "Runs"], 1],
  ["'He eats apples.' — What is the tense?", ["Present Simple", "Past", "Present Continuous", "Future"], 0],
  ["Which word is spelled correctly?", ["Tommorrow", "Tommorow", "Tomorrow", "Tomorow"], 2],
  ["Which part of speech is 'slowly'?", ["Verb", "Adjective", "Noun", "Adverb"], 3],
  ["Select the correct tag: 'She is smart, ___?'", ["isn’t she?", "does she?", "was she?", "has she?"], 0],
  ["What is the superlative of 'good'?", ["Better", "Goodest", "More good", "Best"], 3],
  ["What type of noun is 'team'?", ["Proper", "Abstract", "Collective", "Material"], 2],
  ["Which one is a proper noun?", ["River", "Book", "Amazon", "Country"], 2],
  ["Choose the correct idiom: 'Once in a ___ moon.'", ["Blue", "Red", "Full", "Shining"], 0],
  ["Which is an example of alliteration?", ["He is a star.", "Sweet birds sang softly.", "Like a rose.", "The sun is smiling."], 1],
  ["'To hit the sack' means?", ["Punch a pillow", "Go to bed", "Leave house", "Be angry"], 1],
  ["Which word fits? 'She was ___ impressed.'", ["Very", "Much", "So", "Many"], 0],
  ["Which is NOT an adjective?", ["Tall", "Run", "Happy", "Blue"], 1],
  ["Choose the correct order: 'adjective + noun'", ["Car fast", "Fast car", "Car the fast", "The car fast"], 1],
  ["Which sentence has correct subject-verb agreement?", ["The dogs barks.", "She run fast.", "They play cricket.", "He have a car."], 2]
  ]
};

function login() {
  const phone = document.getElementById('phone').value;
  const pass = document.getElementById('password').value;
  if (!/^03\d{9}$/.test(phone)) {
    alert("Enter valid phone number starting with 03 and 11 digits long");
    return;
  }
  if (pass === '1111') {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('category-section').classList.remove('hidden');
  } else {
    alert('Incorrect password');
  }
}

function startQuiz(subject) {
  currentSubject = subject;
  currentIndex = 0;
  userAnswers = [];
  timeLeft = 600;
  document.getElementById('category-section').classList.add('hidden');
  document.getElementById('quiz-section').classList.remove('hidden');
  document.getElementById('submit-btn').classList.add('hidden');
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting quiz.");
      showResult();
    }
  }, 1000);
}

function showQuestion() {
  const data = quizBank[currentSubject];
  const [q, opts] = data[currentIndex];
  document.getElementById('question').textContent = `${currentIndex + 1}. ${q}`;
  const optsUl = document.getElementById('options');
  optsUl.innerHTML = '';
  opts.forEach((opt, i) => {
    const li = document.createElement('li');
    const checked = userAnswers[currentIndex] === i ? 'checked' : '';
    li.innerHTML = `<input type='radio' name='opt' id='o${i}' value='${i}' ${checked} /> <label for='o${i}'>${opt}</label>`;
    optsUl.appendChild(li);
  });
  document.querySelectorAll(".options input").forEach(input => {
    input.addEventListener("change", () => {
      userAnswers[currentIndex] = parseInt(input.value);
      const correct = quizBank[currentSubject][currentIndex][2];
      document.querySelectorAll(".options label").forEach((label, idx) => {
        label.classList.remove("correct", "incorrect");
        if (idx === correct) label.classList.add("correct");
        else if (idx === parseInt(input.value)) label.classList.add("incorrect");
      });
    });
  });
  document.getElementById('submit-btn').classList.toggle('hidden', currentIndex < data.length - 1);
}

function nextQuestion() {
  if (currentIndex < quizBank[currentSubject].length - 1) {
    currentIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function showResult() {
  clearInterval(timerInterval);
  document.getElementById('quiz-section').classList.add('hidden');
  const data = quizBank[currentSubject];
  let score = 0;
  let resultHTML = `<h2>Your Score: ${score} / ${data.length * 2}</h2>`;
  data.forEach(([q, opts, correct], i) => {
    const ua = userAnswers[i];
    if (ua === correct) score += 2;
  });
  resultHTML = `<h2>Your Score: ${score} / ${data.length * 2}</h2>`;
  document.getElementById('result').innerHTML = resultHTML;
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('summary-btn').classList.remove('hidden');
}

function showSummary() {
  const data = quizBank[currentSubject];
  let html = "<h3>Quiz Summary</h3>";
  data.forEach(([q, opts, correct], i) => {
    const ua = userAnswers[i];
    const status = ua === correct ? "<span style='color:green'>Correct</span>" : "<span style='color:red'>Wrong</span>";
    const correctAns = opts[correct];
    const yourAns = ua != null ? opts[ua] : "No Answer";
    html += `<p><strong>${i + 1}. ${q}</strong><br> Your Answer: ${yourAns} <br> Correct Answer: ${correctAns} <br> Result: ${status}</p><hr>`;
  });
  document.getElementById('summary').innerHTML = html;
  document.getElementById('summary').classList.remove('hidden');
}
