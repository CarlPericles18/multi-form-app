import React from "react"

export default function Personal(){
    return(
        <div>

            <div className="component border border-danger rounded-4 ms-4 me-4 p-4">
                <h1 className="display-1">Personal info</h1>
                <p className="lead text-start">Please provide your name, email address, and phone number</p>
                <div>
                     <h4 className=" text-success">Name</h4>
                     <input type="text" placeholder="e.g. Stephen King" className="px-2"></input>
                     <h4 className=" ">Email</h4>
                     <input type="email" placeholder="e.g. stephenking@lorem.com" className="px-2 "></input>
                     <h4 className="fs-5">Phone Number</h4>
                     <input type="number" placeholder="e.g. +1 234 567 890" className="px-2"></input>
                </div>
                

            </div>
           

        </div>

    )
}