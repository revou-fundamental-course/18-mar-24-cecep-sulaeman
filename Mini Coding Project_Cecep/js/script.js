var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 5000);

function submit() {
    let form = document.forms['contact-form'];
    let userName = form['username'].value;
    if (userName == '') {
        alert('Belum Terisi Semua');
    } else {
        alert('Selamat Datang ' + userName);
    }
}

document.getElementById('send-button').addEventListener("click", submit);
