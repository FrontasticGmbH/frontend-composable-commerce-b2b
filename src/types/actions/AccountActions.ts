import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import { Account } from "@commercetools/types/account";
import {
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
} from "../payloads/AccountPayloads";

type GetAccountActionReturn =
	| {
			loggedIn: false;
	  }
	| {
			loggedIn: true;
			account: Account;
	  };

type GetAccountAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<GetAccountActionReturn>>;

type LoginAccountAction = (
	payload: LoginAccountPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type LogoutAccountAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<void>>;

type RegisterAccountAction = (
	payload: RegisterAccountPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type ConfirmAccountAction = (
	payload: ConfirmAccountPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type RequestAccountConfirmationEmailAction = (
	payload: RequestAccountConfirmationEmailPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

type ChangeAccountPasswordAction = (
	payload: ChangeAccountPasswordPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type RequestAccountPasswordResetAction = (
	payload: RequestAccountPasswordResetPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

type ResetAccountPasswordAction = (
	payload: ResetAccountPasswordPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type UpdateAccountAction = (
	payload: UpdateAccountPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type AddAccountAddressAction = (
	payload: AddAccountAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type UpdateAccountAddressAction = (
	payload: UpdateAccountAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type AddAccountBillingAddressAction = (
	payload: AddAccountBillingAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type AddAccountShippingAddressAction = (
	payload: AddAccountShippingAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type RemoveAccountAddressAction = (
	payload: RemoveAccountAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type SetDefaultAccountBillingAddressAction = (
	payload: SetDefaultAccountBillingAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type SetDefaultAccountShippingAddressAction = (
	payload: SetDefaultAccountShippingAddressPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Account>>;

type DeleteAccountAction = (
	payload: DeleteAccountPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

export {
	GetAccountActionReturn,
	GetAccountAction,
	LoginAccountAction,
	LogoutAccountAction,
	RegisterAccountAction,
	ConfirmAccountAction,
	RequestAccountConfirmationEmailAction,
	ChangeAccountPasswordAction,
	RequestAccountPasswordResetAction,
	ResetAccountPasswordAction,
	UpdateAccountAction,
	AddAccountAddressAction,
	UpdateAccountAddressAction,
	AddAccountBillingAddressAction,
	AddAccountShippingAddressAction,
	RemoveAccountAddressAction,
	SetDefaultAccountBillingAddressAction,
	SetDefaultAccountShippingAddressAction,
	DeleteAccountAction,
};
