import React from 'react';
import ThemeSelector from './forms/theme-selector';

function Dashboard({printHandle, selectedThemeSet}) {
    return (
        <>
            <button 
					className="btn btn-print-cv"
					onClick={printHandle}>
				Print / Save PDF
			</button>
			<ThemeSelector selectedThemeSet={selectedThemeSet} />
        </>
    );
}

export default Dashboard;