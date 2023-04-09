import{ NavLink, Outlet} from "react-router-dom"
import React from "react"

export default function RootLayout(){
  const clicked = function(){
    if(nav.button.clicked){
        true
    }else{
        false
    }
  }
    
    return(
        <div>
          <header>
            <nav role='navigation' className="nav"> 
                <NavLink to='/' className='li'><button style={clicked ? {backgroundColor: 'hsl(228, 100%, 84%)'}:{backgroundColor:'transparent'}}>1</button></NavLink>
                <NavLink to='AddOns' className='li'><button >2</button></NavLink>
                <NavLink to='Plans' className='li'><button>3</button></NavLink>
                <NavLink to='Payment' className='li'><button>4</button></NavLink>
            </nav>
          </header>
          <main>
            <Outlet/>
          </main>
         
        </div>
    )
}