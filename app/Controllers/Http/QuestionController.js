'use strict'

const Question = use('App/Models/Question')
class QuestionController {
  async index ({ request, response, view }) {
    try {
      return Question.all()
    } catch (error) {
      response.send({
        error: true,
        message: error.message
      })
    }
  }

}

module.exports = QuestionController
