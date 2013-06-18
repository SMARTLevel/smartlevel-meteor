var scores = new Meteor.Collection("Scores");

if (Meteor.isClient) {
    Meteor.Router.add({
      '/leaderboard/': 'leaderboard',
      '/home/': 'home',
      '/rewards/': 'rewards',
      '/lessons/': 'lessons',
      '/lessons/algebra/': 'algebra',
      '/lessons/biology/': 'biology'
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
