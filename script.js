function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    if (query.includes("環七一之江店")) {
        window.location.href = "green-tea.html";
    } else if (query.includes("神田神保町店")) {
        window.location.href = "black-tea.html";
    } else if (query.includes("野猿街道店２")) {
        window.location.href = "oolong-tea.html";
    } else {
        alert("該当する店舗が見つかりませんでした。");
    }
}
