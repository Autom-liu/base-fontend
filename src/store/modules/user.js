const userState = {
	user: null,
};

const userAction = {
	initUser(ctx, user) {
		ctx.commit('initUser', user);
	},
};

const userMutations = {
	initUser(state, user) {
		state.user = user;
	},
};

export {
	userState,
	userAction,
	userMutations,
};
