const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Sow82001@cluster0.xcemgpe.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery', false);
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else
                        global.food_items = data;
                        global.foodCategory = catData;

                })
                // if(err) console.log(err);
                // else 
                // global.food_items = data;

            })
        }

    });
}
module.exports = mongoDB;
