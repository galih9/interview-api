'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OptAnswerSchema extends Schema {
  up () {
    this.create('opt_answers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('opt_answers')
  }
}

module.exports = OptAnswerSchema
