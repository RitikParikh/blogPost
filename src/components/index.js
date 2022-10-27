import React, {useState, useEffect} from 'react';
import  Navbar from './Navbar';
// import  Login from './Login';
import  Footer from './Footer';
import '../App.css';

function Basic() {
 const darkColor = "#1F2028", lightColor = "#FFF";
 const [mode,setMode] = useState("dark");
 useEffect(()=>{
  
 },[mode]);

 const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = darkColor;
  }
  else{
    setMode("light");
    document.body.style.backgroundColor = lightColor;
  }
 }

 
 const inverseColorMode = mode === "light" ? "dark" : "light";

  return (
    <>
      <Navbar title="Blog Post" about = "About" colorMode={mode} toggleMode = {toggleMode} inverseColorMode={inverseColorMode}/>
      {/* <Login title="Login to Blog Post"/> */}
      <div style = {{height: "12rem"}}></div>
      <Footer title="Blog Post" colorMode={mode} inverseColorMode={inverseColorMode}/>
    </>
  )
}

export default Basic