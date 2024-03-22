import { ListNode } from "./addTwoNumber";

function isPalindromeLinkedList(head: ListNode | null): boolean {
  if (head === null) return true;

  let slow: ListNode | null = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let rev = reverseLinkedList(slow!.next);
  while (rev !== null) {
    if (rev.val !== head!.val) {
      return false;
    }

    rev = rev.next;
    head = head!.next;
  }

  return true;
}

function reverseLinkedList(node: ListNode | null): ListNode | null {
  let head = null;

  while (node !== null) {
    const next = node.next;
    node.next = head;
    head = node;
    node = next;
  }

  return head;
}
