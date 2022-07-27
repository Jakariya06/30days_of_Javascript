
function search() {
    let txtToSearch = document.getElementById("text-to-search").value
    let paragraph = document.getElementById("paragraph")

    txtToSearch = txtToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${txtToSearch}`, "gi")

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}