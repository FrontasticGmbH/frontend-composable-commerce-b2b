type CreateWishlistQuery = {
	storeKey?: string;
};

type GetWishlistQuery = {
	wishlistId?: string;
};

type GetWishlistsQuery = {
	storeKey?: string;
};

type UpdateWishlistQuery = {
	id?: string;
};

type ClearWishlistQuery = {
	wishlistId?: string;
};

type DeleteWishlistQuery = {
	id?: string;
	storeKey?: string;
};

type AddToWishlistQuery = {
	/*
	 * Wishlist ID
	 **/
	id?: string;
};

type UpdateWishlistItemQuery = {
	/*
	 * Wishlist ID
	 **/
	id?: string;
};

type RemoveFromWishlistQuery = {
	/*
	 * Wishlist ID
	 **/
	id?: string;
};

export {
	CreateWishlistQuery,
	GetWishlistQuery,
	GetWishlistsQuery,
	UpdateWishlistQuery,
	ClearWishlistQuery,
	DeleteWishlistQuery,
	AddToWishlistQuery,
	UpdateWishlistItemQuery,
	RemoveFromWishlistQuery,
};
