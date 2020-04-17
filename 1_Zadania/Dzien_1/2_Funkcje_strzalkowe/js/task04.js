const App = function () {
  this.websites = ["google", "twitter", "facebook"];
  this.links = [];
};

App.prototype.generateLinks = function () {

};

App.prototype.insertLinks = function () {

};

const app = new App();
app.generateLinks();
app.insertLinks();

console.log(app.links);
