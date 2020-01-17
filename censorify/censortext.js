const CENSORED_WORDS = ['sad', 'bad', 'mad'];
const CUSTOM_CENSORED_WORDS = [];

function censor(str) {
  let censored = str;
  for (const w of getCensoredWords()) {
    censored = censored.replace(w, '****');
  }

  return censored;
}

function addCensoredWord(word) {
  CUSTOM_CENSORED_WORDS.push(word);
}

function getCensoredWords() {
  return CENSORED_WORDS.concat(CUSTOM_CENSORED_WORDS);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
