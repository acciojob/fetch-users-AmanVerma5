import React from "react";

const DisplayInfo=({arr})=>{
    return(
           <>
                {
                    arr.map((data)=>{
                        return(
                            <div className="info">
                                <div>{data.first_name}</div>
                                <div>{data.last_name}</div>
                                <div>{data.email}</div>
                                <img src={data.avatar}/>
                            </div>
                        )
                    })
                }
          </>
    )
}


export default DisplayInfo;