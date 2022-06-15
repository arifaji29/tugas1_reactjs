import React, {Component} from "react";
import MenuUtama from "../src/page/MenuUtama";
import MenuKontak from "../src/page/MenuKontak";
import MenuProduk from "../src/page/MenuProduct";
import TentangKami from "../src/page/TentangKami";




const Header =()=>{
  return(
  <div>
    <h1>Ini Halaman Header</h1>
    </div>
  );
}

const Footer =()=>{
  return(
  <div>
   <h1>Ini Halaman Footer</h1>
    </div>
  );
}




class app extends Component{
  render(){
    return(
      <div>
      <Header/>
      <MenuUtama/>
      <MenuKontak/>
      <MenuProduk/>
      <TentangKami/>
      <Footer/>
      </div>
     
    );
  }
}

export default app;