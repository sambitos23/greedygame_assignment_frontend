import { useState } from "react";
import FormInput from "./FormContent/formInput";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    web_link: "",
    revenue: "",
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPh, setErrorPh] = useState(false);

  if (values.revenue.length > 0) {
    if (values.revenue.slice(0, 1) !== "$") {
      values.revenue = "$" + "   " + values.revenue;
    }
    if (values.revenue.slice(3, 6) === " ") {
      values.revenue = "";
    }
  }

  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const ph_number_pattern =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const handleSubmit = () => {
    if (values.email.match(email_pattern) === null) {
      setErrorEmail(true);
    } else if (values.email.match(email_pattern)) {
      setErrorEmail(false);
    }

    if (
      values.phone_number.slice(0, 3) !== "+91" &&
      values.phone_number.slice(2, 13).match(ph_number_pattern) === null
    ) {
      setErrorPh(true);
    } else if (
      values.phone_number.slice(0, 3) === "+91" &&
      values.phone_number.slice(2, 13).match(ph_number_pattern) === true
    ) {
      setErrorPh(false);
    }
  };

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <section id="form">
      <div className="lg:fixed z-10 top-28 right-28 lg:w-5/12 bg-white rounded-lg px-8 lg:px-12 py-9 flex flex-col w-[96%] mt-8 lg:mt-0 shadow-xl shadow-[#C7C7C75F]">
        <div className="lg:flex">
          <div className="w-full lg:pr-4">
            <FormInput
              type="text"
              label="Name"
              name="name"
              value={values.name}
              handleChange={handleChange}
              placeholder="Enter your Full Name"
            />
          </div>
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={values.email}
            handleChange={handleChange}
            placeholder="Enter your Email Address"
            error={errorEmail}
            errorMesage="Invalid Email Address"
          />
        </div>
        <FormInput
          type="number"
          label="Phone Number"
          name="phone_number"
          value={values.phone_number}
          handleChange={handleChange}
          placeholder="Enter your phone number with country code"
          error={errorPh}
          errorMesage="Please enter a Valid phone number with country code"
        />
        <FormInput
          type="text"
          label="App/Website Link (optional)"
          name="web_link"
          value={values.web_link}
          handleChange={handleChange}
          placeholder="Enter you App/Website you wish to monetise"
        />
        <FormInput
          type="text"
          label="Monthly Revenue (USD)"
          name="revenue"
          value={values.revenue}
          handleChange={handleChange}
          placeholder="Enter your Average monthly revenue in USD"
        />
        <button
          onClick={handleSubmit}
          className="text-white bg-[#126FED] border-0 py-2 px-8 focus:outline-none hover:bg-[#4594FF] rounded text-lg mt-3"
        >
          Get Started
        </button>
        <p className="text-sm font-semibold text-[#1D1A1A] mt-3">
          By signing up, you agree to our{" "}
          <span className="text-[#126FED]">Terms</span> and{" "}
          <span className="text-[#126FED]">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
}
