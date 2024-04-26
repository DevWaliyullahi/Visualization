import { useState, FormEvent, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

interface ValidationErrors {
  customerName?: string;
  productName?: string;
  productCategory?: string;
  price?: string;
  orderDate?: string;
}

function OrderForm() {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [price, setPrice] = useState<number | "">(0);
  const [orderDate, setOrderDate] = useState("");
  const [genericError, setGenericError] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let successTimeout: ReturnType<typeof setTimeout>;
  
    if (isSuccess) {
      successTimeout = setTimeout(() => {
        setIsSuccess(false);
      }, 3000); 
    }
  
    return () => clearTimeout(successTimeout);
  }, [isSuccess]);

  const handleOrderForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validationErrors: ValidationErrors = {};

    if (!customerName.trim()) {
      validationErrors["customerName"] = "Customer Name is required";
    }

    if (!productName.trim()) {
      validationErrors["productName"] = "Product Name is required";
    }

    if (!productCategory.trim()) {
      validationErrors["productCategory"] = "Product Category is required";
    }

    if (!price) {
      validationErrors["price"] = "Price is required";
    }

    if (!orderDate.trim()) {
      validationErrors["orderDate"] = "Order Date is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      setIsLoading(false);
      return;
    }

  try {
    const res = await axiosInstance.post("/users/order", {
      customerName,
      productName,
      productCategory,
      price,
      orderDate,
    });
  
    if (res.data.success) {
      setIsSuccess(true); 
      setGenericError(""); 
      setCustomerName("");
      setProductName("");
      setProductCategory("");
      setPrice(0);
      setOrderDate("");
    } else {
      setGenericError("Submission failed");
    }
  } catch (error) {
    console.error("Error submitting order:", error);
    setGenericError("Submission failed");
  } finally {
    setIsLoading(false);
    setValidationErrors({});
  }
};

  return (
    <div className="mx-auto w-3/4 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold mx-auto md:w-10/12 xl:w-6/12 text-white sm:text-4xl lg:text-5xl lg:w-8/12 leading-tight tracking-wider">
        Order Form
      </h1>

      <div className="bg-white mx-auto max-w-lg rounded-2xl w-10/12 sm:w-6/12 lg:w-6/12 xl:w-4/12 mt-8">
        <form onSubmit={handleOrderForm} className="space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          {genericError && (
            <div className="bg-red-100 border border-red-400 text-red-700 py-1 rounded my-2 relative text-center">
              <span className="text-xs">{genericError}</span>
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 py-1 rounded my-2 relative text-center">
              <span className="text-xs">Successfully submitted</span>
            </div>
          )}

          <div className="flex flex-col gap-2 mb-4">
            <div>
              <label htmlFor="customerName">Customer Name</label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-lg"
                id="customerName"
                type="text"
                placeholder="Enter customer name"
              />
              {validationErrors?.customerName && <span className="text-red-500 text-sm ml-1">{validationErrors.customerName}</span>}
            </div>

            <div>
              <label htmlFor="productName">Product Name</label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-lg"
                id="productName"
                type="text"
                placeholder="Enter product name"
              />
              {validationErrors?.productName && <span className="text-red-500 text-sm ml-1">{validationErrors.productName}</span>}
            </div>

            <div>
              <label htmlFor="productCategory">Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-lg"
                id="productCategory"
              >
                <option value="">Select Product Category</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Horror">Horror</option>
              </select>
              {validationErrors?.productCategory && <span className="text-red-500 text-sm ml-1">{validationErrors.productCategory}</span>}
            </div>

            <div>
              <label htmlFor="price">Pricing</label>
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-lg"
                id="price"
                type="number"
                placeholder="Enter price"
              />
              {validationErrors?.price && <span className="text-red-500 text-sm ml-1">{validationErrors.price}</span>}
            </div>

            <div>
              <label htmlFor="orderDate">Order Date</label>
              <input
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-lg"
                id="orderDate"
                type="date"
                placeholder="Enter order date"
              />
              {validationErrors?.orderDate && <span className="text-red-500 text-sm ml-1">{validationErrors.orderDate}</span>}
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <p className="text-center text-sm text-gray-500">
                  My Dashboard{" "}
                  <Link className="text-blue-900 hover:underline" to="/dashboard">
                    Dashboard
                  </Link>
                </p>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
