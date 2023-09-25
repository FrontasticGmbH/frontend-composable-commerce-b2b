import { Address } from "@commercetools/types/account";

type LoginAccountPayload = {
	email: string;
	password: string;
};

type RegisterAccountPayload = {
	email: string;
	password: string;
	confirmed?: boolean;
	salutation?: string;
	firstName?: string;
	lastName?: string;
	companyName?: string;
	birthdayYear?: string;
	birthdayMonth?: string;
	birthdayDay?: string;
	vatNumber?: string;
	billngAddress?: Address;
	shippingAddress?: Address;
};

type ConfirmAccountPayload = {
	token: string;
};

type RequestAccountConfirmationEmailPayload = {
	email: string;
	password: string;
};

type ChangeAccountPasswordPayload = {
	oldPassword: string;
	newPassword: string;
};

type RequestAccountPasswordResetPayload = {
	email: string;
};

type ResetAccountPasswordPayload = {
	token: string;
	newPassword: string;
};

type UpdateAccountPayload = {
	email?: string;
	password?: string;
	confirmed?: boolean;
	salutation?: string;
	firstName?: string;
	lastName?: string;
	companyName?: string;
	birthdayYear?: string;
	birthdayMonth?: string;
	birthdayDay?: string;
	vatNumber?: string;
	billngAddress?: Address;
	shippingAddress?: Address;
};

type AddAccountAddressPayload = {
	address: Address;
};

type UpdateAccountAddressPayload = {
	address: Address;
};

type AddAccountBillingAddressPayload = {
	address: Address;
};

type AddAccountShippingAddressPayload = {
	address: Address;
};

type RemoveAccountAddressPayload = {
	addressId: string;
};

type SetDefaultAccountBillingAddressPayload = {
	addressId: string;
};

type SetDefaultAccountShippingAddressPayload = {
	addressId: string;
};

type DeleteAccountPayload = {
	password: string;
};

export {
	LoginAccountPayload,
	RegisterAccountPayload,
	ConfirmAccountPayload,
	RequestAccountConfirmationEmailPayload,
	ChangeAccountPasswordPayload,
	RequestAccountPasswordResetPayload,
	ResetAccountPasswordPayload,
	UpdateAccountPayload,
	AddAccountAddressPayload,
	UpdateAccountAddressPayload,
	AddAccountBillingAddressPayload,
	AddAccountShippingAddressPayload,
	RemoveAccountAddressPayload,
	SetDefaultAccountBillingAddressPayload,
	SetDefaultAccountShippingAddressPayload,
	DeleteAccountPayload,
};
