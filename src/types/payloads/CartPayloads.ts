import { Address } from "@commercetools/types/account";
import { LineItem, Payment, ReturnLineItem } from "@commercetools/types/cart";

type UpdateCartPayload = {
	account?: { email: string };
	shipping?: Address;
	billing?: Address;
};

type ReassignCartPayload = {
	accountId?: string;
	email?: string;
	businessUnitKey?: string;
};

type ReplicateOrderPayload = {
	orderId: string;
	businessUnitKey?: string;
};

type AddCartItemPayload = {
	lineItems: LineItem[];
	businessUnitKey?: string;
};

type UpdateCartItemPayload = {
	lineItem: { id: string; count?: number };
	businessUnitKey?: string;
};

type SplitCartItemPayload = {
	lineItemId: string;
	businessUnitKey?: string;
	shippingAddresses?: { address: Address; count: number }[];
};

type RemoveCartItemPayload = {
	lineItem: { id: string };
	businessUnitKey?: string;
};
type SetCartShippingMethodPayload = {
	shippingMethod: { id: string };
};

type RedeemDiscountCodePayload = {
	code: string;
};

type RemoveDiscountCodePayload = {
	discountId: string;
};

type UpdatePaymentPayload = {
	payment: Payment;
};

type AddPaymentByInvoicePayload = {
	payment: Payment;
};

type CheckoutCartPayload = {
	purchaseOrderNumber?: string;
	businessUnitKey?: string;
};

type ReturnOrderItemsPayload = {
	orderId: string;
	returnLineItems: ReturnLineItem[];
	businessUnitKey?: string;
};

type CancelOrderPayload = {
	orderId: string;
	businessUnitKey?: string;
};

export {
	UpdateCartPayload,
	ReassignCartPayload,
	ReplicateOrderPayload,
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
};
