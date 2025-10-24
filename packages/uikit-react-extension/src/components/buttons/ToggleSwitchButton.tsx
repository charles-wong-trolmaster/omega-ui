import React, { useState } from 'react';
import './ToggleSwitchButton.scss';

export interface ToggleSwitchButtonProps {
	active?: boolean;
	defaultActive?: boolean;
	onChange?: (active: boolean) => void;
	disabled?: boolean;
	className?: string;
	children?: React.ReactNode;
}

export const ToggleSwitchButton: React.FC<ToggleSwitchButtonProps> = ({ active: controlledActive, defaultActive = false, onChange, disabled = false, className = '' }) => {
	const [internalActive, setInternalActive] = useState(defaultActive);

	// Determine if component is controlled or uncontrolled
	const isControlled = controlledActive !== undefined;
	const isActive = isControlled ? controlledActive : internalActive;

	const handleClick = () => {
		if (disabled) return;

		const newValue = !isActive;

		// Update internal state if uncontrolled
		if (!isControlled) {
			setInternalActive(newValue);
		}

		// Call onChange callback
		onChange?.(newValue);
	};

	return (
		<button type="button" className={`uk-button-toggle-switch${isActive ? ' uk-active' : ''}${disabled ? ' uk-disabled' : ''}${className ? ` ${className}` : ''}`} onClick={handleClick} disabled={disabled} aria-pressed={isActive}>
			<span className="spacer"></span>
			<span className="slider"></span>
		</button>
	);
};
