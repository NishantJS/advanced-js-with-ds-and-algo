const textToSpeech = () => {
  try {
    // const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    // const length = Math.floor(Math.random() * (8 + 1));
    // const message = alphabets
    //   .sort(() => Math.random() - 0.6)
    //   .slice(0, length)
    //   .join("");

    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = message;

      speech.lang = "en";
      // speech.rate = 0.75;
      speechSynthesis.speak(speech);
    } else {
      throw new Error(
        "Text to sppech is not supported in your browser! Please update your browser or use a different one.😢"
      );
    }
  } catch (error) {
    console.error(error?.message);
  }
};

document.addEventListener("click", textToSpeech);
