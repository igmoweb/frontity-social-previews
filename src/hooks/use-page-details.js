import { decode } from 'frontity';

const usePageDetails = ( state ) => {
	const { frontity, router, socialPreviews, source } = state;
	const { siteLogo } = socialPreviews;
	const data = source.get( router.link );
	const { id, isPostType, isTaxonomy, taxonomy, type } = data;

	let description = '';
	let title = '';
	let image = siteLogo;
	if ( isPostType ) {
		const post = source[ type ][ id ];
		title = post?.title?.rendered || '';
		description = post?.excerpt?.rendered || '';
		const mediaId = post.featured_media || '';
		const media = source?.attachment[ mediaId ] || '';
		/* eslint-disable camelcase */
		image = media?.media_details?.sizes?.thumbnail
			? media?.media_details?.sizes?.thumbnail?.source_url
			: media?.source_url;
		/* eslint-enable */
	} else if ( isTaxonomy ) {
		const {
			description: taxDescription,
			name,
			taxonomy: currTaxonomy,
		} = source[ taxonomy ][ id ];
		const taxonomyCapitalized =
			currTaxonomy.charAt( 0 ).toUpperCase() + currTaxonomy.slice( 1 );

		title = `${ taxonomyCapitalized }: ${ decode( name ) } - ${
			state.frontity.title
		}`;
		description = taxDescription;
	} else {
		title = state?.frontity?.title || '';
		description = state?.frontity?.description || '';
	}

	return {
		title,
		description,
		image: image || siteLogo || '',
		currentUrl: `${ frontity.url }${ router.link }`,
	};
};

export default usePageDetails;
