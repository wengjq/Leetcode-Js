/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    
    var pre = dummy;

    for (var i = 1; i < m; i++) {
        pre = pre.next;
    }
    head = pre.next;

    for (var i = m; i < n; i++) {
        var nex = head.next;
        head.next = nex.next;
        nex.next = pre.next;
        pre.next = nex;
    }

    return dummy.next;
};
