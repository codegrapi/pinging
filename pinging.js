<script>
// Tanggal dan waktu target
var targetDate = new Date("October 5, 2023 13:07:59").getTime();

// Update waktu mundur setiap 1 detik
var countdown = setInterval(function() {

  // Dapatkan tanggal dan waktu saat ini
  var now = new Date().getTime();

  // Hitung selisih antara waktu target dan waktu saat ini
  var distance = targetDate - now;

  // Hitung waktu mundur dalam hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan waktu mundur dalam format "hari:jam:menit:detik"
  console.log(days + " hari, " + hours + " jam, " + minutes + " menit, " + seconds + " detik");

  // Hentikan perhitungan waktu mundur jika sudah mencapai target
  if (distance < 0) {
    clearInterval(countdown);
    console.log("Waktu telah habis!");

    // Redirect ke URL yang dituju setelah waktu habis
    window.location.href = 'https://stagsite.online/tes/member-area/';
      }
    }, 1000);
</script>
