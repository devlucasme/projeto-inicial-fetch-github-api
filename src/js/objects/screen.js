const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class = "info"> 
                            <img src = "${user.avatarUrl}" alt = "imagem do perfil do usuário" />
                            <div class = "data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                <div class = "followers-following">
                                    <span>Seguidores  ${user.followers}👥</span>
                                    <span>Seguindo ${user.following}👥</span>
                                </div>
                            </div>
                        </div>
                        `

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href= "${repo.html_url}"target = "_blank">
                                                                        ${repo.name}
                                                                        <div class = "repositories-info">
                                                                            <span>🍴${repo.forks}</span>
                                                                            <span>⭐${repo.stargazers_count}</span>
                                                                            <span>👀${repo.watchers}</span>
                                                                            <span>☕${repo.language ?? ' Não possui linguagem '}</span>
                                                                        </div>                                                                   
                                                                    </a>
                                                                </li>
                                        `)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                </div>`
        }

        let eventsItens = '';
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItens += `
                    <li>
                        <p>${event.repo.name} - <span>${event.payload.commits[0].message}</span></p>
                    </li>
                `
            } else if (event.type === 'CreateEvent') {
                eventsItens += `
                <li>
                    <p>${event.repo.name} - Sem mensagem de commit</p>
                </li>
            `
            }
        })
        
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
                                            <div class= "events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado!</h3>'
    },

}

export { screen }