import mongoose from "mongoose"


const Connection = async () => {
    const URL = `mongodb://ektabharti:simmi@ac-va0wgfk-shard-00-00.zoo5kwp.mongodb.net:27017,ac-va0wgfk-shard-00-01.zoo5kwp.mongodb.net:27017,ac-va0wgfk-shard-00-02.zoo5kwp.mongodb.net:27017/?ssl=true&replicaSet=atlas-yn32et-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database' , error);

    }
}


export default Connection;