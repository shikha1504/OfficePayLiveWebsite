import React,{useState} from 'react'
import '../Css/Dashboard.css'
import  DashBoardsideLogo  from '../Images/Dashboard-side-logo.png'
import DashboardSideicon1 from '../Images/Dashboard-sidebar-icon-2.png'
import DashboardSideicon3 from '../Images/Dashboard-sidebar-icon-3.png'
import DashboardSideicon5 from '../Images/Dashboard-sidebar-icon-5.png'
import { Navigate, useNavigate } from 'react-router-dom'

function DashBoardSideBarOffice(props) {

   const [selecttab,setselecttab] = useState(props.dashboardboolean) 
   const [selecttabthree, setselecttabthree] =useState(false)
   const navigate =useNavigate()
   const handleDashboard=(value)=>{
    if(value==='Dashboard'){
       navigate('/DashBoardOffice')
    }
    else if(value==='Logout'){
       navigate('/')
    }
   }
  return (
    <div className='dashboard-sidebar-inner-wrapper'>
     <img src={DashBoardsideLogo} onClick={()=>{ navigate('/') }}/>
       <ul> <li onClick={()=>{
            setselecttab(true)
            setselecttabthree(false) 
            handleDashboard('Dashboard')
    }}  className={selecttab?`selected`:''}> {selecttab ?<img src={DashboardSideicon5}/>:<img src={DashboardSideicon1}/> }  DashBoard </li>

     <li onClick={()=>{  setselecttab(false)
                          setselecttabthree(true) 
                          handleDashboard('Logout')
                        }} 
        className={selecttabthree?`selected`:''} > <img src={DashboardSideicon3}/>  Logout </li>
     </ul>
    
    </div>
  )
}

export default DashBoardSideBarOffice