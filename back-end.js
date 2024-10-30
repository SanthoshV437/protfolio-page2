// LinkedIn Button
document.getElementById('linkedin-btn').addEventListener('click', function () {
    window.open("https://www.linkedin.com/in/santhosh-venkatesh-344814220/", '_blank');
});

// Gmail Button
document.getElementById('gmail-btn').addEventListener('click', function () {
    var gmail_address = "santhoshwiz24@gmail.com"; 
    var subject = "Hello"; 
    var body = "Hello,\n\nThis is a test email."; 
    var gmail_link = "mailto:" + gmail_address + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = gmail_link;
});

// GitHub Button
document.getElementById('github-btn').addEventListener('click', function () {
    window.open("https://github.com/SanthoshV437", '_blank');
});

// WhatsApp Button
document.getElementById('whatsapp-btn').addEventListener('click', function () {
    var whatsapp_link = "https://wa.me/8867459608"; 
    window.open(whatsapp_link, '_blank');
});

// Map Button
document.getElementById('maps-btn').addEventListener('click', function() {
    var mapsLink = "https://maps.app.goo.gl/kuzEd6z2ocZzGrmQ7"; 
    window.open(mapsLink, '_blank');
});

