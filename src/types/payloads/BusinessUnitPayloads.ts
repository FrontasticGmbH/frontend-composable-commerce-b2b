import { Account, Address } from "@commercetools/types/account";
import { Store } from "@commercetools/types/store/Store";

type CreateBusinessUnitPayload = {
	account: Account;
	store: Store;
};

type UpdateBusinessUnitPayload = {
	name?: string;
	contactEmail?: string;
};

type AddAssociatePayload = {
	email: string;
	roleKeys: string[];
};

type UpdateAssociatePayload = {
	accountId: string;
	roleKeys: string[];
};

type RemoveAssociatePayload = {
	accountId: string;
};

type AddBusinessUnitAddressPayload = {
	address: Address;
};

type UpdateBusinessUnitAddressPayload = {
	address: Address;
};

type RemoveBusinessUnitAddressPayload = {
	address: Address;
};

export {
	CreateBusinessUnitPayload,
	UpdateBusinessUnitPayload,
	AddAssociatePayload,
	UpdateAssociatePayload,
	RemoveAssociatePayload,
	AddBusinessUnitAddressPayload,
	UpdateBusinessUnitAddressPayload,
	RemoveBusinessUnitAddressPayload,
};
