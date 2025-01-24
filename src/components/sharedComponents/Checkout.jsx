import { Link } from "react-router";

const Checkout = () => {
  return (
    <div className=" w-[327px] h-[1578px] md:w-[768px] md:h-[1370px] lg:w-[1110px] lg:h-[1506px] flex items-center justify-center mx-auto">
      <div className="relative w-[327px] h-[1378px]  md:w-[689px] md:h-[1050px] lg:w-[790px] lg:h-[1126px] mx-auto p-8 border rounded-lg shadow-md bg-white">
        <button
          onClick={() => window.history.back()}
          className="absolute font-bold top-[-60px] left-[-40px] md:top-[-90px] md:left-[-40px] lg:top-[-95px] lg:left-[-40px] opacity-50 hover:opacity-100 text-[17px] capitalize"
        >
          Go Back
        </button>
        <Link
          to="/"
          className="absolute font-bold top-[-50px] right-[10px] md:top-[-80px] lg:top-[-80px] opacity-50 hover:opacity-100"
        >
          Go Home
        </Link>
        <h1 className="text-2xl font-bold mb-6">CHECKOUT</h1>

        {/* Billing Details */}
        <div>
          <h2 className="text-lg font-bold text-orange-500 mb-4">
            BILLING DETAILS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="Alexei Ward"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="+358 123456789"
              />
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div>
          <h2 className="text-lg font-bold text-orange-500 mb-4">
            SHIPPING INFO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1" htmlFor="zip">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="10001"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="New York"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="United States"
              />
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <h2 className="text-lg font-bold text-orange-500 mb-4">
            PAYMENT DETAILS
          </h2>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Payment Method
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  value="eMoney"
                  defaultChecked
                />
                e-Money
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  value="cash"
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="eMoneyNumber"
              >
                e-Money Number
              </label>
              <input
                type="text"
                id="eMoneyNumber"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="238521993"
              />
            </div>
            <div className="col-span-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="eMoneyPIN"
              >
                e-Money PIN
              </label>
              <input
                type="text"
                id="eMoneyPIN"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                placeholder="6891"
              />
            </div>
          </div>
          <button className="mt-10 mx-auto w-[279px] py-2 bg-[#D87D4A] text-white font-bold rounded hover:bg-[#e08a5d]">
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
