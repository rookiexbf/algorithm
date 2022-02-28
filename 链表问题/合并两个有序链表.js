// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 思路:循环中更新l1,l2还未对比的节点位置，和哨兵节点的尾节点
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let p = dummy;
  let l1 = list1;
  let l2 = list2;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2;
      l2 = l2.next;
    } else {
      p.next = l1;
      l1 = l1.next;
    }
    p = p.next;
  }
  if (l1) {
    p.next = l1;
  }
  if (l2) {
    p.next = l2;
  }
  return dummy.next;
};
