/**
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Validator
 */
export declare const validator: typeof runtime.Public.validator;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#2@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#3@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#1@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly EntityType: "EntityType";
    readonly FieldType: "FieldType";
    readonly ValidationType: "ValidationType";
    readonly FieldStatus: "FieldStatus";
    readonly FieldConfig: "FieldConfig";
    readonly Country: "Country";
    readonly Language: "Language";
    readonly Title: "Title";
    readonly Gender: "Gender";
    readonly FieldDefinition: "FieldDefinition";
    readonly FieldValidation: "FieldValidation";
    readonly EventStatus: "EventStatus";
    readonly UserStatus: "UserStatus";
    readonly VenueStatus: "VenueStatus";
    readonly User: "User";
    readonly Password: "Password";
    readonly Session: "Session";
    readonly Verification: "Verification";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly Tenant: "Tenant";
    readonly Venue: "Venue";
    readonly Event: "Event";
    readonly Participant: "Participant";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<ClientOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], ClientOptions extends {
        omit: infer OmitOptions;
    } ? OmitOptions : {}>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "entityType" | "fieldType" | "validationType" | "fieldStatus" | "fieldConfig" | "country" | "language" | "title" | "gender" | "fieldDefinition" | "fieldValidation" | "eventStatus" | "userStatus" | "venueStatus" | "user" | "password" | "session" | "verification" | "role" | "permission" | "tenant" | "venue" | "event" | "participant";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        EntityType: {
            payload: Prisma.$EntityTypePayload<ExtArgs>;
            fields: Prisma.EntityTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EntityTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EntityTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                findFirst: {
                    args: Prisma.EntityTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EntityTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                findMany: {
                    args: Prisma.EntityTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>[];
                };
                create: {
                    args: Prisma.EntityTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                createMany: {
                    args: Prisma.EntityTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EntityTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>[];
                };
                delete: {
                    args: Prisma.EntityTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                update: {
                    args: Prisma.EntityTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                deleteMany: {
                    args: Prisma.EntityTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EntityTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EntityTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>[];
                };
                upsert: {
                    args: Prisma.EntityTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityTypePayload>;
                };
                aggregate: {
                    args: Prisma.EntityTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEntityType>;
                };
                groupBy: {
                    args: Prisma.EntityTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntityTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EntityTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntityTypeCountAggregateOutputType> | number;
                };
            };
        };
        FieldType: {
            payload: Prisma.$FieldTypePayload<ExtArgs>;
            fields: Prisma.FieldTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FieldTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FieldTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                findFirst: {
                    args: Prisma.FieldTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FieldTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                findMany: {
                    args: Prisma.FieldTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>[];
                };
                create: {
                    args: Prisma.FieldTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                createMany: {
                    args: Prisma.FieldTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FieldTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>[];
                };
                delete: {
                    args: Prisma.FieldTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                update: {
                    args: Prisma.FieldTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                deleteMany: {
                    args: Prisma.FieldTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FieldTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FieldTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>[];
                };
                upsert: {
                    args: Prisma.FieldTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldTypePayload>;
                };
                aggregate: {
                    args: Prisma.FieldTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFieldType>;
                };
                groupBy: {
                    args: Prisma.FieldTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FieldTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldTypeCountAggregateOutputType> | number;
                };
            };
        };
        ValidationType: {
            payload: Prisma.$ValidationTypePayload<ExtArgs>;
            fields: Prisma.ValidationTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ValidationTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ValidationTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                findFirst: {
                    args: Prisma.ValidationTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ValidationTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                findMany: {
                    args: Prisma.ValidationTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>[];
                };
                create: {
                    args: Prisma.ValidationTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                createMany: {
                    args: Prisma.ValidationTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ValidationTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>[];
                };
                delete: {
                    args: Prisma.ValidationTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                update: {
                    args: Prisma.ValidationTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                deleteMany: {
                    args: Prisma.ValidationTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ValidationTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ValidationTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>[];
                };
                upsert: {
                    args: Prisma.ValidationTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ValidationTypePayload>;
                };
                aggregate: {
                    args: Prisma.ValidationTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateValidationType>;
                };
                groupBy: {
                    args: Prisma.ValidationTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ValidationTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ValidationTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ValidationTypeCountAggregateOutputType> | number;
                };
            };
        };
        FieldStatus: {
            payload: Prisma.$FieldStatusPayload<ExtArgs>;
            fields: Prisma.FieldStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FieldStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FieldStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                findFirst: {
                    args: Prisma.FieldStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FieldStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                findMany: {
                    args: Prisma.FieldStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>[];
                };
                create: {
                    args: Prisma.FieldStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                createMany: {
                    args: Prisma.FieldStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FieldStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>[];
                };
                delete: {
                    args: Prisma.FieldStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                update: {
                    args: Prisma.FieldStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.FieldStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FieldStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FieldStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>[];
                };
                upsert: {
                    args: Prisma.FieldStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldStatusPayload>;
                };
                aggregate: {
                    args: Prisma.FieldStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFieldStatus>;
                };
                groupBy: {
                    args: Prisma.FieldStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FieldStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldStatusCountAggregateOutputType> | number;
                };
            };
        };
        FieldConfig: {
            payload: Prisma.$FieldConfigPayload<ExtArgs>;
            fields: Prisma.FieldConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FieldConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FieldConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                findFirst: {
                    args: Prisma.FieldConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FieldConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                findMany: {
                    args: Prisma.FieldConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>[];
                };
                create: {
                    args: Prisma.FieldConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                createMany: {
                    args: Prisma.FieldConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FieldConfigCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>[];
                };
                delete: {
                    args: Prisma.FieldConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                update: {
                    args: Prisma.FieldConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.FieldConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FieldConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FieldConfigUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>[];
                };
                upsert: {
                    args: Prisma.FieldConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldConfigPayload>;
                };
                aggregate: {
                    args: Prisma.FieldConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFieldConfig>;
                };
                groupBy: {
                    args: Prisma.FieldConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FieldConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldConfigCountAggregateOutputType> | number;
                };
            };
        };
        Country: {
            payload: Prisma.$CountryPayload<ExtArgs>;
            fields: Prisma.CountryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findFirst: {
                    args: Prisma.CountryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findMany: {
                    args: Prisma.CountryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                create: {
                    args: Prisma.CountryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                createMany: {
                    args: Prisma.CountryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                delete: {
                    args: Prisma.CountryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                update: {
                    args: Prisma.CountryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                upsert: {
                    args: Prisma.CountryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                aggregate: {
                    args: Prisma.CountryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountry>;
                };
                groupBy: {
                    args: Prisma.CountryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryCountAggregateOutputType> | number;
                };
            };
        };
        Language: {
            payload: Prisma.$LanguagePayload<ExtArgs>;
            fields: Prisma.LanguageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LanguageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findFirst: {
                    args: Prisma.LanguageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findMany: {
                    args: Prisma.LanguageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                create: {
                    args: Prisma.LanguageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                createMany: {
                    args: Prisma.LanguageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                delete: {
                    args: Prisma.LanguageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                update: {
                    args: Prisma.LanguageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                deleteMany: {
                    args: Prisma.LanguageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LanguageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                upsert: {
                    args: Prisma.LanguageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                aggregate: {
                    args: Prisma.LanguageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLanguage>;
                };
                groupBy: {
                    args: Prisma.LanguageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LanguageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageCountAggregateOutputType> | number;
                };
            };
        };
        Title: {
            payload: Prisma.$TitlePayload<ExtArgs>;
            fields: Prisma.TitleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TitleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TitleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                findFirst: {
                    args: Prisma.TitleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TitleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                findMany: {
                    args: Prisma.TitleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>[];
                };
                create: {
                    args: Prisma.TitleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                createMany: {
                    args: Prisma.TitleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TitleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>[];
                };
                delete: {
                    args: Prisma.TitleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                update: {
                    args: Prisma.TitleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                deleteMany: {
                    args: Prisma.TitleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TitleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TitleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>[];
                };
                upsert: {
                    args: Prisma.TitleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TitlePayload>;
                };
                aggregate: {
                    args: Prisma.TitleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTitle>;
                };
                groupBy: {
                    args: Prisma.TitleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TitleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TitleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TitleCountAggregateOutputType> | number;
                };
            };
        };
        Gender: {
            payload: Prisma.$GenderPayload<ExtArgs>;
            fields: Prisma.GenderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GenderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GenderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                findFirst: {
                    args: Prisma.GenderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GenderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                findMany: {
                    args: Prisma.GenderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>[];
                };
                create: {
                    args: Prisma.GenderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                createMany: {
                    args: Prisma.GenderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GenderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>[];
                };
                delete: {
                    args: Prisma.GenderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                update: {
                    args: Prisma.GenderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                deleteMany: {
                    args: Prisma.GenderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GenderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GenderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>[];
                };
                upsert: {
                    args: Prisma.GenderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenderPayload>;
                };
                aggregate: {
                    args: Prisma.GenderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGender>;
                };
                groupBy: {
                    args: Prisma.GenderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GenderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GenderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GenderCountAggregateOutputType> | number;
                };
            };
        };
        FieldDefinition: {
            payload: Prisma.$FieldDefinitionPayload<ExtArgs>;
            fields: Prisma.FieldDefinitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FieldDefinitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FieldDefinitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                findFirst: {
                    args: Prisma.FieldDefinitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FieldDefinitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                findMany: {
                    args: Prisma.FieldDefinitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[];
                };
                create: {
                    args: Prisma.FieldDefinitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                createMany: {
                    args: Prisma.FieldDefinitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FieldDefinitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[];
                };
                delete: {
                    args: Prisma.FieldDefinitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                update: {
                    args: Prisma.FieldDefinitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                deleteMany: {
                    args: Prisma.FieldDefinitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FieldDefinitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FieldDefinitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>[];
                };
                upsert: {
                    args: Prisma.FieldDefinitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldDefinitionPayload>;
                };
                aggregate: {
                    args: Prisma.FieldDefinitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFieldDefinition>;
                };
                groupBy: {
                    args: Prisma.FieldDefinitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldDefinitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FieldDefinitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldDefinitionCountAggregateOutputType> | number;
                };
            };
        };
        FieldValidation: {
            payload: Prisma.$FieldValidationPayload<ExtArgs>;
            fields: Prisma.FieldValidationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FieldValidationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FieldValidationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                findFirst: {
                    args: Prisma.FieldValidationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FieldValidationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                findMany: {
                    args: Prisma.FieldValidationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>[];
                };
                create: {
                    args: Prisma.FieldValidationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                createMany: {
                    args: Prisma.FieldValidationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FieldValidationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>[];
                };
                delete: {
                    args: Prisma.FieldValidationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                update: {
                    args: Prisma.FieldValidationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                deleteMany: {
                    args: Prisma.FieldValidationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FieldValidationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FieldValidationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>[];
                };
                upsert: {
                    args: Prisma.FieldValidationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FieldValidationPayload>;
                };
                aggregate: {
                    args: Prisma.FieldValidationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFieldValidation>;
                };
                groupBy: {
                    args: Prisma.FieldValidationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldValidationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FieldValidationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FieldValidationCountAggregateOutputType> | number;
                };
            };
        };
        EventStatus: {
            payload: Prisma.$EventStatusPayload<ExtArgs>;
            fields: Prisma.EventStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                findFirst: {
                    args: Prisma.EventStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                findMany: {
                    args: Prisma.EventStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>[];
                };
                create: {
                    args: Prisma.EventStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                createMany: {
                    args: Prisma.EventStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>[];
                };
                delete: {
                    args: Prisma.EventStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                update: {
                    args: Prisma.EventStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.EventStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>[];
                };
                upsert: {
                    args: Prisma.EventStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventStatusPayload>;
                };
                aggregate: {
                    args: Prisma.EventStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventStatus>;
                };
                groupBy: {
                    args: Prisma.EventStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventStatusCountAggregateOutputType> | number;
                };
            };
        };
        UserStatus: {
            payload: Prisma.$UserStatusPayload<ExtArgs>;
            fields: Prisma.UserStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                findFirst: {
                    args: Prisma.UserStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                findMany: {
                    args: Prisma.UserStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>[];
                };
                create: {
                    args: Prisma.UserStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                createMany: {
                    args: Prisma.UserStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>[];
                };
                delete: {
                    args: Prisma.UserStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                update: {
                    args: Prisma.UserStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.UserStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>[];
                };
                upsert: {
                    args: Prisma.UserStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserStatusPayload>;
                };
                aggregate: {
                    args: Prisma.UserStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserStatus>;
                };
                groupBy: {
                    args: Prisma.UserStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserStatusCountAggregateOutputType> | number;
                };
            };
        };
        VenueStatus: {
            payload: Prisma.$VenueStatusPayload<ExtArgs>;
            fields: Prisma.VenueStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VenueStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VenueStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                findFirst: {
                    args: Prisma.VenueStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VenueStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                findMany: {
                    args: Prisma.VenueStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>[];
                };
                create: {
                    args: Prisma.VenueStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                createMany: {
                    args: Prisma.VenueStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VenueStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>[];
                };
                delete: {
                    args: Prisma.VenueStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                update: {
                    args: Prisma.VenueStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.VenueStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VenueStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VenueStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>[];
                };
                upsert: {
                    args: Prisma.VenueStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenueStatusPayload>;
                };
                aggregate: {
                    args: Prisma.VenueStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenueStatus>;
                };
                groupBy: {
                    args: Prisma.VenueStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenueStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VenueStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenueStatusCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Password: {
            payload: Prisma.$PasswordPayload<ExtArgs>;
            fields: Prisma.PasswordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                findMany: {
                    args: Prisma.PasswordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>[];
                };
                create: {
                    args: Prisma.PasswordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                createMany: {
                    args: Prisma.PasswordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>[];
                };
                delete: {
                    args: Prisma.PasswordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                update: {
                    args: Prisma.PasswordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePassword>;
                };
                groupBy: {
                    args: Prisma.PasswordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        Permission: {
            payload: Prisma.$PermissionPayload<ExtArgs>;
            fields: Prisma.PermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findFirst: {
                    args: Prisma.PermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findMany: {
                    args: Prisma.PermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                create: {
                    args: Prisma.PermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                createMany: {
                    args: Prisma.PermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                delete: {
                    args: Prisma.PermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                update: {
                    args: Prisma.PermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                upsert: {
                    args: Prisma.PermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>;
                };
                groupBy: {
                    args: Prisma.PermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number;
                };
            };
        };
        Tenant: {
            payload: Prisma.$TenantPayload<ExtArgs>;
            fields: Prisma.TenantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TenantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findFirst: {
                    args: Prisma.TenantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findMany: {
                    args: Prisma.TenantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                create: {
                    args: Prisma.TenantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                createMany: {
                    args: Prisma.TenantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                delete: {
                    args: Prisma.TenantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                update: {
                    args: Prisma.TenantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                deleteMany: {
                    args: Prisma.TenantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TenantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                upsert: {
                    args: Prisma.TenantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                aggregate: {
                    args: Prisma.TenantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTenant>;
                };
                groupBy: {
                    args: Prisma.TenantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TenantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantCountAggregateOutputType> | number;
                };
            };
        };
        Venue: {
            payload: Prisma.$VenuePayload<ExtArgs>;
            fields: Prisma.VenueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VenueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                findFirst: {
                    args: Prisma.VenueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                findMany: {
                    args: Prisma.VenueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>[];
                };
                create: {
                    args: Prisma.VenueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                createMany: {
                    args: Prisma.VenueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>[];
                };
                delete: {
                    args: Prisma.VenueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                update: {
                    args: Prisma.VenueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                deleteMany: {
                    args: Prisma.VenueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VenueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>[];
                };
                upsert: {
                    args: Prisma.VenueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenuePayload>;
                };
                aggregate: {
                    args: Prisma.VenueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenue>;
                };
                groupBy: {
                    args: Prisma.VenueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VenueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenueCountAggregateOutputType> | number;
                };
            };
        };
        Event: {
            payload: Prisma.$EventPayload<ExtArgs>;
            fields: Prisma.EventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findFirst: {
                    args: Prisma.EventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findMany: {
                    args: Prisma.EventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                create: {
                    args: Prisma.EventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                createMany: {
                    args: Prisma.EventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                delete: {
                    args: Prisma.EventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                update: {
                    args: Prisma.EventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                deleteMany: {
                    args: Prisma.EventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                upsert: {
                    args: Prisma.EventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.EventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        Participant: {
            payload: Prisma.$ParticipantPayload<ExtArgs>;
            fields: Prisma.ParticipantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParticipantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                findFirst: {
                    args: Prisma.ParticipantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                findMany: {
                    args: Prisma.ParticipantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                create: {
                    args: Prisma.ParticipantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                createMany: {
                    args: Prisma.ParticipantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                delete: {
                    args: Prisma.ParticipantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                update: {
                    args: Prisma.ParticipantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                deleteMany: {
                    args: Prisma.ParticipantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParticipantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                upsert: {
                    args: Prisma.ParticipantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                aggregate: {
                    args: Prisma.ParticipantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParticipant>;
                };
                groupBy: {
                    args: Prisma.ParticipantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParticipantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EntityTypeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type EntityTypeScalarFieldEnum = (typeof EntityTypeScalarFieldEnum)[keyof typeof EntityTypeScalarFieldEnum];
export declare const FieldTypeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type FieldTypeScalarFieldEnum = (typeof FieldTypeScalarFieldEnum)[keyof typeof FieldTypeScalarFieldEnum];
export declare const ValidationTypeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ValidationTypeScalarFieldEnum = (typeof ValidationTypeScalarFieldEnum)[keyof typeof ValidationTypeScalarFieldEnum];
export declare const FieldStatusScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type FieldStatusScalarFieldEnum = (typeof FieldStatusScalarFieldEnum)[keyof typeof FieldStatusScalarFieldEnum];
export declare const FieldConfigScalarFieldEnum: {
    readonly id: "id";
    readonly entityTypeId: "entityTypeId";
    readonly fieldTypeId: "fieldTypeId";
    readonly fieldName: "fieldName";
    readonly fieldLabel: "fieldLabel";
    readonly required: "required";
    readonly default: "default";
    readonly order: "order";
    readonly metadata: "metadata";
    readonly version: "version";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type FieldConfigScalarFieldEnum = (typeof FieldConfigScalarFieldEnum)[keyof typeof FieldConfigScalarFieldEnum];
export declare const CountryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly region: "region";
    readonly subregion: "subregion";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const LanguageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];
export declare const TitleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type TitleScalarFieldEnum = (typeof TitleScalarFieldEnum)[keyof typeof TitleScalarFieldEnum];
export declare const GenderScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type GenderScalarFieldEnum = (typeof GenderScalarFieldEnum)[keyof typeof GenderScalarFieldEnum];
export declare const FieldDefinitionScalarFieldEnum: {
    readonly id: "id";
    readonly entityTypeId: "entityTypeId";
    readonly name: "name";
    readonly label: "label";
    readonly description: "description";
    readonly fieldTypeId: "fieldTypeId";
    readonly isRequired: "isRequired";
    readonly isUnique: "isUnique";
    readonly isSearchable: "isSearchable";
    readonly isFilterable: "isFilterable";
    readonly isSortable: "isSortable";
    readonly defaultValue: "defaultValue";
    readonly order: "order";
    readonly statusId: "statusId";
    readonly metadata: "metadata";
    readonly sourceId: "sourceId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type FieldDefinitionScalarFieldEnum = (typeof FieldDefinitionScalarFieldEnum)[keyof typeof FieldDefinitionScalarFieldEnum];
export declare const FieldValidationScalarFieldEnum: {
    readonly id: "id";
    readonly fieldDefinitionId: "fieldDefinitionId";
    readonly validationTypeId: "validationTypeId";
    readonly value: "value";
    readonly message: "message";
    readonly order: "order";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FieldValidationScalarFieldEnum = (typeof FieldValidationScalarFieldEnum)[keyof typeof FieldValidationScalarFieldEnum];
export declare const EventStatusScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type EventStatusScalarFieldEnum = (typeof EventStatusScalarFieldEnum)[keyof typeof EventStatusScalarFieldEnum];
export declare const UserStatusScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserStatusScalarFieldEnum = (typeof UserStatusScalarFieldEnum)[keyof typeof UserStatusScalarFieldEnum];
export declare const VenueStatusScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type VenueStatusScalarFieldEnum = (typeof VenueStatusScalarFieldEnum)[keyof typeof VenueStatusScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly userStatusId: "userStatusId";
    readonly countryId: "countryId";
    readonly languageId: "languageId";
    readonly titleId: "titleId";
    readonly genderId: "genderId";
    readonly tenantId: "tenantId";
    readonly failedLoginAttempts: "failedLoginAttempts";
    readonly lastFailedLoginAt: "lastFailedLoginAt";
    readonly lockedAt: "lockedAt";
    readonly lockReason: "lockReason";
    readonly lockCount: "lockCount";
    readonly autoUnlockAt: "autoUnlockAt";
    readonly lastLoginAt: "lastLoginAt";
    readonly metadata: "metadata";
    readonly version: "version";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PasswordScalarFieldEnum: {
    readonly id: "id";
    readonly hash: "hash";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly lastChanged: "lastChanged";
    readonly version: "version";
};
export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly metadata: "metadata";
    readonly version: "version";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly target: "target";
    readonly secret: "secret";
    readonly algorithm: "algorithm";
    readonly digits: "digits";
    readonly period: "period";
    readonly charSet: "charSet";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly action: "action";
    readonly entity: "entity";
    readonly access: "access";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const TenantScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly city: "city";
    readonly state: "state";
    readonly countryId: "countryId";
    readonly address: "address";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum];
export declare const VenueScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly contact: "contact";
    readonly phone: "phone";
    readonly email: "email";
    readonly address: "address";
    readonly city: "city";
    readonly state: "state";
    readonly country: "country";
    readonly capacity: "capacity";
    readonly longitude: "longitude";
    readonly latitude: "latitude";
    readonly amenities: "amenities";
    readonly metadata: "metadata";
    readonly statusId: "statusId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly tenantId: "tenantId";
    readonly eventStatusId: "eventStatusId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly venueId: "venueId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const ParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly titleId: "titleId";
    readonly genderId: "genderId";
    readonly nationalityId: "nationalityId";
    readonly languageId: "languageId";
    readonly status: "status";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#2@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#3@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#2@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#3@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#1@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    entityType?: Prisma.EntityTypeOmit;
    fieldType?: Prisma.FieldTypeOmit;
    validationType?: Prisma.ValidationTypeOmit;
    fieldStatus?: Prisma.FieldStatusOmit;
    fieldConfig?: Prisma.FieldConfigOmit;
    country?: Prisma.CountryOmit;
    language?: Prisma.LanguageOmit;
    title?: Prisma.TitleOmit;
    gender?: Prisma.GenderOmit;
    fieldDefinition?: Prisma.FieldDefinitionOmit;
    fieldValidation?: Prisma.FieldValidationOmit;
    eventStatus?: Prisma.EventStatusOmit;
    userStatus?: Prisma.UserStatusOmit;
    venueStatus?: Prisma.VenueStatusOmit;
    user?: Prisma.UserOmit;
    password?: Prisma.PasswordOmit;
    session?: Prisma.SessionOmit;
    verification?: Prisma.VerificationOmit;
    role?: Prisma.RoleOmit;
    permission?: Prisma.PermissionOmit;
    tenant?: Prisma.TenantOmit;
    venue?: Prisma.VenueOmit;
    event?: Prisma.EventOmit;
    participant?: Prisma.ParticipantOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never;
export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * These options are being passed into the middleware as "params"
 */
export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
};
/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (params: MiddlewareParams, next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>) => runtime.Types.Utils.JsPromise<T>;
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map