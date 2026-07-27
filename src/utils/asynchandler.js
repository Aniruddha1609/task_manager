export const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                success: false,
                message: "Internal Server Error",
            });
    }
};
