
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model NewsCategory
 * 
 */
export type NewsCategory = $Result.DefaultSelection<Prisma.$NewsCategoryPayload>
/**
 * Model NewsCategoryNews
 * 
 */
export type NewsCategoryNews = $Result.DefaultSelection<Prisma.$NewsCategoryNewsPayload>
/**
 * Model NewsTag
 * 
 */
export type NewsTag = $Result.DefaultSelection<Prisma.$NewsTagPayload>
/**
 * Model NewsTagNews
 * 
 */
export type NewsTagNews = $Result.DefaultSelection<Prisma.$NewsTagNewsPayload>
/**
 * Model Investor
 * 
 */
export type Investor = $Result.DefaultSelection<Prisma.$InvestorPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Highlight
 * 
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs>;

  /**
   * `prisma.newsCategory`: Exposes CRUD operations for the **NewsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsCategories
    * const newsCategories = await prisma.newsCategory.findMany()
    * ```
    */
  get newsCategory(): Prisma.NewsCategoryDelegate<ExtArgs>;

  /**
   * `prisma.newsCategoryNews`: Exposes CRUD operations for the **NewsCategoryNews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsCategoryNews
    * const newsCategoryNews = await prisma.newsCategoryNews.findMany()
    * ```
    */
  get newsCategoryNews(): Prisma.NewsCategoryNewsDelegate<ExtArgs>;

  /**
   * `prisma.newsTag`: Exposes CRUD operations for the **NewsTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTags
    * const newsTags = await prisma.newsTag.findMany()
    * ```
    */
  get newsTag(): Prisma.NewsTagDelegate<ExtArgs>;

  /**
   * `prisma.newsTagNews`: Exposes CRUD operations for the **NewsTagNews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTagNews
    * const newsTagNews = await prisma.newsTagNews.findMany()
    * ```
    */
  get newsTagNews(): Prisma.NewsTagNewsDelegate<ExtArgs>;

  /**
   * `prisma.investor`: Exposes CRUD operations for the **Investor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investors
    * const investors = await prisma.investor.findMany()
    * ```
    */
  get investor(): Prisma.InvestorDelegate<ExtArgs>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs>;

  /**
   * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlight.findMany()
    * ```
    */
  get highlight(): Prisma.HighlightDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Company: 'Company',
    Project: 'Project',
    TeamMember: 'TeamMember',
    News: 'News',
    NewsCategory: 'NewsCategory',
    NewsCategoryNews: 'NewsCategoryNews',
    NewsTag: 'NewsTag',
    NewsTagNews: 'NewsTagNews',
    Investor: 'Investor',
    Partner: 'Partner',
    Contact: 'Contact',
    Banner: 'Banner',
    Highlight: 'Highlight'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "company" | "project" | "teamMember" | "news" | "newsCategory" | "newsCategoryNews" | "newsTag" | "newsTagNews" | "investor" | "partner" | "contact" | "banner" | "highlight"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      NewsCategory: {
        payload: Prisma.$NewsCategoryPayload<ExtArgs>
        fields: Prisma.NewsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findFirst: {
            args: Prisma.NewsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findMany: {
            args: Prisma.NewsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          create: {
            args: Prisma.NewsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          createMany: {
            args: Prisma.NewsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          delete: {
            args: Prisma.NewsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          update: {
            args: Prisma.NewsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NewsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          aggregate: {
            args: Prisma.NewsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsCategory>
          }
          groupBy: {
            args: Prisma.NewsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryCountAggregateOutputType> | number
          }
        }
      }
      NewsCategoryNews: {
        payload: Prisma.$NewsCategoryNewsPayload<ExtArgs>
        fields: Prisma.NewsCategoryNewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCategoryNewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCategoryNewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          findFirst: {
            args: Prisma.NewsCategoryNewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCategoryNewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          findMany: {
            args: Prisma.NewsCategoryNewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>[]
          }
          create: {
            args: Prisma.NewsCategoryNewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          createMany: {
            args: Prisma.NewsCategoryNewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCategoryNewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>[]
          }
          delete: {
            args: Prisma.NewsCategoryNewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          update: {
            args: Prisma.NewsCategoryNewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsCategoryNewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCategoryNewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsCategoryNewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryNewsPayload>
          }
          aggregate: {
            args: Prisma.NewsCategoryNewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsCategoryNews>
          }
          groupBy: {
            args: Prisma.NewsCategoryNewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryNewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCategoryNewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryNewsCountAggregateOutputType> | number
          }
        }
      }
      NewsTag: {
        payload: Prisma.$NewsTagPayload<ExtArgs>
        fields: Prisma.NewsTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findFirst: {
            args: Prisma.NewsTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findMany: {
            args: Prisma.NewsTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          create: {
            args: Prisma.NewsTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          createMany: {
            args: Prisma.NewsTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          delete: {
            args: Prisma.NewsTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          update: {
            args: Prisma.NewsTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          deleteMany: {
            args: Prisma.NewsTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          aggregate: {
            args: Prisma.NewsTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTag>
          }
          groupBy: {
            args: Prisma.NewsTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTagCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTagCountAggregateOutputType> | number
          }
        }
      }
      NewsTagNews: {
        payload: Prisma.$NewsTagNewsPayload<ExtArgs>
        fields: Prisma.NewsTagNewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTagNewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTagNewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          findFirst: {
            args: Prisma.NewsTagNewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTagNewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          findMany: {
            args: Prisma.NewsTagNewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>[]
          }
          create: {
            args: Prisma.NewsTagNewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          createMany: {
            args: Prisma.NewsTagNewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTagNewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>[]
          }
          delete: {
            args: Prisma.NewsTagNewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          update: {
            args: Prisma.NewsTagNewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsTagNewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTagNewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsTagNewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagNewsPayload>
          }
          aggregate: {
            args: Prisma.NewsTagNewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTagNews>
          }
          groupBy: {
            args: Prisma.NewsTagNewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTagNewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTagNewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTagNewsCountAggregateOutputType> | number
          }
        }
      }
      Investor: {
        payload: Prisma.$InvestorPayload<ExtArgs>
        fields: Prisma.InvestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findFirst: {
            args: Prisma.InvestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findMany: {
            args: Prisma.InvestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          create: {
            args: Prisma.InvestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          createMany: {
            args: Prisma.InvestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          delete: {
            args: Prisma.InvestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          update: {
            args: Prisma.InvestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          deleteMany: {
            args: Prisma.InvestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          aggregate: {
            args: Prisma.InvestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestor>
          }
          groupBy: {
            args: Prisma.InvestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestorCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Highlight: {
        payload: Prisma.$HighlightPayload<ExtArgs>
        fields: Prisma.HighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findFirst: {
            args: Prisma.HighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findMany: {
            args: Prisma.HighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          create: {
            args: Prisma.HighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          createMany: {
            args: Prisma.HighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          delete: {
            args: Prisma.HighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          update: {
            args: Prisma.HighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          deleteMany: {
            args: Prisma.HighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          aggregate: {
            args: Prisma.HighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlight>
          }
          groupBy: {
            args: Prisma.HighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightCountAggregateOutputType> | number
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    projects: number
    teamMembers: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CompanyCountOutputTypeCountProjectsArgs
    teamMembers?: boolean | CompanyCountOutputTypeCountTeamMembersArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    newsCategories: number
    newsTags: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsCategories?: boolean | NewsCountOutputTypeCountNewsCategoriesArgs
    newsTags?: boolean | NewsCountOutputTypeCountNewsTagsArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountNewsCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryNewsWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountNewsTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagNewsWhereInput
  }


  /**
   * Count Type NewsCategoryCountOutputType
   */

  export type NewsCategoryCountOutputType = {
    news: number
  }

  export type NewsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategoryCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryCountOutputType
     */
    select?: NewsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryNewsWhereInput
  }


  /**
   * Count Type NewsTagCountOutputType
   */

  export type NewsTagCountOutputType = {
    news: number
  }

  export type NewsTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTagCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagCountOutputType
     */
    select?: NewsTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagNewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    missao: string | null
    visao: string | null
    logo: string | null
    capa: string | null
    website: string | null
    email: string | null
    telefone: string | null
    localizacao: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    missao: string | null
    visao: string | null
    logo: string | null
    capa: string | null
    website: string | null
    email: string | null
    telefone: string | null
    localizacao: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    missao: number
    visao: number
    logo: number
    capa: number
    website: number
    email: number
    telefone: number
    localizacao: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    missao?: true
    visao?: true
    logo?: true
    capa?: true
    website?: true
    email?: true
    telefone?: true
    localizacao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    missao?: true
    visao?: true
    logo?: true
    capa?: true
    website?: true
    email?: true
    telefone?: true
    localizacao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    missao?: true
    visao?: true
    logo?: true
    capa?: true
    website?: true
    email?: true
    telefone?: true
    localizacao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    missao: string | null
    visao: string | null
    logo: string | null
    capa: string | null
    website: string | null
    email: string | null
    telefone: string | null
    localizacao: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    missao?: boolean
    visao?: boolean
    logo?: boolean
    capa?: boolean
    website?: boolean
    email?: boolean
    telefone?: boolean
    localizacao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Company$projectsArgs<ExtArgs>
    teamMembers?: boolean | Company$teamMembersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    missao?: boolean
    visao?: boolean
    logo?: boolean
    capa?: boolean
    website?: boolean
    email?: boolean
    telefone?: boolean
    localizacao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    missao?: boolean
    visao?: boolean
    logo?: boolean
    capa?: boolean
    website?: boolean
    email?: boolean
    telefone?: boolean
    localizacao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Company$projectsArgs<ExtArgs>
    teamMembers?: boolean | Company$teamMembersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      teamMembers: Prisma.$TeamMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      missao: string | null
      visao: string | null
      logo: string | null
      capa: string | null
      website: string | null
      email: string | null
      telefone: string | null
      localizacao: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Company$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Company$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    teamMembers<T extends Company$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, Company$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly nome: FieldRef<"Company", 'String'>
    readonly descricao: FieldRef<"Company", 'String'>
    readonly missao: FieldRef<"Company", 'String'>
    readonly visao: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly capa: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly telefone: FieldRef<"Company", 'String'>
    readonly localizacao: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'Boolean'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.projects
   */
  export type Company$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Company.teamMembers
   */
  export type Company$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    investimento: Decimal | null
    companyId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    investimento: Decimal | null
    companyId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    categoria: string | null
    investimento: Decimal | null
    localizacao: string | null
    status: boolean | null
    imagens: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    categoria: string | null
    investimento: Decimal | null
    localizacao: string | null
    status: boolean | null
    imagens: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    categoria: number
    investimento: number
    localizacao: number
    status: number
    imagens: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    investimento?: true
    companyId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    investimento?: true
    companyId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    investimento?: true
    localizacao?: true
    status?: true
    imagens?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    investimento?: true
    localizacao?: true
    status?: true
    imagens?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    categoria?: true
    investimento?: true
    localizacao?: true
    status?: true
    imagens?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    categoria: string | null
    investimento: Decimal | null
    localizacao: string | null
    status: boolean
    imagens: string | null
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    investimento?: boolean
    localizacao?: boolean
    status?: boolean
    imagens?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    investimento?: boolean
    localizacao?: boolean
    status?: boolean
    imagens?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    categoria?: boolean
    investimento?: boolean
    localizacao?: boolean
    status?: boolean
    imagens?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      categoria: string | null
      investimento: Prisma.Decimal | null
      localizacao: string | null
      status: boolean
      imagens: string | null
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly nome: FieldRef<"Project", 'String'>
    readonly descricao: FieldRef<"Project", 'String'>
    readonly categoria: FieldRef<"Project", 'String'>
    readonly investimento: FieldRef<"Project", 'Decimal'>
    readonly localizacao: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'Boolean'>
    readonly imagens: FieldRef<"Project", 'String'>
    readonly companyId: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cargo: string | null
    fotografia: string | null
    linkedin: string | null
    biografia: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cargo: string | null
    fotografia: string | null
    linkedin: string | null
    biografia: string | null
    companyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    nome: number
    cargo: number
    fotografia: number
    linkedin: number
    biografia: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    fotografia?: true
    linkedin?: true
    biografia?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    fotografia?: true
    linkedin?: true
    biografia?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    fotografia?: true
    linkedin?: true
    biografia?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    nome: string
    cargo: string | null
    fotografia: string | null
    linkedin: string | null
    biografia: string | null
    companyId: number
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cargo?: boolean
    fotografia?: boolean
    linkedin?: boolean
    biografia?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cargo?: boolean
    fotografia?: boolean
    linkedin?: boolean
    biografia?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    nome?: boolean
    cargo?: boolean
    fotografia?: boolean
    linkedin?: boolean
    biografia?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cargo: string | null
      fotografia: string | null
      linkedin: string | null
      biografia: string | null
      companyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly nome: FieldRef<"TeamMember", 'String'>
    readonly cargo: FieldRef<"TeamMember", 'String'>
    readonly fotografia: FieldRef<"TeamMember", 'String'>
    readonly linkedin: FieldRef<"TeamMember", 'String'>
    readonly biografia: FieldRef<"TeamMember", 'String'>
    readonly companyId: FieldRef<"TeamMember", 'Int'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    slug: string | null
    resumo: string | null
    conteudo: string | null
    blocos: string | null
    imagem: string | null
    status: string | null
    agendadoPara: Date | null
    dataPublicacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    slug: string | null
    resumo: string | null
    conteudo: string | null
    blocos: string | null
    imagem: string | null
    status: string | null
    agendadoPara: Date | null
    dataPublicacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    titulo: number
    slug: number
    resumo: number
    conteudo: number
    blocos: number
    imagem: number
    status: number
    agendadoPara: number
    dataPublicacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    resumo?: true
    conteudo?: true
    blocos?: true
    imagem?: true
    status?: true
    agendadoPara?: true
    dataPublicacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    resumo?: true
    conteudo?: true
    blocos?: true
    imagem?: true
    status?: true
    agendadoPara?: true
    dataPublicacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    resumo?: true
    conteudo?: true
    blocos?: true
    imagem?: true
    status?: true
    agendadoPara?: true
    dataPublicacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: number
    titulo: string
    slug: string
    resumo: string | null
    conteudo: string | null
    blocos: string | null
    imagem: string | null
    status: string
    agendadoPara: Date | null
    dataPublicacao: Date
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    slug?: boolean
    resumo?: boolean
    conteudo?: boolean
    blocos?: boolean
    imagem?: boolean
    status?: boolean
    agendadoPara?: boolean
    dataPublicacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newsCategories?: boolean | News$newsCategoriesArgs<ExtArgs>
    newsTags?: boolean | News$newsTagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    slug?: boolean
    resumo?: boolean
    conteudo?: boolean
    blocos?: boolean
    imagem?: boolean
    status?: boolean
    agendadoPara?: boolean
    dataPublicacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    titulo?: boolean
    slug?: boolean
    resumo?: boolean
    conteudo?: boolean
    blocos?: boolean
    imagem?: boolean
    status?: boolean
    agendadoPara?: boolean
    dataPublicacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsCategories?: boolean | News$newsCategoriesArgs<ExtArgs>
    newsTags?: boolean | News$newsTagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      newsCategories: Prisma.$NewsCategoryNewsPayload<ExtArgs>[]
      newsTags: Prisma.$NewsTagNewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      slug: string
      resumo: string | null
      conteudo: string | null
      blocos: string | null
      imagem: string | null
      status: string
      agendadoPara: Date | null
      dataPublicacao: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsCategories<T extends News$newsCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, News$newsCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findMany"> | Null>
    newsTags<T extends News$newsTagsArgs<ExtArgs> = {}>(args?: Subset<T, News$newsTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'Int'>
    readonly titulo: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly resumo: FieldRef<"News", 'String'>
    readonly conteudo: FieldRef<"News", 'String'>
    readonly blocos: FieldRef<"News", 'String'>
    readonly imagem: FieldRef<"News", 'String'>
    readonly status: FieldRef<"News", 'String'>
    readonly agendadoPara: FieldRef<"News", 'DateTime'>
    readonly dataPublicacao: FieldRef<"News", 'DateTime'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
  }

  /**
   * News.newsCategories
   */
  export type News$newsCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    where?: NewsCategoryNewsWhereInput
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    cursor?: NewsCategoryNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsCategoryNewsScalarFieldEnum | NewsCategoryNewsScalarFieldEnum[]
  }

  /**
   * News.newsTags
   */
  export type News$newsTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    where?: NewsTagNewsWhereInput
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    cursor?: NewsTagNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsTagNewsScalarFieldEnum | NewsTagNewsScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsCategory
   */

  export type AggregateNewsCategory = {
    _count: NewsCategoryCountAggregateOutputType | null
    _avg: NewsCategoryAvgAggregateOutputType | null
    _sum: NewsCategorySumAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  export type NewsCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsCategorySumAggregateOutputType = {
    id: number | null
  }

  export type NewsCategoryMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NewsCategoryMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NewsCategoryCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type NewsCategoryAvgAggregateInputType = {
    id?: true
  }

  export type NewsCategorySumAggregateInputType = {
    id?: true
  }

  export type NewsCategoryMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NewsCategoryMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NewsCategoryCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type NewsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategory to aggregate.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsCategories
    **/
    _count?: true | NewsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type GetNewsCategoryAggregateType<T extends NewsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsCategory[P]>
      : GetScalarType<T[P], AggregateNewsCategory[P]>
  }




  export type NewsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryWhereInput
    orderBy?: NewsCategoryOrderByWithAggregationInput | NewsCategoryOrderByWithAggregationInput[]
    by: NewsCategoryScalarFieldEnum[] | NewsCategoryScalarFieldEnum
    having?: NewsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCategoryCountAggregateInputType | true
    _avg?: NewsCategoryAvgAggregateInputType
    _sum?: NewsCategorySumAggregateInputType
    _min?: NewsCategoryMinAggregateInputType
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type NewsCategoryGroupByOutputType = {
    id: number
    nome: string
    _count: NewsCategoryCountAggregateOutputType | null
    _avg: NewsCategoryAvgAggregateOutputType | null
    _sum: NewsCategorySumAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  type GetNewsCategoryGroupByPayload<T extends NewsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NewsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type NewsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsCategory"
    objects: {
      news: Prisma.$NewsCategoryNewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["newsCategory"]>
    composites: {}
  }

  type NewsCategoryGetPayload<S extends boolean | null | undefined | NewsCategoryDefaultArgs> = $Result.GetResult<Prisma.$NewsCategoryPayload, S>

  type NewsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCategoryCountAggregateInputType | true
    }

  export interface NewsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsCategory'], meta: { name: 'NewsCategory' } }
    /**
     * Find zero or one NewsCategory that matches the filter.
     * @param {NewsCategoryFindUniqueArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCategoryFindUniqueArgs>(args: SelectSubset<T, NewsCategoryFindUniqueArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsCategoryFindUniqueOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCategoryFindFirstArgs>(args?: SelectSubset<T, NewsCategoryFindFirstArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany()
     * 
     * // Get first 10 NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsCategoryFindManyArgs>(args?: SelectSubset<T, NewsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsCategory.
     * @param {NewsCategoryCreateArgs} args - Arguments to create a NewsCategory.
     * @example
     * // Create one NewsCategory
     * const NewsCategory = await prisma.newsCategory.create({
     *   data: {
     *     // ... data to create a NewsCategory
     *   }
     * })
     * 
     */
    create<T extends NewsCategoryCreateArgs>(args: SelectSubset<T, NewsCategoryCreateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsCategories.
     * @param {NewsCategoryCreateManyArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCategoryCreateManyArgs>(args?: SelectSubset<T, NewsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsCategories and returns the data saved in the database.
     * @param {NewsCategoryCreateManyAndReturnArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsCategory.
     * @param {NewsCategoryDeleteArgs} args - Arguments to delete one NewsCategory.
     * @example
     * // Delete one NewsCategory
     * const NewsCategory = await prisma.newsCategory.delete({
     *   where: {
     *     // ... filter to delete one NewsCategory
     *   }
     * })
     * 
     */
    delete<T extends NewsCategoryDeleteArgs>(args: SelectSubset<T, NewsCategoryDeleteArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsCategory.
     * @param {NewsCategoryUpdateArgs} args - Arguments to update one NewsCategory.
     * @example
     * // Update one NewsCategory
     * const newsCategory = await prisma.newsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCategoryUpdateArgs>(args: SelectSubset<T, NewsCategoryUpdateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsCategories.
     * @param {NewsCategoryDeleteManyArgs} args - Arguments to filter NewsCategories to delete.
     * @example
     * // Delete a few NewsCategories
     * const { count } = await prisma.newsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCategoryDeleteManyArgs>(args?: SelectSubset<T, NewsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCategoryUpdateManyArgs>(args: SelectSubset<T, NewsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsCategory.
     * @param {NewsCategoryUpsertArgs} args - Arguments to update or create a NewsCategory.
     * @example
     * // Update or create a NewsCategory
     * const newsCategory = await prisma.newsCategory.upsert({
     *   create: {
     *     // ... data to create a NewsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsCategory we want to update
     *   }
     * })
     */
    upsert<T extends NewsCategoryUpsertArgs>(args: SelectSubset<T, NewsCategoryUpsertArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryCountArgs} args - Arguments to filter NewsCategories to count.
     * @example
     * // Count the number of NewsCategories
     * const count = await prisma.newsCategory.count({
     *   where: {
     *     // ... the filter for the NewsCategories we want to count
     *   }
     * })
    **/
    count<T extends NewsCategoryCountArgs>(
      args?: Subset<T, NewsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsCategoryAggregateArgs>(args: Subset<T, NewsCategoryAggregateArgs>): Prisma.PrismaPromise<GetNewsCategoryAggregateType<T>>

    /**
     * Group by NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryGroupByArgs} args - Group by arguments.
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
      T extends NewsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NewsCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsCategory model
   */
  readonly fields: NewsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsCategory$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategory$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the NewsCategory model
   */ 
  interface NewsCategoryFieldRefs {
    readonly id: FieldRef<"NewsCategory", 'Int'>
    readonly nome: FieldRef<"NewsCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsCategory findUnique
   */
  export type NewsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findUniqueOrThrow
   */
  export type NewsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findFirst
   */
  export type NewsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findFirstOrThrow
   */
  export type NewsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findMany
   */
  export type NewsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategories to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory create
   */
  export type NewsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsCategory.
     */
    data: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
  }

  /**
   * NewsCategory createMany
   */
  export type NewsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory createManyAndReturn
   */
  export type NewsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory update
   */
  export type NewsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsCategory.
     */
    data: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
    /**
     * Choose, which NewsCategory to update.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory updateMany
   */
  export type NewsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
  }

  /**
   * NewsCategory upsert
   */
  export type NewsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsCategory to update in case it exists.
     */
    where: NewsCategoryWhereUniqueInput
    /**
     * In case the NewsCategory found by the `where` argument doesn't exist, create a new NewsCategory with this data.
     */
    create: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
    /**
     * In case the NewsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
  }

  /**
   * NewsCategory delete
   */
  export type NewsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter which NewsCategory to delete.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory deleteMany
   */
  export type NewsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategories to delete
     */
    where?: NewsCategoryWhereInput
  }

  /**
   * NewsCategory.news
   */
  export type NewsCategory$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    where?: NewsCategoryNewsWhereInput
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    cursor?: NewsCategoryNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsCategoryNewsScalarFieldEnum | NewsCategoryNewsScalarFieldEnum[]
  }

  /**
   * NewsCategory without action
   */
  export type NewsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model NewsCategoryNews
   */

  export type AggregateNewsCategoryNews = {
    _count: NewsCategoryNewsCountAggregateOutputType | null
    _avg: NewsCategoryNewsAvgAggregateOutputType | null
    _sum: NewsCategoryNewsSumAggregateOutputType | null
    _min: NewsCategoryNewsMinAggregateOutputType | null
    _max: NewsCategoryNewsMaxAggregateOutputType | null
  }

  export type NewsCategoryNewsAvgAggregateOutputType = {
    newsId: number | null
    newsCategoryId: number | null
  }

  export type NewsCategoryNewsSumAggregateOutputType = {
    newsId: number | null
    newsCategoryId: number | null
  }

  export type NewsCategoryNewsMinAggregateOutputType = {
    newsId: number | null
    newsCategoryId: number | null
  }

  export type NewsCategoryNewsMaxAggregateOutputType = {
    newsId: number | null
    newsCategoryId: number | null
  }

  export type NewsCategoryNewsCountAggregateOutputType = {
    newsId: number
    newsCategoryId: number
    _all: number
  }


  export type NewsCategoryNewsAvgAggregateInputType = {
    newsId?: true
    newsCategoryId?: true
  }

  export type NewsCategoryNewsSumAggregateInputType = {
    newsId?: true
    newsCategoryId?: true
  }

  export type NewsCategoryNewsMinAggregateInputType = {
    newsId?: true
    newsCategoryId?: true
  }

  export type NewsCategoryNewsMaxAggregateInputType = {
    newsId?: true
    newsCategoryId?: true
  }

  export type NewsCategoryNewsCountAggregateInputType = {
    newsId?: true
    newsCategoryId?: true
    _all?: true
  }

  export type NewsCategoryNewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategoryNews to aggregate.
     */
    where?: NewsCategoryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategoryNews to fetch.
     */
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCategoryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategoryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategoryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsCategoryNews
    **/
    _count?: true | NewsCategoryNewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsCategoryNewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsCategoryNewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCategoryNewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCategoryNewsMaxAggregateInputType
  }

  export type GetNewsCategoryNewsAggregateType<T extends NewsCategoryNewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsCategoryNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsCategoryNews[P]>
      : GetScalarType<T[P], AggregateNewsCategoryNews[P]>
  }




  export type NewsCategoryNewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryNewsWhereInput
    orderBy?: NewsCategoryNewsOrderByWithAggregationInput | NewsCategoryNewsOrderByWithAggregationInput[]
    by: NewsCategoryNewsScalarFieldEnum[] | NewsCategoryNewsScalarFieldEnum
    having?: NewsCategoryNewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCategoryNewsCountAggregateInputType | true
    _avg?: NewsCategoryNewsAvgAggregateInputType
    _sum?: NewsCategoryNewsSumAggregateInputType
    _min?: NewsCategoryNewsMinAggregateInputType
    _max?: NewsCategoryNewsMaxAggregateInputType
  }

  export type NewsCategoryNewsGroupByOutputType = {
    newsId: number
    newsCategoryId: number
    _count: NewsCategoryNewsCountAggregateOutputType | null
    _avg: NewsCategoryNewsAvgAggregateOutputType | null
    _sum: NewsCategoryNewsSumAggregateOutputType | null
    _min: NewsCategoryNewsMinAggregateOutputType | null
    _max: NewsCategoryNewsMaxAggregateOutputType | null
  }

  type GetNewsCategoryNewsGroupByPayload<T extends NewsCategoryNewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCategoryNewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCategoryNewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCategoryNewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCategoryNewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsCategoryNewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    newsCategoryId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsCategory?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategoryNews"]>

  export type NewsCategoryNewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    newsCategoryId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsCategory?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategoryNews"]>

  export type NewsCategoryNewsSelectScalar = {
    newsId?: boolean
    newsCategoryId?: boolean
  }

  export type NewsCategoryNewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsCategory?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }
  export type NewsCategoryNewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsCategory?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }

  export type $NewsCategoryNewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsCategoryNews"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      newsCategory: Prisma.$NewsCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      newsId: number
      newsCategoryId: number
    }, ExtArgs["result"]["newsCategoryNews"]>
    composites: {}
  }

  type NewsCategoryNewsGetPayload<S extends boolean | null | undefined | NewsCategoryNewsDefaultArgs> = $Result.GetResult<Prisma.$NewsCategoryNewsPayload, S>

  type NewsCategoryNewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsCategoryNewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCategoryNewsCountAggregateInputType | true
    }

  export interface NewsCategoryNewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsCategoryNews'], meta: { name: 'NewsCategoryNews' } }
    /**
     * Find zero or one NewsCategoryNews that matches the filter.
     * @param {NewsCategoryNewsFindUniqueArgs} args - Arguments to find a NewsCategoryNews
     * @example
     * // Get one NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCategoryNewsFindUniqueArgs>(args: SelectSubset<T, NewsCategoryNewsFindUniqueArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsCategoryNews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsCategoryNewsFindUniqueOrThrowArgs} args - Arguments to find a NewsCategoryNews
     * @example
     * // Get one NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCategoryNewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCategoryNewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsCategoryNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsFindFirstArgs} args - Arguments to find a NewsCategoryNews
     * @example
     * // Get one NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCategoryNewsFindFirstArgs>(args?: SelectSubset<T, NewsCategoryNewsFindFirstArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsCategoryNews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsFindFirstOrThrowArgs} args - Arguments to find a NewsCategoryNews
     * @example
     * // Get one NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCategoryNewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCategoryNewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsCategoryNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findMany()
     * 
     * // Get first 10 NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.findMany({ take: 10 })
     * 
     * // Only select the `newsId`
     * const newsCategoryNewsWithNewsIdOnly = await prisma.newsCategoryNews.findMany({ select: { newsId: true } })
     * 
     */
    findMany<T extends NewsCategoryNewsFindManyArgs>(args?: SelectSubset<T, NewsCategoryNewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsCategoryNews.
     * @param {NewsCategoryNewsCreateArgs} args - Arguments to create a NewsCategoryNews.
     * @example
     * // Create one NewsCategoryNews
     * const NewsCategoryNews = await prisma.newsCategoryNews.create({
     *   data: {
     *     // ... data to create a NewsCategoryNews
     *   }
     * })
     * 
     */
    create<T extends NewsCategoryNewsCreateArgs>(args: SelectSubset<T, NewsCategoryNewsCreateArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsCategoryNews.
     * @param {NewsCategoryNewsCreateManyArgs} args - Arguments to create many NewsCategoryNews.
     * @example
     * // Create many NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCategoryNewsCreateManyArgs>(args?: SelectSubset<T, NewsCategoryNewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsCategoryNews and returns the data saved in the database.
     * @param {NewsCategoryNewsCreateManyAndReturnArgs} args - Arguments to create many NewsCategoryNews.
     * @example
     * // Create many NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsCategoryNews and only return the `newsId`
     * const newsCategoryNewsWithNewsIdOnly = await prisma.newsCategoryNews.createManyAndReturn({ 
     *   select: { newsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCategoryNewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCategoryNewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsCategoryNews.
     * @param {NewsCategoryNewsDeleteArgs} args - Arguments to delete one NewsCategoryNews.
     * @example
     * // Delete one NewsCategoryNews
     * const NewsCategoryNews = await prisma.newsCategoryNews.delete({
     *   where: {
     *     // ... filter to delete one NewsCategoryNews
     *   }
     * })
     * 
     */
    delete<T extends NewsCategoryNewsDeleteArgs>(args: SelectSubset<T, NewsCategoryNewsDeleteArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsCategoryNews.
     * @param {NewsCategoryNewsUpdateArgs} args - Arguments to update one NewsCategoryNews.
     * @example
     * // Update one NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCategoryNewsUpdateArgs>(args: SelectSubset<T, NewsCategoryNewsUpdateArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsCategoryNews.
     * @param {NewsCategoryNewsDeleteManyArgs} args - Arguments to filter NewsCategoryNews to delete.
     * @example
     * // Delete a few NewsCategoryNews
     * const { count } = await prisma.newsCategoryNews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCategoryNewsDeleteManyArgs>(args?: SelectSubset<T, NewsCategoryNewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategoryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCategoryNewsUpdateManyArgs>(args: SelectSubset<T, NewsCategoryNewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsCategoryNews.
     * @param {NewsCategoryNewsUpsertArgs} args - Arguments to update or create a NewsCategoryNews.
     * @example
     * // Update or create a NewsCategoryNews
     * const newsCategoryNews = await prisma.newsCategoryNews.upsert({
     *   create: {
     *     // ... data to create a NewsCategoryNews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsCategoryNews we want to update
     *   }
     * })
     */
    upsert<T extends NewsCategoryNewsUpsertArgs>(args: SelectSubset<T, NewsCategoryNewsUpsertArgs<ExtArgs>>): Prisma__NewsCategoryNewsClient<$Result.GetResult<Prisma.$NewsCategoryNewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsCategoryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsCountArgs} args - Arguments to filter NewsCategoryNews to count.
     * @example
     * // Count the number of NewsCategoryNews
     * const count = await prisma.newsCategoryNews.count({
     *   where: {
     *     // ... the filter for the NewsCategoryNews we want to count
     *   }
     * })
    **/
    count<T extends NewsCategoryNewsCountArgs>(
      args?: Subset<T, NewsCategoryNewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCategoryNewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsCategoryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsCategoryNewsAggregateArgs>(args: Subset<T, NewsCategoryNewsAggregateArgs>): Prisma.PrismaPromise<GetNewsCategoryNewsAggregateType<T>>

    /**
     * Group by NewsCategoryNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryNewsGroupByArgs} args - Group by arguments.
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
      T extends NewsCategoryNewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCategoryNewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsCategoryNewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsCategoryNewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCategoryNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsCategoryNews model
   */
  readonly fields: NewsCategoryNewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsCategoryNews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCategoryNewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    newsCategory<T extends NewsCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategoryDefaultArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the NewsCategoryNews model
   */ 
  interface NewsCategoryNewsFieldRefs {
    readonly newsId: FieldRef<"NewsCategoryNews", 'Int'>
    readonly newsCategoryId: FieldRef<"NewsCategoryNews", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NewsCategoryNews findUnique
   */
  export type NewsCategoryNewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategoryNews to fetch.
     */
    where: NewsCategoryNewsWhereUniqueInput
  }

  /**
   * NewsCategoryNews findUniqueOrThrow
   */
  export type NewsCategoryNewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategoryNews to fetch.
     */
    where: NewsCategoryNewsWhereUniqueInput
  }

  /**
   * NewsCategoryNews findFirst
   */
  export type NewsCategoryNewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategoryNews to fetch.
     */
    where?: NewsCategoryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategoryNews to fetch.
     */
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategoryNews.
     */
    cursor?: NewsCategoryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategoryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategoryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategoryNews.
     */
    distinct?: NewsCategoryNewsScalarFieldEnum | NewsCategoryNewsScalarFieldEnum[]
  }

  /**
   * NewsCategoryNews findFirstOrThrow
   */
  export type NewsCategoryNewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategoryNews to fetch.
     */
    where?: NewsCategoryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategoryNews to fetch.
     */
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategoryNews.
     */
    cursor?: NewsCategoryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategoryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategoryNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategoryNews.
     */
    distinct?: NewsCategoryNewsScalarFieldEnum | NewsCategoryNewsScalarFieldEnum[]
  }

  /**
   * NewsCategoryNews findMany
   */
  export type NewsCategoryNewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategoryNews to fetch.
     */
    where?: NewsCategoryNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategoryNews to fetch.
     */
    orderBy?: NewsCategoryNewsOrderByWithRelationInput | NewsCategoryNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsCategoryNews.
     */
    cursor?: NewsCategoryNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategoryNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategoryNews.
     */
    skip?: number
    distinct?: NewsCategoryNewsScalarFieldEnum | NewsCategoryNewsScalarFieldEnum[]
  }

  /**
   * NewsCategoryNews create
   */
  export type NewsCategoryNewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsCategoryNews.
     */
    data: XOR<NewsCategoryNewsCreateInput, NewsCategoryNewsUncheckedCreateInput>
  }

  /**
   * NewsCategoryNews createMany
   */
  export type NewsCategoryNewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsCategoryNews.
     */
    data: NewsCategoryNewsCreateManyInput | NewsCategoryNewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategoryNews createManyAndReturn
   */
  export type NewsCategoryNewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsCategoryNews.
     */
    data: NewsCategoryNewsCreateManyInput | NewsCategoryNewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsCategoryNews update
   */
  export type NewsCategoryNewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsCategoryNews.
     */
    data: XOR<NewsCategoryNewsUpdateInput, NewsCategoryNewsUncheckedUpdateInput>
    /**
     * Choose, which NewsCategoryNews to update.
     */
    where: NewsCategoryNewsWhereUniqueInput
  }

  /**
   * NewsCategoryNews updateMany
   */
  export type NewsCategoryNewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsCategoryNews.
     */
    data: XOR<NewsCategoryNewsUpdateManyMutationInput, NewsCategoryNewsUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategoryNews to update
     */
    where?: NewsCategoryNewsWhereInput
  }

  /**
   * NewsCategoryNews upsert
   */
  export type NewsCategoryNewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsCategoryNews to update in case it exists.
     */
    where: NewsCategoryNewsWhereUniqueInput
    /**
     * In case the NewsCategoryNews found by the `where` argument doesn't exist, create a new NewsCategoryNews with this data.
     */
    create: XOR<NewsCategoryNewsCreateInput, NewsCategoryNewsUncheckedCreateInput>
    /**
     * In case the NewsCategoryNews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCategoryNewsUpdateInput, NewsCategoryNewsUncheckedUpdateInput>
  }

  /**
   * NewsCategoryNews delete
   */
  export type NewsCategoryNewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
    /**
     * Filter which NewsCategoryNews to delete.
     */
    where: NewsCategoryNewsWhereUniqueInput
  }

  /**
   * NewsCategoryNews deleteMany
   */
  export type NewsCategoryNewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategoryNews to delete
     */
    where?: NewsCategoryNewsWhereInput
  }

  /**
   * NewsCategoryNews without action
   */
  export type NewsCategoryNewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryNews
     */
    select?: NewsCategoryNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryNewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsTag
   */

  export type AggregateNewsTag = {
    _count: NewsTagCountAggregateOutputType | null
    _avg: NewsTagAvgAggregateOutputType | null
    _sum: NewsTagSumAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  export type NewsTagAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsTagSumAggregateOutputType = {
    id: number | null
  }

  export type NewsTagMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NewsTagMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NewsTagCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type NewsTagAvgAggregateInputType = {
    id?: true
  }

  export type NewsTagSumAggregateInputType = {
    id?: true
  }

  export type NewsTagMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NewsTagMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NewsTagCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type NewsTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTag to aggregate.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTags
    **/
    _count?: true | NewsTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTagMaxAggregateInputType
  }

  export type GetNewsTagAggregateType<T extends NewsTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTag[P]>
      : GetScalarType<T[P], AggregateNewsTag[P]>
  }




  export type NewsTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithAggregationInput | NewsTagOrderByWithAggregationInput[]
    by: NewsTagScalarFieldEnum[] | NewsTagScalarFieldEnum
    having?: NewsTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTagCountAggregateInputType | true
    _avg?: NewsTagAvgAggregateInputType
    _sum?: NewsTagSumAggregateInputType
    _min?: NewsTagMinAggregateInputType
    _max?: NewsTagMaxAggregateInputType
  }

  export type NewsTagGroupByOutputType = {
    id: number
    nome: string
    _count: NewsTagCountAggregateOutputType | null
    _avg: NewsTagAvgAggregateOutputType | null
    _sum: NewsTagSumAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  type GetNewsTagGroupByPayload<T extends NewsTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
        }
      >
    >


  export type NewsTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    news?: boolean | NewsTag$newsArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type NewsTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTag$newsArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTag"
    objects: {
      news: Prisma.$NewsTagNewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["newsTag"]>
    composites: {}
  }

  type NewsTagGetPayload<S extends boolean | null | undefined | NewsTagDefaultArgs> = $Result.GetResult<Prisma.$NewsTagPayload, S>

  type NewsTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsTagCountAggregateInputType | true
    }

  export interface NewsTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTag'], meta: { name: 'NewsTag' } }
    /**
     * Find zero or one NewsTag that matches the filter.
     * @param {NewsTagFindUniqueArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTagFindUniqueArgs>(args: SelectSubset<T, NewsTagFindUniqueArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsTagFindUniqueOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTagFindFirstArgs>(args?: SelectSubset<T, NewsTagFindFirstArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTags
     * const newsTags = await prisma.newsTag.findMany()
     * 
     * // Get first 10 NewsTags
     * const newsTags = await prisma.newsTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsTagFindManyArgs>(args?: SelectSubset<T, NewsTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsTag.
     * @param {NewsTagCreateArgs} args - Arguments to create a NewsTag.
     * @example
     * // Create one NewsTag
     * const NewsTag = await prisma.newsTag.create({
     *   data: {
     *     // ... data to create a NewsTag
     *   }
     * })
     * 
     */
    create<T extends NewsTagCreateArgs>(args: SelectSubset<T, NewsTagCreateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsTags.
     * @param {NewsTagCreateManyArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTagCreateManyArgs>(args?: SelectSubset<T, NewsTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTags and returns the data saved in the database.
     * @param {NewsTagCreateManyAndReturnArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTags and only return the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsTag.
     * @param {NewsTagDeleteArgs} args - Arguments to delete one NewsTag.
     * @example
     * // Delete one NewsTag
     * const NewsTag = await prisma.newsTag.delete({
     *   where: {
     *     // ... filter to delete one NewsTag
     *   }
     * })
     * 
     */
    delete<T extends NewsTagDeleteArgs>(args: SelectSubset<T, NewsTagDeleteArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsTag.
     * @param {NewsTagUpdateArgs} args - Arguments to update one NewsTag.
     * @example
     * // Update one NewsTag
     * const newsTag = await prisma.newsTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTagUpdateArgs>(args: SelectSubset<T, NewsTagUpdateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsTags.
     * @param {NewsTagDeleteManyArgs} args - Arguments to filter NewsTags to delete.
     * @example
     * // Delete a few NewsTags
     * const { count } = await prisma.newsTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTagDeleteManyArgs>(args?: SelectSubset<T, NewsTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTagUpdateManyArgs>(args: SelectSubset<T, NewsTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsTag.
     * @param {NewsTagUpsertArgs} args - Arguments to update or create a NewsTag.
     * @example
     * // Update or create a NewsTag
     * const newsTag = await prisma.newsTag.upsert({
     *   create: {
     *     // ... data to create a NewsTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTag we want to update
     *   }
     * })
     */
    upsert<T extends NewsTagUpsertArgs>(args: SelectSubset<T, NewsTagUpsertArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagCountArgs} args - Arguments to filter NewsTags to count.
     * @example
     * // Count the number of NewsTags
     * const count = await prisma.newsTag.count({
     *   where: {
     *     // ... the filter for the NewsTags we want to count
     *   }
     * })
    **/
    count<T extends NewsTagCountArgs>(
      args?: Subset<T, NewsTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsTagAggregateArgs>(args: Subset<T, NewsTagAggregateArgs>): Prisma.PrismaPromise<GetNewsTagAggregateType<T>>

    /**
     * Group by NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagGroupByArgs} args - Group by arguments.
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
      T extends NewsTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTagGroupByArgs['orderBy'] }
        : { orderBy?: NewsTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTag model
   */
  readonly fields: NewsTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsTag$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsTag$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the NewsTag model
   */ 
  interface NewsTagFieldRefs {
    readonly id: FieldRef<"NewsTag", 'Int'>
    readonly nome: FieldRef<"NewsTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsTag findUnique
   */
  export type NewsTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findUniqueOrThrow
   */
  export type NewsTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findFirst
   */
  export type NewsTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findFirstOrThrow
   */
  export type NewsTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findMany
   */
  export type NewsTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTags to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag create
   */
  export type NewsTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTag.
     */
    data: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
  }

  /**
   * NewsTag createMany
   */
  export type NewsTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag createManyAndReturn
   */
  export type NewsTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag update
   */
  export type NewsTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTag.
     */
    data: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
    /**
     * Choose, which NewsTag to update.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag updateMany
   */
  export type NewsTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
  }

  /**
   * NewsTag upsert
   */
  export type NewsTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTag to update in case it exists.
     */
    where: NewsTagWhereUniqueInput
    /**
     * In case the NewsTag found by the `where` argument doesn't exist, create a new NewsTag with this data.
     */
    create: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
    /**
     * In case the NewsTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
  }

  /**
   * NewsTag delete
   */
  export type NewsTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter which NewsTag to delete.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag deleteMany
   */
  export type NewsTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTags to delete
     */
    where?: NewsTagWhereInput
  }

  /**
   * NewsTag.news
   */
  export type NewsTag$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    where?: NewsTagNewsWhereInput
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    cursor?: NewsTagNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsTagNewsScalarFieldEnum | NewsTagNewsScalarFieldEnum[]
  }

  /**
   * NewsTag without action
   */
  export type NewsTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
  }


  /**
   * Model NewsTagNews
   */

  export type AggregateNewsTagNews = {
    _count: NewsTagNewsCountAggregateOutputType | null
    _avg: NewsTagNewsAvgAggregateOutputType | null
    _sum: NewsTagNewsSumAggregateOutputType | null
    _min: NewsTagNewsMinAggregateOutputType | null
    _max: NewsTagNewsMaxAggregateOutputType | null
  }

  export type NewsTagNewsAvgAggregateOutputType = {
    newsId: number | null
    newsTagId: number | null
  }

  export type NewsTagNewsSumAggregateOutputType = {
    newsId: number | null
    newsTagId: number | null
  }

  export type NewsTagNewsMinAggregateOutputType = {
    newsId: number | null
    newsTagId: number | null
  }

  export type NewsTagNewsMaxAggregateOutputType = {
    newsId: number | null
    newsTagId: number | null
  }

  export type NewsTagNewsCountAggregateOutputType = {
    newsId: number
    newsTagId: number
    _all: number
  }


  export type NewsTagNewsAvgAggregateInputType = {
    newsId?: true
    newsTagId?: true
  }

  export type NewsTagNewsSumAggregateInputType = {
    newsId?: true
    newsTagId?: true
  }

  export type NewsTagNewsMinAggregateInputType = {
    newsId?: true
    newsTagId?: true
  }

  export type NewsTagNewsMaxAggregateInputType = {
    newsId?: true
    newsTagId?: true
  }

  export type NewsTagNewsCountAggregateInputType = {
    newsId?: true
    newsTagId?: true
    _all?: true
  }

  export type NewsTagNewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTagNews to aggregate.
     */
    where?: NewsTagNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTagNews to fetch.
     */
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTagNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTagNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTagNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTagNews
    **/
    _count?: true | NewsTagNewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsTagNewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsTagNewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTagNewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTagNewsMaxAggregateInputType
  }

  export type GetNewsTagNewsAggregateType<T extends NewsTagNewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTagNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTagNews[P]>
      : GetScalarType<T[P], AggregateNewsTagNews[P]>
  }




  export type NewsTagNewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagNewsWhereInput
    orderBy?: NewsTagNewsOrderByWithAggregationInput | NewsTagNewsOrderByWithAggregationInput[]
    by: NewsTagNewsScalarFieldEnum[] | NewsTagNewsScalarFieldEnum
    having?: NewsTagNewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTagNewsCountAggregateInputType | true
    _avg?: NewsTagNewsAvgAggregateInputType
    _sum?: NewsTagNewsSumAggregateInputType
    _min?: NewsTagNewsMinAggregateInputType
    _max?: NewsTagNewsMaxAggregateInputType
  }

  export type NewsTagNewsGroupByOutputType = {
    newsId: number
    newsTagId: number
    _count: NewsTagNewsCountAggregateOutputType | null
    _avg: NewsTagNewsAvgAggregateOutputType | null
    _sum: NewsTagNewsSumAggregateOutputType | null
    _min: NewsTagNewsMinAggregateOutputType | null
    _max: NewsTagNewsMaxAggregateOutputType | null
  }

  type GetNewsTagNewsGroupByPayload<T extends NewsTagNewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTagNewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTagNewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTagNewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTagNewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsTagNewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    newsTagId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsTag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTagNews"]>

  export type NewsTagNewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    newsTagId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsTag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTagNews"]>

  export type NewsTagNewsSelectScalar = {
    newsId?: boolean
    newsTagId?: boolean
  }

  export type NewsTagNewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsTag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }
  export type NewsTagNewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    newsTag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }

  export type $NewsTagNewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTagNews"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      newsTag: Prisma.$NewsTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      newsId: number
      newsTagId: number
    }, ExtArgs["result"]["newsTagNews"]>
    composites: {}
  }

  type NewsTagNewsGetPayload<S extends boolean | null | undefined | NewsTagNewsDefaultArgs> = $Result.GetResult<Prisma.$NewsTagNewsPayload, S>

  type NewsTagNewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsTagNewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsTagNewsCountAggregateInputType | true
    }

  export interface NewsTagNewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTagNews'], meta: { name: 'NewsTagNews' } }
    /**
     * Find zero or one NewsTagNews that matches the filter.
     * @param {NewsTagNewsFindUniqueArgs} args - Arguments to find a NewsTagNews
     * @example
     * // Get one NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTagNewsFindUniqueArgs>(args: SelectSubset<T, NewsTagNewsFindUniqueArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsTagNews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsTagNewsFindUniqueOrThrowArgs} args - Arguments to find a NewsTagNews
     * @example
     * // Get one NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTagNewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTagNewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsTagNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsFindFirstArgs} args - Arguments to find a NewsTagNews
     * @example
     * // Get one NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTagNewsFindFirstArgs>(args?: SelectSubset<T, NewsTagNewsFindFirstArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsTagNews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsFindFirstOrThrowArgs} args - Arguments to find a NewsTagNews
     * @example
     * // Get one NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTagNewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTagNewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsTagNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findMany()
     * 
     * // Get first 10 NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.findMany({ take: 10 })
     * 
     * // Only select the `newsId`
     * const newsTagNewsWithNewsIdOnly = await prisma.newsTagNews.findMany({ select: { newsId: true } })
     * 
     */
    findMany<T extends NewsTagNewsFindManyArgs>(args?: SelectSubset<T, NewsTagNewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsTagNews.
     * @param {NewsTagNewsCreateArgs} args - Arguments to create a NewsTagNews.
     * @example
     * // Create one NewsTagNews
     * const NewsTagNews = await prisma.newsTagNews.create({
     *   data: {
     *     // ... data to create a NewsTagNews
     *   }
     * })
     * 
     */
    create<T extends NewsTagNewsCreateArgs>(args: SelectSubset<T, NewsTagNewsCreateArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsTagNews.
     * @param {NewsTagNewsCreateManyArgs} args - Arguments to create many NewsTagNews.
     * @example
     * // Create many NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTagNewsCreateManyArgs>(args?: SelectSubset<T, NewsTagNewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTagNews and returns the data saved in the database.
     * @param {NewsTagNewsCreateManyAndReturnArgs} args - Arguments to create many NewsTagNews.
     * @example
     * // Create many NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTagNews and only return the `newsId`
     * const newsTagNewsWithNewsIdOnly = await prisma.newsTagNews.createManyAndReturn({ 
     *   select: { newsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTagNewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTagNewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsTagNews.
     * @param {NewsTagNewsDeleteArgs} args - Arguments to delete one NewsTagNews.
     * @example
     * // Delete one NewsTagNews
     * const NewsTagNews = await prisma.newsTagNews.delete({
     *   where: {
     *     // ... filter to delete one NewsTagNews
     *   }
     * })
     * 
     */
    delete<T extends NewsTagNewsDeleteArgs>(args: SelectSubset<T, NewsTagNewsDeleteArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsTagNews.
     * @param {NewsTagNewsUpdateArgs} args - Arguments to update one NewsTagNews.
     * @example
     * // Update one NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTagNewsUpdateArgs>(args: SelectSubset<T, NewsTagNewsUpdateArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsTagNews.
     * @param {NewsTagNewsDeleteManyArgs} args - Arguments to filter NewsTagNews to delete.
     * @example
     * // Delete a few NewsTagNews
     * const { count } = await prisma.newsTagNews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTagNewsDeleteManyArgs>(args?: SelectSubset<T, NewsTagNewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTagNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTagNewsUpdateManyArgs>(args: SelectSubset<T, NewsTagNewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsTagNews.
     * @param {NewsTagNewsUpsertArgs} args - Arguments to update or create a NewsTagNews.
     * @example
     * // Update or create a NewsTagNews
     * const newsTagNews = await prisma.newsTagNews.upsert({
     *   create: {
     *     // ... data to create a NewsTagNews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTagNews we want to update
     *   }
     * })
     */
    upsert<T extends NewsTagNewsUpsertArgs>(args: SelectSubset<T, NewsTagNewsUpsertArgs<ExtArgs>>): Prisma__NewsTagNewsClient<$Result.GetResult<Prisma.$NewsTagNewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsTagNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsCountArgs} args - Arguments to filter NewsTagNews to count.
     * @example
     * // Count the number of NewsTagNews
     * const count = await prisma.newsTagNews.count({
     *   where: {
     *     // ... the filter for the NewsTagNews we want to count
     *   }
     * })
    **/
    count<T extends NewsTagNewsCountArgs>(
      args?: Subset<T, NewsTagNewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTagNewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTagNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsTagNewsAggregateArgs>(args: Subset<T, NewsTagNewsAggregateArgs>): Prisma.PrismaPromise<GetNewsTagNewsAggregateType<T>>

    /**
     * Group by NewsTagNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagNewsGroupByArgs} args - Group by arguments.
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
      T extends NewsTagNewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTagNewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsTagNewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsTagNewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTagNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTagNews model
   */
  readonly fields: NewsTagNewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTagNews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTagNewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    newsTag<T extends NewsTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsTagDefaultArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the NewsTagNews model
   */ 
  interface NewsTagNewsFieldRefs {
    readonly newsId: FieldRef<"NewsTagNews", 'Int'>
    readonly newsTagId: FieldRef<"NewsTagNews", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NewsTagNews findUnique
   */
  export type NewsTagNewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsTagNews to fetch.
     */
    where: NewsTagNewsWhereUniqueInput
  }

  /**
   * NewsTagNews findUniqueOrThrow
   */
  export type NewsTagNewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsTagNews to fetch.
     */
    where: NewsTagNewsWhereUniqueInput
  }

  /**
   * NewsTagNews findFirst
   */
  export type NewsTagNewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsTagNews to fetch.
     */
    where?: NewsTagNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTagNews to fetch.
     */
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTagNews.
     */
    cursor?: NewsTagNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTagNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTagNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTagNews.
     */
    distinct?: NewsTagNewsScalarFieldEnum | NewsTagNewsScalarFieldEnum[]
  }

  /**
   * NewsTagNews findFirstOrThrow
   */
  export type NewsTagNewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsTagNews to fetch.
     */
    where?: NewsTagNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTagNews to fetch.
     */
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTagNews.
     */
    cursor?: NewsTagNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTagNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTagNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTagNews.
     */
    distinct?: NewsTagNewsScalarFieldEnum | NewsTagNewsScalarFieldEnum[]
  }

  /**
   * NewsTagNews findMany
   */
  export type NewsTagNewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter, which NewsTagNews to fetch.
     */
    where?: NewsTagNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTagNews to fetch.
     */
    orderBy?: NewsTagNewsOrderByWithRelationInput | NewsTagNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTagNews.
     */
    cursor?: NewsTagNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTagNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTagNews.
     */
    skip?: number
    distinct?: NewsTagNewsScalarFieldEnum | NewsTagNewsScalarFieldEnum[]
  }

  /**
   * NewsTagNews create
   */
  export type NewsTagNewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTagNews.
     */
    data: XOR<NewsTagNewsCreateInput, NewsTagNewsUncheckedCreateInput>
  }

  /**
   * NewsTagNews createMany
   */
  export type NewsTagNewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTagNews.
     */
    data: NewsTagNewsCreateManyInput | NewsTagNewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTagNews createManyAndReturn
   */
  export type NewsTagNewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsTagNews.
     */
    data: NewsTagNewsCreateManyInput | NewsTagNewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsTagNews update
   */
  export type NewsTagNewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTagNews.
     */
    data: XOR<NewsTagNewsUpdateInput, NewsTagNewsUncheckedUpdateInput>
    /**
     * Choose, which NewsTagNews to update.
     */
    where: NewsTagNewsWhereUniqueInput
  }

  /**
   * NewsTagNews updateMany
   */
  export type NewsTagNewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTagNews.
     */
    data: XOR<NewsTagNewsUpdateManyMutationInput, NewsTagNewsUncheckedUpdateManyInput>
    /**
     * Filter which NewsTagNews to update
     */
    where?: NewsTagNewsWhereInput
  }

  /**
   * NewsTagNews upsert
   */
  export type NewsTagNewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTagNews to update in case it exists.
     */
    where: NewsTagNewsWhereUniqueInput
    /**
     * In case the NewsTagNews found by the `where` argument doesn't exist, create a new NewsTagNews with this data.
     */
    create: XOR<NewsTagNewsCreateInput, NewsTagNewsUncheckedCreateInput>
    /**
     * In case the NewsTagNews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTagNewsUpdateInput, NewsTagNewsUncheckedUpdateInput>
  }

  /**
   * NewsTagNews delete
   */
  export type NewsTagNewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
    /**
     * Filter which NewsTagNews to delete.
     */
    where: NewsTagNewsWhereUniqueInput
  }

  /**
   * NewsTagNews deleteMany
   */
  export type NewsTagNewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTagNews to delete
     */
    where?: NewsTagNewsWhereInput
  }

  /**
   * NewsTagNews without action
   */
  export type NewsTagNewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagNews
     */
    select?: NewsTagNewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagNewsInclude<ExtArgs> | null
  }


  /**
   * Model Investor
   */

  export type AggregateInvestor = {
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  export type InvestorAvgAggregateOutputType = {
    id: number | null
  }

  export type InvestorSumAggregateOutputType = {
    id: number | null
  }

  export type InvestorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    empresa: string | null
    email: string | null
    telefone: string | null
    pais: string | null
    areaInteresse: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    empresa: string | null
    email: string | null
    telefone: string | null
    pais: string | null
    areaInteresse: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorCountAggregateOutputType = {
    id: number
    nome: number
    empresa: number
    email: number
    telefone: number
    pais: number
    areaInteresse: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestorAvgAggregateInputType = {
    id?: true
  }

  export type InvestorSumAggregateInputType = {
    id?: true
  }

  export type InvestorMinAggregateInputType = {
    id?: true
    nome?: true
    empresa?: true
    email?: true
    telefone?: true
    pais?: true
    areaInteresse?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorMaxAggregateInputType = {
    id?: true
    nome?: true
    empresa?: true
    email?: true
    telefone?: true
    pais?: true
    areaInteresse?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorCountAggregateInputType = {
    id?: true
    nome?: true
    empresa?: true
    email?: true
    telefone?: true
    pais?: true
    areaInteresse?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investor to aggregate.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investors
    **/
    _count?: true | InvestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorMaxAggregateInputType
  }

  export type GetInvestorAggregateType<T extends InvestorAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestor[P]>
      : GetScalarType<T[P], AggregateInvestor[P]>
  }




  export type InvestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestorWhereInput
    orderBy?: InvestorOrderByWithAggregationInput | InvestorOrderByWithAggregationInput[]
    by: InvestorScalarFieldEnum[] | InvestorScalarFieldEnum
    having?: InvestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorCountAggregateInputType | true
    _avg?: InvestorAvgAggregateInputType
    _sum?: InvestorSumAggregateInputType
    _min?: InvestorMinAggregateInputType
    _max?: InvestorMaxAggregateInputType
  }

  export type InvestorGroupByOutputType = {
    id: number
    nome: string
    empresa: string | null
    email: string
    telefone: string | null
    pais: string | null
    areaInteresse: string | null
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  type GetInvestorGroupByPayload<T extends InvestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorGroupByOutputType[P]>
        }
      >
    >


  export type InvestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresa?: boolean
    email?: boolean
    telefone?: boolean
    pais?: boolean
    areaInteresse?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresa?: boolean
    email?: boolean
    telefone?: boolean
    pais?: boolean
    areaInteresse?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectScalar = {
    id?: boolean
    nome?: boolean
    empresa?: boolean
    email?: boolean
    telefone?: boolean
    pais?: boolean
    areaInteresse?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InvestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      empresa: string | null
      email: string
      telefone: string | null
      pais: string | null
      areaInteresse: string | null
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investor"]>
    composites: {}
  }

  type InvestorGetPayload<S extends boolean | null | undefined | InvestorDefaultArgs> = $Result.GetResult<Prisma.$InvestorPayload, S>

  type InvestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvestorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvestorCountAggregateInputType | true
    }

  export interface InvestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investor'], meta: { name: 'Investor' } }
    /**
     * Find zero or one Investor that matches the filter.
     * @param {InvestorFindUniqueArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestorFindUniqueArgs>(args: SelectSubset<T, InvestorFindUniqueArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Investor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvestorFindUniqueOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestorFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Investor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestorFindFirstArgs>(args?: SelectSubset<T, InvestorFindFirstArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Investor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestorFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investors
     * const investors = await prisma.investor.findMany()
     * 
     * // Get first 10 Investors
     * const investors = await prisma.investor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorWithIdOnly = await prisma.investor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestorFindManyArgs>(args?: SelectSubset<T, InvestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Investor.
     * @param {InvestorCreateArgs} args - Arguments to create a Investor.
     * @example
     * // Create one Investor
     * const Investor = await prisma.investor.create({
     *   data: {
     *     // ... data to create a Investor
     *   }
     * })
     * 
     */
    create<T extends InvestorCreateArgs>(args: SelectSubset<T, InvestorCreateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Investors.
     * @param {InvestorCreateManyArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestorCreateManyArgs>(args?: SelectSubset<T, InvestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investors and returns the data saved in the database.
     * @param {InvestorCreateManyAndReturnArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investors and only return the `id`
     * const investorWithIdOnly = await prisma.investor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestorCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Investor.
     * @param {InvestorDeleteArgs} args - Arguments to delete one Investor.
     * @example
     * // Delete one Investor
     * const Investor = await prisma.investor.delete({
     *   where: {
     *     // ... filter to delete one Investor
     *   }
     * })
     * 
     */
    delete<T extends InvestorDeleteArgs>(args: SelectSubset<T, InvestorDeleteArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Investor.
     * @param {InvestorUpdateArgs} args - Arguments to update one Investor.
     * @example
     * // Update one Investor
     * const investor = await prisma.investor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestorUpdateArgs>(args: SelectSubset<T, InvestorUpdateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Investors.
     * @param {InvestorDeleteManyArgs} args - Arguments to filter Investors to delete.
     * @example
     * // Delete a few Investors
     * const { count } = await prisma.investor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestorDeleteManyArgs>(args?: SelectSubset<T, InvestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investors
     * const investor = await prisma.investor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestorUpdateManyArgs>(args: SelectSubset<T, InvestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investor.
     * @param {InvestorUpsertArgs} args - Arguments to update or create a Investor.
     * @example
     * // Update or create a Investor
     * const investor = await prisma.investor.upsert({
     *   create: {
     *     // ... data to create a Investor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investor we want to update
     *   }
     * })
     */
    upsert<T extends InvestorUpsertArgs>(args: SelectSubset<T, InvestorUpsertArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorCountArgs} args - Arguments to filter Investors to count.
     * @example
     * // Count the number of Investors
     * const count = await prisma.investor.count({
     *   where: {
     *     // ... the filter for the Investors we want to count
     *   }
     * })
    **/
    count<T extends InvestorCountArgs>(
      args?: Subset<T, InvestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestorAggregateArgs>(args: Subset<T, InvestorAggregateArgs>): Prisma.PrismaPromise<GetInvestorAggregateType<T>>

    /**
     * Group by Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorGroupByArgs} args - Group by arguments.
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
      T extends InvestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestorGroupByArgs['orderBy'] }
        : { orderBy?: InvestorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investor model
   */
  readonly fields: InvestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Investor model
   */ 
  interface InvestorFieldRefs {
    readonly id: FieldRef<"Investor", 'Int'>
    readonly nome: FieldRef<"Investor", 'String'>
    readonly empresa: FieldRef<"Investor", 'String'>
    readonly email: FieldRef<"Investor", 'String'>
    readonly telefone: FieldRef<"Investor", 'String'>
    readonly pais: FieldRef<"Investor", 'String'>
    readonly areaInteresse: FieldRef<"Investor", 'String'>
    readonly observacoes: FieldRef<"Investor", 'String'>
    readonly createdAt: FieldRef<"Investor", 'DateTime'>
    readonly updatedAt: FieldRef<"Investor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investor findUnique
   */
  export type InvestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findUniqueOrThrow
   */
  export type InvestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findFirst
   */
  export type InvestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findFirstOrThrow
   */
  export type InvestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findMany
   */
  export type InvestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor create
   */
  export type InvestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * The data needed to create a Investor.
     */
    data: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
  }

  /**
   * Investor createMany
   */
  export type InvestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investor createManyAndReturn
   */
  export type InvestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investor update
   */
  export type InvestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * The data needed to update a Investor.
     */
    data: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
    /**
     * Choose, which Investor to update.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor updateMany
   */
  export type InvestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorUpdateManyMutationInput, InvestorUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorWhereInput
  }

  /**
   * Investor upsert
   */
  export type InvestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * The filter to search for the Investor to update in case it exists.
     */
    where: InvestorWhereUniqueInput
    /**
     * In case the Investor found by the `where` argument doesn't exist, create a new Investor with this data.
     */
    create: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
    /**
     * In case the Investor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
  }

  /**
   * Investor delete
   */
  export type InvestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Filter which Investor to delete.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor deleteMany
   */
  export type InvestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investors to delete
     */
    where?: InvestorWhereInput
  }

  /**
   * Investor without action
   */
  export type InvestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerAvgAggregateOutputType = {
    id: number | null
  }

  export type PartnerSumAggregateOutputType = {
    id: number | null
  }

  export type PartnerMinAggregateOutputType = {
    id: number | null
    nome: string | null
    logo: string | null
    website: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    logo: string | null
    website: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    nome: number
    logo: number
    website: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerAvgAggregateInputType = {
    id?: true
  }

  export type PartnerSumAggregateInputType = {
    id?: true
  }

  export type PartnerMinAggregateInputType = {
    id?: true
    nome?: true
    logo?: true
    website?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    nome?: true
    logo?: true
    website?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    nome?: true
    logo?: true
    website?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _avg?: PartnerAvgAggregateInputType
    _sum?: PartnerSumAggregateInputType
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: number
    nome: string
    logo: string | null
    website: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logo?: boolean
    website?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logo?: boolean
    website?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    nome?: boolean
    logo?: boolean
    website?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      logo: string | null
      website: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
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
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Partner model
   */ 
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'Int'>
    readonly nome: FieldRef<"Partner", 'String'>
    readonly logo: FieldRef<"Partner", 'String'>
    readonly website: FieldRef<"Partner", 'String'>
    readonly status: FieldRef<"Partner", 'Boolean'>
    readonly createdAt: FieldRef<"Partner", 'DateTime'>
    readonly updatedAt: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    assunto: string | null
    mensagem: string | null
    lido: boolean | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    assunto: string | null
    mensagem: string | null
    lido: boolean | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    assunto: number
    mensagem: number
    lido: number
    createdAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    assunto?: true
    mensagem?: true
    lido?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    assunto?: true
    mensagem?: true
    lido?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    assunto?: true
    mensagem?: true
    lido?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string | null
    assunto: string
    mensagem: string
    lido: boolean
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    assunto?: boolean
    mensagem?: boolean
    lido?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    assunto?: boolean
    mensagem?: boolean
    lido?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    assunto?: boolean
    mensagem?: boolean
    lido?: boolean
    createdAt?: boolean
  }


  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string | null
      assunto: string
      mensagem: string
      lido: boolean
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly nome: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly telefone: FieldRef<"Contact", 'String'>
    readonly assunto: FieldRef<"Contact", 'String'>
    readonly mensagem: FieldRef<"Contact", 'String'>
    readonly lido: FieldRef<"Contact", 'Boolean'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    subtitulo: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    subtitulo: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    titulo: number
    subtitulo: number
    imagem: number
    link: number
    ordem: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    titulo: string | null
    subtitulo: string | null
    imagem: string
    link: string | null
    ordem: number
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string | null
      subtitulo: string | null
      imagem: string
      link: string | null
      ordem: number
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Banner model
   */ 
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'Int'>
    readonly titulo: FieldRef<"Banner", 'String'>
    readonly subtitulo: FieldRef<"Banner", 'String'>
    readonly imagem: FieldRef<"Banner", 'String'>
    readonly link: FieldRef<"Banner", 'String'>
    readonly ordem: FieldRef<"Banner", 'Int'>
    readonly ativo: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
  }


  /**
   * Model Highlight
   */

  export type AggregateHighlight = {
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  export type HighlightAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type HighlightSumAggregateOutputType = {
    id: number | null
    ordem: number | null
  }

  export type HighlightMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HighlightMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HighlightCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    imagem: number
    link: number
    ordem: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HighlightAvgAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type HighlightSumAggregateInputType = {
    id?: true
    ordem?: true
  }

  export type HighlightMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HighlightMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HighlightCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlight to aggregate.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightMaxAggregateInputType
  }

  export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlight[P]>
      : GetScalarType<T[P], AggregateHighlight[P]>
  }




  export type HighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithAggregationInput | HighlightOrderByWithAggregationInput[]
    by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum
    having?: HighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightCountAggregateInputType | true
    _avg?: HighlightAvgAggregateInputType
    _sum?: HighlightSumAggregateInputType
    _min?: HighlightMinAggregateInputType
    _max?: HighlightMaxAggregateInputType
  }

  export type HighlightGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    imagem: string | null
    link: string | null
    ordem: number
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $HighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlight"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      imagem: string | null
      link: string | null
      ordem: number
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["highlight"]>
    composites: {}
  }

  type HighlightGetPayload<S extends boolean | null | undefined | HighlightDefaultArgs> = $Result.GetResult<Prisma.$HighlightPayload, S>

  type HighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HighlightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HighlightCountAggregateInputType | true
    }

  export interface HighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlight'], meta: { name: 'Highlight' } }
    /**
     * Find zero or one Highlight that matches the filter.
     * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightFindUniqueArgs>(args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Highlight that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Highlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightFindFirstArgs>(args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Highlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlight.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightFindManyArgs>(args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Highlight.
     * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
     * @example
     * // Create one Highlight
     * const Highlight = await prisma.highlight.create({
     *   data: {
     *     // ... data to create a Highlight
     *   }
     * })
     * 
     */
    create<T extends HighlightCreateArgs>(args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Highlights.
     * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightCreateManyArgs>(args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {HighlightCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Highlight.
     * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
     * @example
     * // Delete one Highlight
     * const Highlight = await prisma.highlight.delete({
     *   where: {
     *     // ... filter to delete one Highlight
     *   }
     * })
     * 
     */
    delete<T extends HighlightDeleteArgs>(args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Highlight.
     * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
     * @example
     * // Update one Highlight
     * const highlight = await prisma.highlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightUpdateArgs>(args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightDeleteManyArgs>(args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightUpdateManyArgs>(args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Highlight.
     * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
     * @example
     * // Update or create a Highlight
     * const highlight = await prisma.highlight.upsert({
     *   create: {
     *     // ... data to create a Highlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlight we want to update
     *   }
     * })
     */
    upsert<T extends HighlightUpsertArgs>(args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlight.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightCountArgs>(
      args?: Subset<T, HighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightAggregateArgs>(args: Subset<T, HighlightAggregateArgs>): Prisma.PrismaPromise<GetHighlightAggregateType<T>>

    /**
     * Group by Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightGroupByArgs} args - Group by arguments.
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
      T extends HighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightGroupByArgs['orderBy'] }
        : { orderBy?: HighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlight model
   */
  readonly fields: HighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Highlight model
   */ 
  interface HighlightFieldRefs {
    readonly id: FieldRef<"Highlight", 'Int'>
    readonly titulo: FieldRef<"Highlight", 'String'>
    readonly descricao: FieldRef<"Highlight", 'String'>
    readonly imagem: FieldRef<"Highlight", 'String'>
    readonly link: FieldRef<"Highlight", 'String'>
    readonly ordem: FieldRef<"Highlight", 'Int'>
    readonly ativo: FieldRef<"Highlight", 'Boolean'>
    readonly createdAt: FieldRef<"Highlight", 'DateTime'>
    readonly updatedAt: FieldRef<"Highlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Highlight findUnique
   */
  export type HighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findUniqueOrThrow
   */
  export type HighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findFirst
   */
  export type HighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findFirstOrThrow
   */
  export type HighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findMany
   */
  export type HighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight create
   */
  export type HighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * The data needed to create a Highlight.
     */
    data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
  }

  /**
   * Highlight createMany
   */
  export type HighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Highlight createManyAndReturn
   */
  export type HighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Highlight update
   */
  export type HighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * The data needed to update a Highlight.
     */
    data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
    /**
     * Choose, which Highlight to update.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight updateMany
   */
  export type HighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
  }

  /**
   * Highlight upsert
   */
  export type HighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * The filter to search for the Highlight to update in case it exists.
     */
    where: HighlightWhereUniqueInput
    /**
     * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
     */
    create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
    /**
     * In case the Highlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
  }

  /**
   * Highlight delete
   */
  export type HighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Filter which Highlight to delete.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight deleteMany
   */
  export type HighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightWhereInput
  }

  /**
   * Highlight without action
   */
  export type HighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    missao: 'missao',
    visao: 'visao',
    logo: 'logo',
    capa: 'capa',
    website: 'website',
    email: 'email',
    telefone: 'telefone',
    localizacao: 'localizacao',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    categoria: 'categoria',
    investimento: 'investimento',
    localizacao: 'localizacao',
    status: 'status',
    imagens: 'imagens',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cargo: 'cargo',
    fotografia: 'fotografia',
    linkedin: 'linkedin',
    biografia: 'biografia',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    slug: 'slug',
    resumo: 'resumo',
    conteudo: 'conteudo',
    blocos: 'blocos',
    imagem: 'imagem',
    status: 'status',
    agendadoPara: 'agendadoPara',
    dataPublicacao: 'dataPublicacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const NewsCategoryScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type NewsCategoryScalarFieldEnum = (typeof NewsCategoryScalarFieldEnum)[keyof typeof NewsCategoryScalarFieldEnum]


  export const NewsCategoryNewsScalarFieldEnum: {
    newsId: 'newsId',
    newsCategoryId: 'newsCategoryId'
  };

  export type NewsCategoryNewsScalarFieldEnum = (typeof NewsCategoryNewsScalarFieldEnum)[keyof typeof NewsCategoryNewsScalarFieldEnum]


  export const NewsTagScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type NewsTagScalarFieldEnum = (typeof NewsTagScalarFieldEnum)[keyof typeof NewsTagScalarFieldEnum]


  export const NewsTagNewsScalarFieldEnum: {
    newsId: 'newsId',
    newsTagId: 'newsTagId'
  };

  export type NewsTagNewsScalarFieldEnum = (typeof NewsTagNewsScalarFieldEnum)[keyof typeof NewsTagNewsScalarFieldEnum]


  export const InvestorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresa: 'empresa',
    email: 'email',
    telefone: 'telefone',
    pais: 'pais',
    areaInteresse: 'areaInteresse',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestorScalarFieldEnum = (typeof InvestorScalarFieldEnum)[keyof typeof InvestorScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    logo: 'logo',
    website: 'website',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    assunto: 'assunto',
    mensagem: 'mensagem',
    lido: 'lido',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    subtitulo: 'subtitulo',
    imagem: 'imagem',
    link: 'link',
    ordem: 'ordem',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const HighlightScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    imagem: 'imagem',
    link: 'link',
    ordem: 'ordem',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HighlightScalarFieldEnum = (typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    nome?: StringFilter<"Company"> | string
    descricao?: StringNullableFilter<"Company"> | string | null
    missao?: StringNullableFilter<"Company"> | string | null
    visao?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    capa?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    telefone?: StringNullableFilter<"Company"> | string | null
    localizacao?: StringNullableFilter<"Company"> | string | null
    status?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    projects?: ProjectListRelationFilter
    teamMembers?: TeamMemberListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    missao?: SortOrderInput | SortOrder
    visao?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    capa?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    teamMembers?: TeamMemberOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    nome?: StringFilter<"Company"> | string
    descricao?: StringNullableFilter<"Company"> | string | null
    missao?: StringNullableFilter<"Company"> | string | null
    visao?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    capa?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    telefone?: StringNullableFilter<"Company"> | string | null
    localizacao?: StringNullableFilter<"Company"> | string | null
    status?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    projects?: ProjectListRelationFilter
    teamMembers?: TeamMemberListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    missao?: SortOrderInput | SortOrder
    visao?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    capa?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    nome?: StringWithAggregatesFilter<"Company"> | string
    descricao?: StringNullableWithAggregatesFilter<"Company"> | string | null
    missao?: StringNullableWithAggregatesFilter<"Company"> | string | null
    visao?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    capa?: StringNullableWithAggregatesFilter<"Company"> | string | null
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    localizacao?: StringNullableWithAggregatesFilter<"Company"> | string | null
    status?: BoolWithAggregatesFilter<"Company"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    nome?: StringFilter<"Project"> | string
    descricao?: StringNullableFilter<"Project"> | string | null
    categoria?: StringNullableFilter<"Project"> | string | null
    investimento?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    localizacao?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    imagens?: StringNullableFilter<"Project"> | string | null
    companyId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    investimento?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    status?: SortOrder
    imagens?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    nome?: StringFilter<"Project"> | string
    descricao?: StringNullableFilter<"Project"> | string | null
    categoria?: StringNullableFilter<"Project"> | string | null
    investimento?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    localizacao?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    imagens?: StringNullableFilter<"Project"> | string | null
    companyId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    investimento?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    status?: SortOrder
    imagens?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    nome?: StringWithAggregatesFilter<"Project"> | string
    descricao?: StringNullableWithAggregatesFilter<"Project"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Project"> | string | null
    investimento?: DecimalNullableWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    localizacao?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: BoolWithAggregatesFilter<"Project"> | boolean
    imagens?: StringNullableWithAggregatesFilter<"Project"> | string | null
    companyId?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    nome?: StringFilter<"TeamMember"> | string
    cargo?: StringNullableFilter<"TeamMember"> | string | null
    fotografia?: StringNullableFilter<"TeamMember"> | string | null
    linkedin?: StringNullableFilter<"TeamMember"> | string | null
    biografia?: StringNullableFilter<"TeamMember"> | string | null
    companyId?: IntFilter<"TeamMember"> | number
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrderInput | SortOrder
    fotografia?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    nome?: StringFilter<"TeamMember"> | string
    cargo?: StringNullableFilter<"TeamMember"> | string | null
    fotografia?: StringNullableFilter<"TeamMember"> | string | null
    linkedin?: StringNullableFilter<"TeamMember"> | string | null
    biografia?: StringNullableFilter<"TeamMember"> | string | null
    companyId?: IntFilter<"TeamMember"> | number
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrderInput | SortOrder
    fotografia?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    nome?: StringWithAggregatesFilter<"TeamMember"> | string
    cargo?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    fotografia?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    biografia?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    companyId?: IntWithAggregatesFilter<"TeamMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: IntFilter<"News"> | number
    titulo?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    resumo?: StringNullableFilter<"News"> | string | null
    conteudo?: StringNullableFilter<"News"> | string | null
    blocos?: StringNullableFilter<"News"> | string | null
    imagem?: StringNullableFilter<"News"> | string | null
    status?: StringFilter<"News"> | string
    agendadoPara?: DateTimeNullableFilter<"News"> | Date | string | null
    dataPublicacao?: DateTimeFilter<"News"> | Date | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    newsCategories?: NewsCategoryNewsListRelationFilter
    newsTags?: NewsTagNewsListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    resumo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    blocos?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    status?: SortOrder
    agendadoPara?: SortOrderInput | SortOrder
    dataPublicacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    newsCategories?: NewsCategoryNewsOrderByRelationAggregateInput
    newsTags?: NewsTagNewsOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    titulo?: StringFilter<"News"> | string
    resumo?: StringNullableFilter<"News"> | string | null
    conteudo?: StringNullableFilter<"News"> | string | null
    blocos?: StringNullableFilter<"News"> | string | null
    imagem?: StringNullableFilter<"News"> | string | null
    status?: StringFilter<"News"> | string
    agendadoPara?: DateTimeNullableFilter<"News"> | Date | string | null
    dataPublicacao?: DateTimeFilter<"News"> | Date | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    newsCategories?: NewsCategoryNewsListRelationFilter
    newsTags?: NewsTagNewsListRelationFilter
  }, "id" | "slug">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    resumo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    blocos?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    status?: SortOrder
    agendadoPara?: SortOrderInput | SortOrder
    dataPublicacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"News"> | number
    titulo?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    resumo?: StringNullableWithAggregatesFilter<"News"> | string | null
    conteudo?: StringNullableWithAggregatesFilter<"News"> | string | null
    blocos?: StringNullableWithAggregatesFilter<"News"> | string | null
    imagem?: StringNullableWithAggregatesFilter<"News"> | string | null
    status?: StringWithAggregatesFilter<"News"> | string
    agendadoPara?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    dataPublicacao?: DateTimeWithAggregatesFilter<"News"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type NewsCategoryWhereInput = {
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    id?: IntFilter<"NewsCategory"> | number
    nome?: StringFilter<"NewsCategory"> | string
    news?: NewsCategoryNewsListRelationFilter
  }

  export type NewsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    news?: NewsCategoryNewsOrderByRelationAggregateInput
  }

  export type NewsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    news?: NewsCategoryNewsListRelationFilter
  }, "id" | "nome">

  export type NewsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: NewsCategoryCountOrderByAggregateInput
    _avg?: NewsCategoryAvgOrderByAggregateInput
    _max?: NewsCategoryMaxOrderByAggregateInput
    _min?: NewsCategoryMinOrderByAggregateInput
    _sum?: NewsCategorySumOrderByAggregateInput
  }

  export type NewsCategoryScalarWhereWithAggregatesInput = {
    AND?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    OR?: NewsCategoryScalarWhereWithAggregatesInput[]
    NOT?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsCategory"> | number
    nome?: StringWithAggregatesFilter<"NewsCategory"> | string
  }

  export type NewsCategoryNewsWhereInput = {
    AND?: NewsCategoryNewsWhereInput | NewsCategoryNewsWhereInput[]
    OR?: NewsCategoryNewsWhereInput[]
    NOT?: NewsCategoryNewsWhereInput | NewsCategoryNewsWhereInput[]
    newsId?: IntFilter<"NewsCategoryNews"> | number
    newsCategoryId?: IntFilter<"NewsCategoryNews"> | number
    news?: XOR<NewsRelationFilter, NewsWhereInput>
    newsCategory?: XOR<NewsCategoryRelationFilter, NewsCategoryWhereInput>
  }

  export type NewsCategoryNewsOrderByWithRelationInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
    news?: NewsOrderByWithRelationInput
    newsCategory?: NewsCategoryOrderByWithRelationInput
  }

  export type NewsCategoryNewsWhereUniqueInput = Prisma.AtLeast<{
    newsId_newsCategoryId?: NewsCategoryNewsNewsIdNewsCategoryIdCompoundUniqueInput
    AND?: NewsCategoryNewsWhereInput | NewsCategoryNewsWhereInput[]
    OR?: NewsCategoryNewsWhereInput[]
    NOT?: NewsCategoryNewsWhereInput | NewsCategoryNewsWhereInput[]
    newsId?: IntFilter<"NewsCategoryNews"> | number
    newsCategoryId?: IntFilter<"NewsCategoryNews"> | number
    news?: XOR<NewsRelationFilter, NewsWhereInput>
    newsCategory?: XOR<NewsCategoryRelationFilter, NewsCategoryWhereInput>
  }, "newsId_newsCategoryId">

  export type NewsCategoryNewsOrderByWithAggregationInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
    _count?: NewsCategoryNewsCountOrderByAggregateInput
    _avg?: NewsCategoryNewsAvgOrderByAggregateInput
    _max?: NewsCategoryNewsMaxOrderByAggregateInput
    _min?: NewsCategoryNewsMinOrderByAggregateInput
    _sum?: NewsCategoryNewsSumOrderByAggregateInput
  }

  export type NewsCategoryNewsScalarWhereWithAggregatesInput = {
    AND?: NewsCategoryNewsScalarWhereWithAggregatesInput | NewsCategoryNewsScalarWhereWithAggregatesInput[]
    OR?: NewsCategoryNewsScalarWhereWithAggregatesInput[]
    NOT?: NewsCategoryNewsScalarWhereWithAggregatesInput | NewsCategoryNewsScalarWhereWithAggregatesInput[]
    newsId?: IntWithAggregatesFilter<"NewsCategoryNews"> | number
    newsCategoryId?: IntWithAggregatesFilter<"NewsCategoryNews"> | number
  }

  export type NewsTagWhereInput = {
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    id?: IntFilter<"NewsTag"> | number
    nome?: StringFilter<"NewsTag"> | string
    news?: NewsTagNewsListRelationFilter
  }

  export type NewsTagOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    news?: NewsTagNewsOrderByRelationAggregateInput
  }

  export type NewsTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    news?: NewsTagNewsListRelationFilter
  }, "id" | "nome">

  export type NewsTagOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: NewsTagCountOrderByAggregateInput
    _avg?: NewsTagAvgOrderByAggregateInput
    _max?: NewsTagMaxOrderByAggregateInput
    _min?: NewsTagMinOrderByAggregateInput
    _sum?: NewsTagSumOrderByAggregateInput
  }

  export type NewsTagScalarWhereWithAggregatesInput = {
    AND?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    OR?: NewsTagScalarWhereWithAggregatesInput[]
    NOT?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsTag"> | number
    nome?: StringWithAggregatesFilter<"NewsTag"> | string
  }

  export type NewsTagNewsWhereInput = {
    AND?: NewsTagNewsWhereInput | NewsTagNewsWhereInput[]
    OR?: NewsTagNewsWhereInput[]
    NOT?: NewsTagNewsWhereInput | NewsTagNewsWhereInput[]
    newsId?: IntFilter<"NewsTagNews"> | number
    newsTagId?: IntFilter<"NewsTagNews"> | number
    news?: XOR<NewsRelationFilter, NewsWhereInput>
    newsTag?: XOR<NewsTagRelationFilter, NewsTagWhereInput>
  }

  export type NewsTagNewsOrderByWithRelationInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
    news?: NewsOrderByWithRelationInput
    newsTag?: NewsTagOrderByWithRelationInput
  }

  export type NewsTagNewsWhereUniqueInput = Prisma.AtLeast<{
    newsId_newsTagId?: NewsTagNewsNewsIdNewsTagIdCompoundUniqueInput
    AND?: NewsTagNewsWhereInput | NewsTagNewsWhereInput[]
    OR?: NewsTagNewsWhereInput[]
    NOT?: NewsTagNewsWhereInput | NewsTagNewsWhereInput[]
    newsId?: IntFilter<"NewsTagNews"> | number
    newsTagId?: IntFilter<"NewsTagNews"> | number
    news?: XOR<NewsRelationFilter, NewsWhereInput>
    newsTag?: XOR<NewsTagRelationFilter, NewsTagWhereInput>
  }, "newsId_newsTagId">

  export type NewsTagNewsOrderByWithAggregationInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
    _count?: NewsTagNewsCountOrderByAggregateInput
    _avg?: NewsTagNewsAvgOrderByAggregateInput
    _max?: NewsTagNewsMaxOrderByAggregateInput
    _min?: NewsTagNewsMinOrderByAggregateInput
    _sum?: NewsTagNewsSumOrderByAggregateInput
  }

  export type NewsTagNewsScalarWhereWithAggregatesInput = {
    AND?: NewsTagNewsScalarWhereWithAggregatesInput | NewsTagNewsScalarWhereWithAggregatesInput[]
    OR?: NewsTagNewsScalarWhereWithAggregatesInput[]
    NOT?: NewsTagNewsScalarWhereWithAggregatesInput | NewsTagNewsScalarWhereWithAggregatesInput[]
    newsId?: IntWithAggregatesFilter<"NewsTagNews"> | number
    newsTagId?: IntWithAggregatesFilter<"NewsTagNews"> | number
  }

  export type InvestorWhereInput = {
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    id?: IntFilter<"Investor"> | number
    nome?: StringFilter<"Investor"> | string
    empresa?: StringNullableFilter<"Investor"> | string | null
    email?: StringFilter<"Investor"> | string
    telefone?: StringNullableFilter<"Investor"> | string | null
    pais?: StringNullableFilter<"Investor"> | string | null
    areaInteresse?: StringNullableFilter<"Investor"> | string | null
    observacoes?: StringNullableFilter<"Investor"> | string | null
    createdAt?: DateTimeFilter<"Investor"> | Date | string
    updatedAt?: DateTimeFilter<"Investor"> | Date | string
  }

  export type InvestorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresa?: SortOrderInput | SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    areaInteresse?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    nome?: StringFilter<"Investor"> | string
    empresa?: StringNullableFilter<"Investor"> | string | null
    email?: StringFilter<"Investor"> | string
    telefone?: StringNullableFilter<"Investor"> | string | null
    pais?: StringNullableFilter<"Investor"> | string | null
    areaInteresse?: StringNullableFilter<"Investor"> | string | null
    observacoes?: StringNullableFilter<"Investor"> | string | null
    createdAt?: DateTimeFilter<"Investor"> | Date | string
    updatedAt?: DateTimeFilter<"Investor"> | Date | string
  }, "id">

  export type InvestorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresa?: SortOrderInput | SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    areaInteresse?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestorCountOrderByAggregateInput
    _avg?: InvestorAvgOrderByAggregateInput
    _max?: InvestorMaxOrderByAggregateInput
    _min?: InvestorMinOrderByAggregateInput
    _sum?: InvestorSumOrderByAggregateInput
  }

  export type InvestorScalarWhereWithAggregatesInput = {
    AND?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    OR?: InvestorScalarWhereWithAggregatesInput[]
    NOT?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Investor"> | number
    nome?: StringWithAggregatesFilter<"Investor"> | string
    empresa?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    email?: StringWithAggregatesFilter<"Investor"> | string
    telefone?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    pais?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    areaInteresse?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Investor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investor"> | Date | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: IntFilter<"Partner"> | number
    nome?: StringFilter<"Partner"> | string
    logo?: StringNullableFilter<"Partner"> | string | null
    website?: StringNullableFilter<"Partner"> | string | null
    status?: BoolFilter<"Partner"> | boolean
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    nome?: StringFilter<"Partner"> | string
    logo?: StringNullableFilter<"Partner"> | string | null
    website?: StringNullableFilter<"Partner"> | string | null
    status?: BoolFilter<"Partner"> | boolean
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _avg?: PartnerAvgOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
    _sum?: PartnerSumOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partner"> | number
    nome?: StringWithAggregatesFilter<"Partner"> | string
    logo?: StringNullableWithAggregatesFilter<"Partner"> | string | null
    website?: StringNullableWithAggregatesFilter<"Partner"> | string | null
    status?: BoolWithAggregatesFilter<"Partner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    nome?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    telefone?: StringNullableFilter<"Contact"> | string | null
    assunto?: StringFilter<"Contact"> | string
    mensagem?: StringFilter<"Contact"> | string
    lido?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    lido?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    nome?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    telefone?: StringNullableFilter<"Contact"> | string | null
    assunto?: StringFilter<"Contact"> | string
    mensagem?: StringFilter<"Contact"> | string
    lido?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    lido?: SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    nome?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    telefone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    assunto?: StringWithAggregatesFilter<"Contact"> | string
    mensagem?: StringWithAggregatesFilter<"Contact"> | string
    lido?: BoolWithAggregatesFilter<"Contact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: IntFilter<"Banner"> | number
    titulo?: StringNullableFilter<"Banner"> | string | null
    subtitulo?: StringNullableFilter<"Banner"> | string | null
    imagem?: StringFilter<"Banner"> | string
    link?: StringNullableFilter<"Banner"> | string | null
    ordem?: IntFilter<"Banner"> | number
    ativo?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    imagem?: SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    titulo?: StringNullableFilter<"Banner"> | string | null
    subtitulo?: StringNullableFilter<"Banner"> | string | null
    imagem?: StringFilter<"Banner"> | string
    link?: StringNullableFilter<"Banner"> | string | null
    ordem?: IntFilter<"Banner"> | number
    ativo?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    imagem?: SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banner"> | number
    titulo?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    subtitulo?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    imagem?: StringWithAggregatesFilter<"Banner"> | string
    link?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    ordem?: IntWithAggregatesFilter<"Banner"> | number
    ativo?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type HighlightWhereInput = {
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    id?: IntFilter<"Highlight"> | number
    titulo?: StringFilter<"Highlight"> | string
    descricao?: StringNullableFilter<"Highlight"> | string | null
    imagem?: StringNullableFilter<"Highlight"> | string | null
    link?: StringNullableFilter<"Highlight"> | string | null
    ordem?: IntFilter<"Highlight"> | number
    ativo?: BoolFilter<"Highlight"> | boolean
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    updatedAt?: DateTimeFilter<"Highlight"> | Date | string
  }

  export type HighlightOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    titulo?: StringFilter<"Highlight"> | string
    descricao?: StringNullableFilter<"Highlight"> | string | null
    imagem?: StringNullableFilter<"Highlight"> | string | null
    link?: StringNullableFilter<"Highlight"> | string | null
    ordem?: IntFilter<"Highlight"> | number
    ativo?: BoolFilter<"Highlight"> | boolean
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    updatedAt?: DateTimeFilter<"Highlight"> | Date | string
  }, "id">

  export type HighlightOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HighlightCountOrderByAggregateInput
    _avg?: HighlightAvgOrderByAggregateInput
    _max?: HighlightMaxOrderByAggregateInput
    _min?: HighlightMinOrderByAggregateInput
    _sum?: HighlightSumOrderByAggregateInput
  }

  export type HighlightScalarWhereWithAggregatesInput = {
    AND?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    OR?: HighlightScalarWhereWithAggregatesInput[]
    NOT?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Highlight"> | number
    titulo?: StringWithAggregatesFilter<"Highlight"> | string
    descricao?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    imagem?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    link?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    ordem?: IntWithAggregatesFilter<"Highlight"> | number
    ativo?: BoolWithAggregatesFilter<"Highlight"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCompanyInput
    teamMembers?: TeamMemberCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
    teamMembers?: TeamMemberUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    companyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCategories?: NewsCategoryNewsCreateNestedManyWithoutNewsInput
    newsTags?: NewsTagNewsCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: number
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCategories?: NewsCategoryNewsUncheckedCreateNestedManyWithoutNewsInput
    newsTags?: NewsTagNewsUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCategories?: NewsCategoryNewsUpdateManyWithoutNewsNestedInput
    newsTags?: NewsTagNewsUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCategories?: NewsCategoryNewsUncheckedUpdateManyWithoutNewsNestedInput
    newsTags?: NewsTagNewsUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: number
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryCreateInput = {
    nome: string
    news?: NewsCategoryNewsCreateNestedManyWithoutNewsCategoryInput
  }

  export type NewsCategoryUncheckedCreateInput = {
    id?: number
    nome: string
    news?: NewsCategoryNewsUncheckedCreateNestedManyWithoutNewsCategoryInput
  }

  export type NewsCategoryUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    news?: NewsCategoryNewsUpdateManyWithoutNewsCategoryNestedInput
  }

  export type NewsCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    news?: NewsCategoryNewsUncheckedUpdateManyWithoutNewsCategoryNestedInput
  }

  export type NewsCategoryCreateManyInput = {
    id?: number
    nome: string
  }

  export type NewsCategoryUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryNewsCreateInput = {
    news: NewsCreateNestedOneWithoutNewsCategoriesInput
    newsCategory: NewsCategoryCreateNestedOneWithoutNewsInput
  }

  export type NewsCategoryNewsUncheckedCreateInput = {
    newsId: number
    newsCategoryId: number
  }

  export type NewsCategoryNewsUpdateInput = {
    news?: NewsUpdateOneRequiredWithoutNewsCategoriesNestedInput
    newsCategory?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsCategoryNewsUncheckedUpdateInput = {
    newsId?: IntFieldUpdateOperationsInput | number
    newsCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsCategoryNewsCreateManyInput = {
    newsId: number
    newsCategoryId: number
  }

  export type NewsCategoryNewsUpdateManyMutationInput = {

  }

  export type NewsCategoryNewsUncheckedUpdateManyInput = {
    newsId?: IntFieldUpdateOperationsInput | number
    newsCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagCreateInput = {
    nome: string
    news?: NewsTagNewsCreateNestedManyWithoutNewsTagInput
  }

  export type NewsTagUncheckedCreateInput = {
    id?: number
    nome: string
    news?: NewsTagNewsUncheckedCreateNestedManyWithoutNewsTagInput
  }

  export type NewsTagUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    news?: NewsTagNewsUpdateManyWithoutNewsTagNestedInput
  }

  export type NewsTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    news?: NewsTagNewsUncheckedUpdateManyWithoutNewsTagNestedInput
  }

  export type NewsTagCreateManyInput = {
    id?: number
    nome: string
  }

  export type NewsTagUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagNewsCreateInput = {
    news: NewsCreateNestedOneWithoutNewsTagsInput
    newsTag: NewsTagCreateNestedOneWithoutNewsInput
  }

  export type NewsTagNewsUncheckedCreateInput = {
    newsId: number
    newsTagId: number
  }

  export type NewsTagNewsUpdateInput = {
    news?: NewsUpdateOneRequiredWithoutNewsTagsNestedInput
    newsTag?: NewsTagUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsTagNewsUncheckedUpdateInput = {
    newsId?: IntFieldUpdateOperationsInput | number
    newsTagId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagNewsCreateManyInput = {
    newsId: number
    newsTagId: number
  }

  export type NewsTagNewsUpdateManyMutationInput = {

  }

  export type NewsTagNewsUncheckedUpdateManyInput = {
    newsId?: IntFieldUpdateOperationsInput | number
    newsTagId?: IntFieldUpdateOperationsInput | number
  }

  export type InvestorCreateInput = {
    nome: string
    empresa?: string | null
    email: string
    telefone?: string | null
    pais?: string | null
    areaInteresse?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorUncheckedCreateInput = {
    id?: number
    nome: string
    empresa?: string | null
    email: string
    telefone?: string | null
    pais?: string | null
    areaInteresse?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    areaInteresse?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    areaInteresse?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorCreateManyInput = {
    id?: number
    nome: string
    empresa?: string | null
    email: string
    telefone?: string | null
    pais?: string | null
    areaInteresse?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    areaInteresse?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    areaInteresse?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateInput = {
    nome: string
    logo?: string | null
    website?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUncheckedCreateInput = {
    id?: number
    nome: string
    logo?: string | null
    website?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateManyInput = {
    id?: number
    nome: string
    logo?: string | null
    website?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    nome: string
    email: string
    telefone?: string | null
    assunto: string
    mensagem: string
    lido?: boolean
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone?: string | null
    assunto: string
    mensagem: string
    lido?: boolean
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone?: string | null
    assunto: string
    mensagem: string
    lido?: boolean
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    titulo?: string | null
    subtitulo?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: number
    titulo?: string | null
    subtitulo?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: number
    titulo?: string | null
    subtitulo?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightCreateInput = {
    titulo: string
    descricao?: string | null
    imagem?: string | null
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagem?: string | null
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagem?: string | null
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    logo?: SortOrder
    capa?: SortOrder
    website?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    logo?: SortOrder
    capa?: SortOrder
    website?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    logo?: SortOrder
    capa?: SortOrder
    website?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    investimento?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    imagens?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    investimento?: SortOrder
    companyId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    investimento?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    imagens?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    investimento?: SortOrder
    localizacao?: SortOrder
    status?: SortOrder
    imagens?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    investimento?: SortOrder
    companyId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    fotografia?: SortOrder
    linkedin?: SortOrder
    biografia?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    fotografia?: SortOrder
    linkedin?: SortOrder
    biografia?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    fotografia?: SortOrder
    linkedin?: SortOrder
    biografia?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
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

  export type NewsCategoryNewsListRelationFilter = {
    every?: NewsCategoryNewsWhereInput
    some?: NewsCategoryNewsWhereInput
    none?: NewsCategoryNewsWhereInput
  }

  export type NewsTagNewsListRelationFilter = {
    every?: NewsTagNewsWhereInput
    some?: NewsTagNewsWhereInput
    none?: NewsTagNewsWhereInput
  }

  export type NewsCategoryNewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsTagNewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    resumo?: SortOrder
    conteudo?: SortOrder
    blocos?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    agendadoPara?: SortOrder
    dataPublicacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    resumo?: SortOrder
    conteudo?: SortOrder
    blocos?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    agendadoPara?: SortOrder
    dataPublicacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    resumo?: SortOrder
    conteudo?: SortOrder
    blocos?: SortOrder
    imagem?: SortOrder
    status?: SortOrder
    agendadoPara?: SortOrder
    dataPublicacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NewsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type NewsCategoryRelationFilter = {
    is?: NewsCategoryWhereInput
    isNot?: NewsCategoryWhereInput
  }

  export type NewsCategoryNewsNewsIdNewsCategoryIdCompoundUniqueInput = {
    newsId: number
    newsCategoryId: number
  }

  export type NewsCategoryNewsCountOrderByAggregateInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
  }

  export type NewsCategoryNewsAvgOrderByAggregateInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
  }

  export type NewsCategoryNewsMaxOrderByAggregateInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
  }

  export type NewsCategoryNewsMinOrderByAggregateInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
  }

  export type NewsCategoryNewsSumOrderByAggregateInput = {
    newsId?: SortOrder
    newsCategoryId?: SortOrder
  }

  export type NewsTagCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsTagMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsTagMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type NewsTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsTagRelationFilter = {
    is?: NewsTagWhereInput
    isNot?: NewsTagWhereInput
  }

  export type NewsTagNewsNewsIdNewsTagIdCompoundUniqueInput = {
    newsId: number
    newsTagId: number
  }

  export type NewsTagNewsCountOrderByAggregateInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
  }

  export type NewsTagNewsAvgOrderByAggregateInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
  }

  export type NewsTagNewsMaxOrderByAggregateInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
  }

  export type NewsTagNewsMinOrderByAggregateInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
  }

  export type NewsTagNewsSumOrderByAggregateInput = {
    newsId?: SortOrder
    newsTagId?: SortOrder
  }

  export type InvestorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresa?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    pais?: SortOrder
    areaInteresse?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InvestorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresa?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    pais?: SortOrder
    areaInteresse?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresa?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    pais?: SortOrder
    areaInteresse?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    lido?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    lido?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    lido?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type HighlightCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type HighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput> | TeamMemberCreateWithoutCompanyInput[] | TeamMemberUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCompanyInput | TeamMemberCreateOrConnectWithoutCompanyInput[]
    createMany?: TeamMemberCreateManyCompanyInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput> | TeamMemberCreateWithoutCompanyInput[] | TeamMemberUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCompanyInput | TeamMemberCreateOrConnectWithoutCompanyInput[]
    createMany?: TeamMemberCreateManyCompanyInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput> | TeamMemberCreateWithoutCompanyInput[] | TeamMemberUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCompanyInput | TeamMemberCreateOrConnectWithoutCompanyInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutCompanyInput | TeamMemberUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TeamMemberCreateManyCompanyInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutCompanyInput | TeamMemberUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutCompanyInput | TeamMemberUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput> | ProjectCreateWithoutCompanyInput[] | ProjectUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCompanyInput | ProjectCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCompanyInput | ProjectUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectCreateManyCompanyInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCompanyInput | ProjectUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCompanyInput | ProjectUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput> | TeamMemberCreateWithoutCompanyInput[] | TeamMemberUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutCompanyInput | TeamMemberCreateOrConnectWithoutCompanyInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutCompanyInput | TeamMemberUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TeamMemberCreateManyCompanyInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutCompanyInput | TeamMemberUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutCompanyInput | TeamMemberUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CompanyUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProjectsInput
    upsert?: CompanyUpsertWithoutProjectsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProjectsInput, CompanyUpdateWithoutProjectsInput>, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type CompanyCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<CompanyCreateWithoutTeamMembersInput, CompanyUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTeamMembersInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<CompanyCreateWithoutTeamMembersInput, CompanyUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTeamMembersInput
    upsert?: CompanyUpsertWithoutTeamMembersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTeamMembersInput, CompanyUpdateWithoutTeamMembersInput>, CompanyUncheckedUpdateWithoutTeamMembersInput>
  }

  export type NewsCategoryNewsCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput> | NewsCategoryNewsCreateWithoutNewsInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsInput | NewsCategoryNewsCreateOrConnectWithoutNewsInput[]
    createMany?: NewsCategoryNewsCreateManyNewsInputEnvelope
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
  }

  export type NewsTagNewsCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput> | NewsTagNewsCreateWithoutNewsInput[] | NewsTagNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsInput | NewsTagNewsCreateOrConnectWithoutNewsInput[]
    createMany?: NewsTagNewsCreateManyNewsInputEnvelope
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
  }

  export type NewsCategoryNewsUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput> | NewsCategoryNewsCreateWithoutNewsInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsInput | NewsCategoryNewsCreateOrConnectWithoutNewsInput[]
    createMany?: NewsCategoryNewsCreateManyNewsInputEnvelope
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
  }

  export type NewsTagNewsUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput> | NewsTagNewsCreateWithoutNewsInput[] | NewsTagNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsInput | NewsTagNewsCreateOrConnectWithoutNewsInput[]
    createMany?: NewsTagNewsCreateManyNewsInputEnvelope
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NewsCategoryNewsUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput> | NewsCategoryNewsCreateWithoutNewsInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsInput | NewsCategoryNewsCreateOrConnectWithoutNewsInput[]
    upsert?: NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsInput | NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsCategoryNewsCreateManyNewsInputEnvelope
    set?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    disconnect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    delete?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    update?: NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsInput | NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsCategoryNewsUpdateManyWithWhereWithoutNewsInput | NewsCategoryNewsUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
  }

  export type NewsTagNewsUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput> | NewsTagNewsCreateWithoutNewsInput[] | NewsTagNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsInput | NewsTagNewsCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagNewsUpsertWithWhereUniqueWithoutNewsInput | NewsTagNewsUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsTagNewsCreateManyNewsInputEnvelope
    set?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    disconnect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    delete?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    update?: NewsTagNewsUpdateWithWhereUniqueWithoutNewsInput | NewsTagNewsUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagNewsUpdateManyWithWhereWithoutNewsInput | NewsTagNewsUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
  }

  export type NewsCategoryNewsUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput> | NewsCategoryNewsCreateWithoutNewsInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsInput | NewsCategoryNewsCreateOrConnectWithoutNewsInput[]
    upsert?: NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsInput | NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsCategoryNewsCreateManyNewsInputEnvelope
    set?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    disconnect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    delete?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    update?: NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsInput | NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsCategoryNewsUpdateManyWithWhereWithoutNewsInput | NewsCategoryNewsUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
  }

  export type NewsTagNewsUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput> | NewsTagNewsCreateWithoutNewsInput[] | NewsTagNewsUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsInput | NewsTagNewsCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagNewsUpsertWithWhereUniqueWithoutNewsInput | NewsTagNewsUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsTagNewsCreateManyNewsInputEnvelope
    set?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    disconnect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    delete?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    update?: NewsTagNewsUpdateWithWhereUniqueWithoutNewsInput | NewsTagNewsUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagNewsUpdateManyWithWhereWithoutNewsInput | NewsTagNewsUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
  }

  export type NewsCategoryNewsCreateNestedManyWithoutNewsCategoryInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput> | NewsCategoryNewsCreateWithoutNewsCategoryInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput | NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput[]
    createMany?: NewsCategoryNewsCreateManyNewsCategoryInputEnvelope
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
  }

  export type NewsCategoryNewsUncheckedCreateNestedManyWithoutNewsCategoryInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput> | NewsCategoryNewsCreateWithoutNewsCategoryInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput | NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput[]
    createMany?: NewsCategoryNewsCreateManyNewsCategoryInputEnvelope
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
  }

  export type NewsCategoryNewsUpdateManyWithoutNewsCategoryNestedInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput> | NewsCategoryNewsCreateWithoutNewsCategoryInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput | NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput[]
    upsert?: NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsCategoryInput | NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsCategoryInput[]
    createMany?: NewsCategoryNewsCreateManyNewsCategoryInputEnvelope
    set?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    disconnect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    delete?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    update?: NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsCategoryInput | NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsCategoryInput[]
    updateMany?: NewsCategoryNewsUpdateManyWithWhereWithoutNewsCategoryInput | NewsCategoryNewsUpdateManyWithWhereWithoutNewsCategoryInput[]
    deleteMany?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
  }

  export type NewsCategoryNewsUncheckedUpdateManyWithoutNewsCategoryNestedInput = {
    create?: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput> | NewsCategoryNewsCreateWithoutNewsCategoryInput[] | NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput[]
    connectOrCreate?: NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput | NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput[]
    upsert?: NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsCategoryInput | NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsCategoryInput[]
    createMany?: NewsCategoryNewsCreateManyNewsCategoryInputEnvelope
    set?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    disconnect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    delete?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    connect?: NewsCategoryNewsWhereUniqueInput | NewsCategoryNewsWhereUniqueInput[]
    update?: NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsCategoryInput | NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsCategoryInput[]
    updateMany?: NewsCategoryNewsUpdateManyWithWhereWithoutNewsCategoryInput | NewsCategoryNewsUpdateManyWithWhereWithoutNewsCategoryInput[]
    deleteMany?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutNewsCategoriesInput = {
    create?: XOR<NewsCreateWithoutNewsCategoriesInput, NewsUncheckedCreateWithoutNewsCategoriesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsCategoriesInput
    connect?: NewsWhereUniqueInput
  }

  export type NewsCategoryCreateNestedOneWithoutNewsInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutNewsCategoriesNestedInput = {
    create?: XOR<NewsCreateWithoutNewsCategoriesInput, NewsUncheckedCreateWithoutNewsCategoriesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsCategoriesInput
    upsert?: NewsUpsertWithoutNewsCategoriesInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutNewsCategoriesInput, NewsUpdateWithoutNewsCategoriesInput>, NewsUncheckedUpdateWithoutNewsCategoriesInput>
  }

  export type NewsCategoryUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    upsert?: NewsCategoryUpsertWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
    update?: XOR<XOR<NewsCategoryUpdateToOneWithWhereWithoutNewsInput, NewsCategoryUpdateWithoutNewsInput>, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTagNewsCreateNestedManyWithoutNewsTagInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput> | NewsTagNewsCreateWithoutNewsTagInput[] | NewsTagNewsUncheckedCreateWithoutNewsTagInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsTagInput | NewsTagNewsCreateOrConnectWithoutNewsTagInput[]
    createMany?: NewsTagNewsCreateManyNewsTagInputEnvelope
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
  }

  export type NewsTagNewsUncheckedCreateNestedManyWithoutNewsTagInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput> | NewsTagNewsCreateWithoutNewsTagInput[] | NewsTagNewsUncheckedCreateWithoutNewsTagInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsTagInput | NewsTagNewsCreateOrConnectWithoutNewsTagInput[]
    createMany?: NewsTagNewsCreateManyNewsTagInputEnvelope
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
  }

  export type NewsTagNewsUpdateManyWithoutNewsTagNestedInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput> | NewsTagNewsCreateWithoutNewsTagInput[] | NewsTagNewsUncheckedCreateWithoutNewsTagInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsTagInput | NewsTagNewsCreateOrConnectWithoutNewsTagInput[]
    upsert?: NewsTagNewsUpsertWithWhereUniqueWithoutNewsTagInput | NewsTagNewsUpsertWithWhereUniqueWithoutNewsTagInput[]
    createMany?: NewsTagNewsCreateManyNewsTagInputEnvelope
    set?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    disconnect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    delete?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    update?: NewsTagNewsUpdateWithWhereUniqueWithoutNewsTagInput | NewsTagNewsUpdateWithWhereUniqueWithoutNewsTagInput[]
    updateMany?: NewsTagNewsUpdateManyWithWhereWithoutNewsTagInput | NewsTagNewsUpdateManyWithWhereWithoutNewsTagInput[]
    deleteMany?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
  }

  export type NewsTagNewsUncheckedUpdateManyWithoutNewsTagNestedInput = {
    create?: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput> | NewsTagNewsCreateWithoutNewsTagInput[] | NewsTagNewsUncheckedCreateWithoutNewsTagInput[]
    connectOrCreate?: NewsTagNewsCreateOrConnectWithoutNewsTagInput | NewsTagNewsCreateOrConnectWithoutNewsTagInput[]
    upsert?: NewsTagNewsUpsertWithWhereUniqueWithoutNewsTagInput | NewsTagNewsUpsertWithWhereUniqueWithoutNewsTagInput[]
    createMany?: NewsTagNewsCreateManyNewsTagInputEnvelope
    set?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    disconnect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    delete?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    connect?: NewsTagNewsWhereUniqueInput | NewsTagNewsWhereUniqueInput[]
    update?: NewsTagNewsUpdateWithWhereUniqueWithoutNewsTagInput | NewsTagNewsUpdateWithWhereUniqueWithoutNewsTagInput[]
    updateMany?: NewsTagNewsUpdateManyWithWhereWithoutNewsTagInput | NewsTagNewsUpdateManyWithWhereWithoutNewsTagInput[]
    deleteMany?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutNewsTagsInput = {
    create?: XOR<NewsCreateWithoutNewsTagsInput, NewsUncheckedCreateWithoutNewsTagsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsTagsInput
    connect?: NewsWhereUniqueInput
  }

  export type NewsTagCreateNestedOneWithoutNewsInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput
    connect?: NewsTagWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutNewsTagsNestedInput = {
    create?: XOR<NewsCreateWithoutNewsTagsInput, NewsUncheckedCreateWithoutNewsTagsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsTagsInput
    upsert?: NewsUpsertWithoutNewsTagsInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutNewsTagsInput, NewsUpdateWithoutNewsTagsInput>, NewsUncheckedUpdateWithoutNewsTagsInput>
  }

  export type NewsTagUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput
    upsert?: NewsTagUpsertWithoutNewsInput
    connect?: NewsTagWhereUniqueInput
    update?: XOR<XOR<NewsTagUpdateToOneWithWhereWithoutNewsInput, NewsTagUpdateWithoutNewsInput>, NewsTagUncheckedUpdateWithoutNewsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type ProjectCreateWithoutCompanyInput = {
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutCompanyInput = {
    id?: number
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectCreateManyCompanyInputEnvelope = {
    data: ProjectCreateManyCompanyInput | ProjectCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutCompanyInput = {
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUncheckedCreateWithoutCompanyInput = {
    id?: number
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutCompanyInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput>
  }

  export type TeamMemberCreateManyCompanyInputEnvelope = {
    data: TeamMemberCreateManyCompanyInput | TeamMemberCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectCreateWithoutCompanyInput, ProjectUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCompanyInput, ProjectUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    nome?: StringFilter<"Project"> | string
    descricao?: StringNullableFilter<"Project"> | string | null
    categoria?: StringNullableFilter<"Project"> | string | null
    investimento?: DecimalNullableFilter<"Project"> | Decimal | DecimalJsLike | number | string | null
    localizacao?: StringNullableFilter<"Project"> | string | null
    status?: BoolFilter<"Project"> | boolean
    imagens?: StringNullableFilter<"Project"> | string | null
    companyId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutCompanyInput, TeamMemberUncheckedUpdateWithoutCompanyInput>
    create: XOR<TeamMemberCreateWithoutCompanyInput, TeamMemberUncheckedCreateWithoutCompanyInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutCompanyInput, TeamMemberUncheckedUpdateWithoutCompanyInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutCompanyInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    nome?: StringFilter<"TeamMember"> | string
    cargo?: StringNullableFilter<"TeamMember"> | string | null
    fotografia?: StringNullableFilter<"TeamMember"> | string | null
    linkedin?: StringNullableFilter<"TeamMember"> | string | null
    biografia?: StringNullableFilter<"TeamMember"> | string | null
    companyId?: IntFilter<"TeamMember"> | number
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type CompanyCreateWithoutProjectsInput = {
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProjectsInput = {
    id?: number
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProjectsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
  }

  export type CompanyUpsertWithoutProjectsInput = {
    update: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
    create: XOR<CompanyCreateWithoutProjectsInput, CompanyUncheckedCreateWithoutProjectsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProjectsInput, CompanyUncheckedUpdateWithoutProjectsInput>
  }

  export type CompanyUpdateWithoutProjectsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutTeamMembersInput = {
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTeamMembersInput = {
    id?: number
    nome: string
    descricao?: string | null
    missao?: string | null
    visao?: string | null
    logo?: string | null
    capa?: string | null
    website?: string | null
    email?: string | null
    telefone?: string | null
    localizacao?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTeamMembersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTeamMembersInput, CompanyUncheckedCreateWithoutTeamMembersInput>
  }

  export type CompanyUpsertWithoutTeamMembersInput = {
    update: XOR<CompanyUpdateWithoutTeamMembersInput, CompanyUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<CompanyCreateWithoutTeamMembersInput, CompanyUncheckedCreateWithoutTeamMembersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTeamMembersInput, CompanyUncheckedUpdateWithoutTeamMembersInput>
  }

  export type CompanyUpdateWithoutTeamMembersInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTeamMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: NullableStringFieldUpdateOperationsInput | string | null
    visao?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type NewsCategoryNewsCreateWithoutNewsInput = {
    newsCategory: NewsCategoryCreateNestedOneWithoutNewsInput
  }

  export type NewsCategoryNewsUncheckedCreateWithoutNewsInput = {
    newsCategoryId: number
  }

  export type NewsCategoryNewsCreateOrConnectWithoutNewsInput = {
    where: NewsCategoryNewsWhereUniqueInput
    create: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput>
  }

  export type NewsCategoryNewsCreateManyNewsInputEnvelope = {
    data: NewsCategoryNewsCreateManyNewsInput | NewsCategoryNewsCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsTagNewsCreateWithoutNewsInput = {
    newsTag: NewsTagCreateNestedOneWithoutNewsInput
  }

  export type NewsTagNewsUncheckedCreateWithoutNewsInput = {
    newsTagId: number
  }

  export type NewsTagNewsCreateOrConnectWithoutNewsInput = {
    where: NewsTagNewsWhereUniqueInput
    create: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput>
  }

  export type NewsTagNewsCreateManyNewsInputEnvelope = {
    data: NewsTagNewsCreateManyNewsInput | NewsTagNewsCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsCategoryNewsWhereUniqueInput
    update: XOR<NewsCategoryNewsUpdateWithoutNewsInput, NewsCategoryNewsUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsCategoryNewsCreateWithoutNewsInput, NewsCategoryNewsUncheckedCreateWithoutNewsInput>
  }

  export type NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsCategoryNewsWhereUniqueInput
    data: XOR<NewsCategoryNewsUpdateWithoutNewsInput, NewsCategoryNewsUncheckedUpdateWithoutNewsInput>
  }

  export type NewsCategoryNewsUpdateManyWithWhereWithoutNewsInput = {
    where: NewsCategoryNewsScalarWhereInput
    data: XOR<NewsCategoryNewsUpdateManyMutationInput, NewsCategoryNewsUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsCategoryNewsScalarWhereInput = {
    AND?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
    OR?: NewsCategoryNewsScalarWhereInput[]
    NOT?: NewsCategoryNewsScalarWhereInput | NewsCategoryNewsScalarWhereInput[]
    newsId?: IntFilter<"NewsCategoryNews"> | number
    newsCategoryId?: IntFilter<"NewsCategoryNews"> | number
  }

  export type NewsTagNewsUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsTagNewsWhereUniqueInput
    update: XOR<NewsTagNewsUpdateWithoutNewsInput, NewsTagNewsUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsTagNewsCreateWithoutNewsInput, NewsTagNewsUncheckedCreateWithoutNewsInput>
  }

  export type NewsTagNewsUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsTagNewsWhereUniqueInput
    data: XOR<NewsTagNewsUpdateWithoutNewsInput, NewsTagNewsUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTagNewsUpdateManyWithWhereWithoutNewsInput = {
    where: NewsTagNewsScalarWhereInput
    data: XOR<NewsTagNewsUpdateManyMutationInput, NewsTagNewsUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsTagNewsScalarWhereInput = {
    AND?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
    OR?: NewsTagNewsScalarWhereInput[]
    NOT?: NewsTagNewsScalarWhereInput | NewsTagNewsScalarWhereInput[]
    newsId?: IntFilter<"NewsTagNews"> | number
    newsTagId?: IntFilter<"NewsTagNews"> | number
  }

  export type NewsCategoryNewsCreateWithoutNewsCategoryInput = {
    news: NewsCreateNestedOneWithoutNewsCategoriesInput
  }

  export type NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput = {
    newsId: number
  }

  export type NewsCategoryNewsCreateOrConnectWithoutNewsCategoryInput = {
    where: NewsCategoryNewsWhereUniqueInput
    create: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput>
  }

  export type NewsCategoryNewsCreateManyNewsCategoryInputEnvelope = {
    data: NewsCategoryNewsCreateManyNewsCategoryInput | NewsCategoryNewsCreateManyNewsCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsCategoryNewsUpsertWithWhereUniqueWithoutNewsCategoryInput = {
    where: NewsCategoryNewsWhereUniqueInput
    update: XOR<NewsCategoryNewsUpdateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedUpdateWithoutNewsCategoryInput>
    create: XOR<NewsCategoryNewsCreateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedCreateWithoutNewsCategoryInput>
  }

  export type NewsCategoryNewsUpdateWithWhereUniqueWithoutNewsCategoryInput = {
    where: NewsCategoryNewsWhereUniqueInput
    data: XOR<NewsCategoryNewsUpdateWithoutNewsCategoryInput, NewsCategoryNewsUncheckedUpdateWithoutNewsCategoryInput>
  }

  export type NewsCategoryNewsUpdateManyWithWhereWithoutNewsCategoryInput = {
    where: NewsCategoryNewsScalarWhereInput
    data: XOR<NewsCategoryNewsUpdateManyMutationInput, NewsCategoryNewsUncheckedUpdateManyWithoutNewsCategoryInput>
  }

  export type NewsCreateWithoutNewsCategoriesInput = {
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsTags?: NewsTagNewsCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutNewsCategoriesInput = {
    id?: number
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsTags?: NewsTagNewsUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutNewsCategoriesInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutNewsCategoriesInput, NewsUncheckedCreateWithoutNewsCategoriesInput>
  }

  export type NewsCategoryCreateWithoutNewsInput = {
    nome: string
  }

  export type NewsCategoryUncheckedCreateWithoutNewsInput = {
    id?: number
    nome: string
  }

  export type NewsCategoryCreateOrConnectWithoutNewsInput = {
    where: NewsCategoryWhereUniqueInput
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
  }

  export type NewsUpsertWithoutNewsCategoriesInput = {
    update: XOR<NewsUpdateWithoutNewsCategoriesInput, NewsUncheckedUpdateWithoutNewsCategoriesInput>
    create: XOR<NewsCreateWithoutNewsCategoriesInput, NewsUncheckedCreateWithoutNewsCategoriesInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutNewsCategoriesInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutNewsCategoriesInput, NewsUncheckedUpdateWithoutNewsCategoriesInput>
  }

  export type NewsUpdateWithoutNewsCategoriesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsTags?: NewsTagNewsUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutNewsCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsTags?: NewsTagNewsUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCategoryUpsertWithoutNewsInput = {
    update: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    where?: NewsCategoryWhereInput
  }

  export type NewsCategoryUpdateToOneWithWhereWithoutNewsInput = {
    where?: NewsCategoryWhereInput
    data: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type NewsCategoryUpdateWithoutNewsInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagNewsCreateWithoutNewsTagInput = {
    news: NewsCreateNestedOneWithoutNewsTagsInput
  }

  export type NewsTagNewsUncheckedCreateWithoutNewsTagInput = {
    newsId: number
  }

  export type NewsTagNewsCreateOrConnectWithoutNewsTagInput = {
    where: NewsTagNewsWhereUniqueInput
    create: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput>
  }

  export type NewsTagNewsCreateManyNewsTagInputEnvelope = {
    data: NewsTagNewsCreateManyNewsTagInput | NewsTagNewsCreateManyNewsTagInput[]
    skipDuplicates?: boolean
  }

  export type NewsTagNewsUpsertWithWhereUniqueWithoutNewsTagInput = {
    where: NewsTagNewsWhereUniqueInput
    update: XOR<NewsTagNewsUpdateWithoutNewsTagInput, NewsTagNewsUncheckedUpdateWithoutNewsTagInput>
    create: XOR<NewsTagNewsCreateWithoutNewsTagInput, NewsTagNewsUncheckedCreateWithoutNewsTagInput>
  }

  export type NewsTagNewsUpdateWithWhereUniqueWithoutNewsTagInput = {
    where: NewsTagNewsWhereUniqueInput
    data: XOR<NewsTagNewsUpdateWithoutNewsTagInput, NewsTagNewsUncheckedUpdateWithoutNewsTagInput>
  }

  export type NewsTagNewsUpdateManyWithWhereWithoutNewsTagInput = {
    where: NewsTagNewsScalarWhereInput
    data: XOR<NewsTagNewsUpdateManyMutationInput, NewsTagNewsUncheckedUpdateManyWithoutNewsTagInput>
  }

  export type NewsCreateWithoutNewsTagsInput = {
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCategories?: NewsCategoryNewsCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutNewsTagsInput = {
    id?: number
    titulo: string
    slug: string
    resumo?: string | null
    conteudo?: string | null
    blocos?: string | null
    imagem?: string | null
    status?: string
    agendadoPara?: Date | string | null
    dataPublicacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCategories?: NewsCategoryNewsUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutNewsTagsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutNewsTagsInput, NewsUncheckedCreateWithoutNewsTagsInput>
  }

  export type NewsTagCreateWithoutNewsInput = {
    nome: string
  }

  export type NewsTagUncheckedCreateWithoutNewsInput = {
    id?: number
    nome: string
  }

  export type NewsTagCreateOrConnectWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
  }

  export type NewsUpsertWithoutNewsTagsInput = {
    update: XOR<NewsUpdateWithoutNewsTagsInput, NewsUncheckedUpdateWithoutNewsTagsInput>
    create: XOR<NewsCreateWithoutNewsTagsInput, NewsUncheckedCreateWithoutNewsTagsInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutNewsTagsInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutNewsTagsInput, NewsUncheckedUpdateWithoutNewsTagsInput>
  }

  export type NewsUpdateWithoutNewsTagsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCategories?: NewsCategoryNewsUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutNewsTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    blocos?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    agendadoPara?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCategories?: NewsCategoryNewsUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsTagUpsertWithoutNewsInput = {
    update: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
    where?: NewsTagWhereInput
  }

  export type NewsTagUpdateToOneWithWhereWithoutNewsInput = {
    where?: NewsTagWhereInput
    data: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTagUpdateWithoutNewsInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyCompanyInput = {
    id?: number
    nome: string
    descricao?: string | null
    categoria?: string | null
    investimento?: Decimal | DecimalJsLike | number | string | null
    localizacao?: string | null
    status?: boolean
    imagens?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberCreateManyCompanyInput = {
    id?: number
    nome: string
    cargo?: string | null
    fotografia?: string | null
    linkedin?: string | null
    biografia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutCompanyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    investimento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    imagens?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutCompanyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    fotografia?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryNewsCreateManyNewsInput = {
    newsCategoryId: number
  }

  export type NewsTagNewsCreateManyNewsInput = {
    newsTagId: number
  }

  export type NewsCategoryNewsUpdateWithoutNewsInput = {
    newsCategory?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsCategoryNewsUncheckedUpdateWithoutNewsInput = {
    newsCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsCategoryNewsUncheckedUpdateManyWithoutNewsInput = {
    newsCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagNewsUpdateWithoutNewsInput = {
    newsTag?: NewsTagUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsTagNewsUncheckedUpdateWithoutNewsInput = {
    newsTagId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagNewsUncheckedUpdateManyWithoutNewsInput = {
    newsTagId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsCategoryNewsCreateManyNewsCategoryInput = {
    newsId: number
  }

  export type NewsCategoryNewsUpdateWithoutNewsCategoryInput = {
    news?: NewsUpdateOneRequiredWithoutNewsCategoriesNestedInput
  }

  export type NewsCategoryNewsUncheckedUpdateWithoutNewsCategoryInput = {
    newsId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsCategoryNewsUncheckedUpdateManyWithoutNewsCategoryInput = {
    newsId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagNewsCreateManyNewsTagInput = {
    newsId: number
  }

  export type NewsTagNewsUpdateWithoutNewsTagInput = {
    news?: NewsUpdateOneRequiredWithoutNewsTagsNestedInput
  }

  export type NewsTagNewsUncheckedUpdateWithoutNewsTagInput = {
    newsId?: IntFieldUpdateOperationsInput | number
  }

  export type NewsTagNewsUncheckedUpdateManyWithoutNewsTagInput = {
    newsId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsCountOutputTypeDefaultArgs instead
     */
    export type NewsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsCategoryCountOutputTypeDefaultArgs instead
     */
    export type NewsCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsTagCountOutputTypeDefaultArgs instead
     */
    export type NewsTagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsTagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberDefaultArgs instead
     */
    export type TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsDefaultArgs instead
     */
    export type NewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsCategoryDefaultArgs instead
     */
    export type NewsCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsCategoryNewsDefaultArgs instead
     */
    export type NewsCategoryNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsCategoryNewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsTagDefaultArgs instead
     */
    export type NewsTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsTagNewsDefaultArgs instead
     */
    export type NewsTagNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsTagNewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvestorDefaultArgs instead
     */
    export type InvestorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvestorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerDefaultArgs instead
     */
    export type PartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BannerDefaultArgs instead
     */
    export type BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BannerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HighlightDefaultArgs instead
     */
    export type HighlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HighlightDefaultArgs<ExtArgs>

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