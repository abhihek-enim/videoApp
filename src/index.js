import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();
connectDB().then(() => {
  app.on("error", (error) => {
    console.log(error);
    throw error;
  });

  app.listen(process.env.PORT || 8000, () => {
    console.log(`App is listeining on port ${process.env.PORT}`);
  });
});

/* 
Everyting in one file approach
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
