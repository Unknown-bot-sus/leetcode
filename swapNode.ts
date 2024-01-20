class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }

  if (head.next == null) {
    return head;
  }

  let currNode: ListNode | null = head;
  head = currNode.next;
  let prev = null;

  while (currNode !== null && currNode.next !== null) {
    const nextNode: ListNode | null = currNode.next;

    currNode.next = nextNode.next;
    nextNode.next = currNode;

    if (prev) {
      prev.next = nextNode;
    }
    prev = currNode;

    currNode = currNode.next;
  }

  return head;
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

// Test Case 1: Basic case with even number of elements
const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
console.log("Original List 1:", convertListToArray(list1));
console.log("Swapped List 1:", convertListToArray(swapPairs(list1)));

// Test Case 2: Basic case with odd number of elements
const list2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log("Original List 2:", convertListToArray(list2));
console.log("Swapped List 2:", convertListToArray(swapPairs(list2)));
