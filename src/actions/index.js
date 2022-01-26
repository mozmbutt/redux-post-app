export const selectPost = (post) => {
	return {
		type: 'POST_SELECTED',
		payload: post
	};
};