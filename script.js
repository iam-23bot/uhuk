document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input tanggal lahir
    const birthDate = document.getElementById('birthDate').value;

    // Memastikan bahwa tanggal lahir telah diisi
    if (birthDate) {
        document.getElementById('message').innerText = "I LOVE YOU LARA";
        document.getElementById('heartImage').style.display = "block";
    }
});
