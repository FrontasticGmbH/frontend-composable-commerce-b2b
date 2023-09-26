import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import {
	AssociateRole,
	BusinessUnit,
} from "@commercetools/types/business-unit";
import { Order } from "@commercetools/types/cart";
import {
	CreateBusinessUnitPayload,
	AddAssociatePayload,
	RemoveAssociatePayload,
	UpdateAssociatePayload,
	UpdateBusinessUnitPayload,
	AddBusinessUnitAddressPayload,
	UpdateBusinessUnitAddressPayload,
	RemoveBusinessUnitAddressPayload,
} from "../payloads/BusinessUnitPayloads";
import {
	GetBusinessUnitsQuery,
	GetBusinessUnitOrdersQuery,
	AddAssociateQuery,
	RemoveAssociateQuery,
	UpdateAssociateQuery,
	AddBusinessUnitAddressQuery,
	UpdateBusinessUnitAddressQuery,
	RemoveBusinessUnitAddressQuery,
	UpdateBusinessUnitQuery,
	GetBusinessUnitQuery,
	RemoveBusinessUnitQuery,
} from "../queries/BusinessUnitQueries";

type GetBusinessUnitAction = (
	query: GetBusinessUnitQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetBusinessUnitsAction = (
	query?: GetBusinessUnitsQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit[]>>;

type CreateBusinessUnitAction = (
	payload: CreateBusinessUnitPayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateBusinessUnitAction = (
	payload: UpdateBusinessUnitPayload,
	query: UpdateBusinessUnitQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type RemoveBusinessUnitAction = (
	query: RemoveBusinessUnitQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetAssociateRolesAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<AssociateRole[]>>;

type AddAssociateAction = (
	payload: AddAssociatePayload,
	query: AddAssociateQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateAssociateAction = (
	payload: UpdateAssociatePayload,
	query: UpdateAssociateQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type RemoveAssociateAction = (
	payload: RemoveAssociatePayload,
	query: RemoveAssociateQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetCompaniesAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<BusinessUnit[]>>;

type GetBusinessUnitOrdersAction = (
	query: GetBusinessUnitOrdersQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order[]>>;

type AddBusinessUnitAddressAction = (
	payload: AddBusinessUnitAddressPayload,
	query: AddBusinessUnitAddressQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateBusinessUnitAddressAction = (
	payload: UpdateBusinessUnitAddressPayload,
	query: UpdateBusinessUnitAddressQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type RemoveBusinessUnitAddressAction = (
	payload: RemoveBusinessUnitAddressPayload,
	query: RemoveBusinessUnitAddressQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

export {
	type GetBusinessUnitAction,
	type GetBusinessUnitsAction,
	type CreateBusinessUnitAction,
	type UpdateBusinessUnitAction,
	type RemoveBusinessUnitAction,
	type GetAssociateRolesAction,
	type AddAssociateAction,
	type UpdateAssociateAction,
	type RemoveAssociateAction,
	type GetCompaniesAction,
	type GetBusinessUnitOrdersAction,
	type AddBusinessUnitAddressAction,
	type UpdateBusinessUnitAddressAction,
	type RemoveBusinessUnitAddressAction,
};
