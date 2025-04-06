document.addEventListener("DOMContentLoaded", function () {

});



let count = 0;

const pdrow = document.getElementById("pd-row")


function helloworld() {
    const newpd = document.createElement(`div`)
    newpd.innerHTML =
    `<div class="pd-box">
        <img src="img/pd/1.avif" class="pd-img">
        <div class="pd-txt">
            <p>Shell genuine synthetic diesel engine oil Helix hx8 5W-30 (6/7/8 L)</p>
            <h2 class="pd-price">$500.00</h2>
            <div class="pd-disc-box">
                <p class="pd-disc">$1950.00</p>
                <p class="pd-disc-percent">-50%</p>
            </div>
        </div>
    </div>
    `;

    const flashsaletext = document.getElementById("flashsale");
    count += 1;
    flashsaletext.innerText = `Flash Sale ${count}`;

    const pdrow = document.getElementById("pdrow")
    pdrow.appendChild(newpd);
}

function initCountdown(){
    const EndDate = new Date.now ()+ 60 * 1000 * 60 * 24;
    console.log(EndDate)

}