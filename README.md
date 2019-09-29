# analisador-lexico
## Feito com ❤ por [murielsouza](https://github.com/murielsouza/), [ViniciusCavichioli](https://github.com/ViniciusCavichioli/) e [José Henrique](https://github.com/jhcb007/) para:

   * Disciplina: [0715 - Compiladores / 2019.2](http://ulbra-to.br/cursos/Ciencia-da-Computacao/2019/2/turmas/0715) 
   * Professor: [Msc. Jackson Gomes](https://github.com/jacksongomesbr)
   * Centro Universitário Luterano de Palmas - CEULP/ULBRA

### bibliotecas e frameworks
![mermaid](https://img.shields.io/badge/mermaid-8.3.1-yellowgreen.svg)
![bootStrap](http://img.shields.io/badge/bootstrap-4.3.1-blues.svg)
![jquery](https://img.shields.io/badge/jquery-3.3.1-oranges.svg)

### funcionamento
Abra o arquivo HTML (index.html) e defina uma data (e.g: 31/10/2019) e escolha o tempo para geração da árvore . Por exemplo:

1. [Entrada] _data e tempo de execução_:

      ![](https://github.com/murielsouza/analisador-lexico/blob/henrique/entrada.PNG)

2. [Processamento]

  2.1 - Análise Léxica: Verifica se todos os elementos da data são tokens válidos.
  
  2.2 - Análise Sintática: Verifica se os tokens estão estrutuados conforme a definição (dd/mm/aaaa)

![processando código](https://github.com/murielsouza/scanner-lexico-de-codigo/blob/master/scannerLexicoCompiladores/exemplos/gears%20gif.gif)

3. [Saída] _file.json e árvore de derivação_:

  ![](https://github.com/murielsouza/analisador-lexico/blob/henrique/saida.gif)
  
  A aplicação gera um arquivo .json e utiliza para gerar a árvore de derivação da data definida, utilizando derivação mais a esquerda. Se a data não for compátivel (inválidas, tokens desconhecidos e etc) árvore acusará o erro.
