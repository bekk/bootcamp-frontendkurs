function getAnnonser() {
    return fetch('/annonser').then(function (resp) {
        return resp.json();
    });
}

getAnnonser().then(function (annonser) {
   var annonseHtml = annonser.map((annonse) => lagAnnonseHtml(annonse));

    document.querySelector(".annonse-container").innerHTML = annonseHtml.join("");


});

function lagAnnonseHtml(annonse) {
    return (
        `<div class="annonse">
            <div class="img-container">
                ${lagBilderHtml(annonse)}
                <a href="javascript:void(0)"><img class="arrow arrow-left" src="left.png"/></a> 
                <a href="javascript:void(0)"><img class="arrow arrow-right" src="right.png"/></a>
                <span class="pris-container">
                    <span class="pris">${annonse.details.pris}</span>
                </span>
                <span class="kvm">${annonse.details.kvm}m<sup>2</sup></span>
            </div>
            <div class="details">
                <h2 class="tittel">
                    <span class="omradetittel">${annonse.details.omradetittel}</span>
                    <span>${annonse.details.tittel}</span>
                    </h2>
                <p class="adr">${annonse.details.adresse}</p>
            </div>
        </div>`);
}

function lagBilderHtml(annonse) {
    return annonse.url.map((bildeurl, index) => {
        var klasse = index > 0 ? "hidden" : "";
        return `<img class="bilde ${klasse}" src="/${bildeurl}" alt="bilde av en annonse"/>`
    }).join("");
}

var annonseContainer = document.querySelector('.annonse-container');
annonseContainer.addEventListener("click", function (event) {
    var element = event.target;
    if (element.classList.contains("arrow")) {
        var imgcontainer = element.parentElement.parentElement;

        var bildeSomVises = imgcontainer.querySelector(".bilde:not(.hidden)");
        bildeSomVises.classList.add("hidden");

        if (element.classList.contains("arrow-left")) {
            var forrigeBilde = bildeSomVises.previousSibling;
            if (!forrigeBilde.classList) {
                var parent = bildeSomVises.parentNode;
                var alleBarneBilder = parent.querySelectorAll(".bilde.hidden");
                forrigeBilde = alleBarneBilder[alleBarneBilder.length - 1];
            }
            forrigeBilde.classList.remove("hidden");
        } else {
            var nesteBilde = bildeSomVises.nextSibling;
            if (!nesteBilde.classList) {
                var parent = bildeSomVises.parentNode;
                nesteBilde = parent.children[0];
            }
            nesteBilde.classList.remove("hidden");
        }
    }
});

