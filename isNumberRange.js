const isNumberInRange = (number, min, max) => {
  return Number.parseFloat(number) >= min && Number.parseFloat(number) <= max;
};

const isIndianNumberPlate = (input) => {
  return /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(input);
};

// console.log(isNumberInRange(-100, 20, 100));
// console.log(isIndianNumberPlate("MH 01 C AA 1111"));

const textToSpeech = () => {
  const message = "kgkg";
  try {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = message;
      // speech.lang = "hi";
      // speech.rate = 2;
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
