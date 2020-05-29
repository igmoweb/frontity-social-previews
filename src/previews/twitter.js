import React from 'react';
import usePageDetails from '../hooks/use-page-details';
import { Head, connect } from 'frontity';

const Twitter = ( { state } ) => {
	const { description, image, title } = usePageDetails( state );
	const { socialPreviews } = state;
	const { twitter } = socialPreviews;
	return (
		<Head>
			<meta content="summary" name="twitter:card" />
			{ title !== '' && <meta content={ title } name="twitter:title" /> }
			{ image !== '' && <meta content={ image } name="twitter:image" /> }
			{ description !== '' && (
				<meta content={ description } name="twitter:description" />
			) }
			{ twitter.creator !== '' && (
				<meta content={ twitter.creator } name="twitter:creator" />
			) }
			{ twitter.site !== '' && (
				<meta content={ twitter.site } name="twitter:site" />
			) }
		</Head>
	);
};

export default connect( Twitter );
