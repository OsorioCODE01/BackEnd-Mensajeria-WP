const connectDB = require('../../configs/dbConnection');

class Message{
    constructor(phone_number, message){
   
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        this.date = formattedDate;
        this.phone_number = phone_number;
        this.message = message;

    }

    async save() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await connectDB();
                const result = await db.collection('WPMs').insertOne({
                    date: this.date,
                    phone_number: this.phone_number,
                    message: this.message
                });
                resolve(result);
            } catch (error) {
                console.error('Error inserting message:', error);
                reject(error);
            }
        });
    }

    async findbyPhone() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await connectDB();
                const result = await db.collection('WPMs').find({phone_number: this.phone_number}).toArray();
                resolve(result);
            } catch (error) {
                console.error('Error finding message:', error);
                reject(error);
            }
        });
    }

}    


 module.exports = Message;