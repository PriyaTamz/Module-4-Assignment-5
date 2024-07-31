document.querySelector("button").addEventListener("click", foo);

async function foo() {
    try {
        var response = await fetch(`https://randomfox.ca/floof/`);
        var data = await response.json();
        console.log(data);

        var result = document.getElementById("results");
        result.innerHTML = `
            <div class="card mb-4" style="width: 25rem;">
                <div class="card-body">
                    <div class="card-title"><b>Image:</b></div>
                    <img src="${data.image}" alt="Fox Image" style="width: 100%;">
                    <div class="card-title"><b>Link:</b> <a href="${data.link}">${data.link}</a></div>
                </div>
            </div>`;
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}
