function aquario(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("i");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#data').value;
    var [ano, mes, dia] = valor.split('-').map(Number);

    
    if (dia >= 21 && mes == 1 || dia <= 18 && mes == 2){
        texto.innerHTML = "Camus de Aquário.";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria.";
    }
    else if (dia >= 19 && mes == 2 || dia <= 20 && mes == 3){
        texto.innerHTML = "Peixes";
        texto.innerHTML = "Afrodite de Peixes.";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes. Pode derrotar qualquer inimigo se estiver lutando com toda sua força. É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros.";a
    }
    else if (dia >= 21 && mes == 3 || dia <= 20 && mes == 4){
        texto.innerHTML = "Áries.";
        texto.innerHTML = "Mu de Áries.";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }
    else if (dia >= 21 && mes == 4 || dia <= 20 && mes == 5){
        texto.innerHTML = "Touros.";
        texto.innerHTML = "Aldebaran de Touro.";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }
    else if (dia >= 21 && mes == 5 || dia <= 20 && mes == 6){
        texto.innerHTML = "Saga de Gêmeos.";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Saga é o Cavaleiro de Ouro de Gêmeos do século XX, que tinha uma personalidade dividida entre o bem e o mal. Ele matou o antigo Grande Mestre Shion e se disfarçou dele para tentar dominar o mundo. No entanto, viu seu plano ir por terra abaixo ao ser derrotado por Seiya com a ajuda de Atena e se arrependeu de seus crimes. Saga pode manipular a energia cósmica para criar explosões devastadoras ou abrir portais para outras dimensões. Ele também pode usar telecinese, telepatia e ilusão para controlar objetos e mentes, além de ser capaz de se mover e atacar na velocidade da luz ou até mais rápido qu ela.";
    }
    else if (dia >= 21 && mes == 6 || dia <= 22 && mes == 7){
        texto.innerHTML = "Câncer";
        texto.innerHTML = "Máscara da Morte de Câncer.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
    }
    else if (dia >= 22 && mes == 6 || dia <= 22 && mes == 8){
        texto.innerHTML = "Leão.";
        texto.innerHTML = "Aiolia de Leão.";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
    }
    else if (dia >= 23 && mes == 8 || dia <= 22 && mes == 9){
        texto.innerHTML = "Virgem.";
        texto.innerHTML = "Shaka de Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    else if (dia >= 23 && mes == 9 || dia <= 22 && mes == 10){
        texto.innerHTML = "Libra";
        texto.innerHTML = "Dohko de Libra.";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Athena, por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. ";
    }
    else if (dia >= 23 && mes == 10 || dia <= 21 && mes == 11){
        texto.innerHTML = "Escorpião";
        texto.innerHTML = "Milo de Escorpião.";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O Écarlate, quando criança, foi picado por um escorpião, o que gerou uma reação em suas hemoglobinas que começaram a torná-las transparentes. Dessa forma, Écarlate iria ficar invisível lentamente até desaparecer de vez.";
    }
    else if (dia >= 22 && mes == 11 || dia <= 21 && mes == 12){
        texto.innerHTML = "Sagitário.";
        texto.innerHTML = "Aiolos de Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro de Sagitário do Século XX. Irmão de Aioria de Leão e melhor amigo de Shura de Capricórnio, morreu ao tentar salvar a infante Atena de Saga de Gêmeos que estava disfarçado de Grande Mestre. Chamado erroneamente de Aioros e Ioria.";
    }
    else if (dia >= 23 && mes == 12 || dia <= 20 && mes == 1){
        texto.innerHTML = "Shura de Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "É o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
    }
    
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.png");
        imagem.setAttribute("width","250px");
    }
}