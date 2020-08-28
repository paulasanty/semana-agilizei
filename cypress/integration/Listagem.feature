Feature: Listegem
    Como usuário, desejo acessar a listegem
    Para que eu possa visualizar meus dados de cadastro

Scenario: Listagem sem registros
    Given que o site não possui registros
    When acessar a listagem
    Then devo visualizar  a listagem vazia

Scenario: Listagem com apenas um registros
    Given o site possui apenas um registro
    When acessar a listagem
    Then devo visualizar apenas um registro
