import { asyncHandler } from "../utils/asynchandler.js";

export const registerUser = asyncHandler(async (req, res) => {
    res.send("Hii");
});
