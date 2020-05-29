import Facebook from './previews/facebook';
import React from 'react';
import Twitter from './previews/twitter';

export default {
	roots: {
		socialPreviews: () => {
			return (
				<>
					<Twitter />
					<Facebook />
				</>
			);
		},
	},
	state: {
		socialPreviews: {
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
