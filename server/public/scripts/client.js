console.log('js sourced');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', function() {
  var gallery = this;

  gallery.pictures = [
    { url : "images/MountainView.jpg", visible: true, description: "this is a photo", likes: 0 },
    { url : "images/Korea.jpg", visible: true, description: "a photo", likes: 0 },
    { url : "images/MountainView.jpg", visible: true, description: "a photo", likes: 0},
    { url : "images/MountainView.jpg", visible: true, description: "a photo", likes: 0},
    { url : "images/MountainView.jpg", visible: true, description: "a photo", likes: 0},
    { url : "images/MountainView.jpg", visible: true, description: "a photo", likes: 0 }
  ]; //



  gallery.toggle = function(picture) {
    console.log(picture);
    picture.visible = !picture.visible;
  };

  gallery.likes = function(picture) {
    picture.likes += 1;
  };


}); //end of controller
