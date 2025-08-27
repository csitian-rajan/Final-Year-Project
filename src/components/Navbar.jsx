import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
// import { DashBord } from "../pages/DashBord"; // not used, can remove

export const Navbar = () => {
    const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [Signup, setSignUp] = useState(false);

  const handleButtonToggle = () => {
    
    setShowMenu(!showMenu);
  };
 const handleOpenPopUp=(type)=>{
 if (type === "login") {
      setLogin(true);
      setSignUp(false);
    } else if (type === "signup") {
      setSignUp(true);
      setLogin(false);
    }
  };

  const handleLogin=()=>{
       navigate("/dashbord", { replace: true }); // redirects to student portal
       setLogin(false);
    setSignUp(false);

  }

  const handleClosePopup = () => {
    setLogin(false);
    setSignUp(false);
  };
 

  return (
    <header>
      <div className="container-nav">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to={"/"}>
              <h1>Quiz Platform</h1>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li ><NavLink to={"/about"}>About</NavLink></li>
              <li>
              <button className="nav-btn btn" onClick={()=>handleOpenPopUp("login")}>Get Started</button>
              {/* <button className="btn text-white" onClick={()=>handleOpenPopUp("signup")}><NavLink>Sign Up</NavLink></button> */}
              </li>
              {/* <li>
                <NavLink to={"/dashbord"}>
                  <button className="nav-btn btn">Student Portal</button>
                </NavLink>
              </li> */}
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle} className="btn">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Popup Login/Signup */}
        
        {login && (
       <div className=" container-login-popup fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ">
    {/* Popup Box */}
    <div className=" p-6 animate-fadeIn">
      
     
      {/* Your Form Here (unchanged) */}
      <section className="    rounded-xl border-2-10">
        {/* ⬇️ paste your existing form code inside this section */}
        <div class="">
      <div class=" flex flex-col items-center justify-center py-6 px-4">
        <div class="">
        

          <div class="container-login  sm:p-8 rounded-2xl bg-white border shadow-sm border-red-300">
            <h1 class="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
             {/* Close Button */}
      <button
        onClick={ handleClosePopup}
        className="relative  left-70 bottom-10 text-red-500  dark:hover:text-black"
      >
        ✕
      </button>

            <form class=" space-y-6">
              <div>
                <label class="text-slate-900  text-2xl mb-2 block">Email Id</label>
                <div class="relative flex items-center">
                  <input name="username" type="email" required class="w-full text-slate-900  h-15 text-2xl border border-slate-300 px-5 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter your email" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-slate-900 text-3xl mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-slate-900 h-15 text-2xl border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="  shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                  <label for="remember-me" class="remember  ml-3 block text-2xl text-slate-900">
                    Remember me
                  </label>
                </div>
                <div class="text-1xl">
                  <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold ">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="!mt-12">
                <button type="button" class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer" onClick={handleLogin}>
                  Sign in
                </button>
              </div>
              <p class="text-slate-900 text-sm !mt-6 text-center ">Don't have an account? <a href="javascript:void(0);" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold" onClick={()=>handleOpenPopUp("signup")}>Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        {/* Don't modify your form code, just put it here */}
      </section>
    </div>
  </div>
)}
 {Signup && (
       <div className=" container-login-popup fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ">
    {/* Popup Box */}
    <div className=" p-6 animate-fadeIn">
      
     
      {/* Your Form Here (unchanged) */}
      <section className="    rounded-xl border-2-10">
        {/* ⬇️ paste your existing form code inside this section */}
        <div class="">
      <div class=" flex flex-col items-center justify-center py-6 px-4">
        <div class="">
        

          <div class="container-login  sm:p-8 rounded-2xl bg-white border shadow-sm border-red-300">
            <h1 class="text-slate-900 text-center text-3xl font-semibold">Sign Up</h1>
             {/* Close Button */}
      <button
        onClick={handleClosePopup}
        className="relative  left-70 bottom-10 text-red-500  dark:hover:text-black"
      >
        ✕
      </button>

            <form class=" space-y-6">
              <div>
                <label class="text-slate-900  text-2xl mb-2 block">Email ID</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" required class="w-full text-slate-900  h-15 text-2xl border border-slate-300 px-5 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter Your Email" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-slate-900 text-3xl mb-2 block">Name</label>
                <div class="relative flex items-center">
                  <input name="password" type="text" required class="w-full text-slate-900 h-15 text-2xl border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter your name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                  </div>
                </div>
              <div>
                <label class="text-slate-900 text-3xl mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-slate-900 h-15 text-2xl border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
                <div>
                <label class="text-slate-900 text-3xl mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-slate-900 h-15 text-2xl border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-7 h-7 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="  shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                  <label for="remember-me" class="remember  ml-3 block text-2xl text-slate-900">
                    Remember me
                  </label>
                </div>
                <div class="text-1xl">
                  <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold ">
                    accept terms and Conditions?
                  </a>
                </div>
              </div>

              <div class="!mt-12">
                <button type="button" class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                  Create Account
                </button>
              </div>
              <p class="text-slate-900 text-sm !mt-6 text-center">Already have an account? <a href="javascript:void(0);" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold" onClick={()=>handleOpenPopUp("login")}>Login here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        {/* Don't modify your form code, just put it here */}
      </section>
    </div>
  </div>
)}

      </div>
    </header>
  );
};
