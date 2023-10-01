<script>
document.addEventListener("DOMContentLoaded", function() {
    var expirationTimeInDays = 1;
    var currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);

    var lastLicenseUpdateInSeconds = Math.floor(new Date().getTime() / 1000);

    var expirationTimeInSeconds = expirationTimeInDays * 24 * 60 * 60;
    var remainingTimeInSeconds = lastLicenseUpdateInSeconds + expirationTimeInSeconds - currentTimeInSeconds;

    if (remainingTimeInSeconds <= 0) {
        window.location.href = "https://stagsite.online/tes/upgrade/";
    }
});

</script>

<script>
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});
</script>
