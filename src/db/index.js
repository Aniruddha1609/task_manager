import dns from "dns";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
        );
    } catch (error) {
        console.log(`DATABASE CONNECTION ERROR ${error}`);
        process.exit(1);
    }
};
