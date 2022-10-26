var db = require("../connection");
var collection = require("../dbCollection/collection");
var objectid = require("mongodb").ObjectId;
module.exports = {
    AddTodo: (Data) => {
        Data.Status = true
        Data.Date=new Date()
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODOS).insertOne(Data).then(() => {
                resolve()
            })
        })
    },
    GetTodo: () => {
        return new Promise(async(resolve, reject) => {
            let Todolists = await db.get().collection(collection.TODOS).find().toArray()
            resolve(Todolists)   
        })
    },
    UpdateTodo: (UpdateData) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODOS).updateOne({ _id: objectid(UpdateData.Todo_Id) },
                {
                    $set: {
                        Todo_Data: UpdateData.Todo_Data,
                        Date:new Date()
                }
            }).then(() => {
                resolve()
            })
        })
    },
    ActiveTodos: (ReqData) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODOS).updateOne({ _id: objectid(ReqData) },
                {
                    $set: {
                        Status:true
                }
            }).then(() => {
                resolve()
            })
        })
    },
    InactiveTodos: (ReqData) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODOS).updateOne({ _id: objectid(ReqData) },
                {
                    $set: {
                        Status:false
                }
            }).then(() => {
                resolve()
            })
        })
    },
    RemoveTodo: (ReqData) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODOS).deleteOne({ _id: objectid(ReqData.TodoID) }).then(() => {
                resolve()
            })
        })
    }
}