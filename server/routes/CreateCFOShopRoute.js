//Create CFO Shop Rounting file
const express = require("express");
//const app = require("../config/app");
const CfoShopDbServices = require("../database/CFOShopDbServices");
const router = express.Router();
const fileUpload = require("express-fileupload");
const blob = new Blob();

router.post("/InsertCFOShop", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const cfoShopName = req.body.cfoShopName;
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMiddleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const food_tag = req.body.cfoFoodTag;
  const website_link = req.body.cfoWebsite;
  const review_score = 1;

  const cfo_menu = req.body.cfoMenu.toString("base64");
  //console.log(req.files);

  const address1 = req.body.cfoAddress1;
  const address2 = req.body.cfoAddress2;
  const state = req.body.cfoState;
  const city = req.body.cfoCity;
  const zipcode = req.body.cfoZip;
  const phone_number = req.body.cfoPhoneNumber;
  const emai_address = req.body.cfoEmail;

  const insertVariables = [
    cfoShopName,
    cfoFirstName,
    cfoMiddleName,
    cfoLastName,
    food_tag,
    website_link,
    review_score,
    cfoMenu,
    address1,
    address2,
    state,
    city,
    zipcode,
    phone_number,
    emai_address,
  ];

  //const Adrress = [address1, address2, state, city, zipcode];

  console.log(insertVariables);

  //const result = db.updateCFOLastName(cfoLastName, 99);

  const result = db.createNewCFOShop(insertVariables);
  //const result = db.updateCFOAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));

  result.catch((err) => console.log(err));
});

///Function purpose to get CFO shop information by ID
router.get("/GetCFOShopName", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const fetchCFOId = req.params.id;
  const result = db.readCresult.then((CFOShop) => res.send(CFOShop));
  FOShopName(fetchCFOId);
  result.then((CFOShopName) => res.json({ CFOShopName: CFOShopName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get CFO shop information by ID
router.get("/GetCFOShop/", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  //const fetchCFOId = req.params.id;
  const fetchCFOId = 152;

  const result = db.readCFOShop(fetchCFOId);
  result.then((CFOShop) => res.send(CFOShop));
  result.catch((err) => console.log(err));
});

module.exports = router;