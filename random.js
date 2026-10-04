const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomBool = () => Math.random() < 0.5;
const randomLetter = () => String.fromCharCode(randomInt(97, 122));
const randomLetterUpper = () => String.fromCharCode(randomInt(65, 90));
const randomRuLetter = () => 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'[randomInt(0, 32)];
const randomDigit = () => String(randomInt(0, 9));
const randomChar = () => randomFrom('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*');
const randomString = (len = 10) => Array.from({ length: len }, () => randomChar()).join('');
const randomPassword = (len = 16) => Array.from({ length: len }, () => randomChar()).join('');
const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
const randomRgb = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
const randomHsl = () => `hsl(${randomInt(0, 360)}, ${randomInt(50, 100)}%, ${randomInt(40, 70)}%)`;
const randomEmoji = () => randomFrom(['🐱','🐶','🦊','🐼','🐸','🐧','🦁','🐯','🐨','🐵','🦄','🐢','🐙','🦋']);
const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
const randomPick = (arr, n) => shuffle(arr).slice(0, n);
const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const randomTextColor = () => Math.random() < 0.5 ? '#000' : '#fff';
// Использование:
// randomInt(1, 100)
// randomFloat(0, 1)
// randomFrom(['a','b','c'])
// randomBool()
// randomLetter()
// randomLetterUpper()
// randomRuLetter()
// randomDigit()
// randomChar()
// randomString(8)
// randomPassword(16)
// randomColor()
// randomRgb()
// randomHsl()
// randomEmoji()
// shuffle([1,2,3,4,5])
// randomPick([1,2,3,4,5], 2)
