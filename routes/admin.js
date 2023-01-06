const express = require("express");

const adminController = {
  api: require("../controllers/api/admin"),
  view: require("../controllers/admin"),
};

const router = express.Router();

// view
router.get("/products", adminController.view.Products);
router.get("/add-product", adminController.view.AddProduct);
router.get("/edit-product/:productId", adminController.view.EditProduct);

// api
router.post("/add-product", adminController.api.AddProduct);
router.post("/edit-product", adminController.api.EditProduct);
router.post("/delete-product", adminController.api.DeleteProduct);

module.exports = router;
