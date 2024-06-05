
## Version 3.1.0 (2024-06-05)


* feat: added approval rule and approval flow business unit actions

## Version 3.0.0 (2024-05-28)


* refactor: fixed formatting with prettier
* feat: Added skipQueue and customHeaderValue options to SDK integration actions
* feat: Updated @commercetools/frontend-sdk dependency to 1.12.1
* refactor: modify project library paths on missing files
* feat: deprecate Result type in SDK
* feat: used default store for business unit creation
* Added quote.getQuotationCart action

## Version 2.0.1 (2024-02-08)

* Fixed linting issue

## Version 2.0.0 (2024-02-08)

* Added addToWishlists action
* Updates for endpoint renames, added required payload to replicateOrder action
* Replaced get wishlists with query wishlists
* Improved accuracy of cancel order query type
* Added clear cart action
* Added action to set business unit and store keys to session
* Updated businessUnitKey requirements and syntax in Account, BusniessUnit, Cart and Quote queries

## Version 1.2.3 (2024-01-25)

* Fixed export error

## Version 1.2.2 (2024-01-25)

* Fixed erroneously removed remember me cookie handling
* Added shipment state
* Removed removeBusinessUnit action

## Version 1.2.1 (2023-12-04)

* Updated RemoveBusinessUnitAddressPayload to simply addressId: string

## Version 1.2.0 (2023-11-28)

* Updated @commercetools/frontend-sdk dependency and replaced newly deprecated methods

## Version 1.1.6 (2023-11-21)

* Removed deprecated getorderHistory action

## Version 1.1.5 (2023-11-21)

* Added cart.queryOrders action

## Version 1.1.4 (2023-11-16)

* Updated CreateBusinessUnitPayload with account info

## Version 1.1.3 (2023-11-14)


* Replaced domain types import string
* Updated return types for quote and quote request queries

## Version 1.1.2 (2023-11-13)

* Updated createBusinessUnit and createQuote actions
* Updated RemoveAccountAddressPayload structure

## Version 1.1.1 (2023-11-08)

* Fixed CHANGELOG.md

## Version 1.1.0 (2023-11-08)

* Removed sortAttributes until accurate type can be found
* Added remember me option for acount login action
* Added format parameter to QueryProductCategoriesQuery
* Added new quotes actions, removed deprecated getQuotes action
* Added optional businessUnitKey and storeKey query parameters to cart actions
* Added support for non-strict mode

## Version 1.0.0 (2023-10-19)

* First release
