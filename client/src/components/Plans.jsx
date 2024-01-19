import { useFetchPlansQuery } from "../api/woodworkingApi"

const Plans = () => {
    const { data = {}, error, isLoading } = useFetchPlansQuery()

        
    if (isLoading) {
        return <div>Loading...</div>
    } if (error) {
        return <div>Error: {error.message}</div>
    }

    console.log(data)
    console.log(data[0].title)
    return (
        <div>
    
        </div>
    )
}

export default Plans