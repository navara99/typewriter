const typeWriter = (sentence, increment) => {
  let delay = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);

    delay += increment;
  }

  setTimeout(() => {
    process.stdout.write("\n");
  }, increment * sentence.length);
};

const sentence = "Hello, my name is Tharsikan.";
const increment = 150;

typeWriter(sentence , increment);




