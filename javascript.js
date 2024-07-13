function open_sobre() {
    sobre.style.display = "flex";
}

function logar() {

    let email_login = document.getElementById("email_login").value;
    let senha_login = document.getElementById("senha_login").value;

    if (email_login && senha_login) {
        window.location = 'blogue/painel.html';
    } else {
        login.style.display = "block";
        alert('Preencha todos os campos.');

    }

}

function open_cadastro() {
    autenticacao.style.display = "flex";
    cadastro.style.display = "block";
    comfirmar_cadastro_1.style.display = "none";
    comfirmar_cadastro_2.style.display = "none";
    comfirmar_cadastro_3.style.display = "none";
    login.style.display = "none";
    recuperar_senha_1.style.display = "none";
    recuperar_senha_2.style.display = "none";
    comfirmar_cadastro_4_ver_dados.style.display = "none";
}

function open_cadastro_pre_ver_dados() {
    comfirmar_cadastro_4_ver_dados.style.display = "none";
    cadastro.style.display = "block";
    comfirmar_cadastro_1.style.display = "none";
    comfirmar_cadastro_2.style.display = "none";
    comfirmar_cadastro_3.style.display = "none";
    login.style.display = "none";
    recuperar_senha_1.style.display = "none";
    recuperar_senha_2.style.display = "none";
}

function open_comfirmar_cadastro_1() {
    let nome_cadastro = document.getElementById("nome_cadastro").value;
    let email_cadastro_1 = document.getElementById("email_cadastro_1").to;
    let pais_cadastro = document.getElementById("pais_cadastro").value;
    let cidade_cadastro = document.getElementById("cidade_cadastro").value;
    let telefone_cadastro = document.getElementById("telefone_cadastro").value;
    if (nome_cadastro && email_cadastro_1 && pais_cadastro && cidade_cadastro &&
        telefone_cadastro) {
        autenticacao.style.display = "flex";
        cadastro.style.display = "none";
        comfirmar_cadastro_1.style.display = "block";
    }

    else {
        cadastro.style.display = "block";
        comfirmar_cadastro_1.style.display = "none";
        alert('Preencha o campo.');
    }
}


function voltar_para_cadastro_comfirmar_cadastro_1() {
    autenticacao.style.display = "flex";
    comfirmar_cadastro_1.style.display = "none";
    cadastro.style.display = "block";
}



function open_comfirmar_cadastro_2() {

    let email_cadastro_1 = document.getElementById('email_cadastro_1').value;
    let email_cadastro_2 = document.getElementById('email_cadastro_2').value;

    if (email_cadastro_1 == email_cadastro_2) {
        autenticacao.style.display = "flex";
        comfirmar_cadastro_1.style.display = "none";
        comfirmar_cadastro_2.style.display = "block";

        if (email_cadastro_1 && email_cadastro_2) {
            autenticacao.style.display = "flex";
            comfirmar_cadastro_1.style.display = "none";
            comfirmar_cadastro_2.style.display = "block";
        }

        else {
            comfirmar_cadastro_1.style.display = 'block';
            comfirmar_cadastro_2.style.display = "none";
            alert('Preencha o campo.');
        }
    }

    else {
        comfirmar_cadastro_1.style.display = 'block';
        alert('Erro de verificação, verifica o E-mail.');
    }
}

function voltar_para_cadastro_comfirmar_cadastro_2() {
    autenticacao.style.display = "flex";
    comfirmar_cadastro_1.style.display = "block";
    comfirmar_cadastro_2.style.display = "none";
}

function open_comfirmar_cadastro_3() {

    let codigo_verificacao = document.getElementById("codigo_verificacao").value;
    if (codigo_verificacao) {
        autenticacao.style.display = "flex";
        comfirmar_cadastro_2.style.display = "none";
        comfirmar_cadastro_3.style.display = "block";
    }

    else {
        comfirmar_cadastro_2.style.display = "block";
        comfirmar_cadastro_3.style.display = "none";
        alert('Preencha o campo.');
    }
}

function voltar_para_cadastro_comfirmar_cadastro_3() {
    autenticacao.style.display = "flex";
    comfirmar_cadastro_3.style.display = "none";
    comfirmar_cadastro_2.style.display = "block";
}

