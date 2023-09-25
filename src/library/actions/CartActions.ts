import { ComposableCommerceEventsB2B } from "../../types/events/ComposableCommerceEventsB2B";
import { SDK, ServerOptions } from "@commercetools/frontend-sdk";
import {
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
} from "../../types/actions/CartActions";
import {
	Cart,
	Order,
	Payment,
	ShippingMethod,
} from "@commercetools/types/cart";
import {
	AddCartItemPayload,
	AddPaymentByInvoicePayload,
	CancelOrderPayload,
	CheckoutCartPayload,
	ReassignCartPayload,
	RedeemDiscountCodePayload,
	RemoveCartItemPayload,
	RemoveDiscountCodePayload,
	ReturnOrderItemsPayload,
	SetCartShippingMethodPayload,
	SplitCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	UpdatePaymentPayload,
} from "../../types/payloads/CartPayloads";
import { GetCartShippingMethodsQuery } from "../../types/queries/CartQueries";

export type CartActions = {
	getCart: GetCartAction;
	updateCart: UpdateCartAction;
	reassignCart: ReassignCartAction;
	replicateOrder: ReplicateOrderAction;
	addItem: AddCartItemAction;
	updateItem: UpdateCartItemAction;
	splitItem: SplitCartItemAction;
	removeItem: RemoveCartItemAction;
	getShippingMethods: GetCartShippingMethodsAction;
	getAvailableShippingMethods: GetAvailableCartShippingMethodsAction;
	setShippingMethod: SetCartShippingMethodAction;
	redeemDiscountCode: RedeemDiscountCodeAction;
	removeDiscountCode: RemoveDiscountCodeAction;
	updatePayment: UpdatePaymentAction;
	addPaymentByInvoice: AddPaymentByInvoiceAction;
	checkout: CheckoutCartAction;
	returnOrderItems: ReturnOrderItemsAction;
	cancelOrder: CancelOrderAction;
	getOrderHistory: GetOrderHistoryAction;
};

export const getCartActions = (
	sdk: SDK<ComposableCommerceEventsB2B>
): CartActions => {
	return {
		getCart: async (options?: { serverOptions?: ServerOptions }) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/getCart",
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		updateCart: async (
			payload: UpdateCartPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/updateCart",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		reassignCart: async (
			payload: ReassignCartPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/reassignCart",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		replicateOrder: async (options?: { serverOptions?: ServerOptions }) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/replicateCart",
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		addItem: async (
			payload: AddCartItemPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/addToCart",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		updateItem: async (
			payload: UpdateCartItemPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/updateLineItem",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		splitItem: async (
			payload: SplitCartItemPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/splitLineItem",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		removeItem: async (
			payload: RemoveCartItemPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/removeLineItem",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		getShippingMethods: async (
			query?: GetCartShippingMethodsQuery,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<ShippingMethod[]>({
				actionName: "cart/getShippingMethods",
				query,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		getAvailableShippingMethods: async (options?: {
			serverOptions?: ServerOptions;
		}) => {
			const response = await sdk.callAction<ShippingMethod[]>({
				actionName: "cart/getAvailableShippingMethods",
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		setShippingMethod: async (
			payload: SetCartShippingMethodPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/setShippingMethod",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		redeemDiscountCode: async (
			payload: RedeemDiscountCodePayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/redeemDiscount",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		removeDiscountCode: async (
			payload: RemoveDiscountCodePayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/removeDiscount",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		updatePayment: async (
			payload: UpdatePaymentPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Payment>({
				actionName: "cart/updatePayment",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		addPaymentByInvoice: async (
			payload: AddPaymentByInvoicePayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/addPaymentByInvoice",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		checkout: async (
			payload: CheckoutCartPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Order>({
				actionName: "cart/checkout",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		returnOrderItems: async (
			payload: ReturnOrderItemsPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Order>({
				actionName: "cart/returnItems",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		cancelOrder: async (
			payload: CancelOrderPayload,
			options?: {
				serverOptions?: ServerOptions;
			}
		) => {
			const response = await sdk.callAction<Order>({
				actionName: "cart/cancelOrder",
				payload,
				serverOptions: options?.serverOptions,
			});
			return response;
		},
		getOrderHistory: async (options?: {
			serverOptions?: ServerOptions;
		}) => {
			const response = await sdk.callAction<Order[]>({
				actionName: "cart/getOrders",
				serverOptions: options?.serverOptions,
			});
			return response;
		},
	};
};
