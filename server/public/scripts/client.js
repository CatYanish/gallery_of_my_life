var myApp = angular.module('myApp', []);
myApp.controller('GalleryController', function() {
  var gallery = this;

//contains all photo urls and descriptions, with like counter
  gallery.pictures = [
    { url : "images/WithThePadres.png", visible: true, description: "I'm really grateful for my parents! They've supported me in all my endeavors for my whole life, and we have a lot of happy memories together.", likes: 0, comments: [] },
    { url : "images/MeandPabs.png", visible: true, description: "It's always good to have someone to be weird and have fun with. This is me and Pablo having fun and being weird ", likes: 0, comments: [] },
    { url : "images/mountainclimbers.jpg", visible: true, description: "Climb the mountain because it's there! Here, my friend and I struck a pose in the middle of a 17 hour hike! We are intense!", likes: 0, comments: []},
    { url : "images/RainbowCode.png", visible: true, description: "NERD ALERT: I like to play with programming languages to make things like this webpage =]", likes: 0, comments: []},
    { url : "images/JanieDog.png", visible: true, description: "Dogs are awesome. Here is my family dog.", likes: 0, comments: []},
    { url : "images/Korea.jpg", visible: true, description: "Teaching English for a year in South Korea was one of the best life decisions I have ever made. Look at these cuties! White belt at English, but black belt at awesome.", likes: 0, comments: [] },
  ]; //


//on click, the image will toggle with the description, so the viewer can either read the
//info or check out the photo.
  gallery.toggle = function(picture) {
    console.log(picture);
    picture.visible = !picture.visible;
  };

  gallery.likes = function(picture) {
    picture.likes += 1;
  };

  gallery.addComment = function(picture, comment) {
    console.log("this is the comment", comment);
    console.log("pesky picture", picture.comments);
    picture.comments.push(comment);
    console.log(picture.comments);
    console.log(gallery.pictures);
  }


}); //end of controller
