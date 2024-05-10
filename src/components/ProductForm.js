import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/actions";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imageURL: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected typo here
    dispatch(addNewProduct(formData)); // Removed unnecessary arrow function
    setFormData({
      name: "",
      category: "",
      imageURL: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleSubmit}
      >
        {/*  product name  */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        {/*  product category  */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            onChange={handleChange}
            value={formData.category}
            required
          />
        </div>
        {/* product image url  */}
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imageURL"
            onChange={handleChange}
            value={formData.imageURL}
            required
          />
        </div>
        {/*  price & quantity container */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/*  price  */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              onChange={handleChange}
              value={formData.price}
              required
            />
          </div>
          {/*  quantity */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              onChange={handleChange}
              value={formData.quantity}
              required
            />
          </div>
        </div>
        {/* submit button */}
        <button
          type="submit"
          id="lws-inputSubmit"
          disabled={
            !formData.name ||
            !formData.category ||
            !formData.imageURL ||
            !formData.price ||
            !formData.quantity
          }
          className="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
