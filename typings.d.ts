export interface Post {
	node: {
		title: string;
		slug: string;
		featuredPost: boolean;
		author: Author;
		id:string
		categories: [Categories];
		createdAt: Date;
		excerpt: string;
		featuredPhoto: {
			url: string;
		};
	}
}

interface Author {
	bio: string;
	name: string;
	id: string;
	photo: {
		url: string;
	};
}
interface Categories {
	name: string;
	slug: string;
}
