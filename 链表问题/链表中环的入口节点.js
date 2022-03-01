// 给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 思路：画图分析。和判断链表有没有环一样。假设链表成环，慢指针向前走了k个节点，那么快指针则为2k。经过画图容易发现，假设快慢指针第一次的交点距离环状链表的入口节点为m。
// 那么快指针到入口节点的距离恰好等于链表头节点到入口节点的距离（k-m）。所以当2个指针相交时，头节点和交点以相同的速度同时向前，第二次的交点就是环的入口节点

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      slow = head;
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast || slow;
};
