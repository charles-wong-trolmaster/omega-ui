import React from 'react';
import './ResponsiveLayout.scss';

interface ResponsiveLayoutProps {
	children: React.ReactNode;
}

interface SlotProps {
	children: React.ReactNode;
}

// Slot components
const Top: React.FC<SlotProps> = ({ children }) => <>{children}</>;
const Main: React.FC<SlotProps> = ({ children }) => <>{children}</>;
const Side: React.FC<SlotProps> = ({ children }) => <>{children}</>;
const Bottom: React.FC<SlotProps> = ({ children }) => <>{children}</>;
const Background: React.FC<SlotProps> = ({ children }) => <>{children}</>;

// Helper function to find specific slot content
const findSlot = (children: React.ReactNode, slotType: React.FC<SlotProps>) => {
	const childArray = React.Children.toArray(children);
	const slot = childArray.find((child) => React.isValidElement(child) && child.type === slotType);

	return slot && React.isValidElement(slot) ? (slot.props as SlotProps).children : null;
};

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> & {
	Top: typeof Top;
	Main: typeof Main;
	Side: typeof Side;
	Bottom: typeof Bottom;
	Background: typeof Background;
} = ({ children }) => {
	const topContent = findSlot(children, Top);
	const mainContent = findSlot(children, Main);
	const sideContent = findSlot(children, Side);
	const bottomContent = findSlot(children, Bottom);
	const backgroundContent = findSlot(children, Background);

	return (
		<div className="responsive-layout">
			<div className="background">{backgroundContent}</div>

			<div className="top">{topContent}</div>

			<div className="middle">
				<div className="side">{sideContent}</div>
				<div className="main">{mainContent}</div>
			</div>

			<div className="bottom">{bottomContent}</div>
		</div>
	);
};

// Attach slot components as static properties
ResponsiveLayout.Top = Top;
ResponsiveLayout.Main = Main;
ResponsiveLayout.Side = Side;
ResponsiveLayout.Bottom = Bottom;
ResponsiveLayout.Background = Background;

export default ResponsiveLayout;
