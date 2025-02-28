document.addEventListener('scroll', function() {
    var posScroll = window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    var escalaVelocidade = 10; // maior o valor, mais lento o texto se move

    var posText = (posScroll / maxScroll) * (escalaVelocidade + window.innerWidth); // calc nova pos
    document.getElementById('animated-text').style.left = posText + 'px';

    posText = Math.min(window.innerWidth - document.getElementById('animated-text').offsetWidth, posText);
});

document.addEventListener('scroll', function() {
    var posScroll = window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    var escalaVelocidade = 150; // Quanto maior o valor, mais lento o texto se move

    // Calcula a nova posição começando da direita para a esquerda
    var posText = window.innerWidth - ((posScroll / maxScroll) * (escalaVelocidade + window.innerWidth));

    // Garante que o texto não saia da tela à direita
    posText = Math.min(window.innerWidth - document.getElementById('animated-text2').offsetWidth, posText);

    document.getElementById('animated-text2').style.left = posText + 'px';
});
