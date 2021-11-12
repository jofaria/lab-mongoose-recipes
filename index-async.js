const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data.json");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"

async function runProgram() {}

// TODO

/*
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // CREATE
    // firstRecipe = data[0];
    // return Recipe.create(firstRecipe);
  })
  .then((createdRecipe) => {
    // console.log(createdRecipe.title);
  })
  .then(() => {
    return Recipe.insertMany(data);
  })
  .then((entireDatabase) => {
    entireDatabase.forEach((elem) => {
      console.log(elem.title);
    });
    return entireDatabase;
  })
  .then((entireDatabase) => {
    // console.log(entireDatabase);

    const updatedRigatoni = Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      {
        duration: 100,
      },
      { new: true }
    );
    // return updatedRigatoni;
    return entireDatabase;
  })
  .then((entireDatabase) => {
    const deletedRecipe = Recipe.deleteOne({ title: "Carrot Cake" });
    return deletedRecipe;
  })
  .then((deleted) => {
    console.log("Success! You have successfully deleted Carrot Cake.", deleted);

    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Connection closed!");
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
*/
