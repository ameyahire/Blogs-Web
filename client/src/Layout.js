import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.js"
export default function Layout(){
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
    );
}