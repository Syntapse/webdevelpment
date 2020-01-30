window.onload = function() {
    const mainui = this.document.getElementById('mainui')
    const confirm = this.document.getElementById('confirm').addEventListener('click', conf)
    const alert1 = this.document.getElementById('alert')
    function conf() {
        alert1.innerHTML = 'Hackerman420'
        if (alert1.innerHTML == 'Hackerman420') {
            alert("Hello! I am an alert box!!");
        }
    }
}