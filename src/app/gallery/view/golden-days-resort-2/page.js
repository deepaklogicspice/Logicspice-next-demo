"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import "../../gallery.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
    <Navbar />
      <section class="resources-header" style={{ background: "url(/img/gallery.png)" }}>
        <div class="container">
          <span>
            <span>Golden Days Resort</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Golden Days Resort</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                
                <li>
                  {" "}
                  <Link href="/gallery">Gallery</Link>
                </li>
                
                <li class="current">
                  <span id="title_here">
                    Golden Days Resort ( <span>July 25,2015</span> )
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content_area content_area_gallery">
        <div class="container">
          <div id="content" class="site-content afclr" role="main">
            <div
              id="gallery-1"
              class="gallery galleryid-2301 gallery-columns-5 gallery-size-thumbnail"
            />
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/DSC00951.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/DSC00951.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/DSC_3774.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/DSC_3774.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/IMG_1451.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/IMG_1451.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/IMG_5395.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/IMG_5395.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/IMG_5551.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/IMG_5551.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/IMG_5570.jpg"
                      data-lightbox="images"
                    >
                       <Image
                          width={500}
                          height={100 / (100 / 100)}
                        src="/img/goldenday/IMG_5570.jpg"
                        alt="Logicspice functions &amp; events"
                        class="attachment-thumbnail size-thumbnail"
                      />
                    </Link>{" "}
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="navigation"></div>
        </div>

        {/* </div> */}
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
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
