import readline from "readline";

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => read.question(query, resolve));

(async () => {
  try {
    const a = await prompt("enter an array\n");
    console.log(a);
    read.close();
  } catch (e) {
    console.error("ERROR " + e);
  }
})();

read.on("close", () => process.exit(0));
