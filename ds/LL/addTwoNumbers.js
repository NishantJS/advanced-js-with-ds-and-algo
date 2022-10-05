function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const list2 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9)))
);

const createTwoLists = (l1, l2, carry = 0) => {
  if (!l1 && !l2 && !carry) return null;
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
  const val = sum > 9 ? sum % 10 : sum;
  const nextCarry = Math.floor(sum / 10);

  return new ListNode(val, createTwoLists(l1?.next, l2?.next, nextCarry));
};

const printList = (list) => {
  let current = list;
  let val = [];
  while (current) {
    val.push(current.val);
    current = current.next;
  }
  console.table(val);
};

const addTwoNumbers = (l1, l2) => printList(createTwoLists(l1, l2));

addTwoNumbers(list1, list2);
