/**
 *  You are given an array of k linked-lists lists,
 *  each linked-list is sorted in ascending order.
 *  Merge all the linked-lists into one sorted linked-list and return it.
 *
 * 
 *  Input: lists = [[1,4,5],[1,3,4],[2,6]]
 *  Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6
 * 
 * 
 * **/

import { skipPartiallyEmittedExpressions } from "typescript";

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

const inputAsList = (list: number[][]) => {
  const retVal = [];
  list.forEach((arr) => {
    const head = new ListNode(0);
    let temp = head;
    arr.forEach((val) => {
      temp.next = new ListNode(val);
      temp = temp.next;
    });
    retVal.push(head.next);
  });
  return retVal;
};

class ListNode {
  val: number;
  next: ListNode;
  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Slow
const merge = (lists: ListNode[]) => {
  const mergedList = new ListNode(0);
  let head = mergedList;
  // Check for lowest
  let looping = true;
  while (looping) {
    // Get lowest head
    let lowest = new ListNode(Infinity);
    let k = -1;
    lists.forEach((head, idx) => {
      if (head !== null) {
        if (lowest.val > head.val) {
          lowest = head;
          k = idx;
        }
      }
    });
    if (k === -1) {
      looping = false;
      break;
    }
    head.next = lowest;
    head = head.next;
    lists[k] = lists[k].next;
  }
  return mergedList.next;
};

let mlist = merge(inputAsList(lists));

while (mlist !== null) {
  console.log(mlist.val);
  mlist = mlist.next;
}
