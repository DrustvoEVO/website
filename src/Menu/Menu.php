<?php

/**
 * The Menu specific functionality.
 *
 * @package Evo\Menu
 */

declare(strict_types=1);

namespace Evo\Menu;

use EvoVendor\EightshiftLibs\Menu\AbstractMenu;

/**
 * Class Menu
 */
class Menu extends AbstractMenu
{

	/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		\add_action('after_setup_theme', [$this, 'registerMenuPositions'], 11);
	}

	/**
	 * Return all menu positions
	 *
	 * @return array<string> Menu positions with slug => name structure.
	 */
	public function getMenuPositions(): array
	{
		return [
			'header_main_nav' => \esc_html__('Main Menu', 'evo'),
		];
	}
}
