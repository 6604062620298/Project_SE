import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Drawer Layout */}
        <div className="drawer">
          {/* Toggle Drawer */}
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          {/* Main Content */}
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-100 p-4 shadow-md">
              <div className="flex-none">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
                
              </div>
              
              <div className="flex-1 text-3xl font-bold p-2">Sigma Boy</div>
              <div className="flex-none">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
                  >
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                  </ul>

                </div>
              </div>
            </div>

            {/* Children Content */}
            <main className="p-6">{children}</main>
          </div>

          {/* Sidebar Content */}
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-4 flex flex-col items-center">
              {/* Profile Image */}
              <img
                className="w-36 h-36 rounded-full object-cover mt-4"
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />

              {/* Profile Name */}
              <div className="m-4 text-center">
                <div className="text-2xl font-bold">นาย จุฑาวัชร บุษษะ</div>
              </div>

              {/* Sidebar Menu */}
              <li className="w-full">
                <Link href="/" className="hover:bg-base-300 rounded-lg">
                  หน้าแรก
                </Link>
              </li>
              <li className="w-full">
                <Link href="/about" className="hover:bg-base-300 rounded-lg">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li className="w-full">
                <Link href="/contact" className="hover:bg-base-300 rounded-lg">
                  ติดต่อเรา
                </Link>
              </li>
              <div className="pt-72">
                <button className="btn btn-outline btn-primary">
                  <Link href='Login'>Login</Link>
                </button>
              </div>

            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
