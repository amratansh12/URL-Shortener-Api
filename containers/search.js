const handleSearch = (req, res, Registers) => {
    const {userId, urlSearch} = req.body;
    Registers.findOne({
        _id: userId
    })
    .exec()
    .then(user => {
        const userUrls = user.urls;
        const filteredUrls = userUrls.filter((element) =>
            element.url.includes(urlSearch)
        )
        res.status(200).json(filteredUrls)
    }).catch(e => console.log(e))

}

module.exports = {
    handleSearch
}