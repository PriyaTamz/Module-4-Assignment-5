async function foo() {
    try {
        var response = await fetch(`https://xeno-canto.org/api/2/recordings?query=cnt:brazil`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        var data = await response.json();
        console.log(data);

        var selected = data.recordings; 

        for (var i = 0; i < selected.length; i++) {
            var recording = selected[i];
            var birdName = recording.en || "Unknown";
            var location = recording.loc || "Unknown location";
            var audioLink = recording.file;
            var recordist = recording.rec || "Unknown recordist";
            var image = recording.osci.large;

            var result = document.getElementById("results");
            var card = document.createElement("div");
            card.className = "card mb-4";
            card.style.width = "25rem";

            card.innerHTML = `
                <div class="card-body">
                    <img src="${image}" class="card-img-top" alt="${birdName}">
                    <div class="card-title"><b>Bird Name:</b> ${birdName}</div>
                    <div class="card-subtitle mb-2 text-muted"><b>Location:</b> ${location}</div>
                    <div class="card-text"><b>Recordist:</b> ${recordist}</div>
                    <div class="card-text"><br>
                    <div class="audio-box">
                        <audio controls>
                            <source src="${audioLink}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    </div>
                </div>`;

            result.appendChild(card);
        }

    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

foo();
