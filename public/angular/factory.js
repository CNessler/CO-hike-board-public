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
      $http.post('https://co-hike-board.herokuapp.com/comment', comment);
    }
  }
}])
