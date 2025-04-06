function navbar() {
    return (
        <>
            <div className = "flex flex-row justify-between m-5">
                <h1 className="p-2 text-2xl font-bold" >Artist John</h1>
                <div className="flex flex-row">
                    <p className="p-2 mr-10">Home</p>
                    <p className="p-2 mr-10">About me</p>
                    <p className="p-2 mr-10">Gallery</p>
                </div>

                <button className = "bg-green-700 text-white p-2 shadow-md rounded-full">
                    Contact
                </button>
            </div>

        </>
    )
}
export default navbar;