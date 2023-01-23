import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
const HeaderP3 = () => {
  return (
    <div className="header_3Con">
      <ul className="list">
      <li>
          <Link className="link" to={"/products"}>
           Groceries
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "200px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Fruits & Vegitables</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Dairy & Bakery</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Staples</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
      <li>
          <Link className="link" to={"/products"}>
            Premium Fruits
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* Sub Menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Apples & Pears</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Avocado, Peach & Plum</Link>
                </li>
                <li>
                  <Link to={"/products"}>Banana, Melons & Coconut</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dates</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Citrus, Mango & Grapes</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Cherries, Berries & Exotic Fruits</Link>
                </li>
                <li>
                  <Link to={"/products"}>Gift, Assorted and XL Packing</Link>
                </li>
                <li>
                  <Link to={"/products"}>Pomegranate, Papaya & Pineapple</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
          </div>
        </li>
        <li>
          <Link className="link" to={"/products"}>
            Home & Kitchen
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Laundry Accessiories</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Dispocables</Link>
                </li>
                <li>
                  <Link to={"/products"}>Furnishing</Link>
                </li>
                <li>
                  <Link to={"/products"}>Furniture</Link>
                </li>
                <li>
                  <Link to={"/products"}>Garden & Outdoor</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Home Decor</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}>KitchenWare</Link>
                </li>
                <li>
                  <Link to={"/products"}>Prayer & Spiritual Needs</Link>
                </li>
                <li>
                  <Link to={"/products"}>Tableware</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Health Food & Drinks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Green Tea & Herbal Tea</Link>
                </li>
                <li>
                  <Link to={"/products"}>Apple Cider Vinegar</Link>
                </li>
                <li>
                  <Link to={"/products"}>Healthy Snacks</Link>
                </li>
              </ul>
            </div>
            
            
          </div>
        </li>
        
        <li>
          <Link className="link" to={"/products"}>
            Fashion
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* ========================================================== */}
          {/* sub menu */}

          <div className="subMenu_left">
            <div className="subDiv">
              <ul style={{ width: "210px" }}>
                <li>
                  <Link to={"/products"}>
                    <strong>Men</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>omron</Link>
                </li>
                <li>
                  <Link to={"/products"}>Accu-chek</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dr. Morepen Devices</Link>
                </li>
                <li>
                  <Link to={"/products"}>Dr Trust</Link>
                </li>
                <li>
                  <Link to={"/products"}>OneTouch</Link>
                </li>
                <li>
                  <Link to={"/products"}>Contour</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Women</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}>Face Shield</Link>
                </li>
                <li>
                  <Link to={"/products"}>Surgical Masks</Link>
                </li>
                <li>
                  <Link to={"/products"}>N95 Masks</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Boys</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>BP Monitors</Link>
                </li>
                <li>
                  <Link to={"/products"}>Nebulizers & Vaporizers</Link>
                </li>
              </ul>
            </div>
           
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Girls</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Neck & Shoulder Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Knee & Leg Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Ankle & Foot Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Hand & Wrist Braces</Link>
                </li>
                <li>
                  <Link to={"/products"}>Arm & Elbow Support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Cervical Pillows</Link>
                </li>
                <li>
                  <Link to={"/products"}>Compression support & sleeves</Link>
                </li>
                <li>
                  <Link to={"/products"}>Heel support</Link>
                </li>
                <li>
                  <Link to={"/products"}>Crepe Bandage</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* =============================================================== */}
        </li>
        
        <li>
          <Link className="link" to={"/products"}>
            Electronics
          </Link>
          <span>
            <FiChevronDown />
          </span>
          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_left">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Mobiles & Tablets</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>TV Speakers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Home Appliances</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Computers</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}><strong>Cameras</strong></Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Kitchen Appliances</strong>
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/products"}><strong>Personal Care</strong></Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Smart Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Gaming</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Accessories</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>resQ Services</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Phones</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Office Products</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>HeathCare Devices</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Electrics</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Musical</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>
                    <strong>Instruments</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"/products"}>
           Beauty
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"/products"}>
                    <strong>Ayurveda Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Dabur</Link>
                </li>
                <li>
                  <Link to={"/products"}>Sri Sri Tattva</Link>
                </li>
                <li>
                  <Link to={"/products"}>kerala Ayurveda</Link>
                </li>
                <li>
                  <Link to={"/products"}>jiva Ayurveda</Link>
                </li>
                <li>
                  <Link to={"/products"}>Patanjali</Link>
                </li>
              </ul>
              <ul style={{ width: "190px" }}>
                <li>
                  <Link to={"/products"}>
                    <strong>Popular categories</strong>
                  </Link>{" "}
                </li>

                <li>
                  <Link to={"#"}>Herbal Juice</Link>
                </li>
                <li>
                  <Link to={"#"}>Herbal Juice</Link>
                </li>
                <li>
                  <Link to={"#"}>Chyawanparash</Link>
                </li>
                <li>
                  <Link to={"#"}>ayurvedic Immunity Boosters</Link>
                </li>
                <li>
                  <Link to={"#"}>Explore Popular Herbs</Link>
                </li>
                <li>
                  <Link to={"#"}>Herbal Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Top Health Concems</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Ayurvedic Respiratory care</Link>
                </li>
                <li>
                  <Link to={"#"}>Cough, Cold & Fever</Link>
                </li>
                <li>
                  <Link to={"#"}>Sexual Wellness</Link>
                </li>
                <li>
                  <Link to={"#"}>Bone, Joint and Muscle Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Stomach Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Diabetes Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Liver Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Mind Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Liver Care</Link>
                </li>
                <li>
                  <Link to={"#"}>Cardiac Care</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Unani Medicines</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Hamdard Unani</Link>
                </li>
                <li>
                  <Link to={"#"}>AMU Dawakhana</Link>
                </li>
                <li>
                  <Link to={"#"}>Rex Remedies</Link>
                </li>
                <li>
                  <Link to={"#"}>Dehivi Remedies</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Jewellery
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Homeopathy Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>SBL Homoeopathy</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Reckeweg</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Willmar Schwabe India</Link>
                </li>
                <li>
                  <Link to={"#"}>Adel Pekana</Link>
                </li>
                <li>
                  <Link to={"#"}>BAIN Homeopathy</Link>
                </li>

                <li>
                  <Link to={"#"}>Allen</Link>
                </li>
                <li>
                  <Link to={"#"}>Wheezal</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Willmar Schwabe Germany</Link>
                </li>
                <li>
                  <Link to={"#"}>Haslab</Link>
                </li>
                <li>
                  <Link to={"#"}>Medisynth</Link>
                </li>

                <li>
                  <Link to={"#"}>Boiron</Link>
                </li>
                <li>
                  <Link to={"#"}>Boiron</Link>
                </li>
                <li>
                  <Link to={"#"}>Bhandari</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Bakshi Bakson</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr Batra's</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul style={{ width: "220px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Homeopathy Popular Categories</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Homeopathic Care for Cold & Cough</Link>
                </li>
                <li>
                  <Link to={"#"}>Respiratory Wellness</Link>
                </li>
                <li>
                  <Link to={"#"}>Homeopathy Covid Essentials</Link>
                </li>
                <li>
                  <Link to={"#"}>Sexual Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Hair Care Products</Link>
                </li>
                <li>
                  <Link to={"#"}>Skin Care Products</Link>
                </li>
                <li>
                  <Link to={"#"}>Children’s Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Women’s Health</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Home Improvement
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "190px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Flash Deals</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Tata 1 mg Health Products</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Monsoon Store</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Trending now</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>New Arrivals on Tata 1MG</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Minimum 33% Off</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Popular Combo Deals</Link>
                </li>
              </ul>
            </div>
            <div className="vLine"></div>
            <div className="subDiv">
              <ul>
                <li>
                  <Link to={"#"}>
                    <strong>Deals of the Day</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Top Brands</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Accu-Chek</Link>
                </li>
                <li>
                  <Link to={"#"}>Ensure</Link>
                </li>
                <li>
                  <Link to={"#"}>Revital</Link>
                </li>
                <li>
                  <Link to={"#"}>Optimum Nutrition (ON)</Link>
                </li>
                <li>
                  <Link to={"#"}>Dr. Morepen</Link>
                </li>
                <li>
                  <Link to={"#"}>Pediasure</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Super savings</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
        <li>
          <Link className="link" to={"#"}>
            Sports, Toys & Luggage
          </Link>
          <span>
            <FiChevronDown />
          </span>

          {/* ================================================================= */}

          {/* sub menu */}
          <div className="subMenu_right">
            <div className="subDiv">
              <ul style={{ width: "235px" }}>
                <li>
                  <Link to={"#"}>
                    <strong>Covid-19 Self test kits</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Oxygen Cans & Concentrators Masks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Masks</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Sanitizers & Handwash Products</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Support Your Immunity</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Thermometer</strong>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <strong>Chyawanprash</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================== */}
        </li>
      
      </ul>
    </div>
  );
};

export default HeaderP3;
