const hashTable = () => {
  const table = new Array(10);

  const hash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % table.length;
  };

  const set = (key, value) => {
    const index = hash(key);
    table[index] = value;
  };

  const get = (key) => {
    const index = hash(key);
    return table[index];
  };

  const remove = (key) => {
    const index = hash(key);
    table[index] = undefined;
  };

  return {
    set,
    get,
    remove,
  };
};

const hash = hashTable();
hash.set("fname", "John");
hash.set("lname", "Cohn");
hash.set("name", "Hohn");
console.log(hash.get("fname"));
console.log("%c", 100, hash.get("lname"), hash.get("nname"));
// hash.remove("name");
console.log(hash.get("name"));
