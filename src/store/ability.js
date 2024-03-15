import { Ability } from '@casl/ability'

export const ability = new Ability()

export const abilityPlugin = (store) => {
	ability.update(store.state.auth.rules);

	return store.subscribe((mutation) => {
		// eslint-disable-next-line default-case
		switch (mutation.type) {
			case 'auth/loginSuccess':
				// eslint-disable-next-line no-case-declarations
				let formattedRules = [];
				if(mutation.payload.userinfo.Roles.length > 0) {
					formattedRules = mutation.payload.userinfo.Roles.map(perm => {
						// eslint-disable-next-line prefer-const
						let formattedObj = {};
						formattedObj.actions = perm;
						formattedObj.subject = 'permissions';
						return formattedObj;
					})
				}
				ability.update(formattedRules);
				break;
			case 'auth/logoutSuccess':
				ability.update([{ actions: 'read', subject: 'all' }])
				break
		}
	})
};
