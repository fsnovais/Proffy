import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
<header>
    <img src="https://avatars3.githubusercontent.com/u/37004087?s=460&u=b903716ab21d4eb9fd65e098a106d45e02a5785a&v=4" alt="Felipe Novais"/>
    <div>
        <strong>Felipe Novais</strong>
        <span>Programação</span>
    </div>
</header>
<p>
    Entusiasta das melhores tecnologias de programação avançada.
    <br/>
    <br/>
    Estudante de ciencia da computação com experiência em javascript, python e banco de dados. Especialista em Ads e desenvolvedor nas horas vagas. 
</p>

<footer>
    <p>
        Preço/hora
        <strong>R$ 80,00</strong>
    </p>
    <button type='button'>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
    </button>
</footer>
</article>
    )
}

export default TeacherItem;