/**
 * todo Linked List
 * @author Nishant Chorge
 * @class Node
 * @classdesc create a node
 **/

class Node {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head;
  size;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // * Insert First Node
  insertFirst(data = '✨') {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // * Insert Last Node
  insertLast(data = '😜') {
    // ? if empty make head
    if (!this.head) this.insertFirst(data);
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
      this.size++;
    }
  }

  // * Get @ Index
  getAt(i = null) {
    let index = i;
    let error = new TypeError(
      `Enter a integer value between 0 and ${this.size - 1}`
    );

    if (typeof index !== "number") {
      let convertedVal = Number.parseInt(index);
      if (typeof convertedVal === "number" && !isNaN(convertedVal)) {
        index = Number.parseInt(index);
      } else {
        throw error;
      }
    }

    if (index >= 0 && index < this.size) {
      console.log("hi");
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index) {
          console.log(current.data);
          return current.data;
        }
        count++;
        current = current.next;
      }
    } else {
      throw error;
    }
  }

  // * Inser @ Index
  insertAt(data = '🙌', index = null) {
    if (index === null) throw new Error("Please provide valid index value");
  }

  // * Remove @ Index

  // * Print List Data
  printList() {
    let current = this.head;
    let elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements;
  }

  // * Clear List

}

const list = new LinkedList();
list.insertFirst('🦅');
list.insertFirst('🦅');
list.insertFirst();
list.insertLast('🙈');
list.insertLast('😪');
list.insertFirst('🧐');
list.printList();
console.log(list.getAt(0));
console.log([...new Set(list.printList())].join(""));


export default LinkedList;
export { LinkedList, Node };