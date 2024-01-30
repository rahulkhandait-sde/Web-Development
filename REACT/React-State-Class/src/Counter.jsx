export default function Counter() {
    let count =0;
    function increment() {
        count++;
        console.log(count);
    }
    return (
        <>
        <h1>States in React</h1>
        </>
    );
}