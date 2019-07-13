'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number', 10).notNullable()
      table.text('description')
      table.string('type',80).notNullable()
      table.string('options').notNullable()
      table.string('answer',80).notNullable()
      table.integer('timer').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
