import Facebook from './previews/facebook';
import React from 'react';
import Twitter from './previews/twitter';

export default {
	roots: {
		socialCards: () => {
			return (
				<>
					<Twitter />
					<Facebook />
				</>
			);
		},
	},
	state: {
		socialCards: {
			siteLogo: '',
			twitter: {
				site: '',
				creator: '',
			},
			facebook: {
				facebookAppId: '',
			},
		},
	},
};
