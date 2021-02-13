// sort in Ascending Order //
export function sortAscending(array, sortBy) {
    if (sortBy === 'Pokemon' || sortBy === 'Type') {
        array.sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy])
        )
    } else array.sort((a, b) => a[sortBy] - b[sortBy])
}

// sort in Decending Order //
export function sortDescending(array, sortBy) {
    if (sortBy === 'Pokemon' || sortBy === 'Type') {
        array.sort((a, b) =>
            b[sortBy].localeCompare(a[sortBy])
        )
    } else array.sort((a, b) => b[sortBy] - a[sortBy])
}
