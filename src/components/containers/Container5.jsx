import React from 'react'
import {useState} from 'react'
function Container5() {
    const [activeTab,setActiveTab]=useState("A")
  return (
    <div className="Card">
        <div className="tab-header">
            <button  className={`tab-btn ${activeTab === "A" ? "active" : ""}` } onClick={()=>setActiveTab("A")}>Education</button>
            <button  className={`tab-btn ${activeTab === "B" ? "active" : ""}` } onClick={()=>setActiveTab("B")}>Hobbies</button>
        </div>
        <div className="tab-content">
            {activeTab==="A" && (<p><b>Engineering(B.tech in CSE)</b>- Nagesh karajgi orchid college of engineering,Solapur <br></br><b>CGPA</b> - 7.86
            <br></br>
            <hr></hr>
            <b>Diploma(Computer Technology)</b>- Government Polytechnic,Solapur <br></br><b>Marks</b> - 88.80%
            <br></br>
            <hr></hr>
            <b>School</b>- Little Flower Convent High,Solapur <br></br><b>Marks</b> - 89.80%
            </p>
              
            
              
            )
            }
            {activeTab==="B" && <ul>
                <li>Coding Challenges</li>
                <li>Watching and Playing Sports</li>
                <li>Reading Manga</li>
                <li>Music</li>
                </ul>}
        </div>
    </div>
  )
}

export default Container5