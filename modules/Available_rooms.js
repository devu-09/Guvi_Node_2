const mongo = require('../connention/connect');


module.exports.getRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("Available_Rooms").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.BookingRoom = async (req,res,next) => {
   try{
       var sam = await mongo.db.collection("Available_Rooms").findOne({Room_id: req.body.RoomID});
       console.log(sam);

       if(sam.length !=0)
       {
           try{
               let data = await mongo.db.collection("Booked_Details").insertOne(req.body);
               console.log(data);
               res.send(data);
               await mongo.db.collection("Available_Rooms").updateOne({Room_id: req.body.RoomID},{$set :{Booking_Status:"Booked"}})
               
           }
           catch(err){
                console.log(err);
                res.status(500).send(err);
           }
       }
       else
       {
           res.status(500).send("Invalid Room Id")
       }
   }
   catch(err){
       console.log(err);
       res.status(500).send(err);
   }
}

module.exports.BookedRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("Booked_Details").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.BookedCustomer = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("Booked_Details").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}