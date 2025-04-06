function gallery() {
    return (
        <>
            <div className = "flex 2xl:flex-row 2xl:justify-center sm:flex-col sm:items-center  mt-100">
                <img className="max-h-100 max-w-100" src="src/image/LegoMan.png" alt="lego man"/>

                <section className = "flex flex-col ">
                    <article className="break-words max-w-sm sm:mt-5">
                        <h1 className="text-5xl font-bold">About me</h1>
                        <p className="text-3xl font-bold mt-3">Artist & Designer</p>
                        <p className="text-l font-bold mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at beatae consequatur dignissimos dolores expedita fugit ipsam laboriosam molestias necessitatibus odit provident quaerat, quasi sapiente sequi similique tempore totam vero!</p>
                    </article>

                    <button className="bg-green-300 rounded-full max-w-25 shadow-md mt-5">Read More</button>
                </section>
            </div>
        </>
    )
}
export default gallery;