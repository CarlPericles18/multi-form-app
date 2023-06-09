import React from "react"

export default function Payment(){
    return(
        <div>
            <div className="container-lg m-5">
                <h2>Basic</h2>
                <div className="row">
                    <div className="col-sm-4 col-lg-6">
                        <div className="p-5 bg-danger text-light">col 1</div>
                    </div>
                    <div className="col-sm-4 col-lg-3">
                        <div className="p-5 bg-danger text-light">col 2</div>
                    </div>
                    <div className="col-sm-4 col-lg-3">
                        <div className="p-5 bg-danger text-light">col 3</div>
                    </div>
                </div>
                <h2>Justify content</h2>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                            <div className="p-5 bg-success text-light">col 4</div>
                    </div>
                    <div className="col-md-3">
                            <div className="p-5 bg-success text-light">col 4</div>
                    </div>  
                    <div className="col-md-3">
                            <div className="p-5 bg-success text-light">col 4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}