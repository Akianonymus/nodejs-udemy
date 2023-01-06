const Order = require("../../models/order");
const Product = require("../../models/product");

exports.Cart = (req, res, _) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((_) => {
      res.redirect("/cart");
    });
};

exports.CartDeleteProduct = (req, res, _) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then((_) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.Order = (req, res, _) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items.map((i) => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user,
        },
        products: products,
      });
      return order.save();
    })
    .then((_) => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};
