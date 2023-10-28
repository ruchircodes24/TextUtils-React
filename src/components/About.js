import React from 'react'

export default function About(props) {
    let bodyStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(24 50 69)':'white',
    }

    let accordionStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(30 76 87)':'white',
    }
    
  return (
    <>
        <div className='container' style = {bodyStyle}>
            <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={bodyStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyse the Text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionStyle}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iure sequi impedit est asperiores eligendi iste sed maiores a debitis. Possimus repellat ullam officiis dolore eos commodi obcaecati quam quos?
            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={bodyStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionStyle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iure sequi impedit est asperiores eligendi iste sed maiores a debitis. Possimus repellat ullam officiis dolore eos commodi obcaecati quam quos?
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={bodyStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionStyle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iure sequi impedit est asperiores eligendi iste sed maiores a debitis. Possimus repellat ullam officiis dolore eos commodi obcaecati quam quos?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
