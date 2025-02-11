$(document).ready(function () {
    let isAnimating = false; // Variável para evitar múltiplos cliques simultâneos

    $('#botao-cadastrar').click(function () {
        if (isAnimating) return; // Impede novos cliques enquanto há animações em andamento
        isAnimating = true;

        // Alternar visibilidade do formulário e da seção de login
        $('#form-cadastrar').slideToggle('slow', function () {
            $('#section-login').slideToggle('slow', function () {
                // Após ambas as animações, esconder o botão e redefinir o estado
                $('#botao-cadastrar').hide();
                isAnimating = false;
            });
        });
    });
});