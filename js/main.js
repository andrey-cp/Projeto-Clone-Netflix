var capaPrincipal = document.getElementById('filme-principal');
var urlCapa = document.querySelector(':root');
var tituloPrincipal = document.getElementsByClassName('titulo')[0];
var descricaoPrincipal = document.getElementsByClassName('descricao')[0];

var linkFilme = 'https://www.youtube.com/watch?v=voLgdwTP2TM';

function carregarFilme()
{
    window.open(linkFilme, '_blank');
}

function mudarCapa(value){
    urlCapa.style.setProperty('--urlCapa', `url(/img/filmes/capa${value}.jpg)`);
    /*
    capaPrincipal.style.backgroundImage =  `url(/img/filmes/capa${value}.jpg)`;
    */
    switch(value){
        case 1:
            tituloPrincipal.innerHTML = 'Homem-Aranha: Sem Volta pra Casa'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.';

            linkFilme = 'https://www.youtube.com/watch?v=voLgdwTP2TM';
        break;

        case 2:
            tituloPrincipal.innerHTML = 'Matrix Resurrections'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Em um mundo de duas realidades — a vida cotidiana e o que está por trás dela —, Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.';

            linkFilme = 'https://www.youtube.com/watch?v=aHmDi6CUQ3M';
        break;

        case 3:
            tituloPrincipal.innerHTML = 'Venom: Tempo de Carnificina'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Em busca de seu próximo furo de reportagem, o jornalista Eddie Brock consegue uma entrevista exclusiva com Cletus Kasady, um assassino no corredor da morte, que descobre o segredo de Eddie e se torna o hospedeiro de Carnificina, um simbionte aterrorizante e ameaçador.';

            linkFilme = 'https://www.youtube.com/watch?v=7KvioH80zLI';
        break;

        case 4:
            tituloPrincipal.innerHTML = 'Shang-Chi e a Lenda dos Dez Anéis'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Shang-Chi precisa confrontar o passado que pensou ter deixado para trás. Ao mesmo tempo, ele é envolvido em uma teia de mistérios da organização conhecida como Dez Anéis.';

            linkFilme = 'https://www.youtube.com/watch?v=AfHiUtxrmiY';
        break;

        case 5:
            tituloPrincipal.innerHTML = 'Ghostbusters: Mais Além'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Uma mãe solteira resolve se mudar para uma pequena cidade do interior com seus filhos, e acaba descobrindo uma conexão com os Caça-Fantasmas originais e o que o seu avô deixou para trás como legado.';

            linkFilme = 'https://www.youtube.com/watch?v=p5yCOTVGsHw';
        break;

        case 6:
            tituloPrincipal.innerHTML = 'Demon Slayer - Mugen Train: O Filme'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Tanjiro Kamado, junto com Inosuke Hashibira e Zenitsu Agatsuma, embarca no Trem Infinito em uma nova missão com o Hashira de Fogo, Kyojuro Rengoku, para derrotar um demônio que tem atormentado o povo e matado os caçadores de oni que se opõem a ele!';

            linkFilme = 'https://www.youtube.com/watch?v=e4yH53G6kM8';
        break;

        case 7:
            tituloPrincipal.innerHTML = 'O Espetacular Homem-Aranha'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Peter Parker está tentando saber mais sobre sua origem. Ele encontra uma pasta que pertenceu ao seu pai e quer descobrir por que seus pais desapareceram. Sua busca o leva a Oscorp e ao dr. Curt Connors, que tem como alterego o letal Lagarto.';

            linkFilme = 'https://www.youtube.com/watch?v=6nzNdpJ3qMo';
        break;

        case 8:
            tituloPrincipal.innerHTML = 'O Espetacular Homem-Aranha 2: A Ameaça de Electro'.toUpperCase();
            descricaoPrincipal.innerHTML = 'O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele precisa lidar com dois problemas: o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão mais forte e poderoso, Electro.';

            linkFilme = 'https://www.youtube.com/watch?v=PfUDLzyC1cM';
        break;

        case 9:
            tituloPrincipal.innerHTML = '007: Sem Tempo para Morrer'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Bond deixou o serviço ativo e está desfrutando de uma vida tranquila na Jamaica. Sua paz é interrompida quando o seu velho amigo Felix Leiter, da CIA, aparece pedindo sua ajuda.';

            linkFilme = 'https://www.youtube.com/watch?v=kCyjw0z-5KI';
        break;

        case 10:
            tituloPrincipal.innerHTML = 'Free Guy: Assumindo o Controle'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto. Agora ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.';

            linkFilme = 'https://www.youtube.com/watch?v=G7LdgyxvoN8';
        break;

        case 11:
            tituloPrincipal.innerHTML = 'My Hero Academia: Ascensão dos Heróis'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Izuku, Bakugo e o resto dos alunos da Turma A da Academia de Heróis terão que unir forças mais uma vez para enfrentar o vilão Nine.';

            linkFilme = 'https://www.youtube.com/watch?v=OV4U3UbASD0';
        break;

        case 12:
            tituloPrincipal.innerHTML = 'Mortal Kombat'.toUpperCase();
            descricaoPrincipal.innerHTML = 'O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.';

            linkFilme = 'https://www.youtube.com/watch?v=sX1_buHj3wA';
        break;

        case 13:
            tituloPrincipal.innerHTML = 'My Hero Academia: O Filme - 2 Heróis';
            descricaoPrincipal.innerHTML = 'Deku e All Might são convidados para a I-Expo, a maior exposição de invenções e novidades para heróis superpoderosos, reunindo patrocinadores e profissionais do mundo todo. Quando a exposição é invadida por vilões, só uma pessoa é capaz de salvar a todos e restaurar a paz: All Might.';

            linkFilme = 'https://www.youtube.com/watch?v=tZY3m4H1k20';
        break;

        case 14:
            tituloPrincipal.innerHTML = 'The Last: Naruto O Filme'.toUpperCase();
            descricaoPrincipal.innerHTML = 'Após dois anos dos eventos da Quarta Guerra Mundial Ninja, a lua começa a cair em direção à terra. Com a lua agora como um meteoro que ameaça destruir tudo com o impacto, um Naruto mais velho tem de lidar com esta nova ameaça.';

            linkFilme = 'https://www.youtube.com/watch?v=YEc3m3tGYcY';
        break;
    }
}