'use strict';

angular.module('myresumepageApp')
  .service('Blogservice', function Blogservice($q, $http, $location) {
    
    // return {
    // 		getPost: function(){
    //             var postType = $location.url().split("?");
    //             var postName = "";
    //             // if postType.length > 1 use a method with postType[postType.length-1]
    //             if (postType.length > 1){
    //                 postName = "/"+postType[1];
    //                 console.log(postName);
    //             }
    // 			var deferred = $q.defer();
    // 			$http({
    //                 method: 'GET',
    //                 url: 'http://localhost:8888/posts'+postName
    //                 }).success(function(data, status, headers, config){
    //                     deferred.resolve(data);
    //                 }).error(function(data){
    //     			     deferred.reject(data);
    //                 });
    //             return deferred.promise;
		  //   },
    //         postPost : function(postObject){
    //             $http.post("http://localhost:8888/posts", postObject).success(function(data){
    //                 alert(data);
    //             });
    //         }

	// }
    
  });
