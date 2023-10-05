<script>
var targetDate = new Date("October 5, 2023 13:25:59").getTime();
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(days + " hari, " + hours + " jam, " + minutes + " menit, " + seconds + " detik");
  if (distance < 0) {
    clearInterval(countdown);
    console.log("Waktu telah habis!");
    window.location.href = 'https://stagsite.online/tes/upgrade/';
      }
    }, 1000);
</script>
