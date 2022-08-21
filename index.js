
function superbowlWin(record) {
    const result = record.find(win => win.result ==="W")
    return (result ? result.year : result)
}



