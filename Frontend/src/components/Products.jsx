import axios from "axios";

const product = ({ product }) => {
  const handleClick = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create-checkout-session",
        {
          product,
        },
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Checkout error: ", error);
    }
  };
  return (
    <>
      {product.map((product, index) => (
        <div
          key={index}
          className="border p-4 rounded shadow hover:scale-105 transition-transform flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-blue-600 font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Buy Now Button */}
          <button
            onClick={() => handleClick(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors relative text-xl"
          >
            Buy Now
          </button>
        </div>
      ))}
    </>
  );
};

export default product;
