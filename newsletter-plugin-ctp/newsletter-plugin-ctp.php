<?php
/**
 * Plugin Name: Newsletter CTP
 * Description: Registra o Custom Post Type "Newsletter Sub".
 * Version: 1.0
 * Author: Gabriel Pelincel
 */

if (! function_exists('create_sub_newsletter')) :
	function create_sub_newsletter() {
		$args = array(
			'labels' => array(
				'name' 				 => 'Newsletter Subs',
				'singular_name'      => 'Newsletter Sub',
				'menu_name'          => 'Newsletter Subs',
				'name_admin_bar'     => 'Newsletter Sub',
				'add_new'            => 'Adicionar Novo',
				'add_new_item'       => 'Adicionar Novo Newsletter Sub',
				'new_item'           => 'Novo Newsletter Sub',
				'edit_item'          => 'Editar Newsletter Sub',
				'view_item'          => 'Ver Newsletter Sub',
				'all_items'          => 'Todos os Newsletter Subs',
				'search_items'       => 'Procurar Newsletter Subs',
				'parent_item_colon'  => 'Newsletter Sub Pai:',
				'not_found'          => 'Nenhum Newsletter Sub encontrado.',
				'not_found_in_trash' => 'Nenhum Newsletter Sub encontrado na lixeira.'
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'newsletter-sub'),
			'show_in_rest' => true,
			'rest_base' => 'newsletter-subs',
			'supports' => array('title', 'custom-fields'),
		);

		register_post_type('newsletter_subs', $args);

		$fields = ['nome', 'sobrenome', 'email', 'telefone'];
		
		foreach ($fields as $field) {
			register_post_meta('newsletter_subs', $field, [
				'type' => 'string',
				'single' => true,
				'show_in_rest' => true
			]);
		}
	}

	add_action('init', 'create_sub_newsletter');
endif;