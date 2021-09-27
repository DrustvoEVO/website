<?php

/**
 * Display footer
 *
 * @package Evo
 */

use EvoVendor\EightshiftLibs\Helpers\Components;

?>

</main>

<?php
echo Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	'layout-three-columns',
	[
		'additionalClass' => 'footer',
		'layoutThreeColumnsLeft' => Components::render(
			'copyright',
			[
				'copyrightBy' => esc_html__('Eightshift', 'evo'),
				'copyrightYear' => gmdate('Y'),
				'copyrightContent' => esc_html__('Made with 🧡  by Team Eightshift', 'evo'),
			]
		),
		'layoutThreeColumnsRight' => Components::render(
			'menu',
			[
				'variation' => 'horizontal'
			]
		),
	]
);

wp_footer();
?>
</body>
</html>
