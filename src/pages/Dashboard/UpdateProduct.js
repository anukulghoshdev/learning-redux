import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import updateProductData from "../../redux/thunk/products/updateProductData";

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const singleProduct = useLoaderData();

  console.log(singleProduct.data);

  const { _id, brand, image, keyFeature, model, price, rating, spec, status } =
    singleProduct.data;

  const product = useSelector((state) => state.product.products);
  // console.log(product[0]);
  // const {model} = product[0]

  const submit = (data) => {
    console.log(data)
    const product = {
      id: data.productId,
      model: data.model,
      brand: data.brand,
      image: data.image,
      status: data.status === "true" ? true : false,
      price: data.price,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [],
    };
    // console.log("data sdf", data);
    // dispatch(addProduct(product))
    dispatch(updateProductData(product));
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="w-full max-w-lg hidden">
          <label className="mb-2" htmlFor="productId">
            Product Id
          </label>
          <input
            defaultValue={_id}
            id="model"
            {...register("productId")}
            
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            defaultValue={model}
            id="model"
            {...register("model")}
          />
        </div>
        

        <div className="flex flex-col w-full max-w-xs ">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            defaultValue={image}
            name="image"
            id="image"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select
            name="brand"
            id="brand"
            {...register("brand")}
            defaultValue={brand == "INTEL" ? "INTEL" : "AMD"}
          >
            <option value="AMD">AMD</option>

            <option value="INTEL">Intel</option>
          </select>
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            defaultValue={price}
            name="price"
            id="price"
            {...register("price")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                defaultValue={status}
                type="radio"
                id="available"
                value={true}
                {...register("status")}
                checked={status === true}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                checked={status === false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-xs"></div>

        <div className="flex flex-col w-full max-w-xs ">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            defaultValue={keyFeature[0]}
            {...register("keyFeature1")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            defaultValue={keyFeature[1]}
            {...register("keyFeature2")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            defaultValue={keyFeature[2]}
            {...register("keyFeature3")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            defaultValue={keyFeature[3]}
            {...register("keyFeature4")}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
