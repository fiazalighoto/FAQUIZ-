// FAQUIZ - JavaScript Core Logic

let currentQuiz = "";
let currentIndex = 0;
let userAnswers = [];
let timerInterval;
let timeLeft = 0;
let currentUser = {};

const quizzes = {
  "Science": {
    time: 900,
    questions: [  ["Which organelle is responsible for cellular respiration?", ["Chloroplast", "Nucleus", "Mitochondria", "Ribosome"], 2],
  ["What structure controls the passage of substances in and out of a cell?", ["Cytoplasm", "Cell wall", "Cell membrane", "Nucleus"], 2],
  ["The first scientist to observe living cells was:", ["Robert Hooke", "Antonie van Leeuwenhoek", "Schwann", "Schleiden"], 1],
  ["The retina of the eye contains:", ["Rods and cones", "Lens", "Cornea", "Ciliary muscles"], 0],
  ["The part of the ear that maintains balance is:", ["Cochlea", "Auditory nerve", "Semicircular canals", "Tympanum"], 2],
  ["Which pigment captures sunlight in plants?", ["Xanthophyll", "Chlorophyll", "Carotene", "Melanin"], 1],
  ["Photosynthesis occurs in which organelle?", ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], 1],
  ["What is the primary product of photosynthesis?", ["Carbon dioxide", "Glucose", "Oxygen", "Water"], 1],
  ["Which process is the reverse of photosynthesis?", ["Digestion", "Transpiration", "Respiration", "Fermentation"], 2],
  ["What is the chemical formula of glucose?", ["C6H12O6", "H2O", "CO2", "CH4"], 0],
  ["Which process releases energy in plants?", ["Photosynthesis", "Respiration", "Transpiration", "Diffusion"], 1],
  ["Water loss from aerial parts of plants is called:", ["Evaporation", "Perspiration", "Respiration", "Transpiration"], 3],
  ["The tiny pores on leaves are called:", ["Lenticels", "Stomata", "Villi", "Tracheae"], 1],
  ["Which type of transpiration is most common?", ["Cuticular", "Lenticular", "Stomatal", "Vascular"], 2],
  ["Main function of xylem is:", ["Transport of food", "Support only", "Water transport", "Storage"], 2],
  ["Which gas is essential for respiration in plants?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 1],
  ["The function of guard cells is to:", ["Protect the leaf", "Store water", "Open/close stomata", "Transport food"], 2],
  ["Who coined the term 'cell'?", ["Darwin", "Pasteur", "Hooke", "Virchow"], 2],
  ["Plants absorb sunlight using:", ["Stomata", "Chloroplasts", "Xylem", "Phloem"], 1],
  ["Transpiration helps in:", ["Photosynthesis", "Respiration", "Water transport", "Growth"], 2],
  ["The semi-permeable membrane in a cell is:", ["Cell wall", "Cytoplasm", "Nucleus", "Plasma membrane"], 3],
  ["Which part of the ear collects sound?", ["Pinna", "Cochlea", "Eustachian tube", "Ossicles"], 0],
  ["The transparent front part of eye is:", ["Retina", "Cornea", "Iris", "Lens"], 1],
  ["What structure changes shape to focus light?", ["Retina", "Cornea", "Lens", "Iris"], 2],
  ["The photoreceptor for color vision is:", ["Rods", "Cones", "Cornea", "Ciliary body"], 1],
  ["What is the auditory nerve responsible for?", ["Hearing", "Smell", "Balance", "Touch"], 0],
  ["What process releases oxygen?", ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], 1],
  ["Cochlea helps in:", ["Smell", "Balance", "Vision", "Hearing"], 3],
  ["Which structure connects ear to throat?", ["Cochlea", "Pinna", "Eustachian tube", "Ossicles"], 2],
  ["What happens when stomata are closed?", ["Photosynthesis increases", "Water loss increases", "Gas exchange stops", "Growth increases"], 2],
  ["Which cell organelle makes proteins?", ["Nucleus", "Ribosome", "Golgi", "Mitochondria"], 1],
  ["Which tissue transports food in plants?", ["Xylem", "Phloem", "Cambium", "Epidermis"], 1],
  ["Main difference between photosynthesis and respiration:", ["Oxygen use", "Sunlight use", "Glucose production", "CO2 absorption"], 2],
  ["Who discovered the cell theory?", ["Schleiden & Schwann", "Hooke", "Virchow", "Pasteur"], 0],
  ["Which is not part of a plant cell?", ["Chloroplast", "Cell wall", "Mitochondria", "Centrioles"], 3],
  ["Transpiration occurs mostly during:", ["Day", "Night", "Rain", "Winter"], 0],
  ["Main waste gas of respiration:", ["CO2", "O2", "H2O", "N2"], 0],
  ["Which organelle is absent in animal cells?", ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"], 1],
  ["Where is energy stored in a cell?", ["Nucleus", "Mitochondria", "Cytoplasm", "Ribosome"], 1],
  ["Which ear part converts sound to signals?", ["Pinna", "Cochlea", "Ossicles", "Eardrum"], 1],
  ["Function of stomata:", ["Absorb nutrients", "Open to sunlight", "Gas exchange", "Excrete waste"], 2],
  ["Lens in the eye is held by:", ["Iris", "Ciliary muscles", "Pupil", "Cornea"], 1],
  ["Which pigment reflects green light?", ["Melanin", "Chlorophyll", "Xanthophyll", "Carotene"], 1],
  ["Glucose is broken down during:", ["Photosynthesis", "Respiration", "Transpiration", "Diffusion"], 1],
  ["Which type of energy is used in photosynthesis?", ["Mechanical", "Solar", "Thermal", "Chemical"], 1],
  ["Eye part that changes pupil size:", ["Cornea", "Lens", "Iris", "Retina"], 2],
  ["In which organelle does respiration occur?", ["Chloroplast", "Golgi", "Mitochondria", "Nucleolus"], 2],
  ["A plant closes its stomata to reduce:", ["Photosynthesis", "Respiration", "Water loss", "Growth"], 2]
    ]
  },
  "Math": {
    time: 900,
    questions: [
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
    ]
  },
  "English": {
    time: 900,
    questions: [["Which word is a noun?", ["run", "happy", "dog", "quickly"], 2],
        ["Choose the correct form: He ____ to school.", ["go", "goes", "going", "gone"], 1],
        ["Which sentence is grammatically correct?", ["She don't like it.", "He go to school.", "They is here.", "I am fine."], 3],
        ["Identify the adjective: The blue sky is clear.", ["sky", "blue", "clear", "is"], 1],
        ["Select the adverb: He ran quickly.", ["He", "ran", "quickly", "none"], 2],
        ["Which is an interjection?", ["Oh!", "Run", "With", "His"], 0],
        ["Which is a conjunction?", ["But", "Run", "Very", "Cat"], 0],
        ["Which one is a pronoun?", ["They", "Book", "Green", "Walk"], 0],
        ["Choose the correct preposition: He sat ____ the chair.", ["on", "in", "at", "of"], 0],
        ["Find the subject: The boy reads a book.", ["boy", "reads", "a", "book"], 0],
        ["Past form of 'go'?", ["goed", "gone", "went", "goes"], 2],
        ["Select the verb: She sings beautifully.", ["She", "sings", "beautifully", "none"], 1],
        ["Plural of 'child'?", ["childs", "childes", "children", "childrens"], 2],
        ["Find the correct sentence:", ["He are late.", "She is tired.", "We was here.", "They is happy."], 1],
        ["Find the article: I saw a cat.", ["I", "saw", "a", "cat"], 2],
        ["Which is a synonym of 'happy'?", ["sad", "glad", "angry", "cry"], 1],
        ["Which is an antonym of 'fast'?", ["quick", "slow", "run", "walk"], 1],
        ["Choose the correct tense: She ____ cooking.", ["is", "are", "were", "be"], 0],
        ["Which is not a verb?", ["run", "swim", "apple", "go"], 2],
        ["Identify the modal verb: You must go.", ["must", "go", "you", "none"], 0],
        ["Select the passive voice: The cake was eaten.", ["He eats cake.", "Cake was eaten.", "He ate.", "Eating cake."], 1],
        ["What type of sentence: Wow! What a car!", ["Interrogative", "Declarative", "Exclamatory", "Imperative"], 2],
        ["Choose the correct sentence:", ["He can sings.", "He sings well.", "He singing.", "He is sings."], 1],
        ["Opposite of 'up'?", ["high", "top", "down", "side"], 2],
        ["Choose correct spelling:", ["definately", "definitely", "defanitely", "definitley"], 1],
        ["Identify the tense: He had gone.", ["present", "future", "past perfect", "past continuous"], 2],
        ["Which is a proper noun?", ["city", "boy", "Ali", "school"], 2],
        ["Pick a compound word:", ["basketball", "blue", "book", "none"], 0],
        ["Which is an interrogative sentence?", ["He is good.", "Is he good?", "He good.", "He is!"], 1],
        ["What is the plural of 'mouse'?", ["mouses", "mices", "mouse", "mice"], 3],
        ["Choose correct verb form: They ____ playing.", ["is", "are", "was", "be"], 1],
        ["Find the object: She eats an apple.", ["She", "eats", "an", "apple"], 3],
        ["What is a synonym of 'intelligent'?", ["dull", "clever", "angry", "weak"], 1],
        ["Antonym of 'strong'?", ["powerful", "weak", "hard", "smart"], 1],
        ["Which is an imperative sentence?", ["Go to school.", "He is going.", "Where is he?", "Wow!"], 0],
        ["Which word is an adjective?", ["fast", "run", "quickly", "smile"], 0],
        ["Choose the helping verb: They are eating.", ["They", "are", "eating", "none"], 1],
        ["Find the correct word: The cat ____ on the mat.", ["sit", "sits", "sat", "sitting"], 1],
        ["Which is a determiner?", ["a", "run", "he", "quickly"], 0],
        ["Which word is an adverb?", ["kindly", "kind", "man", "walk"], 0],
        ["What is a preposition?", ["at", "run", "blue", "cat"], 0],
        ["Identify the subject: They play football.", ["They", "play", "football", "none"], 0],
        ["Which is an exclamatory sentence?", ["He is fast.", "Run fast.", "How fast he is!", "He runs."], 2],
        ["Choose the correct: I ____ tired.", ["am", "is", "are", "be"], 0],
        ["Find the collective noun:", ["team", "boy", "girl", "apple"], 0],
        ["Which one is a question word?", ["Where", "Apple", "Tall", "Eat"], 0],
        ["Past tense of 'eat'?", ["eats", "ate", "eated", "eating"], 1],
        ["Identify the verb in: They jumped.", ["They", "jumped", "none", "and"], 1],
        ["Pick the conjunction:", ["and", "boy", "very", "run"], 0]
    ]
  },
  "General Knowledge": {
    time: 900,
    questions: [
      ["Who is the current Secretary General of the UN?", ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Boutros Boutros-Ghali"], 1],
      ["Which is the largest ocean?", ["Atlantic", "Indian", "Arctic", "Pacific"], 3]
    ]
  },
  "Test Yourself": {
    time: 1800,
    questions: [
  ["In human blood, the primary purpose of platelets is to:", ["Carry oxygen", "Fight infection", "Clot blood", "Carry nutrients"], 2],
  ["Which of the following describes a transversal line in geometry?", ["A line perpendicular to two parallels", "A line crossing two lines", "A line dividing an angle into two equal parts", "A line segment joining two points"], 1],
  ["Who proposed the theory of general relativity?", ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo"], 1],
  ["The atomic number of carbon is:", ["6", "8", "12", "14"], 0],
  ["Which novel begins with: 'Call me Ishmael.'?", ["Great Expectations", "Pride and Prejudice", "Moby Dick", "The Odyssey"], 2],
  ["In economics, 'opportunity cost' refers to:", ["Money spent", "Time wasted", "Next best alternative foregone", "Utility gained"], 2],
  ["Sunlight is a mixture of all colors of visible light. Which phenomenon demonstrates this?", ["Diffraction", "Reflection", "Refraction", "Dispersion"], 3],
  ["Which enzyme breaks down proteins in the stomach?", ["Lipase", "Amylase", "Pepsin", "Cellulase"], 2],
  ["A triangle has sides 7, 24, 25. What type of triangle is it?", ["Acute", "Obtuse", "Right", "Obtuse (two right angles)"], 2],
  ["Which planet has the shortest day?", ["Earth", "Mars", "Jupiter", "Mercury"], 2],
  ["What is the derivative of sin(x)?", ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], 0],
  ["Who is known for the law F = ma?", ["Kepler", "Newton", "Einstein", "Pascal"], 1],
  ["Which cell organelle is responsible for energy production?", ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], 2],
  ["Which English word is an antonym of 'altruistic'?", ["Generous", "Selfish", "Kind", "Benevolent"], 1],
  ["In cricket, an over consists of how many legal deliveries?", ["4", "5", "6", "7"], 2],
  ["Which landmark decision gave women the right to vote in the US?", ["Brown v. Board of Education", "Roe v. Wade", "19th Amendment", "Plessy v. Ferguson"], 2],
  ["What is 3/7 expressed as a percentage (approx.)?", ["14.3%", "28.6%", "42.9%", "57.1%"], 2],
  ["Lightyear measures:", ["Time", "Energy", "Distance", "Light intensity"], 2],
  ["Which blood type is known as the universal donor?", ["A", "B", "AB", "O"], 3],
  ["Which poet wrote 'The Road Not Taken'?", ["Robert Frost", "Emily Dickinson", "Walt Whitman", "T.S. Eliot"], 0],

  ["Which metal is liquid at room temperature?", ["Iron", "Mercury", "Copper", "Zinc"], 1],
  ["What does DNA stand for?", ["Deoxyribonucleic Acid", "Dinucleotide Acid", "Deoxyribose Nucleic Acid", "Deoxyribonucleic Atom"], 0],
  ["Which planet is known as the Red Planet?", ["Earth", "Mars", "Saturn", "Venus"], 1],
  ["Who painted the Mona Lisa?", ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"], 2],
  ["What is the capital of Canada?", ["Toronto", "Ottawa", "Vancouver", "Montreal"], 1],
  ["Which gas is most abundant in Earth's atmosphere?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 2],
  ["What is the largest internal organ in the human body?", ["Brain", "Liver", "Lung", "Kidney"], 1],
  ["Which number is a prime?", ["91", "39", "29", "51"], 2],
  ["Which element has the chemical symbol 'Na'?", ["Sodium", "Nitrogen", "Neon", "Nickel"], 0],
  ["How many degrees are in a triangle?", ["90°", "180°", "270°", "360°"], 1],

  ["What is the square root of 144?", ["11", "12", "13", "14"], 1],
  ["What is the boiling point of water in Celsius?", ["90°C", "95°C", "100°C", "110°C"], 2],
  ["What organ is affected by hepatitis?", ["Liver", "Kidney", "Heart", "Stomach"], 0],
  ["Which war ended with the Treaty of Versailles?", ["World War I", "World War II", "Cold War", "Vietnam War"], 0],
  ["Which of these is a renewable energy source?", ["Coal", "Natural Gas", "Wind", "Petrol"], 2],
  ["How many continents are there?", ["5", "6", "7", "8"], 2],
  ["What is the smallest prime number?", ["0", "1", "2", "3"], 2],
  ["Which is the longest river in the world?", ["Amazon", "Yangtze", "Nile", "Mississippi"], 2],
  ["Which part of the plant conducts photosynthesis?", ["Root", "Stem", "Leaf", "Flower"], 2],
  ["Which planet has rings?", ["Earth", "Venus", "Saturn", "Mars"], 2],

  ["Which of these is a programming language?", ["HTML", "Python", "HTTP", "CSS"], 1],
  ["How many bones are in the adult human body?", ["198", "206", "208", "210"], 1],
  ["What is the capital of Japan?", ["Tokyo", "Beijing", "Seoul", "Bangkok"], 0],
  ["In which year did man first land on the moon?", ["1965", "1969", "1971", "1975"], 1],
  ["How many players in a football (soccer) team?", ["9", "10", "11", "12"], 2],
  ["Which continent is Egypt in?", ["Asia", "Europe", "Africa", "South America"], 2],
  ["Which animal is known as the 'King of the Jungle'?", ["Tiger", "Elephant", "Lion", "Leopard"], 2],
  ["Which gas do plants absorb during photosynthesis?", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], 1],
  ["What is the freezing point of water?", ["0°C", "32°C", "100°C", "273°C"], 0],
  ["What does CPU stand for?", ["Central Processing Unit", "Computer Power Unit", "Central Programming Unit", "Control Processing Unit"], 0],
  ["What is H2O commonly known as?", ["Hydrogen", "Oxygen", "Water", "Salt"], 2],
  ["Which layer of Earth do we live on?", ["Mantle", "Crust", "Core", "Outer core"], 1],
  ["Which is the fastest land animal?", ["Cheetah", "Lion", "Leopard", "Horse"], 0],
  ["What is the main language spoken in Brazil?", ["Spanish", "Portuguese", "French", "English"], 1],
  ["Which instrument measures earthquakes?", ["Barometer", "Thermometer", "Seismograph", "Altimeter"], 2],
  ["What is the currency of Japan?", ["Dollar", "Won", "Yuan", "Yen"], 3],
  ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1],
  ["Which vitamin is produced when exposed to sunlight?", ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 3],
  ["Which country is known as the Land of the Rising Sun?", ["China", "Japan", "Thailand", "Vietnam"], 1],
  ["What is the process by which plants make food?", ["Digestion", "Respiration", "Photosynthesis", "Fermentation"], 2],

  ["Who wrote 'Hamlet'?", ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Jane Austen"], 1],
  ["Which part of the brain controls balance?", ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"], 1],
  ["What is the chemical symbol of gold?", ["Ag", "Au", "Pb", "Gd"], 1],
  ["Which country gifted the Statue of Liberty to the USA?", ["UK", "Germany", "France", "Canada"], 2],
  ["What is the hardest natural substance?", ["Diamond", "Iron", "Gold", "Granite"], 0],
  ["Which number system is used in computers?", ["Decimal", "Octal", "Binary", "Hexadecimal"], 2],
  ["How many legs does a spider have?", ["6", "8", "10", "12"], 1],
  ["Which natural satellite orbits the Earth?", ["Moon", "Sun", "Venus", "Mars"], 0],
  ["What color does litmus paper turn in acid?", ["Blue", "Red", "Green", "Yellow"], 1],
  ["Who discovered penicillin?", ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Isaac Newton"], 2],

  ["What is the smallest planet in the solar system?", ["Mars", "Mercury", "Venus", "Pluto"], 1],
  ["What part of the body has alveoli?", ["Heart", "Kidney", "Lung", "Liver"], 2],
  ["Which is the longest bone in the human body?", ["Humerus", "Femur", "Tibia", "Fibula"], 1],
  ["Which country is called the Land of a Thousand Lakes?", ["Norway", "Canada", "Finland", "Russia"], 2],
  ["What is the opposite of 'minimum'?", ["Least", "Maximum", "Equal", "Small"], 1],
  ["Which instrument is used to see tiny objects?", ["Periscope", "Microscope", "Telescope", "Barometer"], 1],
  ["Which energy is used in solar panels?", ["Nuclear", "Thermal", "Chemical", "Solar"], 3],
  ["Which layer protects Earth from UV rays?", ["Troposphere", "Ozone layer", "Stratosphere", "Hydrosphere"], 1],
  ["What is the SI unit of temperature?", ["Kelvin", "Celsius", "Fahrenheit", "Joule"], 0],
  ["Who was the first President of the USA?", ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], 1],

  ["What is the process of water changing to gas?", ["Condensation", "Freezing", "Evaporation", "Sublimation"], 2],
  ["Which part of the eye controls the amount of light?", ["Cornea", "Retina", "Pupil", "Iris"], 3],
  ["Which is the nearest star to Earth?", ["Moon", "Polaris", "Alpha Centauri", "Sun"], 3],
  ["How many planets are in the solar system?", ["7", "8", "9", "10"], 1],
  ["Which shape has no sides or angles?", ["Triangle", "Rectangle", "Circle", "Oval"], 2],
  ["What is the plural of 'mouse'?", ["Mice", "Mouses", "Mouse", "Mices"], 0],
  ["Which punctuation ends a question?", ["Period", "Comma", "Question mark", "Exclamation mark"], 2],
  ["Which continent is India in?", ["Africa", "Asia", "Europe", "Australia"], 1],
  ["Which gas do humans exhale?", ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], 2],
  ["What is the result of 8 × 7?", ["56", "64", "49", "48"], 0],

  ["Which is a renewable resource?", ["Coal", "Oil", "Sunlight", "Natural gas"], 2],
  ["What is the capital of France?", ["London", "Paris", "Rome", "Berlin"], 1],
  ["Who invented the light bulb?", ["Edison", "Newton", "Tesla", "Franklin"], 0],
  ["What is the antonym of 'cold'?", ["Cool", "Hot", "Warm", "Mild"], 1],
  ["Which food group builds muscles?", ["Fats", "Proteins", "Carbohydrates", "Vitamins"], 1],
  ["How many wheels on a tricycle?", ["1", "2", "3", "4"], 2],
  ["What is the value of Pi (approx)?", ["2.14", "3.14", "4.14", "5.14"], 1],
  ["Which planet is closest to the Sun?", ["Earth", "Venus", "Mercury", "Mars"], 2],
  ["What is Earth's only natural satellite?", ["Mars", "Sun", "Moon", "Venus"], 2],
  ["What is used to write on a blackboard?", ["Pen", "Chalk", "Crayon", "Pencil"], 1],

  ["Which shape has four equal sides?", ["Rectangle", "Triangle", "Square", "Pentagon"], 2],
  ["What is the primary source of energy for Earth?", ["Moon", "Wind", "Sun", "Coal"], 2],
  ["What does a thermometer measure?", ["Pressure", "Speed", "Temperature", "Weight"], 2],
  ["Who is the author of 'Harry Potter'?", ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"], 1],
  ["What is 100 divided by 4?", ["20", "25", "30", "35"], 1],
  ["What do bees make?", ["Milk", "Butter", "Honey", "Jam"], 2],
  ["What number comes before 100?", ["98", "97", "99", "101"], 2],
  ["Which season comes after winter?", ["Autumn", "Spring", "Summer", "Rainy"], 1],
  ["How many hours in a day?", ["24", "12", "36", "48"], 0],
  ["What do we call the story of a person's life written by someone else?", ["Biography", "Autobiography", "Fiction", "Drama"], 0]
    ]
  },
  "Look What You Can Do": {
    time: 1800,
    questions: [
      ["Who wrote 'Hamlet'?", ["Milton", "Shakespeare", "Wordsworth", "Byron"], 1],
      ["Which planet is known as the Red Planet?", ["Earth", "Mars", "Venus", "Jupiter"], 1]
    ]
  },
  "Are You Smart?": {
    time: 2700,
    questions: [
      ["What is H2O?", ["Oxygen", "Hydrogen", "Water", "Salt"], 2],
      ["Solve: 5 + (3 * 2)", ["11", "16", "10", "8"], 0]
    ]
  },
  "Let's See What You've Got": {
    time: 2700,
    questions: [
      ["Which continent is Australia in?", ["Europe", "Asia", "Australia", "Africa"], 2],
      ["Which organ pumps blood?", ["Brain", "Liver", "Heart", "Lungs"], 2]
    ]
  },
  "Only for Pros": {
    time: 2700,
    questions: [
      ["How many bytes in a kilobyte?", ["1024", "1000", "512", "2048"], 0],
      ["Light travels fastest in:", ["Water", "Glass", "Air", "Vacuum"], 3]
    ]
  }
};

function login() {
  const name = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (!name || !/^03\d{9}$/.test(phone) || password !== "1111") {
    error.textContent = "Invalid login credentials.";
    return;
  }

  currentUser = { name, phone };
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("quiz-selection").classList.remove("hidden");
  error.textContent = "";
  saveToSheet(name, phone, "None", 0);
}

document.getElementById("loginBtn").addEventListener("click", login);
document.addEventListener("keydown", e => {
  if (e.key === "Enter") login();
});

function showQuickQuizOptions() {
  document.getElementById("quiz-selection").classList.add("hidden");
  document.getElementById("quickquiz-options").classList.remove("hidden");
}

function requestCode(quizName, code) {
  const entered = prompt("Enter 5-digit code:");
  if (entered === code) startQuiz(quizName);
  else alert("Incorrect code.");
}

function startQuiz(quizName) {
  currentQuiz = quizName;
  currentIndex = 0;
  userAnswers = [];
  timeLeft = quizzes[quizName].time;

  document.getElementById("quiz-selection").classList.add("hidden");
  document.getElementById("quickquiz-options").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("quiz-title").textContent = quizName;
  startTimer();
  showQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showReviewBox();
      return;
    }
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${formatTime(timeLeft)}`;
  }, 1000);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function showQuestion() {
  const box = document.getElementById("question-box");
  const q = quizzes[currentQuiz].questions[currentIndex];
  box.innerHTML = `<p>${currentIndex + 1}. ${q[0]}</p>` +
    q[1].map((opt, i) => `<button onclick="selectAnswer(${i})">${opt}</button>`).join("");
}

function selectAnswer(i) {
  const q = quizzes[currentQuiz].questions[currentIndex];
  if (userAnswers[currentIndex] !== undefined) return;
  userAnswers[currentIndex] = i;
  const btns = document.querySelectorAll("#question-box button");
  btns.forEach((btn, idx) => {
    if (idx === q[2]) btn.classList.add("correct");
    else if (idx === i) btn.classList.add("wrong");
    btn.disabled = true;
  });
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quizzes[currentQuiz].questions.length) showQuestion();
    else showReviewBox();
  }, 1000);
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function showReviewBox() {
  clearInterval(timerInterval);
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("review-section").classList.remove("hidden");
}

function submitReview() {
  document.getElementById("review-section").classList.add("hidden");
  document.getElementById("result-section").classList.remove("hidden");
  const qSet = quizzes[currentQuiz].questions;
  let correct = 0;
  let summaryHtml = "";
  qSet.forEach((q, i) => {
    const userAns = userAnswers[i];
    const correctAns = q[2];
    if (userAns === correctAns) correct++;
    summaryHtml += `<p>${i + 1}. ${q[0]}<br>
    Your Answer: <span style="color:${userAns === correctAns ? 'green' : 'red'}">${q[1][userAns] || 'Not Answered'}</span><br>
    Correct Answer: <span style="color:green">${q[1][correctAns]}</span></p>`;
  });
  document.getElementById("final-score").textContent = `Your Score: ${correct} / ${qSet.length}`;
  document.getElementById("summary").innerHTML = summaryHtml;
  saveToSheet(currentUser.name, currentUser.phone, currentQuiz, correct);
}

function saveToSheet(name, phone, quiz, score) {
  fetch("https://script.google.com/macros/s/AKfycbzE1DHcsQTH8L9xqBP1i_JhPHMnmtvMGRKTx0S8Hh4ibUAI8VVdMo1IYk5gCGYKyP07/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, quiz, score })
  });
}
