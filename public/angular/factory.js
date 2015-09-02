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
    upvote: function () {
      $http.post('https://co-hike-board.herokuapp.com/api/upvote')
    }
    downvote: function () {
      $http.post('https://co-hike-board.herokuapp.com/api/downvote')
    }
  }
}])
// app.factory("HikeService", ['$http', function ($http) {
//   return {
//     all: function(){
//       return $http.get('http://localhost:3000/api/hikes').then(function (data) {
//         return data.data;
//       })
//     },
//     create: function (post) {
//       $http.post('http://localhost:3000/api/hikes', post);
//     },
//     update: function (comment) {
//       $http.post('http://localhost:3000/api/comment', comment);
//     },
//     upvote: function (post) {
//       console.log('post', post);
//       $http.post('http://localhost:3000/api/upvote', post)
//     },
//     downvote: function (post) {
//       $http.post('http://localhost:3000/api/downvote', post)
//     }
//   }
// }])
