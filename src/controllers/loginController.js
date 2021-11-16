const { validationResult, check } = require("express-validator");
const user = require("../models/User");
const bcrypt = require("bcrypt");

const controller = {
    getLogin: (req, res) => {
        res.render("pages/login");
    },

    postLogin: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("pages/login", {
                errors: errors.mapped(),
                old: req.body,
            });
        } else {
            let users = user.obtenerUsuarios();
            let findUser = users.find((user) => user.email == req.body.email);
            if (findUser) {
                if (bcrypt.compareSync(req.body.password, findUser.password)) {
                    console.log("entra");
                    req.session.loggedUser = findUser;
                    return res.redirect(req.session?.history?.prev || "/");
                } else {
                    return res.render("pages/login", {
                        errors: {
                            password: {
                                msg: "Las credenciales no son válidas",
                            },
                        },
                    });
                }
            } else {
                return res.render("pages/login", {
                    errors: {
                        email: { msg: "No existe un usuario con este email." },
                    },
                });
            }
        }
    },
};

module.exports = controller;
