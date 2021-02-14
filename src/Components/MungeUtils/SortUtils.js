import pokeData from '../../data.js';
import { capFirstLetter } from './GeneralUtils.js';

export const uniqueTypes = Array.from(new Set(pokeData.map(pokemon => {
    Object.keys(pokemon)
    return capFirstLetter(pokemon.type_1);
})))

// sort in Ascending Order //
// export function sortAscending(array, sortBy) {
//     if (sortBy === 'Pokemon' || sortBy === 'Type') {
//         array.sort((a, b) =>
//             a[sortBy].localeCompare(b[sortBy])
//         )
//     } else array.sort((a, b) => a[sortBy] - b[sortBy])
// }

// sort in Decending Order //
// export function sortDescending(array, sortBy) {
//     if (sortBy === 'Pokemon' || sortBy === 'Type') {
//         array.sort((a, b) =>
//             b[sortBy].localeCompare(a[sortBy])
//         )
//     } else array.sort((a, b) => b[sortBy] - a[sortBy])
// }

// export function sort(array, sortBy, sortOrder) {
//     if (sortOrder === 'ascending') {
//         array.sort((a, b) => {
//             if (a[sortBy] < b[sortBy]) return -1;
//             else if (a[sortBy] > b[sortBy]) return 1;
//             else return 0;
//         })
//     } else if (sortOrder === 'descending') {
//         array.sort((a, b) => {
//             if (a[sortBy] < b[sortBy]) return 1;
//             else if (a[sortBy] > b[sortBy]) return -1;
//             else return 0;
//         })
//     }
//     return array;
// }

// const alphaSort = (sortBy === 'Pokemon' || sortBy === 'Type')

// // if sortBy is Pokemon or Type & sortOrder is 'ascending' - Sort alpha by Ascending
// if (alphaSort && sortOrder === 'ascending') {
//     array.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))

// } // if sortBy is Pokemon or Type & sortOrder is 'descending' - Sort alpha by Descending
// else if (alphaSort && sortOrder === 'descending') {
//     array.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))

// } // if sortBy is NOT Pokemon or Type & sortOrder is 'ascending' - Sort num by Ascending
// else if (!alphaSort && sortOrder === 'ascending') {
//     array.sort((a, b) => a[sortBy] - b[sortBy])

// } // if sortBy is NOT Pokemon or Type & sortOrder is 'descending' - Sort num by Descending
// else array.sort((a, b) => b[sortBy] - a[sortBy])
// }
