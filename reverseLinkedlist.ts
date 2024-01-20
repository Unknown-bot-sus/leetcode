class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let currentNode = head;
  let prevNode = null;

  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}

// Function to convert a linked list to an array for testing
function convertListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let currentNode = head;
  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

// Test case
const originalList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log("Original List:", convertListToArray(originalList));

const reversedList = reverseList(originalList);

console.log("Reversed List:", convertListToArray(reversedList));
