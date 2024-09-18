

import React from 'react'
export default async function page() {
    const response = await fetch(`${process.env.APP_BASE_URL}/api/test`);
    const data = await response.json() || [];
   
    return (
        <div>
            {data?.map((curr, idx) => <h1 key={idx}> UserName: <span style={{ textTransform: "uppercase" }}>{curr?.name}</span> </h1>)}
        </div>
    )
}



// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const UserPage = () => {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         async function getData() {
//             const response = await fetch(`${process.env.APP_BASE_URL}/api/test`);
//             const responseData = await response.json() || [];
//             // setData(responseData || [])
//             console.log(responseData);
//         }
//         getData()
//     }, [])

//     return (
//         <div>
//             <div>
//                 Users
//                 {data?.map((curr, idx) => <h1 key={idx}> UserName: <span style={{ textTransform: "uppercase" }}>{curr?.name}</span> </h1>)}
//             </div>
//         </div>
//     )
// }

// export default UserPage

