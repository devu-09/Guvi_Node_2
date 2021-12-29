var express = require("express");
var router = express.Router();
var Rooms = require('../modules/Available_rooms');



router.get("/get", Rooms.getRooms);
router.post("/booking",Rooms.BookingRoom );
router.get("/BookedRooms", Rooms.BookedRooms);
router.get("/BookedCustomerDetails", Rooms.BookedCustomer);

module.exports = router;