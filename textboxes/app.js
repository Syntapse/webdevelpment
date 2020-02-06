window.onload = function() {
    const yes = document.getElementById('yes').addEventListener('click', clicked)
    const userinput = document.getElementById('userinput')
    function clicked() {
        var distext = userinput.value
        alert(distext)
    }
}