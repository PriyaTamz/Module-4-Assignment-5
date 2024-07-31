async function foo() {
    try {
        var result = document.getElementById("results");
        result.innerHTML = `<p"><b>Loading data...</b></p>`;
        
        var response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        var data = await response.json();
        console.log(data);

        if (data.objectIDs && data.objectIDs.length > 0) {
            var objectID = data.objectIDs[0]; 
            var objectResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
            if (!objectResponse.ok) {
                throw new Error(`HTTP error! status: ${objectResponse.status}`);
            }

            var objectData = await objectResponse.json();
            console.log(objectData);

            result.innerHTML = `
                <div class="title">
                    <h1 class="header">${objectData.title}</h1>
                    <p class="date">${objectData.objectDate}</p>
                </div>
                <div class="card mb-4" style="width: 45rem;">
                <div class="card-body">
                <p class="card-text"><b>Title:</b> ${objectData.title}</p>
                    <p class="card-text"><b>Artist Name:</b> ${objectData.artistDisplayName}</p>
                    <p class="card-text"><b>Artist Bio:</b> ${objectData.artistDisplayBio}</p>
                    <p class="card-text"><b>Role:</b> ${objectData.artistRole}</p>
                    <p class="card-text"><b>Nationality:</b> ${objectData.artistNationality}</p>
                    <p class="card-text"><b>Medium:</b> ${objectData.medium}</p>
                    <p class="card-text"><b>Credit Line:</b> ${objectData.creditLine}</p>
                    <p class="card-text">
                        <b>Artist Wikipedia URL:</b> 
                        <a href="${objectData.artistWikidata_URL}" target="_blank">${objectData.artistWikidata_URL}</a>
                    </p>
                </div>
                </div>`;
        } else {
            result.innerHTML = `<p>No objects found.</p>`;
        }
    } catch (error) {
        console.log('Fetch error: ', error);
        document.getElementById("results").innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

foo();
