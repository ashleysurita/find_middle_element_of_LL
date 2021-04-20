class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

/*
    if head is null, return null
    if list only has 1 node, return its value
    
    create a variable that is for fast and a variable for slow
    for each loop, fast will move 2 spaces while slow will move once
    when fast can't go any further, we return slow's value
*/

function findMiddle(head) {
    if(!head) return null
    let fast  = head
    let slow = head
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next
        slow = slow.next
    }    
    return slow.value
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(new ListNode(1))) // 1
