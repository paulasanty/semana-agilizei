Feature: Cadastro

    Como usuário, desejo realizar um cadastro
    Para acessar o sistema

Scenario: Cadastro de um usuário em um site
    Given que acesso o site
    When informar meus dados
    And salvar
    Then devo ser cadastrado com sucesso

    #Give / Dado -> contexto 
    # when / quando -> ação executada
    # then / entao -> resultado esperado
    # and / e -> continuiade do passo anterior