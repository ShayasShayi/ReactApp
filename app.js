const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag here"),
    React.createElement("h2", {}, "H2 tag here"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 tag here"),
    React.createElement("h2", {}, "H2 tag here"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
