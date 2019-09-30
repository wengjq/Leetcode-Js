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
  
  if (head.next && head.val == head.next.val) {
    while (head.next && head.val == head.next.val) {
       head = head.next;
    }

    return deleteDuplicates(head.next);
  }
    
  head.next = deleteDuplicates(head.next);
 
  return head;
};
