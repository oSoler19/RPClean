const phone = "Numero do celular"

function redirectUser() {
    
    const name = document.getElementById('name').value
    const service = document.getElementById('service').value
    const message  = document.getElementById('message').value

    const text = 
        "*Contato via formulário*" + "\n"+
        "*Nome:* " + name + "\n"+
        "*Serviço:* " + service + "\n"+
        "*Mensagem:*" + "\n" + message

    const urlEncode = encodeURIComponent(text)
    const url = "https://wa.me/"+phone+"?text="+urlEncode

    window.open(url)

    return true
}
