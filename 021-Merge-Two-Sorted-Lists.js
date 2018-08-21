/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Difficulty:Easy
 *
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 **/

var mergeTwoLists = function(l1, l2) {
    // 新链表的第一个结点问题，由于一般情况下第一个结点都需要特殊处理，比较实用的解决办法是在第一个结点前增加一个虚拟的头结点
    var p = new ListNode(0);
    // 初始指向 p 的头节点
    var t = p;

    while (l1 || l2) {
        if (!l1) {
            p.next = l2;
            break;
        }

        if (!l2) {
            p.next = l1;
            break;
        }

        if (l1.val > l2.val) {
            p.next = l2;
            l2 = l2.next;
        } else {
            p.next = l1;
            l1 = l1.next;
        }

        p = p.next;
    }

    return t.next;
};

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(4);

a.next = b;
b.next = c;

var d = new ListNode(1);
var f = new ListNode(1);
var g = new ListNode(2);

d.next = f;
f.next = g;

console.log(mergeTwoLists(a, d)) // 1,1,1,2,2,4
