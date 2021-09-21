import React from 'react'

function Exco() {
    return (
        <div className="">
        <div className="card mb-3" style={{"max-width": "540px"}}>
            <div class="">
                    
                <div className="ms-auto">
                    <div className="card-body">
                        <label type="text" className="">Exco of the year.</label>
                    </div>        
                       <div> 
                            <input type="radio" placeholder="Your email" name="select" className="border-0 m-3"></input>
                            <label>Mustapha Rufai</label>       
                        </div>

                        <div> 
                            <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" require></input>
                            <label>Kofo Aliu</label>       
                        </div>

                        <div> 
                            <input type="radio" placeholder="Your email" name="select" className="border-0 m-3" ></input>
                            <label>Kuna Saturn</label>       
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Exco
