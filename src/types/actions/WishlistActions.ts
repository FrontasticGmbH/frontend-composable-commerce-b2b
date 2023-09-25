import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import { Wishlist } from "@commercetools/types/wishlist";
import {
	CreateWishlistPayload,
	UpdateWishlistPayload,
	AddToWishlistPayload,
	UpdateWishlistItemPayload,
	RemoveFromWishlistPayload,
} from "../payloads/WishlistPayloads";
import {
	CreateWishlistQuery,
	GetWishlistQuery,
	GetWishlistsQuery,
	UpdateWishlistQuery,
	ClearWishlistQuery,
	DeleteWishlistQuery,
	AddToWishlistQuery,
	UpdateWishlistItemQuery,
	RemoveFromWishlistQuery,
} from "../queries/WishlistQueries";

type CreateWishlistAction = (
	payload: CreateWishlistPayload,
	query?: CreateWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

type GetWishlistAction = (
	query?: GetWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

type GetWishlistsAction = (
	query?: GetWishlistsQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist[]>>;

type UpdateWishlistAction = (
	payload: UpdateWishlistPayload,
	query?: UpdateWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

type ClearWishlistAction = (
	query?: ClearWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

type DeleteWishlistAction = (
	query?: DeleteWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

type AddToWishlistAction = (
	payload: AddToWishlistPayload,
	query?: AddToWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

type UpdateWishlistItemAction = (
	payload: UpdateWishlistItemPayload,
	query?: UpdateWishlistItemQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

type RemoveFromWishlistAction = (
	payload: RemoveFromWishlistPayload,
	query?: RemoveFromWishlistQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Wishlist>>;

export {
	CreateWishlistAction,
	GetWishlistAction,
	GetWishlistsAction,
	UpdateWishlistAction,
	ClearWishlistAction,
	DeleteWishlistAction,
	AddToWishlistAction,
	UpdateWishlistItemAction,
	RemoveFromWishlistAction,
};
