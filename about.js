const idIntro=document.getElementById('intro')
idIntro.textContent='my name is goodness'

const body = document.getElementsByClassName('body')
body[0].textContent='i am a boyfriend '
body[1].textContent='i love food '
body[2].innerHTML='things i leart form univelcity <abbr title="HyperText Markup language">HTML</abbr>, <abbr title="Cascading Style Sheet">CSS</abbr>, <abbr title="JavaScript">js</abbr>'

const p = document.getElementsByTagName('p')

p[4].innerText =
p[5].innerText ='i love singing '
p[6].innerText ='i love writing coding  expecialy react native'


const title = document.querySelector('h1')

title.style.borderBottom= '5px solid'
title.style.textAlign= 'center'
title.style.color='blue'