function open_Login() {
    autenticacao.style.display = "flex";
    login.style.display = "block";
    comfirmar_cadastro_1.style.display = "none";
    comfirmar_cadastro_2.style.display = "none";
    comfirmar_cadastro_3.style.display = "none";
    recuperar_senha_1.style.display = "none";
    cadastro.style.display = "none";
    comfirmar_cadastro_4_ver_dados.style.display = "none";
}

function open_recuperar_senha_1() {
    autenticacao.style.display = "flex";
    recuperar_senha_1.style.display = "block";
    login.style.display = "none";
}

function cancelar_recuperar_senha_1() {
    autenticacao.style.display = "flex";
    recuperar_senha_1.style.display = "none";
    login.style.display = "block";
}

function open_recuperar_senha_2() {
    if (e_mail_verification.value != "") {
        autenticacao.style.display = "flex";
        recuperar_senha_1.style.display = "none";
        recuperar_senha_2.style.display = "block";
        login.style.display = "none";
    }
}

function voltar_recuperar_senha_2() {
    autenticacao.style.display = "flex";
    recuperar_senha_2.style.display = "none";
    recuperar_senha_1.style.display = "block";
    login.style.display = "none";
}

function contactar() {
    contacta_nos.style.display = "flex"
}

function open_card_money1() {
    usd.style.display = "none";
    aoa.style.display = "block";
}

function open_card_money2() {
    usd.style.display = "block";
    aoa.style.display = "none";
}

function open_transferencia() {
    transferencia.style.display = "flex";
}

function abrir_musicas() {
    musics.style.display = "block";
    open_music.style.display = "none";
    close_musics.style.display = "flex";
    album_container.style.display = "none"
}

function fechar_musicas() {
    musics.style.display = "none";
    open_music.style.display = "flex";
    close_musics.style.display = "none";
}

function open_criar_album() {
    gerenciar_album.style.display = "block"
    criar_album.style.display = "block"
    criar_album_img.style.display = "none"
    albuns.style.display = "none"
}

function fechar_criar_album() {
    albuns.style.display = "block"
    criar_album.style.display = "none"
    criar_album_img.style.display = "none"
}



function voltar_para_criar_album() {
    albuns.style.display = "none"
    criar_album.style.display = "block"
    criar_album_img.style.display = "none"
}

function info_input() {
    artist_info.style.display = "flex"
}

function fechar_info_input() {
    artist_info.style.display = "none"
}

function delete_dados() {
    albuns.style.display = "none"
    delete_album.style.display = "block"
}

function cancelar_delete_dados() {
    albuns.style.display = "block"
    delete_album.style.display = "none"
}

function info_input2() {
    artist_info2.style.display = "flex"
}

function fechar_info_input2() {
    artist_info2.style.display = "none"
}

function open_cadastrar_faixas_1() {
    gerenciar_album.style.display = "none"
    albuns.style.display = "none"
    container_cadastrar_faixas.style.display = "flex"
    cadastrar_faixas_1.style.display = "block"
    cadastrar_faixas_2.style.display = "none"
}

function cancelar_cadastrar_faixas_1() {
    gerenciar_album.style.display = "none"
    albuns.style.display = "block"
    container_cadastrar_faixas.style.display = "none"
    cadastrar_faixas_1.style.display = "none"
    cadastrar_faixas_2.style.display = "none"
}



function info_input3() {
    artist_info3.style.display = "flex"
}

function fechar_info_input3() {
    artist_info3.style.display = "none"
}

function voltar_para_cancelar_cadastrar_faixas_1() {
    gerenciar_album.style.display = "none"
    albuns.style.display = "none"
    cadastrar_faixas_1.style.display = "block"
    cadastrar_faixas_2.style.display = "none"
}

function open_express() {
    container_conta_bancaria_form.style.display = "flex"
    express.style.display = "block"
}

function open_paypal() {
    container_conta_bancaria_form.style.display = "flex"
    express.style.display = "none"
    paypal.style.display = "block"
}

function open_express_2() {
    container_conta_bancaria_form.style.display = "flex"
    express.style.display = "block"
    paypal.style.display = "none"
}

function fechar_express_e_paypal() {
    container_conta_bancaria_form.style.display = "none"
}

function nowPlayer_music() {
    nowPlaying.style.display = "flex"
}

function pause_music() {
    change_text.innerText = "Estava Reproduzindo:"
}

function play_music() {
    change_text.innerText = "Agora Reproduzindo:"
}

