



export async function getStatus() {

    try {

        const respons = await fetch("https://fortball-api.kindglacier-bd9579ed.norwayeast.azurecontainerapps.io/fotballapi/status");

        if (!respons.ok) {
            throw new Error(`http: ${respons.status}`)
        }


        const result = await respons.json();

        return result.response

    } catch (error) {

        console.log("feiled to fetch status")


    }

}



