
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, title: 'Bacon Wrapped Jalapeno Popper Stuffed Chicken', imgUrl: 'http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg', sourceUrl: 'http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html'},
        { id: 2, title: 'Buffalo Chicken Chowder', imgUrl: 'http://static.food2fork.com/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg', sourceUrl: 'http://www.closetcooking.com/2011/11/buffalo-chicken-chowder.html'},
        { id: 3, title: 'Zesty Slow Cooker Chicken Barbeque', imgUrl: 'http://static.food2fork.com/4515542dbb.jpg', sourceUrl: 'http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx'}
      ]);
    });
};