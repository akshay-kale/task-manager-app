//CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser : true , useUnifiedTopology : true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database :: ', error)
    }

    console.log('connected correctly!');
    const db = client.db(databaseName);

//     db.collection('users').updateOne({
//         _id : new ObjectID('5d825386431d783c80ee05a6')
//     }, {
//         $inc: {
//             age: 1
//         }
//     }).then((result)=>{
//         console.log(result);
//    }).catch((error)=>{
//         console.log(error);
//    })


// db.collection('tasks').updateMany({
//     completed : false
// }, {
//     $set: {
//         completed: true
//     }
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

db.collection('tasks').deleteOne({
    description: 'jap'
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})



        
})