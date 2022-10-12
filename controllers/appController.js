// This essentially holds a reference to the index page and serves it when this variable is used

const imageView = (req, res) =>
{
    res.render("index", {})
}

module.exports = {
    imageView
}