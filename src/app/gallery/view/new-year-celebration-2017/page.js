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
      <section
        class="resources-header"
        style={{ background: "url(/img/gallery.png)" }}
      >
        <div class="container">
          <span>
            <span>New Year Celebration 2017</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>New Year Celebration 2017</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>

                <li class="current">
                  <span id="title_here">
                    New Year Celebration 2017 ( <span>July 22,2017</span> )
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
            >
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/2eef1_New-Year-Party---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/2eef1_New-Year-Party---Logicspice.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/d6d68_Fun---Events---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/d6d68_Fun---Events---Logicspice.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/cdacc_New-Year-Party--Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/cdacc_New-Year-Party--Logicspice.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/76c93_New-Year-Party-2017---Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/76c93_New-Year-Party-2017---Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/83595_New-Year-Party-2017--Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/83595_New-Year-Party-2017--Logicspice.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/42c84_New-Year-Party-2017-.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/42c84_New-Year-Party-2017-.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/c749b_New-Year-Fun---Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/c749b_New-Year-Fun---Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/8cc90_New-Year-Fun--Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/8cc90_New-Year-Fun--Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/00899_New-Year-2017.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/00899_New-Year-2017.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/c399e_New-Year-2017---Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/c399e_New-Year-2017---Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/a0207_New-Year-Event.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/a0207_New-Year-Event.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/13d67_New-Year-Fun-2017-.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/13d67_New-Year-Fun-2017-.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/6a217_New-Year-Fun-2017--.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/6a217_New-Year-Fun-2017--.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/5d657_New-Year-Fun-2017---Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/5d657_New-Year-Fun-2017---Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/sunresort/3fae7_NewYear-Fun-2017---Logicspice.jfif"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/3fae7_NewYear-Fun-2017---Logicspice.jfif"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div class="navigation"></div>
          </div>
        </div>
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
