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
import { ListNode } from "./addTwoNumber";

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prefixSum = 0;
  let current = head;
  let prefixSums = new Map<number, ListNode>();
  prefixSums.set(prefixSum, dummy);

  while (current !== null) {
    prefixSum += current.val;
    let prevNode = prefixSums.get(prefixSum);
    if (prevNode) {
      let toDelete = prevNode.next;
      let tempSum = prefixSum + (toDelete?.val ?? 0);
      while (toDelete !== current) {
        prefixSums.delete(tempSum);
        toDelete = toDelete?.next ?? null;
        tempSum += toDelete?.val ?? 0;
      }

      prevNode.next = current.next;
    } else {
      prefixSums.set(prefixSum, current);
    }

    current = current.next;
  }

  return dummy.next;
}

const root = new ListNode(
  1,
  new ListNode(2, new ListNode(-3, new ListNode(3)))
);

console.log(removeZeroSumSublists(root));
