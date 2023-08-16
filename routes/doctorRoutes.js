const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlelayers/authMiddleware');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController, doctoAppointmentController, updateStatusController } = require('../controllers/doctorCtrl');


//POST SINGLE DOC INFO
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController)

//POST UPDATE PROFILE
router.post('/updateProfile',authMiddleware,updateProfileController )

//POST GET SINGLE DOC INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController)

//GET Appointments
router.get('/doctor-appointments', authMiddleware, doctoAppointmentController)

////POST UPDATE STATUS
router.post('/update-status', authMiddleware, updateStatusController);
module.exports = router