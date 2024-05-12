function Produto(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, porcentagemDesconto)
{
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.porcentagemDesconto = porcentagemDesconto;

    this.imprimeTags = function(){
        return this.tags.map((t)=>{
            return `
            <span>${t}</span>
            `
           }).join("")
    };   

    this.imprimeCaracteristicas = function(){
        return this.caracteristicas.map((c)=>{
            return `
            <span>${c}</span>
            `
           }).join("")
    };

    this.getPrecoDesconto = function(){
        return this.preco * (this.porcentagemDesconto==0?1:this.porcentagemDesconto/100)
    }

    this.getPrecoFinal = function(){
        return  this.preco - this.getPrecoDesconto()
    };

    this.imprimePrecoComDesconto = function(){
       return this.getPrecoFinal();
    };
}


let dadosSmartwatch = new Produto("smartwatch", 500.00, "relógio de 40mm", "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/177970825/c3a0bdb574.jpg", true, 4.9, ["2 polegadas", "tela AMOLED","336x384 pixels"], ["tecnologia", "smartwatch", "eletronicos"], 50);

let dadosSmartphone = new Produto("iPhone", 3000.00, "Um smartphone poderoso com câmera de alta resolução e processador rápido", "https://leapfone.com.br/_next/image?url=%2Fimages%2Fvariants%2Fapple-iphone-13-rosa.webp&w=1080&q=75", true, 4.5, ["Tela de 6 polegadas","Memória interna de 128GB","Câmera principal de 48MP"],["tecnologia","smartphone","eletronicos"], 15)

let dadosNotebook = new Produto("Notebook Gigabyte G5", 8000.00, "Notebook Gamer Gigabyte G5 Intel Core i5-11400H, 16GB RAM, SSD 512GB, 15.6 Full HD, GeForce RTX3060, Preto","https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/5/g5-kd52br123sd6.jpg", true, 4.95, ["Intel Core i5-11400H","16GB RAM","GeForce RTX3060", "SSD 512GB"],["tecnologia","notebook","gamer","eletronicos"], 10)

let dadosHeadset = new Produto("Zeus X 2",250.00, "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB","https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_original.jpg", true, 4.0,[ "Diâmetro do driver: 53mm","Material das Earpads: Tecido de malha esportiva","Frequencia de resposta: 50Hz até 20000Hz"], ["tecnologia", "headset", "gamer","eletronicos"], 7)

let dadosMonitor = new Produto("Odyssey", 1289.75, "Monitor Gamer Odyssey 27 pol, FHD, 165Hz, 1ms, com ajuste de altura, HDMI, DP, Freesync, Preto, Série G32", "https://m.media-amazon.com/images/I/81ZFyP9atiL._AC_UF894,1000_QL80_.jpg", true, 2.8, ["27 polegadas", "FHD 1080p", "wide screen"], ["tecnologia", "monitores", "eletronicos"], 2)
    
let listaDeProdutos = [dadosSmartwatch, dadosSmartphone, dadosHeadset, dadosNotebook, dadosMonitor];

function gerarCards(produtoObjeto){
    return `
    <div class="card">
            <div class="card-header">
              <h2 class="title">${produtoObjeto.nome}</h2>
              <p class="description">
                ${produtoObjeto.descricao}
              </p>
              <p class="available">${produtoObjeto.disponivel ? "disponível" : "indisponível"}</p>
            </div>
            <div class="card-image">
              <img
                src="${produtoObjeto.imagem}"
              />
            </div>
            <div class="card-details">
              <div class="tags">
                <span>Tags: </span>
                ${produtoObjeto.imprimeTags()}
              </div>
              <div class="characteristics">
                <span>Characteristics: </span>
                ${produtoObjeto.imprimeCaracteristicas()}
              </div>
              <div class="price">
                <p>Preco: de ${produtoObjeto.preco}</p>
              </div>
              <div class="desconto">
                <p>com desconto de: ${produtoObjeto.porcentagemDesconto}%</p>
              </div>
              <div class="totaldesconto">
                <p>por: ${produtoObjeto.imprimePrecoComDesconto()}</p>
              </div>
            </div>
          </div>
    `
}

const app = document.getElementById("app");

app.innerHTML = listaDeProdutos.map((produto)=>{
    return gerarCards(produto);
}).join("")