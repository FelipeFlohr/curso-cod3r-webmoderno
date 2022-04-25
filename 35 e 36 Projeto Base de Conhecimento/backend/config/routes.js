module.exports = app => {
    app.route("/users")
        .post(app.api.user.save) // Acessa o método através do Consign
}