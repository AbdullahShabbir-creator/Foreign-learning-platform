const express = require('express');

const {
  postResult,
  getResultsByUserId,
  getResultById,
  deleteResultById,
  deleteAllResultsByUserId
} =require( '../controllers/Result.js')

const router = express.Router();

router.post('/', postResult);
router.get('/user/:userId', getResultsByUserId);
router.get('/:resultId', getResultById);
router.delete('/:resultId', deleteResultById);
router.delete('/user/:userId', deleteAllResultsByUserId);

module.exports=router