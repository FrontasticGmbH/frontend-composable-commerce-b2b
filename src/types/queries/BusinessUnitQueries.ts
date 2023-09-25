type GetBusinessUnitQuery = {
	key: string;
};

type GetBusinessUnitsQuery = {
	expandStores?: boolean;
};

type UpdateBusinessUnitQuery = {
	key: string;
};

type RemoveBusinessUnitQuery = {
	key: string;
};

type AddAssociateQuery = {
	/*
	 * Business unit key
	 **/
	key: string;
};

type UpdateAssociateQuery = {
	key: string;
};

type RemoveAssociateQuery = {
	key: string;
};

type GetBusinessUnitOrdersQuery = {
	key: string;
};

type AddBusinessUnitAddressQuery = {
	key: string;
};

type UpdateBusinessUnitAddressQuery = {
	key: string;
};

type RemoveBusinessUnitAddressQuery = {
	key: string;
};

export {
	GetBusinessUnitQuery,
	GetBusinessUnitsQuery,
	UpdateBusinessUnitQuery,
	RemoveBusinessUnitQuery,
	AddAssociateQuery,
	UpdateAssociateQuery,
	RemoveAssociateQuery,
	GetBusinessUnitOrdersQuery,
	AddBusinessUnitAddressQuery,
	UpdateBusinessUnitAddressQuery,
	RemoveBusinessUnitAddressQuery,
};
