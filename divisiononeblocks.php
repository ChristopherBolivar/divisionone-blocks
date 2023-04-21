<?php
/**
 * Plugin Name:       Division One Blocks
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Christopher Bolivar
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       divisiononeblocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 
//if entered directly, exit
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function create_block_divisiononeblocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_divisiononeblocks_block_init' );

//Register Division One Blocks category GUTENBERG and make it the first category
function divisiononeblocks_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'divisiononeblocks',
				'title' => __( 'Division One Blocks', 'divisiononeblocks' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'divisiononeblocks_category', 10, 2);


