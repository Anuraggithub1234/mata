import React from 'react'

export default function About () {

  const myStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '1%'
  };
  return (
    <>
     <h2 className='centered-text' style={{ textAlign: "left", margin: "15px" }}>About</h2>
    
    
    <div className='text-center' style={myStyles}>
       <div className="col-10">
          <img
            src="images/gallery/image3.jpg"
            alt="..."
            className="gallery-image"
            style={{ width: '200px', height: '150px' }} />
          <p>this is caption   DDJHHID    SJSSISIS   DDASSDJDNDJSD SDDISNISSD DDNDIS ASDASDASDSISAD SAS SDJIS S SBU J JBJD SD SAUI</p>
        </div>
    </div>
    </>
  )
}
