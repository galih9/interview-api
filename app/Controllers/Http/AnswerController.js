'use strict'
const Answer = use('App/Models/Answer')

class AnswerController {
  async store ({ request, response }) {
    const reqAnswer = request.all()
        const answer = new Answer()
          answer.question_id = reqAnswer.question_id
          answer.user_id = reqAnswer.user_id
          answer.answer = reqAnswer.answer
          answer.attachment = reqAnswer.attachment
          
        try {
            await answer.save()
            return response.status(201).json({message:'succes', data:answer})            
        } catch (error) {
            response.send({
                error: true,
                message: error.message
            })
        }
  }
}

module.exports = AnswerController
