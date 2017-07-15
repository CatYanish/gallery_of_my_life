console.log('js sourced');

var myApp = angular.module('myApp', []);


myApp.controller('GalleryController', function() {
  var gallery = this;

  gallery.pictures = [
    { url : "images/MountainView.jpg", visible: true, description: "this is a photo"},
    { url : "images/Korea.jpg", visible: true, description: "a photo"},
    { url : "images/MountainView.jpg", visible: true, description: "a photo"},
    { url : "images/MountainView.jpg", visible: true, description: "a photo"},
    { url : "images/MountainView.jpg", visible: true, description: "a photo"},
    { url : "images/MountainView.jpg", visible: true, description: "a photo"},
  ]; //


  gallery.description = [
    {description: "this is a photo"},
    {description: "this is a photo"},
    {description: "this is a photo"},
    {description: "this is a photo"},
    {description: "this is a photo"},
    {description: "this is a photo"},
  ];

  gallery.description = function(picture) {
    description.visible = !descrition.visible;
  };

  gallery.toggle = function(picture) {
    console.log(picture);
    picture.visible = !picture.visible;
  };





}); //end of controller
