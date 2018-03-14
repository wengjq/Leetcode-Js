/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Difficulty:Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 */
var addTwoNumbers = function (l1, l2) {
    var sum  = 0;// 每一位的和，从个位开始
    var added = false; //是否有进位
    var target = new ListNode(0) //结果链表的当前节点
    var result = target; //结果链表

    while (l1 || l2 ) {
        target.next = new ListNode(0);
        target = target.next;
        //不是链尾
        if (l1) {
            sum += l1.val;
            //进行高一位的运算(链表指针前进一位) 
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            //进行高一位的运算(链表指针前进一位)
            l2 = l2.next;
        }
        //如果有低位的进位
        if (added) {
            sum++;
            added = false;
        }
        //判断是否需要进位
        if (sum >= 10) {
            added = true;
            sum -= 10;
        }
        target.val = sum;
        sum = 0; //清零
    }
    //判断最高位上是否有进位
    if (added) {
        target.next = new ListNode(1);
    }
    //去掉链头的 0
    result = result.next;
    return result
};

var addTwoNumbers = function (l1, l2) {
    var c = 0;
    var ret = new ListNode(0);
    var curr = ret;

    while (l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        var sum = a + b + c;
        c = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (c) {
        curr.next = new ListNode(c);
    }

    return ret.next;
};

var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
  };
var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
  };  

console.log(addTwoNumbers(l1, l2)); // 7, 0, 8
