export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode | null = null;

  if (l1 || l2) {
    const value1 = l1?.val ?? 0;
    const value2 = l2?.val ?? 0;

    let next1 = l1?.next as ListNode;
    const next2 = l2?.next as ListNode;

    const carry = Math.floor((value1 + value2) / 10);

    const val = (value1 + value2) % 10;

    if (carry) {
      if (next1) {
        next1.val += carry;
      } else {
        next1 = new ListNode(carry);
      }
    }

    result = new ListNode(val);
    result.next = addTwoNumbers(next1, next2);
  }

  return result;
}
