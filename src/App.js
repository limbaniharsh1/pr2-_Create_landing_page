import './App.css';
import img from './images/logo.png';
import './css/style.css';
import footer_logo from './images/footer-logo.png';
import './css/all.min.css';

function App() {
  return (
    <div>
      <header>
        <div className="container paddinghead">
          <div className="row justify-contant-between">
            <div className="align-self-center">
              <img src={img}></img>
            </div>
            <div className="nav align-self-center drp1">
              <ol className="row">
                <li>
                  <a href="#" className="">home</a>
                </li>
                <li>
                  <div className="pagesh to">
                    <a href="#">pages</a>
                  </div>
                  <ul className="pagesh1">
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">faq</a>
                    </li>
                    <li>
                      <a href="#">team</a>
                    </li>
                    <li>
                      <a href="#">appointment</a>
                    </li>
                    <li>
                      <a href="#">elements</a>
                    </li>
                    <li>
                      <a href="#">typography</a>
                    </li>
                    <li>

                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">contacts</a>
                </li>
                <button className="logobtn">schedule free device drop in</button>
              </ol>
            </div>
            <div className="toggle align-self-center">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>

      {/* section 1 */}
      <section className="co1 s1bg container container1">
        <div className="wow animate__fadeIn animate__animated">
          <h3>multi-brand </h3>
          <h2>device service</h2>
          <button className="s1btn">About us</button>
        </div>
      </section>
      <section>
        <div className="container justify-contant-between  row section1">
          <div className=" sec1">
            <div className="">
              <h4>call us 24/7</h4>
              <h3>+123-456-7890</h3>
            </div>
          </div>
          <div className=" sec1">
            <div className="">
              <h4>call us 24/7</h4>
              <h3>+123-456-7890</h3>
            </div>
          </div>
          <div className=" sec1">
            <div className="">
              <h4>call us 24/7</h4>
              <h3>+123-456-7890</h3>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="container co2 row padding100">
        <div className="col-xs-11 col-sm-11 col-md-12 col-lg-6 col-xl-6">
          <div className="w-100 wow animate__animated animate__fadeInDown ">
            <h4>Welcome!</h4>
            <h3>about us</h3>
            <p>
              The highly-trained technicians have many years of experience with all laptop, notebook, macbook
              and
              desktop computer repairs. We pride our company on honesty and the good relationships forged
              through
              customer satisfaction. We service all makes and models of MAC laptops, Imac, PC laptops,
              notebooks
              and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.
            </p>
            <button className="aboutbtn">about page</button>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="servicebg2 co3">
        <div className="">
          <div className="container">
            <h2>services</h2>
            <div className="row">
              <div className="w-33 wow animate__animated animate__fadeInDown ">
                <div className="w-100">
                  <i className="fa-solid fa-computer i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100">
                  <i className="fa-solid fa-tablet-screen-button i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100">
                  <i className="fa-solid fa-mobile-screen-button i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w-33">
                <div className="w-100">
                  <i className="fa-solid fa-laptop i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100">
                  <i className="fa-solid fa-sliders i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100">
                  <i className="fa-solid fa-lightbulb i1"></i>
                  <h4>Desktop Repair</h4>
                  <p>With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us
                    whatever you need us to fix.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servicebg"></div>
      </section>

      {/* choose us */}

      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="w-100">
              <div className="himg"></div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 co5">
            <div className="w-100 padding100">
              <h5>know why</h5>
              <h4>choose us</h4>
              <p>No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr:</p>
              <table border="0" width="100%" cellspacing="20" cellpadding="8" align="center">
                <tr>
                  <td>
                    experience
                    <i className="fa-solid fa-plus"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    quality
                    <i className="fa-solid fa-plus"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    guarantees
                    <i className="fa-solid fa-plus"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="animate__fadeInDown wow animate__animated animation-duration:4s">
        <section className="servicebg2 co3 padding100">
          <div className="footer">
            <div className="container row">
              <div className="w-33">
                <div className="w-100">
                  <h2>SERVICE</h2>
                  <ul>
                    <li>
                      <a href="#">Desktop Repair</a>
                    </li>
                    <li>
                      <a href="#">Table Repair</a>
                    </li>
                    <li>
                      <a href="#">Smartphone Repair</a>
                    </li>
                    <li>
                      <a href="#">Laptop Repair</a>
                    </li>
                    <li>
                      <a href="#">Hardware Repair</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100">
                  <h2><img src={footer_logo} alt={'ghg'}></img></h2>
                  <p>The highly-trained technicians have many years of experience with all laptop,
                    notebook, macbook and desktop computer repairs.</p>
                  <div className="row align-self-center location">
                    <i className="fa-solid fa-location-dot align-self-center"></i>
                    <p> 140 Horizon Circle, San Diego, CA</p>
                  </div>
                  <div className="row align-self-center call ">
                    <i className="fa-solid fa-phone align-self-center"></i>
                    <p>01 123 456 789</p>
                  </div>
                  <div className="row email">
                    <i className="fa-solid fa-envelope  align-self-center"></i>
                    <p> example@example.com</p>
                  </div>
                  <div className="row justify-contant-center">
                    <i className="fa-brands fa-facebook-f i-face"></i>
                    <i className="fa-brands fa-twitter i-twit"></i>
                    <i className="fa-brands fa-google i-goog"></i>
                  </div>
                </div>
              </div>
              <div className="w-33">
                <div className="w-100 fooemail">
                  <h2>NEWSLETTER</h2>
                  <p>Enter your email address here always to be updated. We promise not to spam!</p>
                  <input type="email" placeholder="E-MAIL ADDRESS"  ></input>
                  <button className="foobtn">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>

          <div className="servicebg"></div>
          <div className="copy">© Copyright 2017 All Rights Reserved</div>
        </section>
      </footer>

    </div>
  );
}

export default App;
