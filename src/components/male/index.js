import React from 'react'

function Male() {
    return (
        <div>
            <div className="">
                <div className="card mb-3" style={{"max-width": "540px"}}>
                    <div class="">
                    
                        <div className="">
                            <div className="card-body">
                                <label type="text" className="">Fresher of the year Male.</label>
                            </div>        
                            <div> 
                                <input type="radio" placeholder="Your email" name="select" className="border-0 m-3"></input>
                                <label>Mogunu</label>       
                            </div>

                            <div> 
                                <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" require></input>
                                <label>Kyari</label>       
                            </div>

                            <div> 
                                <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" ></input>
                                <label>John</label>       
                            </div>

                            <div> 
                                <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" ></input>
                                <label>Jason</label>       
                            </div>

                            <div> 
                                <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" ></input>
                                <label>Justin</label>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Male
