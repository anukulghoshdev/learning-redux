// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

const updateProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/updated-product/${product.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    console.log("after update data", data);
    if (data.modifiedCount > 0) {
      alert("product updated");
      // navigate('/dashboard')
    }
  };
};
export default updateProductData;
