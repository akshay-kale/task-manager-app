require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d8333642d251269f81787c0

// User.findByIdAndUpdate('5d833372e96fda5b3041b291',{ age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age : 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return count;
}

updateAgeAndCount('5d833372e96fda5b3041b291', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})