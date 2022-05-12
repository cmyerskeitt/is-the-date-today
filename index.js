function isToday(date) {
    var today = new Date().toLocaleDateString()
    return today == date.toLocaleDateString()
}