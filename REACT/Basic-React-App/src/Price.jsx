export default function Price({oldPrice, newPrice}) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "35px",
    width: "220px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  return (
    <div className="Price" style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
