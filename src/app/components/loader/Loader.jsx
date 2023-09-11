import "./loader.css"
const Loader = () => {
  return (
<section className="w-full z-[999] h-screen fixed ">
<div className="flex w-full relative h-full ">
<div className="flex absolute z-10 w-full h-full opacity-75 bg-black"></div>
<div className="z-20 flex justify-center items-center w-full h-full">
<div className="cube">
                <div className="cube__face" id="cube__face--front">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--back">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--right">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--left">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--top">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>

                <div className="cube__face" id="cube__face--bottom">
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                    <span className="faceBox"></span>
                </div>
            </div>
            
</div>


</div>



</section>
  )
}

export default Loader