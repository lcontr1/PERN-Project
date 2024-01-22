import { useFetchPlansQuery } from "../api/woodworkingApi"
import React from "react"
import { Link } from "react-router-dom"

const Plans = () => {
    const { data = {}, error, isLoading } = useFetchPlansQuery()

        
    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        return <div>Error: {error.message}</div>
    }
    console.log(data)
    
    return (
        <>
        <h2>these are the plans:</h2>
            {data.map((plan) => {
                return (
                    <div key={plan.planID}>
                        <h3>{plan.title}</h3>
                        <img src={plan.imgUrl} alt={plan.title}/>
                        <nav>
                            <Link to={`/plans/${plan.planID}`}>Plan Details</Link>
                        </nav>
                    </div>
                )
                })
            }
        </>
    )
        
}

export default Plans


