class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next

def findMiddle(head: ListNode) -> int:
    if not head:
        return None
    
    fast = head
    slow = head
    while fast.next:
        slow = slow.next
        fast = fast.next.next
        
    return slow.value
