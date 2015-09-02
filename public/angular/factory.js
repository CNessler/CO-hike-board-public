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
//       console.log(comment, "COMMENT TO POST");
//       $http.post('http://localhost:3000/api/comment', comment);
//     }
//   }
// }])
