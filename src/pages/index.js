import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <section id="home">
        <div id="home-slider">
          <ul className="slides">
            <li className="has-parallax cover-bg">
              <div className="row slide-content">
                <div className="medium-12 columns">
                  <h1 className="text-white">
                    Photo retouching services
                    <br />
                    smart & <strong>simple.</strong>
                  </h1>
                  <p className="lead text-white">
                    We offer professional photo retouching and editing services
                    under cost effective manner <br />A photo worth one
                    thousands words.{" "}
                  </p>
                  <a
                    className="text-white"
                    href="https://tucia.com/af/auneil"
                    rel="nofollow"
                    target="_blank"
                  >
                    <div className="btn">Show Me</div>
                  </a>
                </div>
              </div>
              <div className="slide-overlay"></div>
            </li>
          </ul>
        </div>
      </section>
      <section id="about-intro" className="pad-large">
        <div className="row">
          <div className="medium-12 columns text-center">
            <h2>
              Delivering above <strong>expectation</strong> is what our photo
              retouching experts looking for.
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="medium-4 columns text-center">
            <div className="large-feature">
              <i className="icon icon_genius"></i>
              <h4>Send Photo</h4>
              <p>Simply order our services online and send photo to us.</p>
            </div>
          </div>

          <div className="medium-4 columns text-center">
            <div className="large-feature">
              <i className="icon icon_tags_alt"></i>
              <h4>Tell Instructions</h4>
              <p>Tell us your instructions. We love to hear from you</p>
            </div>
          </div>

          <div className="medium-4 columns text-center">
            <div className="large-feature">
              <i className="icon icon_toolbox_alt"></i>
              <h4>Get New Photo</h4>
              <p>
                Our expert team will deliver retouched photos within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="row pad-large">
          <div className="medium-12 columns">
            <h2 className="reg-weight page-title">
              Why choose us - Quality work & Express delivery
            </h2>

            <p>
              BPE offer quality photo editing & retouching service, photoshop
              services and graphic design service to customers all around the
              world. Based in Australia, our expereinced team dedicate to
              deliver satisfactory services for photographers. We will do our
              best to fully understand your requirements and ensure all clients
              gets the highest quality solution and service appropriate to their
              need. We handle a variety of photo type, like landscape photo,
              portrait photo, event photo, wedding photo, product photo and
              more.
            </p>
          </div>
        </div>
      </section>

      <section className="action-divider highlight-bg">
        <div className="row">
          <div className="medium-9 columns">
            <h3 className="text-white">
              <i className="icon icon_cursor_alt">&nbsp;</i>A fast and reliable
              photo retouching service
            </h3>
          </div>
          <div className="medium-3 columns text-center">
            <a
              href="https://tucia.com/af/auneil"
              rel="nofollow"
              target="_blank"
            >
              <div className="btn text-white">Purchase</div>
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pad-large">
        <div className="row">
          <div className="medium-12 columns text-center">
            <h2 className="page-title">Work Example</h2>
          </div>
        </div>

        <div className="row">
          <div className="medium-12 columns text-center">
            <h3>
              Quality: The elegant restraint and enhancement of great work
            </h3>
          </div>
        </div>

        <div className="projects-wrapper  text-center">
          <div className="projects-container offix">
            <div className="medium-4 web project" data-project-file="">
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photo retouching</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img alt="edited project photo" src="/img/photoedit6.jpg" />
            </div>

            <div className="medium-4 branding project" data-project-file="">
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photo retouching</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img
                alt="retouched property photo"
                src="/img/photoediting5.jpg"
              />
            </div>

            <div className="medium-4 print project" data-project-file="">
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photoshop service</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img alt="edited house" src="/img/photoretouch1.jpg" />
            </div>

            <div className="medium-4 print project" data-project-file="">
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photo editing</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img
                alt="retouched property photo"
                src="/img/photoretouch2.jpg"
              />
            </div>

            <div className="medium-4 web project" data-project-file="">
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photo retouching</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img alt="retouched house photo" src="/img/photoretouch3.jpg" />
            </div>

            <div
              className="medium-4 branding project"
              data-project-file="project1.html"
            >
              <div className="project-hover">
                <div className="hover-inner">
                  <h4 className="reg-weight">Photo retouch</h4>
                  <h6>Property image</h6>
                </div>
              </div>
              <img
                alt="retouched property photo"
                src="/img/photoretouch4.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="text-divider has-pan-right">
        <div className="row pad-large-top">
          <div className="medium-12 columns text-center">
            <h2 className="page-title">Our Services</h2>
          </div>
        </div>

        <div className="row">
          <div className="medium-12 columns offix service-list">
            <div className="service offix">
              <div className="service-icon left">
                <i className="icon icon_lightbulb_alt"></i>
              </div>

              <div className="service-text left">
                <h4>Basic retouch</h4>
                <p>
                  Exposure, contrast, brightness adjustment, colour correction.
                </p>
              </div>
            </div>

            <div className="service offix">
              <div className="service-icon left">
                <i className="icon icon_bag_alt"></i>
              </div>

              <div className="service-text left">
                <h4>Portrait photo retouching</h4>
                <p>
                  Reshape body, improve skin, whiten teeth, remove wrinkles,
                  blemishes or other small element.
                </p>
              </div>
            </div>

            <div className="service offix">
              <div className="service-icon left">
                <i className="icon icon_camera_alt"></i>
              </div>

              <div className="service-text left">
                <h4>Clipping mask service</h4>
                <p>
                  Clipping mask, change background, eemove unwanted elemnet.
                </p>
              </div>
            </div>

            <div className="service offix">
              <div className="service-icon left">
                <i className="icon icon_lifesaver"></i>
              </div>

              <div className="service-text left">
                <h4>Art style and effects</h4>
                <p>
                  Creative art design, poster and flyer design, thank you card
                  design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="pad-normal">
        <div className="row">
          <div className="medium-4 columns border-right stat">
            <div className="offix text-center">
              <h1 className="number highlight-text">750</h1>
              <h3>Happy Clients</h3>
              <p>
                That love our work
                <br />
                and tell us so.
              </p>
            </div>
          </div>

          <div className="medium-4 columns border-right stat">
            <div className="offix text-center">
              <h1 className="number highlight-text">10090</h1>
              <h3>Photos</h3>
              <p>
                Retouched with quality,
                <br /> sweat and creativity.
              </p>
            </div>
          </div>

          <div className="medium-4 columns stat">
            <div className="offix text-center">
              <h1 className="number highlight-text">24</h1>
              <h3>Hours A Day</h3>
              <p>
                No matter when
                <br />
                we'll be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-divider right-divider has-pan-right">
        <div className="row pad-large">
          <div className="medium-12 columns ">
            <h2 className="reg-weight">Ready to roll?</h2>
            <h2>Try our services today</h2>
            <p>
              If you have any enquiries or need any support, or want to send
              photos and instructions, please do not hesitate to contact us.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="highlight-bg pad-normal">
        <div className="row">
          <div className="medium-4 columns text-center pricing-table">
            <h3 className="text-white reg-weight">Basic Retouching</h3>
            <span className="dollar text-white">$</span>
            <span className="price text-white">4</span>
            <span className="cents text-white">.99</span>
            <ul>
              <li className="text-white">Colour</li>
              <li className="text-white">Exposure</li>
              <li className="text-white">Contrast </li>
            </ul>
            <a href="https://tucia.com/af/auneil" rel="nofollow">
              <div className="btn text-white">SUBSCRIBE</div>
            </a>
          </div>

          <div className="medium-4 columns text-center pricing-table emph">
            <h3 className="text-white reg-weight">Advanced Retouching</h3>
            <span className="dollar text-white">$</span>
            <span className="price text-white">9</span>
            <span className="cents text-white">.99</span>
            <ul>
              <li className="text-white">Clipping mask</li>
              <li className="text-white">Background amendment</li>
              <li className="text-white">Photo recovery</li>
            </ul>
            <a href="https://tucia.com/af/auneil" rel="nofollow">
              <div className="btn text-white">SUBSCRIBE</div>
            </a>
          </div>

          <div className="medium-4 columns text-center pricing-table">
            <h3 className="text-white reg-weight">Art Design</h3>
            <span className="dollar text-white">$</span>
            <span className="price text-white">19</span>
            <span className="cents text-white">.99</span>
            <ul>
              <li className="text-white">Creative job</li>
              <li className="text-white">Art effect</li>
              <li className="text-white">Vintage effect</li>
            </ul>
            <a href="https://tucia.com/af/auneil" rel="nofollow">
              <div className="btn text-white">SUBSCRIBE</div>
            </a>
          </div>
        </div>
      </section>

      <section id="clients" className="pad-normal">
        <div className="row">
          <div className="medium-3 columns text-center client">
            <img alt="Client Logo" src="img/c1.png" />
          </div>

          <div className="medium-3 columns text-center client">
            <img alt="Client Logo" src="img/c2.png" />
          </div>

          <div className="medium-3 columns text-center client">
            <img alt="Client Logo" src="img/c3.png" />
          </div>

          <div className="medium-3 columns text-center client">
            <img alt="Client Logo" src="img/c4.png" />
          </div>
        </div>

        <div className="row pad-top">
          <div className="medium-12 column text-center">
            <a className="text-link" href="#">
              <h4 className="highlight-text reg-weight">
                Join the list of happy clients{" "}
              </h4>
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className=" text-center">
          <div className="row pad-large">
            <div className="medium-12 columns text-center">
              <h2 className="page-title">
                Get in touch & tell us your requirements
              </h2>
            </div>
            <div className="row">
              <h2>
                <a href="https://tucia.com/af/auneil" rel="nofollow">
                  Contact us
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Photo Editing Services, Photo Retouching Service, Photoshop Services, - BPE,
    Australia"
    description="If you are looking for professional, fast and affordable online photo editing, retouching services and photoshop services, BPE - Best Photo Editing is the right place."
    keywords="photo editing services, photo editing services australia, photo retouching services, photoshop services"
  />
);
