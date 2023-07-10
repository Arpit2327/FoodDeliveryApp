const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://arpitappu:Arpit.2003@cluster0.scwlogr.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoURI = 'mongodb://arpitappu:Arpit.2003@ac-xnbto0c-shard-00-00.scwlogr.mongodb.net:27017,ac-xnbto0c-shard-00-01.scwlogr.mongodb.net:27017,ac-xnbto0c-shard-00-02.scwlogr.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-ifeu28-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB = async() => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err,result) => {
        if(err){
            console.log("---",err);
        }else{
            console.log('connected');
            const fetchedData = await mongoose.connection.db.collection('food_delivery');
            fetchedData.find({}).toArray(async function(err,data){

                const foodCategory = await mongoose.connection.db.collection('food_category');
                foodCategory.find({}).toArray(function(err,catData){

                    if(err){
                        console.log("---",err);
                    }else{
                        global.food_delivery = data;
                        global.food_category = catData;
                    }
                })

                // if(err){
                //     console.log("---",err);
                // }else{
                //     global.food_delivery = data;
                    
                // }
            })
        }

    });
    
} 

module.exports = mongoDB;
