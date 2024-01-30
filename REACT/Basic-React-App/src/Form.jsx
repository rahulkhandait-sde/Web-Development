function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
}


export default function Form() {
    return (
        <form>
            <input placeholder="Write Something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}

