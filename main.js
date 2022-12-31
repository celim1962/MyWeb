window.addEventListener('load',()=>{
    // document.querySelector('.header_rolling').innerText = 'Code Grid- Design tut'

    const text = baffle('.header_rolling')
    text.set({
                characters: '█>█ █▓▓▓▓ /▓█<▒ ░▓< ▓▓░█/ █░▒░ ▓/> ▓▒▓░ ▒▒▓▓',
                speed:80
            });
    text.start()
    text.reveal(1800);
})