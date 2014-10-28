'use strict';

angular.module('myresumepageApp')
  .controller('BlogCtrl', function ($scope) {
    // console.log(posts);
    // $scope.title = posts.title;
    // $scope.author = posts.author;
    // $scope.date = posts.date;
    // $scope.body = posts.body;
    // $scope.newPost = {
    // 	title: $scope.newTitle,
    // 	author: $scope.newAuthor,
    // 	date: $scope.newDate,
    // 	body: $scope.newBody
    // };
    // $scope.submitPost = function(){
    // 	console.log($scope.newPost);
    // 	Blogservice.postPost($scope.newPost);
    // }
    $scope.originalText = "Welcome to my about page! I'm a husband, about to be a new father, and I love life! Scroll around to learn a little bit about me!"; 
    $scope.myText = "Hi! I'm a young man, about to be a new father, and I love life! Scroll around to learn a little bit about me!";
    $scope.jordanText = "The first and foremost part of my life is my wonderful wife, Mary. We met in high school and started dating in collage. She is the sweetest, kindest most perfect thing in all the world. Every good trait I have I keep because of her.";
    $scope.babyText = "Pink! that's right! we are having a baby girl! We are thinking she will be our little Hazel Anne! I dream about her all the time, it's my favorite thing about sleeping.";
    $scope.familyText = "My family is extremely important to me; I love our yearly camping trip to Jackson, family dinners, and hikes!";
    $scope.ultimateText = "I started playing Ultimate in high school; because I had asthma growing up this was the first sport I ever fell in love with! It still is, we get friends and family over for a game every Saturday morning.";
    $scope.starcraftText = "I'm kind of nerd. I don't play a lot of video games but man, I love me some starcraft! If you want to play with me my screen name is [Kazuko]Windex. I'ld be happy to play with you!";
    $scope.chessText = "Chess in my mind, is the worlds best strategy game. It's totally even, no luck involved. I played chess a lot in junior high school and really started to get into it.";
    $scope.sandersonText = "My favorite auther, Brandon Sanderson: Writer of Mistborn, Elantris, and the Stormlight Archive. Enough Said. (unless you don't know these books, then you have some serious reading to do! You won't regret it!)";
    $scope.WORText = "Words of Radiance, book 2 in the Stormlight Archive, is currently my favorite book. In this book there is epic magic, Brightlords and Brightladies,love,  and betrayal. Seroiusly folks, it was amazing!";
    $scope.casaText = "Casa Salsa is probably my favorite resturant. Forget about Cafe Rio, and come check out this hidden gem of Spanish Fork!";
    $scope.croquetText = "Croquet is one of my favorite pass times. We are croquet folk at my house and not ashamed!"

  });
