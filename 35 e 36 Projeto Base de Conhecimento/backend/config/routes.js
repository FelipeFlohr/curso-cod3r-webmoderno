module.exports = app => {
    app.route("/users")
        .post(app.api.user.save) // Acessa o método através do Consign
        .get(app.api.user.get)

    app.route("/users/:id")
        .put(app.api.user.save)
}