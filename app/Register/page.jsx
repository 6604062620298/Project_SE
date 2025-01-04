import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 bg-opacity-50 w-full max-w-sm shrink-0 shadow-2xl m-56 border-1">
            <form className="card-body">
              <div className="form-control">
                <h1 className="text-center text-3xl font-bold pb-5 text-white">Register</h1>

                <label className="label">
                  <span className="label-text text-white">Username</span>
                </label>
                <input type="email" placeholder="Username" className="input input-bordered" required />

                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label pt-4">
                  <label className="label-text-alt text-white">
                    <input type="checkbox"/> Remember me
                  </label>
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn glass text-white">Sign up</button>
              </div>
              <div>
                <h3 className="text-center label-text-alt py-2">
                  You have an account?
                  <a href="/Register" className="font-bold ps-2 text-white">Login</a>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
