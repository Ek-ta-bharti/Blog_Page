import mongoose from "mongoose"


const Connection = async () => {
    const URL = `mongodb://EKTA:SIMMI@ac-rwv598w-shard-00-00.nwttgbv.mongodb.net:27017,ac-rwv598w-shard-00-01.nwttgbv.mongodb.net:27017,ac-rwv598w-shard-00-02.nwttgbv.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6k8if-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog`;
    try {
       await mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database' , error);

    }
}


export default Connection;