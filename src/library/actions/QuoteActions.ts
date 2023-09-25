import { SDK, ServerOptions } from "@commercetools/frontend-sdk";
import { ComposableCommerceEventsB2B } from "../../types/events/ComposableCommerceEventsB2B";
import {
	CreateQuoteAction,
	GetQuotesAction,
	AcceptQuoteAction,
	DeclineQuoteAction,
	CancelQuoteAction,
} from "../../types/actions/QuoteActions";
import { CreateQuotePayload } from "../../types/payloads/QuotePayloads";
import {
	AcceptQuoteQuery,
	DeclineQuoteQuery,
	CancelQuoteQuery,
} from "../../types/queries/QuoteQueries";
import { Quote, QuoteRequest } from "@commercetools/types/quote";

export type QuoteActions = {
	createQuote: CreateQuoteAction;
	getQuotes: GetQuotesAction;
	acceptQuote: AcceptQuoteAction;
	declineQuote: DeclineQuoteAction;
	cancelQuote: CancelQuoteAction;
};

export const getQuoteActions = (
	sdk: SDK<ComposableCommerceEventsB2B>
): QuoteActions => {
	return {
		createQuote: async (
			payload: CreateQuotePayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<QuoteRequest>({
				actionName: "quote/createQuoteRequest",
				payload,
				serverOptions: options.serverOptions,
			});
			return response;
		},
		getQuotes: async (options: { serverOptions?: ServerOptions } = {}) => {
			const response = await sdk.callAction<Quote[]>({
				actionName: "quote/getQuotes",
				serverOptions: options.serverOptions,
			});
			return response;
		},
		acceptQuote: async (
			query: AcceptQuoteQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Quote>({
				actionName: "quote/acceptQuote",
				query,
				serverOptions: options.serverOptions,
			});
			return response;
		},
		declineQuote: async (
			query: DeclineQuoteQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Quote>({
				actionName: "quote/declineQuote",
				query,
				serverOptions: options.serverOptions,
			});
			return response;
		},
		cancelQuote: async (
			query: CancelQuoteQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<QuoteRequest>({
				actionName: "quote/cancelQuoteRequest",
				query,
				serverOptions: options.serverOptions,
			});
			return response;
		},
	};
};
