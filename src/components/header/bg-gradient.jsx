export default function BgGradient () {
    return (
        <div className="absolute inset-0 flex">
            <div className="w-full h-screen relative z-10 flex justify-center top-[-100px] mobile:top-[0px] mobile:pt-14">
                <div className="block w-[793px] mobile:w-[200px] h-[717px] mobile:h-[200px] top-[-85px] left-[608px] opacity-10 mobile:opacity-5 bg-gradient-to-r from-[#BAFFE7] to-[#A6FFE0] rounded-full"></div>
                <div className="absolute inset-0 backdrop-blur-[300px] mobile:backdrop-blur-[70px]"></div>
            </div>
        </div>
    )
}