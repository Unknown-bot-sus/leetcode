import { ListNode } from "./utils/node";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head,
    slow = head;

  let length = 0;

  for (let i = 0; i <= n; i++) {
    if (fast === null) break;
    fast = fast.next;
    ++length;
  }

  while (fast !== null && slow !== null) {
    fast = fast.next;
    slow = slow.next;
    ++length;
  }

  console.log(length);

  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  if (length === 1) {
    return null;
  }

  return head;
}

function printList(head: ListNode | null): void {
  const result: number[] = [];
  let current: ListNode | null = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

// Test cases
console.log("Test Case 1:");
let head1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  ),
  n1 = 2;
console.log("Original List:");
printList(head1);
console.log("After removal:");
printList(removeNthFromEnd(head1, n1));

console.log("Test Case 2:");
let head2 = new ListNode(1),
  n2 = 1;
console.log("Original List:");
printList(head2);
console.log("After removal:");
printList(removeNthFromEnd(head2, n2));

console.log("Test Case 3:");
let head3 = new ListNode(1, new ListNode(2));

printList(removeNthFromEnd(head3, 2));
