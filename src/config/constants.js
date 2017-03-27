angular.module('addExtreme')

    .constant("HTTP_CONSTANTS", {
        "URL": "https://ad-extreme-backend.herokuapp.com",
        "PORT": "",
        "COMPLETE_ADRESS": "https://ad-extreme-backend.herokuapp.com"
    })

    .constant("HTTP_RESPONSES", {
        "OK": 200,
        "CONFILCT": 409,
        "INTERNAL_ERRO": 500
    })

    .constant("API_ENDPOINTS", {
        "LOGIN": "/autenticar",
        "USER": "/usuario",
        "ANUNCIO" : "/anuncio",
        "COMPRA" : "/anuncio/comprar"
    })

    .constant("MESSAGES", {
        "USER_SUCCESSFULY_CREATED": "Usuário criado com sucesso!",
        "USER_SUCCESSFULY_AUTHENTICATED": "Usuário autenticado com sucesso!",
        "WRONG_USERNAME_OR_PASSWORD": "Email ou senha invalido(s).",
        "USER_ALREADY_EXISTS_ERROR": "Usuário já cadastrado.",
        "UNKONUWN_ERROR": "Erro desconhecido, tente novamente mais tarde."
    })