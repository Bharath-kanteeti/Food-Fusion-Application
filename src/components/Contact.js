const Contact = () => {
    return (
        <div>
            <h1 className="p-2 m-2 font-bold text-lg">Contact Us</h1>
            <form className="m-1">
                <input type="text" placeholder="Name" className="p-1 m-1 border border-black rounded-sm" />
                <input type="tel" placeholder="Contact number" className="p-1 m-1 border border-black rounded-sm" />
                <div>
                    <input type="email" placeholder="Email" className="p-1 m-1 border border-black rounded-sm" />
                    <div>
                        <h3 className="p-1 m-1">Complain</h3>
                        <input type="text"className="p-1 m-1 border border-black rounded-sm" />
                    </div>
                </div>
                <button className="p-3 my-4 mx-1 bg-zinc-500 text-white rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact