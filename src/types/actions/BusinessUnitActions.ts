import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import {
	Associate,
	AssociateRole,
	BusinessUnit,
} from "@shared/types/business-unit";
import { Order } from "@shared/types/cart";
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
	GetAssociateQuery,
	AddAssociateQuery,
	RemoveAssociateQuery,
	UpdateAssociateQuery,
	AddBusinessUnitAddressQuery,
	UpdateBusinessUnitAddressQuery,
	RemoveBusinessUnitAddressQuery,
	UpdateBusinessUnitQuery,
	GetBusinessUnitQuery,
	SetBusinessUnitAndStoreKeysQuery,
} from "../queries/BusinessUnitQueries";

type GetBusinessUnitAction = (
	query: GetBusinessUnitQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetBusinessUnitsAction = (
	query?: GetBusinessUnitsQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit[]>>;

type CreateBusinessUnitAction = (
	payload: CreateBusinessUnitPayload,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateBusinessUnitAction = (
	payload: UpdateBusinessUnitPayload,
	query: UpdateBusinessUnitQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetAssociateRolesAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<AssociateRole[]>>;

type GetAssociateAction = (
	query: GetAssociateQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Associate>>;

type AddAssociateAction = (
	payload: AddAssociatePayload,
	query: AddAssociateQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateAssociateAction = (
	payload: UpdateAssociatePayload,
	query: UpdateAssociateQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type RemoveAssociateAction = (
	payload: RemoveAssociatePayload,
	query: RemoveAssociateQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type GetCompaniesAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<BusinessUnit[]>>;

type GetBusinessUnitOrdersAction = (
	query: GetBusinessUnitOrdersQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Order[]>>;

type AddBusinessUnitAddressAction = (
	payload: AddBusinessUnitAddressPayload,
	query: AddBusinessUnitAddressQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type UpdateBusinessUnitAddressAction = (
	payload: UpdateBusinessUnitAddressPayload,
	query: UpdateBusinessUnitAddressQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type RemoveBusinessUnitAddressAction = (
	payload: RemoveBusinessUnitAddressPayload,
	query: RemoveBusinessUnitAddressQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<BusinessUnit>>;

type SetBusinessUnitAndStoreKeysAction = (
	query: SetBusinessUnitAndStoreKeysQuery,
	options?: {
		/**
		 * @param {boolean} [options.skipQueue] - An optional boolean, default false. Indicates whether or not to skip the action queue on the coFE base SDK and execute fully asyncronously. May cause race conditions if used incorrectly.
		 */
		skipQueue?: boolean;
		/**
		 * @param {boolean} [options.customHeaderValue] - An optional string, the value to assign to a "coFE-Custom-Configuration" header value. Overrides customHeaderValue passed in coFE base SDK configure.
		 */
		customHeaderValue?: string;
		/**
		 * @param {Object} [options.serverOptions] - An optional object containing the res and req objects for ServerResponse and IncomingMessage with cookies respectively. Required for server-side rendering session management.
		 */
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<void>>;

export {
	type GetBusinessUnitAction,
	type GetBusinessUnitsAction,
	type CreateBusinessUnitAction,
	type UpdateBusinessUnitAction,
	type GetAssociateRolesAction,
	type GetAssociateAction,
	type AddAssociateAction,
	type UpdateAssociateAction,
	type RemoveAssociateAction,
	type GetCompaniesAction,
	type GetBusinessUnitOrdersAction,
	type AddBusinessUnitAddressAction,
	type UpdateBusinessUnitAddressAction,
	type RemoveBusinessUnitAddressAction,
	type SetBusinessUnitAndStoreKeysAction,
};
