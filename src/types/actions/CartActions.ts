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
}) => Promise<SDKResponse<Cart>>; // getCart

type UpdateCartAction = (
	payload: UpdateCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // updateCart

type ReassignCartAction = (
	payload: ReassignCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // reassignCart

type ReplicateOrderAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Order>>; // replicateCart

type AddCartItemAction = (
	payload: AddCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // addToCart

type UpdateCartItemAction = (
	payload: UpdateCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // updateLineItem

type SplitCartItemAction = (
	payload: SplitCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // splitLineItem

type RemoveCartItemAction = (
	payload: RemoveCartItemPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // removeLineItem dupe

type GetCartShippingMethodsAction = (
	query?: GetCartShippingMethodsQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<ShippingMethod[]>>; // getShippingMethods

type GetAvailableCartShippingMethodsAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<ShippingMethod[]>>; // getAvailableShippingMethods

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // setShippingMethod

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // redeemDiscount

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // removeDiscount

type UpdatePaymentAction = (
	payload: UpdatePaymentPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Payment>>; // updatePayment

type AddPaymentByInvoiceAction = (
	payload: AddPaymentByInvoicePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Cart>>; // addPaymentByInvoice

type CheckoutCartAction = (
	payload: CheckoutCartPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>; // checkout

type ReturnOrderItemsAction = (
	payload: ReturnOrderItemsPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>; // returnItems

type CancelOrderAction = (
	payload: CancelOrderPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order>>; // cancelOrder

type GetOrderHistoryAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Order[]>>; // getOrders

export {
	GetCartAction,
	UpdateCartAction,
	ReassignCartAction,
	ReplicateOrderAction,
	AddCartItemAction,
	UpdateCartItemAction,
	SplitCartItemAction,
	RemoveCartItemAction,
	GetCartShippingMethodsAction,
	GetAvailableCartShippingMethodsAction,
	SetCartShippingMethodAction,
	RedeemDiscountCodeAction,
	RemoveDiscountCodeAction,
	UpdatePaymentAction,
	AddPaymentByInvoiceAction,
	CheckoutCartAction,
	ReturnOrderItemsAction,
	CancelOrderAction,
	GetOrderHistoryAction,
};
