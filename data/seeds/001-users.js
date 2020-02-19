
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'CrazyCarpenter', password: 'dizMahPazzword'},
        {id: 2, username: 'CrazyKitty', password: 'boo'},
        {id: 3, username: 'rowValue3', password: 'notMahPazzword'}
      ]);
    });
};
