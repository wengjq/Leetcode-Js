/*给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k == 0 || head == null) return head;

  var len = 0;
  var first = head; // 头结点
  var last = null; // 尾节点

  while (head != null) {
    len++; // 求长度
    last = head; // 最后一个节点
    head = head.next; // 循环条件
  }
  
  k = k % len; // 取余数

  var n = 0;
  head = first; // 标记到头结点
  while (head != null) {
    if (++n == (len - k)) // 推断是否到达位置
      break;

    head = head.next;
  }
  // 下面为交换位置
  last.next = first;
  first = head.next;
  head.next = null;

  return first;
};
