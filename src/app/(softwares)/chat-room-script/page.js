"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Enquirymodal from "@/app/Components/Enquirymodal";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css"

const Page = () => {
  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/chat-room-script"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const Accordion = styled((props) => (
  //   <MuiAccordion disableGutters elevation={0} square {...props} />
  // ))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&::before": {
  //     display: "none",
  //   },
  // }));

  // const AccordionSummary = styled((props) => (
  //   <MuiAccordionSummary
  //     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   backgroundColor: "rgba(0, 0, 0, .03)",
  //   flexDirection: "row-reverse",
  //   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
  //     transform: "rotate(90deg)",
  //   },
  //   "& .MuiAccordionSummary-content": {
  //     marginLeft: theme.spacing(1),
  //   },
  //   ...theme.applyStyles("dark", {
  //     backgroundColor: "rgba(255, 255, 255, .05)",
  //   }),
  // }));

  // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
  // }));

  // const [expanded, setExpanded] = React.useState("panel1");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    getData();
  }, []);

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [activeTab, setActiveTab] = useState("tab2");
  const [buyerTab, setBuyerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const handleBuyerTab = () => {
    setBuyerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setBuyerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array to run once on mount
  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg whatsapp-clone-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Chat Room Script</h1>
              <div className="both-left-p-sec">
                <h2>
                  Get our user-friendly & easily installable PHP chat room
                  script for your website.
                </h2>
              </div>
              <div className="job-valu">
                <div className="portal-price NewPriceDesign">
                  <h4>
                    $45 USD<small>/mo</small>{" "}
                  </h4>
                  <div className="OfferPriceProduct">
                    <strike className="srik_cls">
                      {pageData.currency_symbol}
                      {pageData.price} {pageData.name}
                    </strike>
                    <span className="MoreInfo">
                      <i>
                        {/* <Image unoptimized={true}
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                          width={15}
                          height={15}
                        /> */}

                        <Image
                          unoptimized={true}
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>

                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <button>Get Demo Access!</button>
                    {
                  //     <SoftwareEnquiry
                  //       modalStatus={showModal}
                  //       toggle={openModal}
                  //       title="Please fill the form below and get access to the live demo of classNameified Ads software
                  // .See how it work yourself!"
                  //     />

                  <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Chat Room Script. See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/chat-room-script"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      alt="Chat Room Script"
                      src="/img/jobboard/stars.png"
                      width={100}
                      height={100}
                    />

                    <p>92 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="jocpp">
                <ul className="job-pr-icon jobwidthauto">
                  <li>
                    <i
                      className="fa fa-globe"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i className="fa fa-android"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  alt="Chat Room Script"
                  src="/img/softwares-banner-img/chatroom-banner-img.png"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Chat Room Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            You can increase your team connectivity with our ready to install
            PHP chat room script. Get a live demo now.
          </p>
        </div>
      </section>
      <section
        className="client-say WhatsaapCliets"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>Enable group chat for your team or a group</li>
                  <li>White labeled Script</li>
                  <li>Script is compatible with different web browsers</li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">PHP chat script Features</h2>
          </div>
          <div className="tatxt_txt_job text-center">
            Logicspice offers complete, beautiful and easy to use PHP chat
            script for your website that can be integrated into any online
            publishing platforms. Our user-friendly ChatScript can provide your
            website with multiple chat rooms that include many features.
            <br />
            This ready to use PHP chat script is powerful which is compatible
            with any platform. Our chat script can run directly into your
            existing website in a very short period. Now Your visitors would be
            able to discuss through public and private chat rooms. You can hire
            PHP developer from us to customize this PHP chat room script
            according to your needs and fit into your website design.
            <br />
            Try Demo of this simple yet practical chat script and add new
            functionality to your website. We provide the best approach to hold
            chat discussions on your website. Say goodbye to the old chat rooms,
            and embrace a new and easy way to hold chat discussions on your site
            with our ready to install the PHP chat room script. We also have
            mobile apps ready for this, which provide a seamless experience of
            chatting from wherever you are.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="tab_listing">
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>User Features</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {buyerTab && (
                <>
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            src="/img/whatsappclone/whatsapp_user.png"
                            alt="Seller App Features"
                            height={400}
                            width={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                User Registration
                                <div className="product-idea">
                                  <p>
                                    User can register over the website if he
                                    wants to chat with any friend.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    User can manage his basic profile like name,
                                    DOB, profile picture, password etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/private-chat.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Private Chat
                                <div className="product-idea">
                                  <p>
                                    This platform will provide private chat
                                    between users.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_job.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Group Chat
                                <div className="product-idea">
                                  <p>
                                    This platform will provide group chat where
                                    you can make your own group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search-friend.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Search Friend
                                <div className="product-idea">
                                  <p>
                                    User will search a friend by the keyword and
                                    select a user from the list of related users
                                    to start chat.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/add-group.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Add Group
                                <div className="product-idea">
                                  <p>
                                    User can create his own group and add
                                    friends to chat.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/update-group.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Update Group
                                <div className="product-idea">
                                  <p>
                                    User can update his created group
                                    information like name and group profile
                                    picture.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/delete-group.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Delete Group
                                <div className="product-idea">
                                  <p>
                                    User can delete his own created group if he
                                    wants to delete.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/chear-chat.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Clear Chat
                                <div className="product-idea">
                                  <p>
                                    User can clear his all chat history of a
                                    group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/leave-group.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Leave Group
                                <div className="product-idea">
                                  <p>User can leave a group.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/add-group.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Add Friend in Group
                                <div className="product-idea">
                                  <p>
                                    User can add new friends in his created
                                    group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/remove-friend.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Remove Friend in Group
                                <div className="product-idea">
                                  <p>
                                    User can remove any friend from his created
                                    group.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {adminTab && (
                <>
                  <div className="costomer_tab rj" id="tab3">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            src="/img/whatsappclone/whatsapp_deshboard.png"
                            alt="Admin Panel"
                            height={400}
                            width={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>Admin login is secured.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Manage Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can change the username, password,
                                    email, set contact address & can also change
                                    the site settings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view the dashboard where it will
                                    display the total number of users, chats
                                    etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_user.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Manage Users
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of users & can
                                    activate, deactivate, delete, edit, view
                                    etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Manage Contents
                                <div className="product-idea">
                                  <p>
                                    Admin can manage the listed static pages
                                    content.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                  height={100}
                                  width={100}
                                />
                              </i>
                              <span>
                                Manage Chat
                                <div className="product-idea">
                                  <p>
                                    Admin can view the chat of the users on the
                                    basis of selected group or all history. If
                                    he finds any inappropriate content then he
                                    can delete the chat and a complete group
                                    also.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              What does our Chat Room Script offer you ?
            </h2>
            <p>
              This is a simple user-friendly and easy to install{" "}
              <strong>PHP Chat Room Script</strong> for public and private
              discussions that can be added to web sites. It is made with PHP
              and JavaScript, using Object-Oriented Programming and Ajax
              technology.
            </p>
            <p>
              Our <strong>Chat Room Script</strong> can save chat data in
              databases on a server, and it uses very few server&apos;s
              resources with the excellent features Responsive, cross-browser,
              cross-platform.
            </p>
            <p>
              The user Can add smiles in chat, format the text with Bold,
              Italic, and associate Underline.our script chat has been tested
              successfully on different web browsers Google Chrome, Internet
              Explorer, Opera, Mozilla Firefox, Safari.
            </p>
            <p>
              Nowadays Businesses are using chat rooms to connect with their
              clients, customers, and other offices. Businesses could use chat
              rooms among the corporate or place chat rooms on their website to
              interact with visitors quickly.
            </p>
          </div>
        </div>
      </section>

      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f1f1f1" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month</strong>, limited offer available for
                the first year.
              </p>
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan.
                  </span>
                </li>
                <li>
                  <span>
                    Timely Upgrades: Seamlessly transition to upgraded versions
                    at regular intervals, all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Zero Setup Fees</strong>:- There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Group Creations: Create as many groups as you need
                    without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support: We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise, our <strong>dedicated technical team</strong>{" "}
                    will promptly address them during office hours.
                  </span>
                </li>
                <li>
                  <span>
                    Personalized Customization Assistance: Delivering Custom
                    Features According to Client Requirements at additional
                    cost.
                  </span>
                </li>
              </ul>
              <p>
                Discover a new era of convenience and efficiency with our
                subscription offering. Subscribe today and elevate your
                experience with our readymade solution!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="subscriptionprice" className="SubscriptionpriceSection">
        <div className="container">
          <h2 className="taxt_tt_job">Delivered Solution</h2>
          <div className="SubscriptionModelPrice">
            <div className="SubscriptionModelPriceBx">
              <h4>
                ₹88,286<span className="sml_labl"> INR</span>
              </h4>
              <strike className="srik_cls">
                ₹147,805<span className="sml_labl"> INR</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                {/* <Link
                  href="#"
                  className="btn btn-get"
                  id="buy_now_1"
                  onClick={() => openDemoModel()}
                >
                  Get Demo Access!
                </Link> */}

                <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <button>Get Demo Access!</button>
                  {
                  //   <SoftwareEnquiry
                  //     modalStatus={showModal}
                  //     toggle={openModal}
                  //     title="Please fill the form below and get access to the live demo of classNameified Ads software
                  // .See how it work yourself!"
                  //   />

                  <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Chat Room Script. See how it works yourself!"
                      />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/chat-room-script"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i
                      className="fa fa-globe"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i className="fa fa-android"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                      height={100}
                      width={100}
                    />
                    <p>92 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SubscriptionModelBx">
            <p>
              The solution offered by Logicspice provides several advantages
              that can assist you in expanding your business within the
              competitive market. Here are some key benefits outlined below:
            </p>

            <ul>
              <li>
                <span>
                  Obtain a lifetime license for your domain under the pro
                  license with a one-time fee.
                </span>
              </li>
              <li>
                <span>
                  Enjoy free installation of the software for the first time.
                </span>
              </li>
              <li>
                <span>
                  Benefit from a white-labelled solution featuring your
                  branding, logo, and content at no additional cost.
                </span>
              </li>
              <li>
                <span>
                  Access custom features according to your specific
                  requirements, available at an additional charge.
                </span>
              </li>
              <li>
                <span>
                  Receive three months of complimentary support for any bugs or
                  issues you encounter.
                </span>
              </li>
              <li>
                <span>
                  Experience efficient communication channels via email,
                  WhatsApp, Google Meet, Skype, Zoom and Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license, please{" "}
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/why-logic-icon.png"
                    alt=""
                    className=""
                    height={20}
                    width={20}
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>
          <div className="small_bbx_job_new" style={{ display: "none" }}>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx1">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/coding.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Optimized Code with proper commenting</h3>
                    <p>
                      Our script code is fully optimized, which results in quick
                      load time and, Code is properly commented for each
                      function and module so anyone can easily update the code
                      in future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx2">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/data-complexity.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Strong Framework of PHP & Well managed database</h3>
                    <p>
                      We used popular and strong Framework of PHP with latest
                      versions to keep the code up to date and prevalent for
                      longer duration. Our experienced team managed all the
                      database tables with complete flexibility for extension
                      versions in future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx3">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/coordinate.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>
                      Quick Response and
                      <br /> Coordination
                    </h3>
                    <p>
                      Customers will always get a quick response from our
                      technical support team, with the best possible solution.
                      Expect our response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx4">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/customize.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Customization at affordable price</h3>
                    <p>
                      We provide customization of our scripts, to meet customer
                      expectations with best affordable price and minimum
                      turn-around time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx5">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/smartphone-icon.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Mobile Friendly Script</h3>
                    <p>
                      Our Script is mobile friendly so, users can easily access
                      all the features through mobile devices that gives
                      improved user experience with portability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx6">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/data.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Dedicated Support Team</h3>
                    <p>
                      You will get the dedicated support team while purchasing
                      the script or product. Technical support team will resolve
                      your query quickly in a given time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx7">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/web-icon.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Global company with agile development approach</h3>
                    <p>
                      Our customers are almost equally spread around the globe
                      and we provide international standard solutions for USA,
                      UK, Europe, Australia, UAE and other countries. We follow
                      a transparent work process and divide all the development
                      processes into small phases. We can use the latest
                      technology and standards that assure the smooth
                      development and execution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx8">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/encrypted.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Customer information and application level security</h3>
                    <p>
                      Security of customer data and application is a major
                      aspect of any of the solutions, Logicspice provides. Our
                      programming is robust and secure that assures password
                      encryption.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx9">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/history-icon.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Experienced workforce with 3000+ project history</h3>
                    <p>
                      We are a team of experienced web and mobile app
                      developers, having expertise in handling complex tasks
                      since the past 16+ years. We delivered lots of projects
                      with 100% client satisfaction on different platforms with
                      high levels of standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx10">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/seouser-friendly.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Seo Friendly Development</h3>
                    <p>
                      Our developed websites are SEO optimized so it can rank
                      better on Google.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx11">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/one-stop-solution.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>One Stop Solution</h3>
                    <p>
                      We offer complete design & development solutions along
                      with the business strategy, all under one roof.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx12">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/third-party-api.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Integration With Third Party Api</h3>
                    <p>
                      We integrate your website with third party API on our end
                      to serve you better.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx13">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/cost-effective.png"
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3>Cost Effective</h3>
                    <p>
                      Powerful technology back-end with basic ready-made modules
                      save time and hence overall project cost for your script
                      gets reduced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                        height={60}
                        width={60}
                      />
                    </div>
                    <div className="icntechimg_nm">CakePHP</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/nodejs_icon.png"
                        alt="Node.js"
                        className="lazy"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="icntechimg_nm">Node.js</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                        height={60}
                        width={60}
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                        height={60}
                        width={60}
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="IOS"
                        className="lazy"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Android"
                        className="lazy"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> CakePHP
                  </li>
                  <li className="same">
                    <b>Language - </b> Node.js 12.15.0, PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other ">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 4.3.1, JavaScript
                  </li>
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other">
                    <b>Server - </b> Apache 2.4+{" "}
                  </li>
                  <li className="other">
                    <b>iOS - </b> Xcode 11.3 and swift 5{" "}
                  </li>
                  <li className="other">
                    <b>Android - </b> Java 9 and Android Studio 4.1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whatsupport_section" id="support">
        <div className="container">
          <h4 className="title_main">
            What <span>support</span> you will get?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.7 out of 5 stars</span>
                      </span>
                    </div>
                    <div className="review_rating_fjs">
                      <div className="star_num">
                        5 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">90</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        4 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">2</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        2 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        1 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Chat Room Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;I have purchased this script and has constructed my
                      own web-site. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the
                      future.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">John, USA</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                          height={20}
                          width={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;This is the best WhatsApp Clone App. Thanks for your
                      great efforts and support while installing the script.
                      Your prompt service regarding a few minor issues was
                      superb.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      D. Smith, Germany{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in USA"
                          height={20}
                          width={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a
                      WhatsApp Clone, it&apos;s really nice.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Mike wilshon, AUS{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                          height={20}
                          width={20}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ&apos;s</h4>
              <div className="MainFaqBx">
                {/* <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Once I purchase this script, how many days will it take to go online?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      It takes 2 working days generally, provided all the
                      information to make it live has been given.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      No, You can&apos;t resell the script. All rights will
                      remain with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion> */}
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      Once I purchase this script, how many days will it take to
                      go online?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It takes 2 working days generally, provided all the
                      information to make it live has been given.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Can I get help for customization?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can’t resell the script. All rights will remain
                      with Logicspice only.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <Typography>
                      Will I be able to use it on multiple domains, after I
                      purchase this script?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be licensed to use it only for the domain you
                      purchased for.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5-content"
                    id="panel5-header"
                  >
                    <Typography>
                      Along with hosting server details, what other
                      recommendations?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We recommend you purchase an SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all websites these days and it provides a
                      secure layer to the website as well.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">PHP chat script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/whatsappclone/whatsapp-clone.png"
                    alt="Ls Chat"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Ls Chat</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/whatsappclone/chat-login.png"
                    alt="Chat Login"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Chat Login</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/whatsappclone/edit-profile.png"
                    alt="Edit Profile"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Edit Profile</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/whatsappclone/message.png"
                    alt="Message"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Message</div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              {/* <Link
                href="#"
                className="btn btn-primary"
                id="buy_now_1"
                onClick={() => openDemoModel()}
              >
                Enquire Now
              </Link> */}
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Chat Room Script"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="latest_feature_product">
        <div className="container">
          <h2 className="title_main">Other Popular Softwares</h2>
          <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="#">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Crowdfunding</h3>
                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            src="/img/jobboard/crowdfunding_new.png"
                            alt="Crowdfunding"
                            className=""
                            height={100} width={100}
                          />
                        </div>
                        <p>
                          <span>
                            Fundraising Software like GoFundMe & Kickstarter.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="#">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>
                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            className=""
                            height={100} width={100}
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="#">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Logistic Marketplace software</h3>
                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
                            className=""
                            height={0} width={0}
                          />
                        </div>
                        <p>
                          <span>Similar to Uship Clone, Shiply Clone.</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