function abrir_musicas2() {
    musics2.style.display = "block";
    open_music2.style.display = "none";
    close_musics2.style.display = "flex";
}

function fechar_musicas2() {
    musics2.style.display = "none";
    open_music2.style.display = "flex";
    close_musics2.style.display = "none";
}


function nowPlayer_music2() {
    nowPlaying2.style.display = "flex"
    line_top_music.style.display = "block"
}

function pause_music2() {
    change_text2.innerText = "Estava Reproduzindo:"
}

function play_music2() {
    change_text2.innerText = "Agora Reproduzindo:"
}


function delete_musicas() {
    albuns.style.display = "none"
    delete_musica.style.display = "block"
}

function cancelar_delete_musica() {
    albuns.style.display = "block"
    delete_musica.style.display = "none"
}

function open_change_passeword() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_senha.style.display = "block"
    comfirmar_email.style.display = "block"
}

function open_change_passeword_avancar() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_senha.style.display = "block"
    comfirmar_email.style.display = "none"
    senha_alterada.style.display = "block"
}

function cancelar_change_passeword() {
    container_configuracao.style.display = "block"
    alterar_senha_e_email.style.display = "none"
    alterar_senha.style.display = "none"
    comfirmar_email.style.display = "none"
    senha_alterada.style.display = "none"
}

function voltar_para_change_passeword() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_senha.style.display = "block"
    comfirmar_email.style.display = "block"
    senha_alterada.style.display = "none"
}

function open_change_email() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_email.style.display = "block"
    comfirmar_senha.style.display = "block"
}

function open_change_email_avancar() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_email.style.display = "block"
    comfirmar_senha.style.display = "none"
    email_alterada.style.display = "block"
}

function cancelar_change_email() {
    container_configuracao.style.display = "block"
    alterar_senha_e_email.style.display = "none"
    alterar_email.style.display = "none"
    comfirmar_senha.style.display = "none"
    email_alterada.style.display = "none"
}

function voltar_para_change_email() {
    container_configuracao.style.display = "none"
    alterar_senha_e_email.style.display = "flex"
    alterar_email.style.display = "block"
    comfirmar_senha.style.display = "block"
    email_alterada.style.display = "none"
}

function abrirFaixas() {
    album_container.style.display = "none"
    headerAlbum.style.display = "none"
    tableFaixas.style.display = "flex"
}

function voltarAlbum() {
    album_container.style.display = "flex"
    headerAlbum.style.display = "flex"
    tableFaixas.style.display = "none"
}

function open_addAlbum() {
    containerAlbuns.style.display = "none"
    addAlbum.style.display = "block"
    button_voltar_album.style.display = "block"
    button_add_album.style.display = "none"
    titleAlbum.innerText = "Adicionar álbum"
    criarAlbum_1.style.display = "block"
    preview_dados.style.display = "none"
}

function voltar_containerAlbuns() {
    containerAlbuns.style.display = "block"
    addAlbum.style.display = "none"
    button_voltar_album.style.display = "none"
    button_add_album.style.display = "block"
    titleAlbum.innerText = "Meu(s) Álbun(s)"
}

//----------------------------------------------------------------------
function open_addAlbum2() {
    let nome_albun = document.getElementById("nome_albun").value
    let nome_artiste_album = document.getElementById("nome_artiste_album").value
    let genero_1_album = document.getElementById("genero_1_album").value
    let genero_2_album = document.getElementById("genero_2_album").value
    let idioma_album = document.getElementById("idioma_album").value
    let data_lancamento_album = document.getElementById("data_lancamento_album").value
    let data_gravacao_album = document.getElementById("data_gravacao_album").value

    if (nome_albun && nome_artiste_album && genero_1_album
        && genero_2_album && idioma_album
        && data_lancamento_album && data_gravacao_album) {

        criarAlbum_1.style.display = "none"
        criarAlbum_2.style.display = "block"
    }

    else {
        criarAlbum_1.style.display = "block"
        criarAlbum_2.style.display = "none"
        alert('Preencha todos os campos.');
    }
}

