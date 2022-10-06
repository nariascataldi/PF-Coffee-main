import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { postNewsletter } from '../redux/actions/index';

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Footer.module.css";


import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import About from './About2';

const popoverTerms = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Terms and Conditions</Popover.Header>
    <Popover.Body>
      Welcome to the website COFFEs ORDERs (hereinafter the "Site") of TOPYED S.A. The terms and conditions described below (hereinafter the "Terms and Conditions") are intended to regulate the use made of the same by people who enter the Site. "User" of the Site means both those who register on it and those who only visit it, (hereinafter the "User"). By registering and/or browsing the Site, the User gives his consent to this.


      The Terms and Conditions as well as the Privacy Policy and/or information on the Site will be considered applicable to all Users of the Site from the first moment they access it. These terms and conditions are mandatory and binding. They apply to all purchases and activities made on the Site. If the User does not fully accept these Terms and Conditions and the Privacy Policy, please do not continue to access and visit our Site. In case of advancing in the visit to our Site, it will be understood that the User unreservedly accepted these Terms and Conditions and the Privacy Policy, accepting to receive periodic mails with the information that the Site determines. The Terms and Conditions and the Privacy Policy may be modified in whole or in part at any time and at the sole discretion of TOPYED S.A.; said changes and implementations will be effective from the moment they are published or inserted on the Site or from the time they are notified to the User by any means, whichever occurs first. For these reasons, we suggest that you visit them periodically. Violations of the Terms and Conditions will generate the right in favor of the owner of the Site to suspend or terminate the provision of the service to the User who has made them, by action or omission. The Site is concerned with the protection of Users' personal data, in accordance with the guidelines set forth in our Privacy Policy.

      The products and services offered through the Site (hereinafter the "Products") are only available to people who have the legal capacity to buy. Therefore, those who do not comply with this condition must refrain from providing personal information to be included in our databases. However, they can do so through their parents or guardians. Parents, guardians or persons responsible for minors or incapable persons who use the Site will be responsible for said use, including any charge, billing or damage derived from it. If the User is registered as a Company, they must have the capacity to buy on behalf of such entity and to bind it under the terms hereof.
    </Popover.Body>
  </Popover>
);
const popoverData = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Data privacy</Popover.Header>
    <Popover.Body>
      Responsibility

      The User is responsible for any affirmation and/or expression and/or act celebrated with his username and password. The Site reserves the right, at any time and without prior notice, to withdraw any submission or terminate your membership of the Site for violation of the Terms and Conditions described herein. In the event that the information or data provided by the user is not true, the user will be responsible for the damages that this fact may cause.


      The User accepts and acknowledges that the system may not always be available due to technical difficulties or Internet failures, or for any other reason unrelated to the Site, reason for which no responsibility can be attributed to him. The content of the Site, together with and without being considered a limitation, its logos, programs, databases, images, texts, information and files are the property of TOPYED S.A. Its improper use as well as its reproduction without the express and prior written consent of TOPYED S.A. are expressly prohibited and will be subject to the corresponding legal actions. The link established between the User and the Site may not be interpreted as a partnership agreement, mandate or that generates any type of relationship between the Site and the User other than the one established on the Site, with the scope referred to therein. . By the mere fact of accessing the Site, the User acknowledges and accepts that the use of the Internet implies the assumption of risks of damage of various kinds, which could eventually affect the User's software and hardware, and the User's computer may be attacked by hackers who could have access to the information contained in the User's computer, extract or damage it. Sending information through the network or through e-mails has the risk that such information may be captured by a third party. The Site is not responsible for the consequences that the assumption by the User of that risk could have on the User.

      Except in those cases in which the responsibility of TOPYED S.A may be limited by means of a specific policy, in any other case of existing responsibility of TOPYED S.A, for any type of damages related to the Product, the amount of the same will not exceed its full price paid by the User for the product in question.


      To acquire the Products offered by the Site, Users must provide certain personal data. Your personal information will be processed and stored on TOPYED S.A. servers. For more information on the privacy of Personal Data and cases in which personal information will be disclosed, you can consult our Privacy Policy www.ver.com.ar/politicadeprivacidad/



      No action or use of a device, software, or other means tending to interfere in the activities and operations of TOPYED S.A. or in the offers, descriptions, accounts or databases of TOPYED S.A. will be permitted. Any interference, attempt or activity that violates or is contrary to the laws on intellectual property rights and/or the prohibitions stipulated herein will make the person responsible liable for the pertinent legal actions, and the sanctions provided for in these Terms and Conditions, as well as will make you responsible for compensating the damages caused.
    </Popover.Body>
  </Popover>
);
const popoverProm = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Products</Popover.Header>
    <Popover.Body>
      Availability / Price of products



      Product and pricing information is subject to change without notice.

      All prices expressed on the Site include VAT, unless otherwise indicated.

      All prices on the Site are expressed in Argentine pesos, legal currency of the Argentine Republic.

      The product exchange modality for the same model and size is not allowed, unless the exchange is due to a product defect (On Line Sale Exchange Policy) at www.ver.com.ar/politicalchanges/

      Before buying, the User must take into account that the selected products may not be available, since all purchases are subject to availability.

      The price of the Products that we offer on the Site may not coincide with that of the different stores.

      By making an online purchase through the Site, the User accepts these Terms and Conditions, the Privacy Policy and the Online Sales Changes Policy in force. In the same way, you accept that the conditions corresponding to the use of the means of payment and delivery of the Products offered on the Site -and especially the provision of said services- are alien to TOPYED S.A., reason for which no responsibility may be attributed to TOPYED S.A. derived from the use and/or the correct provision of said services.



      Validity and validity of promotions



      In the event that offers and promotions of Products are made, these will be valid for purchases made from the date of commencement of the same, until the end of the offer as stated on the Site. The particular terms and conditions of the same will be communicated on the Site, and will always be subject to the existence in stock of the Products offered. To this end, the date of payment with the different accepted means will be considered as the date of completion of the purchase operation.




      Modifications to the Terms and Conditions



      The Site expressly reserves the following rights: (i) To modify or eliminate, unilaterally, partially or totally, both the provisions of the elements that make up the Site, as well as its general or particular configuration, the services or contents or its conditions. access and use; (ii) To deny or withdraw access to this Site, its services and contents, at any time and without prior notice, to those Users who fail to comply with the Terms and Conditions, (iii) To unilaterally terminate, suspend or interrupt, in any time and without prior notice, the provision of the Site service, (iv) To modify the scope of the Terms and Conditions at any time. The Terms and Conditions will be interpreted and executed in accordance with the laws of the Republic of Argentina. The User unconditionally submits to the jurisdiction of the courts of the Autonomous City of Buenos Aires for the resolution of any doubt, difficulty or controversy related to all or part of the Terms and Conditions.

      The User will indemnify and hold harmless TOPYED S.A, its subsidiaries, controlled and/or controlling companies, directors, administrators, representatives and employees, for any claim or demand from other Users or third parties for their activities on the Site or for their breach of the Terms. and General Conditions and other Policies that are understood to be incorporated herein or for the violation of any laws or rights of third parties, including expenses, attorneys' fees and other costs that may accrue.


      The domicile of TOPYED S.A is set at calle Alsina 1184, Ciudad Autónoma de Buenos Aires, Zip Code 1088, República Argentina. In case of any doubt about the General Terms and Conditions or other policies and principles that govern the Site
    </Popover.Body>
  </Popover>
);



