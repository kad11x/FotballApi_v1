



export async function getStatus()
{

    try {

        const respons = await fetch("https://localhost:7141/fotballapi/status");

        if (!respons.ok)
        {
            throw new Error( `http: ${respons.status}`)
        }
    

        const result = await respons.json();

        return result.response
        
    } catch (error) {

        console.log("feiled to fetch status")

        
    }
    
} 



