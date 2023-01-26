function LLtoArray(head) {
    let current = head
    let result = []
    while (current) {
        result.push(current.value)
        current = current.next
    }
    return result
}
