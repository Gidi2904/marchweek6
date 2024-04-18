const idIntro=document.getElementById('intro')
idIntro.textContent='my name is goodness'

const body = document.getElementsByClassName('body')
body[0].textContent='i am a boyfriend '
body[1].textContent='i love food '
body[2].innerHTML='things i leart form univelcity <abbr title="HyperText Markup language">HTML</abbr>, <abbr title="Cascading Style Sheet">CSS</abbr>, <abbr title="JavaScript">js</abbr>'

const p = document.getElementsByTagName('p')

p[4].innertext = 'i love swimming'
p[5].innertext ='i love singing '
p[6].innertext ='i love writing cod'

const title = document.querySelector('h1')

title.style.borderBottom= '5px solid'
title.style.textAlign= 'center'
title.style.color='blue'


