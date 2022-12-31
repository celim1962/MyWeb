const AddHeader = () => {
    let headerContent = document.getElementById('headerContent')
    let allHeaderObject = [
        {
            headerName: 'Home',
            elements: []
        },
        {
            headerName: 'Github Project',
            elements: [
                {
                    route: 'https://github.com/celim1962/TaiwanRailwayBookingSystem',
                    name: 'RailwayBooking'
                },
                {
                    route: 'https://github.com/celim1962/jschurch',
                    name: 'JS Church'
                },
                {
                    route: 'https://github.com/celim1962/PharmacyList',
                    name: 'Pharmacy List'
                }
            ]
        },
        {
            headerName: 'Social Media',
            elements: [
                {
                    route: 'https://www.facebook.com/profile.php?id=100003635168406',
                    name: 'FaceBook'
                },
                {
                    route: 'https://www.instagram.com/celim1962/',
                    name: 'Instagram'
                }
            ]
        }
    ]


    allHeaderObject.map(item => {
        let div = document.createElement('div')
        div.className = 'Item'

        let btn = document.createElement('button')
        btn.innerText = item.headerName

        let ul = document.createElement('ul')

        item.elements.map(element => {
            let li = document.createElement('li')
            let a = document.createElement('a')

            a.innerText = element.name
            a.addEventListener('click', () => {
                window.open(element.route);
                return false;
            })

            li.appendChild(a)
            ul.appendChild(li)
        })

        div.appendChild(btn)
        div.append(ul)

        headerContent.appendChild(div)

    })
}




const BaffleEffect = () => {
    const text = baffle('.header_rolling')
    text.set({
        characters: '█>█ █▓▓▓▓ /▓█<▒ ░▓< ▓▓░█/ █░▒░ ▓/> ▓▒▓░ ▒▒▓▓',
        speed: 80
    });
    text.start()
    text.reveal(1400);
}











window.addEventListener('load', () => {
    BaffleEffect()
    AddHeader()
})

