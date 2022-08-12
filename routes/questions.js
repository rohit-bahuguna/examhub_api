const express = require('express');
const {addQuestion , getQuestions , removeQuestion , getQuestionBySubject , getQuestionBySubjectId , editQuestion , searchQuestion} = require('../controllers/quesControllers')
const questionRouter = express.Router();


questionRouter.get('/getquestions' , getQuestions)


questionRouter.post('/addquestion' , addQuestion)



questionRouter.post("/removequestion/:qs_id" , removeQuestion)


questionRouter.post('/getquestionbysubject/' , getQuestionBySubject)

questionRouter.post('/getquestionbysubject/:subject_id' , getQuestionBySubjectId)

questionRouter.post('/editquestion' , editQuestion)

questionRouter.post('/searchquestion/:qs_id' , searchQuestion)



module.exports  = questionRouter ;