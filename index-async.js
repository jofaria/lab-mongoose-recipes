const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data.json");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"

// TODO: convert then/catch to async/await

async function runProgram() {
  try {
    const self = await mongoose.connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`Connected to the database: "${self.connection.name}`);

    const clearingDatabase = await Recipe.deleteMany();

    // CREATE
    // const firstRecipe = data[0];
    // const createdRecipe = await Recipe.create(firstRecipe);
    // console.log(createdRecipe.title);

    const entireDatabase = await Recipe.insertMany(data);

    entireDatabase.forEach((elem) => {
      console.log(elem.title);
    });

    const updatedRigatoni = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      {
        duration: 100,
      },
      { new: true }
    );

    const deletedRecipe = await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log("Success! You deleted Carrot Cake.");

    const closing = await mongoose.connection.close();
    console.log("Connection closed!");
  } catch (err) {
    console.log(err);
  }
}

runProgram();
