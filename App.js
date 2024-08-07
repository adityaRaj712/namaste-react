
const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, [
    React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag")
    ])
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);