function open_addAlbum_3() {
    let nome_faixa = document.getElementById("nome_faixa").value
    let nome_artiste_faixa = document.getElementById("nome_artiste_faixa").value
    let nome_participanta_faixa = document.getElementById("nome_participanta_faixa").value
    let compositor_artiste_faixa = document.getElementById("compositor_artiste_faixa")
    let produtor_artiste_faixa = document.getElementById("produtor_artiste_faixa")
    let idioma_faixa = document.getElementById("idioma_faixa").value
    let explicito_faixa = document.getElementById("explicito_faixa").value
    let musica = document.getElementById("musica").value

    if (nome_faixa && nome_artiste_faixa && nome_participanta_faixa &&
        compositor_artiste_faixa && produtor_artiste_faixa
        && idioma_faixa && explicito_faixa && musica) {

        if (explicito_faixa === "Sim" || explicito_faixa === "sim" ||
            explicito_faixa === "Não" || explicito_faixa === "não" ||
            explicito_faixa === "SIM" || explicito_faixa === "NÃO" ||
            explicito_faixa === "nao" || explicito_faixa === "NAO") {

            criarAlbum_2.style.display = "none"
            criarAlbum_3.style.display = "block"
        }

        else {
            window.alert("No campo Explicito so deve entrar os seguintes valores: 'Sim' / 'Não'")
        }
    }

    else {
        criarAlbum_2.style.display = "block"
        criarAlbum_3.style.display = "none"
        window.alert("Preencha todos os campos")
    }
}

function voltar_aadAlbum2() {
    criarAlbum_1.style.display = "block"
    criarAlbum_2.style.display = "none"
}

function open_addAlbum_4() {
    let img = document.getElementById("input-image").value

    if (img) {
        criarAlbum_3.style.display = "none"
        criarAlbum_4.style.display = "block"
    }
    
    else {
        criarAlbum_4.style.display = "none"
        criarAlbum_3.style.display = "block"
        window.alert("Preencha o campo")
    }
}

function voltar_aadAlbum_2() {
    criarAlbum_2.style.display = "block"
    criarAlbum_3.style.display = "none"
}

function voltar_aadAlbum_3() {
    criarAlbum_3.style.display = "block"
    criarAlbum_4.style.display = "none"
}

function info_input4() {
    artist_info4.style.display = "flex"
}

function fechar_info_input4() {
    artist_info4.style.display = "none"
    artist_info2.style.display = "none"
    artist_info5.style.display = "none"

}

function info_input5() {
    artist_info5.style.display = "flex"
}

function open_express_atualizar_conta() {
    express_atualizar_conta.style.display = "block"
    paypal_atualizar_conta.style.display = "none"

}

function open_paypal_atualizar_conta() {
    container_conta_bancaria_form.style.display = "flex"
    express_atualizar_conta.style.display = "none"
    paypal_atualizar_conta.style.display = "block"
}

function open_add_music() {
    addAlbum.style.display = "block"
    criarAlbum_2.style.display = "block"
    preview_dados.style.display = "none"
}

function open_pre_visualizacao() {
    criarAlbum_4.style.display = "none"
    preview_dados.style.display = "block"
}

function open_ver_dados_cadastro() {
    let senha_cadastro = document.getElementById("senha_cadastro").value
    let comfirmar_senha_cadastro = document.getElementById("comfirmar_senha_cadastro").value
    if (senha_cadastro != comfirmar_senha_cadastro) {
        comfirmar_cadastro_3.style.display = "block"
        alert("Verifica se tem os mesmos caracteres")
    }

    else {
        if (senha_cadastro.length >= 15) {
            comfirmar_cadastro_4_ver_dados.style.display = "block"
            comfirmar_cadastro_3.style.display = "none"
        }

        else {
            alert("A sua senha deve ter pelo menos 15 caracteres")
        }

    }
}

function senha_verification() {
    let senha_recuperar_verification = document.getElementById("senha_recuperar_verification").value
    let comfirmar_senha_verification = document.getElementById("comfirmar_senha_verification").value

    if (senha_recuperar_verification && comfirmar_senha_verification) {


        if (senha_recuperar_verification != comfirmar_senha_verification) {
            recuperar_senha_2_1.style.display = "block"
            alert("Verifica se tem os mesmos caracteres")
        }

        else {
            if (senha_recuperar_verification.length >= 15) {
                recuperar_senha_2_2.style.display = "block"
                recuperar_senha_2_1.style.display = "none"
            }

            else {
                alert("A sua senha deve ter pelo menos 15 caracteres")
            }

        }
    }

    else {
        alert("Preencha todos os campos")
    }
}