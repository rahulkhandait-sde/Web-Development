function handleClick() {
  console.log("Hello!");
}

function handleMouseOver(){
    console.log("Bye!");
}
function handleDblClick(){
    console.log("You Double Clicked!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        repudiandae numquam iusto ad sed vitae, nobis facere iste tempore atque
        dicta laborum quis possimus omnis corrupti quaerat quibusdam laboriosam
        nihil?
      </p>
      <button onDoubleClick={handleDblClick}>Double Click Me!</button>
    </div>
  );
}
