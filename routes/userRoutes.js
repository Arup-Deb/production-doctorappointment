const express = require("express")
const {
    loginController,
    registerController,
    authController,
    applyDoctorController, 
    getAllNotificationController,
    deleteAllNotificationController,
    getAlldoctorsController,
    bookappointmentController,
    bookingAvailabilityController,
    userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlelayers/authMiddleware");
//const applyDoctorController= require("../middlelayers")
//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)

//Notification Doctor || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController)

//Notification Doctor || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController)

//GET ALL DOCTOR
router.get('/getAllDoctors', authMiddleware, getAlldoctorsController)

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookappointmentController)

//Booking Avialability
router.post('/booking-availbility', authMiddleware, bookingAvailabilityController)

//Appointments Lists
router.get('/user-appointments',authMiddleware,userAppointmentsController)
module.exports = router;