import ResponsiveLayout from './components/layout/ResponsiveLayout';
import BackgroundContent from './content/background/BackgroundContent';
import BottomContent from './content/bottom/BottomContent';
import MainContent from './content/main/MainContent';
import SideContent from './content/side/SideContent';
import TopContent from './content/top/TopContent';

function App() {
	return (
		<div className="App">
			<ResponsiveLayout>
				<ResponsiveLayout.Background>
					<BackgroundContent />
				</ResponsiveLayout.Background>

				<ResponsiveLayout.Top>
					<TopContent />
				</ResponsiveLayout.Top>

				<ResponsiveLayout.Main>
					<MainContent />
				</ResponsiveLayout.Main>

				<ResponsiveLayout.Side>
					<SideContent />
				</ResponsiveLayout.Side>

				<ResponsiveLayout.Bottom>
					<BottomContent />
				</ResponsiveLayout.Bottom>
			</ResponsiveLayout>
		</div>
	);
}

export default App;
