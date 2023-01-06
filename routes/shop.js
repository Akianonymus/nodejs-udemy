const express = require("express");

const shopController = {
  api: require("../controllers/api/shop"),
  view: require("../controllers/shop"),
};

const router = express.Router();

// view
router.get("/", shopController.view.Index);
router.get("/products", shopController.view.Products);
router.get("/products/:productId", shopController.view.Product);
router.get("/cart", shopController.view.Cart);
router.get("/orders", shopController.view.Orders);

// api
router.post("/cart", shopController.api.Cart);
router.post("/cart-delete-item", shopController.api.CartDeleteProduct);
router.post("/create-order", shopController.api.Order);

module.exports = router;
