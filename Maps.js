const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Mary', 'USER');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Júlia', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Samira', 'ADMIN');
userRoles.set('Milly', 'USER');
userRoles.set('Beto', 'USER');
userRoles.set('Cris', 'ADMIN');
userRoles.set('Diva', 'USER');
userRoles.set('Mary', 'USER');
userRoles.set('Edu', 'ADMIN');
userRoles.set('Geraldo', 'ADMIN');
userRoles.set('Léia', 'USER');


console.log(getAdmins(userRoles));