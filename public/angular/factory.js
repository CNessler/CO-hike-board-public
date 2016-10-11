// app.factory("HikeService", ['$http', function ($http) {
//   return {
//     all: function(){
//       return $http.get('https://co-hike-board.herokuapp.com/api/hikes').then(function (data) {
//         return data.data;
//       })
//     },
//     create: function (post) {
//       $http.post('https://co-hike-board.herokuapp.com/api/hikes', post);
//     },
//     update: function (comment) {
//       $http.post('https://co-hike-board.herokuapp.com/api/comment', comment);
//     },
//     upvote: function (post) {
//       $http.post('https://co-hike-board.herokuapp.com/api/upvote', post)
//     },
//     downvote: function (post) {
//       $http.post('https://co-hike-board.herokuapp.com/api/downvote', post)
//     }
//   }
// }])
app.factory("HikeService", ['$http', function ($http) {
  return {
    all: function(){
      return $http.get('https://co-hike-board.herokuapp.com/api/hikes').then(function (data) {
        return data.data;
      })
    },
    create: function (post) {
      $http.post('https://co-hike-board.herokuapp.com/api/hikes', post);
    },
    update: function (comment) {
      $http.post('https://co-hike-board.herokuapp.com/api/comment', comment);
    },
    upvote: function (post) {
      $http.post('https://co-hike-board.herokuapp.com/api/upvote', post)
    },
    downvote: function (post) {
      $http.post('https://co-hike-board.herokuapp.com/api/downvote', post)
    }
  }
}])
