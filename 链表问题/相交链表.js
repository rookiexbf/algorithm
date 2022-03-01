// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//思路：不占用额外空间，双指针。假设A、B相交，交集为c，则A=a+c,B=b+c。 a+c+b+c=b+c+a+c。同步遍历A+B、B+A,当指针相遇，即为交点。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pa = headA;
  let pb = headB;
  while (pa != pb) {
    if (pa) {
      pa = pa.next;
    } else {
      pa = headB;
    }
    if (pb) {
      pb = pb.next;
    } else {
      pb = headA;
    }
  }
  return pa;
};
