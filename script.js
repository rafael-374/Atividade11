const header = document.querySelector("header")
const h1 = document.createElement("h1")
const texto = document.createTextNode("Carros de produção mais rápidos do mundo")
h1.appendChild(texto)
header.appendChild(h1)

const main = document.querySelector("main")

const div1 = document.createElement("div")
const h2_1 = document.createElement("h2")
const p1 = document.createElement("p")
const th2 = document.createTextNode("1° lugar - Bugatti Chiron Super Sport 300+ - 490 km/h")
const tp1 = document.createTextNode("O carro de produção mais rápido do mundo, que atingiu a velocidade na prática, e não apenas na teoria, é o Bugatti Chiron Super Sport 300+. As especificações são: motor 8.0 W16, de 1600cv de potência, com torque de 163,1 kgfm, indo de 0 a 100 km/h em 2,3 segundos, tudo isso custando 3,9 milhões de dólares dos Estados Unidos. Porém, o recorde não é reconhecido pelo Guinness Book (livro dos recordes), nem pela FIA (Federação Internacional do Automóvel).")
p1.appendChild(tp1)
h2_1.appendChild(th2)
div1.appendChild(h2_1)
div1.appendChild(p1)
main.appendChild(div1)

const divimg1 = document.createElement("div")
divimg1.innerHTML = '<img src = "https://cdn.motor1.com/images/mgl/QE3q0/s1/2021-bugatti-chiron-super-sport-300.jpg" id = "img1">'
main.appendChild(divimg1)

const div2 = document.createElement("div")
const h2_2 = document.createElement("h2")
const p2 = document.createElement("p")
const th21 = document.createTextNode("2° lugar - SSC Tuatara - 455 km/h")
const tp21 = document.createTextNode("Esse é outro carro que conseguiu atingir uma incrível marca na prática, não apenas na teoria. O SSC Tuatara inclusive já teria supostamente atingido 532 km/h, o que faria dele o carro mais rápido do mundo, mas esse fato é questionado e duvidoso, deixando o carro com a velocidade máxima atingida reconhecida de 455 km/h. O carro possui um motor biturbo V8 5.9, com 1774 cv de potência, torque de 177kgfm, indo de 0 a 100 km/h em 2,5 segundos, com o preço de 1,9 milhão de dólares dos Estados Unidos.")
p2.appendChild(tp21)
h2_2.appendChild(th21)
div2.appendChild(h2_2)
div2.appendChild(p2)
main.appendChild(div2)

const divimg2 = document.createElement("div")
divimg2.innerHTML = '<img src = "https://cdn.motor1.com/images/mgl/LBV8L/s1/2020-scc-tuatara.webp" id = "img2" >'
main.appendChild(divimg2)

const footer = document.querySelector("footer")
const fonte = document.createElement("h2")
const ul = document.createElement("ul")
const f1 = document.createElement("li")
const f2 = document.createElement("li")
const f3 = document.createElement("li")
const f4 = document.createElement("li")

const tfonte = document.createTextNode("Fontes:")
const tf1 = document.createTextNode("https://autoesporte.globo.com/curiosidades/noticia/2022/07/veja-os-10-carros-de-producao-mais-rapidos-do-mundo-que-podem-passar-de-500-kmh.ghtml")
const tf2 = document.createTextNode("https://motor1.uol.com.br/news/580845/lista-carros-mais-rapidos-mundo/")
const tf3 = document.createTextNode("https://motor1.uol.com.br/news/599975/bugatti-chiron-supersport300-producao-encerrada/ (imagem da Bugatti)")
const tf4 = document.createTextNode("https://www.motor1.com/news/397523/2020-scc-tuatara-hypercar-debuts/ (imagem do SSC Tuatara)")

fonte.appendChild(tfonte)
footer.appendChild(fonte)

f1.appendChild(tf1)
ul.appendChild(f1)

f2.appendChild(tf2)
ul.appendChild(f2)

f3.appendChild(tf3)
ul.appendChild(f3)

f4.appendChild(tf4)
ul.appendChild(f4)

footer.appendChild(ul)
