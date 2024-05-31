const Message = require('../models/MessageModel');
exports.createMessage = async (req, res) => {
    try{
        const {phone_number, message } = req.body;
        const newMessage = new Message(phone_number, message);
        newMessage.save().then(result => {
            res.status(201).json({message: 'Message created successfully', result, newMessage});
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.getMessagesbyPhone = async (req, res) => {
    try{
        const {phone_number} = req.body;
        const message = new Message(phone_number);
        message.findbyPhone().then(result => {
            res.status(200).json({message: 'Messages found successfully', result});
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
}