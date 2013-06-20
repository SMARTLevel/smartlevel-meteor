var scores = new Meteor.Collection("Scores");

if (Meteor.isClient) {
    Meteor.Router.add({
      '/leaderboard/': 'leaderboard',
      '/home/': 'home',
      '/rewards/': 'rewards',
      '/aboutus/': 'aboutus',
      '/lessons/': 'lessons',
      '/lessons/algebra/': 'algebra',
      '/lessons/biology/': 'biology',
      '/lessons/arithmetic/': 'arithmetic',
      '/lessons/chemistry/': 'chemistry',
      '/lessons/cplusplus/': 'cplusplus',
      '/lessons/geometry/': 'geometry',
      '/lessons/html/': 'html',
      '/lessons/java/': 'java',
      '/lessons/mathquiz/': 'mathquiz',
      '/lessons/physics/': 'physics',
      '/lessons/sciencequiz/': 'sciencequiz'
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
