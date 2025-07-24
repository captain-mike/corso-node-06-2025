const mongoose = require('mongoose');

const connectDB = async () => {

    try{

        await mongoose.connect('mongodb://localhost:27017/CRUD', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true 
            // OPZIONI DEPRECATE ma potreste ancora vederle in vecchie app
        })
    
    }catch(err){
        console.log('Database connection error:', err);
        process.exit(1);
    }

}

module.exports = connectDB;