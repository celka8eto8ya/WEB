{
    const loader = (filename, placeholder) => {
        fetch(filename, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "text/plain"
            })
        })
            .then(r => r.text())
            .then(r => document.getElementById(placeholder).innerHTML = r)
    }
    window.addEventListener('DOMContentLoaded', function () {
        loader('header.html', 'header')
        // loader('footer.html', 'footer')
    })
}