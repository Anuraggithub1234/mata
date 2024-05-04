import React from 'react'
import MembersData from './membersData';

const MembersList = () => {
    return (
        <>

            <h2 className='centered-text' style={{ textAlign: "center", margin: "15px" }}>Commetee Members</h2>
            <div className='conatiner-fluid mt-5'>
                <div className='row text-center' style={{justifyContent:"space-evenly"}}>
                    {
                        MembersData.map((data) => {
                            return (
                                <div className='col-10 ' key={data.id} style={{width:"20%", marginBottom:"3%"}}>
                                    <div className=' p-2'>
                                        <div className='align-items-center'>
                                            <div className='image'><img src={data.url} className='rounded'  style={{ width: '200px', height: '180px' }} alt='...' />
                                                <h4 className='mb-0 mt-0 textLeft'>{data.name}</h4>
                                                <span className='textLeft'></span>

                                            </div>


                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}

export default function Members() {
    return (
        <div>
            <MembersList />
        </div>
    )
}
