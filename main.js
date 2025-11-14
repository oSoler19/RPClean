const phone = "5517997765728"

function redirectUser() {
    const service = document.getElementById('service').value.toLowerCase()
    
    const text = "Tudo bem? estou interessado no serviço de "+service+", poderia me dizer os valores?"
        
    const urlEncode = encodeURIComponent(text)
    const url = "https://wa.me/"+phone+"?text="+urlEncode

    window.open(url)

    return true
}
