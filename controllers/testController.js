const testController = (req, res) => {
    res.status(200).send(
        {
            message : "Welocome",
            success : true,
        }
    );
};

module.exports = {testController};