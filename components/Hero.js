// components/Hero.js

const Hero = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br/> In deleniti eaque aut repudiandae et a id nisi.</p>
          <div style={{gap:"30px" , display:"flex", justifyContent:"center"}}>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost btn-outline btn-warning">Lets Get Started</button>
          </div>

        </div>
      </div>

    </div>
    
    );
  };
  
  export default Hero;