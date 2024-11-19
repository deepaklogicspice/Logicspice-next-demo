import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BaseAPI from "../BaseAPI/BaseAPI";
import ReCAPTCHA from "react-google-recaptcha";

const Billing = ({ billingInitials, test, applyDiscount, getDiscount }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [productDetails, setProductDetails] = useState([]);
  const [formData, setFormData] = useState({
    billing_name: "",
    billing_email: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_country: "",
    billing_postcode: "",
    billing_phone: "",
    domain_name: "",
    cost: "",
    discount: "0.00",
    total_cost: "",
    currencySym: billingInitials?.currencyDetail.currency_symbol || "",
    currency: billingInitials?.currencyDetail.name || "",
    product_name_new: billingInitials?.productType || "",
    payment_gateway: "paypal",
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const [errors, setErrors] = useState({
    billing_name: "",
    billing_email: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_country: "",
    billing_postcode: "",
    billing_phone: "",
    domain_name: "",
    cost: "",
    discount: "0.00",
    total_cost: "",
    captcha: "",
  });

  const [paymentModal, setPaymentModal] = useState(false);
  const [message, setMessage] = useState("");
  const [errormessage, setErrorMessage] = useState({});

  const [couponDiscount, setCouponDiscount] = useState({
    coupon_code: "",
  });
  let paymentUrl = useRef();
  let totalPrice = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const recaptchaChange = (token) => {
    setIsCaptchaVerified(true);
    setErrors({ ...errors, captcha: "" });
  };

  const handleClose = (e) => {
    e.preventDefault();
    setPaymentModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.billing_name) {
      newErrors.billing_name = "Name is required";
    }

    if (!formData.billing_email) {
      newErrors.billing_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.billing_email)) {
      newErrors.billing_email = "Email is invalid";
    }

    if (!formData.billing_address) {
      newErrors.billing_address = "Address is required";
    }

    if (!formData.billing_city) {
      newErrors.billing_city = "City is required";
    }

    if (!formData.billing_state) {
      newErrors.billing_state = "State is required";
    }

    if (!formData.billing_country) {
      newErrors.billing_country = "Country is required";
    }

    if (!formData.billing_postcode) {
      newErrors.billing_postcode = "Postcode is required";
    } else if (!/^\d{6}$/.test(formData.billing_postcode)) {
      newErrors.billing_postcode = "Postcode is invalid";
    }

    if (!formData.billing_phone) {
      newErrors.billing_phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.billing_phone)) {
      newErrors.billing_phone = "Phone number is invalid";
    }
    if (!isCaptchaVerified) {
      newErrors.captcha = "Please verify Recaptcha";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!isCaptchaVerified) {
        return;
      }
      try {
        console.log("Total Price:", totalPrice.current);

        // setFormData((prevData) => ({
        //   ...prevData,
        //   total_cost: totalPrice.current,
        //   cost: totalPrice.current,
        // }));
        let updatedFormData = {
          ...formData,
          total_cost: totalPrice.current,
          cost: totalPrice.current,
        };
        // console.log(updatedFormData.cost, updatedFormData.total_cost,"cost");
        let updatedData = {
          formData: updatedFormData,
          buynow: billingInitials,
        };

        const response = await axios.post(
          BaseAPI + "/softwares/savebilling",
          updatedData
        );
        if (response.data.status === 200) {
          paymentUrl.current = response.data.url;
          window.location.href = paymentUrl.current; // Redirect to the URL
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    // Handle form submission
  };

  // let discountHtml = useRef();

  // const applyDiscount = async (e) => {
  //   e.preventDefault();
  //   // Handle promo code submission

  //   let discountData = {
  //     coupon_code: couponDiscount.coupon_code,
  //     payment_gateway: "paypal",
  //     product_name: billingInitials?.productType,
  //     total_amount: totalPrice.current,
  //     currencySym: billingInitials?.currencyDetail.currency_symbol,
  //     currency: billingInitials?.currencyDetail.name,
  //     slug: billingInitials?.currencyDetail.product_name,
  //   };

  //   try {
  //     const response = await axios.post(
  //       BaseAPI + "/softwares/discount",
  //       discountData
  //     );

  //     console.log(response);

  //     if (response.data.status == 200) {
  //       setFormData((pre) => ({
  //         ...pre,
  //         cost: response.data.data.total_amount,
  //         discount: response.data.data.discount_price,
  //         total_cost: response.data.data.charge_amount,
  //       }));

  //       // this.formData.cost = response.data.data.total_amount;
  //       // this.formData.discount = response.data.data.discount_price;
  //       // this.formData.total_cost = response.data.data.charge_amount;

  //       // document.getElementById('ofer_finl').innerHTML(response.data.html)

  //       console.log(response.data.html);
  //       discountHtml.current = response.data.html;

  //       if (discountHtml.current !== "") {
  //         const offerElement = document.querySelector("#ofer_finl"); // Corrected selector
  //         if (offerElement) {
  //           offerElement.innerHTML = discountHtml.current;
  //         } else {
  //           console.error("Element #ofer_finl not found in the DOM.");
  //         }
  //       }
        

  //       // $('#ofer_finl').html(response.data.html)
  //     }

  //     setMessage(response.data.message);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  console.log(billingInitials, "here");

  const calculateTotal = () => {
    totalPrice.current = billingInitials?.currencyDetail.price || 0;

    if (billingInitials?.addArray.length > 0) {
      billingInitials.addArray.forEach((ele) => {
        // Convert the string to a number
        let id = parseInt(ele, 10);

        // Find the matching additional point
        let selectedPoint = billingInitials.additionalPoints.find(
          (point) => point.id === id
        );

        // If a matching point is found, add its price to the total price
        if (selectedPoint) {
          totalPrice.current += selectedPoint.price;
        }
      });
    }
  };

  // if (!productDetails) {
  //   return null;
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("object");
        // Replace `injectedConstants.API_PATH` with your API path
        const response = await axios.post(BaseAPI + "/softwares/billing");

        console.log(response.data, "data heers");
        setProductDetails(response.data);
        const { currencyDetail, additionalPoints, addArray, productType } =
          response.data;

        let newTotalPrice = [currencyDetail.price];

        additionalPoints.forEach((ele) => {
          if (addArray.includes(ele.id.toString())) {
            newTotalPrice.push(ele.price);
          }
        });

        if (
          [
            "Food Ordering & Delivery Script",
            "WhatsApp Clone",
            "Chat Room Script",
            "Classified Ads Script",
            "Logistic Marketplace Software",
            "Job Portal PHP Script",
            "Fiverr Clone",
            "Grocery Store Script",
            "PHP Business Directory Script",
            "Groupon Clone Script",
            "Udemy Clone",
            "Freelancer Clone",
            "Service Marketplace Script",
          ].includes(productType) &&
          addArray.includes("android")
        ) {
          newTotalPrice.push(585.0);
          setIsAndroid(true);
        }

        if (
          [
            "Food Ordering & Delivery Script",
            "WhatsApp Clone",
            "Chat Room Script",
            "Classified Ads Script",
            "Logistic Marketplace Software",
            "Job Portal PHP Script",
            "Fiverr Clone",
            "Grocery Store Script",
            "PHP Business Directory Script",
            "Groupon Clone Script",
            "Udemy Clone",
            "Freelancer Clone",
            "Service Marketplace Script",
          ].includes(productType) &&
          addArray.includes("iphone")
        ) {
          newTotalPrice.push(585.0);
          setIsIphone(true);
        }

        if (isAndroid && isIphone) {
          setSubtotalPrice(585.0 + 585.0);
          setSubtotalDiscountPrice((subtotalPrice * 15) / 100);
        }

        const sum = newTotalPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const finalTotal = sum - subtotalDiscountPrice;

        setTotal(
          newTotalPrice.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) - subtotalDiscountPrice
        );
        setTotalPrice(newTotalPrice);

        // Set form data
        setFormData({
          cost: total,
          discount: 0.0,
          total_cost: total,
          currencySym: currencyDetail.currency_symbol,
          currency: currencyDetail.name,
          product_name: productType,
        });

        // Set promocode form
        setPromocodeForm({
          product_name: productType,
          currencySym: currencyDetail.currency_symbol,
          currency: currencyDetail.name,
          total_amount: total,
        });

        // Initialize reCAPTCHA
        setTimeout(() => {
          const recaptchaContainer = document.getElementById("recaptchaBuy");
          if (recaptchaContainer) {
            grecaptcha.render(recaptchaContainer, {
              sitekey: injectedConstants.RECAPTCHA,
              callback: (response) => methods.onRecaptchaVerify(response),
              expiredCallback: () => methods.onRecaptchaExpired(),
            });
          }
        }, 500);
      } catch (err) {
        console.error(err);
      }
    };

    //fetchData();
    calculateTotal();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    getDiscount(couponDiscount, totalPrice.current);
};

  return (
    <>
      <form
      // onSubmit={submitForm}
      // id="paymentForm"
      // encType="multipart/form-data"
      // method="post"
      // acceptCharset="utf-8"
      // noValidate
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_method" value="POST" />
        </div>
        <div className="order_title mobile-none">
          <h4 className="titke">Billing Information</h4>
        </div>

        <div className="order_summarty_left">
          <div className="oder_inner">
            <div className="form_wrap">
              <div className="oder_row">
                <div className="oder_form">
                  <label>Name*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Name"
                      type="text"
                      id="PaymentBillingName"
                      name="billing_name"
                      value={formData.billing_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_name}</div>
                </div>
                <div className="oder_form">
                  <label>Email Address*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Email"
                      type="text"
                      id="PaymentBillingEmail"
                      name="billing_email"
                      value={formData.billing_email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_email}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Address*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Address"
                      type="text"
                      id="PaymentBillingAddress"
                      name="billing_address"
                      v-model={formData.billing_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">
                    {errors.billing_address}
                  </div>
                </div>
                <div className="oder_form">
                  <label>City*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="City"
                      type="text"
                      id="PaymentBillingCity"
                      name="billing_city"
                      value={formData.billing_city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_city}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>State*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="State"
                      type="text"
                      id="PaymentBillingState"
                      name="billing_state"
                      value={formData.billing_state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_state}</div>
                </div>
                <div className="oder_form">
                  <label>Country*</label>
                  <div className="oder_dfied">
                    <span className="drop_icon">
                      <select
                        id="PaymentBillingCountry"
                        name="billing_country"
                        value={formData.billing_country}
                        onChange={handleChange}
                      >
                        <option selected value="">
                          Select Country
                        </option>
                        {billingInitials.countries.map((country) => (
                          <option value={country.id} key={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                  <div className="errorValidation">{errors.billing_state}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Postal Code*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Postal Code"
                      type="text"
                      id="PaymentBillingPostcode"
                      name="billing_postcode"
                      value={formData.billing_postcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">
                    {errors.billing_postcode}
                  </div>
                </div>
                <div className="oder_form">
                  <label>Phone*</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Phone"
                      type="text"
                      id="PaymentBillingPhone"
                      name="billing_phone"
                      value={formData.billing_phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="errorValidation">{errors.billing_phone}</div>
                </div>
              </div>
              <div className="oder_row">
                <div className="oder_form">
                  <label>Domain Name</label>
                  <div className="oder_dfied">
                    <input
                      placeholder="Domain Name"
                      type="text"
                      id="PaymentDomainName"
                      name="domain_name"
                      value={formData.domain_name}
                      onChange={handleChange}
                    />
                    <span className="help_txt">
                      The licenced code will be provided for this domain only
                      and the domain name could be provided later too.
                    </span>
                  </div>
                </div>
                <div className="oder_form">
                  <div className="oder_dfied">
                    {/* <div id="recaptchaBuy" className="g-recaptcha"></div> */}
                    <ReCAPTCHA
                      key={recaptchaKey}
                      sitekey={recaptchaKey}
                      onChange={(value) => recaptchaChange(value)}
                    />
                    {errors.captcha && (
                      <div className="text-danger CaptchaVerify">
                        {errors.captcha}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="prm_cdsc">
                Have a promo code?{" "}
                <button
                  className="add_hr"
                  type="button"
                  onClick={() => setPaymentModal(true)}
                >
                  Add it here
                </button>
              </div>
            </div>
          </div>
          <div className="contine_payment paymnt_con">
            <div className="paypal_ig">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/img/images/paypal_img.png"
                alt="PayPal"
              />
            </div>
            {/* <input
              className="btn btn-primary"
              type="submit"
              value="Continue for payment"
            /> */}
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Continue for payment
            </button>
            <div className="loadloader popup_loader" id="loadloaderPay">
              <Image
                width={100}
                height={100}
                src="/logicspice_com_cake/img/loading-old.gif"
                alt="Loading..."
              />
            </div>
          </div>
        </div>
        <div className="order_summarty_right">
                  <div className="order_summarty_right_inner">
                    <div className="order_title">Order Summary</div>
                    <div className="order_wrap">
                      <div id="offeer_sec">
                        <div className="order_wrap_row" id="and_sec">
                          <div className="order_wrap_left">
                            <span className="basi_title">
                              {productDetails.productType}
                            </span>
                            <br />
                            (Web Version)
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="and_price">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                        <div id="custom_sec"></div>
                      </div>
                      {/* <div id="ofer_nw">
                        <div className="order_wrap_row">
                          <div className="order_wrap_left">
                            <span className="basi_title">Total</span>
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="tot_sec">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                      </div> */}
                      <div id="ofer_finl"></div>
                      <div className="off_sect">
                        <span id="show" className="drop drop_left">
                          We Offer Money Back Guarantee{" "}
                          <i className="question_icon"></i>
                          <div className="drop_contanet drop_left_content">
                            <span id="hide"></span>
                            Yes, we provide a 30 days money back guarantee to
                            ensure customer satisfaction with our software. If,
                            for any reason, you decide to stop using the
                            product, you can request a refund. We will reimburse
                            the entire amount, excluding the installation and
                            configuration charges, which are either USD 65 or
                            20% of the application cost, whichever is higher.
                            Please note that the money back guarantee does not
                            apply to customers who have received updates as per
                            their specific requests, taking into account the
                            significant efforts and time invested by the team
                            for their project.
                          </div>
                        </span>
                        <div className="pay_pri_term">
                          For more detail visit following pages
                          <a
                            href="https://demo.imagetowebpage.com/logicspice_com_cake//privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          and
                          <a
                            href="https://demo.imagetowebpage.com/logicspice_com_cake//terms-of-use"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms Of Use
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      </form>
      <div id="ofer_finl"></div>

      <div
        className={`modal fade ${paymentModal ? "show" : ""}`}
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!paymentModal}
        style={{ display: paymentModal ? "block" : "none", width: "100%" }} // Adding display property
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setPaymentModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                <font id="update_pay">Apply Discount</font>
              </h4>
            </div>
            <form
            // onSubmit={submitPromo}
            // id="paymentForm1"
            // encType="multipart/form-data"
            // method="post"
            // acceptCharset="utf-8"
            >
              <div className="modal-body">
                <div className="payment_wrap">
                  <div className="submit_pay">
                    <div className="rigt_tcdr">
                      <input
                        id="coupon_code"
                        placeholder="Enter coupon"
                        className="cupon_textinput"
                        type="text"
                        value={couponDiscount.coupon_code}
                        onChange={(event) =>
                          setCouponDiscount({
                            ...couponDiscount,
                            coupon_code: event.target.value,
                          })
                        }
                      />
                      <button
                        type="submit"
                        id="coupon_save"
                        className="cupon_bt_righ ancorinput btn btn-primary"
                        onClick={handleApplyDiscount}
                        // onClick={test}
                      >
                        Apply
                      </button>
                      <br />
                      {message && <span id="errors">{message}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cls_dv">
                <button
                  onClick={() => handleClose()}
                  className="btn btn_kcls"
                  id="pop_clos"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
