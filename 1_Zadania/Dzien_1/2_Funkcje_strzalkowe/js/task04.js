const App = function () {
    this.websites = ["google", "twitter", "facebook"];
    this.links = [];
};

App.prototype.generateLinks = function () {
    this.websites.forEach(element => {
        this.links.push(`https://${element}.com`);
    })
};

App.prototype.insertLinks = function () {
    let ulLinks = document.querySelector('#task-4-menu');

  this.links.forEach((element, id) => {
        const liLinks = document.createElement("li");
        liLinks.innerText = element;
        ulLinks.appendChild(liLinks)
    })

};






const app = new App();
app.generateLinks();
app.insertLinks();

console.log(app.links);


// const generateLinks = function (elements) {
//   const links = [];
//   elements.forEach(function (elem) {
//     links.push(elem.innerText);
//   });
//   return links;
// };
// console.log(generateLinks(this.websites));
