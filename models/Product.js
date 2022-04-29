const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 character"],
  },
  price: {
    type: Number,
    required: [true, "please enter price"],
    maxLength: [5, "Product name cannot exceed 5 character"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter product name"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  catagory: {
    type: String,
    require: [true, "please select category for this product"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "pleae select the correct category for the product",
    },
  },
  seller: {
    type: String,
    required: [true, "pleae enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [5, "Product name cannot exceed 5 character"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        require: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
