

import React from 'react'
export default async function page() {

    const response = await fetch(`${process.env.APP_BASE_URL}/api/test`);
    const data = await response.json() || [];
    return (
        <div>
            users
            {data?.length && data?.map((curr, idx) => <h1 key={idx}> UserName: <span style={{ textTransform: "uppercase" }}>{curr?.name}</span> </h1>)}
        </div>
    )
}



