module.exports.iniciaChat = function(application, req, res) {
    
    var dadosForm = req.body;

    req.assert('apelido', 'Preencha o apelido').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render("index", { validacao: errors })
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {
            apelido: dadosForm.apelido,
            mensagem: 'acabou de entrar no chat'
        }
        );

    res.render("chat", { dadosForm: dadosForm });
}
