export interface Post {
	_id: string;
	_createdAt: Date;
	title: string;
	author: {
		name: string;
		image: string;
	};
	description: string;
	comments:Comment[]
	mainImage: {
		asset: {
			_ref: string
		}
	};
	slug: {
		current: string;
	};
	body: object[];
}

export interface Comment {
	name: string;
	approved:boolean
	email:string;
	comment:string;
	post: {
		_ref: string
		_type:string
	}
	_id:string
	_rev:string
	_type:string
	_updatedAt:string
	_createdAt:Date;
}