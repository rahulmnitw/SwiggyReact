/**
    
    <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div>
    How to create this structure ?


 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
    React.createElement("h2", { id: "2nd child" }, "H2 heading as sibling"),
  ])
);

// const heading = React.createElement(
//     "h1",
//     { id: "heading" , xyz: "abc"},
//     "Hello World from React"
// );
// console.log(heading); //object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
