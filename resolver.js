import mongoose from 'mongoose'
import authorModel from './models/author'

// const authors = [{
//     id: 1,
//     name: "J K Rowling",
//     age: 50,
//     books: ["HP", "HP1"]
// },{
//     id: 2,
//     name: "Sagr",
//     age: 25,
//     books: ["DB", "ML"]
// }]

const resolvers = {
    Query: {
        authors: () =>{
            // return authors
            return authorModel.find({});
        },
        // author: (root, args) =>{
        //     const age = args.age;
        //     return authors.find(author => author.age === age);
        // }
        author: (root, {id}) =>{
            // return authors.find(author => author.id === id);
            return authorModel.findOne({id: id});
        }
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({name: name, age: age, books: books});
            return author.save();
        },
        deleteAuthor: (root, {id}) => {
            return authorModel.findOneAndRemove({id:id});
        },
        updateAuthor: (root, {id, name}) => {
            return authorModel.findOneAndUpdate({id:id}, {name:name});
        }
    }
}

export default resolvers