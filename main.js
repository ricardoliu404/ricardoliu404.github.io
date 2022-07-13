
navigator.geolocation.getCurrentPosition(res => {
    var longitude = res.coords.longitude;
    var latitude = res.coords.latitude;
    const weatherfmt = `http://www.7timer.info/bin/astro.php?lon=${longitude}&lat=${latitude}&ac=0&lang=zh-CN&unit=metric&tzshift=0`;
    document.getElementById("xyz").src = weatherfmt;
})
