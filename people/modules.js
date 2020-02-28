const db = require('../data/dbConfig.js');

module.exports= {
    all,
    add,
    remove,
}

function all () {
    return db('people')
}

function add(person){
    return db('people')
    .insert(person, "id")
}

function remove(id) {
    return db('people')
      .where('id', id)
      .del();
  }