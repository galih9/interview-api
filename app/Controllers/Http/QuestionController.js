"use strict";

const Question = use("App/Models/Question");
class QuestionController {
  async index({ request, response }) {
    try {
      return Question.all();
    } catch (error) {
      response.status(404).json({ message: "Resource not found" });
    }
  }

  async show({ request, response, params }) {
     try {
            const {number} = request.get('number')
            const question = await Question.findBy({ number: number })
            const countAll = await Question.query().count()
            let question_count = countAll[0]['count']
            if (!question) {
                return response.status(404).json({"message": 'Resource not found'})
            }
            return response.json(question)
        } catch (error) {
            return response.status(400).json({"message": 'failed'})
        }
      }

  async store({ request, response }) {
      const req = request.only(["number", "description", "type", "options", "answer", "timer",]);
      const question = new Question();
      
      question.number = req.number;
      question.description = req.description;
      question.type = req.type;
      question.options = req.options;
      question.answer = req.answer;
      question.timer =req.timer;

      try {
        await question.save()
        return response.status(201).json(question)
      } catch (error) {
        return response.status(404).json({"message":'failed'})
      }
    }
    
  }


module.exports = QuestionController;
