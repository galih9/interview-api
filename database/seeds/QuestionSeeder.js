'use strict'

/*
|--------------------------------------------------------------------------
| QuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class QuestionSeeder {
  async run () {
    const date = new Date()
    const now = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    await Database.from('questions')
                  .insert([
                    {
                      number: 1,
                      description: "Apa makna pekerjaan buat Anda?",
                      type: "text",
                      timer: 3,
                      created_at: now,
                      updated_at: now
                    },
                    {
                      number: 2,
                      description: "warna apa yang anda sukai?",
                      type: "multiple select",
                      options: "merah,hitam,putih,kuning",
                      timer: 1,
                      created_at: now,
                      updated_at: now
                    },
                    {
                      number: 3,
                      description: "Darimana anda mengetahui ada lowongan kerja di perusahaan ini?",
                      type: "multiple choice",
                      options: "koran,sosial media,radio",
                      timer: 1,
                      created_at: now,
                      updated_at: now
                    },
                    {
                      number: 4,
                      description: "Ceritakan sedikit tentang anda",
                      type: "video",
                      timer: 10,
                      created_at: now,
                      updated_at: now
                    }
                  ])
  }
}

module.exports = QuestionSeeder
