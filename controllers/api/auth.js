const User = require("../../models/user");
const userId = "63b9b54c0e941be5855ca038";

exports.Login = (req, res, _) => {
  User.findById(userId)
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        if (err) console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.Logout = (req, res, _) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
};
