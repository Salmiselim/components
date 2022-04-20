import React from "react";
import FullName from "./FullName";
import MyPic from "./ProfilePhoto"
import Adress from "./Address";
const App = () => (
 <>
 <div style={{backgroundColor:'grey',color:'red'}} >
   <MyPic />
   <FullName/>
   <Adress/>
   </div>
 </>
);
export default App;