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
    
    return (
        <>
        <h2 style={{fontSize: '75px'}}>Plans created by amazing Women Woodworkers</h2>
            {data.map((plan) => {
                return (
                    <div className='plansBox' key={plan.planID}>
                        <h3 style={{fontWeight: 'bold'}}>{plan.title}</h3>
                        <img src={plan.imgUrl} alt={plan.title}/>
                        <nav>
                            <Link style={{ backgroundColor: '#e3d477', fontWeight: 'bold', color: '#e8b38c', lineHeight : 5, padding: 20 }} to={`/plans/${plan.planID}`}>Plan Details</Link>
                        </nav>
                    </div>
                )
                })
            }
        </>
    )
        
}

export default Plans


