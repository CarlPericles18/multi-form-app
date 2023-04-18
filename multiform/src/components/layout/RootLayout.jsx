import{ NavLink, Outlet} from "react-router-dom"
import React from "react"
import Personal from "../Personal-info"
import AddOns from "../Add-ons"
import Plans from "../Plans"
import Payment from "../Payment"

export default function RootLayout(){
  const clicked = function(){
    if(nav.button.clicked){
        true
    }else{
        false
    }
  }
  const [page, setPage] = React.useState(0)

  const FormPages = ["Personal", "addOns", "Plans", "Payment"]  

  const PageDisplay = ()=>{
    if(page === 0){
      return <Personal/>
    }else if(page === 1){
      return <AddOns/>
    }else if(page ===2){
      return <Plans/>
    }else if (page ===3){
      return <Payment/>
    }
  } 
    return(
        <div>{PageDisplay()}
          <header>
            <nav role='navigation' className=""> 
                <NavLink to='/' className='li'><button>1</button></NavLink>
                <NavLink to='AddOns' className='li'><button >2</button></NavLink>
                <NavLink to='Plans' className='li'><button>3</button></NavLink>
                <NavLink to='Payment' className='li'><button>4</button></NavLink>
            </nav>
          </header>
          <main>
            <Outlet/>
          </main>
            <div className="nextBtn">
                <button
                 disabled ={page == 0}
                 onClick={()=>{
                  setPage((prevPage) => prevPage - 1)
                }}
                >Go Back</button>
                <button 
                 disabled ={page == FormPages.length-1}
                 onClick={()=>{
                  setPage((prevPage) => prevPage + 1)
                }}
                >Next Step</button>
            </div>
        </div>
    )
}