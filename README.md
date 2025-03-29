# Projeto: Website alimentado com API Wordpress

## **1. Visão Geral do Projeto**

### **Objetivo**

Criar um tema WordPress para servir como backend e fornecer dados dinamicamente para um frontend em React via REST API. O projeto também inclui um formulário com validação e salvamento em um _Custom Post Type_ no WordPress.

### **Tecnologias Utilizadas**

- **Backend**: WordPress (PHP, REST API, Custom Post Type)
- **Frontend**: React
- **Banco de Dados**: MySQL (WordPress)

---

## **2. Configuração do Ambiente**

### **Pré-requisitos**

- Servidor local com suporte a PHP e MySQL (_XAMPP, LAMP ou LocalWP_)
- WordPress instalado
- Node.js e npm/yarn instalados para rodar o frontend

### **Passos para instalação**

1. **Instale o WordPress**
   - Baixe e instale o WordPress.
   - Configure um banco de dados.
2. **Instale o Tema Personalizado**

   - Copie o código abaixo para o _functions.php_ do seu tema

     ```php
            // Add image to the post
        if (! function_exists('add_feature_image')) :
            /**
            * Callback function for adding image URL to API Rest
            */
            function add_feature_image($data, $post, $request) {
                $featured_image_url = get_the_post_thumbnail_url($post->ID, 'full');

                if ($featured_image_url) {
                    $data->data['featured_image_url'] = $featured_image_url;
                }

                return $data;
            }
        endif;

        add_filter('rest_prepare_post', 'add_feature_image', 10, 3);

        // Add post content without HTML formatting
        if (! function_exists('add_content_no_HTML')) :
            /**
            * Callback function for adding post content without HTML formatting
            */
            function add_content_no_HTML($data, $post, $request) {
                $post_content = wp_strip_all_tags($post->post_content);

                if ($post_content) {
                    $data->data['content']['text'] = $post_content;
                }

                return $data;
            }
        endif;

        add_filter('rest_prepare_post', 'add_content_no_HTML', 10, 3);
     ```

   - Ative o tema pelo painel do WordPress.

3. **Ative Permalinks e a API REST**
   - No painel, vá para _Configurações → Links Permanentes_ e selecione “Nome do post”.

4. **Custom Post Type & Meta Fields**
   - Copie a pasta _newsletter-plugin-ctp_ para a pasta de plugins do seu Wordpress
   - Copie a pasta _jwt-authentication-for-wp-rest-api_ para a pasta de plugins do seu Wordpress
   - Ative os plugins no seu painel

## Campos personalizados da API WordPress

#### Resgatar token de autenticação

```http
  GET /posts
```

#### Retorno personalizado

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `featured_image_url`      | `string` | URL da imagem de destaque do post|
| `content->text`      | `string` | Texto do post sem formatação HTML|

---

## Documentação da API para JWT

#### Resgatar token de autenticação

```http
  POST /jwt-auth/v1/token
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. Username do seu painel Wordpress |
| `password`      | `string` | **Obrigatório**. Senha do seu painel Wordpress |

#### Retorno

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `token`      | `string` | Token para requisições da API do CTP|

---


## Documentação da API do CTP

#### Retorna todos os subs da newsletter

```http
  GET /newsletter_subs
```
#### Retorna um sub da newsletter

```http
  GET /newsletter_subs/${id}
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sub que você quer |

#### Cadastra um sub da newsletter

```http
  POST /newsletter_subs

  Authorization: Bearer <seu-token>
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O ID do item que você quer |
| `status`      | `string` | **Obrigatório**. O status do post, preferência por 'publish' |
| `meta`      | `string` | **Obrigatório**. Objeto com os dados do sub |

#### Corpo do meta

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. Primeiro nome do sub |
| `sobrenome`      | `string` | **Obrigatório**. Sobrenome do sub |
| `email`      | `string` | **Obrigatório**. E-mail do sub |
| `telefone`      | `string` | **Opcional**. Telefone do sub |

---

🚀 **Este projeto foi desenvolvido como parte de um processo seletivo**
