
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model contacts
 * 
 */
export type contacts = $Result.DefaultSelection<Prisma.$contactsPayload>
/**
 * Model sales_contacts
 * 
 */
export type sales_contacts = $Result.DefaultSelection<Prisma.$sales_contactsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contacts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contacts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contacts`: Exposes CRUD operations for the **contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.contactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales_contacts`: Exposes CRUD operations for the **sales_contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales_contacts
    * const sales_contacts = await prisma.sales_contacts.findMany()
    * ```
    */
  get sales_contacts(): Prisma.sales_contactsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    contacts: 'contacts',
    sales_contacts: 'sales_contacts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contacts" | "sales_contacts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      contacts: {
        payload: Prisma.$contactsPayload<ExtArgs>
        fields: Prisma.contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findFirst: {
            args: Prisma.contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findMany: {
            args: Prisma.contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          create: {
            args: Prisma.contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          createMany: {
            args: Prisma.contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          delete: {
            args: Prisma.contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          update: {
            args: Prisma.contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          deleteMany: {
            args: Prisma.contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          upsert: {
            args: Prisma.contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      sales_contacts: {
        payload: Prisma.$sales_contactsPayload<ExtArgs>
        fields: Prisma.sales_contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sales_contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sales_contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          findFirst: {
            args: Prisma.sales_contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sales_contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          findMany: {
            args: Prisma.sales_contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>[]
          }
          create: {
            args: Prisma.sales_contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          createMany: {
            args: Prisma.sales_contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sales_contactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>[]
          }
          delete: {
            args: Prisma.sales_contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          update: {
            args: Prisma.sales_contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          deleteMany: {
            args: Prisma.sales_contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sales_contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sales_contactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>[]
          }
          upsert: {
            args: Prisma.sales_contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_contactsPayload>
          }
          aggregate: {
            args: Prisma.Sales_contactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales_contacts>
          }
          groupBy: {
            args: Prisma.sales_contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sales_contactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sales_contactsCountArgs<ExtArgs>
            result: $Utils.Optional<Sales_contactsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contacts?: contactsOmit
    sales_contacts?: sales_contactsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone_number: string | null
    category: string | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone_number: string | null
    category: string | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone_number: number
    category: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    category?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    category?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    category?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to aggregate.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactsWhereInput
    orderBy?: contactsOrderByWithAggregationInput | contactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    phone_number: string | null
    category: string | null
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    category?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    category?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    category?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    category?: boolean
  }

  export type contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone_number" | "category", ExtArgs["result"]["contacts"]>

  export type $contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      phone_number: string | null
      category: string | null
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type contactsGetPayload<S extends boolean | null | undefined | contactsDefaultArgs> = $Result.GetResult<Prisma.$contactsPayload, S>

  type contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacts'], meta: { name: 'contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {contactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactsFindUniqueArgs>(args: SelectSubset<T, contactsFindUniqueArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactsFindFirstArgs>(args?: SelectSubset<T, contactsFindFirstArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactsFindManyArgs>(args?: SelectSubset<T, contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {contactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends contactsCreateArgs>(args: SelectSubset<T, contactsCreateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {contactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactsCreateManyArgs>(args?: SelectSubset<T, contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {contactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactsCreateManyAndReturnArgs>(args?: SelectSubset<T, contactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {contactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends contactsDeleteArgs>(args: SelectSubset<T, contactsDeleteArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {contactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactsUpdateArgs>(args: SelectSubset<T, contactsUpdateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {contactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactsDeleteManyArgs>(args?: SelectSubset<T, contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactsUpdateManyArgs>(args: SelectSubset<T, contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {contactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contactsUpdateManyAndReturnArgs>(args: SelectSubset<T, contactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {contactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends contactsUpsertArgs>(args: SelectSubset<T, contactsUpsertArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactsCountArgs>(
      args?: Subset<T, contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactsGroupByArgs['orderBy'] }
        : { orderBy?: contactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacts model
   */
  readonly fields: contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contacts model
   */ 
  interface contactsFieldRefs {
    readonly id: FieldRef<"contacts", 'Int'>
    readonly name: FieldRef<"contacts", 'String'>
    readonly email: FieldRef<"contacts", 'String'>
    readonly phone_number: FieldRef<"contacts", 'String'>
    readonly category: FieldRef<"contacts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contacts findUnique
   */
  export type contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findUniqueOrThrow
   */
  export type contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findFirst
   */
  export type contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findFirstOrThrow
   */
  export type contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findMany
   */
  export type contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts create
   */
  export type contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to create a contacts.
     */
    data?: XOR<contactsCreateInput, contactsUncheckedCreateInput>
  }

  /**
   * contacts createMany
   */
  export type contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactsCreateManyInput | contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacts createManyAndReturn
   */
  export type contactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data used to create many contacts.
     */
    data: contactsCreateManyInput | contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacts update
   */
  export type contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to update a contacts.
     */
    data: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
    /**
     * Choose, which contacts to update.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts updateMany
   */
  export type contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contacts updateManyAndReturn
   */
  export type contactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contacts upsert
   */
  export type contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The filter to search for the contacts to update in case it exists.
     */
    where: contactsWhereUniqueInput
    /**
     * In case the contacts found by the `where` argument doesn't exist, create a new contacts with this data.
     */
    create: XOR<contactsCreateInput, contactsUncheckedCreateInput>
    /**
     * In case the contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
  }

  /**
   * contacts delete
   */
  export type contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter which contacts to delete.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts deleteMany
   */
  export type contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contacts without action
   */
  export type contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
  }


  /**
   * Model sales_contacts
   */

  export type AggregateSales_contacts = {
    _count: Sales_contactsCountAggregateOutputType | null
    _avg: Sales_contactsAvgAggregateOutputType | null
    _sum: Sales_contactsSumAggregateOutputType | null
    _min: Sales_contactsMinAggregateOutputType | null
    _max: Sales_contactsMaxAggregateOutputType | null
  }

  export type Sales_contactsAvgAggregateOutputType = {
    id: number | null
    phone_number: number | null
  }

  export type Sales_contactsSumAggregateOutputType = {
    id: number | null
    phone_number: bigint | null
  }

  export type Sales_contactsMinAggregateOutputType = {
    id: number | null
    record_date: Date | null
    name: string | null
    nickname: string | null
    birthdate: Date | null
    email: string | null
    phone_number: bigint | null
    country: string | null
    game: string | null
  }

  export type Sales_contactsMaxAggregateOutputType = {
    id: number | null
    record_date: Date | null
    name: string | null
    nickname: string | null
    birthdate: Date | null
    email: string | null
    phone_number: bigint | null
    country: string | null
    game: string | null
  }

  export type Sales_contactsCountAggregateOutputType = {
    id: number
    record_date: number
    name: number
    nickname: number
    birthdate: number
    email: number
    phone_number: number
    country: number
    game: number
    _all: number
  }


  export type Sales_contactsAvgAggregateInputType = {
    id?: true
    phone_number?: true
  }

  export type Sales_contactsSumAggregateInputType = {
    id?: true
    phone_number?: true
  }

  export type Sales_contactsMinAggregateInputType = {
    id?: true
    record_date?: true
    name?: true
    nickname?: true
    birthdate?: true
    email?: true
    phone_number?: true
    country?: true
    game?: true
  }

  export type Sales_contactsMaxAggregateInputType = {
    id?: true
    record_date?: true
    name?: true
    nickname?: true
    birthdate?: true
    email?: true
    phone_number?: true
    country?: true
    game?: true
  }

  export type Sales_contactsCountAggregateInputType = {
    id?: true
    record_date?: true
    name?: true
    nickname?: true
    birthdate?: true
    email?: true
    phone_number?: true
    country?: true
    game?: true
    _all?: true
  }

  export type Sales_contactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_contacts to aggregate.
     */
    where?: sales_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_contacts to fetch.
     */
    orderBy?: sales_contactsOrderByWithRelationInput | sales_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sales_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales_contacts
    **/
    _count?: true | Sales_contactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sales_contactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sales_contactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sales_contactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sales_contactsMaxAggregateInputType
  }

  export type GetSales_contactsAggregateType<T extends Sales_contactsAggregateArgs> = {
        [P in keyof T & keyof AggregateSales_contacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_contacts[P]>
      : GetScalarType<T[P], AggregateSales_contacts[P]>
  }




  export type sales_contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_contactsWhereInput
    orderBy?: sales_contactsOrderByWithAggregationInput | sales_contactsOrderByWithAggregationInput[]
    by: Sales_contactsScalarFieldEnum[] | Sales_contactsScalarFieldEnum
    having?: sales_contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sales_contactsCountAggregateInputType | true
    _avg?: Sales_contactsAvgAggregateInputType
    _sum?: Sales_contactsSumAggregateInputType
    _min?: Sales_contactsMinAggregateInputType
    _max?: Sales_contactsMaxAggregateInputType
  }

  export type Sales_contactsGroupByOutputType = {
    id: number
    record_date: Date
    name: string
    nickname: string
    birthdate: Date | null
    email: string
    phone_number: bigint
    country: string | null
    game: string
    _count: Sales_contactsCountAggregateOutputType | null
    _avg: Sales_contactsAvgAggregateOutputType | null
    _sum: Sales_contactsSumAggregateOutputType | null
    _min: Sales_contactsMinAggregateOutputType | null
    _max: Sales_contactsMaxAggregateOutputType | null
  }

  type GetSales_contactsGroupByPayload<T extends sales_contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_contactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sales_contactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sales_contactsGroupByOutputType[P]>
            : GetScalarType<T[P], Sales_contactsGroupByOutputType[P]>
        }
      >
    >


  export type sales_contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    record_date?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    game?: boolean
  }, ExtArgs["result"]["sales_contacts"]>

  export type sales_contactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    record_date?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    game?: boolean
  }, ExtArgs["result"]["sales_contacts"]>

  export type sales_contactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    record_date?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    game?: boolean
  }, ExtArgs["result"]["sales_contacts"]>

  export type sales_contactsSelectScalar = {
    id?: boolean
    record_date?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    game?: boolean
  }

  export type sales_contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "record_date" | "name" | "nickname" | "birthdate" | "email" | "phone_number" | "country" | "game", ExtArgs["result"]["sales_contacts"]>

  export type $sales_contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales_contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      record_date: Date
      name: string
      nickname: string
      birthdate: Date | null
      email: string
      phone_number: bigint
      country: string | null
      game: string
    }, ExtArgs["result"]["sales_contacts"]>
    composites: {}
  }

  type sales_contactsGetPayload<S extends boolean | null | undefined | sales_contactsDefaultArgs> = $Result.GetResult<Prisma.$sales_contactsPayload, S>

  type sales_contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sales_contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sales_contactsCountAggregateInputType | true
    }

  export interface sales_contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales_contacts'], meta: { name: 'sales_contacts' } }
    /**
     * Find zero or one Sales_contacts that matches the filter.
     * @param {sales_contactsFindUniqueArgs} args - Arguments to find a Sales_contacts
     * @example
     * // Get one Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sales_contactsFindUniqueArgs>(args: SelectSubset<T, sales_contactsFindUniqueArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales_contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sales_contactsFindUniqueOrThrowArgs} args - Arguments to find a Sales_contacts
     * @example
     * // Get one Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sales_contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, sales_contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsFindFirstArgs} args - Arguments to find a Sales_contacts
     * @example
     * // Get one Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sales_contactsFindFirstArgs>(args?: SelectSubset<T, sales_contactsFindFirstArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsFindFirstOrThrowArgs} args - Arguments to find a Sales_contacts
     * @example
     * // Get one Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sales_contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, sales_contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findMany()
     * 
     * // Get first 10 Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sales_contactsWithIdOnly = await prisma.sales_contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sales_contactsFindManyArgs>(args?: SelectSubset<T, sales_contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales_contacts.
     * @param {sales_contactsCreateArgs} args - Arguments to create a Sales_contacts.
     * @example
     * // Create one Sales_contacts
     * const Sales_contacts = await prisma.sales_contacts.create({
     *   data: {
     *     // ... data to create a Sales_contacts
     *   }
     * })
     * 
     */
    create<T extends sales_contactsCreateArgs>(args: SelectSubset<T, sales_contactsCreateArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales_contacts.
     * @param {sales_contactsCreateManyArgs} args - Arguments to create many Sales_contacts.
     * @example
     * // Create many Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sales_contactsCreateManyArgs>(args?: SelectSubset<T, sales_contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales_contacts and returns the data saved in the database.
     * @param {sales_contactsCreateManyAndReturnArgs} args - Arguments to create many Sales_contacts.
     * @example
     * // Create many Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales_contacts and only return the `id`
     * const sales_contactsWithIdOnly = await prisma.sales_contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sales_contactsCreateManyAndReturnArgs>(args?: SelectSubset<T, sales_contactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales_contacts.
     * @param {sales_contactsDeleteArgs} args - Arguments to delete one Sales_contacts.
     * @example
     * // Delete one Sales_contacts
     * const Sales_contacts = await prisma.sales_contacts.delete({
     *   where: {
     *     // ... filter to delete one Sales_contacts
     *   }
     * })
     * 
     */
    delete<T extends sales_contactsDeleteArgs>(args: SelectSubset<T, sales_contactsDeleteArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales_contacts.
     * @param {sales_contactsUpdateArgs} args - Arguments to update one Sales_contacts.
     * @example
     * // Update one Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sales_contactsUpdateArgs>(args: SelectSubset<T, sales_contactsUpdateArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales_contacts.
     * @param {sales_contactsDeleteManyArgs} args - Arguments to filter Sales_contacts to delete.
     * @example
     * // Delete a few Sales_contacts
     * const { count } = await prisma.sales_contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sales_contactsDeleteManyArgs>(args?: SelectSubset<T, sales_contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sales_contactsUpdateManyArgs>(args: SelectSubset<T, sales_contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_contacts and returns the data updated in the database.
     * @param {sales_contactsUpdateManyAndReturnArgs} args - Arguments to update many Sales_contacts.
     * @example
     * // Update many Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales_contacts and only return the `id`
     * const sales_contactsWithIdOnly = await prisma.sales_contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sales_contactsUpdateManyAndReturnArgs>(args: SelectSubset<T, sales_contactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales_contacts.
     * @param {sales_contactsUpsertArgs} args - Arguments to update or create a Sales_contacts.
     * @example
     * // Update or create a Sales_contacts
     * const sales_contacts = await prisma.sales_contacts.upsert({
     *   create: {
     *     // ... data to create a Sales_contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_contacts we want to update
     *   }
     * })
     */
    upsert<T extends sales_contactsUpsertArgs>(args: SelectSubset<T, sales_contactsUpsertArgs<ExtArgs>>): Prisma__sales_contactsClient<$Result.GetResult<Prisma.$sales_contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsCountArgs} args - Arguments to filter Sales_contacts to count.
     * @example
     * // Count the number of Sales_contacts
     * const count = await prisma.sales_contacts.count({
     *   where: {
     *     // ... the filter for the Sales_contacts we want to count
     *   }
     * })
    **/
    count<T extends sales_contactsCountArgs>(
      args?: Subset<T, sales_contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_contactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_contactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sales_contactsAggregateArgs>(args: Subset<T, Sales_contactsAggregateArgs>): Prisma.PrismaPromise<GetSales_contactsAggregateType<T>>

    /**
     * Group by Sales_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_contactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sales_contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sales_contactsGroupByArgs['orderBy'] }
        : { orderBy?: sales_contactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sales_contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSales_contactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales_contacts model
   */
  readonly fields: sales_contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales_contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sales_contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales_contacts model
   */ 
  interface sales_contactsFieldRefs {
    readonly id: FieldRef<"sales_contacts", 'Int'>
    readonly record_date: FieldRef<"sales_contacts", 'DateTime'>
    readonly name: FieldRef<"sales_contacts", 'String'>
    readonly nickname: FieldRef<"sales_contacts", 'String'>
    readonly birthdate: FieldRef<"sales_contacts", 'DateTime'>
    readonly email: FieldRef<"sales_contacts", 'String'>
    readonly phone_number: FieldRef<"sales_contacts", 'BigInt'>
    readonly country: FieldRef<"sales_contacts", 'String'>
    readonly game: FieldRef<"sales_contacts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sales_contacts findUnique
   */
  export type sales_contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter, which sales_contacts to fetch.
     */
    where: sales_contactsWhereUniqueInput
  }

  /**
   * sales_contacts findUniqueOrThrow
   */
  export type sales_contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter, which sales_contacts to fetch.
     */
    where: sales_contactsWhereUniqueInput
  }

  /**
   * sales_contacts findFirst
   */
  export type sales_contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter, which sales_contacts to fetch.
     */
    where?: sales_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_contacts to fetch.
     */
    orderBy?: sales_contactsOrderByWithRelationInput | sales_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_contacts.
     */
    cursor?: sales_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_contacts.
     */
    distinct?: Sales_contactsScalarFieldEnum | Sales_contactsScalarFieldEnum[]
  }

  /**
   * sales_contacts findFirstOrThrow
   */
  export type sales_contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter, which sales_contacts to fetch.
     */
    where?: sales_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_contacts to fetch.
     */
    orderBy?: sales_contactsOrderByWithRelationInput | sales_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_contacts.
     */
    cursor?: sales_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_contacts.
     */
    distinct?: Sales_contactsScalarFieldEnum | Sales_contactsScalarFieldEnum[]
  }

  /**
   * sales_contacts findMany
   */
  export type sales_contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter, which sales_contacts to fetch.
     */
    where?: sales_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_contacts to fetch.
     */
    orderBy?: sales_contactsOrderByWithRelationInput | sales_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales_contacts.
     */
    cursor?: sales_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_contacts.
     */
    skip?: number
    distinct?: Sales_contactsScalarFieldEnum | Sales_contactsScalarFieldEnum[]
  }

  /**
   * sales_contacts create
   */
  export type sales_contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * The data needed to create a sales_contacts.
     */
    data: XOR<sales_contactsCreateInput, sales_contactsUncheckedCreateInput>
  }

  /**
   * sales_contacts createMany
   */
  export type sales_contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales_contacts.
     */
    data: sales_contactsCreateManyInput | sales_contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales_contacts createManyAndReturn
   */
  export type sales_contactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * The data used to create many sales_contacts.
     */
    data: sales_contactsCreateManyInput | sales_contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales_contacts update
   */
  export type sales_contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * The data needed to update a sales_contacts.
     */
    data: XOR<sales_contactsUpdateInput, sales_contactsUncheckedUpdateInput>
    /**
     * Choose, which sales_contacts to update.
     */
    where: sales_contactsWhereUniqueInput
  }

  /**
   * sales_contacts updateMany
   */
  export type sales_contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales_contacts.
     */
    data: XOR<sales_contactsUpdateManyMutationInput, sales_contactsUncheckedUpdateManyInput>
    /**
     * Filter which sales_contacts to update
     */
    where?: sales_contactsWhereInput
    /**
     * Limit how many sales_contacts to update.
     */
    limit?: number
  }

  /**
   * sales_contacts updateManyAndReturn
   */
  export type sales_contactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * The data used to update sales_contacts.
     */
    data: XOR<sales_contactsUpdateManyMutationInput, sales_contactsUncheckedUpdateManyInput>
    /**
     * Filter which sales_contacts to update
     */
    where?: sales_contactsWhereInput
    /**
     * Limit how many sales_contacts to update.
     */
    limit?: number
  }

  /**
   * sales_contacts upsert
   */
  export type sales_contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * The filter to search for the sales_contacts to update in case it exists.
     */
    where: sales_contactsWhereUniqueInput
    /**
     * In case the sales_contacts found by the `where` argument doesn't exist, create a new sales_contacts with this data.
     */
    create: XOR<sales_contactsCreateInput, sales_contactsUncheckedCreateInput>
    /**
     * In case the sales_contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sales_contactsUpdateInput, sales_contactsUncheckedUpdateInput>
  }

  /**
   * sales_contacts delete
   */
  export type sales_contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
    /**
     * Filter which sales_contacts to delete.
     */
    where: sales_contactsWhereUniqueInput
  }

  /**
   * sales_contacts deleteMany
   */
  export type sales_contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_contacts to delete
     */
    where?: sales_contactsWhereInput
    /**
     * Limit how many sales_contacts to delete.
     */
    limit?: number
  }

  /**
   * sales_contacts without action
   */
  export type sales_contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_contacts
     */
    select?: sales_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_contacts
     */
    omit?: sales_contactsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone_number: 'phone_number',
    category: 'category'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const Sales_contactsScalarFieldEnum: {
    id: 'id',
    record_date: 'record_date',
    name: 'name',
    nickname: 'nickname',
    birthdate: 'birthdate',
    email: 'email',
    phone_number: 'phone_number',
    country: 'country',
    game: 'game'
  };

  export type Sales_contactsScalarFieldEnum = (typeof Sales_contactsScalarFieldEnum)[keyof typeof Sales_contactsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type contactsWhereInput = {
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    id?: IntFilter<"contacts"> | number
    name?: StringNullableFilter<"contacts"> | string | null
    email?: StringNullableFilter<"contacts"> | string | null
    phone_number?: StringNullableFilter<"contacts"> | string | null
    category?: StringNullableFilter<"contacts"> | string | null
  }

  export type contactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
  }

  export type contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    name?: StringNullableFilter<"contacts"> | string | null
    category?: StringNullableFilter<"contacts"> | string | null
  }, "id" | "email" | "phone_number">

  export type contactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    _count?: contactsCountOrderByAggregateInput
    _avg?: contactsAvgOrderByAggregateInput
    _max?: contactsMaxOrderByAggregateInput
    _min?: contactsMinOrderByAggregateInput
    _sum?: contactsSumOrderByAggregateInput
  }

  export type contactsScalarWhereWithAggregatesInput = {
    AND?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    OR?: contactsScalarWhereWithAggregatesInput[]
    NOT?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contacts"> | number
    name?: StringNullableWithAggregatesFilter<"contacts"> | string | null
    email?: StringNullableWithAggregatesFilter<"contacts"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"contacts"> | string | null
    category?: StringNullableWithAggregatesFilter<"contacts"> | string | null
  }

  export type sales_contactsWhereInput = {
    AND?: sales_contactsWhereInput | sales_contactsWhereInput[]
    OR?: sales_contactsWhereInput[]
    NOT?: sales_contactsWhereInput | sales_contactsWhereInput[]
    id?: IntFilter<"sales_contacts"> | number
    record_date?: DateTimeFilter<"sales_contacts"> | Date | string
    name?: StringFilter<"sales_contacts"> | string
    nickname?: StringFilter<"sales_contacts"> | string
    birthdate?: DateTimeNullableFilter<"sales_contacts"> | Date | string | null
    email?: StringFilter<"sales_contacts"> | string
    phone_number?: BigIntFilter<"sales_contacts"> | bigint | number
    country?: StringNullableFilter<"sales_contacts"> | string | null
    game?: StringFilter<"sales_contacts"> | string
  }

  export type sales_contactsOrderByWithRelationInput = {
    id?: SortOrder
    record_date?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrderInput | SortOrder
    game?: SortOrder
  }

  export type sales_contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sales_contactsWhereInput | sales_contactsWhereInput[]
    OR?: sales_contactsWhereInput[]
    NOT?: sales_contactsWhereInput | sales_contactsWhereInput[]
    record_date?: DateTimeFilter<"sales_contacts"> | Date | string
    name?: StringFilter<"sales_contacts"> | string
    nickname?: StringFilter<"sales_contacts"> | string
    birthdate?: DateTimeNullableFilter<"sales_contacts"> | Date | string | null
    email?: StringFilter<"sales_contacts"> | string
    phone_number?: BigIntFilter<"sales_contacts"> | bigint | number
    country?: StringNullableFilter<"sales_contacts"> | string | null
    game?: StringFilter<"sales_contacts"> | string
  }, "id">

  export type sales_contactsOrderByWithAggregationInput = {
    id?: SortOrder
    record_date?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrderInput | SortOrder
    game?: SortOrder
    _count?: sales_contactsCountOrderByAggregateInput
    _avg?: sales_contactsAvgOrderByAggregateInput
    _max?: sales_contactsMaxOrderByAggregateInput
    _min?: sales_contactsMinOrderByAggregateInput
    _sum?: sales_contactsSumOrderByAggregateInput
  }

  export type sales_contactsScalarWhereWithAggregatesInput = {
    AND?: sales_contactsScalarWhereWithAggregatesInput | sales_contactsScalarWhereWithAggregatesInput[]
    OR?: sales_contactsScalarWhereWithAggregatesInput[]
    NOT?: sales_contactsScalarWhereWithAggregatesInput | sales_contactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales_contacts"> | number
    record_date?: DateTimeWithAggregatesFilter<"sales_contacts"> | Date | string
    name?: StringWithAggregatesFilter<"sales_contacts"> | string
    nickname?: StringWithAggregatesFilter<"sales_contacts"> | string
    birthdate?: DateTimeNullableWithAggregatesFilter<"sales_contacts"> | Date | string | null
    email?: StringWithAggregatesFilter<"sales_contacts"> | string
    phone_number?: BigIntWithAggregatesFilter<"sales_contacts"> | bigint | number
    country?: StringNullableWithAggregatesFilter<"sales_contacts"> | string | null
    game?: StringWithAggregatesFilter<"sales_contacts"> | string
  }

  export type contactsCreateInput = {
    name?: string | null
    email?: string | null
    phone_number?: string | null
    category?: string | null
  }

  export type contactsUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone_number?: string | null
    category?: string | null
  }

  export type contactsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactsCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone_number?: string | null
    category?: string | null
  }

  export type contactsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sales_contactsCreateInput = {
    record_date: Date | string
    name: string
    nickname: string
    birthdate?: Date | string | null
    email: string
    phone_number: bigint | number
    country?: string | null
    game: string
  }

  export type sales_contactsUncheckedCreateInput = {
    id?: number
    record_date: Date | string
    name: string
    nickname: string
    birthdate?: Date | string | null
    email: string
    phone_number: bigint | number
    country?: string | null
    game: string
  }

  export type sales_contactsUpdateInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: BigIntFieldUpdateOperationsInput | bigint | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
  }

  export type sales_contactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: BigIntFieldUpdateOperationsInput | bigint | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
  }

  export type sales_contactsCreateManyInput = {
    id?: number
    record_date: Date | string
    name: string
    nickname: string
    birthdate?: Date | string | null
    email: string
    phone_number: bigint | number
    country?: string | null
    game: string
  }

  export type sales_contactsUpdateManyMutationInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: BigIntFieldUpdateOperationsInput | bigint | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
  }

  export type sales_contactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: BigIntFieldUpdateOperationsInput | bigint | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    game?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type contactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    category?: SortOrder
  }

  export type contactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    category?: SortOrder
  }

  export type contactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    category?: SortOrder
  }

  export type contactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type sales_contactsCountOrderByAggregateInput = {
    id?: SortOrder
    record_date?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    game?: SortOrder
  }

  export type sales_contactsAvgOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
  }

  export type sales_contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    record_date?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    game?: SortOrder
  }

  export type sales_contactsMinOrderByAggregateInput = {
    id?: SortOrder
    record_date?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    game?: SortOrder
  }

  export type sales_contactsSumOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}