import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import {
	Cart,
	Order,
	Payment,
	ShippingMethod,
} from "@commercetools/types/cart";
import {
	UpdateCartPayload,
	ReassignCartPayload,
	AddCartItemPayload,
	UpdateCartItemPayload,
	SplitCartItemPayload,
	RemoveCartItemPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload,
	UpdatePaymentPayload,
	AddPaymentByInvoicePayload,
	CheckoutCartPayload,
	ReturnOrderItemsPayload,
	CancelOrderPayload,
} from "../payloads/CartPayloads";
import { GetCartShippingMethodsQuery } from "../queries/CartQueries";

type GetCartAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Cart>>;

type UpdateCartAction = (
	payload: UpdateCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type ReassignCartAction = (
	payload: ReassignCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type ReplicateOrderAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Order>>;

type AddCartItemAction = (
	payload: AddCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type UpdateCartItemAction = (
	payload: UpdateCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type SplitCartItemAction = (
	payload: SplitCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type RemoveCartItemAction = (
	payload: RemoveCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type GetCartShippingMethodsAction = (
	query?: GetCartShippingMethodsQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<ShippingMethod[]>>;

type GetAvailableCartShippingMethodsAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<ShippingMethod[]>>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type UpdatePaymentAction = (
	payload: UpdatePaymentPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Payment>>;

type AddPaymentByInvoiceAction = (
	payload: AddPaymentByInvoicePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>;

type CheckoutCartAction = (
	payload: CheckoutCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>;

type ReturnOrderItemsAction = (
	payload: ReturnOrderItemsPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>;

type CancelOrderAction = (
	payload: CancelOrderPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>;

type GetOrderHistoryAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Order[]>>;

export {
	type GetCartAction,
	type UpdateCartAction,
	type ReassignCartAction,
	type ReplicateOrderAction,
	type AddCartItemAction,
	type UpdateCartItemAction,
	type SplitCartItemAction,
	type RemoveCartItemAction,
	type GetCartShippingMethodsAction,
	type GetAvailableCartShippingMethodsAction,
	type SetCartShippingMethodAction,
	type RedeemDiscountCodeAction,
	type RemoveDiscountCodeAction,
	type UpdatePaymentAction,
	type AddPaymentByInvoiceAction,
	type CheckoutCartAction,
	type ReturnOrderItemsAction,
	type CancelOrderAction,
	type GetOrderHistoryAction,
};
