/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null && slow !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (slow === null) return;

  const middle = slow.next;
  slow.next = null;
  const reversedList = reverseList(middle);
  crossMergeTwoLinkedList(head, reversedList);
}

function reverseList(head: ListNode | null): ListNode | null {
  let curNode = head;
  let prevNode = null;

  while (curNode !== null) {
    const nextNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }

  return prevNode;
}

function crossMergeTwoLinkedList(
  l1: ListNode | null,
  l2: ListNode | null
): void {
  while (l1 !== null && l2 !== null) {
    const temp = l1.next;
    const temp2 = l2.next;
    l1.next = l2;
    l2.next = temp;

    l1 = temp;
    l2 = temp2;
  }
}
