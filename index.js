const h1 = React.createElement(
  "h1",
  {
    style: {
      color: "Orangered",
    },
  },
  "Main Heading"
);
const p1 = React.createElement("p", {}, "First div with para");
const div1 = React.createElement(
  "div",
  {
    style: {
      border: "1px solid black",
    },
  },
  p1
);
const p2 = React.createElement("p", {}, "Second div with para and anchor");
const anchor1 = React.createElement("a", { href: "#" }, "Anchor 1");

const div2 = React.createElement(
  "div",
  {
    style: {
      border: "1px solid black",
    },
  },
  [anchor1, p2]
);

const p3 = React.createElement("p", {}, "Last div with Paragraph");
const div3 = React.createElement(
  "div",
  {
    style: {
      border: "1px solid black",
    },
  },
  p3
);

const main = React.createElement(
  "div",
  {
    style: {
      fontSize: "2rem",
    },
  },
  [h1, div1, div2, div3]
);

ReactDOM.render(main, document.getElementById("root"));
