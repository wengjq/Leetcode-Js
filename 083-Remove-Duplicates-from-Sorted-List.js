/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  
  var cur = head;

  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
        cur.next = cur.next.next;
    } else {
        cur = cur.next;
    }
  }

  return head;
};

// 用递归
var deleteDuplicates2 = function(head) {
  if (!head || !head.next) return head;
   head.next = deleteDuplicates2(head.next);
   return (head.val == head.next.val) ? head.next : head;
};
