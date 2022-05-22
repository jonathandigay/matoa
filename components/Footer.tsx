import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/motoa.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="col col1">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
          <div className="address">
            <h3>Addresss</h3>
            <p>Store and Office</p>
            <p>Jl. Setrasari Kulon III,</p>
            <p> No. 10-12, Sukarasa,</p>
            <p> Sukasari, Bandung,</p>
            <p> Jawa Barat, Indonesia 40152</p>
            <br />
            <h3>Office Hour</h3>
            <p>Monday - Sunday </p>
            <p> 10.00 - 18.00</p>
          </div>
        </div>
        <div className=" col col2">
          <div className="title">
            <h1>Get in touch</h1>
          </div>
          <div className="contact">
            <h3>Phone</h3>
            <p>09517146558</p>
          </div>
          <div className="contact">
            <h3>Service Center</h3>
            <p>0811-233-0899</p>
          </div>
          <div className="contact">
            <h3>Costumer Center</h3>
            <p>0811-235-9978</p>
          </div>
          <div className="social-media">
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#000000" }}
              >
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
              </svg>
            </div>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                style={{ fill: "#000000" }}
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </div>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                style={{ fill: "#000000" }}
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </div>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                style={{ fill: "#000000" }}
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="col col3">
          <div className="title">
            <h1>Useful Link</h1>
            <div className="link">
              <Link href="/" passHref>
                <p>Warranty & Complaints</p>
              </Link>
            </div>
            <div className="link">
              <Link href="/" passHref>
                <p>Order & Shipping </p>
              </Link>
            </div>{" "}
            <div className="link">
              <Link href="/" passHref>
                <p>Tracking Order</p>
              </Link>
            </div>
            <div className="link">
              <Link href="/" passHref>
                <p>About Us</p>
              </Link>
            </div>
            <div className="link">
              <Link href="/" passHref>
                <p>Repair</p>
              </Link>
            </div>
            <div className="link">
              <Link href="/" passHref>
                <p>Term and privacy</p>
              </Link>
            </div>{" "}
            <div className="link">
              <Link href="/" passHref>
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col col4">
          <div className="title">
            <h1>Campaign</h1>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Mengenal Arti Cukup </p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Tell Your Difference</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Waykambas</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Rebrand</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Gallery</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Singo </p>
            </Link>
          </div>
          <div className="link">
            <Link href="/" passHref>
              <p>Rakai</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="developer">
        <p>
          Code by :{" "}
          <Link href="https://jonathandigay.web.app" passHref>
            Jonathan Digay
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
