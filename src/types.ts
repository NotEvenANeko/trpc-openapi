import type {
  Procedure,
  ProcedureParams,
  Router,
  RootConfig,
  AnyRootConfig,
  ProcedureRouterRecord,
} from '@trpc/server';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';
import { OpenAPIV3 } from 'openapi-types';
import type { ZodIssue } from 'zod';

// from @trpc/server/core/router
export interface RouterDef<
  TConfig extends AnyRootConfig,
  TRecord extends ProcedureRouterRecord,
  /**
   * @deprecated
   */
  TOld = any,
> {
  _config: TConfig;
  router: true;
  procedures: TRecord;
  record: TRecord;
  /**
   * V9 queries
   * @deprecated
   */
  queries: any;
  /**
   * V9 mutations
   * @deprecated
   */
  mutations: any;
  /**
   * V9 subscriptions
   * @deprecated
   */
  subscriptions: any;
}

export type OpenApiMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type TRPCMeta = Record<string, unknown>;

export type OpenApiContentType =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

export type OpenApiMeta<TMeta = TRPCMeta> = TMeta & {
  openapi?: {
    enabled?: boolean;
    method: OpenApiMethod;
    path: `/${string}`;
    summary?: string;
    description?: string;
    protect?: boolean;
    tags?: string[];
    headers?: (OpenAPIV3.ParameterBaseObject & { name: string; in?: 'header' })[];
    contentTypes?: OpenApiContentType[];
    deprecated?: boolean;
    example?: {
      request?: Record<string, any>;
      response?: Record<string, any>;
    };
    responseHeaders?: Record<string, OpenAPIV3.HeaderObject | OpenAPIV3.ReferenceObject>;
  };
};

export type OpenApiProcedure<TMeta = TRPCMeta> = Procedure<
  'query' | 'mutation',
  ProcedureParams<
    RootConfig<{
      transformer: any;
      errorShape: any;
      ctx: any;
      meta: OpenApiMeta<TMeta>;
    }>,
    any,
    any,
    any,
    any,
    any,
    OpenApiMeta<TMeta>
  >
>;

export type OpenApiProcedureRecord<TMeta = TRPCMeta> = Record<string, OpenApiProcedure<TMeta>>;

export type OpenApiRouter<TMeta = TRPCMeta> = Router<
  RouterDef<
    RootConfig<{
      transformer: any;
      errorShape: any;
      ctx: any;
      meta: OpenApiMeta<TMeta>;
    }>,
    any,
    any
  >
>;

export type OpenApiSuccessResponse<D = any> = D;

export type OpenApiErrorResponse = {
  message: string;
  code: TRPC_ERROR_CODE_KEY;
  issues?: ZodIssue[];
};

export type OpenApiResponse<D = any> = OpenApiSuccessResponse<D> | OpenApiErrorResponse;
