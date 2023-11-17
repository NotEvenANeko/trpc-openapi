import {
  type CreateOpenApiAwsLambdaHandlerOptions,
  type CreateOpenApiExpressMiddlewareOptions,
  type CreateOpenApiFastifyPluginOptions,
  type CreateOpenApiHttpHandlerOptions,
  type CreateOpenApiNextHandlerOptions,
  type CreateOpenApiNuxtHandlerOptions,
  createOpenApiAwsLambdaHandler,
  createOpenApiExpressMiddleware,
  createOpenApiHttpHandler,
  createOpenApiNextHandler,
  createOpenApiNuxtHandler,
  fastifyTRPCOpenApiPlugin,
} from './adapters';
import {
  type GenerateOpenApiDocumentOptions,
  generateOpenApiDocument,
  openApiVersion,
} from './generator';
import type {
  OpenApiErrorResponse,
  OpenApiMeta,
  OpenApiMethod,
  OpenApiResponse,
  OpenApiRouter,
  OpenApiSuccessResponse,
} from './types';
import type { ZodTypeLikeString, ZodTypeLikeVoid } from './utils/zod';

export {
  type CreateOpenApiAwsLambdaHandlerOptions,
  type CreateOpenApiExpressMiddlewareOptions,
  type CreateOpenApiHttpHandlerOptions,
  type CreateOpenApiNextHandlerOptions,
  type CreateOpenApiFastifyPluginOptions,
  type CreateOpenApiNuxtHandlerOptions,
  createOpenApiExpressMiddleware,
  createOpenApiHttpHandler,
  createOpenApiNextHandler,
  createOpenApiNuxtHandler,
  createOpenApiAwsLambdaHandler,
  fastifyTRPCOpenApiPlugin,
  openApiVersion,
  generateOpenApiDocument,
  type GenerateOpenApiDocumentOptions,
  type OpenApiRouter,
  type OpenApiMeta,
  type OpenApiMethod,
  type OpenApiResponse,
  type OpenApiSuccessResponse,
  type OpenApiErrorResponse,
  type ZodTypeLikeString,
  type ZodTypeLikeVoid,
};
