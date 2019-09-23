require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d83730a868cbb65000bf5a0').then((result) => {
//     console.log(result)
//     return Task.countDocuments({completed : false})
// }).then((count) => {
//     console.log(count)
// }).catch((err) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false})
    return count;
}

deleteTaskAndCount('5d832e3d7dd5513e2418af29').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})