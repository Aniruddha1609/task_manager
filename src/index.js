import { app } from "./app.js";
import { connectDB } from "./db/index.js";

connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`SERVER IS LISTENING ON PORT ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(`MONGODB CONNECTION FAILED .... ${error}`);
});
