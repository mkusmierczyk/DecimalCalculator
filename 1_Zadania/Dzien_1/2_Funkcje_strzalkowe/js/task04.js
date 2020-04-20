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


