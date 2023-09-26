import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import { Quote, QuoteRequest } from "@commercetools/types/quote";
import { CreateQuotePayload } from "../payloads/QuotePayloads";
import {
	AcceptQuoteQuery,
	DeclineQuoteQuery,
	CancelQuoteQuery,
} from "../queries/QuoteQueries";

type CreateQuoteAction = (
	payload: CreateQuotePayload,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<QuoteRequest>>;

type GetQuotesAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Quote[]>>;

type AcceptQuoteAction = (
	query: AcceptQuoteQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Quote>>;

type DeclineQuoteAction = (
	query: DeclineQuoteQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<Quote>>;

type CancelQuoteAction = (
	query: CancelQuoteQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<QuoteRequest>>;

export {
	type CreateQuoteAction,
	type GetQuotesAction,
	type AcceptQuoteAction,
	type DeclineQuoteAction,
	type CancelQuoteAction,
};
