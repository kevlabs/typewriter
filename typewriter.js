const sentence = "hello there from lighthouse labs";

const printSentence = function(str) {
  if (!str.length) return;
  setTimeout(() => {
    process.stdout.write(str[0]);
    if (str.length > 1) {
      printSentence(str.slice(1));
    } else {
      process.stdout.write('\n');
    }
  }, 50);
};

printSentence(sentence);