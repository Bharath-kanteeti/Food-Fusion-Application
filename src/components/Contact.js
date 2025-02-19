const Contact = () => {
    return (
        <div>
            <h1 className="p-2 m-2 font-bold text-lg">Contact Us</h1>
            <form className="m-1">
                <input type="text" placeholder="Name" className="p-1 m-1 border border-black rounded-sm" />
                <input type="tel" placeholder="Contact number" className="p-1 m-1 border border-black rounded-sm" />
                <button className="p-1 m-2 bg-zinc-500 text-white rounded-sm">Submit</button>
            </form>
        </div>
    )
}

export default Contact