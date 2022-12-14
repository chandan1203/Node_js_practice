const connect = require("./../database/db");

const { ObjectId } = require('mongodb');

exports.index = async (req, res) => {
    const db = await connect();

    const books = await db.collection("book").find().toArray();

    res.send(books);
};

exports.store = async (req, res) => {

    const db = await connect();

    db.collection('book').insertOne(req.body);
    res.status(201).json({data: 'Book Stored Successfully'});
};

exports.show = async (req, res) => {
        
    const _id = ObjectId(req.params.id);

    const db = await connect();
    
    const book = await db.collection('book').find({_id}).toArray();
    res.json(book);
};

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id);

    const db = await connect();

    await db.collection('book').updateOne( {_id} ,{ $set: req.body });
    res.json({'data' : 'Book is updated'});
};

exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id);

    const db = await connect();

    await db.collection('book').deleteOne({_id});
    res.status(204).json();
};






