import React from "react";
export default function Footer() {
  return (
    <section id="footer">
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="medium-4 columns emph">
              <h4 className="text-white reg-weight">
                Photo retouching services
              </h4>

              <ul>
                <li className="text-white">
                  <a href="https://www.bestphotoediting.com.au/wedding-photo-editing">
                    {" "}
                    Wedding photo retouching services
                  </a>
                </li>
                <li className="text-white">
                  <a href="https://www.bestphotoediting.com.au/photo-editing-services-for-photographers">
                    Photo editing services for photographers
                  </a>
                </li>
                <li className="text-white">
                  Real estate photo editing services
                </li>
                <li className="text-white">
                  <a href="https://www.bestphotoediting.com.au/product-photo-editing">
                    {" "}
                    Products photo editing services
                  </a>
                </li>

                <li className="text-white">
                  <a href="https://www.bestphotoediting.com.au/photo-enhancement-services">
                    Photo enhancement services
                  </a>
                </li>
              </ul>
            </div>
            <div className="medium-4 columns  emph">
              <h4 className="text-white reg-weight">Photoshop services</h4>

              <ul>
                <li className="text-white">Colour correction</li>
                <li className="text-white">Contrast adjustment</li>
                <li className="text-white">Exposure adjustment</li>
                <li className="text-white">Art style and effects</li>
              </ul>
            </div>

            <div className="medium-4 columns  emph">
              <h4 className="text-white reg-weight"> Clipping path services</h4>

              <ul>
                <li className="text-white">Changing background</li>
                <li className="text-white">Reshaping images</li>
                <li className="text-white">Removing element</li>
              </ul>
            </div>
          </div>

          <div className="row pad-top">
            <div className="medium-12 columns text-center">
              <span className="text-white">
                &copy; Copyright 2023 BPE - bestphotoediting.com.au
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
