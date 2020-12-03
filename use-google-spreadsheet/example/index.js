import '@babel/polyfill';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useGoogleSpreadsheet from '../lib';

const urls = [
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vRM2HlAsG7qP7tL63eD47o_0_iJFHJSCjkZVT1StBDIKvCn1X0Nf1BBu88W7ZU26pjMhUL91DfexWV2/pubhtml',
	'https://docs.google.com/spreadsheets/d/1XqhOiYajpp7zzj3ncJ8EpCKZoNOJSjiQdLTXCiBqCWc/edit?usp=sharing',
];

const API_KEY = 'AIzaSyAGqRS1wyYGUBs5ZWI2GbqbcNteRqvKWjk';

const Example = ({}) => {
	const [index, setIndex] = useState(0);
	const { rows, isFetching } = useGoogleSpreadsheet(urls[index], API_KEY);
	const handleChangeUrl = () => {
		setIndex((index + 1) % urls.length);
	};
	return (
		<>
			{isFetching ? (
				<div className="loading">Loading...</div>
			) : rows ? (
				<ul>
					{rows.map((row, i) => {
						return (
							<li key={i}>
								{Object.keys(row).map((key, i) => (
									<span key={i}>
										{key}: {row[key]}
										<br />
									</span>
								))}
							</li>
						);
					})}
				</ul>
			) : (
				<span>No Data</span>
			)}
			<button onClick={handleChangeUrl}>change url</button>
		</>
	);
};

window.onload = function () {
	ReactDOM.render(<Example />, document.getElementById('root'));
};
