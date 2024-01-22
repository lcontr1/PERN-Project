import { useFetchSinglePlanQuery } from "../api/woodworkingApi"
import React from "react"
import { useParams } from "react-router-dom"


function SinglePlan() {
    const { planID } = useParams()
    const { data = {}, error, isLoading } = useFetchSinglePlanQuery(planID)

    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>
    }
    console.log(data)
    return (
        <div>
            <div key={ data.planID }>
            <h3>{data.title}</h3>
             <img src={data.imgUrl} alt={data.title}/>
{/* 
             <form>
                <label>
                    <input></input>
                </label>
             </form> */}
            </div>
        </div>
    )
}

export default SinglePlan