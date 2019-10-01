/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return head;
  
  var dummyHead1 = new ListNode(0);
  var dummyHead2 = new ListNode(0);
  var node1 = dummyHead1;
  var node2 = dummyHead2;

  while (head != null) {
    if (head.val < x) {
        node1.next = head;
        head = head.next;
        node1 = node1.next;
        node1.next = null;
    } else {
        node2.next = head;
        head = head.next;
        node2 = node2.next;
        node2.next = null;
    }
  }
  node1.next = dummyHead2.next;
  return dummyHead1.next;
};
