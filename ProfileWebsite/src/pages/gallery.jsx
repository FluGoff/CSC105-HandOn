function gallery() {
    return (
        <>
            <div className="flex flex-col items-center mt-100">
                <h className="text-center text-5xl font-bold">Gallery</h>
                <div className = "grid 2xl:grid-cols-3 sm:grid-cols-2">
                    <img src="src/image/l1.png" alt="lego1" className="max-w-70"></img>
                    <img src="src/image/l2.png" alt="lego2" className="max-w-70"></img>
                    <img src="src/image/l3.png" alt="lego3" className="max-w-70"></img>
                    <img src="src/image/l4.png" alt="lego4" className="max-w-70"></img>
                    <img src="src/image/l5.png" alt="lego5" className="max-w-70"></img>
                    <img src="src/image/l6.png" alt="lego6" className="max-w-70"></img>
                </div>
            </div>

        </>
    )
}
export default gallery;