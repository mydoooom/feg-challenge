function sortOddsByCode(oddCode) {
    const top10tableBoxes = document.querySelectorAll('#top-bets-tab-0 .events-table-box')
    let nodesWithOddValues = []

    top10tableBoxes.forEach(tableBox => {
        let oddIndex

        tableBox.querySelectorAll('th.col-odds').forEach((th, i) => {
           if (th.innerText === oddCode) {
                oddIndex = i
            }
        })

        nodesWithOddValues.push({
            node: tableBox.cloneNode(true),
            oddValue: oddIndex >= 0 ? tableBox.querySelectorAll('td.col-odds')[oddIndex].innerText : null
        })
    })

    const sortedNodesWithOddValues = nodesWithOddValues.sort((a, b) => +a.oddValue - +b.oddValue)
    
    top10tableBoxes.forEach((tableBox, index) => tableBox.replaceWith(sortedNodesWithOddValues[index].node))
}