export default function Footer() {
  const { userInit } = useSelector(state => state)

  const dispatch = useDispatch()
  const [input, setInput] = useState({ mail: '' })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    //console.log(e.target.value)
    console.log(input)
  }

  React.useEffect(() => {
    console.log(input)
  }, [input])

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(postNewsletter(input))
    toast("🍩 Suscrito!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setInput({ mail: '' })
  }

  return (
    <footer className={styles.container}>
      <div>
        <section className={styles.section}>
          <a
            href='https://www.facebook.com/'
            type="button"
            className={styles.button}>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
            <br />
            Facebook
          </a>

          <a
            href='https://www.twitter.com/'
            type="button"
            className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
            <br />
            Twitter
          </a>

          <a
            href='https://www.instagram.com/'
            type="button"
            className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
            </svg>
            <br />
            Instagram
          </a>
          <a
            href='https://github.com/nariascataldi/PF-Coffee-main'
            type="button"
            className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <br />
            Github
          </a>

          <a
            href='https://www.linkedin.com/'
            type="button"
            className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
            <br />
            Linkedin
          </a>
        </section>

        <section className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.sing}>
              <div className={styles.singII}>
                <p className={styles.singI}>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className={styles.inputNewsletter}
                    name="mail"
                    placeholder='Email Adress'
                    value={input.mail}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                // "btn btn-primary mb-4"
                  type="submit" className={styles.buttonSub} > 
                  Subscribe
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </section>
        <section className={styles.select}>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas. */}
            The photo may differ from the actual product. Donna is fat free, right in the middle.
          </p>
        </section>
        <section>
          <div className={styles.option}>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <b >INSTITUTION</b>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to='/about'
                    className={styles.footer}>
                    About us
                  </Link>
                  <a
                    href="#!"
                    className={styles.footer}>
                    Shipments incoming to open
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <b>LEGAL</b>

              <ul className="list-unstyled mb-0">
                <li>
                  <OverlayTrigger trigger="click" placement="right" overlay={popoverTerms}>
                    <Button className={styles.footerbtn} variant="success">Terms of use</Button>
                  </OverlayTrigger>
                  {/*                 
                  <a
                    href="https://www.argentina.gob.ar/terminos-y-condiciones"
                    className={styles.footer}>
                    Terms of use
                  </a> */}
                </li>
                <li>
                  <OverlayTrigger trigger="click" placement="right" overlay={popoverData}>
                    <Button className={styles.footerbtn} variant="success">Data privacy</Button>
                  </OverlayTrigger>

                  {/* <a
                    href="https://www.argentina.gob.ar/terminos-y-condiciones#18"
                    className={styles.footer}>
                    Data privacy
                  </a> */}
                </li>
                <li>
                <OverlayTrigger trigger="click" placement="right" overlay={popoverProm}>
                    <Button className={styles.footerbtn} variant="success">Promotions</Button>
                  </OverlayTrigger>

                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <b>CLIENT</b>
              <ul className="list-unstyled mb-0">
                <li>
                  {userInit?.status === 'Client' &&
                    <Link to='/profileUser' className={styles.footer}> Account </Link>
                  }
                </li>
                {/* <li>
                  <a
                    href="#!"
                    className={styles.footer}>
                    Favorites
                  </a>
                </li> */}
                <li>
                  <Link
                    to='/signin'
                    className={styles.footer}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <b>SERVICES</b>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="#!"
                    className={styles.footer}>
                    0810-666-CAFE(2233)
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className={styles.footer}>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className={styles.ul}
      >
        © 2022 Copyright
        <a className="footer" href="https://mdbootstrap.com/"></a>
      </div>
    </footer>
  );
};