import React from 'react';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { ColorPaletteCustom, icons, getOption, checkAttr, getAttrKey, ComponentUseToggle, IconLabel, IconToggle, SimpleVerticalSingleSelect } from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';

export const ButtonOptions = (attributes) => {
	const {
		title: manifestTitle,
	} = manifest;

	const {
		setAttributes,
		label = manifestTitle,
		buttonShowControls = true,

		showButtonUse = false,
		showLabel = false,
		showButtonColor = true,
		showButtonSize = true,
		showButtonWidth = true,
		showButtonIsAnchor = true,
		showButtonId = true,
		showButtonIsLink = true,
	} = attributes;

	if (!buttonShowControls) {
		return null;
	}

	const buttonUse = checkAttr('buttonUse', attributes, manifest);
	const buttonColor = checkAttr('buttonColor', attributes, manifest);
	const buttonSize = checkAttr('buttonSize', attributes, manifest);
	const buttonWidth = checkAttr('buttonWidth', attributes, manifest);
	const buttonIsAnchor = checkAttr('buttonIsAnchor', attributes, manifest);
	const buttonId = checkAttr('buttonId', attributes, manifest);
	const buttonIsLink = checkAttr('buttonIsLink', attributes, manifest);

	const sizeOptions = getOption('buttonSize', attributes, manifest).map(({ label, value, icon: iconName }) => {
		return {
			onClick: () => setAttributes({
				[getAttrKey('buttonSize', attributes, manifest)]: value,
				[getAttrKey('buttonIsLink', attributes, manifest)]: false
			}),
			label: label,
			isActive: buttonSize === value,
			icon: icons[iconName],
		};
	});

	const widthOptions = getOption('buttonWidth', attributes, manifest).map(({ label, value, icon: iconName }) => {
		return {
			onClick: () => setAttributes({ [getAttrKey('buttonWidth', attributes, manifest)]: value }),
			label: label,
			isActive: buttonWidth === value,
			icon: icons[iconName],
		};
	});

	return (
		<>
			<ComponentUseToggle
				label={label}
				checked={buttonUse}
				onChange={(value) => setAttributes({ [getAttrKey('buttonUse', attributes, manifest)]: value })}
				showUseToggle={showButtonUse}
				showLabel={showLabel}
			/>

			{buttonUse &&
				<>
					{showButtonColor &&
						<ColorPaletteCustom
							label={<IconLabel icon={icons.color} label={__('Color', 'evo')} />}
							value={buttonColor}
							colors={getOption('buttonColor', attributes, manifest, true)}
							onChange={(value) => setAttributes({ [getAttrKey('buttonColor', attributes, manifest)]: value })}
						/>
					}

					{showButtonIsLink &&
						<IconToggle
							icon={icons.link}
							label={__('Display as link', 'evo')}
							checked={buttonIsLink}
							onChange={(value) => setAttributes({ [getAttrKey('buttonIsLink', attributes, manifest)]: value })}
						/>
					}

					{showButtonSize && !buttonIsLink &&
						<SimpleVerticalSingleSelect
							label={<IconLabel icon={icons.size} label={__('Size', 'evo')} />}
							options={sizeOptions}
						/>
					}

					{showButtonWidth && !buttonIsLink &&
						<SimpleVerticalSingleSelect
							label={<IconLabel icon={icons.width} label={__('Width', 'evo')} />}
							options={widthOptions}
						/>
					}

					{showButtonIsAnchor &&
						<IconToggle
							icon={icons.anchor}
							label={__('Anchor', 'evo')}
							checked={buttonIsAnchor}
							onChange={(value) => setAttributes({ [getAttrKey('buttonIsAnchor', attributes, manifest)]: value })}
							help={__('Make sure to set the URL as an ID of the element you want to target, e.g. #my-block.', 'evo')}
						/>
					}

					{showButtonId &&
						<TextControl
							label={<IconLabel icon={icons.id} label={__('Unique identifier', 'evo')} />}
							value={buttonId}
							onChange={(value) => setAttributes({ [getAttrKey('buttonId', attributes, manifest)]: value })}
						/>
					}
				</>
			}

		</>
	);
};
