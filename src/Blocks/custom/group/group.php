<?php

/**
 * Template for the Group block.
 *
 * @package Evo
 */

$blockClass = $attributes['blockClass'] ?? '';

?>

<div class="<?php echo esc_attr($blockClass); ?>">
	<?php echo $innerBlockContent; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
