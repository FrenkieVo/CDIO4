
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Lichtrinh
 * 
 */
export type Lichtrinh = $Result.DefaultSelection<Prisma.$LichtrinhPayload>
/**
 * Model LichtrinhCT
 * 
 */
export type LichtrinhCT = $Result.DefaultSelection<Prisma.$LichtrinhCTPayload>
/**
 * Model Goidichvu
 * 
 */
export type Goidichvu = $Result.DefaultSelection<Prisma.$GoidichvuPayload>
/**
 * Model Diadiem
 * 
 */
export type Diadiem = $Result.DefaultSelection<Prisma.$DiadiemPayload>
/**
 * Model Danhgia
 * 
 */
export type Danhgia = $Result.DefaultSelection<Prisma.$DanhgiaPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Thanhtoan
 * 
 */
export type Thanhtoan = $Result.DefaultSelection<Prisma.$ThanhtoanPayload>
/**
 * Model Hoadon
 * 
 */
export type Hoadon = $Result.DefaultSelection<Prisma.$HoadonPayload>
/**
 * Model gopy
 * 
 */
export type gopy = $Result.DefaultSelection<Prisma.$gopyPayload>
/**
 * Model Noidung
 * 
 */
export type Noidung = $Result.DefaultSelection<Prisma.$NoidungPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.lichtrinh`: Exposes CRUD operations for the **Lichtrinh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lichtrinhs
    * const lichtrinhs = await prisma.lichtrinh.findMany()
    * ```
    */
  get lichtrinh(): Prisma.LichtrinhDelegate<ExtArgs>;

  /**
   * `prisma.lichtrinhCT`: Exposes CRUD operations for the **LichtrinhCT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LichtrinhCTS
    * const lichtrinhCTS = await prisma.lichtrinhCT.findMany()
    * ```
    */
  get lichtrinhCT(): Prisma.LichtrinhCTDelegate<ExtArgs>;

  /**
   * `prisma.goidichvu`: Exposes CRUD operations for the **Goidichvu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goidichvus
    * const goidichvus = await prisma.goidichvu.findMany()
    * ```
    */
  get goidichvu(): Prisma.GoidichvuDelegate<ExtArgs>;

  /**
   * `prisma.diadiem`: Exposes CRUD operations for the **Diadiem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diadiems
    * const diadiems = await prisma.diadiem.findMany()
    * ```
    */
  get diadiem(): Prisma.DiadiemDelegate<ExtArgs>;

  /**
   * `prisma.danhgia`: Exposes CRUD operations for the **Danhgia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Danhgias
    * const danhgias = await prisma.danhgia.findMany()
    * ```
    */
  get danhgia(): Prisma.DanhgiaDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.thanhtoan`: Exposes CRUD operations for the **Thanhtoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thanhtoans
    * const thanhtoans = await prisma.thanhtoan.findMany()
    * ```
    */
  get thanhtoan(): Prisma.ThanhtoanDelegate<ExtArgs>;

  /**
   * `prisma.hoadon`: Exposes CRUD operations for the **Hoadon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoadons
    * const hoadons = await prisma.hoadon.findMany()
    * ```
    */
  get hoadon(): Prisma.HoadonDelegate<ExtArgs>;

  /**
   * `prisma.gopy`: Exposes CRUD operations for the **gopy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gopies
    * const gopies = await prisma.gopy.findMany()
    * ```
    */
  get gopy(): Prisma.gopyDelegate<ExtArgs>;

  /**
   * `prisma.noidung`: Exposes CRUD operations for the **Noidung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noidungs
    * const noidungs = await prisma.noidung.findMany()
    * ```
    */
  get noidung(): Prisma.NoidungDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Role: 'Role',
    Lichtrinh: 'Lichtrinh',
    LichtrinhCT: 'LichtrinhCT',
    Goidichvu: 'Goidichvu',
    Diadiem: 'Diadiem',
    Danhgia: 'Danhgia',
    Booking: 'Booking',
    Thanhtoan: 'Thanhtoan',
    Hoadon: 'Hoadon',
    gopy: 'gopy',
    Noidung: 'Noidung'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'lichtrinh' | 'lichtrinhCT' | 'goidichvu' | 'diadiem' | 'danhgia' | 'booking' | 'thanhtoan' | 'hoadon' | 'gopy' | 'noidung'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Lichtrinh: {
        payload: Prisma.$LichtrinhPayload<ExtArgs>
        fields: Prisma.LichtrinhFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LichtrinhFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LichtrinhFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          findFirst: {
            args: Prisma.LichtrinhFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LichtrinhFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          findMany: {
            args: Prisma.LichtrinhFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>[]
          }
          create: {
            args: Prisma.LichtrinhCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          createMany: {
            args: Prisma.LichtrinhCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LichtrinhDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          update: {
            args: Prisma.LichtrinhUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          deleteMany: {
            args: Prisma.LichtrinhDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LichtrinhUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LichtrinhUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhPayload>
          }
          aggregate: {
            args: Prisma.LichtrinhAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLichtrinh>
          }
          groupBy: {
            args: Prisma.LichtrinhGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LichtrinhGroupByOutputType>[]
          }
          count: {
            args: Prisma.LichtrinhCountArgs<ExtArgs>,
            result: $Utils.Optional<LichtrinhCountAggregateOutputType> | number
          }
        }
      }
      LichtrinhCT: {
        payload: Prisma.$LichtrinhCTPayload<ExtArgs>
        fields: Prisma.LichtrinhCTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LichtrinhCTFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LichtrinhCTFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          findFirst: {
            args: Prisma.LichtrinhCTFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LichtrinhCTFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          findMany: {
            args: Prisma.LichtrinhCTFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>[]
          }
          create: {
            args: Prisma.LichtrinhCTCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          createMany: {
            args: Prisma.LichtrinhCTCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LichtrinhCTDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          update: {
            args: Prisma.LichtrinhCTUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          deleteMany: {
            args: Prisma.LichtrinhCTDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LichtrinhCTUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LichtrinhCTUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LichtrinhCTPayload>
          }
          aggregate: {
            args: Prisma.LichtrinhCTAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLichtrinhCT>
          }
          groupBy: {
            args: Prisma.LichtrinhCTGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LichtrinhCTGroupByOutputType>[]
          }
          count: {
            args: Prisma.LichtrinhCTCountArgs<ExtArgs>,
            result: $Utils.Optional<LichtrinhCTCountAggregateOutputType> | number
          }
        }
      }
      Goidichvu: {
        payload: Prisma.$GoidichvuPayload<ExtArgs>
        fields: Prisma.GoidichvuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoidichvuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoidichvuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          findFirst: {
            args: Prisma.GoidichvuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoidichvuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          findMany: {
            args: Prisma.GoidichvuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>[]
          }
          create: {
            args: Prisma.GoidichvuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          createMany: {
            args: Prisma.GoidichvuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GoidichvuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          update: {
            args: Prisma.GoidichvuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          deleteMany: {
            args: Prisma.GoidichvuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoidichvuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoidichvuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoidichvuPayload>
          }
          aggregate: {
            args: Prisma.GoidichvuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoidichvu>
          }
          groupBy: {
            args: Prisma.GoidichvuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoidichvuGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoidichvuCountArgs<ExtArgs>,
            result: $Utils.Optional<GoidichvuCountAggregateOutputType> | number
          }
        }
      }
      Diadiem: {
        payload: Prisma.$DiadiemPayload<ExtArgs>
        fields: Prisma.DiadiemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiadiemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiadiemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          findFirst: {
            args: Prisma.DiadiemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiadiemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          findMany: {
            args: Prisma.DiadiemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>[]
          }
          create: {
            args: Prisma.DiadiemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          createMany: {
            args: Prisma.DiadiemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiadiemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          update: {
            args: Prisma.DiadiemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          deleteMany: {
            args: Prisma.DiadiemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiadiemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiadiemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiadiemPayload>
          }
          aggregate: {
            args: Prisma.DiadiemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiadiem>
          }
          groupBy: {
            args: Prisma.DiadiemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiadiemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiadiemCountArgs<ExtArgs>,
            result: $Utils.Optional<DiadiemCountAggregateOutputType> | number
          }
        }
      }
      Danhgia: {
        payload: Prisma.$DanhgiaPayload<ExtArgs>
        fields: Prisma.DanhgiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DanhgiaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DanhgiaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          findFirst: {
            args: Prisma.DanhgiaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DanhgiaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          findMany: {
            args: Prisma.DanhgiaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>[]
          }
          create: {
            args: Prisma.DanhgiaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          createMany: {
            args: Prisma.DanhgiaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DanhgiaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          update: {
            args: Prisma.DanhgiaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          deleteMany: {
            args: Prisma.DanhgiaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DanhgiaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DanhgiaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DanhgiaPayload>
          }
          aggregate: {
            args: Prisma.DanhgiaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDanhgia>
          }
          groupBy: {
            args: Prisma.DanhgiaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DanhgiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DanhgiaCountArgs<ExtArgs>,
            result: $Utils.Optional<DanhgiaCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Thanhtoan: {
        payload: Prisma.$ThanhtoanPayload<ExtArgs>
        fields: Prisma.ThanhtoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThanhtoanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThanhtoanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          findFirst: {
            args: Prisma.ThanhtoanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThanhtoanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          findMany: {
            args: Prisma.ThanhtoanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>[]
          }
          create: {
            args: Prisma.ThanhtoanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          createMany: {
            args: Prisma.ThanhtoanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThanhtoanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          update: {
            args: Prisma.ThanhtoanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          deleteMany: {
            args: Prisma.ThanhtoanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThanhtoanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThanhtoanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThanhtoanPayload>
          }
          aggregate: {
            args: Prisma.ThanhtoanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThanhtoan>
          }
          groupBy: {
            args: Prisma.ThanhtoanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThanhtoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThanhtoanCountArgs<ExtArgs>,
            result: $Utils.Optional<ThanhtoanCountAggregateOutputType> | number
          }
        }
      }
      Hoadon: {
        payload: Prisma.$HoadonPayload<ExtArgs>
        fields: Prisma.HoadonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoadonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoadonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          findFirst: {
            args: Prisma.HoadonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoadonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          findMany: {
            args: Prisma.HoadonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>[]
          }
          create: {
            args: Prisma.HoadonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          createMany: {
            args: Prisma.HoadonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HoadonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          update: {
            args: Prisma.HoadonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          deleteMany: {
            args: Prisma.HoadonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HoadonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HoadonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HoadonPayload>
          }
          aggregate: {
            args: Prisma.HoadonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHoadon>
          }
          groupBy: {
            args: Prisma.HoadonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HoadonGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoadonCountArgs<ExtArgs>,
            result: $Utils.Optional<HoadonCountAggregateOutputType> | number
          }
        }
      }
      gopy: {
        payload: Prisma.$gopyPayload<ExtArgs>
        fields: Prisma.gopyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gopyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gopyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          findFirst: {
            args: Prisma.gopyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gopyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          findMany: {
            args: Prisma.gopyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>[]
          }
          create: {
            args: Prisma.gopyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          createMany: {
            args: Prisma.gopyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.gopyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          update: {
            args: Prisma.gopyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          deleteMany: {
            args: Prisma.gopyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.gopyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.gopyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gopyPayload>
          }
          aggregate: {
            args: Prisma.GopyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGopy>
          }
          groupBy: {
            args: Prisma.gopyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GopyGroupByOutputType>[]
          }
          count: {
            args: Prisma.gopyCountArgs<ExtArgs>,
            result: $Utils.Optional<GopyCountAggregateOutputType> | number
          }
        }
      }
      Noidung: {
        payload: Prisma.$NoidungPayload<ExtArgs>
        fields: Prisma.NoidungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoidungFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoidungFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          findFirst: {
            args: Prisma.NoidungFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoidungFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          findMany: {
            args: Prisma.NoidungFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>[]
          }
          create: {
            args: Prisma.NoidungCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          createMany: {
            args: Prisma.NoidungCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NoidungDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          update: {
            args: Prisma.NoidungUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          deleteMany: {
            args: Prisma.NoidungDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NoidungUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NoidungUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NoidungPayload>
          }
          aggregate: {
            args: Prisma.NoidungAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNoidung>
          }
          groupBy: {
            args: Prisma.NoidungGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NoidungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoidungCountArgs<ExtArgs>,
            result: $Utils.Optional<NoidungCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Lichtrinh: number
    Hoadon: number
    Danhgia: number
    Booking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lichtrinh?: boolean | UserCountOutputTypeCountLichtrinhArgs
    Hoadon?: boolean | UserCountOutputTypeCountHoadonArgs
    Danhgia?: boolean | UserCountOutputTypeCountDanhgiaArgs
    Booking?: boolean | UserCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichtrinhWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoadonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDanhgiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanhgiaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type LichtrinhCountOutputType
   */

  export type LichtrinhCountOutputType = {
    Hoadon: number
    LichtrinhCT: number
    Danhgia: number
  }

  export type LichtrinhCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hoadon?: boolean | LichtrinhCountOutputTypeCountHoadonArgs
    LichtrinhCT?: boolean | LichtrinhCountOutputTypeCountLichtrinhCTArgs
    Danhgia?: boolean | LichtrinhCountOutputTypeCountDanhgiaArgs
  }

  // Custom InputTypes
  /**
   * LichtrinhCountOutputType without action
   */
  export type LichtrinhCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCountOutputType
     */
    select?: LichtrinhCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LichtrinhCountOutputType without action
   */
  export type LichtrinhCountOutputTypeCountHoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoadonWhereInput
  }

  /**
   * LichtrinhCountOutputType without action
   */
  export type LichtrinhCountOutputTypeCountLichtrinhCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichtrinhCTWhereInput
  }

  /**
   * LichtrinhCountOutputType without action
   */
  export type LichtrinhCountOutputTypeCountDanhgiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanhgiaWhereInput
  }


  /**
   * Count Type GoidichvuCountOutputType
   */

  export type GoidichvuCountOutputType = {
    LichtrinhCT: number
    Booking: number
  }

  export type GoidichvuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LichtrinhCT?: boolean | GoidichvuCountOutputTypeCountLichtrinhCTArgs
    Booking?: boolean | GoidichvuCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * GoidichvuCountOutputType without action
   */
  export type GoidichvuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoidichvuCountOutputType
     */
    select?: GoidichvuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoidichvuCountOutputType without action
   */
  export type GoidichvuCountOutputTypeCountLichtrinhCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichtrinhCTWhereInput
  }

  /**
   * GoidichvuCountOutputType without action
   */
  export type GoidichvuCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type DiadiemCountOutputType
   */

  export type DiadiemCountOutputType = {
    Goidichvu: number
  }

  export type DiadiemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goidichvu?: boolean | DiadiemCountOutputTypeCountGoidichvuArgs
  }

  // Custom InputTypes
  /**
   * DiadiemCountOutputType without action
   */
  export type DiadiemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiadiemCountOutputType
     */
    select?: DiadiemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiadiemCountOutputType without action
   */
  export type DiadiemCountOutputTypeCountGoidichvuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoidichvuWhereInput
  }


  /**
   * Count Type ThanhtoanCountOutputType
   */

  export type ThanhtoanCountOutputType = {
    Hoadon: number
  }

  export type ThanhtoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hoadon?: boolean | ThanhtoanCountOutputTypeCountHoadonArgs
  }

  // Custom InputTypes
  /**
   * ThanhtoanCountOutputType without action
   */
  export type ThanhtoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThanhtoanCountOutputType
     */
    select?: ThanhtoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThanhtoanCountOutputType without action
   */
  export type ThanhtoanCountOutputTypeCountHoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoadonWhereInput
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
    Role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    Role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    matkhau: string | null
    sodienthoai: string | null
    diachi: string | null
    trangthai: string | null
    creatAT: Date | null
    updateAt: Date | null
    isLocked: boolean | null
    Role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    matkhau: string | null
    sodienthoai: string | null
    diachi: string | null
    trangthai: string | null
    creatAT: Date | null
    updateAt: Date | null
    isLocked: boolean | null
    Role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    hoten: number
    email: number
    matkhau: number
    sodienthoai: number
    diachi: number
    trangthai: number
    creatAT: number
    updateAt: number
    isLocked: number
    Role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    Role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    Role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    matkhau?: true
    sodienthoai?: true
    diachi?: true
    trangthai?: true
    creatAT?: true
    updateAt?: true
    isLocked?: true
    Role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    matkhau?: true
    sodienthoai?: true
    diachi?: true
    trangthai?: true
    creatAT?: true
    updateAt?: true
    isLocked?: true
    Role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    matkhau?: true
    sodienthoai?: true
    diachi?: true
    trangthai?: true
    creatAT?: true
    updateAt?: true
    isLocked?: true
    Role_id?: true
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
    hoten: string | null
    email: string | null
    matkhau: string | null
    sodienthoai: string | null
    diachi: string | null
    trangthai: string | null
    creatAT: Date
    updateAt: Date
    isLocked: boolean
    Role_id: number
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
    hoten?: boolean
    email?: boolean
    matkhau?: boolean
    sodienthoai?: boolean
    diachi?: boolean
    trangthai?: boolean
    creatAT?: boolean
    updateAt?: boolean
    isLocked?: boolean
    Role_id?: boolean
    Role?: boolean | User$RoleArgs<ExtArgs>
    Lichtrinh?: boolean | User$LichtrinhArgs<ExtArgs>
    Hoadon?: boolean | User$HoadonArgs<ExtArgs>
    Danhgia?: boolean | User$DanhgiaArgs<ExtArgs>
    Booking?: boolean | User$BookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    hoten?: boolean
    email?: boolean
    matkhau?: boolean
    sodienthoai?: boolean
    diachi?: boolean
    trangthai?: boolean
    creatAT?: boolean
    updateAt?: boolean
    isLocked?: boolean
    Role_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role?: boolean | User$RoleArgs<ExtArgs>
    Lichtrinh?: boolean | User$LichtrinhArgs<ExtArgs>
    Hoadon?: boolean | User$HoadonArgs<ExtArgs>
    Danhgia?: boolean | User$DanhgiaArgs<ExtArgs>
    Booking?: boolean | User$BookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Role: Prisma.$RolePayload<ExtArgs> | null
      Lichtrinh: Prisma.$LichtrinhPayload<ExtArgs>[]
      Hoadon: Prisma.$HoadonPayload<ExtArgs>[]
      Danhgia: Prisma.$DanhgiaPayload<ExtArgs>[]
      Booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hoten: string | null
      email: string | null
      matkhau: string | null
      sodienthoai: string | null
      diachi: string | null
      trangthai: string | null
      creatAT: Date
      updateAt: Date
      isLocked: boolean
      Role_id: number
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Role<T extends User$RoleArgs<ExtArgs> = {}>(args?: Subset<T, User$RoleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Lichtrinh<T extends User$LichtrinhArgs<ExtArgs> = {}>(args?: Subset<T, User$LichtrinhArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findMany'> | Null>;

    Hoadon<T extends User$HoadonArgs<ExtArgs> = {}>(args?: Subset<T, User$HoadonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findMany'> | Null>;

    Danhgia<T extends User$DanhgiaArgs<ExtArgs> = {}>(args?: Subset<T, User$DanhgiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findMany'> | Null>;

    Booking<T extends User$BookingArgs<ExtArgs> = {}>(args?: Subset<T, User$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly hoten: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly matkhau: FieldRef<"User", 'String'>
    readonly sodienthoai: FieldRef<"User", 'String'>
    readonly diachi: FieldRef<"User", 'String'>
    readonly trangthai: FieldRef<"User", 'String'>
    readonly creatAT: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly isLocked: FieldRef<"User", 'Boolean'>
    readonly Role_id: FieldRef<"User", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.Role
   */
  export type User$RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.Lichtrinh
   */
  export type User$LichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    where?: LichtrinhWhereInput
    orderBy?: LichtrinhOrderByWithRelationInput | LichtrinhOrderByWithRelationInput[]
    cursor?: LichtrinhWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichtrinhScalarFieldEnum | LichtrinhScalarFieldEnum[]
  }

  /**
   * User.Hoadon
   */
  export type User$HoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    where?: HoadonWhereInput
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    cursor?: HoadonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * User.Danhgia
   */
  export type User$DanhgiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    where?: DanhgiaWhereInput
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    cursor?: DanhgiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DanhgiaScalarFieldEnum | DanhgiaScalarFieldEnum[]
  }

  /**
   * User.Booking
   */
  export type User$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    tenrole: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    tenrole: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    tenrole: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    tenrole?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    tenrole?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    tenrole?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    tenrole: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenrole?: boolean
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>


  export type RoleSelectScalar = {
    id?: boolean
    tenrole?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenrole: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly tenrole: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data?: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Lichtrinh
   */

  export type AggregateLichtrinh = {
    _count: LichtrinhCountAggregateOutputType | null
    _avg: LichtrinhAvgAggregateOutputType | null
    _sum: LichtrinhSumAggregateOutputType | null
    _min: LichtrinhMinAggregateOutputType | null
    _max: LichtrinhMaxAggregateOutputType | null
  }

  export type LichtrinhAvgAggregateOutputType = {
    id: number | null
    User_id: number | null
  }

  export type LichtrinhSumAggregateOutputType = {
    id: number | null
    User_id: number | null
  }

  export type LichtrinhMinAggregateOutputType = {
    id: number | null
    tenlichtrinh: string | null
    ngaytao: Date | null
    ghichu: string | null
    User_id: number | null
  }

  export type LichtrinhMaxAggregateOutputType = {
    id: number | null
    tenlichtrinh: string | null
    ngaytao: Date | null
    ghichu: string | null
    User_id: number | null
  }

  export type LichtrinhCountAggregateOutputType = {
    id: number
    tenlichtrinh: number
    ngaytao: number
    ghichu: number
    User_id: number
    _all: number
  }


  export type LichtrinhAvgAggregateInputType = {
    id?: true
    User_id?: true
  }

  export type LichtrinhSumAggregateInputType = {
    id?: true
    User_id?: true
  }

  export type LichtrinhMinAggregateInputType = {
    id?: true
    tenlichtrinh?: true
    ngaytao?: true
    ghichu?: true
    User_id?: true
  }

  export type LichtrinhMaxAggregateInputType = {
    id?: true
    tenlichtrinh?: true
    ngaytao?: true
    ghichu?: true
    User_id?: true
  }

  export type LichtrinhCountAggregateInputType = {
    id?: true
    tenlichtrinh?: true
    ngaytao?: true
    ghichu?: true
    User_id?: true
    _all?: true
  }

  export type LichtrinhAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lichtrinh to aggregate.
     */
    where?: LichtrinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lichtrinhs to fetch.
     */
    orderBy?: LichtrinhOrderByWithRelationInput | LichtrinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LichtrinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lichtrinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lichtrinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lichtrinhs
    **/
    _count?: true | LichtrinhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LichtrinhAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LichtrinhSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LichtrinhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LichtrinhMaxAggregateInputType
  }

  export type GetLichtrinhAggregateType<T extends LichtrinhAggregateArgs> = {
        [P in keyof T & keyof AggregateLichtrinh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLichtrinh[P]>
      : GetScalarType<T[P], AggregateLichtrinh[P]>
  }




  export type LichtrinhGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichtrinhWhereInput
    orderBy?: LichtrinhOrderByWithAggregationInput | LichtrinhOrderByWithAggregationInput[]
    by: LichtrinhScalarFieldEnum[] | LichtrinhScalarFieldEnum
    having?: LichtrinhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LichtrinhCountAggregateInputType | true
    _avg?: LichtrinhAvgAggregateInputType
    _sum?: LichtrinhSumAggregateInputType
    _min?: LichtrinhMinAggregateInputType
    _max?: LichtrinhMaxAggregateInputType
  }

  export type LichtrinhGroupByOutputType = {
    id: number
    tenlichtrinh: string | null
    ngaytao: Date
    ghichu: string | null
    User_id: number
    _count: LichtrinhCountAggregateOutputType | null
    _avg: LichtrinhAvgAggregateOutputType | null
    _sum: LichtrinhSumAggregateOutputType | null
    _min: LichtrinhMinAggregateOutputType | null
    _max: LichtrinhMaxAggregateOutputType | null
  }

  type GetLichtrinhGroupByPayload<T extends LichtrinhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LichtrinhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LichtrinhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LichtrinhGroupByOutputType[P]>
            : GetScalarType<T[P], LichtrinhGroupByOutputType[P]>
        }
      >
    >


  export type LichtrinhSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenlichtrinh?: boolean
    ngaytao?: boolean
    ghichu?: boolean
    User_id?: boolean
    User?: boolean | Lichtrinh$UserArgs<ExtArgs>
    Hoadon?: boolean | Lichtrinh$HoadonArgs<ExtArgs>
    LichtrinhCT?: boolean | Lichtrinh$LichtrinhCTArgs<ExtArgs>
    Danhgia?: boolean | Lichtrinh$DanhgiaArgs<ExtArgs>
    _count?: boolean | LichtrinhCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lichtrinh"]>


  export type LichtrinhSelectScalar = {
    id?: boolean
    tenlichtrinh?: boolean
    ngaytao?: boolean
    ghichu?: boolean
    User_id?: boolean
  }

  export type LichtrinhInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Lichtrinh$UserArgs<ExtArgs>
    Hoadon?: boolean | Lichtrinh$HoadonArgs<ExtArgs>
    LichtrinhCT?: boolean | Lichtrinh$LichtrinhCTArgs<ExtArgs>
    Danhgia?: boolean | Lichtrinh$DanhgiaArgs<ExtArgs>
    _count?: boolean | LichtrinhCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LichtrinhPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lichtrinh"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Hoadon: Prisma.$HoadonPayload<ExtArgs>[]
      LichtrinhCT: Prisma.$LichtrinhCTPayload<ExtArgs>[]
      Danhgia: Prisma.$DanhgiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenlichtrinh: string | null
      ngaytao: Date
      ghichu: string | null
      User_id: number
    }, ExtArgs["result"]["lichtrinh"]>
    composites: {}
  }

  type LichtrinhGetPayload<S extends boolean | null | undefined | LichtrinhDefaultArgs> = $Result.GetResult<Prisma.$LichtrinhPayload, S>

  type LichtrinhCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LichtrinhFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LichtrinhCountAggregateInputType | true
    }

  export interface LichtrinhDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lichtrinh'], meta: { name: 'Lichtrinh' } }
    /**
     * Find zero or one Lichtrinh that matches the filter.
     * @param {LichtrinhFindUniqueArgs} args - Arguments to find a Lichtrinh
     * @example
     * // Get one Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LichtrinhFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhFindUniqueArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lichtrinh that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LichtrinhFindUniqueOrThrowArgs} args - Arguments to find a Lichtrinh
     * @example
     * // Get one Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LichtrinhFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lichtrinh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhFindFirstArgs} args - Arguments to find a Lichtrinh
     * @example
     * // Get one Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LichtrinhFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhFindFirstArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lichtrinh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhFindFirstOrThrowArgs} args - Arguments to find a Lichtrinh
     * @example
     * // Get one Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LichtrinhFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lichtrinhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lichtrinhs
     * const lichtrinhs = await prisma.lichtrinh.findMany()
     * 
     * // Get first 10 Lichtrinhs
     * const lichtrinhs = await prisma.lichtrinh.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lichtrinhWithIdOnly = await prisma.lichtrinh.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LichtrinhFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lichtrinh.
     * @param {LichtrinhCreateArgs} args - Arguments to create a Lichtrinh.
     * @example
     * // Create one Lichtrinh
     * const Lichtrinh = await prisma.lichtrinh.create({
     *   data: {
     *     // ... data to create a Lichtrinh
     *   }
     * })
     * 
    **/
    create<T extends LichtrinhCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCreateArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lichtrinhs.
     * @param {LichtrinhCreateManyArgs} args - Arguments to create many Lichtrinhs.
     * @example
     * // Create many Lichtrinhs
     * const lichtrinh = await prisma.lichtrinh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LichtrinhCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lichtrinh.
     * @param {LichtrinhDeleteArgs} args - Arguments to delete one Lichtrinh.
     * @example
     * // Delete one Lichtrinh
     * const Lichtrinh = await prisma.lichtrinh.delete({
     *   where: {
     *     // ... filter to delete one Lichtrinh
     *   }
     * })
     * 
    **/
    delete<T extends LichtrinhDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhDeleteArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lichtrinh.
     * @param {LichtrinhUpdateArgs} args - Arguments to update one Lichtrinh.
     * @example
     * // Update one Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LichtrinhUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhUpdateArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lichtrinhs.
     * @param {LichtrinhDeleteManyArgs} args - Arguments to filter Lichtrinhs to delete.
     * @example
     * // Delete a few Lichtrinhs
     * const { count } = await prisma.lichtrinh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LichtrinhDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lichtrinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lichtrinhs
     * const lichtrinh = await prisma.lichtrinh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LichtrinhUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lichtrinh.
     * @param {LichtrinhUpsertArgs} args - Arguments to update or create a Lichtrinh.
     * @example
     * // Update or create a Lichtrinh
     * const lichtrinh = await prisma.lichtrinh.upsert({
     *   create: {
     *     // ... data to create a Lichtrinh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lichtrinh we want to update
     *   }
     * })
    **/
    upsert<T extends LichtrinhUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhUpsertArgs<ExtArgs>>
    ): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lichtrinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCountArgs} args - Arguments to filter Lichtrinhs to count.
     * @example
     * // Count the number of Lichtrinhs
     * const count = await prisma.lichtrinh.count({
     *   where: {
     *     // ... the filter for the Lichtrinhs we want to count
     *   }
     * })
    **/
    count<T extends LichtrinhCountArgs>(
      args?: Subset<T, LichtrinhCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LichtrinhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lichtrinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LichtrinhAggregateArgs>(args: Subset<T, LichtrinhAggregateArgs>): Prisma.PrismaPromise<GetLichtrinhAggregateType<T>>

    /**
     * Group by Lichtrinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhGroupByArgs} args - Group by arguments.
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
      T extends LichtrinhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LichtrinhGroupByArgs['orderBy'] }
        : { orderBy?: LichtrinhGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LichtrinhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLichtrinhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lichtrinh model
   */
  readonly fields: LichtrinhFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lichtrinh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LichtrinhClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Lichtrinh$UserArgs<ExtArgs> = {}>(args?: Subset<T, Lichtrinh$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Hoadon<T extends Lichtrinh$HoadonArgs<ExtArgs> = {}>(args?: Subset<T, Lichtrinh$HoadonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findMany'> | Null>;

    LichtrinhCT<T extends Lichtrinh$LichtrinhCTArgs<ExtArgs> = {}>(args?: Subset<T, Lichtrinh$LichtrinhCTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findMany'> | Null>;

    Danhgia<T extends Lichtrinh$DanhgiaArgs<ExtArgs> = {}>(args?: Subset<T, Lichtrinh$DanhgiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lichtrinh model
   */ 
  interface LichtrinhFieldRefs {
    readonly id: FieldRef<"Lichtrinh", 'Int'>
    readonly tenlichtrinh: FieldRef<"Lichtrinh", 'String'>
    readonly ngaytao: FieldRef<"Lichtrinh", 'DateTime'>
    readonly ghichu: FieldRef<"Lichtrinh", 'String'>
    readonly User_id: FieldRef<"Lichtrinh", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lichtrinh findUnique
   */
  export type LichtrinhFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter, which Lichtrinh to fetch.
     */
    where: LichtrinhWhereUniqueInput
  }

  /**
   * Lichtrinh findUniqueOrThrow
   */
  export type LichtrinhFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter, which Lichtrinh to fetch.
     */
    where: LichtrinhWhereUniqueInput
  }

  /**
   * Lichtrinh findFirst
   */
  export type LichtrinhFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter, which Lichtrinh to fetch.
     */
    where?: LichtrinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lichtrinhs to fetch.
     */
    orderBy?: LichtrinhOrderByWithRelationInput | LichtrinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lichtrinhs.
     */
    cursor?: LichtrinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lichtrinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lichtrinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lichtrinhs.
     */
    distinct?: LichtrinhScalarFieldEnum | LichtrinhScalarFieldEnum[]
  }

  /**
   * Lichtrinh findFirstOrThrow
   */
  export type LichtrinhFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter, which Lichtrinh to fetch.
     */
    where?: LichtrinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lichtrinhs to fetch.
     */
    orderBy?: LichtrinhOrderByWithRelationInput | LichtrinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lichtrinhs.
     */
    cursor?: LichtrinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lichtrinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lichtrinhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lichtrinhs.
     */
    distinct?: LichtrinhScalarFieldEnum | LichtrinhScalarFieldEnum[]
  }

  /**
   * Lichtrinh findMany
   */
  export type LichtrinhFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter, which Lichtrinhs to fetch.
     */
    where?: LichtrinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lichtrinhs to fetch.
     */
    orderBy?: LichtrinhOrderByWithRelationInput | LichtrinhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lichtrinhs.
     */
    cursor?: LichtrinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lichtrinhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lichtrinhs.
     */
    skip?: number
    distinct?: LichtrinhScalarFieldEnum | LichtrinhScalarFieldEnum[]
  }

  /**
   * Lichtrinh create
   */
  export type LichtrinhCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * The data needed to create a Lichtrinh.
     */
    data: XOR<LichtrinhCreateInput, LichtrinhUncheckedCreateInput>
  }

  /**
   * Lichtrinh createMany
   */
  export type LichtrinhCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lichtrinhs.
     */
    data: LichtrinhCreateManyInput | LichtrinhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lichtrinh update
   */
  export type LichtrinhUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * The data needed to update a Lichtrinh.
     */
    data: XOR<LichtrinhUpdateInput, LichtrinhUncheckedUpdateInput>
    /**
     * Choose, which Lichtrinh to update.
     */
    where: LichtrinhWhereUniqueInput
  }

  /**
   * Lichtrinh updateMany
   */
  export type LichtrinhUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lichtrinhs.
     */
    data: XOR<LichtrinhUpdateManyMutationInput, LichtrinhUncheckedUpdateManyInput>
    /**
     * Filter which Lichtrinhs to update
     */
    where?: LichtrinhWhereInput
  }

  /**
   * Lichtrinh upsert
   */
  export type LichtrinhUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * The filter to search for the Lichtrinh to update in case it exists.
     */
    where: LichtrinhWhereUniqueInput
    /**
     * In case the Lichtrinh found by the `where` argument doesn't exist, create a new Lichtrinh with this data.
     */
    create: XOR<LichtrinhCreateInput, LichtrinhUncheckedCreateInput>
    /**
     * In case the Lichtrinh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LichtrinhUpdateInput, LichtrinhUncheckedUpdateInput>
  }

  /**
   * Lichtrinh delete
   */
  export type LichtrinhDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    /**
     * Filter which Lichtrinh to delete.
     */
    where: LichtrinhWhereUniqueInput
  }

  /**
   * Lichtrinh deleteMany
   */
  export type LichtrinhDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lichtrinhs to delete
     */
    where?: LichtrinhWhereInput
  }

  /**
   * Lichtrinh.User
   */
  export type Lichtrinh$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lichtrinh.Hoadon
   */
  export type Lichtrinh$HoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    where?: HoadonWhereInput
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    cursor?: HoadonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * Lichtrinh.LichtrinhCT
   */
  export type Lichtrinh$LichtrinhCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    where?: LichtrinhCTWhereInput
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    cursor?: LichtrinhCTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichtrinhCTScalarFieldEnum | LichtrinhCTScalarFieldEnum[]
  }

  /**
   * Lichtrinh.Danhgia
   */
  export type Lichtrinh$DanhgiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    where?: DanhgiaWhereInput
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    cursor?: DanhgiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DanhgiaScalarFieldEnum | DanhgiaScalarFieldEnum[]
  }

  /**
   * Lichtrinh without action
   */
  export type LichtrinhDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
  }


  /**
   * Model LichtrinhCT
   */

  export type AggregateLichtrinhCT = {
    _count: LichtrinhCTCountAggregateOutputType | null
    _avg: LichtrinhCTAvgAggregateOutputType | null
    _sum: LichtrinhCTSumAggregateOutputType | null
    _min: LichtrinhCTMinAggregateOutputType | null
    _max: LichtrinhCTMaxAggregateOutputType | null
  }

  export type LichtrinhCTAvgAggregateOutputType = {
    id: number | null
    soluong: number | null
    thanhtien: number | null
    Lichtrinh_id: number | null
    Goidichvu_id: number | null
  }

  export type LichtrinhCTSumAggregateOutputType = {
    id: number | null
    soluong: number | null
    thanhtien: number | null
    Lichtrinh_id: number | null
    Goidichvu_id: number | null
  }

  export type LichtrinhCTMinAggregateOutputType = {
    id: number | null
    soluong: number | null
    thanhtien: number | null
    noikhoihanh: string | null
    ngaykhoihanh: Date | null
    lichtrinhdichuyen: string | null
    Lichtrinh_id: number | null
    Goidichvu_id: number | null
  }

  export type LichtrinhCTMaxAggregateOutputType = {
    id: number | null
    soluong: number | null
    thanhtien: number | null
    noikhoihanh: string | null
    ngaykhoihanh: Date | null
    lichtrinhdichuyen: string | null
    Lichtrinh_id: number | null
    Goidichvu_id: number | null
  }

  export type LichtrinhCTCountAggregateOutputType = {
    id: number
    soluong: number
    thanhtien: number
    noikhoihanh: number
    ngaykhoihanh: number
    lichtrinhdichuyen: number
    Lichtrinh_id: number
    Goidichvu_id: number
    _all: number
  }


  export type LichtrinhCTAvgAggregateInputType = {
    id?: true
    soluong?: true
    thanhtien?: true
    Lichtrinh_id?: true
    Goidichvu_id?: true
  }

  export type LichtrinhCTSumAggregateInputType = {
    id?: true
    soluong?: true
    thanhtien?: true
    Lichtrinh_id?: true
    Goidichvu_id?: true
  }

  export type LichtrinhCTMinAggregateInputType = {
    id?: true
    soluong?: true
    thanhtien?: true
    noikhoihanh?: true
    ngaykhoihanh?: true
    lichtrinhdichuyen?: true
    Lichtrinh_id?: true
    Goidichvu_id?: true
  }

  export type LichtrinhCTMaxAggregateInputType = {
    id?: true
    soluong?: true
    thanhtien?: true
    noikhoihanh?: true
    ngaykhoihanh?: true
    lichtrinhdichuyen?: true
    Lichtrinh_id?: true
    Goidichvu_id?: true
  }

  export type LichtrinhCTCountAggregateInputType = {
    id?: true
    soluong?: true
    thanhtien?: true
    noikhoihanh?: true
    ngaykhoihanh?: true
    lichtrinhdichuyen?: true
    Lichtrinh_id?: true
    Goidichvu_id?: true
    _all?: true
  }

  export type LichtrinhCTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichtrinhCT to aggregate.
     */
    where?: LichtrinhCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichtrinhCTS to fetch.
     */
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LichtrinhCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichtrinhCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichtrinhCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LichtrinhCTS
    **/
    _count?: true | LichtrinhCTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LichtrinhCTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LichtrinhCTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LichtrinhCTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LichtrinhCTMaxAggregateInputType
  }

  export type GetLichtrinhCTAggregateType<T extends LichtrinhCTAggregateArgs> = {
        [P in keyof T & keyof AggregateLichtrinhCT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLichtrinhCT[P]>
      : GetScalarType<T[P], AggregateLichtrinhCT[P]>
  }




  export type LichtrinhCTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichtrinhCTWhereInput
    orderBy?: LichtrinhCTOrderByWithAggregationInput | LichtrinhCTOrderByWithAggregationInput[]
    by: LichtrinhCTScalarFieldEnum[] | LichtrinhCTScalarFieldEnum
    having?: LichtrinhCTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LichtrinhCTCountAggregateInputType | true
    _avg?: LichtrinhCTAvgAggregateInputType
    _sum?: LichtrinhCTSumAggregateInputType
    _min?: LichtrinhCTMinAggregateInputType
    _max?: LichtrinhCTMaxAggregateInputType
  }

  export type LichtrinhCTGroupByOutputType = {
    id: number
    soluong: number
    thanhtien: number
    noikhoihanh: string | null
    ngaykhoihanh: Date | null
    lichtrinhdichuyen: string | null
    Lichtrinh_id: number
    Goidichvu_id: number
    _count: LichtrinhCTCountAggregateOutputType | null
    _avg: LichtrinhCTAvgAggregateOutputType | null
    _sum: LichtrinhCTSumAggregateOutputType | null
    _min: LichtrinhCTMinAggregateOutputType | null
    _max: LichtrinhCTMaxAggregateOutputType | null
  }

  type GetLichtrinhCTGroupByPayload<T extends LichtrinhCTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LichtrinhCTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LichtrinhCTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LichtrinhCTGroupByOutputType[P]>
            : GetScalarType<T[P], LichtrinhCTGroupByOutputType[P]>
        }
      >
    >


  export type LichtrinhCTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soluong?: boolean
    thanhtien?: boolean
    noikhoihanh?: boolean
    ngaykhoihanh?: boolean
    lichtrinhdichuyen?: boolean
    Lichtrinh_id?: boolean
    Goidichvu_id?: boolean
    Lichtrinh?: boolean | LichtrinhCT$LichtrinhArgs<ExtArgs>
    Goidichvu?: boolean | LichtrinhCT$GoidichvuArgs<ExtArgs>
  }, ExtArgs["result"]["lichtrinhCT"]>


  export type LichtrinhCTSelectScalar = {
    id?: boolean
    soluong?: boolean
    thanhtien?: boolean
    noikhoihanh?: boolean
    ngaykhoihanh?: boolean
    lichtrinhdichuyen?: boolean
    Lichtrinh_id?: boolean
    Goidichvu_id?: boolean
  }

  export type LichtrinhCTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lichtrinh?: boolean | LichtrinhCT$LichtrinhArgs<ExtArgs>
    Goidichvu?: boolean | LichtrinhCT$GoidichvuArgs<ExtArgs>
  }

  export type $LichtrinhCTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LichtrinhCT"
    objects: {
      Lichtrinh: Prisma.$LichtrinhPayload<ExtArgs> | null
      Goidichvu: Prisma.$GoidichvuPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      soluong: number
      thanhtien: number
      noikhoihanh: string | null
      ngaykhoihanh: Date | null
      lichtrinhdichuyen: string | null
      Lichtrinh_id: number
      Goidichvu_id: number
    }, ExtArgs["result"]["lichtrinhCT"]>
    composites: {}
  }

  type LichtrinhCTGetPayload<S extends boolean | null | undefined | LichtrinhCTDefaultArgs> = $Result.GetResult<Prisma.$LichtrinhCTPayload, S>

  type LichtrinhCTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LichtrinhCTFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LichtrinhCTCountAggregateInputType | true
    }

  export interface LichtrinhCTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LichtrinhCT'], meta: { name: 'LichtrinhCT' } }
    /**
     * Find zero or one LichtrinhCT that matches the filter.
     * @param {LichtrinhCTFindUniqueArgs} args - Arguments to find a LichtrinhCT
     * @example
     * // Get one LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LichtrinhCTFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTFindUniqueArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LichtrinhCT that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LichtrinhCTFindUniqueOrThrowArgs} args - Arguments to find a LichtrinhCT
     * @example
     * // Get one LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LichtrinhCTFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LichtrinhCT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTFindFirstArgs} args - Arguments to find a LichtrinhCT
     * @example
     * // Get one LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LichtrinhCTFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTFindFirstArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LichtrinhCT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTFindFirstOrThrowArgs} args - Arguments to find a LichtrinhCT
     * @example
     * // Get one LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LichtrinhCTFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LichtrinhCTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LichtrinhCTS
     * const lichtrinhCTS = await prisma.lichtrinhCT.findMany()
     * 
     * // Get first 10 LichtrinhCTS
     * const lichtrinhCTS = await prisma.lichtrinhCT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lichtrinhCTWithIdOnly = await prisma.lichtrinhCT.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LichtrinhCTFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LichtrinhCT.
     * @param {LichtrinhCTCreateArgs} args - Arguments to create a LichtrinhCT.
     * @example
     * // Create one LichtrinhCT
     * const LichtrinhCT = await prisma.lichtrinhCT.create({
     *   data: {
     *     // ... data to create a LichtrinhCT
     *   }
     * })
     * 
    **/
    create<T extends LichtrinhCTCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTCreateArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LichtrinhCTS.
     * @param {LichtrinhCTCreateManyArgs} args - Arguments to create many LichtrinhCTS.
     * @example
     * // Create many LichtrinhCTS
     * const lichtrinhCT = await prisma.lichtrinhCT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LichtrinhCTCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LichtrinhCT.
     * @param {LichtrinhCTDeleteArgs} args - Arguments to delete one LichtrinhCT.
     * @example
     * // Delete one LichtrinhCT
     * const LichtrinhCT = await prisma.lichtrinhCT.delete({
     *   where: {
     *     // ... filter to delete one LichtrinhCT
     *   }
     * })
     * 
    **/
    delete<T extends LichtrinhCTDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTDeleteArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LichtrinhCT.
     * @param {LichtrinhCTUpdateArgs} args - Arguments to update one LichtrinhCT.
     * @example
     * // Update one LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LichtrinhCTUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTUpdateArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LichtrinhCTS.
     * @param {LichtrinhCTDeleteManyArgs} args - Arguments to filter LichtrinhCTS to delete.
     * @example
     * // Delete a few LichtrinhCTS
     * const { count } = await prisma.lichtrinhCT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LichtrinhCTDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LichtrinhCTDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LichtrinhCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LichtrinhCTS
     * const lichtrinhCT = await prisma.lichtrinhCT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LichtrinhCTUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LichtrinhCT.
     * @param {LichtrinhCTUpsertArgs} args - Arguments to update or create a LichtrinhCT.
     * @example
     * // Update or create a LichtrinhCT
     * const lichtrinhCT = await prisma.lichtrinhCT.upsert({
     *   create: {
     *     // ... data to create a LichtrinhCT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LichtrinhCT we want to update
     *   }
     * })
    **/
    upsert<T extends LichtrinhCTUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LichtrinhCTUpsertArgs<ExtArgs>>
    ): Prisma__LichtrinhCTClient<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LichtrinhCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTCountArgs} args - Arguments to filter LichtrinhCTS to count.
     * @example
     * // Count the number of LichtrinhCTS
     * const count = await prisma.lichtrinhCT.count({
     *   where: {
     *     // ... the filter for the LichtrinhCTS we want to count
     *   }
     * })
    **/
    count<T extends LichtrinhCTCountArgs>(
      args?: Subset<T, LichtrinhCTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LichtrinhCTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LichtrinhCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LichtrinhCTAggregateArgs>(args: Subset<T, LichtrinhCTAggregateArgs>): Prisma.PrismaPromise<GetLichtrinhCTAggregateType<T>>

    /**
     * Group by LichtrinhCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichtrinhCTGroupByArgs} args - Group by arguments.
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
      T extends LichtrinhCTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LichtrinhCTGroupByArgs['orderBy'] }
        : { orderBy?: LichtrinhCTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LichtrinhCTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLichtrinhCTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LichtrinhCT model
   */
  readonly fields: LichtrinhCTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LichtrinhCT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LichtrinhCTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Lichtrinh<T extends LichtrinhCT$LichtrinhArgs<ExtArgs> = {}>(args?: Subset<T, LichtrinhCT$LichtrinhArgs<ExtArgs>>): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Goidichvu<T extends LichtrinhCT$GoidichvuArgs<ExtArgs> = {}>(args?: Subset<T, LichtrinhCT$GoidichvuArgs<ExtArgs>>): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LichtrinhCT model
   */ 
  interface LichtrinhCTFieldRefs {
    readonly id: FieldRef<"LichtrinhCT", 'Int'>
    readonly soluong: FieldRef<"LichtrinhCT", 'Int'>
    readonly thanhtien: FieldRef<"LichtrinhCT", 'Int'>
    readonly noikhoihanh: FieldRef<"LichtrinhCT", 'String'>
    readonly ngaykhoihanh: FieldRef<"LichtrinhCT", 'DateTime'>
    readonly lichtrinhdichuyen: FieldRef<"LichtrinhCT", 'String'>
    readonly Lichtrinh_id: FieldRef<"LichtrinhCT", 'Int'>
    readonly Goidichvu_id: FieldRef<"LichtrinhCT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LichtrinhCT findUnique
   */
  export type LichtrinhCTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter, which LichtrinhCT to fetch.
     */
    where: LichtrinhCTWhereUniqueInput
  }

  /**
   * LichtrinhCT findUniqueOrThrow
   */
  export type LichtrinhCTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter, which LichtrinhCT to fetch.
     */
    where: LichtrinhCTWhereUniqueInput
  }

  /**
   * LichtrinhCT findFirst
   */
  export type LichtrinhCTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter, which LichtrinhCT to fetch.
     */
    where?: LichtrinhCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichtrinhCTS to fetch.
     */
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichtrinhCTS.
     */
    cursor?: LichtrinhCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichtrinhCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichtrinhCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichtrinhCTS.
     */
    distinct?: LichtrinhCTScalarFieldEnum | LichtrinhCTScalarFieldEnum[]
  }

  /**
   * LichtrinhCT findFirstOrThrow
   */
  export type LichtrinhCTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter, which LichtrinhCT to fetch.
     */
    where?: LichtrinhCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichtrinhCTS to fetch.
     */
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichtrinhCTS.
     */
    cursor?: LichtrinhCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichtrinhCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichtrinhCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichtrinhCTS.
     */
    distinct?: LichtrinhCTScalarFieldEnum | LichtrinhCTScalarFieldEnum[]
  }

  /**
   * LichtrinhCT findMany
   */
  export type LichtrinhCTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter, which LichtrinhCTS to fetch.
     */
    where?: LichtrinhCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichtrinhCTS to fetch.
     */
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LichtrinhCTS.
     */
    cursor?: LichtrinhCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichtrinhCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichtrinhCTS.
     */
    skip?: number
    distinct?: LichtrinhCTScalarFieldEnum | LichtrinhCTScalarFieldEnum[]
  }

  /**
   * LichtrinhCT create
   */
  export type LichtrinhCTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * The data needed to create a LichtrinhCT.
     */
    data: XOR<LichtrinhCTCreateInput, LichtrinhCTUncheckedCreateInput>
  }

  /**
   * LichtrinhCT createMany
   */
  export type LichtrinhCTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LichtrinhCTS.
     */
    data: LichtrinhCTCreateManyInput | LichtrinhCTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LichtrinhCT update
   */
  export type LichtrinhCTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * The data needed to update a LichtrinhCT.
     */
    data: XOR<LichtrinhCTUpdateInput, LichtrinhCTUncheckedUpdateInput>
    /**
     * Choose, which LichtrinhCT to update.
     */
    where: LichtrinhCTWhereUniqueInput
  }

  /**
   * LichtrinhCT updateMany
   */
  export type LichtrinhCTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LichtrinhCTS.
     */
    data: XOR<LichtrinhCTUpdateManyMutationInput, LichtrinhCTUncheckedUpdateManyInput>
    /**
     * Filter which LichtrinhCTS to update
     */
    where?: LichtrinhCTWhereInput
  }

  /**
   * LichtrinhCT upsert
   */
  export type LichtrinhCTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * The filter to search for the LichtrinhCT to update in case it exists.
     */
    where: LichtrinhCTWhereUniqueInput
    /**
     * In case the LichtrinhCT found by the `where` argument doesn't exist, create a new LichtrinhCT with this data.
     */
    create: XOR<LichtrinhCTCreateInput, LichtrinhCTUncheckedCreateInput>
    /**
     * In case the LichtrinhCT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LichtrinhCTUpdateInput, LichtrinhCTUncheckedUpdateInput>
  }

  /**
   * LichtrinhCT delete
   */
  export type LichtrinhCTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    /**
     * Filter which LichtrinhCT to delete.
     */
    where: LichtrinhCTWhereUniqueInput
  }

  /**
   * LichtrinhCT deleteMany
   */
  export type LichtrinhCTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichtrinhCTS to delete
     */
    where?: LichtrinhCTWhereInput
  }

  /**
   * LichtrinhCT.Lichtrinh
   */
  export type LichtrinhCT$LichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    where?: LichtrinhWhereInput
  }

  /**
   * LichtrinhCT.Goidichvu
   */
  export type LichtrinhCT$GoidichvuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    where?: GoidichvuWhereInput
  }

  /**
   * LichtrinhCT without action
   */
  export type LichtrinhCTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
  }


  /**
   * Model Goidichvu
   */

  export type AggregateGoidichvu = {
    _count: GoidichvuCountAggregateOutputType | null
    _avg: GoidichvuAvgAggregateOutputType | null
    _sum: GoidichvuSumAggregateOutputType | null
    _min: GoidichvuMinAggregateOutputType | null
    _max: GoidichvuMaxAggregateOutputType | null
  }

  export type GoidichvuAvgAggregateOutputType = {
    id: number | null
    gia: number | null
    sochoconlai: number | null
    Diadiem_id: number | null
  }

  export type GoidichvuSumAggregateOutputType = {
    id: number | null
    gia: number | null
    sochoconlai: number | null
    Diadiem_id: number | null
  }

  export type GoidichvuMinAggregateOutputType = {
    id: number | null
    tengoi: string | null
    mota: string | null
    gia: number | null
    thoiluongngay: string | null
    trangthai: string | null
    hinhanh: string | null
    sochoconlai: number | null
    Diadiem_id: number | null
  }

  export type GoidichvuMaxAggregateOutputType = {
    id: number | null
    tengoi: string | null
    mota: string | null
    gia: number | null
    thoiluongngay: string | null
    trangthai: string | null
    hinhanh: string | null
    sochoconlai: number | null
    Diadiem_id: number | null
  }

  export type GoidichvuCountAggregateOutputType = {
    id: number
    tengoi: number
    mota: number
    gia: number
    thoiluongngay: number
    trangthai: number
    hinhanh: number
    sochoconlai: number
    Diadiem_id: number
    _all: number
  }


  export type GoidichvuAvgAggregateInputType = {
    id?: true
    gia?: true
    sochoconlai?: true
    Diadiem_id?: true
  }

  export type GoidichvuSumAggregateInputType = {
    id?: true
    gia?: true
    sochoconlai?: true
    Diadiem_id?: true
  }

  export type GoidichvuMinAggregateInputType = {
    id?: true
    tengoi?: true
    mota?: true
    gia?: true
    thoiluongngay?: true
    trangthai?: true
    hinhanh?: true
    sochoconlai?: true
    Diadiem_id?: true
  }

  export type GoidichvuMaxAggregateInputType = {
    id?: true
    tengoi?: true
    mota?: true
    gia?: true
    thoiluongngay?: true
    trangthai?: true
    hinhanh?: true
    sochoconlai?: true
    Diadiem_id?: true
  }

  export type GoidichvuCountAggregateInputType = {
    id?: true
    tengoi?: true
    mota?: true
    gia?: true
    thoiluongngay?: true
    trangthai?: true
    hinhanh?: true
    sochoconlai?: true
    Diadiem_id?: true
    _all?: true
  }

  export type GoidichvuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goidichvu to aggregate.
     */
    where?: GoidichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goidichvus to fetch.
     */
    orderBy?: GoidichvuOrderByWithRelationInput | GoidichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoidichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goidichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goidichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goidichvus
    **/
    _count?: true | GoidichvuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoidichvuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoidichvuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoidichvuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoidichvuMaxAggregateInputType
  }

  export type GetGoidichvuAggregateType<T extends GoidichvuAggregateArgs> = {
        [P in keyof T & keyof AggregateGoidichvu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoidichvu[P]>
      : GetScalarType<T[P], AggregateGoidichvu[P]>
  }




  export type GoidichvuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoidichvuWhereInput
    orderBy?: GoidichvuOrderByWithAggregationInput | GoidichvuOrderByWithAggregationInput[]
    by: GoidichvuScalarFieldEnum[] | GoidichvuScalarFieldEnum
    having?: GoidichvuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoidichvuCountAggregateInputType | true
    _avg?: GoidichvuAvgAggregateInputType
    _sum?: GoidichvuSumAggregateInputType
    _min?: GoidichvuMinAggregateInputType
    _max?: GoidichvuMaxAggregateInputType
  }

  export type GoidichvuGroupByOutputType = {
    id: number
    tengoi: string | null
    mota: string | null
    gia: number
    thoiluongngay: string | null
    trangthai: string | null
    hinhanh: string | null
    sochoconlai: number | null
    Diadiem_id: number
    _count: GoidichvuCountAggregateOutputType | null
    _avg: GoidichvuAvgAggregateOutputType | null
    _sum: GoidichvuSumAggregateOutputType | null
    _min: GoidichvuMinAggregateOutputType | null
    _max: GoidichvuMaxAggregateOutputType | null
  }

  type GetGoidichvuGroupByPayload<T extends GoidichvuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoidichvuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoidichvuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoidichvuGroupByOutputType[P]>
            : GetScalarType<T[P], GoidichvuGroupByOutputType[P]>
        }
      >
    >


  export type GoidichvuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tengoi?: boolean
    mota?: boolean
    gia?: boolean
    thoiluongngay?: boolean
    trangthai?: boolean
    hinhanh?: boolean
    sochoconlai?: boolean
    Diadiem_id?: boolean
    Diadiem?: boolean | Goidichvu$DiadiemArgs<ExtArgs>
    LichtrinhCT?: boolean | Goidichvu$LichtrinhCTArgs<ExtArgs>
    Booking?: boolean | Goidichvu$BookingArgs<ExtArgs>
    _count?: boolean | GoidichvuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goidichvu"]>


  export type GoidichvuSelectScalar = {
    id?: boolean
    tengoi?: boolean
    mota?: boolean
    gia?: boolean
    thoiluongngay?: boolean
    trangthai?: boolean
    hinhanh?: boolean
    sochoconlai?: boolean
    Diadiem_id?: boolean
  }

  export type GoidichvuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diadiem?: boolean | Goidichvu$DiadiemArgs<ExtArgs>
    LichtrinhCT?: boolean | Goidichvu$LichtrinhCTArgs<ExtArgs>
    Booking?: boolean | Goidichvu$BookingArgs<ExtArgs>
    _count?: boolean | GoidichvuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GoidichvuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goidichvu"
    objects: {
      Diadiem: Prisma.$DiadiemPayload<ExtArgs> | null
      LichtrinhCT: Prisma.$LichtrinhCTPayload<ExtArgs>[]
      Booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tengoi: string | null
      mota: string | null
      gia: number
      thoiluongngay: string | null
      trangthai: string | null
      hinhanh: string | null
      sochoconlai: number | null
      Diadiem_id: number
    }, ExtArgs["result"]["goidichvu"]>
    composites: {}
  }

  type GoidichvuGetPayload<S extends boolean | null | undefined | GoidichvuDefaultArgs> = $Result.GetResult<Prisma.$GoidichvuPayload, S>

  type GoidichvuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoidichvuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoidichvuCountAggregateInputType | true
    }

  export interface GoidichvuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goidichvu'], meta: { name: 'Goidichvu' } }
    /**
     * Find zero or one Goidichvu that matches the filter.
     * @param {GoidichvuFindUniqueArgs} args - Arguments to find a Goidichvu
     * @example
     * // Get one Goidichvu
     * const goidichvu = await prisma.goidichvu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoidichvuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuFindUniqueArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Goidichvu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoidichvuFindUniqueOrThrowArgs} args - Arguments to find a Goidichvu
     * @example
     * // Get one Goidichvu
     * const goidichvu = await prisma.goidichvu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoidichvuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Goidichvu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuFindFirstArgs} args - Arguments to find a Goidichvu
     * @example
     * // Get one Goidichvu
     * const goidichvu = await prisma.goidichvu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoidichvuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuFindFirstArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Goidichvu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuFindFirstOrThrowArgs} args - Arguments to find a Goidichvu
     * @example
     * // Get one Goidichvu
     * const goidichvu = await prisma.goidichvu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoidichvuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Goidichvus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goidichvus
     * const goidichvus = await prisma.goidichvu.findMany()
     * 
     * // Get first 10 Goidichvus
     * const goidichvus = await prisma.goidichvu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goidichvuWithIdOnly = await prisma.goidichvu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoidichvuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Goidichvu.
     * @param {GoidichvuCreateArgs} args - Arguments to create a Goidichvu.
     * @example
     * // Create one Goidichvu
     * const Goidichvu = await prisma.goidichvu.create({
     *   data: {
     *     // ... data to create a Goidichvu
     *   }
     * })
     * 
    **/
    create<T extends GoidichvuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuCreateArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Goidichvus.
     * @param {GoidichvuCreateManyArgs} args - Arguments to create many Goidichvus.
     * @example
     * // Create many Goidichvus
     * const goidichvu = await prisma.goidichvu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GoidichvuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goidichvu.
     * @param {GoidichvuDeleteArgs} args - Arguments to delete one Goidichvu.
     * @example
     * // Delete one Goidichvu
     * const Goidichvu = await prisma.goidichvu.delete({
     *   where: {
     *     // ... filter to delete one Goidichvu
     *   }
     * })
     * 
    **/
    delete<T extends GoidichvuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuDeleteArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Goidichvu.
     * @param {GoidichvuUpdateArgs} args - Arguments to update one Goidichvu.
     * @example
     * // Update one Goidichvu
     * const goidichvu = await prisma.goidichvu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoidichvuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuUpdateArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Goidichvus.
     * @param {GoidichvuDeleteManyArgs} args - Arguments to filter Goidichvus to delete.
     * @example
     * // Delete a few Goidichvus
     * const { count } = await prisma.goidichvu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoidichvuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoidichvuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goidichvus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goidichvus
     * const goidichvu = await prisma.goidichvu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoidichvuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goidichvu.
     * @param {GoidichvuUpsertArgs} args - Arguments to update or create a Goidichvu.
     * @example
     * // Update or create a Goidichvu
     * const goidichvu = await prisma.goidichvu.upsert({
     *   create: {
     *     // ... data to create a Goidichvu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goidichvu we want to update
     *   }
     * })
    **/
    upsert<T extends GoidichvuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoidichvuUpsertArgs<ExtArgs>>
    ): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Goidichvus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuCountArgs} args - Arguments to filter Goidichvus to count.
     * @example
     * // Count the number of Goidichvus
     * const count = await prisma.goidichvu.count({
     *   where: {
     *     // ... the filter for the Goidichvus we want to count
     *   }
     * })
    **/
    count<T extends GoidichvuCountArgs>(
      args?: Subset<T, GoidichvuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoidichvuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goidichvu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoidichvuAggregateArgs>(args: Subset<T, GoidichvuAggregateArgs>): Prisma.PrismaPromise<GetGoidichvuAggregateType<T>>

    /**
     * Group by Goidichvu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoidichvuGroupByArgs} args - Group by arguments.
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
      T extends GoidichvuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoidichvuGroupByArgs['orderBy'] }
        : { orderBy?: GoidichvuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoidichvuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoidichvuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goidichvu model
   */
  readonly fields: GoidichvuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goidichvu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoidichvuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Diadiem<T extends Goidichvu$DiadiemArgs<ExtArgs> = {}>(args?: Subset<T, Goidichvu$DiadiemArgs<ExtArgs>>): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    LichtrinhCT<T extends Goidichvu$LichtrinhCTArgs<ExtArgs> = {}>(args?: Subset<T, Goidichvu$LichtrinhCTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichtrinhCTPayload<ExtArgs>, T, 'findMany'> | Null>;

    Booking<T extends Goidichvu$BookingArgs<ExtArgs> = {}>(args?: Subset<T, Goidichvu$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Goidichvu model
   */ 
  interface GoidichvuFieldRefs {
    readonly id: FieldRef<"Goidichvu", 'Int'>
    readonly tengoi: FieldRef<"Goidichvu", 'String'>
    readonly mota: FieldRef<"Goidichvu", 'String'>
    readonly gia: FieldRef<"Goidichvu", 'Int'>
    readonly thoiluongngay: FieldRef<"Goidichvu", 'String'>
    readonly trangthai: FieldRef<"Goidichvu", 'String'>
    readonly hinhanh: FieldRef<"Goidichvu", 'String'>
    readonly sochoconlai: FieldRef<"Goidichvu", 'Int'>
    readonly Diadiem_id: FieldRef<"Goidichvu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Goidichvu findUnique
   */
  export type GoidichvuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter, which Goidichvu to fetch.
     */
    where: GoidichvuWhereUniqueInput
  }

  /**
   * Goidichvu findUniqueOrThrow
   */
  export type GoidichvuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter, which Goidichvu to fetch.
     */
    where: GoidichvuWhereUniqueInput
  }

  /**
   * Goidichvu findFirst
   */
  export type GoidichvuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter, which Goidichvu to fetch.
     */
    where?: GoidichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goidichvus to fetch.
     */
    orderBy?: GoidichvuOrderByWithRelationInput | GoidichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goidichvus.
     */
    cursor?: GoidichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goidichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goidichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goidichvus.
     */
    distinct?: GoidichvuScalarFieldEnum | GoidichvuScalarFieldEnum[]
  }

  /**
   * Goidichvu findFirstOrThrow
   */
  export type GoidichvuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter, which Goidichvu to fetch.
     */
    where?: GoidichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goidichvus to fetch.
     */
    orderBy?: GoidichvuOrderByWithRelationInput | GoidichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goidichvus.
     */
    cursor?: GoidichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goidichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goidichvus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goidichvus.
     */
    distinct?: GoidichvuScalarFieldEnum | GoidichvuScalarFieldEnum[]
  }

  /**
   * Goidichvu findMany
   */
  export type GoidichvuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter, which Goidichvus to fetch.
     */
    where?: GoidichvuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goidichvus to fetch.
     */
    orderBy?: GoidichvuOrderByWithRelationInput | GoidichvuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goidichvus.
     */
    cursor?: GoidichvuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goidichvus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goidichvus.
     */
    skip?: number
    distinct?: GoidichvuScalarFieldEnum | GoidichvuScalarFieldEnum[]
  }

  /**
   * Goidichvu create
   */
  export type GoidichvuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * The data needed to create a Goidichvu.
     */
    data: XOR<GoidichvuCreateInput, GoidichvuUncheckedCreateInput>
  }

  /**
   * Goidichvu createMany
   */
  export type GoidichvuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goidichvus.
     */
    data: GoidichvuCreateManyInput | GoidichvuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goidichvu update
   */
  export type GoidichvuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * The data needed to update a Goidichvu.
     */
    data: XOR<GoidichvuUpdateInput, GoidichvuUncheckedUpdateInput>
    /**
     * Choose, which Goidichvu to update.
     */
    where: GoidichvuWhereUniqueInput
  }

  /**
   * Goidichvu updateMany
   */
  export type GoidichvuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goidichvus.
     */
    data: XOR<GoidichvuUpdateManyMutationInput, GoidichvuUncheckedUpdateManyInput>
    /**
     * Filter which Goidichvus to update
     */
    where?: GoidichvuWhereInput
  }

  /**
   * Goidichvu upsert
   */
  export type GoidichvuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * The filter to search for the Goidichvu to update in case it exists.
     */
    where: GoidichvuWhereUniqueInput
    /**
     * In case the Goidichvu found by the `where` argument doesn't exist, create a new Goidichvu with this data.
     */
    create: XOR<GoidichvuCreateInput, GoidichvuUncheckedCreateInput>
    /**
     * In case the Goidichvu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoidichvuUpdateInput, GoidichvuUncheckedUpdateInput>
  }

  /**
   * Goidichvu delete
   */
  export type GoidichvuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    /**
     * Filter which Goidichvu to delete.
     */
    where: GoidichvuWhereUniqueInput
  }

  /**
   * Goidichvu deleteMany
   */
  export type GoidichvuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goidichvus to delete
     */
    where?: GoidichvuWhereInput
  }

  /**
   * Goidichvu.Diadiem
   */
  export type Goidichvu$DiadiemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    where?: DiadiemWhereInput
  }

  /**
   * Goidichvu.LichtrinhCT
   */
  export type Goidichvu$LichtrinhCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichtrinhCT
     */
    select?: LichtrinhCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhCTInclude<ExtArgs> | null
    where?: LichtrinhCTWhereInput
    orderBy?: LichtrinhCTOrderByWithRelationInput | LichtrinhCTOrderByWithRelationInput[]
    cursor?: LichtrinhCTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichtrinhCTScalarFieldEnum | LichtrinhCTScalarFieldEnum[]
  }

  /**
   * Goidichvu.Booking
   */
  export type Goidichvu$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Goidichvu without action
   */
  export type GoidichvuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
  }


  /**
   * Model Diadiem
   */

  export type AggregateDiadiem = {
    _count: DiadiemCountAggregateOutputType | null
    _avg: DiadiemAvgAggregateOutputType | null
    _sum: DiadiemSumAggregateOutputType | null
    _min: DiadiemMinAggregateOutputType | null
    _max: DiadiemMaxAggregateOutputType | null
  }

  export type DiadiemAvgAggregateOutputType = {
    id: number | null
  }

  export type DiadiemSumAggregateOutputType = {
    id: number | null
  }

  export type DiadiemMinAggregateOutputType = {
    id: number | null
    tendiadiem: string | null
    diachi: string | null
    mota: string | null
    hinhanh: string | null
  }

  export type DiadiemMaxAggregateOutputType = {
    id: number | null
    tendiadiem: string | null
    diachi: string | null
    mota: string | null
    hinhanh: string | null
  }

  export type DiadiemCountAggregateOutputType = {
    id: number
    tendiadiem: number
    diachi: number
    mota: number
    hinhanh: number
    _all: number
  }


  export type DiadiemAvgAggregateInputType = {
    id?: true
  }

  export type DiadiemSumAggregateInputType = {
    id?: true
  }

  export type DiadiemMinAggregateInputType = {
    id?: true
    tendiadiem?: true
    diachi?: true
    mota?: true
    hinhanh?: true
  }

  export type DiadiemMaxAggregateInputType = {
    id?: true
    tendiadiem?: true
    diachi?: true
    mota?: true
    hinhanh?: true
  }

  export type DiadiemCountAggregateInputType = {
    id?: true
    tendiadiem?: true
    diachi?: true
    mota?: true
    hinhanh?: true
    _all?: true
  }

  export type DiadiemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diadiem to aggregate.
     */
    where?: DiadiemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diadiems to fetch.
     */
    orderBy?: DiadiemOrderByWithRelationInput | DiadiemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiadiemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diadiems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diadiems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diadiems
    **/
    _count?: true | DiadiemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiadiemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiadiemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiadiemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiadiemMaxAggregateInputType
  }

  export type GetDiadiemAggregateType<T extends DiadiemAggregateArgs> = {
        [P in keyof T & keyof AggregateDiadiem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiadiem[P]>
      : GetScalarType<T[P], AggregateDiadiem[P]>
  }




  export type DiadiemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiadiemWhereInput
    orderBy?: DiadiemOrderByWithAggregationInput | DiadiemOrderByWithAggregationInput[]
    by: DiadiemScalarFieldEnum[] | DiadiemScalarFieldEnum
    having?: DiadiemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiadiemCountAggregateInputType | true
    _avg?: DiadiemAvgAggregateInputType
    _sum?: DiadiemSumAggregateInputType
    _min?: DiadiemMinAggregateInputType
    _max?: DiadiemMaxAggregateInputType
  }

  export type DiadiemGroupByOutputType = {
    id: number
    tendiadiem: string | null
    diachi: string | null
    mota: string | null
    hinhanh: string | null
    _count: DiadiemCountAggregateOutputType | null
    _avg: DiadiemAvgAggregateOutputType | null
    _sum: DiadiemSumAggregateOutputType | null
    _min: DiadiemMinAggregateOutputType | null
    _max: DiadiemMaxAggregateOutputType | null
  }

  type GetDiadiemGroupByPayload<T extends DiadiemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiadiemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiadiemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiadiemGroupByOutputType[P]>
            : GetScalarType<T[P], DiadiemGroupByOutputType[P]>
        }
      >
    >


  export type DiadiemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tendiadiem?: boolean
    diachi?: boolean
    mota?: boolean
    hinhanh?: boolean
    Goidichvu?: boolean | Diadiem$GoidichvuArgs<ExtArgs>
    _count?: boolean | DiadiemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diadiem"]>


  export type DiadiemSelectScalar = {
    id?: boolean
    tendiadiem?: boolean
    diachi?: boolean
    mota?: boolean
    hinhanh?: boolean
  }

  export type DiadiemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goidichvu?: boolean | Diadiem$GoidichvuArgs<ExtArgs>
    _count?: boolean | DiadiemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiadiemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diadiem"
    objects: {
      Goidichvu: Prisma.$GoidichvuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tendiadiem: string | null
      diachi: string | null
      mota: string | null
      hinhanh: string | null
    }, ExtArgs["result"]["diadiem"]>
    composites: {}
  }

  type DiadiemGetPayload<S extends boolean | null | undefined | DiadiemDefaultArgs> = $Result.GetResult<Prisma.$DiadiemPayload, S>

  type DiadiemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiadiemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiadiemCountAggregateInputType | true
    }

  export interface DiadiemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diadiem'], meta: { name: 'Diadiem' } }
    /**
     * Find zero or one Diadiem that matches the filter.
     * @param {DiadiemFindUniqueArgs} args - Arguments to find a Diadiem
     * @example
     * // Get one Diadiem
     * const diadiem = await prisma.diadiem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiadiemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemFindUniqueArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Diadiem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiadiemFindUniqueOrThrowArgs} args - Arguments to find a Diadiem
     * @example
     * // Get one Diadiem
     * const diadiem = await prisma.diadiem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiadiemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Diadiem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemFindFirstArgs} args - Arguments to find a Diadiem
     * @example
     * // Get one Diadiem
     * const diadiem = await prisma.diadiem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiadiemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemFindFirstArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Diadiem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemFindFirstOrThrowArgs} args - Arguments to find a Diadiem
     * @example
     * // Get one Diadiem
     * const diadiem = await prisma.diadiem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiadiemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Diadiems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diadiems
     * const diadiems = await prisma.diadiem.findMany()
     * 
     * // Get first 10 Diadiems
     * const diadiems = await prisma.diadiem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diadiemWithIdOnly = await prisma.diadiem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiadiemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Diadiem.
     * @param {DiadiemCreateArgs} args - Arguments to create a Diadiem.
     * @example
     * // Create one Diadiem
     * const Diadiem = await prisma.diadiem.create({
     *   data: {
     *     // ... data to create a Diadiem
     *   }
     * })
     * 
    **/
    create<T extends DiadiemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemCreateArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Diadiems.
     * @param {DiadiemCreateManyArgs} args - Arguments to create many Diadiems.
     * @example
     * // Create many Diadiems
     * const diadiem = await prisma.diadiem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DiadiemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diadiem.
     * @param {DiadiemDeleteArgs} args - Arguments to delete one Diadiem.
     * @example
     * // Delete one Diadiem
     * const Diadiem = await prisma.diadiem.delete({
     *   where: {
     *     // ... filter to delete one Diadiem
     *   }
     * })
     * 
    **/
    delete<T extends DiadiemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemDeleteArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Diadiem.
     * @param {DiadiemUpdateArgs} args - Arguments to update one Diadiem.
     * @example
     * // Update one Diadiem
     * const diadiem = await prisma.diadiem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiadiemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemUpdateArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Diadiems.
     * @param {DiadiemDeleteManyArgs} args - Arguments to filter Diadiems to delete.
     * @example
     * // Delete a few Diadiems
     * const { count } = await prisma.diadiem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiadiemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiadiemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diadiems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diadiems
     * const diadiem = await prisma.diadiem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiadiemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diadiem.
     * @param {DiadiemUpsertArgs} args - Arguments to update or create a Diadiem.
     * @example
     * // Update or create a Diadiem
     * const diadiem = await prisma.diadiem.upsert({
     *   create: {
     *     // ... data to create a Diadiem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diadiem we want to update
     *   }
     * })
    **/
    upsert<T extends DiadiemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiadiemUpsertArgs<ExtArgs>>
    ): Prisma__DiadiemClient<$Result.GetResult<Prisma.$DiadiemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Diadiems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemCountArgs} args - Arguments to filter Diadiems to count.
     * @example
     * // Count the number of Diadiems
     * const count = await prisma.diadiem.count({
     *   where: {
     *     // ... the filter for the Diadiems we want to count
     *   }
     * })
    **/
    count<T extends DiadiemCountArgs>(
      args?: Subset<T, DiadiemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiadiemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diadiem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiadiemAggregateArgs>(args: Subset<T, DiadiemAggregateArgs>): Prisma.PrismaPromise<GetDiadiemAggregateType<T>>

    /**
     * Group by Diadiem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiadiemGroupByArgs} args - Group by arguments.
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
      T extends DiadiemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiadiemGroupByArgs['orderBy'] }
        : { orderBy?: DiadiemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiadiemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiadiemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diadiem model
   */
  readonly fields: DiadiemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diadiem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiadiemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Goidichvu<T extends Diadiem$GoidichvuArgs<ExtArgs> = {}>(args?: Subset<T, Diadiem$GoidichvuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Diadiem model
   */ 
  interface DiadiemFieldRefs {
    readonly id: FieldRef<"Diadiem", 'Int'>
    readonly tendiadiem: FieldRef<"Diadiem", 'String'>
    readonly diachi: FieldRef<"Diadiem", 'String'>
    readonly mota: FieldRef<"Diadiem", 'String'>
    readonly hinhanh: FieldRef<"Diadiem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Diadiem findUnique
   */
  export type DiadiemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter, which Diadiem to fetch.
     */
    where: DiadiemWhereUniqueInput
  }

  /**
   * Diadiem findUniqueOrThrow
   */
  export type DiadiemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter, which Diadiem to fetch.
     */
    where: DiadiemWhereUniqueInput
  }

  /**
   * Diadiem findFirst
   */
  export type DiadiemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter, which Diadiem to fetch.
     */
    where?: DiadiemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diadiems to fetch.
     */
    orderBy?: DiadiemOrderByWithRelationInput | DiadiemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diadiems.
     */
    cursor?: DiadiemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diadiems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diadiems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diadiems.
     */
    distinct?: DiadiemScalarFieldEnum | DiadiemScalarFieldEnum[]
  }

  /**
   * Diadiem findFirstOrThrow
   */
  export type DiadiemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter, which Diadiem to fetch.
     */
    where?: DiadiemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diadiems to fetch.
     */
    orderBy?: DiadiemOrderByWithRelationInput | DiadiemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diadiems.
     */
    cursor?: DiadiemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diadiems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diadiems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diadiems.
     */
    distinct?: DiadiemScalarFieldEnum | DiadiemScalarFieldEnum[]
  }

  /**
   * Diadiem findMany
   */
  export type DiadiemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter, which Diadiems to fetch.
     */
    where?: DiadiemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diadiems to fetch.
     */
    orderBy?: DiadiemOrderByWithRelationInput | DiadiemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diadiems.
     */
    cursor?: DiadiemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diadiems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diadiems.
     */
    skip?: number
    distinct?: DiadiemScalarFieldEnum | DiadiemScalarFieldEnum[]
  }

  /**
   * Diadiem create
   */
  export type DiadiemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * The data needed to create a Diadiem.
     */
    data?: XOR<DiadiemCreateInput, DiadiemUncheckedCreateInput>
  }

  /**
   * Diadiem createMany
   */
  export type DiadiemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diadiems.
     */
    data: DiadiemCreateManyInput | DiadiemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diadiem update
   */
  export type DiadiemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * The data needed to update a Diadiem.
     */
    data: XOR<DiadiemUpdateInput, DiadiemUncheckedUpdateInput>
    /**
     * Choose, which Diadiem to update.
     */
    where: DiadiemWhereUniqueInput
  }

  /**
   * Diadiem updateMany
   */
  export type DiadiemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diadiems.
     */
    data: XOR<DiadiemUpdateManyMutationInput, DiadiemUncheckedUpdateManyInput>
    /**
     * Filter which Diadiems to update
     */
    where?: DiadiemWhereInput
  }

  /**
   * Diadiem upsert
   */
  export type DiadiemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * The filter to search for the Diadiem to update in case it exists.
     */
    where: DiadiemWhereUniqueInput
    /**
     * In case the Diadiem found by the `where` argument doesn't exist, create a new Diadiem with this data.
     */
    create: XOR<DiadiemCreateInput, DiadiemUncheckedCreateInput>
    /**
     * In case the Diadiem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiadiemUpdateInput, DiadiemUncheckedUpdateInput>
  }

  /**
   * Diadiem delete
   */
  export type DiadiemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
    /**
     * Filter which Diadiem to delete.
     */
    where: DiadiemWhereUniqueInput
  }

  /**
   * Diadiem deleteMany
   */
  export type DiadiemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diadiems to delete
     */
    where?: DiadiemWhereInput
  }

  /**
   * Diadiem.Goidichvu
   */
  export type Diadiem$GoidichvuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goidichvu
     */
    select?: GoidichvuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoidichvuInclude<ExtArgs> | null
    where?: GoidichvuWhereInput
    orderBy?: GoidichvuOrderByWithRelationInput | GoidichvuOrderByWithRelationInput[]
    cursor?: GoidichvuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoidichvuScalarFieldEnum | GoidichvuScalarFieldEnum[]
  }

  /**
   * Diadiem without action
   */
  export type DiadiemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diadiem
     */
    select?: DiadiemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiadiemInclude<ExtArgs> | null
  }


  /**
   * Model Danhgia
   */

  export type AggregateDanhgia = {
    _count: DanhgiaCountAggregateOutputType | null
    _avg: DanhgiaAvgAggregateOutputType | null
    _sum: DanhgiaSumAggregateOutputType | null
    _min: DanhgiaMinAggregateOutputType | null
    _max: DanhgiaMaxAggregateOutputType | null
  }

  export type DanhgiaAvgAggregateOutputType = {
    id: number | null
    User_id: number | null
    Lichtrinh_id: number | null
  }

  export type DanhgiaSumAggregateOutputType = {
    id: number | null
    User_id: number | null
    Lichtrinh_id: number | null
  }

  export type DanhgiaMinAggregateOutputType = {
    id: number | null
    noidung: string | null
    User_id: number | null
    Lichtrinh_id: number | null
  }

  export type DanhgiaMaxAggregateOutputType = {
    id: number | null
    noidung: string | null
    User_id: number | null
    Lichtrinh_id: number | null
  }

  export type DanhgiaCountAggregateOutputType = {
    id: number
    noidung: number
    User_id: number
    Lichtrinh_id: number
    _all: number
  }


  export type DanhgiaAvgAggregateInputType = {
    id?: true
    User_id?: true
    Lichtrinh_id?: true
  }

  export type DanhgiaSumAggregateInputType = {
    id?: true
    User_id?: true
    Lichtrinh_id?: true
  }

  export type DanhgiaMinAggregateInputType = {
    id?: true
    noidung?: true
    User_id?: true
    Lichtrinh_id?: true
  }

  export type DanhgiaMaxAggregateInputType = {
    id?: true
    noidung?: true
    User_id?: true
    Lichtrinh_id?: true
  }

  export type DanhgiaCountAggregateInputType = {
    id?: true
    noidung?: true
    User_id?: true
    Lichtrinh_id?: true
    _all?: true
  }

  export type DanhgiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Danhgia to aggregate.
     */
    where?: DanhgiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Danhgias to fetch.
     */
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DanhgiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Danhgias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Danhgias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Danhgias
    **/
    _count?: true | DanhgiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DanhgiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DanhgiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DanhgiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DanhgiaMaxAggregateInputType
  }

  export type GetDanhgiaAggregateType<T extends DanhgiaAggregateArgs> = {
        [P in keyof T & keyof AggregateDanhgia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDanhgia[P]>
      : GetScalarType<T[P], AggregateDanhgia[P]>
  }




  export type DanhgiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanhgiaWhereInput
    orderBy?: DanhgiaOrderByWithAggregationInput | DanhgiaOrderByWithAggregationInput[]
    by: DanhgiaScalarFieldEnum[] | DanhgiaScalarFieldEnum
    having?: DanhgiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DanhgiaCountAggregateInputType | true
    _avg?: DanhgiaAvgAggregateInputType
    _sum?: DanhgiaSumAggregateInputType
    _min?: DanhgiaMinAggregateInputType
    _max?: DanhgiaMaxAggregateInputType
  }

  export type DanhgiaGroupByOutputType = {
    id: number
    noidung: string | null
    User_id: number
    Lichtrinh_id: number
    _count: DanhgiaCountAggregateOutputType | null
    _avg: DanhgiaAvgAggregateOutputType | null
    _sum: DanhgiaSumAggregateOutputType | null
    _min: DanhgiaMinAggregateOutputType | null
    _max: DanhgiaMaxAggregateOutputType | null
  }

  type GetDanhgiaGroupByPayload<T extends DanhgiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DanhgiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DanhgiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DanhgiaGroupByOutputType[P]>
            : GetScalarType<T[P], DanhgiaGroupByOutputType[P]>
        }
      >
    >


  export type DanhgiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noidung?: boolean
    User_id?: boolean
    Lichtrinh_id?: boolean
    Lichtrinh?: boolean | Danhgia$LichtrinhArgs<ExtArgs>
    User?: boolean | Danhgia$UserArgs<ExtArgs>
  }, ExtArgs["result"]["danhgia"]>


  export type DanhgiaSelectScalar = {
    id?: boolean
    noidung?: boolean
    User_id?: boolean
    Lichtrinh_id?: boolean
  }

  export type DanhgiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lichtrinh?: boolean | Danhgia$LichtrinhArgs<ExtArgs>
    User?: boolean | Danhgia$UserArgs<ExtArgs>
  }

  export type $DanhgiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Danhgia"
    objects: {
      Lichtrinh: Prisma.$LichtrinhPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      noidung: string | null
      User_id: number
      Lichtrinh_id: number
    }, ExtArgs["result"]["danhgia"]>
    composites: {}
  }

  type DanhgiaGetPayload<S extends boolean | null | undefined | DanhgiaDefaultArgs> = $Result.GetResult<Prisma.$DanhgiaPayload, S>

  type DanhgiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DanhgiaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DanhgiaCountAggregateInputType | true
    }

  export interface DanhgiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Danhgia'], meta: { name: 'Danhgia' } }
    /**
     * Find zero or one Danhgia that matches the filter.
     * @param {DanhgiaFindUniqueArgs} args - Arguments to find a Danhgia
     * @example
     * // Get one Danhgia
     * const danhgia = await prisma.danhgia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DanhgiaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaFindUniqueArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Danhgia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DanhgiaFindUniqueOrThrowArgs} args - Arguments to find a Danhgia
     * @example
     * // Get one Danhgia
     * const danhgia = await prisma.danhgia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DanhgiaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Danhgia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaFindFirstArgs} args - Arguments to find a Danhgia
     * @example
     * // Get one Danhgia
     * const danhgia = await prisma.danhgia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DanhgiaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaFindFirstArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Danhgia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaFindFirstOrThrowArgs} args - Arguments to find a Danhgia
     * @example
     * // Get one Danhgia
     * const danhgia = await prisma.danhgia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DanhgiaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Danhgias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Danhgias
     * const danhgias = await prisma.danhgia.findMany()
     * 
     * // Get first 10 Danhgias
     * const danhgias = await prisma.danhgia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const danhgiaWithIdOnly = await prisma.danhgia.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DanhgiaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Danhgia.
     * @param {DanhgiaCreateArgs} args - Arguments to create a Danhgia.
     * @example
     * // Create one Danhgia
     * const Danhgia = await prisma.danhgia.create({
     *   data: {
     *     // ... data to create a Danhgia
     *   }
     * })
     * 
    **/
    create<T extends DanhgiaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaCreateArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Danhgias.
     * @param {DanhgiaCreateManyArgs} args - Arguments to create many Danhgias.
     * @example
     * // Create many Danhgias
     * const danhgia = await prisma.danhgia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DanhgiaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Danhgia.
     * @param {DanhgiaDeleteArgs} args - Arguments to delete one Danhgia.
     * @example
     * // Delete one Danhgia
     * const Danhgia = await prisma.danhgia.delete({
     *   where: {
     *     // ... filter to delete one Danhgia
     *   }
     * })
     * 
    **/
    delete<T extends DanhgiaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaDeleteArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Danhgia.
     * @param {DanhgiaUpdateArgs} args - Arguments to update one Danhgia.
     * @example
     * // Update one Danhgia
     * const danhgia = await prisma.danhgia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DanhgiaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaUpdateArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Danhgias.
     * @param {DanhgiaDeleteManyArgs} args - Arguments to filter Danhgias to delete.
     * @example
     * // Delete a few Danhgias
     * const { count } = await prisma.danhgia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DanhgiaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DanhgiaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Danhgias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Danhgias
     * const danhgia = await prisma.danhgia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DanhgiaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Danhgia.
     * @param {DanhgiaUpsertArgs} args - Arguments to update or create a Danhgia.
     * @example
     * // Update or create a Danhgia
     * const danhgia = await prisma.danhgia.upsert({
     *   create: {
     *     // ... data to create a Danhgia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Danhgia we want to update
     *   }
     * })
    **/
    upsert<T extends DanhgiaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DanhgiaUpsertArgs<ExtArgs>>
    ): Prisma__DanhgiaClient<$Result.GetResult<Prisma.$DanhgiaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Danhgias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaCountArgs} args - Arguments to filter Danhgias to count.
     * @example
     * // Count the number of Danhgias
     * const count = await prisma.danhgia.count({
     *   where: {
     *     // ... the filter for the Danhgias we want to count
     *   }
     * })
    **/
    count<T extends DanhgiaCountArgs>(
      args?: Subset<T, DanhgiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DanhgiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Danhgia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DanhgiaAggregateArgs>(args: Subset<T, DanhgiaAggregateArgs>): Prisma.PrismaPromise<GetDanhgiaAggregateType<T>>

    /**
     * Group by Danhgia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhgiaGroupByArgs} args - Group by arguments.
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
      T extends DanhgiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DanhgiaGroupByArgs['orderBy'] }
        : { orderBy?: DanhgiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DanhgiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDanhgiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Danhgia model
   */
  readonly fields: DanhgiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Danhgia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DanhgiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Lichtrinh<T extends Danhgia$LichtrinhArgs<ExtArgs> = {}>(args?: Subset<T, Danhgia$LichtrinhArgs<ExtArgs>>): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends Danhgia$UserArgs<ExtArgs> = {}>(args?: Subset<T, Danhgia$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Danhgia model
   */ 
  interface DanhgiaFieldRefs {
    readonly id: FieldRef<"Danhgia", 'Int'>
    readonly noidung: FieldRef<"Danhgia", 'String'>
    readonly User_id: FieldRef<"Danhgia", 'Int'>
    readonly Lichtrinh_id: FieldRef<"Danhgia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Danhgia findUnique
   */
  export type DanhgiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter, which Danhgia to fetch.
     */
    where: DanhgiaWhereUniqueInput
  }

  /**
   * Danhgia findUniqueOrThrow
   */
  export type DanhgiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter, which Danhgia to fetch.
     */
    where: DanhgiaWhereUniqueInput
  }

  /**
   * Danhgia findFirst
   */
  export type DanhgiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter, which Danhgia to fetch.
     */
    where?: DanhgiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Danhgias to fetch.
     */
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Danhgias.
     */
    cursor?: DanhgiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Danhgias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Danhgias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Danhgias.
     */
    distinct?: DanhgiaScalarFieldEnum | DanhgiaScalarFieldEnum[]
  }

  /**
   * Danhgia findFirstOrThrow
   */
  export type DanhgiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter, which Danhgia to fetch.
     */
    where?: DanhgiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Danhgias to fetch.
     */
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Danhgias.
     */
    cursor?: DanhgiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Danhgias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Danhgias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Danhgias.
     */
    distinct?: DanhgiaScalarFieldEnum | DanhgiaScalarFieldEnum[]
  }

  /**
   * Danhgia findMany
   */
  export type DanhgiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter, which Danhgias to fetch.
     */
    where?: DanhgiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Danhgias to fetch.
     */
    orderBy?: DanhgiaOrderByWithRelationInput | DanhgiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Danhgias.
     */
    cursor?: DanhgiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Danhgias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Danhgias.
     */
    skip?: number
    distinct?: DanhgiaScalarFieldEnum | DanhgiaScalarFieldEnum[]
  }

  /**
   * Danhgia create
   */
  export type DanhgiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Danhgia.
     */
    data: XOR<DanhgiaCreateInput, DanhgiaUncheckedCreateInput>
  }

  /**
   * Danhgia createMany
   */
  export type DanhgiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Danhgias.
     */
    data: DanhgiaCreateManyInput | DanhgiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Danhgia update
   */
  export type DanhgiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Danhgia.
     */
    data: XOR<DanhgiaUpdateInput, DanhgiaUncheckedUpdateInput>
    /**
     * Choose, which Danhgia to update.
     */
    where: DanhgiaWhereUniqueInput
  }

  /**
   * Danhgia updateMany
   */
  export type DanhgiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Danhgias.
     */
    data: XOR<DanhgiaUpdateManyMutationInput, DanhgiaUncheckedUpdateManyInput>
    /**
     * Filter which Danhgias to update
     */
    where?: DanhgiaWhereInput
  }

  /**
   * Danhgia upsert
   */
  export type DanhgiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Danhgia to update in case it exists.
     */
    where: DanhgiaWhereUniqueInput
    /**
     * In case the Danhgia found by the `where` argument doesn't exist, create a new Danhgia with this data.
     */
    create: XOR<DanhgiaCreateInput, DanhgiaUncheckedCreateInput>
    /**
     * In case the Danhgia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DanhgiaUpdateInput, DanhgiaUncheckedUpdateInput>
  }

  /**
   * Danhgia delete
   */
  export type DanhgiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
    /**
     * Filter which Danhgia to delete.
     */
    where: DanhgiaWhereUniqueInput
  }

  /**
   * Danhgia deleteMany
   */
  export type DanhgiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Danhgias to delete
     */
    where?: DanhgiaWhereInput
  }

  /**
   * Danhgia.Lichtrinh
   */
  export type Danhgia$LichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    where?: LichtrinhWhereInput
  }

  /**
   * Danhgia.User
   */
  export type Danhgia$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Danhgia without action
   */
  export type DanhgiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Danhgia
     */
    select?: DanhgiaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhgiaInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    soluong: number | null
    sotien: number | null
    tour_id: number | null
    user_id: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    soluong: number | null
    sotien: number | null
    tour_id: number | null
    user_id: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    hoten: string | null
    sodienthoai: string | null
    soluong: number | null
    sotien: number | null
    tour_id: number | null
    user_id: number | null
    createdAt: Date | null
    status: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    hoten: string | null
    sodienthoai: string | null
    soluong: number | null
    sotien: number | null
    tour_id: number | null
    user_id: number | null
    createdAt: Date | null
    status: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    hoten: number
    sodienthoai: number
    soluong: number
    sotien: number
    tour_id: number
    user_id: number
    createdAt: number
    status: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    soluong?: true
    sotien?: true
    tour_id?: true
    user_id?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    soluong?: true
    sotien?: true
    tour_id?: true
    user_id?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    hoten?: true
    sodienthoai?: true
    soluong?: true
    sotien?: true
    tour_id?: true
    user_id?: true
    createdAt?: true
    status?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    hoten?: true
    sodienthoai?: true
    soluong?: true
    sotien?: true
    tour_id?: true
    user_id?: true
    createdAt?: true
    status?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    hoten?: true
    sodienthoai?: true
    soluong?: true
    sotien?: true
    tour_id?: true
    user_id?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    tour_id: number
    user_id: number | null
    createdAt: Date
    status: string
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hoten?: boolean
    sodienthoai?: boolean
    soluong?: boolean
    sotien?: boolean
    tour_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    status?: boolean
    Goidichvu?: boolean | GoidichvuDefaultArgs<ExtArgs>
    User?: boolean | Booking$UserArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>


  export type BookingSelectScalar = {
    id?: boolean
    hoten?: boolean
    sodienthoai?: boolean
    soluong?: boolean
    sotien?: boolean
    tour_id?: boolean
    user_id?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goidichvu?: boolean | GoidichvuDefaultArgs<ExtArgs>
    User?: boolean | Booking$UserArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      Goidichvu: Prisma.$GoidichvuPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hoten: string
      sodienthoai: string
      soluong: number
      sotien: number
      tour_id: number
      user_id: number | null
      createdAt: Date
      status: string
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends BookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends BookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends BookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Goidichvu<T extends GoidichvuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoidichvuDefaultArgs<ExtArgs>>): Prisma__GoidichvuClient<$Result.GetResult<Prisma.$GoidichvuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends Booking$UserArgs<ExtArgs> = {}>(args?: Subset<T, Booking$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly hoten: FieldRef<"Booking", 'String'>
    readonly sodienthoai: FieldRef<"Booking", 'String'>
    readonly soluong: FieldRef<"Booking", 'Int'>
    readonly sotien: FieldRef<"Booking", 'Int'>
    readonly tour_id: FieldRef<"Booking", 'Int'>
    readonly user_id: FieldRef<"Booking", 'Int'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.User
   */
  export type Booking$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Thanhtoan
   */

  export type AggregateThanhtoan = {
    _count: ThanhtoanCountAggregateOutputType | null
    _avg: ThanhtoanAvgAggregateOutputType | null
    _sum: ThanhtoanSumAggregateOutputType | null
    _min: ThanhtoanMinAggregateOutputType | null
    _max: ThanhtoanMaxAggregateOutputType | null
  }

  export type ThanhtoanAvgAggregateOutputType = {
    id: number | null
    sotien: number | null
  }

  export type ThanhtoanSumAggregateOutputType = {
    id: number | null
    sotien: number | null
  }

  export type ThanhtoanMinAggregateOutputType = {
    id: number | null
    phuongthuc: string | null
    sotien: number | null
    trangthai: string | null
    ngaythanhtoan: Date | null
  }

  export type ThanhtoanMaxAggregateOutputType = {
    id: number | null
    phuongthuc: string | null
    sotien: number | null
    trangthai: string | null
    ngaythanhtoan: Date | null
  }

  export type ThanhtoanCountAggregateOutputType = {
    id: number
    phuongthuc: number
    sotien: number
    trangthai: number
    ngaythanhtoan: number
    _all: number
  }


  export type ThanhtoanAvgAggregateInputType = {
    id?: true
    sotien?: true
  }

  export type ThanhtoanSumAggregateInputType = {
    id?: true
    sotien?: true
  }

  export type ThanhtoanMinAggregateInputType = {
    id?: true
    phuongthuc?: true
    sotien?: true
    trangthai?: true
    ngaythanhtoan?: true
  }

  export type ThanhtoanMaxAggregateInputType = {
    id?: true
    phuongthuc?: true
    sotien?: true
    trangthai?: true
    ngaythanhtoan?: true
  }

  export type ThanhtoanCountAggregateInputType = {
    id?: true
    phuongthuc?: true
    sotien?: true
    trangthai?: true
    ngaythanhtoan?: true
    _all?: true
  }

  export type ThanhtoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thanhtoan to aggregate.
     */
    where?: ThanhtoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thanhtoans to fetch.
     */
    orderBy?: ThanhtoanOrderByWithRelationInput | ThanhtoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThanhtoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thanhtoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thanhtoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thanhtoans
    **/
    _count?: true | ThanhtoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThanhtoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThanhtoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThanhtoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThanhtoanMaxAggregateInputType
  }

  export type GetThanhtoanAggregateType<T extends ThanhtoanAggregateArgs> = {
        [P in keyof T & keyof AggregateThanhtoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThanhtoan[P]>
      : GetScalarType<T[P], AggregateThanhtoan[P]>
  }




  export type ThanhtoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThanhtoanWhereInput
    orderBy?: ThanhtoanOrderByWithAggregationInput | ThanhtoanOrderByWithAggregationInput[]
    by: ThanhtoanScalarFieldEnum[] | ThanhtoanScalarFieldEnum
    having?: ThanhtoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThanhtoanCountAggregateInputType | true
    _avg?: ThanhtoanAvgAggregateInputType
    _sum?: ThanhtoanSumAggregateInputType
    _min?: ThanhtoanMinAggregateInputType
    _max?: ThanhtoanMaxAggregateInputType
  }

  export type ThanhtoanGroupByOutputType = {
    id: number
    phuongthuc: string | null
    sotien: number
    trangthai: string | null
    ngaythanhtoan: Date
    _count: ThanhtoanCountAggregateOutputType | null
    _avg: ThanhtoanAvgAggregateOutputType | null
    _sum: ThanhtoanSumAggregateOutputType | null
    _min: ThanhtoanMinAggregateOutputType | null
    _max: ThanhtoanMaxAggregateOutputType | null
  }

  type GetThanhtoanGroupByPayload<T extends ThanhtoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThanhtoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThanhtoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThanhtoanGroupByOutputType[P]>
            : GetScalarType<T[P], ThanhtoanGroupByOutputType[P]>
        }
      >
    >


  export type ThanhtoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phuongthuc?: boolean
    sotien?: boolean
    trangthai?: boolean
    ngaythanhtoan?: boolean
    Hoadon?: boolean | Thanhtoan$HoadonArgs<ExtArgs>
    _count?: boolean | ThanhtoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thanhtoan"]>


  export type ThanhtoanSelectScalar = {
    id?: boolean
    phuongthuc?: boolean
    sotien?: boolean
    trangthai?: boolean
    ngaythanhtoan?: boolean
  }

  export type ThanhtoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hoadon?: boolean | Thanhtoan$HoadonArgs<ExtArgs>
    _count?: boolean | ThanhtoanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ThanhtoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thanhtoan"
    objects: {
      Hoadon: Prisma.$HoadonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phuongthuc: string | null
      sotien: number
      trangthai: string | null
      ngaythanhtoan: Date
    }, ExtArgs["result"]["thanhtoan"]>
    composites: {}
  }

  type ThanhtoanGetPayload<S extends boolean | null | undefined | ThanhtoanDefaultArgs> = $Result.GetResult<Prisma.$ThanhtoanPayload, S>

  type ThanhtoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThanhtoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThanhtoanCountAggregateInputType | true
    }

  export interface ThanhtoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thanhtoan'], meta: { name: 'Thanhtoan' } }
    /**
     * Find zero or one Thanhtoan that matches the filter.
     * @param {ThanhtoanFindUniqueArgs} args - Arguments to find a Thanhtoan
     * @example
     * // Get one Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThanhtoanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanFindUniqueArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Thanhtoan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ThanhtoanFindUniqueOrThrowArgs} args - Arguments to find a Thanhtoan
     * @example
     * // Get one Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThanhtoanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Thanhtoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanFindFirstArgs} args - Arguments to find a Thanhtoan
     * @example
     * // Get one Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThanhtoanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanFindFirstArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Thanhtoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanFindFirstOrThrowArgs} args - Arguments to find a Thanhtoan
     * @example
     * // Get one Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThanhtoanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Thanhtoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thanhtoans
     * const thanhtoans = await prisma.thanhtoan.findMany()
     * 
     * // Get first 10 Thanhtoans
     * const thanhtoans = await prisma.thanhtoan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thanhtoanWithIdOnly = await prisma.thanhtoan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThanhtoanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Thanhtoan.
     * @param {ThanhtoanCreateArgs} args - Arguments to create a Thanhtoan.
     * @example
     * // Create one Thanhtoan
     * const Thanhtoan = await prisma.thanhtoan.create({
     *   data: {
     *     // ... data to create a Thanhtoan
     *   }
     * })
     * 
    **/
    create<T extends ThanhtoanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanCreateArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Thanhtoans.
     * @param {ThanhtoanCreateManyArgs} args - Arguments to create many Thanhtoans.
     * @example
     * // Create many Thanhtoans
     * const thanhtoan = await prisma.thanhtoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ThanhtoanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thanhtoan.
     * @param {ThanhtoanDeleteArgs} args - Arguments to delete one Thanhtoan.
     * @example
     * // Delete one Thanhtoan
     * const Thanhtoan = await prisma.thanhtoan.delete({
     *   where: {
     *     // ... filter to delete one Thanhtoan
     *   }
     * })
     * 
    **/
    delete<T extends ThanhtoanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanDeleteArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Thanhtoan.
     * @param {ThanhtoanUpdateArgs} args - Arguments to update one Thanhtoan.
     * @example
     * // Update one Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThanhtoanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanUpdateArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Thanhtoans.
     * @param {ThanhtoanDeleteManyArgs} args - Arguments to filter Thanhtoans to delete.
     * @example
     * // Delete a few Thanhtoans
     * const { count } = await prisma.thanhtoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThanhtoanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThanhtoanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thanhtoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thanhtoans
     * const thanhtoan = await prisma.thanhtoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThanhtoanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thanhtoan.
     * @param {ThanhtoanUpsertArgs} args - Arguments to update or create a Thanhtoan.
     * @example
     * // Update or create a Thanhtoan
     * const thanhtoan = await prisma.thanhtoan.upsert({
     *   create: {
     *     // ... data to create a Thanhtoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thanhtoan we want to update
     *   }
     * })
    **/
    upsert<T extends ThanhtoanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThanhtoanUpsertArgs<ExtArgs>>
    ): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Thanhtoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanCountArgs} args - Arguments to filter Thanhtoans to count.
     * @example
     * // Count the number of Thanhtoans
     * const count = await prisma.thanhtoan.count({
     *   where: {
     *     // ... the filter for the Thanhtoans we want to count
     *   }
     * })
    **/
    count<T extends ThanhtoanCountArgs>(
      args?: Subset<T, ThanhtoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThanhtoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thanhtoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThanhtoanAggregateArgs>(args: Subset<T, ThanhtoanAggregateArgs>): Prisma.PrismaPromise<GetThanhtoanAggregateType<T>>

    /**
     * Group by Thanhtoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThanhtoanGroupByArgs} args - Group by arguments.
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
      T extends ThanhtoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThanhtoanGroupByArgs['orderBy'] }
        : { orderBy?: ThanhtoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThanhtoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThanhtoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thanhtoan model
   */
  readonly fields: ThanhtoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thanhtoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThanhtoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Hoadon<T extends Thanhtoan$HoadonArgs<ExtArgs> = {}>(args?: Subset<T, Thanhtoan$HoadonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Thanhtoan model
   */ 
  interface ThanhtoanFieldRefs {
    readonly id: FieldRef<"Thanhtoan", 'Int'>
    readonly phuongthuc: FieldRef<"Thanhtoan", 'String'>
    readonly sotien: FieldRef<"Thanhtoan", 'Int'>
    readonly trangthai: FieldRef<"Thanhtoan", 'String'>
    readonly ngaythanhtoan: FieldRef<"Thanhtoan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Thanhtoan findUnique
   */
  export type ThanhtoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter, which Thanhtoan to fetch.
     */
    where: ThanhtoanWhereUniqueInput
  }

  /**
   * Thanhtoan findUniqueOrThrow
   */
  export type ThanhtoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter, which Thanhtoan to fetch.
     */
    where: ThanhtoanWhereUniqueInput
  }

  /**
   * Thanhtoan findFirst
   */
  export type ThanhtoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter, which Thanhtoan to fetch.
     */
    where?: ThanhtoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thanhtoans to fetch.
     */
    orderBy?: ThanhtoanOrderByWithRelationInput | ThanhtoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thanhtoans.
     */
    cursor?: ThanhtoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thanhtoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thanhtoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thanhtoans.
     */
    distinct?: ThanhtoanScalarFieldEnum | ThanhtoanScalarFieldEnum[]
  }

  /**
   * Thanhtoan findFirstOrThrow
   */
  export type ThanhtoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter, which Thanhtoan to fetch.
     */
    where?: ThanhtoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thanhtoans to fetch.
     */
    orderBy?: ThanhtoanOrderByWithRelationInput | ThanhtoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thanhtoans.
     */
    cursor?: ThanhtoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thanhtoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thanhtoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thanhtoans.
     */
    distinct?: ThanhtoanScalarFieldEnum | ThanhtoanScalarFieldEnum[]
  }

  /**
   * Thanhtoan findMany
   */
  export type ThanhtoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter, which Thanhtoans to fetch.
     */
    where?: ThanhtoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thanhtoans to fetch.
     */
    orderBy?: ThanhtoanOrderByWithRelationInput | ThanhtoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thanhtoans.
     */
    cursor?: ThanhtoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thanhtoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thanhtoans.
     */
    skip?: number
    distinct?: ThanhtoanScalarFieldEnum | ThanhtoanScalarFieldEnum[]
  }

  /**
   * Thanhtoan create
   */
  export type ThanhtoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Thanhtoan.
     */
    data: XOR<ThanhtoanCreateInput, ThanhtoanUncheckedCreateInput>
  }

  /**
   * Thanhtoan createMany
   */
  export type ThanhtoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thanhtoans.
     */
    data: ThanhtoanCreateManyInput | ThanhtoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thanhtoan update
   */
  export type ThanhtoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Thanhtoan.
     */
    data: XOR<ThanhtoanUpdateInput, ThanhtoanUncheckedUpdateInput>
    /**
     * Choose, which Thanhtoan to update.
     */
    where: ThanhtoanWhereUniqueInput
  }

  /**
   * Thanhtoan updateMany
   */
  export type ThanhtoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thanhtoans.
     */
    data: XOR<ThanhtoanUpdateManyMutationInput, ThanhtoanUncheckedUpdateManyInput>
    /**
     * Filter which Thanhtoans to update
     */
    where?: ThanhtoanWhereInput
  }

  /**
   * Thanhtoan upsert
   */
  export type ThanhtoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Thanhtoan to update in case it exists.
     */
    where: ThanhtoanWhereUniqueInput
    /**
     * In case the Thanhtoan found by the `where` argument doesn't exist, create a new Thanhtoan with this data.
     */
    create: XOR<ThanhtoanCreateInput, ThanhtoanUncheckedCreateInput>
    /**
     * In case the Thanhtoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThanhtoanUpdateInput, ThanhtoanUncheckedUpdateInput>
  }

  /**
   * Thanhtoan delete
   */
  export type ThanhtoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    /**
     * Filter which Thanhtoan to delete.
     */
    where: ThanhtoanWhereUniqueInput
  }

  /**
   * Thanhtoan deleteMany
   */
  export type ThanhtoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thanhtoans to delete
     */
    where?: ThanhtoanWhereInput
  }

  /**
   * Thanhtoan.Hoadon
   */
  export type Thanhtoan$HoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    where?: HoadonWhereInput
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    cursor?: HoadonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * Thanhtoan without action
   */
  export type ThanhtoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
  }


  /**
   * Model Hoadon
   */

  export type AggregateHoadon = {
    _count: HoadonCountAggregateOutputType | null
    _avg: HoadonAvgAggregateOutputType | null
    _sum: HoadonSumAggregateOutputType | null
    _min: HoadonMinAggregateOutputType | null
    _max: HoadonMaxAggregateOutputType | null
  }

  export type HoadonAvgAggregateOutputType = {
    id: number | null
    tongtien: number | null
    User_id: number | null
    Thanhtoan_id: number | null
    Lichtrinh_id: number | null
  }

  export type HoadonSumAggregateOutputType = {
    id: number | null
    tongtien: number | null
    User_id: number | null
    Thanhtoan_id: number | null
    Lichtrinh_id: number | null
  }

  export type HoadonMinAggregateOutputType = {
    id: number | null
    ngayxuat: Date | null
    tongtien: number | null
    trangthai: string | null
    User_id: number | null
    Thanhtoan_id: number | null
    Lichtrinh_id: number | null
  }

  export type HoadonMaxAggregateOutputType = {
    id: number | null
    ngayxuat: Date | null
    tongtien: number | null
    trangthai: string | null
    User_id: number | null
    Thanhtoan_id: number | null
    Lichtrinh_id: number | null
  }

  export type HoadonCountAggregateOutputType = {
    id: number
    ngayxuat: number
    tongtien: number
    trangthai: number
    User_id: number
    Thanhtoan_id: number
    Lichtrinh_id: number
    _all: number
  }


  export type HoadonAvgAggregateInputType = {
    id?: true
    tongtien?: true
    User_id?: true
    Thanhtoan_id?: true
    Lichtrinh_id?: true
  }

  export type HoadonSumAggregateInputType = {
    id?: true
    tongtien?: true
    User_id?: true
    Thanhtoan_id?: true
    Lichtrinh_id?: true
  }

  export type HoadonMinAggregateInputType = {
    id?: true
    ngayxuat?: true
    tongtien?: true
    trangthai?: true
    User_id?: true
    Thanhtoan_id?: true
    Lichtrinh_id?: true
  }

  export type HoadonMaxAggregateInputType = {
    id?: true
    ngayxuat?: true
    tongtien?: true
    trangthai?: true
    User_id?: true
    Thanhtoan_id?: true
    Lichtrinh_id?: true
  }

  export type HoadonCountAggregateInputType = {
    id?: true
    ngayxuat?: true
    tongtien?: true
    trangthai?: true
    User_id?: true
    Thanhtoan_id?: true
    Lichtrinh_id?: true
    _all?: true
  }

  export type HoadonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hoadon to aggregate.
     */
    where?: HoadonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoadons to fetch.
     */
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoadonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoadons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoadons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hoadons
    **/
    _count?: true | HoadonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoadonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoadonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoadonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoadonMaxAggregateInputType
  }

  export type GetHoadonAggregateType<T extends HoadonAggregateArgs> = {
        [P in keyof T & keyof AggregateHoadon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoadon[P]>
      : GetScalarType<T[P], AggregateHoadon[P]>
  }




  export type HoadonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoadonWhereInput
    orderBy?: HoadonOrderByWithAggregationInput | HoadonOrderByWithAggregationInput[]
    by: HoadonScalarFieldEnum[] | HoadonScalarFieldEnum
    having?: HoadonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoadonCountAggregateInputType | true
    _avg?: HoadonAvgAggregateInputType
    _sum?: HoadonSumAggregateInputType
    _min?: HoadonMinAggregateInputType
    _max?: HoadonMaxAggregateInputType
  }

  export type HoadonGroupByOutputType = {
    id: number
    ngayxuat: Date
    tongtien: number
    trangthai: string | null
    User_id: number
    Thanhtoan_id: number
    Lichtrinh_id: number
    _count: HoadonCountAggregateOutputType | null
    _avg: HoadonAvgAggregateOutputType | null
    _sum: HoadonSumAggregateOutputType | null
    _min: HoadonMinAggregateOutputType | null
    _max: HoadonMaxAggregateOutputType | null
  }

  type GetHoadonGroupByPayload<T extends HoadonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoadonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoadonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoadonGroupByOutputType[P]>
            : GetScalarType<T[P], HoadonGroupByOutputType[P]>
        }
      >
    >


  export type HoadonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ngayxuat?: boolean
    tongtien?: boolean
    trangthai?: boolean
    User_id?: boolean
    Thanhtoan_id?: boolean
    Lichtrinh_id?: boolean
    User?: boolean | Hoadon$UserArgs<ExtArgs>
    Thanhtoan?: boolean | Hoadon$ThanhtoanArgs<ExtArgs>
    Lichtrinh?: boolean | Hoadon$LichtrinhArgs<ExtArgs>
  }, ExtArgs["result"]["hoadon"]>


  export type HoadonSelectScalar = {
    id?: boolean
    ngayxuat?: boolean
    tongtien?: boolean
    trangthai?: boolean
    User_id?: boolean
    Thanhtoan_id?: boolean
    Lichtrinh_id?: boolean
  }

  export type HoadonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Hoadon$UserArgs<ExtArgs>
    Thanhtoan?: boolean | Hoadon$ThanhtoanArgs<ExtArgs>
    Lichtrinh?: boolean | Hoadon$LichtrinhArgs<ExtArgs>
  }

  export type $HoadonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hoadon"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Thanhtoan: Prisma.$ThanhtoanPayload<ExtArgs> | null
      Lichtrinh: Prisma.$LichtrinhPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ngayxuat: Date
      tongtien: number
      trangthai: string | null
      User_id: number
      Thanhtoan_id: number
      Lichtrinh_id: number
    }, ExtArgs["result"]["hoadon"]>
    composites: {}
  }

  type HoadonGetPayload<S extends boolean | null | undefined | HoadonDefaultArgs> = $Result.GetResult<Prisma.$HoadonPayload, S>

  type HoadonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HoadonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HoadonCountAggregateInputType | true
    }

  export interface HoadonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hoadon'], meta: { name: 'Hoadon' } }
    /**
     * Find zero or one Hoadon that matches the filter.
     * @param {HoadonFindUniqueArgs} args - Arguments to find a Hoadon
     * @example
     * // Get one Hoadon
     * const hoadon = await prisma.hoadon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HoadonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonFindUniqueArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hoadon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HoadonFindUniqueOrThrowArgs} args - Arguments to find a Hoadon
     * @example
     * // Get one Hoadon
     * const hoadon = await prisma.hoadon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HoadonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hoadon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonFindFirstArgs} args - Arguments to find a Hoadon
     * @example
     * // Get one Hoadon
     * const hoadon = await prisma.hoadon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HoadonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonFindFirstArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hoadon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonFindFirstOrThrowArgs} args - Arguments to find a Hoadon
     * @example
     * // Get one Hoadon
     * const hoadon = await prisma.hoadon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HoadonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hoadons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoadons
     * const hoadons = await prisma.hoadon.findMany()
     * 
     * // Get first 10 Hoadons
     * const hoadons = await prisma.hoadon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hoadonWithIdOnly = await prisma.hoadon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HoadonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hoadon.
     * @param {HoadonCreateArgs} args - Arguments to create a Hoadon.
     * @example
     * // Create one Hoadon
     * const Hoadon = await prisma.hoadon.create({
     *   data: {
     *     // ... data to create a Hoadon
     *   }
     * })
     * 
    **/
    create<T extends HoadonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonCreateArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hoadons.
     * @param {HoadonCreateManyArgs} args - Arguments to create many Hoadons.
     * @example
     * // Create many Hoadons
     * const hoadon = await prisma.hoadon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends HoadonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hoadon.
     * @param {HoadonDeleteArgs} args - Arguments to delete one Hoadon.
     * @example
     * // Delete one Hoadon
     * const Hoadon = await prisma.hoadon.delete({
     *   where: {
     *     // ... filter to delete one Hoadon
     *   }
     * })
     * 
    **/
    delete<T extends HoadonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonDeleteArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hoadon.
     * @param {HoadonUpdateArgs} args - Arguments to update one Hoadon.
     * @example
     * // Update one Hoadon
     * const hoadon = await prisma.hoadon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HoadonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonUpdateArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hoadons.
     * @param {HoadonDeleteManyArgs} args - Arguments to filter Hoadons to delete.
     * @example
     * // Delete a few Hoadons
     * const { count } = await prisma.hoadon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HoadonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HoadonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoadons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoadons
     * const hoadon = await prisma.hoadon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HoadonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoadon.
     * @param {HoadonUpsertArgs} args - Arguments to update or create a Hoadon.
     * @example
     * // Update or create a Hoadon
     * const hoadon = await prisma.hoadon.upsert({
     *   create: {
     *     // ... data to create a Hoadon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoadon we want to update
     *   }
     * })
    **/
    upsert<T extends HoadonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HoadonUpsertArgs<ExtArgs>>
    ): Prisma__HoadonClient<$Result.GetResult<Prisma.$HoadonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hoadons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonCountArgs} args - Arguments to filter Hoadons to count.
     * @example
     * // Count the number of Hoadons
     * const count = await prisma.hoadon.count({
     *   where: {
     *     // ... the filter for the Hoadons we want to count
     *   }
     * })
    **/
    count<T extends HoadonCountArgs>(
      args?: Subset<T, HoadonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoadonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoadon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoadonAggregateArgs>(args: Subset<T, HoadonAggregateArgs>): Prisma.PrismaPromise<GetHoadonAggregateType<T>>

    /**
     * Group by Hoadon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoadonGroupByArgs} args - Group by arguments.
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
      T extends HoadonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoadonGroupByArgs['orderBy'] }
        : { orderBy?: HoadonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoadonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoadonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hoadon model
   */
  readonly fields: HoadonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hoadon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoadonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Hoadon$UserArgs<ExtArgs> = {}>(args?: Subset<T, Hoadon$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Thanhtoan<T extends Hoadon$ThanhtoanArgs<ExtArgs> = {}>(args?: Subset<T, Hoadon$ThanhtoanArgs<ExtArgs>>): Prisma__ThanhtoanClient<$Result.GetResult<Prisma.$ThanhtoanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Lichtrinh<T extends Hoadon$LichtrinhArgs<ExtArgs> = {}>(args?: Subset<T, Hoadon$LichtrinhArgs<ExtArgs>>): Prisma__LichtrinhClient<$Result.GetResult<Prisma.$LichtrinhPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hoadon model
   */ 
  interface HoadonFieldRefs {
    readonly id: FieldRef<"Hoadon", 'Int'>
    readonly ngayxuat: FieldRef<"Hoadon", 'DateTime'>
    readonly tongtien: FieldRef<"Hoadon", 'Int'>
    readonly trangthai: FieldRef<"Hoadon", 'String'>
    readonly User_id: FieldRef<"Hoadon", 'Int'>
    readonly Thanhtoan_id: FieldRef<"Hoadon", 'Int'>
    readonly Lichtrinh_id: FieldRef<"Hoadon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hoadon findUnique
   */
  export type HoadonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter, which Hoadon to fetch.
     */
    where: HoadonWhereUniqueInput
  }

  /**
   * Hoadon findUniqueOrThrow
   */
  export type HoadonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter, which Hoadon to fetch.
     */
    where: HoadonWhereUniqueInput
  }

  /**
   * Hoadon findFirst
   */
  export type HoadonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter, which Hoadon to fetch.
     */
    where?: HoadonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoadons to fetch.
     */
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hoadons.
     */
    cursor?: HoadonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoadons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoadons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hoadons.
     */
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * Hoadon findFirstOrThrow
   */
  export type HoadonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter, which Hoadon to fetch.
     */
    where?: HoadonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoadons to fetch.
     */
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hoadons.
     */
    cursor?: HoadonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoadons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoadons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hoadons.
     */
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * Hoadon findMany
   */
  export type HoadonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter, which Hoadons to fetch.
     */
    where?: HoadonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hoadons to fetch.
     */
    orderBy?: HoadonOrderByWithRelationInput | HoadonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hoadons.
     */
    cursor?: HoadonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hoadons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hoadons.
     */
    skip?: number
    distinct?: HoadonScalarFieldEnum | HoadonScalarFieldEnum[]
  }

  /**
   * Hoadon create
   */
  export type HoadonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * The data needed to create a Hoadon.
     */
    data: XOR<HoadonCreateInput, HoadonUncheckedCreateInput>
  }

  /**
   * Hoadon createMany
   */
  export type HoadonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hoadons.
     */
    data: HoadonCreateManyInput | HoadonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hoadon update
   */
  export type HoadonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * The data needed to update a Hoadon.
     */
    data: XOR<HoadonUpdateInput, HoadonUncheckedUpdateInput>
    /**
     * Choose, which Hoadon to update.
     */
    where: HoadonWhereUniqueInput
  }

  /**
   * Hoadon updateMany
   */
  export type HoadonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hoadons.
     */
    data: XOR<HoadonUpdateManyMutationInput, HoadonUncheckedUpdateManyInput>
    /**
     * Filter which Hoadons to update
     */
    where?: HoadonWhereInput
  }

  /**
   * Hoadon upsert
   */
  export type HoadonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * The filter to search for the Hoadon to update in case it exists.
     */
    where: HoadonWhereUniqueInput
    /**
     * In case the Hoadon found by the `where` argument doesn't exist, create a new Hoadon with this data.
     */
    create: XOR<HoadonCreateInput, HoadonUncheckedCreateInput>
    /**
     * In case the Hoadon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoadonUpdateInput, HoadonUncheckedUpdateInput>
  }

  /**
   * Hoadon delete
   */
  export type HoadonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
    /**
     * Filter which Hoadon to delete.
     */
    where: HoadonWhereUniqueInput
  }

  /**
   * Hoadon deleteMany
   */
  export type HoadonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hoadons to delete
     */
    where?: HoadonWhereInput
  }

  /**
   * Hoadon.User
   */
  export type Hoadon$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Hoadon.Thanhtoan
   */
  export type Hoadon$ThanhtoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thanhtoan
     */
    select?: ThanhtoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThanhtoanInclude<ExtArgs> | null
    where?: ThanhtoanWhereInput
  }

  /**
   * Hoadon.Lichtrinh
   */
  export type Hoadon$LichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lichtrinh
     */
    select?: LichtrinhSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichtrinhInclude<ExtArgs> | null
    where?: LichtrinhWhereInput
  }

  /**
   * Hoadon without action
   */
  export type HoadonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hoadon
     */
    select?: HoadonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoadonInclude<ExtArgs> | null
  }


  /**
   * Model gopy
   */

  export type AggregateGopy = {
    _count: GopyCountAggregateOutputType | null
    _avg: GopyAvgAggregateOutputType | null
    _sum: GopySumAggregateOutputType | null
    _min: GopyMinAggregateOutputType | null
    _max: GopyMaxAggregateOutputType | null
  }

  export type GopyAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type GopySumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type GopyMinAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    sodienthoai: string | null
    rating: number | null
    gopythem: string | null
    createdAt: Date | null
  }

  export type GopyMaxAggregateOutputType = {
    id: number | null
    hoten: string | null
    email: string | null
    sodienthoai: string | null
    rating: number | null
    gopythem: string | null
    createdAt: Date | null
  }

  export type GopyCountAggregateOutputType = {
    id: number
    hoten: number
    email: number
    sodienthoai: number
    rating: number
    danhgiachitiet: number
    gopythem: number
    createdAt: number
    _all: number
  }


  export type GopyAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type GopySumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type GopyMinAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sodienthoai?: true
    rating?: true
    gopythem?: true
    createdAt?: true
  }

  export type GopyMaxAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sodienthoai?: true
    rating?: true
    gopythem?: true
    createdAt?: true
  }

  export type GopyCountAggregateInputType = {
    id?: true
    hoten?: true
    email?: true
    sodienthoai?: true
    rating?: true
    danhgiachitiet?: true
    gopythem?: true
    createdAt?: true
    _all?: true
  }

  export type GopyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gopy to aggregate.
     */
    where?: gopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gopies to fetch.
     */
    orderBy?: gopyOrderByWithRelationInput | gopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gopies
    **/
    _count?: true | GopyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GopyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GopySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GopyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GopyMaxAggregateInputType
  }

  export type GetGopyAggregateType<T extends GopyAggregateArgs> = {
        [P in keyof T & keyof AggregateGopy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGopy[P]>
      : GetScalarType<T[P], AggregateGopy[P]>
  }




  export type gopyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gopyWhereInput
    orderBy?: gopyOrderByWithAggregationInput | gopyOrderByWithAggregationInput[]
    by: GopyScalarFieldEnum[] | GopyScalarFieldEnum
    having?: gopyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GopyCountAggregateInputType | true
    _avg?: GopyAvgAggregateInputType
    _sum?: GopySumAggregateInputType
    _min?: GopyMinAggregateInputType
    _max?: GopyMaxAggregateInputType
  }

  export type GopyGroupByOutputType = {
    id: number
    hoten: string
    email: string
    sodienthoai: string
    rating: number
    danhgiachitiet: JsonValue | null
    gopythem: string | null
    createdAt: Date
    _count: GopyCountAggregateOutputType | null
    _avg: GopyAvgAggregateOutputType | null
    _sum: GopySumAggregateOutputType | null
    _min: GopyMinAggregateOutputType | null
    _max: GopyMaxAggregateOutputType | null
  }

  type GetGopyGroupByPayload<T extends gopyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GopyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GopyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GopyGroupByOutputType[P]>
            : GetScalarType<T[P], GopyGroupByOutputType[P]>
        }
      >
    >


  export type gopySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hoten?: boolean
    email?: boolean
    sodienthoai?: boolean
    rating?: boolean
    danhgiachitiet?: boolean
    gopythem?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gopy"]>


  export type gopySelectScalar = {
    id?: boolean
    hoten?: boolean
    email?: boolean
    sodienthoai?: boolean
    rating?: boolean
    danhgiachitiet?: boolean
    gopythem?: boolean
    createdAt?: boolean
  }


  export type $gopyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gopy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hoten: string
      email: string
      sodienthoai: string
      rating: number
      danhgiachitiet: Prisma.JsonValue | null
      gopythem: string | null
      createdAt: Date
    }, ExtArgs["result"]["gopy"]>
    composites: {}
  }

  type gopyGetPayload<S extends boolean | null | undefined | gopyDefaultArgs> = $Result.GetResult<Prisma.$gopyPayload, S>

  type gopyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gopyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GopyCountAggregateInputType | true
    }

  export interface gopyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gopy'], meta: { name: 'gopy' } }
    /**
     * Find zero or one Gopy that matches the filter.
     * @param {gopyFindUniqueArgs} args - Arguments to find a Gopy
     * @example
     * // Get one Gopy
     * const gopy = await prisma.gopy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gopyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gopyFindUniqueArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gopy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gopyFindUniqueOrThrowArgs} args - Arguments to find a Gopy
     * @example
     * // Get one Gopy
     * const gopy = await prisma.gopy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gopyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gopy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyFindFirstArgs} args - Arguments to find a Gopy
     * @example
     * // Get one Gopy
     * const gopy = await prisma.gopy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gopyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyFindFirstArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gopy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyFindFirstOrThrowArgs} args - Arguments to find a Gopy
     * @example
     * // Get one Gopy
     * const gopy = await prisma.gopy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gopyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gopies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gopies
     * const gopies = await prisma.gopy.findMany()
     * 
     * // Get first 10 Gopies
     * const gopies = await prisma.gopy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gopyWithIdOnly = await prisma.gopy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends gopyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gopy.
     * @param {gopyCreateArgs} args - Arguments to create a Gopy.
     * @example
     * // Create one Gopy
     * const Gopy = await prisma.gopy.create({
     *   data: {
     *     // ... data to create a Gopy
     *   }
     * })
     * 
    **/
    create<T extends gopyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gopyCreateArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Gopies.
     * @param {gopyCreateManyArgs} args - Arguments to create many Gopies.
     * @example
     * // Create many Gopies
     * const gopy = await prisma.gopy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends gopyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gopy.
     * @param {gopyDeleteArgs} args - Arguments to delete one Gopy.
     * @example
     * // Delete one Gopy
     * const Gopy = await prisma.gopy.delete({
     *   where: {
     *     // ... filter to delete one Gopy
     *   }
     * })
     * 
    **/
    delete<T extends gopyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gopyDeleteArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gopy.
     * @param {gopyUpdateArgs} args - Arguments to update one Gopy.
     * @example
     * // Update one Gopy
     * const gopy = await prisma.gopy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gopyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gopyUpdateArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gopies.
     * @param {gopyDeleteManyArgs} args - Arguments to filter Gopies to delete.
     * @example
     * // Delete a few Gopies
     * const { count } = await prisma.gopy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gopyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gopyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gopies
     * const gopy = await prisma.gopy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gopyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gopyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gopy.
     * @param {gopyUpsertArgs} args - Arguments to update or create a Gopy.
     * @example
     * // Update or create a Gopy
     * const gopy = await prisma.gopy.upsert({
     *   create: {
     *     // ... data to create a Gopy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gopy we want to update
     *   }
     * })
    **/
    upsert<T extends gopyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gopyUpsertArgs<ExtArgs>>
    ): Prisma__gopyClient<$Result.GetResult<Prisma.$gopyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyCountArgs} args - Arguments to filter Gopies to count.
     * @example
     * // Count the number of Gopies
     * const count = await prisma.gopy.count({
     *   where: {
     *     // ... the filter for the Gopies we want to count
     *   }
     * })
    **/
    count<T extends gopyCountArgs>(
      args?: Subset<T, gopyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GopyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GopyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GopyAggregateArgs>(args: Subset<T, GopyAggregateArgs>): Prisma.PrismaPromise<GetGopyAggregateType<T>>

    /**
     * Group by Gopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gopyGroupByArgs} args - Group by arguments.
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
      T extends gopyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gopyGroupByArgs['orderBy'] }
        : { orderBy?: gopyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gopyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGopyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gopy model
   */
  readonly fields: gopyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gopy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gopyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the gopy model
   */ 
  interface gopyFieldRefs {
    readonly id: FieldRef<"gopy", 'Int'>
    readonly hoten: FieldRef<"gopy", 'String'>
    readonly email: FieldRef<"gopy", 'String'>
    readonly sodienthoai: FieldRef<"gopy", 'String'>
    readonly rating: FieldRef<"gopy", 'Int'>
    readonly danhgiachitiet: FieldRef<"gopy", 'Json'>
    readonly gopythem: FieldRef<"gopy", 'String'>
    readonly createdAt: FieldRef<"gopy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gopy findUnique
   */
  export type gopyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter, which gopy to fetch.
     */
    where: gopyWhereUniqueInput
  }

  /**
   * gopy findUniqueOrThrow
   */
  export type gopyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter, which gopy to fetch.
     */
    where: gopyWhereUniqueInput
  }

  /**
   * gopy findFirst
   */
  export type gopyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter, which gopy to fetch.
     */
    where?: gopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gopies to fetch.
     */
    orderBy?: gopyOrderByWithRelationInput | gopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gopies.
     */
    cursor?: gopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gopies.
     */
    distinct?: GopyScalarFieldEnum | GopyScalarFieldEnum[]
  }

  /**
   * gopy findFirstOrThrow
   */
  export type gopyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter, which gopy to fetch.
     */
    where?: gopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gopies to fetch.
     */
    orderBy?: gopyOrderByWithRelationInput | gopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gopies.
     */
    cursor?: gopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gopies.
     */
    distinct?: GopyScalarFieldEnum | GopyScalarFieldEnum[]
  }

  /**
   * gopy findMany
   */
  export type gopyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter, which gopies to fetch.
     */
    where?: gopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gopies to fetch.
     */
    orderBy?: gopyOrderByWithRelationInput | gopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gopies.
     */
    cursor?: gopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gopies.
     */
    skip?: number
    distinct?: GopyScalarFieldEnum | GopyScalarFieldEnum[]
  }

  /**
   * gopy create
   */
  export type gopyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * The data needed to create a gopy.
     */
    data: XOR<gopyCreateInput, gopyUncheckedCreateInput>
  }

  /**
   * gopy createMany
   */
  export type gopyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gopies.
     */
    data: gopyCreateManyInput | gopyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gopy update
   */
  export type gopyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * The data needed to update a gopy.
     */
    data: XOR<gopyUpdateInput, gopyUncheckedUpdateInput>
    /**
     * Choose, which gopy to update.
     */
    where: gopyWhereUniqueInput
  }

  /**
   * gopy updateMany
   */
  export type gopyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gopies.
     */
    data: XOR<gopyUpdateManyMutationInput, gopyUncheckedUpdateManyInput>
    /**
     * Filter which gopies to update
     */
    where?: gopyWhereInput
  }

  /**
   * gopy upsert
   */
  export type gopyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * The filter to search for the gopy to update in case it exists.
     */
    where: gopyWhereUniqueInput
    /**
     * In case the gopy found by the `where` argument doesn't exist, create a new gopy with this data.
     */
    create: XOR<gopyCreateInput, gopyUncheckedCreateInput>
    /**
     * In case the gopy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gopyUpdateInput, gopyUncheckedUpdateInput>
  }

  /**
   * gopy delete
   */
  export type gopyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
    /**
     * Filter which gopy to delete.
     */
    where: gopyWhereUniqueInput
  }

  /**
   * gopy deleteMany
   */
  export type gopyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gopies to delete
     */
    where?: gopyWhereInput
  }

  /**
   * gopy without action
   */
  export type gopyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gopy
     */
    select?: gopySelect<ExtArgs> | null
  }


  /**
   * Model Noidung
   */

  export type AggregateNoidung = {
    _count: NoidungCountAggregateOutputType | null
    _avg: NoidungAvgAggregateOutputType | null
    _sum: NoidungSumAggregateOutputType | null
    _min: NoidungMinAggregateOutputType | null
    _max: NoidungMaxAggregateOutputType | null
  }

  export type NoidungAvgAggregateOutputType = {
    id: number | null
    luotXem: number | null
  }

  export type NoidungSumAggregateOutputType = {
    id: number | null
    luotXem: number | null
  }

  export type NoidungMinAggregateOutputType = {
    id: number | null
    tieude: string | null
    hinhanh: string | null
    danhMuc: string | null
    mota: string | null
    noidung: string | null
    luotXem: number | null
    createdAt: Date | null
    trangThai: boolean | null
  }

  export type NoidungMaxAggregateOutputType = {
    id: number | null
    tieude: string | null
    hinhanh: string | null
    danhMuc: string | null
    mota: string | null
    noidung: string | null
    luotXem: number | null
    createdAt: Date | null
    trangThai: boolean | null
  }

  export type NoidungCountAggregateOutputType = {
    id: number
    tieude: number
    hinhanh: number
    danhMuc: number
    mota: number
    noidung: number
    luotXem: number
    createdAt: number
    trangThai: number
    _all: number
  }


  export type NoidungAvgAggregateInputType = {
    id?: true
    luotXem?: true
  }

  export type NoidungSumAggregateInputType = {
    id?: true
    luotXem?: true
  }

  export type NoidungMinAggregateInputType = {
    id?: true
    tieude?: true
    hinhanh?: true
    danhMuc?: true
    mota?: true
    noidung?: true
    luotXem?: true
    createdAt?: true
    trangThai?: true
  }

  export type NoidungMaxAggregateInputType = {
    id?: true
    tieude?: true
    hinhanh?: true
    danhMuc?: true
    mota?: true
    noidung?: true
    luotXem?: true
    createdAt?: true
    trangThai?: true
  }

  export type NoidungCountAggregateInputType = {
    id?: true
    tieude?: true
    hinhanh?: true
    danhMuc?: true
    mota?: true
    noidung?: true
    luotXem?: true
    createdAt?: true
    trangThai?: true
    _all?: true
  }

  export type NoidungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noidung to aggregate.
     */
    where?: NoidungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noidungs to fetch.
     */
    orderBy?: NoidungOrderByWithRelationInput | NoidungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoidungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noidungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noidungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noidungs
    **/
    _count?: true | NoidungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoidungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoidungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoidungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoidungMaxAggregateInputType
  }

  export type GetNoidungAggregateType<T extends NoidungAggregateArgs> = {
        [P in keyof T & keyof AggregateNoidung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoidung[P]>
      : GetScalarType<T[P], AggregateNoidung[P]>
  }




  export type NoidungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoidungWhereInput
    orderBy?: NoidungOrderByWithAggregationInput | NoidungOrderByWithAggregationInput[]
    by: NoidungScalarFieldEnum[] | NoidungScalarFieldEnum
    having?: NoidungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoidungCountAggregateInputType | true
    _avg?: NoidungAvgAggregateInputType
    _sum?: NoidungSumAggregateInputType
    _min?: NoidungMinAggregateInputType
    _max?: NoidungMaxAggregateInputType
  }

  export type NoidungGroupByOutputType = {
    id: number
    tieude: string
    hinhanh: string | null
    danhMuc: string
    mota: string | null
    noidung: string | null
    luotXem: number
    createdAt: Date
    trangThai: boolean
    _count: NoidungCountAggregateOutputType | null
    _avg: NoidungAvgAggregateOutputType | null
    _sum: NoidungSumAggregateOutputType | null
    _min: NoidungMinAggregateOutputType | null
    _max: NoidungMaxAggregateOutputType | null
  }

  type GetNoidungGroupByPayload<T extends NoidungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoidungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoidungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoidungGroupByOutputType[P]>
            : GetScalarType<T[P], NoidungGroupByOutputType[P]>
        }
      >
    >


  export type NoidungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tieude?: boolean
    hinhanh?: boolean
    danhMuc?: boolean
    mota?: boolean
    noidung?: boolean
    luotXem?: boolean
    createdAt?: boolean
    trangThai?: boolean
  }, ExtArgs["result"]["noidung"]>


  export type NoidungSelectScalar = {
    id?: boolean
    tieude?: boolean
    hinhanh?: boolean
    danhMuc?: boolean
    mota?: boolean
    noidung?: boolean
    luotXem?: boolean
    createdAt?: boolean
    trangThai?: boolean
  }


  export type $NoidungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noidung"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tieude: string
      hinhanh: string | null
      danhMuc: string
      mota: string | null
      noidung: string | null
      luotXem: number
      createdAt: Date
      trangThai: boolean
    }, ExtArgs["result"]["noidung"]>
    composites: {}
  }

  type NoidungGetPayload<S extends boolean | null | undefined | NoidungDefaultArgs> = $Result.GetResult<Prisma.$NoidungPayload, S>

  type NoidungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoidungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoidungCountAggregateInputType | true
    }

  export interface NoidungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noidung'], meta: { name: 'Noidung' } }
    /**
     * Find zero or one Noidung that matches the filter.
     * @param {NoidungFindUniqueArgs} args - Arguments to find a Noidung
     * @example
     * // Get one Noidung
     * const noidung = await prisma.noidung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoidungFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungFindUniqueArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Noidung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoidungFindUniqueOrThrowArgs} args - Arguments to find a Noidung
     * @example
     * // Get one Noidung
     * const noidung = await prisma.noidung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoidungFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Noidung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungFindFirstArgs} args - Arguments to find a Noidung
     * @example
     * // Get one Noidung
     * const noidung = await prisma.noidung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoidungFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungFindFirstArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Noidung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungFindFirstOrThrowArgs} args - Arguments to find a Noidung
     * @example
     * // Get one Noidung
     * const noidung = await prisma.noidung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoidungFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Noidungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noidungs
     * const noidungs = await prisma.noidung.findMany()
     * 
     * // Get first 10 Noidungs
     * const noidungs = await prisma.noidung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noidungWithIdOnly = await prisma.noidung.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoidungFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Noidung.
     * @param {NoidungCreateArgs} args - Arguments to create a Noidung.
     * @example
     * // Create one Noidung
     * const Noidung = await prisma.noidung.create({
     *   data: {
     *     // ... data to create a Noidung
     *   }
     * })
     * 
    **/
    create<T extends NoidungCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungCreateArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Noidungs.
     * @param {NoidungCreateManyArgs} args - Arguments to create many Noidungs.
     * @example
     * // Create many Noidungs
     * const noidung = await prisma.noidung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends NoidungCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Noidung.
     * @param {NoidungDeleteArgs} args - Arguments to delete one Noidung.
     * @example
     * // Delete one Noidung
     * const Noidung = await prisma.noidung.delete({
     *   where: {
     *     // ... filter to delete one Noidung
     *   }
     * })
     * 
    **/
    delete<T extends NoidungDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungDeleteArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Noidung.
     * @param {NoidungUpdateArgs} args - Arguments to update one Noidung.
     * @example
     * // Update one Noidung
     * const noidung = await prisma.noidung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoidungUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungUpdateArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Noidungs.
     * @param {NoidungDeleteManyArgs} args - Arguments to filter Noidungs to delete.
     * @example
     * // Delete a few Noidungs
     * const { count } = await prisma.noidung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoidungDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoidungDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noidungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noidungs
     * const noidung = await prisma.noidung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoidungUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Noidung.
     * @param {NoidungUpsertArgs} args - Arguments to update or create a Noidung.
     * @example
     * // Update or create a Noidung
     * const noidung = await prisma.noidung.upsert({
     *   create: {
     *     // ... data to create a Noidung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noidung we want to update
     *   }
     * })
    **/
    upsert<T extends NoidungUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NoidungUpsertArgs<ExtArgs>>
    ): Prisma__NoidungClient<$Result.GetResult<Prisma.$NoidungPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Noidungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungCountArgs} args - Arguments to filter Noidungs to count.
     * @example
     * // Count the number of Noidungs
     * const count = await prisma.noidung.count({
     *   where: {
     *     // ... the filter for the Noidungs we want to count
     *   }
     * })
    **/
    count<T extends NoidungCountArgs>(
      args?: Subset<T, NoidungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoidungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noidung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoidungAggregateArgs>(args: Subset<T, NoidungAggregateArgs>): Prisma.PrismaPromise<GetNoidungAggregateType<T>>

    /**
     * Group by Noidung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoidungGroupByArgs} args - Group by arguments.
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
      T extends NoidungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoidungGroupByArgs['orderBy'] }
        : { orderBy?: NoidungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoidungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoidungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noidung model
   */
  readonly fields: NoidungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noidung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoidungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Noidung model
   */ 
  interface NoidungFieldRefs {
    readonly id: FieldRef<"Noidung", 'Int'>
    readonly tieude: FieldRef<"Noidung", 'String'>
    readonly hinhanh: FieldRef<"Noidung", 'String'>
    readonly danhMuc: FieldRef<"Noidung", 'String'>
    readonly mota: FieldRef<"Noidung", 'String'>
    readonly noidung: FieldRef<"Noidung", 'String'>
    readonly luotXem: FieldRef<"Noidung", 'Int'>
    readonly createdAt: FieldRef<"Noidung", 'DateTime'>
    readonly trangThai: FieldRef<"Noidung", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Noidung findUnique
   */
  export type NoidungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter, which Noidung to fetch.
     */
    where: NoidungWhereUniqueInput
  }

  /**
   * Noidung findUniqueOrThrow
   */
  export type NoidungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter, which Noidung to fetch.
     */
    where: NoidungWhereUniqueInput
  }

  /**
   * Noidung findFirst
   */
  export type NoidungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter, which Noidung to fetch.
     */
    where?: NoidungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noidungs to fetch.
     */
    orderBy?: NoidungOrderByWithRelationInput | NoidungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noidungs.
     */
    cursor?: NoidungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noidungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noidungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noidungs.
     */
    distinct?: NoidungScalarFieldEnum | NoidungScalarFieldEnum[]
  }

  /**
   * Noidung findFirstOrThrow
   */
  export type NoidungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter, which Noidung to fetch.
     */
    where?: NoidungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noidungs to fetch.
     */
    orderBy?: NoidungOrderByWithRelationInput | NoidungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noidungs.
     */
    cursor?: NoidungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noidungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noidungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noidungs.
     */
    distinct?: NoidungScalarFieldEnum | NoidungScalarFieldEnum[]
  }

  /**
   * Noidung findMany
   */
  export type NoidungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter, which Noidungs to fetch.
     */
    where?: NoidungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noidungs to fetch.
     */
    orderBy?: NoidungOrderByWithRelationInput | NoidungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noidungs.
     */
    cursor?: NoidungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noidungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noidungs.
     */
    skip?: number
    distinct?: NoidungScalarFieldEnum | NoidungScalarFieldEnum[]
  }

  /**
   * Noidung create
   */
  export type NoidungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * The data needed to create a Noidung.
     */
    data: XOR<NoidungCreateInput, NoidungUncheckedCreateInput>
  }

  /**
   * Noidung createMany
   */
  export type NoidungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noidungs.
     */
    data: NoidungCreateManyInput | NoidungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noidung update
   */
  export type NoidungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * The data needed to update a Noidung.
     */
    data: XOR<NoidungUpdateInput, NoidungUncheckedUpdateInput>
    /**
     * Choose, which Noidung to update.
     */
    where: NoidungWhereUniqueInput
  }

  /**
   * Noidung updateMany
   */
  export type NoidungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noidungs.
     */
    data: XOR<NoidungUpdateManyMutationInput, NoidungUncheckedUpdateManyInput>
    /**
     * Filter which Noidungs to update
     */
    where?: NoidungWhereInput
  }

  /**
   * Noidung upsert
   */
  export type NoidungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * The filter to search for the Noidung to update in case it exists.
     */
    where: NoidungWhereUniqueInput
    /**
     * In case the Noidung found by the `where` argument doesn't exist, create a new Noidung with this data.
     */
    create: XOR<NoidungCreateInput, NoidungUncheckedCreateInput>
    /**
     * In case the Noidung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoidungUpdateInput, NoidungUncheckedUpdateInput>
  }

  /**
   * Noidung delete
   */
  export type NoidungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
    /**
     * Filter which Noidung to delete.
     */
    where: NoidungWhereUniqueInput
  }

  /**
   * Noidung deleteMany
   */
  export type NoidungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noidungs to delete
     */
    where?: NoidungWhereInput
  }

  /**
   * Noidung without action
   */
  export type NoidungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noidung
     */
    select?: NoidungSelect<ExtArgs> | null
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
    hoten: 'hoten',
    email: 'email',
    matkhau: 'matkhau',
    sodienthoai: 'sodienthoai',
    diachi: 'diachi',
    trangthai: 'trangthai',
    creatAT: 'creatAT',
    updateAt: 'updateAt',
    isLocked: 'isLocked',
    Role_id: 'Role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    tenrole: 'tenrole'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const LichtrinhScalarFieldEnum: {
    id: 'id',
    tenlichtrinh: 'tenlichtrinh',
    ngaytao: 'ngaytao',
    ghichu: 'ghichu',
    User_id: 'User_id'
  };

  export type LichtrinhScalarFieldEnum = (typeof LichtrinhScalarFieldEnum)[keyof typeof LichtrinhScalarFieldEnum]


  export const LichtrinhCTScalarFieldEnum: {
    id: 'id',
    soluong: 'soluong',
    thanhtien: 'thanhtien',
    noikhoihanh: 'noikhoihanh',
    ngaykhoihanh: 'ngaykhoihanh',
    lichtrinhdichuyen: 'lichtrinhdichuyen',
    Lichtrinh_id: 'Lichtrinh_id',
    Goidichvu_id: 'Goidichvu_id'
  };

  export type LichtrinhCTScalarFieldEnum = (typeof LichtrinhCTScalarFieldEnum)[keyof typeof LichtrinhCTScalarFieldEnum]


  export const GoidichvuScalarFieldEnum: {
    id: 'id',
    tengoi: 'tengoi',
    mota: 'mota',
    gia: 'gia',
    thoiluongngay: 'thoiluongngay',
    trangthai: 'trangthai',
    hinhanh: 'hinhanh',
    sochoconlai: 'sochoconlai',
    Diadiem_id: 'Diadiem_id'
  };

  export type GoidichvuScalarFieldEnum = (typeof GoidichvuScalarFieldEnum)[keyof typeof GoidichvuScalarFieldEnum]


  export const DiadiemScalarFieldEnum: {
    id: 'id',
    tendiadiem: 'tendiadiem',
    diachi: 'diachi',
    mota: 'mota',
    hinhanh: 'hinhanh'
  };

  export type DiadiemScalarFieldEnum = (typeof DiadiemScalarFieldEnum)[keyof typeof DiadiemScalarFieldEnum]


  export const DanhgiaScalarFieldEnum: {
    id: 'id',
    noidung: 'noidung',
    User_id: 'User_id',
    Lichtrinh_id: 'Lichtrinh_id'
  };

  export type DanhgiaScalarFieldEnum = (typeof DanhgiaScalarFieldEnum)[keyof typeof DanhgiaScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    hoten: 'hoten',
    sodienthoai: 'sodienthoai',
    soluong: 'soluong',
    sotien: 'sotien',
    tour_id: 'tour_id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ThanhtoanScalarFieldEnum: {
    id: 'id',
    phuongthuc: 'phuongthuc',
    sotien: 'sotien',
    trangthai: 'trangthai',
    ngaythanhtoan: 'ngaythanhtoan'
  };

  export type ThanhtoanScalarFieldEnum = (typeof ThanhtoanScalarFieldEnum)[keyof typeof ThanhtoanScalarFieldEnum]


  export const HoadonScalarFieldEnum: {
    id: 'id',
    ngayxuat: 'ngayxuat',
    tongtien: 'tongtien',
    trangthai: 'trangthai',
    User_id: 'User_id',
    Thanhtoan_id: 'Thanhtoan_id',
    Lichtrinh_id: 'Lichtrinh_id'
  };

  export type HoadonScalarFieldEnum = (typeof HoadonScalarFieldEnum)[keyof typeof HoadonScalarFieldEnum]


  export const GopyScalarFieldEnum: {
    id: 'id',
    hoten: 'hoten',
    email: 'email',
    sodienthoai: 'sodienthoai',
    rating: 'rating',
    danhgiachitiet: 'danhgiachitiet',
    gopythem: 'gopythem',
    createdAt: 'createdAt'
  };

  export type GopyScalarFieldEnum = (typeof GopyScalarFieldEnum)[keyof typeof GopyScalarFieldEnum]


  export const NoidungScalarFieldEnum: {
    id: 'id',
    tieude: 'tieude',
    hinhanh: 'hinhanh',
    danhMuc: 'danhMuc',
    mota: 'mota',
    noidung: 'noidung',
    luotXem: 'luotXem',
    createdAt: 'createdAt',
    trangThai: 'trangThai'
  };

  export type NoidungScalarFieldEnum = (typeof NoidungScalarFieldEnum)[keyof typeof NoidungScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    hoten?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    matkhau?: StringNullableFilter<"User"> | string | null
    sodienthoai?: StringNullableFilter<"User"> | string | null
    diachi?: StringNullableFilter<"User"> | string | null
    trangthai?: StringNullableFilter<"User"> | string | null
    creatAT?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    isLocked?: BoolFilter<"User"> | boolean
    Role_id?: IntFilter<"User"> | number
    Role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    Lichtrinh?: LichtrinhListRelationFilter
    Hoadon?: HoadonListRelationFilter
    Danhgia?: DanhgiaListRelationFilter
    Booking?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    hoten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    matkhau?: SortOrderInput | SortOrder
    sodienthoai?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    trangthai?: SortOrderInput | SortOrder
    creatAT?: SortOrder
    updateAt?: SortOrder
    isLocked?: SortOrder
    Role_id?: SortOrder
    Role?: RoleOrderByWithRelationInput
    Lichtrinh?: LichtrinhOrderByRelationAggregateInput
    Hoadon?: HoadonOrderByRelationAggregateInput
    Danhgia?: DanhgiaOrderByRelationAggregateInput
    Booking?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hoten?: StringNullableFilter<"User"> | string | null
    matkhau?: StringNullableFilter<"User"> | string | null
    sodienthoai?: StringNullableFilter<"User"> | string | null
    diachi?: StringNullableFilter<"User"> | string | null
    trangthai?: StringNullableFilter<"User"> | string | null
    creatAT?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    isLocked?: BoolFilter<"User"> | boolean
    Role_id?: IntFilter<"User"> | number
    Role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    Lichtrinh?: LichtrinhListRelationFilter
    Hoadon?: HoadonListRelationFilter
    Danhgia?: DanhgiaListRelationFilter
    Booking?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    hoten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    matkhau?: SortOrderInput | SortOrder
    sodienthoai?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    trangthai?: SortOrderInput | SortOrder
    creatAT?: SortOrder
    updateAt?: SortOrder
    isLocked?: SortOrder
    Role_id?: SortOrder
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
    hoten?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    matkhau?: StringNullableWithAggregatesFilter<"User"> | string | null
    sodienthoai?: StringNullableWithAggregatesFilter<"User"> | string | null
    diachi?: StringNullableWithAggregatesFilter<"User"> | string | null
    trangthai?: StringNullableWithAggregatesFilter<"User"> | string | null
    creatAT?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isLocked?: BoolWithAggregatesFilter<"User"> | boolean
    Role_id?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    tenrole?: StringNullableFilter<"Role"> | string | null
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    tenrole?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    tenrole?: StringNullableFilter<"Role"> | string | null
    User?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    tenrole?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    tenrole?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type LichtrinhWhereInput = {
    AND?: LichtrinhWhereInput | LichtrinhWhereInput[]
    OR?: LichtrinhWhereInput[]
    NOT?: LichtrinhWhereInput | LichtrinhWhereInput[]
    id?: IntFilter<"Lichtrinh"> | number
    tenlichtrinh?: StringNullableFilter<"Lichtrinh"> | string | null
    ngaytao?: DateTimeFilter<"Lichtrinh"> | Date | string
    ghichu?: StringNullableFilter<"Lichtrinh"> | string | null
    User_id?: IntFilter<"Lichtrinh"> | number
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Hoadon?: HoadonListRelationFilter
    LichtrinhCT?: LichtrinhCTListRelationFilter
    Danhgia?: DanhgiaListRelationFilter
  }

  export type LichtrinhOrderByWithRelationInput = {
    id?: SortOrder
    tenlichtrinh?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ghichu?: SortOrderInput | SortOrder
    User_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Hoadon?: HoadonOrderByRelationAggregateInput
    LichtrinhCT?: LichtrinhCTOrderByRelationAggregateInput
    Danhgia?: DanhgiaOrderByRelationAggregateInput
  }

  export type LichtrinhWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LichtrinhWhereInput | LichtrinhWhereInput[]
    OR?: LichtrinhWhereInput[]
    NOT?: LichtrinhWhereInput | LichtrinhWhereInput[]
    tenlichtrinh?: StringNullableFilter<"Lichtrinh"> | string | null
    ngaytao?: DateTimeFilter<"Lichtrinh"> | Date | string
    ghichu?: StringNullableFilter<"Lichtrinh"> | string | null
    User_id?: IntFilter<"Lichtrinh"> | number
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Hoadon?: HoadonListRelationFilter
    LichtrinhCT?: LichtrinhCTListRelationFilter
    Danhgia?: DanhgiaListRelationFilter
  }, "id">

  export type LichtrinhOrderByWithAggregationInput = {
    id?: SortOrder
    tenlichtrinh?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ghichu?: SortOrderInput | SortOrder
    User_id?: SortOrder
    _count?: LichtrinhCountOrderByAggregateInput
    _avg?: LichtrinhAvgOrderByAggregateInput
    _max?: LichtrinhMaxOrderByAggregateInput
    _min?: LichtrinhMinOrderByAggregateInput
    _sum?: LichtrinhSumOrderByAggregateInput
  }

  export type LichtrinhScalarWhereWithAggregatesInput = {
    AND?: LichtrinhScalarWhereWithAggregatesInput | LichtrinhScalarWhereWithAggregatesInput[]
    OR?: LichtrinhScalarWhereWithAggregatesInput[]
    NOT?: LichtrinhScalarWhereWithAggregatesInput | LichtrinhScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lichtrinh"> | number
    tenlichtrinh?: StringNullableWithAggregatesFilter<"Lichtrinh"> | string | null
    ngaytao?: DateTimeWithAggregatesFilter<"Lichtrinh"> | Date | string
    ghichu?: StringNullableWithAggregatesFilter<"Lichtrinh"> | string | null
    User_id?: IntWithAggregatesFilter<"Lichtrinh"> | number
  }

  export type LichtrinhCTWhereInput = {
    AND?: LichtrinhCTWhereInput | LichtrinhCTWhereInput[]
    OR?: LichtrinhCTWhereInput[]
    NOT?: LichtrinhCTWhereInput | LichtrinhCTWhereInput[]
    id?: IntFilter<"LichtrinhCT"> | number
    soluong?: IntFilter<"LichtrinhCT"> | number
    thanhtien?: IntFilter<"LichtrinhCT"> | number
    noikhoihanh?: StringNullableFilter<"LichtrinhCT"> | string | null
    ngaykhoihanh?: DateTimeNullableFilter<"LichtrinhCT"> | Date | string | null
    lichtrinhdichuyen?: StringNullableFilter<"LichtrinhCT"> | string | null
    Lichtrinh_id?: IntFilter<"LichtrinhCT"> | number
    Goidichvu_id?: IntFilter<"LichtrinhCT"> | number
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
    Goidichvu?: XOR<GoidichvuNullableRelationFilter, GoidichvuWhereInput> | null
  }

  export type LichtrinhCTOrderByWithRelationInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    noikhoihanh?: SortOrderInput | SortOrder
    ngaykhoihanh?: SortOrderInput | SortOrder
    lichtrinhdichuyen?: SortOrderInput | SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
    Lichtrinh?: LichtrinhOrderByWithRelationInput
    Goidichvu?: GoidichvuOrderByWithRelationInput
  }

  export type LichtrinhCTWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LichtrinhCTWhereInput | LichtrinhCTWhereInput[]
    OR?: LichtrinhCTWhereInput[]
    NOT?: LichtrinhCTWhereInput | LichtrinhCTWhereInput[]
    soluong?: IntFilter<"LichtrinhCT"> | number
    thanhtien?: IntFilter<"LichtrinhCT"> | number
    noikhoihanh?: StringNullableFilter<"LichtrinhCT"> | string | null
    ngaykhoihanh?: DateTimeNullableFilter<"LichtrinhCT"> | Date | string | null
    lichtrinhdichuyen?: StringNullableFilter<"LichtrinhCT"> | string | null
    Lichtrinh_id?: IntFilter<"LichtrinhCT"> | number
    Goidichvu_id?: IntFilter<"LichtrinhCT"> | number
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
    Goidichvu?: XOR<GoidichvuNullableRelationFilter, GoidichvuWhereInput> | null
  }, "id">

  export type LichtrinhCTOrderByWithAggregationInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    noikhoihanh?: SortOrderInput | SortOrder
    ngaykhoihanh?: SortOrderInput | SortOrder
    lichtrinhdichuyen?: SortOrderInput | SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
    _count?: LichtrinhCTCountOrderByAggregateInput
    _avg?: LichtrinhCTAvgOrderByAggregateInput
    _max?: LichtrinhCTMaxOrderByAggregateInput
    _min?: LichtrinhCTMinOrderByAggregateInput
    _sum?: LichtrinhCTSumOrderByAggregateInput
  }

  export type LichtrinhCTScalarWhereWithAggregatesInput = {
    AND?: LichtrinhCTScalarWhereWithAggregatesInput | LichtrinhCTScalarWhereWithAggregatesInput[]
    OR?: LichtrinhCTScalarWhereWithAggregatesInput[]
    NOT?: LichtrinhCTScalarWhereWithAggregatesInput | LichtrinhCTScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LichtrinhCT"> | number
    soluong?: IntWithAggregatesFilter<"LichtrinhCT"> | number
    thanhtien?: IntWithAggregatesFilter<"LichtrinhCT"> | number
    noikhoihanh?: StringNullableWithAggregatesFilter<"LichtrinhCT"> | string | null
    ngaykhoihanh?: DateTimeNullableWithAggregatesFilter<"LichtrinhCT"> | Date | string | null
    lichtrinhdichuyen?: StringNullableWithAggregatesFilter<"LichtrinhCT"> | string | null
    Lichtrinh_id?: IntWithAggregatesFilter<"LichtrinhCT"> | number
    Goidichvu_id?: IntWithAggregatesFilter<"LichtrinhCT"> | number
  }

  export type GoidichvuWhereInput = {
    AND?: GoidichvuWhereInput | GoidichvuWhereInput[]
    OR?: GoidichvuWhereInput[]
    NOT?: GoidichvuWhereInput | GoidichvuWhereInput[]
    id?: IntFilter<"Goidichvu"> | number
    tengoi?: StringNullableFilter<"Goidichvu"> | string | null
    mota?: StringNullableFilter<"Goidichvu"> | string | null
    gia?: IntFilter<"Goidichvu"> | number
    thoiluongngay?: StringNullableFilter<"Goidichvu"> | string | null
    trangthai?: StringNullableFilter<"Goidichvu"> | string | null
    hinhanh?: StringNullableFilter<"Goidichvu"> | string | null
    sochoconlai?: IntNullableFilter<"Goidichvu"> | number | null
    Diadiem_id?: IntFilter<"Goidichvu"> | number
    Diadiem?: XOR<DiadiemNullableRelationFilter, DiadiemWhereInput> | null
    LichtrinhCT?: LichtrinhCTListRelationFilter
    Booking?: BookingListRelationFilter
  }

  export type GoidichvuOrderByWithRelationInput = {
    id?: SortOrder
    tengoi?: SortOrderInput | SortOrder
    mota?: SortOrderInput | SortOrder
    gia?: SortOrder
    thoiluongngay?: SortOrderInput | SortOrder
    trangthai?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    sochoconlai?: SortOrderInput | SortOrder
    Diadiem_id?: SortOrder
    Diadiem?: DiadiemOrderByWithRelationInput
    LichtrinhCT?: LichtrinhCTOrderByRelationAggregateInput
    Booking?: BookingOrderByRelationAggregateInput
  }

  export type GoidichvuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoidichvuWhereInput | GoidichvuWhereInput[]
    OR?: GoidichvuWhereInput[]
    NOT?: GoidichvuWhereInput | GoidichvuWhereInput[]
    tengoi?: StringNullableFilter<"Goidichvu"> | string | null
    mota?: StringNullableFilter<"Goidichvu"> | string | null
    gia?: IntFilter<"Goidichvu"> | number
    thoiluongngay?: StringNullableFilter<"Goidichvu"> | string | null
    trangthai?: StringNullableFilter<"Goidichvu"> | string | null
    hinhanh?: StringNullableFilter<"Goidichvu"> | string | null
    sochoconlai?: IntNullableFilter<"Goidichvu"> | number | null
    Diadiem_id?: IntFilter<"Goidichvu"> | number
    Diadiem?: XOR<DiadiemNullableRelationFilter, DiadiemWhereInput> | null
    LichtrinhCT?: LichtrinhCTListRelationFilter
    Booking?: BookingListRelationFilter
  }, "id">

  export type GoidichvuOrderByWithAggregationInput = {
    id?: SortOrder
    tengoi?: SortOrderInput | SortOrder
    mota?: SortOrderInput | SortOrder
    gia?: SortOrder
    thoiluongngay?: SortOrderInput | SortOrder
    trangthai?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    sochoconlai?: SortOrderInput | SortOrder
    Diadiem_id?: SortOrder
    _count?: GoidichvuCountOrderByAggregateInput
    _avg?: GoidichvuAvgOrderByAggregateInput
    _max?: GoidichvuMaxOrderByAggregateInput
    _min?: GoidichvuMinOrderByAggregateInput
    _sum?: GoidichvuSumOrderByAggregateInput
  }

  export type GoidichvuScalarWhereWithAggregatesInput = {
    AND?: GoidichvuScalarWhereWithAggregatesInput | GoidichvuScalarWhereWithAggregatesInput[]
    OR?: GoidichvuScalarWhereWithAggregatesInput[]
    NOT?: GoidichvuScalarWhereWithAggregatesInput | GoidichvuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Goidichvu"> | number
    tengoi?: StringNullableWithAggregatesFilter<"Goidichvu"> | string | null
    mota?: StringNullableWithAggregatesFilter<"Goidichvu"> | string | null
    gia?: IntWithAggregatesFilter<"Goidichvu"> | number
    thoiluongngay?: StringNullableWithAggregatesFilter<"Goidichvu"> | string | null
    trangthai?: StringNullableWithAggregatesFilter<"Goidichvu"> | string | null
    hinhanh?: StringNullableWithAggregatesFilter<"Goidichvu"> | string | null
    sochoconlai?: IntNullableWithAggregatesFilter<"Goidichvu"> | number | null
    Diadiem_id?: IntWithAggregatesFilter<"Goidichvu"> | number
  }

  export type DiadiemWhereInput = {
    AND?: DiadiemWhereInput | DiadiemWhereInput[]
    OR?: DiadiemWhereInput[]
    NOT?: DiadiemWhereInput | DiadiemWhereInput[]
    id?: IntFilter<"Diadiem"> | number
    tendiadiem?: StringNullableFilter<"Diadiem"> | string | null
    diachi?: StringNullableFilter<"Diadiem"> | string | null
    mota?: StringNullableFilter<"Diadiem"> | string | null
    hinhanh?: StringNullableFilter<"Diadiem"> | string | null
    Goidichvu?: GoidichvuListRelationFilter
  }

  export type DiadiemOrderByWithRelationInput = {
    id?: SortOrder
    tendiadiem?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    mota?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    Goidichvu?: GoidichvuOrderByRelationAggregateInput
  }

  export type DiadiemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiadiemWhereInput | DiadiemWhereInput[]
    OR?: DiadiemWhereInput[]
    NOT?: DiadiemWhereInput | DiadiemWhereInput[]
    tendiadiem?: StringNullableFilter<"Diadiem"> | string | null
    diachi?: StringNullableFilter<"Diadiem"> | string | null
    mota?: StringNullableFilter<"Diadiem"> | string | null
    hinhanh?: StringNullableFilter<"Diadiem"> | string | null
    Goidichvu?: GoidichvuListRelationFilter
  }, "id">

  export type DiadiemOrderByWithAggregationInput = {
    id?: SortOrder
    tendiadiem?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    mota?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    _count?: DiadiemCountOrderByAggregateInput
    _avg?: DiadiemAvgOrderByAggregateInput
    _max?: DiadiemMaxOrderByAggregateInput
    _min?: DiadiemMinOrderByAggregateInput
    _sum?: DiadiemSumOrderByAggregateInput
  }

  export type DiadiemScalarWhereWithAggregatesInput = {
    AND?: DiadiemScalarWhereWithAggregatesInput | DiadiemScalarWhereWithAggregatesInput[]
    OR?: DiadiemScalarWhereWithAggregatesInput[]
    NOT?: DiadiemScalarWhereWithAggregatesInput | DiadiemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diadiem"> | number
    tendiadiem?: StringNullableWithAggregatesFilter<"Diadiem"> | string | null
    diachi?: StringNullableWithAggregatesFilter<"Diadiem"> | string | null
    mota?: StringNullableWithAggregatesFilter<"Diadiem"> | string | null
    hinhanh?: StringNullableWithAggregatesFilter<"Diadiem"> | string | null
  }

  export type DanhgiaWhereInput = {
    AND?: DanhgiaWhereInput | DanhgiaWhereInput[]
    OR?: DanhgiaWhereInput[]
    NOT?: DanhgiaWhereInput | DanhgiaWhereInput[]
    id?: IntFilter<"Danhgia"> | number
    noidung?: StringNullableFilter<"Danhgia"> | string | null
    User_id?: IntFilter<"Danhgia"> | number
    Lichtrinh_id?: IntFilter<"Danhgia"> | number
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type DanhgiaOrderByWithRelationInput = {
    id?: SortOrder
    noidung?: SortOrderInput | SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
    Lichtrinh?: LichtrinhOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type DanhgiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DanhgiaWhereInput | DanhgiaWhereInput[]
    OR?: DanhgiaWhereInput[]
    NOT?: DanhgiaWhereInput | DanhgiaWhereInput[]
    noidung?: StringNullableFilter<"Danhgia"> | string | null
    User_id?: IntFilter<"Danhgia"> | number
    Lichtrinh_id?: IntFilter<"Danhgia"> | number
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type DanhgiaOrderByWithAggregationInput = {
    id?: SortOrder
    noidung?: SortOrderInput | SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
    _count?: DanhgiaCountOrderByAggregateInput
    _avg?: DanhgiaAvgOrderByAggregateInput
    _max?: DanhgiaMaxOrderByAggregateInput
    _min?: DanhgiaMinOrderByAggregateInput
    _sum?: DanhgiaSumOrderByAggregateInput
  }

  export type DanhgiaScalarWhereWithAggregatesInput = {
    AND?: DanhgiaScalarWhereWithAggregatesInput | DanhgiaScalarWhereWithAggregatesInput[]
    OR?: DanhgiaScalarWhereWithAggregatesInput[]
    NOT?: DanhgiaScalarWhereWithAggregatesInput | DanhgiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Danhgia"> | number
    noidung?: StringNullableWithAggregatesFilter<"Danhgia"> | string | null
    User_id?: IntWithAggregatesFilter<"Danhgia"> | number
    Lichtrinh_id?: IntWithAggregatesFilter<"Danhgia"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    hoten?: StringFilter<"Booking"> | string
    sodienthoai?: StringFilter<"Booking"> | string
    soluong?: IntFilter<"Booking"> | number
    sotien?: IntFilter<"Booking"> | number
    tour_id?: IntFilter<"Booking"> | number
    user_id?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    Goidichvu?: XOR<GoidichvuRelationFilter, GoidichvuWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    hoten?: SortOrder
    sodienthoai?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    Goidichvu?: GoidichvuOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    hoten?: StringFilter<"Booking"> | string
    sodienthoai?: StringFilter<"Booking"> | string
    soluong?: IntFilter<"Booking"> | number
    sotien?: IntFilter<"Booking"> | number
    tour_id?: IntFilter<"Booking"> | number
    user_id?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    Goidichvu?: XOR<GoidichvuRelationFilter, GoidichvuWhereInput>
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    hoten?: SortOrder
    sodienthoai?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    hoten?: StringWithAggregatesFilter<"Booking"> | string
    sodienthoai?: StringWithAggregatesFilter<"Booking"> | string
    soluong?: IntWithAggregatesFilter<"Booking"> | number
    sotien?: IntWithAggregatesFilter<"Booking"> | number
    tour_id?: IntWithAggregatesFilter<"Booking"> | number
    user_id?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
  }

  export type ThanhtoanWhereInput = {
    AND?: ThanhtoanWhereInput | ThanhtoanWhereInput[]
    OR?: ThanhtoanWhereInput[]
    NOT?: ThanhtoanWhereInput | ThanhtoanWhereInput[]
    id?: IntFilter<"Thanhtoan"> | number
    phuongthuc?: StringNullableFilter<"Thanhtoan"> | string | null
    sotien?: IntFilter<"Thanhtoan"> | number
    trangthai?: StringNullableFilter<"Thanhtoan"> | string | null
    ngaythanhtoan?: DateTimeFilter<"Thanhtoan"> | Date | string
    Hoadon?: HoadonListRelationFilter
  }

  export type ThanhtoanOrderByWithRelationInput = {
    id?: SortOrder
    phuongthuc?: SortOrderInput | SortOrder
    sotien?: SortOrder
    trangthai?: SortOrderInput | SortOrder
    ngaythanhtoan?: SortOrder
    Hoadon?: HoadonOrderByRelationAggregateInput
  }

  export type ThanhtoanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThanhtoanWhereInput | ThanhtoanWhereInput[]
    OR?: ThanhtoanWhereInput[]
    NOT?: ThanhtoanWhereInput | ThanhtoanWhereInput[]
    phuongthuc?: StringNullableFilter<"Thanhtoan"> | string | null
    sotien?: IntFilter<"Thanhtoan"> | number
    trangthai?: StringNullableFilter<"Thanhtoan"> | string | null
    ngaythanhtoan?: DateTimeFilter<"Thanhtoan"> | Date | string
    Hoadon?: HoadonListRelationFilter
  }, "id">

  export type ThanhtoanOrderByWithAggregationInput = {
    id?: SortOrder
    phuongthuc?: SortOrderInput | SortOrder
    sotien?: SortOrder
    trangthai?: SortOrderInput | SortOrder
    ngaythanhtoan?: SortOrder
    _count?: ThanhtoanCountOrderByAggregateInput
    _avg?: ThanhtoanAvgOrderByAggregateInput
    _max?: ThanhtoanMaxOrderByAggregateInput
    _min?: ThanhtoanMinOrderByAggregateInput
    _sum?: ThanhtoanSumOrderByAggregateInput
  }

  export type ThanhtoanScalarWhereWithAggregatesInput = {
    AND?: ThanhtoanScalarWhereWithAggregatesInput | ThanhtoanScalarWhereWithAggregatesInput[]
    OR?: ThanhtoanScalarWhereWithAggregatesInput[]
    NOT?: ThanhtoanScalarWhereWithAggregatesInput | ThanhtoanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thanhtoan"> | number
    phuongthuc?: StringNullableWithAggregatesFilter<"Thanhtoan"> | string | null
    sotien?: IntWithAggregatesFilter<"Thanhtoan"> | number
    trangthai?: StringNullableWithAggregatesFilter<"Thanhtoan"> | string | null
    ngaythanhtoan?: DateTimeWithAggregatesFilter<"Thanhtoan"> | Date | string
  }

  export type HoadonWhereInput = {
    AND?: HoadonWhereInput | HoadonWhereInput[]
    OR?: HoadonWhereInput[]
    NOT?: HoadonWhereInput | HoadonWhereInput[]
    id?: IntFilter<"Hoadon"> | number
    ngayxuat?: DateTimeFilter<"Hoadon"> | Date | string
    tongtien?: IntFilter<"Hoadon"> | number
    trangthai?: StringNullableFilter<"Hoadon"> | string | null
    User_id?: IntFilter<"Hoadon"> | number
    Thanhtoan_id?: IntFilter<"Hoadon"> | number
    Lichtrinh_id?: IntFilter<"Hoadon"> | number
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Thanhtoan?: XOR<ThanhtoanNullableRelationFilter, ThanhtoanWhereInput> | null
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
  }

  export type HoadonOrderByWithRelationInput = {
    id?: SortOrder
    ngayxuat?: SortOrder
    tongtien?: SortOrder
    trangthai?: SortOrderInput | SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Thanhtoan?: ThanhtoanOrderByWithRelationInput
    Lichtrinh?: LichtrinhOrderByWithRelationInput
  }

  export type HoadonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HoadonWhereInput | HoadonWhereInput[]
    OR?: HoadonWhereInput[]
    NOT?: HoadonWhereInput | HoadonWhereInput[]
    ngayxuat?: DateTimeFilter<"Hoadon"> | Date | string
    tongtien?: IntFilter<"Hoadon"> | number
    trangthai?: StringNullableFilter<"Hoadon"> | string | null
    User_id?: IntFilter<"Hoadon"> | number
    Thanhtoan_id?: IntFilter<"Hoadon"> | number
    Lichtrinh_id?: IntFilter<"Hoadon"> | number
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Thanhtoan?: XOR<ThanhtoanNullableRelationFilter, ThanhtoanWhereInput> | null
    Lichtrinh?: XOR<LichtrinhNullableRelationFilter, LichtrinhWhereInput> | null
  }, "id">

  export type HoadonOrderByWithAggregationInput = {
    id?: SortOrder
    ngayxuat?: SortOrder
    tongtien?: SortOrder
    trangthai?: SortOrderInput | SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
    _count?: HoadonCountOrderByAggregateInput
    _avg?: HoadonAvgOrderByAggregateInput
    _max?: HoadonMaxOrderByAggregateInput
    _min?: HoadonMinOrderByAggregateInput
    _sum?: HoadonSumOrderByAggregateInput
  }

  export type HoadonScalarWhereWithAggregatesInput = {
    AND?: HoadonScalarWhereWithAggregatesInput | HoadonScalarWhereWithAggregatesInput[]
    OR?: HoadonScalarWhereWithAggregatesInput[]
    NOT?: HoadonScalarWhereWithAggregatesInput | HoadonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hoadon"> | number
    ngayxuat?: DateTimeWithAggregatesFilter<"Hoadon"> | Date | string
    tongtien?: IntWithAggregatesFilter<"Hoadon"> | number
    trangthai?: StringNullableWithAggregatesFilter<"Hoadon"> | string | null
    User_id?: IntWithAggregatesFilter<"Hoadon"> | number
    Thanhtoan_id?: IntWithAggregatesFilter<"Hoadon"> | number
    Lichtrinh_id?: IntWithAggregatesFilter<"Hoadon"> | number
  }

  export type gopyWhereInput = {
    AND?: gopyWhereInput | gopyWhereInput[]
    OR?: gopyWhereInput[]
    NOT?: gopyWhereInput | gopyWhereInput[]
    id?: IntFilter<"gopy"> | number
    hoten?: StringFilter<"gopy"> | string
    email?: StringFilter<"gopy"> | string
    sodienthoai?: StringFilter<"gopy"> | string
    rating?: IntFilter<"gopy"> | number
    danhgiachitiet?: JsonNullableFilter<"gopy">
    gopythem?: StringNullableFilter<"gopy"> | string | null
    createdAt?: DateTimeFilter<"gopy"> | Date | string
  }

  export type gopyOrderByWithRelationInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sodienthoai?: SortOrder
    rating?: SortOrder
    danhgiachitiet?: SortOrderInput | SortOrder
    gopythem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type gopyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gopyWhereInput | gopyWhereInput[]
    OR?: gopyWhereInput[]
    NOT?: gopyWhereInput | gopyWhereInput[]
    hoten?: StringFilter<"gopy"> | string
    email?: StringFilter<"gopy"> | string
    sodienthoai?: StringFilter<"gopy"> | string
    rating?: IntFilter<"gopy"> | number
    danhgiachitiet?: JsonNullableFilter<"gopy">
    gopythem?: StringNullableFilter<"gopy"> | string | null
    createdAt?: DateTimeFilter<"gopy"> | Date | string
  }, "id">

  export type gopyOrderByWithAggregationInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sodienthoai?: SortOrder
    rating?: SortOrder
    danhgiachitiet?: SortOrderInput | SortOrder
    gopythem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: gopyCountOrderByAggregateInput
    _avg?: gopyAvgOrderByAggregateInput
    _max?: gopyMaxOrderByAggregateInput
    _min?: gopyMinOrderByAggregateInput
    _sum?: gopySumOrderByAggregateInput
  }

  export type gopyScalarWhereWithAggregatesInput = {
    AND?: gopyScalarWhereWithAggregatesInput | gopyScalarWhereWithAggregatesInput[]
    OR?: gopyScalarWhereWithAggregatesInput[]
    NOT?: gopyScalarWhereWithAggregatesInput | gopyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gopy"> | number
    hoten?: StringWithAggregatesFilter<"gopy"> | string
    email?: StringWithAggregatesFilter<"gopy"> | string
    sodienthoai?: StringWithAggregatesFilter<"gopy"> | string
    rating?: IntWithAggregatesFilter<"gopy"> | number
    danhgiachitiet?: JsonNullableWithAggregatesFilter<"gopy">
    gopythem?: StringNullableWithAggregatesFilter<"gopy"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"gopy"> | Date | string
  }

  export type NoidungWhereInput = {
    AND?: NoidungWhereInput | NoidungWhereInput[]
    OR?: NoidungWhereInput[]
    NOT?: NoidungWhereInput | NoidungWhereInput[]
    id?: IntFilter<"Noidung"> | number
    tieude?: StringFilter<"Noidung"> | string
    hinhanh?: StringNullableFilter<"Noidung"> | string | null
    danhMuc?: StringFilter<"Noidung"> | string
    mota?: StringNullableFilter<"Noidung"> | string | null
    noidung?: StringNullableFilter<"Noidung"> | string | null
    luotXem?: IntFilter<"Noidung"> | number
    createdAt?: DateTimeFilter<"Noidung"> | Date | string
    trangThai?: BoolFilter<"Noidung"> | boolean
  }

  export type NoidungOrderByWithRelationInput = {
    id?: SortOrder
    tieude?: SortOrder
    hinhanh?: SortOrderInput | SortOrder
    danhMuc?: SortOrder
    mota?: SortOrderInput | SortOrder
    noidung?: SortOrderInput | SortOrder
    luotXem?: SortOrder
    createdAt?: SortOrder
    trangThai?: SortOrder
  }

  export type NoidungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoidungWhereInput | NoidungWhereInput[]
    OR?: NoidungWhereInput[]
    NOT?: NoidungWhereInput | NoidungWhereInput[]
    tieude?: StringFilter<"Noidung"> | string
    hinhanh?: StringNullableFilter<"Noidung"> | string | null
    danhMuc?: StringFilter<"Noidung"> | string
    mota?: StringNullableFilter<"Noidung"> | string | null
    noidung?: StringNullableFilter<"Noidung"> | string | null
    luotXem?: IntFilter<"Noidung"> | number
    createdAt?: DateTimeFilter<"Noidung"> | Date | string
    trangThai?: BoolFilter<"Noidung"> | boolean
  }, "id">

  export type NoidungOrderByWithAggregationInput = {
    id?: SortOrder
    tieude?: SortOrder
    hinhanh?: SortOrderInput | SortOrder
    danhMuc?: SortOrder
    mota?: SortOrderInput | SortOrder
    noidung?: SortOrderInput | SortOrder
    luotXem?: SortOrder
    createdAt?: SortOrder
    trangThai?: SortOrder
    _count?: NoidungCountOrderByAggregateInput
    _avg?: NoidungAvgOrderByAggregateInput
    _max?: NoidungMaxOrderByAggregateInput
    _min?: NoidungMinOrderByAggregateInput
    _sum?: NoidungSumOrderByAggregateInput
  }

  export type NoidungScalarWhereWithAggregatesInput = {
    AND?: NoidungScalarWhereWithAggregatesInput | NoidungScalarWhereWithAggregatesInput[]
    OR?: NoidungScalarWhereWithAggregatesInput[]
    NOT?: NoidungScalarWhereWithAggregatesInput | NoidungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noidung"> | number
    tieude?: StringWithAggregatesFilter<"Noidung"> | string
    hinhanh?: StringNullableWithAggregatesFilter<"Noidung"> | string | null
    danhMuc?: StringWithAggregatesFilter<"Noidung"> | string
    mota?: StringNullableWithAggregatesFilter<"Noidung"> | string | null
    noidung?: StringNullableWithAggregatesFilter<"Noidung"> | string | null
    luotXem?: IntWithAggregatesFilter<"Noidung"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Noidung"> | Date | string
    trangThai?: BoolWithAggregatesFilter<"Noidung"> | boolean
  }

  export type UserCreateInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role?: RoleCreateNestedOneWithoutUserInput
    Lichtrinh?: LichtrinhCreateNestedManyWithoutUserInput
    Hoadon?: HoadonCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaCreateNestedManyWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
    Lichtrinh?: LichtrinhUncheckedCreateNestedManyWithoutUserInput
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutUserInput
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role?: RoleUpdateOneWithoutUserNestedInput
    Lichtrinh?: LichtrinhUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh?: LichtrinhUncheckedUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUncheckedUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutUserNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
  }

  export type UserUpdateManyMutationInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    tenrole?: string | null
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    tenrole?: string | null
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    tenrole?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichtrinhCreateInput = {
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User?: UserCreateNestedOneWithoutLichtrinhInput
    Hoadon?: HoadonCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUncheckedCreateInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User_id: number
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUpdateInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutLichtrinhNestedInput
    Hoadon?: HoadonUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Hoadon?: HoadonUncheckedUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhCreateManyInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User_id: number
  }

  export type LichtrinhUpdateManyMutationInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichtrinhUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTCreateInput = {
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh?: LichtrinhCreateNestedOneWithoutLichtrinhCTInput
    Goidichvu?: GoidichvuCreateNestedOneWithoutLichtrinhCTInput
  }

  export type LichtrinhCTUncheckedCreateInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh_id: number
    Goidichvu_id: number
  }

  export type LichtrinhCTUpdateInput = {
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh?: LichtrinhUpdateOneWithoutLichtrinhCTNestedInput
    Goidichvu?: GoidichvuUpdateOneWithoutLichtrinhCTNestedInput
  }

  export type LichtrinhCTUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
    Goidichvu_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTCreateManyInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh_id: number
    Goidichvu_id: number
  }

  export type LichtrinhCTUpdateManyMutationInput = {
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichtrinhCTUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
    Goidichvu_id?: IntFieldUpdateOperationsInput | number
  }

  export type GoidichvuCreateInput = {
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem?: DiadiemCreateNestedOneWithoutGoidichvuInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutGoidichvuInput
    Booking?: BookingCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuUncheckedCreateInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem_id: number
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutGoidichvuInput
    Booking?: BookingUncheckedCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuUpdateInput = {
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem?: DiadiemUpdateOneWithoutGoidichvuNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutGoidichvuNestedInput
    Booking?: BookingUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem_id?: IntFieldUpdateOperationsInput | number
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutGoidichvuNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuCreateManyInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem_id: number
  }

  export type GoidichvuUpdateManyMutationInput = {
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoidichvuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem_id?: IntFieldUpdateOperationsInput | number
  }

  export type DiadiemCreateInput = {
    tendiadiem?: string | null
    diachi?: string | null
    mota?: string | null
    hinhanh?: string | null
    Goidichvu?: GoidichvuCreateNestedManyWithoutDiadiemInput
  }

  export type DiadiemUncheckedCreateInput = {
    id?: number
    tendiadiem?: string | null
    diachi?: string | null
    mota?: string | null
    hinhanh?: string | null
    Goidichvu?: GoidichvuUncheckedCreateNestedManyWithoutDiadiemInput
  }

  export type DiadiemUpdateInput = {
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    Goidichvu?: GoidichvuUpdateManyWithoutDiadiemNestedInput
  }

  export type DiadiemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    Goidichvu?: GoidichvuUncheckedUpdateManyWithoutDiadiemNestedInput
  }

  export type DiadiemCreateManyInput = {
    id?: number
    tendiadiem?: string | null
    diachi?: string | null
    mota?: string | null
    hinhanh?: string | null
  }

  export type DiadiemUpdateManyMutationInput = {
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiadiemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DanhgiaCreateInput = {
    noidung?: string | null
    Lichtrinh?: LichtrinhCreateNestedOneWithoutDanhgiaInput
    User?: UserCreateNestedOneWithoutDanhgiaInput
  }

  export type DanhgiaUncheckedCreateInput = {
    id?: number
    noidung?: string | null
    User_id: number
    Lichtrinh_id: number
  }

  export type DanhgiaUpdateInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh?: LichtrinhUpdateOneWithoutDanhgiaNestedInput
    User?: UserUpdateOneWithoutDanhgiaNestedInput
  }

  export type DanhgiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type DanhgiaCreateManyInput = {
    id?: number
    noidung?: string | null
    User_id: number
    Lichtrinh_id: number
  }

  export type DanhgiaUpdateManyMutationInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DanhgiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    createdAt?: Date | string
    status?: string
    Goidichvu: GoidichvuCreateNestedOneWithoutBookingInput
    User?: UserCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    tour_id: number
    user_id?: number | null
    createdAt?: Date | string
    status?: string
  }

  export type BookingUpdateInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Goidichvu?: GoidichvuUpdateOneRequiredWithoutBookingNestedInput
    User?: UserUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    tour_id: number
    user_id?: number | null
    createdAt?: Date | string
    status?: string
  }

  export type BookingUpdateManyMutationInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ThanhtoanCreateInput = {
    phuongthuc?: string | null
    sotien: number
    trangthai?: string | null
    ngaythanhtoan?: Date | string
    Hoadon?: HoadonCreateNestedManyWithoutThanhtoanInput
  }

  export type ThanhtoanUncheckedCreateInput = {
    id?: number
    phuongthuc?: string | null
    sotien: number
    trangthai?: string | null
    ngaythanhtoan?: Date | string
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutThanhtoanInput
  }

  export type ThanhtoanUpdateInput = {
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
    Hoadon?: HoadonUpdateManyWithoutThanhtoanNestedInput
  }

  export type ThanhtoanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
    Hoadon?: HoadonUncheckedUpdateManyWithoutThanhtoanNestedInput
  }

  export type ThanhtoanCreateManyInput = {
    id?: number
    phuongthuc?: string | null
    sotien: number
    trangthai?: string | null
    ngaythanhtoan?: Date | string
  }

  export type ThanhtoanUpdateManyMutationInput = {
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThanhtoanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoadonCreateInput = {
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User?: UserCreateNestedOneWithoutHoadonInput
    Thanhtoan?: ThanhtoanCreateNestedOneWithoutHoadonInput
    Lichtrinh?: LichtrinhCreateNestedOneWithoutHoadonInput
  }

  export type HoadonUncheckedCreateInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Thanhtoan_id: number
    Lichtrinh_id: number
  }

  export type HoadonUpdateInput = {
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutHoadonNestedInput
    Thanhtoan?: ThanhtoanUpdateOneWithoutHoadonNestedInput
    Lichtrinh?: LichtrinhUpdateOneWithoutHoadonNestedInput
  }

  export type HoadonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type HoadonCreateManyInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Thanhtoan_id: number
    Lichtrinh_id: number
  }

  export type HoadonUpdateManyMutationInput = {
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HoadonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type gopyCreateInput = {
    hoten: string
    email: string
    sodienthoai: string
    rating: number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: string | null
    createdAt?: Date | string
  }

  export type gopyUncheckedCreateInput = {
    id?: number
    hoten: string
    email: string
    sodienthoai: string
    rating: number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: string | null
    createdAt?: Date | string
  }

  export type gopyUpdateInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gopyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gopyCreateManyInput = {
    id?: number
    hoten: string
    email: string
    sodienthoai: string
    rating: number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: string | null
    createdAt?: Date | string
  }

  export type gopyUpdateManyMutationInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gopyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    danhgiachitiet?: NullableJsonNullValueInput | InputJsonValue
    gopythem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoidungCreateInput = {
    tieude: string
    hinhanh?: string | null
    danhMuc: string
    mota?: string | null
    noidung?: string | null
    luotXem?: number
    createdAt?: Date | string
    trangThai?: boolean
  }

  export type NoidungUncheckedCreateInput = {
    id?: number
    tieude: string
    hinhanh?: string | null
    danhMuc: string
    mota?: string | null
    noidung?: string | null
    luotXem?: number
    createdAt?: Date | string
    trangThai?: boolean
  }

  export type NoidungUpdateInput = {
    tieude?: StringFieldUpdateOperationsInput | string
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    danhMuc?: StringFieldUpdateOperationsInput | string
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    luotXem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trangThai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoidungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tieude?: StringFieldUpdateOperationsInput | string
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    danhMuc?: StringFieldUpdateOperationsInput | string
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    luotXem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trangThai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoidungCreateManyInput = {
    id?: number
    tieude: string
    hinhanh?: string | null
    danhMuc: string
    mota?: string | null
    noidung?: string | null
    luotXem?: number
    createdAt?: Date | string
    trangThai?: boolean
  }

  export type NoidungUpdateManyMutationInput = {
    tieude?: StringFieldUpdateOperationsInput | string
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    danhMuc?: StringFieldUpdateOperationsInput | string
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    luotXem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trangThai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoidungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tieude?: StringFieldUpdateOperationsInput | string
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    danhMuc?: StringFieldUpdateOperationsInput | string
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    luotXem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trangThai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleNullableRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type LichtrinhListRelationFilter = {
    every?: LichtrinhWhereInput
    some?: LichtrinhWhereInput
    none?: LichtrinhWhereInput
  }

  export type HoadonListRelationFilter = {
    every?: HoadonWhereInput
    some?: HoadonWhereInput
    none?: HoadonWhereInput
  }

  export type DanhgiaListRelationFilter = {
    every?: DanhgiaWhereInput
    some?: DanhgiaWhereInput
    none?: DanhgiaWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LichtrinhOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoadonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DanhgiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    matkhau?: SortOrder
    sodienthoai?: SortOrder
    diachi?: SortOrder
    trangthai?: SortOrder
    creatAT?: SortOrder
    updateAt?: SortOrder
    isLocked?: SortOrder
    Role_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    Role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    matkhau?: SortOrder
    sodienthoai?: SortOrder
    diachi?: SortOrder
    trangthai?: SortOrder
    creatAT?: SortOrder
    updateAt?: SortOrder
    isLocked?: SortOrder
    Role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    matkhau?: SortOrder
    sodienthoai?: SortOrder
    diachi?: SortOrder
    trangthai?: SortOrder
    creatAT?: SortOrder
    updateAt?: SortOrder
    isLocked?: SortOrder
    Role_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    Role_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    tenrole?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    tenrole?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    tenrole?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LichtrinhCTListRelationFilter = {
    every?: LichtrinhCTWhereInput
    some?: LichtrinhCTWhereInput
    none?: LichtrinhCTWhereInput
  }

  export type LichtrinhCTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LichtrinhCountOrderByAggregateInput = {
    id?: SortOrder
    tenlichtrinh?: SortOrder
    ngaytao?: SortOrder
    ghichu?: SortOrder
    User_id?: SortOrder
  }

  export type LichtrinhAvgOrderByAggregateInput = {
    id?: SortOrder
    User_id?: SortOrder
  }

  export type LichtrinhMaxOrderByAggregateInput = {
    id?: SortOrder
    tenlichtrinh?: SortOrder
    ngaytao?: SortOrder
    ghichu?: SortOrder
    User_id?: SortOrder
  }

  export type LichtrinhMinOrderByAggregateInput = {
    id?: SortOrder
    tenlichtrinh?: SortOrder
    ngaytao?: SortOrder
    ghichu?: SortOrder
    User_id?: SortOrder
  }

  export type LichtrinhSumOrderByAggregateInput = {
    id?: SortOrder
    User_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LichtrinhNullableRelationFilter = {
    is?: LichtrinhWhereInput | null
    isNot?: LichtrinhWhereInput | null
  }

  export type GoidichvuNullableRelationFilter = {
    is?: GoidichvuWhereInput | null
    isNot?: GoidichvuWhereInput | null
  }

  export type LichtrinhCTCountOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    noikhoihanh?: SortOrder
    ngaykhoihanh?: SortOrder
    lichtrinhdichuyen?: SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
  }

  export type LichtrinhCTAvgOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
  }

  export type LichtrinhCTMaxOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    noikhoihanh?: SortOrder
    ngaykhoihanh?: SortOrder
    lichtrinhdichuyen?: SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
  }

  export type LichtrinhCTMinOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    noikhoihanh?: SortOrder
    ngaykhoihanh?: SortOrder
    lichtrinhdichuyen?: SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
  }

  export type LichtrinhCTSumOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    thanhtien?: SortOrder
    Lichtrinh_id?: SortOrder
    Goidichvu_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiadiemNullableRelationFilter = {
    is?: DiadiemWhereInput | null
    isNot?: DiadiemWhereInput | null
  }

  export type GoidichvuCountOrderByAggregateInput = {
    id?: SortOrder
    tengoi?: SortOrder
    mota?: SortOrder
    gia?: SortOrder
    thoiluongngay?: SortOrder
    trangthai?: SortOrder
    hinhanh?: SortOrder
    sochoconlai?: SortOrder
    Diadiem_id?: SortOrder
  }

  export type GoidichvuAvgOrderByAggregateInput = {
    id?: SortOrder
    gia?: SortOrder
    sochoconlai?: SortOrder
    Diadiem_id?: SortOrder
  }

  export type GoidichvuMaxOrderByAggregateInput = {
    id?: SortOrder
    tengoi?: SortOrder
    mota?: SortOrder
    gia?: SortOrder
    thoiluongngay?: SortOrder
    trangthai?: SortOrder
    hinhanh?: SortOrder
    sochoconlai?: SortOrder
    Diadiem_id?: SortOrder
  }

  export type GoidichvuMinOrderByAggregateInput = {
    id?: SortOrder
    tengoi?: SortOrder
    mota?: SortOrder
    gia?: SortOrder
    thoiluongngay?: SortOrder
    trangthai?: SortOrder
    hinhanh?: SortOrder
    sochoconlai?: SortOrder
    Diadiem_id?: SortOrder
  }

  export type GoidichvuSumOrderByAggregateInput = {
    id?: SortOrder
    gia?: SortOrder
    sochoconlai?: SortOrder
    Diadiem_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GoidichvuListRelationFilter = {
    every?: GoidichvuWhereInput
    some?: GoidichvuWhereInput
    none?: GoidichvuWhereInput
  }

  export type GoidichvuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiadiemCountOrderByAggregateInput = {
    id?: SortOrder
    tendiadiem?: SortOrder
    diachi?: SortOrder
    mota?: SortOrder
    hinhanh?: SortOrder
  }

  export type DiadiemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiadiemMaxOrderByAggregateInput = {
    id?: SortOrder
    tendiadiem?: SortOrder
    diachi?: SortOrder
    mota?: SortOrder
    hinhanh?: SortOrder
  }

  export type DiadiemMinOrderByAggregateInput = {
    id?: SortOrder
    tendiadiem?: SortOrder
    diachi?: SortOrder
    mota?: SortOrder
    hinhanh?: SortOrder
  }

  export type DiadiemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DanhgiaCountOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type DanhgiaAvgOrderByAggregateInput = {
    id?: SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type DanhgiaMaxOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type DanhgiaMinOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type DanhgiaSumOrderByAggregateInput = {
    id?: SortOrder
    User_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GoidichvuRelationFilter = {
    is?: GoidichvuWhereInput
    isNot?: GoidichvuWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    sodienthoai?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    sodienthoai?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    sodienthoai?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    soluong?: SortOrder
    sotien?: SortOrder
    tour_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type ThanhtoanCountOrderByAggregateInput = {
    id?: SortOrder
    phuongthuc?: SortOrder
    sotien?: SortOrder
    trangthai?: SortOrder
    ngaythanhtoan?: SortOrder
  }

  export type ThanhtoanAvgOrderByAggregateInput = {
    id?: SortOrder
    sotien?: SortOrder
  }

  export type ThanhtoanMaxOrderByAggregateInput = {
    id?: SortOrder
    phuongthuc?: SortOrder
    sotien?: SortOrder
    trangthai?: SortOrder
    ngaythanhtoan?: SortOrder
  }

  export type ThanhtoanMinOrderByAggregateInput = {
    id?: SortOrder
    phuongthuc?: SortOrder
    sotien?: SortOrder
    trangthai?: SortOrder
    ngaythanhtoan?: SortOrder
  }

  export type ThanhtoanSumOrderByAggregateInput = {
    id?: SortOrder
    sotien?: SortOrder
  }

  export type ThanhtoanNullableRelationFilter = {
    is?: ThanhtoanWhereInput | null
    isNot?: ThanhtoanWhereInput | null
  }

  export type HoadonCountOrderByAggregateInput = {
    id?: SortOrder
    ngayxuat?: SortOrder
    tongtien?: SortOrder
    trangthai?: SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type HoadonAvgOrderByAggregateInput = {
    id?: SortOrder
    tongtien?: SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type HoadonMaxOrderByAggregateInput = {
    id?: SortOrder
    ngayxuat?: SortOrder
    tongtien?: SortOrder
    trangthai?: SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type HoadonMinOrderByAggregateInput = {
    id?: SortOrder
    ngayxuat?: SortOrder
    tongtien?: SortOrder
    trangthai?: SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }

  export type HoadonSumOrderByAggregateInput = {
    id?: SortOrder
    tongtien?: SortOrder
    User_id?: SortOrder
    Thanhtoan_id?: SortOrder
    Lichtrinh_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type gopyCountOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sodienthoai?: SortOrder
    rating?: SortOrder
    danhgiachitiet?: SortOrder
    gopythem?: SortOrder
    createdAt?: SortOrder
  }

  export type gopyAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type gopyMaxOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sodienthoai?: SortOrder
    rating?: SortOrder
    gopythem?: SortOrder
    createdAt?: SortOrder
  }

  export type gopyMinOrderByAggregateInput = {
    id?: SortOrder
    hoten?: SortOrder
    email?: SortOrder
    sodienthoai?: SortOrder
    rating?: SortOrder
    gopythem?: SortOrder
    createdAt?: SortOrder
  }

  export type gopySumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type NoidungCountOrderByAggregateInput = {
    id?: SortOrder
    tieude?: SortOrder
    hinhanh?: SortOrder
    danhMuc?: SortOrder
    mota?: SortOrder
    noidung?: SortOrder
    luotXem?: SortOrder
    createdAt?: SortOrder
    trangThai?: SortOrder
  }

  export type NoidungAvgOrderByAggregateInput = {
    id?: SortOrder
    luotXem?: SortOrder
  }

  export type NoidungMaxOrderByAggregateInput = {
    id?: SortOrder
    tieude?: SortOrder
    hinhanh?: SortOrder
    danhMuc?: SortOrder
    mota?: SortOrder
    noidung?: SortOrder
    luotXem?: SortOrder
    createdAt?: SortOrder
    trangThai?: SortOrder
  }

  export type NoidungMinOrderByAggregateInput = {
    id?: SortOrder
    tieude?: SortOrder
    hinhanh?: SortOrder
    danhMuc?: SortOrder
    mota?: SortOrder
    noidung?: SortOrder
    luotXem?: SortOrder
    createdAt?: SortOrder
    trangThai?: SortOrder
  }

  export type NoidungSumOrderByAggregateInput = {
    id?: SortOrder
    luotXem?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type LichtrinhCreateNestedManyWithoutUserInput = {
    create?: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput> | LichtrinhCreateWithoutUserInput[] | LichtrinhUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LichtrinhCreateOrConnectWithoutUserInput | LichtrinhCreateOrConnectWithoutUserInput[]
    createMany?: LichtrinhCreateManyUserInputEnvelope
    connect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
  }

  export type HoadonCreateNestedManyWithoutUserInput = {
    create?: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput> | HoadonCreateWithoutUserInput[] | HoadonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutUserInput | HoadonCreateOrConnectWithoutUserInput[]
    createMany?: HoadonCreateManyUserInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type DanhgiaCreateNestedManyWithoutUserInput = {
    create?: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput> | DanhgiaCreateWithoutUserInput[] | DanhgiaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutUserInput | DanhgiaCreateOrConnectWithoutUserInput[]
    createMany?: DanhgiaCreateManyUserInputEnvelope
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LichtrinhUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput> | LichtrinhCreateWithoutUserInput[] | LichtrinhUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LichtrinhCreateOrConnectWithoutUserInput | LichtrinhCreateOrConnectWithoutUserInput[]
    createMany?: LichtrinhCreateManyUserInputEnvelope
    connect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
  }

  export type HoadonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput> | HoadonCreateWithoutUserInput[] | HoadonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutUserInput | HoadonCreateOrConnectWithoutUserInput[]
    createMany?: HoadonCreateManyUserInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type DanhgiaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput> | DanhgiaCreateWithoutUserInput[] | DanhgiaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutUserInput | DanhgiaCreateOrConnectWithoutUserInput[]
    createMany?: DanhgiaCreateManyUserInputEnvelope
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type LichtrinhUpdateManyWithoutUserNestedInput = {
    create?: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput> | LichtrinhCreateWithoutUserInput[] | LichtrinhUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LichtrinhCreateOrConnectWithoutUserInput | LichtrinhCreateOrConnectWithoutUserInput[]
    upsert?: LichtrinhUpsertWithWhereUniqueWithoutUserInput | LichtrinhUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LichtrinhCreateManyUserInputEnvelope
    set?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    disconnect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    delete?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    connect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    update?: LichtrinhUpdateWithWhereUniqueWithoutUserInput | LichtrinhUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LichtrinhUpdateManyWithWhereWithoutUserInput | LichtrinhUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LichtrinhScalarWhereInput | LichtrinhScalarWhereInput[]
  }

  export type HoadonUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput> | HoadonCreateWithoutUserInput[] | HoadonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutUserInput | HoadonCreateOrConnectWithoutUserInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutUserInput | HoadonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoadonCreateManyUserInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutUserInput | HoadonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutUserInput | HoadonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type DanhgiaUpdateManyWithoutUserNestedInput = {
    create?: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput> | DanhgiaCreateWithoutUserInput[] | DanhgiaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutUserInput | DanhgiaCreateOrConnectWithoutUserInput[]
    upsert?: DanhgiaUpsertWithWhereUniqueWithoutUserInput | DanhgiaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DanhgiaCreateManyUserInputEnvelope
    set?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    disconnect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    delete?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    update?: DanhgiaUpdateWithWhereUniqueWithoutUserInput | DanhgiaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DanhgiaUpdateManyWithWhereWithoutUserInput | DanhgiaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LichtrinhUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput> | LichtrinhCreateWithoutUserInput[] | LichtrinhUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LichtrinhCreateOrConnectWithoutUserInput | LichtrinhCreateOrConnectWithoutUserInput[]
    upsert?: LichtrinhUpsertWithWhereUniqueWithoutUserInput | LichtrinhUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LichtrinhCreateManyUserInputEnvelope
    set?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    disconnect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    delete?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    connect?: LichtrinhWhereUniqueInput | LichtrinhWhereUniqueInput[]
    update?: LichtrinhUpdateWithWhereUniqueWithoutUserInput | LichtrinhUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LichtrinhUpdateManyWithWhereWithoutUserInput | LichtrinhUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LichtrinhScalarWhereInput | LichtrinhScalarWhereInput[]
  }

  export type HoadonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput> | HoadonCreateWithoutUserInput[] | HoadonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutUserInput | HoadonCreateOrConnectWithoutUserInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutUserInput | HoadonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoadonCreateManyUserInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutUserInput | HoadonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutUserInput | HoadonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type DanhgiaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput> | DanhgiaCreateWithoutUserInput[] | DanhgiaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutUserInput | DanhgiaCreateOrConnectWithoutUserInput[]
    upsert?: DanhgiaUpsertWithWhereUniqueWithoutUserInput | DanhgiaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DanhgiaCreateManyUserInputEnvelope
    set?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    disconnect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    delete?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    update?: DanhgiaUpdateWithWhereUniqueWithoutUserInput | DanhgiaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DanhgiaUpdateManyWithWhereWithoutUserInput | DanhgiaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLichtrinhInput = {
    create?: XOR<UserCreateWithoutLichtrinhInput, UserUncheckedCreateWithoutLichtrinhInput>
    connectOrCreate?: UserCreateOrConnectWithoutLichtrinhInput
    connect?: UserWhereUniqueInput
  }

  export type HoadonCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput> | HoadonCreateWithoutLichtrinhInput[] | HoadonUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutLichtrinhInput | HoadonCreateOrConnectWithoutLichtrinhInput[]
    createMany?: HoadonCreateManyLichtrinhInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type LichtrinhCTCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput> | LichtrinhCTCreateWithoutLichtrinhInput[] | LichtrinhCTUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutLichtrinhInput | LichtrinhCTCreateOrConnectWithoutLichtrinhInput[]
    createMany?: LichtrinhCTCreateManyLichtrinhInputEnvelope
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
  }

  export type DanhgiaCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput> | DanhgiaCreateWithoutLichtrinhInput[] | DanhgiaUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutLichtrinhInput | DanhgiaCreateOrConnectWithoutLichtrinhInput[]
    createMany?: DanhgiaCreateManyLichtrinhInputEnvelope
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
  }

  export type HoadonUncheckedCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput> | HoadonCreateWithoutLichtrinhInput[] | HoadonUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutLichtrinhInput | HoadonCreateOrConnectWithoutLichtrinhInput[]
    createMany?: HoadonCreateManyLichtrinhInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type LichtrinhCTUncheckedCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput> | LichtrinhCTCreateWithoutLichtrinhInput[] | LichtrinhCTUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutLichtrinhInput | LichtrinhCTCreateOrConnectWithoutLichtrinhInput[]
    createMany?: LichtrinhCTCreateManyLichtrinhInputEnvelope
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
  }

  export type DanhgiaUncheckedCreateNestedManyWithoutLichtrinhInput = {
    create?: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput> | DanhgiaCreateWithoutLichtrinhInput[] | DanhgiaUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutLichtrinhInput | DanhgiaCreateOrConnectWithoutLichtrinhInput[]
    createMany?: DanhgiaCreateManyLichtrinhInputEnvelope
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutLichtrinhNestedInput = {
    create?: XOR<UserCreateWithoutLichtrinhInput, UserUncheckedCreateWithoutLichtrinhInput>
    connectOrCreate?: UserCreateOrConnectWithoutLichtrinhInput
    upsert?: UserUpsertWithoutLichtrinhInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLichtrinhInput, UserUpdateWithoutLichtrinhInput>, UserUncheckedUpdateWithoutLichtrinhInput>
  }

  export type HoadonUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput> | HoadonCreateWithoutLichtrinhInput[] | HoadonUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutLichtrinhInput | HoadonCreateOrConnectWithoutLichtrinhInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutLichtrinhInput | HoadonUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: HoadonCreateManyLichtrinhInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutLichtrinhInput | HoadonUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutLichtrinhInput | HoadonUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type LichtrinhCTUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput> | LichtrinhCTCreateWithoutLichtrinhInput[] | LichtrinhCTUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutLichtrinhInput | LichtrinhCTCreateOrConnectWithoutLichtrinhInput[]
    upsert?: LichtrinhCTUpsertWithWhereUniqueWithoutLichtrinhInput | LichtrinhCTUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: LichtrinhCTCreateManyLichtrinhInputEnvelope
    set?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    disconnect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    delete?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    update?: LichtrinhCTUpdateWithWhereUniqueWithoutLichtrinhInput | LichtrinhCTUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: LichtrinhCTUpdateManyWithWhereWithoutLichtrinhInput | LichtrinhCTUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
  }

  export type DanhgiaUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput> | DanhgiaCreateWithoutLichtrinhInput[] | DanhgiaUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutLichtrinhInput | DanhgiaCreateOrConnectWithoutLichtrinhInput[]
    upsert?: DanhgiaUpsertWithWhereUniqueWithoutLichtrinhInput | DanhgiaUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: DanhgiaCreateManyLichtrinhInputEnvelope
    set?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    disconnect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    delete?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    update?: DanhgiaUpdateWithWhereUniqueWithoutLichtrinhInput | DanhgiaUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: DanhgiaUpdateManyWithWhereWithoutLichtrinhInput | DanhgiaUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
  }

  export type HoadonUncheckedUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput> | HoadonCreateWithoutLichtrinhInput[] | HoadonUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutLichtrinhInput | HoadonCreateOrConnectWithoutLichtrinhInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutLichtrinhInput | HoadonUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: HoadonCreateManyLichtrinhInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutLichtrinhInput | HoadonUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutLichtrinhInput | HoadonUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type LichtrinhCTUncheckedUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput> | LichtrinhCTCreateWithoutLichtrinhInput[] | LichtrinhCTUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutLichtrinhInput | LichtrinhCTCreateOrConnectWithoutLichtrinhInput[]
    upsert?: LichtrinhCTUpsertWithWhereUniqueWithoutLichtrinhInput | LichtrinhCTUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: LichtrinhCTCreateManyLichtrinhInputEnvelope
    set?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    disconnect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    delete?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    update?: LichtrinhCTUpdateWithWhereUniqueWithoutLichtrinhInput | LichtrinhCTUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: LichtrinhCTUpdateManyWithWhereWithoutLichtrinhInput | LichtrinhCTUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
  }

  export type DanhgiaUncheckedUpdateManyWithoutLichtrinhNestedInput = {
    create?: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput> | DanhgiaCreateWithoutLichtrinhInput[] | DanhgiaUncheckedCreateWithoutLichtrinhInput[]
    connectOrCreate?: DanhgiaCreateOrConnectWithoutLichtrinhInput | DanhgiaCreateOrConnectWithoutLichtrinhInput[]
    upsert?: DanhgiaUpsertWithWhereUniqueWithoutLichtrinhInput | DanhgiaUpsertWithWhereUniqueWithoutLichtrinhInput[]
    createMany?: DanhgiaCreateManyLichtrinhInputEnvelope
    set?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    disconnect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    delete?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    connect?: DanhgiaWhereUniqueInput | DanhgiaWhereUniqueInput[]
    update?: DanhgiaUpdateWithWhereUniqueWithoutLichtrinhInput | DanhgiaUpdateWithWhereUniqueWithoutLichtrinhInput[]
    updateMany?: DanhgiaUpdateManyWithWhereWithoutLichtrinhInput | DanhgiaUpdateManyWithWhereWithoutLichtrinhInput[]
    deleteMany?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
  }

  export type LichtrinhCreateNestedOneWithoutLichtrinhCTInput = {
    create?: XOR<LichtrinhCreateWithoutLichtrinhCTInput, LichtrinhUncheckedCreateWithoutLichtrinhCTInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutLichtrinhCTInput
    connect?: LichtrinhWhereUniqueInput
  }

  export type GoidichvuCreateNestedOneWithoutLichtrinhCTInput = {
    create?: XOR<GoidichvuCreateWithoutLichtrinhCTInput, GoidichvuUncheckedCreateWithoutLichtrinhCTInput>
    connectOrCreate?: GoidichvuCreateOrConnectWithoutLichtrinhCTInput
    connect?: GoidichvuWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LichtrinhUpdateOneWithoutLichtrinhCTNestedInput = {
    create?: XOR<LichtrinhCreateWithoutLichtrinhCTInput, LichtrinhUncheckedCreateWithoutLichtrinhCTInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutLichtrinhCTInput
    upsert?: LichtrinhUpsertWithoutLichtrinhCTInput
    disconnect?: LichtrinhWhereInput | boolean
    delete?: LichtrinhWhereInput | boolean
    connect?: LichtrinhWhereUniqueInput
    update?: XOR<XOR<LichtrinhUpdateToOneWithWhereWithoutLichtrinhCTInput, LichtrinhUpdateWithoutLichtrinhCTInput>, LichtrinhUncheckedUpdateWithoutLichtrinhCTInput>
  }

  export type GoidichvuUpdateOneWithoutLichtrinhCTNestedInput = {
    create?: XOR<GoidichvuCreateWithoutLichtrinhCTInput, GoidichvuUncheckedCreateWithoutLichtrinhCTInput>
    connectOrCreate?: GoidichvuCreateOrConnectWithoutLichtrinhCTInput
    upsert?: GoidichvuUpsertWithoutLichtrinhCTInput
    disconnect?: GoidichvuWhereInput | boolean
    delete?: GoidichvuWhereInput | boolean
    connect?: GoidichvuWhereUniqueInput
    update?: XOR<XOR<GoidichvuUpdateToOneWithWhereWithoutLichtrinhCTInput, GoidichvuUpdateWithoutLichtrinhCTInput>, GoidichvuUncheckedUpdateWithoutLichtrinhCTInput>
  }

  export type DiadiemCreateNestedOneWithoutGoidichvuInput = {
    create?: XOR<DiadiemCreateWithoutGoidichvuInput, DiadiemUncheckedCreateWithoutGoidichvuInput>
    connectOrCreate?: DiadiemCreateOrConnectWithoutGoidichvuInput
    connect?: DiadiemWhereUniqueInput
  }

  export type LichtrinhCTCreateNestedManyWithoutGoidichvuInput = {
    create?: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput> | LichtrinhCTCreateWithoutGoidichvuInput[] | LichtrinhCTUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutGoidichvuInput | LichtrinhCTCreateOrConnectWithoutGoidichvuInput[]
    createMany?: LichtrinhCTCreateManyGoidichvuInputEnvelope
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutGoidichvuInput = {
    create?: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput> | BookingCreateWithoutGoidichvuInput[] | BookingUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGoidichvuInput | BookingCreateOrConnectWithoutGoidichvuInput[]
    createMany?: BookingCreateManyGoidichvuInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LichtrinhCTUncheckedCreateNestedManyWithoutGoidichvuInput = {
    create?: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput> | LichtrinhCTCreateWithoutGoidichvuInput[] | LichtrinhCTUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutGoidichvuInput | LichtrinhCTCreateOrConnectWithoutGoidichvuInput[]
    createMany?: LichtrinhCTCreateManyGoidichvuInputEnvelope
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutGoidichvuInput = {
    create?: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput> | BookingCreateWithoutGoidichvuInput[] | BookingUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGoidichvuInput | BookingCreateOrConnectWithoutGoidichvuInput[]
    createMany?: BookingCreateManyGoidichvuInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiadiemUpdateOneWithoutGoidichvuNestedInput = {
    create?: XOR<DiadiemCreateWithoutGoidichvuInput, DiadiemUncheckedCreateWithoutGoidichvuInput>
    connectOrCreate?: DiadiemCreateOrConnectWithoutGoidichvuInput
    upsert?: DiadiemUpsertWithoutGoidichvuInput
    disconnect?: DiadiemWhereInput | boolean
    delete?: DiadiemWhereInput | boolean
    connect?: DiadiemWhereUniqueInput
    update?: XOR<XOR<DiadiemUpdateToOneWithWhereWithoutGoidichvuInput, DiadiemUpdateWithoutGoidichvuInput>, DiadiemUncheckedUpdateWithoutGoidichvuInput>
  }

  export type LichtrinhCTUpdateManyWithoutGoidichvuNestedInput = {
    create?: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput> | LichtrinhCTCreateWithoutGoidichvuInput[] | LichtrinhCTUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutGoidichvuInput | LichtrinhCTCreateOrConnectWithoutGoidichvuInput[]
    upsert?: LichtrinhCTUpsertWithWhereUniqueWithoutGoidichvuInput | LichtrinhCTUpsertWithWhereUniqueWithoutGoidichvuInput[]
    createMany?: LichtrinhCTCreateManyGoidichvuInputEnvelope
    set?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    disconnect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    delete?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    update?: LichtrinhCTUpdateWithWhereUniqueWithoutGoidichvuInput | LichtrinhCTUpdateWithWhereUniqueWithoutGoidichvuInput[]
    updateMany?: LichtrinhCTUpdateManyWithWhereWithoutGoidichvuInput | LichtrinhCTUpdateManyWithWhereWithoutGoidichvuInput[]
    deleteMany?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutGoidichvuNestedInput = {
    create?: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput> | BookingCreateWithoutGoidichvuInput[] | BookingUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGoidichvuInput | BookingCreateOrConnectWithoutGoidichvuInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGoidichvuInput | BookingUpsertWithWhereUniqueWithoutGoidichvuInput[]
    createMany?: BookingCreateManyGoidichvuInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGoidichvuInput | BookingUpdateWithWhereUniqueWithoutGoidichvuInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGoidichvuInput | BookingUpdateManyWithWhereWithoutGoidichvuInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LichtrinhCTUncheckedUpdateManyWithoutGoidichvuNestedInput = {
    create?: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput> | LichtrinhCTCreateWithoutGoidichvuInput[] | LichtrinhCTUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: LichtrinhCTCreateOrConnectWithoutGoidichvuInput | LichtrinhCTCreateOrConnectWithoutGoidichvuInput[]
    upsert?: LichtrinhCTUpsertWithWhereUniqueWithoutGoidichvuInput | LichtrinhCTUpsertWithWhereUniqueWithoutGoidichvuInput[]
    createMany?: LichtrinhCTCreateManyGoidichvuInputEnvelope
    set?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    disconnect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    delete?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    connect?: LichtrinhCTWhereUniqueInput | LichtrinhCTWhereUniqueInput[]
    update?: LichtrinhCTUpdateWithWhereUniqueWithoutGoidichvuInput | LichtrinhCTUpdateWithWhereUniqueWithoutGoidichvuInput[]
    updateMany?: LichtrinhCTUpdateManyWithWhereWithoutGoidichvuInput | LichtrinhCTUpdateManyWithWhereWithoutGoidichvuInput[]
    deleteMany?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutGoidichvuNestedInput = {
    create?: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput> | BookingCreateWithoutGoidichvuInput[] | BookingUncheckedCreateWithoutGoidichvuInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGoidichvuInput | BookingCreateOrConnectWithoutGoidichvuInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGoidichvuInput | BookingUpsertWithWhereUniqueWithoutGoidichvuInput[]
    createMany?: BookingCreateManyGoidichvuInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGoidichvuInput | BookingUpdateWithWhereUniqueWithoutGoidichvuInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGoidichvuInput | BookingUpdateManyWithWhereWithoutGoidichvuInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type GoidichvuCreateNestedManyWithoutDiadiemInput = {
    create?: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput> | GoidichvuCreateWithoutDiadiemInput[] | GoidichvuUncheckedCreateWithoutDiadiemInput[]
    connectOrCreate?: GoidichvuCreateOrConnectWithoutDiadiemInput | GoidichvuCreateOrConnectWithoutDiadiemInput[]
    createMany?: GoidichvuCreateManyDiadiemInputEnvelope
    connect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
  }

  export type GoidichvuUncheckedCreateNestedManyWithoutDiadiemInput = {
    create?: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput> | GoidichvuCreateWithoutDiadiemInput[] | GoidichvuUncheckedCreateWithoutDiadiemInput[]
    connectOrCreate?: GoidichvuCreateOrConnectWithoutDiadiemInput | GoidichvuCreateOrConnectWithoutDiadiemInput[]
    createMany?: GoidichvuCreateManyDiadiemInputEnvelope
    connect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
  }

  export type GoidichvuUpdateManyWithoutDiadiemNestedInput = {
    create?: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput> | GoidichvuCreateWithoutDiadiemInput[] | GoidichvuUncheckedCreateWithoutDiadiemInput[]
    connectOrCreate?: GoidichvuCreateOrConnectWithoutDiadiemInput | GoidichvuCreateOrConnectWithoutDiadiemInput[]
    upsert?: GoidichvuUpsertWithWhereUniqueWithoutDiadiemInput | GoidichvuUpsertWithWhereUniqueWithoutDiadiemInput[]
    createMany?: GoidichvuCreateManyDiadiemInputEnvelope
    set?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    disconnect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    delete?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    connect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    update?: GoidichvuUpdateWithWhereUniqueWithoutDiadiemInput | GoidichvuUpdateWithWhereUniqueWithoutDiadiemInput[]
    updateMany?: GoidichvuUpdateManyWithWhereWithoutDiadiemInput | GoidichvuUpdateManyWithWhereWithoutDiadiemInput[]
    deleteMany?: GoidichvuScalarWhereInput | GoidichvuScalarWhereInput[]
  }

  export type GoidichvuUncheckedUpdateManyWithoutDiadiemNestedInput = {
    create?: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput> | GoidichvuCreateWithoutDiadiemInput[] | GoidichvuUncheckedCreateWithoutDiadiemInput[]
    connectOrCreate?: GoidichvuCreateOrConnectWithoutDiadiemInput | GoidichvuCreateOrConnectWithoutDiadiemInput[]
    upsert?: GoidichvuUpsertWithWhereUniqueWithoutDiadiemInput | GoidichvuUpsertWithWhereUniqueWithoutDiadiemInput[]
    createMany?: GoidichvuCreateManyDiadiemInputEnvelope
    set?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    disconnect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    delete?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    connect?: GoidichvuWhereUniqueInput | GoidichvuWhereUniqueInput[]
    update?: GoidichvuUpdateWithWhereUniqueWithoutDiadiemInput | GoidichvuUpdateWithWhereUniqueWithoutDiadiemInput[]
    updateMany?: GoidichvuUpdateManyWithWhereWithoutDiadiemInput | GoidichvuUpdateManyWithWhereWithoutDiadiemInput[]
    deleteMany?: GoidichvuScalarWhereInput | GoidichvuScalarWhereInput[]
  }

  export type LichtrinhCreateNestedOneWithoutDanhgiaInput = {
    create?: XOR<LichtrinhCreateWithoutDanhgiaInput, LichtrinhUncheckedCreateWithoutDanhgiaInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutDanhgiaInput
    connect?: LichtrinhWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDanhgiaInput = {
    create?: XOR<UserCreateWithoutDanhgiaInput, UserUncheckedCreateWithoutDanhgiaInput>
    connectOrCreate?: UserCreateOrConnectWithoutDanhgiaInput
    connect?: UserWhereUniqueInput
  }

  export type LichtrinhUpdateOneWithoutDanhgiaNestedInput = {
    create?: XOR<LichtrinhCreateWithoutDanhgiaInput, LichtrinhUncheckedCreateWithoutDanhgiaInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutDanhgiaInput
    upsert?: LichtrinhUpsertWithoutDanhgiaInput
    disconnect?: LichtrinhWhereInput | boolean
    delete?: LichtrinhWhereInput | boolean
    connect?: LichtrinhWhereUniqueInput
    update?: XOR<XOR<LichtrinhUpdateToOneWithWhereWithoutDanhgiaInput, LichtrinhUpdateWithoutDanhgiaInput>, LichtrinhUncheckedUpdateWithoutDanhgiaInput>
  }

  export type UserUpdateOneWithoutDanhgiaNestedInput = {
    create?: XOR<UserCreateWithoutDanhgiaInput, UserUncheckedCreateWithoutDanhgiaInput>
    connectOrCreate?: UserCreateOrConnectWithoutDanhgiaInput
    upsert?: UserUpsertWithoutDanhgiaInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDanhgiaInput, UserUpdateWithoutDanhgiaInput>, UserUncheckedUpdateWithoutDanhgiaInput>
  }

  export type GoidichvuCreateNestedOneWithoutBookingInput = {
    create?: XOR<GoidichvuCreateWithoutBookingInput, GoidichvuUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GoidichvuCreateOrConnectWithoutBookingInput
    connect?: GoidichvuWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GoidichvuUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<GoidichvuCreateWithoutBookingInput, GoidichvuUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GoidichvuCreateOrConnectWithoutBookingInput
    upsert?: GoidichvuUpsertWithoutBookingInput
    connect?: GoidichvuWhereUniqueInput
    update?: XOR<XOR<GoidichvuUpdateToOneWithWhereWithoutBookingInput, GoidichvuUpdateWithoutBookingInput>, GoidichvuUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateOneWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type HoadonCreateNestedManyWithoutThanhtoanInput = {
    create?: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput> | HoadonCreateWithoutThanhtoanInput[] | HoadonUncheckedCreateWithoutThanhtoanInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutThanhtoanInput | HoadonCreateOrConnectWithoutThanhtoanInput[]
    createMany?: HoadonCreateManyThanhtoanInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type HoadonUncheckedCreateNestedManyWithoutThanhtoanInput = {
    create?: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput> | HoadonCreateWithoutThanhtoanInput[] | HoadonUncheckedCreateWithoutThanhtoanInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutThanhtoanInput | HoadonCreateOrConnectWithoutThanhtoanInput[]
    createMany?: HoadonCreateManyThanhtoanInputEnvelope
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
  }

  export type HoadonUpdateManyWithoutThanhtoanNestedInput = {
    create?: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput> | HoadonCreateWithoutThanhtoanInput[] | HoadonUncheckedCreateWithoutThanhtoanInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutThanhtoanInput | HoadonCreateOrConnectWithoutThanhtoanInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutThanhtoanInput | HoadonUpsertWithWhereUniqueWithoutThanhtoanInput[]
    createMany?: HoadonCreateManyThanhtoanInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutThanhtoanInput | HoadonUpdateWithWhereUniqueWithoutThanhtoanInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutThanhtoanInput | HoadonUpdateManyWithWhereWithoutThanhtoanInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type HoadonUncheckedUpdateManyWithoutThanhtoanNestedInput = {
    create?: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput> | HoadonCreateWithoutThanhtoanInput[] | HoadonUncheckedCreateWithoutThanhtoanInput[]
    connectOrCreate?: HoadonCreateOrConnectWithoutThanhtoanInput | HoadonCreateOrConnectWithoutThanhtoanInput[]
    upsert?: HoadonUpsertWithWhereUniqueWithoutThanhtoanInput | HoadonUpsertWithWhereUniqueWithoutThanhtoanInput[]
    createMany?: HoadonCreateManyThanhtoanInputEnvelope
    set?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    disconnect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    delete?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    connect?: HoadonWhereUniqueInput | HoadonWhereUniqueInput[]
    update?: HoadonUpdateWithWhereUniqueWithoutThanhtoanInput | HoadonUpdateWithWhereUniqueWithoutThanhtoanInput[]
    updateMany?: HoadonUpdateManyWithWhereWithoutThanhtoanInput | HoadonUpdateManyWithWhereWithoutThanhtoanInput[]
    deleteMany?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHoadonInput = {
    create?: XOR<UserCreateWithoutHoadonInput, UserUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoadonInput
    connect?: UserWhereUniqueInput
  }

  export type ThanhtoanCreateNestedOneWithoutHoadonInput = {
    create?: XOR<ThanhtoanCreateWithoutHoadonInput, ThanhtoanUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: ThanhtoanCreateOrConnectWithoutHoadonInput
    connect?: ThanhtoanWhereUniqueInput
  }

  export type LichtrinhCreateNestedOneWithoutHoadonInput = {
    create?: XOR<LichtrinhCreateWithoutHoadonInput, LichtrinhUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutHoadonInput
    connect?: LichtrinhWhereUniqueInput
  }

  export type UserUpdateOneWithoutHoadonNestedInput = {
    create?: XOR<UserCreateWithoutHoadonInput, UserUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoadonInput
    upsert?: UserUpsertWithoutHoadonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHoadonInput, UserUpdateWithoutHoadonInput>, UserUncheckedUpdateWithoutHoadonInput>
  }

  export type ThanhtoanUpdateOneWithoutHoadonNestedInput = {
    create?: XOR<ThanhtoanCreateWithoutHoadonInput, ThanhtoanUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: ThanhtoanCreateOrConnectWithoutHoadonInput
    upsert?: ThanhtoanUpsertWithoutHoadonInput
    disconnect?: ThanhtoanWhereInput | boolean
    delete?: ThanhtoanWhereInput | boolean
    connect?: ThanhtoanWhereUniqueInput
    update?: XOR<XOR<ThanhtoanUpdateToOneWithWhereWithoutHoadonInput, ThanhtoanUpdateWithoutHoadonInput>, ThanhtoanUncheckedUpdateWithoutHoadonInput>
  }

  export type LichtrinhUpdateOneWithoutHoadonNestedInput = {
    create?: XOR<LichtrinhCreateWithoutHoadonInput, LichtrinhUncheckedCreateWithoutHoadonInput>
    connectOrCreate?: LichtrinhCreateOrConnectWithoutHoadonInput
    upsert?: LichtrinhUpsertWithoutHoadonInput
    disconnect?: LichtrinhWhereInput | boolean
    delete?: LichtrinhWhereInput | boolean
    connect?: LichtrinhWhereUniqueInput
    update?: XOR<XOR<LichtrinhUpdateToOneWithWhereWithoutHoadonInput, LichtrinhUpdateWithoutHoadonInput>, LichtrinhUncheckedUpdateWithoutHoadonInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleCreateWithoutUserInput = {
    tenrole?: string | null
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: number
    tenrole?: string | null
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type LichtrinhCreateWithoutUserInput = {
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    Hoadon?: HoadonCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUncheckedCreateWithoutUserInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhCreateOrConnectWithoutUserInput = {
    where: LichtrinhWhereUniqueInput
    create: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput>
  }

  export type LichtrinhCreateManyUserInputEnvelope = {
    data: LichtrinhCreateManyUserInput | LichtrinhCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HoadonCreateWithoutUserInput = {
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    Thanhtoan?: ThanhtoanCreateNestedOneWithoutHoadonInput
    Lichtrinh?: LichtrinhCreateNestedOneWithoutHoadonInput
  }

  export type HoadonUncheckedCreateWithoutUserInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    Thanhtoan_id: number
    Lichtrinh_id: number
  }

  export type HoadonCreateOrConnectWithoutUserInput = {
    where: HoadonWhereUniqueInput
    create: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput>
  }

  export type HoadonCreateManyUserInputEnvelope = {
    data: HoadonCreateManyUserInput | HoadonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DanhgiaCreateWithoutUserInput = {
    noidung?: string | null
    Lichtrinh?: LichtrinhCreateNestedOneWithoutDanhgiaInput
  }

  export type DanhgiaUncheckedCreateWithoutUserInput = {
    id?: number
    noidung?: string | null
    Lichtrinh_id: number
  }

  export type DanhgiaCreateOrConnectWithoutUserInput = {
    where: DanhgiaWhereUniqueInput
    create: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput>
  }

  export type DanhgiaCreateManyUserInputEnvelope = {
    data: DanhgiaCreateManyUserInput | DanhgiaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    createdAt?: Date | string
    status?: string
    Goidichvu: GoidichvuCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    tour_id: number
    createdAt?: Date | string
    status?: string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenrole?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichtrinhUpsertWithWhereUniqueWithoutUserInput = {
    where: LichtrinhWhereUniqueInput
    update: XOR<LichtrinhUpdateWithoutUserInput, LichtrinhUncheckedUpdateWithoutUserInput>
    create: XOR<LichtrinhCreateWithoutUserInput, LichtrinhUncheckedCreateWithoutUserInput>
  }

  export type LichtrinhUpdateWithWhereUniqueWithoutUserInput = {
    where: LichtrinhWhereUniqueInput
    data: XOR<LichtrinhUpdateWithoutUserInput, LichtrinhUncheckedUpdateWithoutUserInput>
  }

  export type LichtrinhUpdateManyWithWhereWithoutUserInput = {
    where: LichtrinhScalarWhereInput
    data: XOR<LichtrinhUpdateManyMutationInput, LichtrinhUncheckedUpdateManyWithoutUserInput>
  }

  export type LichtrinhScalarWhereInput = {
    AND?: LichtrinhScalarWhereInput | LichtrinhScalarWhereInput[]
    OR?: LichtrinhScalarWhereInput[]
    NOT?: LichtrinhScalarWhereInput | LichtrinhScalarWhereInput[]
    id?: IntFilter<"Lichtrinh"> | number
    tenlichtrinh?: StringNullableFilter<"Lichtrinh"> | string | null
    ngaytao?: DateTimeFilter<"Lichtrinh"> | Date | string
    ghichu?: StringNullableFilter<"Lichtrinh"> | string | null
    User_id?: IntFilter<"Lichtrinh"> | number
  }

  export type HoadonUpsertWithWhereUniqueWithoutUserInput = {
    where: HoadonWhereUniqueInput
    update: XOR<HoadonUpdateWithoutUserInput, HoadonUncheckedUpdateWithoutUserInput>
    create: XOR<HoadonCreateWithoutUserInput, HoadonUncheckedCreateWithoutUserInput>
  }

  export type HoadonUpdateWithWhereUniqueWithoutUserInput = {
    where: HoadonWhereUniqueInput
    data: XOR<HoadonUpdateWithoutUserInput, HoadonUncheckedUpdateWithoutUserInput>
  }

  export type HoadonUpdateManyWithWhereWithoutUserInput = {
    where: HoadonScalarWhereInput
    data: XOR<HoadonUpdateManyMutationInput, HoadonUncheckedUpdateManyWithoutUserInput>
  }

  export type HoadonScalarWhereInput = {
    AND?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
    OR?: HoadonScalarWhereInput[]
    NOT?: HoadonScalarWhereInput | HoadonScalarWhereInput[]
    id?: IntFilter<"Hoadon"> | number
    ngayxuat?: DateTimeFilter<"Hoadon"> | Date | string
    tongtien?: IntFilter<"Hoadon"> | number
    trangthai?: StringNullableFilter<"Hoadon"> | string | null
    User_id?: IntFilter<"Hoadon"> | number
    Thanhtoan_id?: IntFilter<"Hoadon"> | number
    Lichtrinh_id?: IntFilter<"Hoadon"> | number
  }

  export type DanhgiaUpsertWithWhereUniqueWithoutUserInput = {
    where: DanhgiaWhereUniqueInput
    update: XOR<DanhgiaUpdateWithoutUserInput, DanhgiaUncheckedUpdateWithoutUserInput>
    create: XOR<DanhgiaCreateWithoutUserInput, DanhgiaUncheckedCreateWithoutUserInput>
  }

  export type DanhgiaUpdateWithWhereUniqueWithoutUserInput = {
    where: DanhgiaWhereUniqueInput
    data: XOR<DanhgiaUpdateWithoutUserInput, DanhgiaUncheckedUpdateWithoutUserInput>
  }

  export type DanhgiaUpdateManyWithWhereWithoutUserInput = {
    where: DanhgiaScalarWhereInput
    data: XOR<DanhgiaUpdateManyMutationInput, DanhgiaUncheckedUpdateManyWithoutUserInput>
  }

  export type DanhgiaScalarWhereInput = {
    AND?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
    OR?: DanhgiaScalarWhereInput[]
    NOT?: DanhgiaScalarWhereInput | DanhgiaScalarWhereInput[]
    id?: IntFilter<"Danhgia"> | number
    noidung?: StringNullableFilter<"Danhgia"> | string | null
    User_id?: IntFilter<"Danhgia"> | number
    Lichtrinh_id?: IntFilter<"Danhgia"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    hoten?: StringFilter<"Booking"> | string
    sodienthoai?: StringFilter<"Booking"> | string
    soluong?: IntFilter<"Booking"> | number
    sotien?: IntFilter<"Booking"> | number
    tour_id?: IntFilter<"Booking"> | number
    user_id?: IntNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
  }

  export type UserCreateWithoutRoleInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Lichtrinh?: LichtrinhCreateNestedManyWithoutUserInput
    Hoadon?: HoadonCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaCreateNestedManyWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Lichtrinh?: LichtrinhUncheckedCreateNestedManyWithoutUserInput
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutUserInput
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    hoten?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    matkhau?: StringNullableFilter<"User"> | string | null
    sodienthoai?: StringNullableFilter<"User"> | string | null
    diachi?: StringNullableFilter<"User"> | string | null
    trangthai?: StringNullableFilter<"User"> | string | null
    creatAT?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    isLocked?: BoolFilter<"User"> | boolean
    Role_id?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutLichtrinhInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role?: RoleCreateNestedOneWithoutUserInput
    Hoadon?: HoadonCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaCreateNestedManyWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLichtrinhInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutUserInput
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLichtrinhInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLichtrinhInput, UserUncheckedCreateWithoutLichtrinhInput>
  }

  export type HoadonCreateWithoutLichtrinhInput = {
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User?: UserCreateNestedOneWithoutHoadonInput
    Thanhtoan?: ThanhtoanCreateNestedOneWithoutHoadonInput
  }

  export type HoadonUncheckedCreateWithoutLichtrinhInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Thanhtoan_id: number
  }

  export type HoadonCreateOrConnectWithoutLichtrinhInput = {
    where: HoadonWhereUniqueInput
    create: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput>
  }

  export type HoadonCreateManyLichtrinhInputEnvelope = {
    data: HoadonCreateManyLichtrinhInput | HoadonCreateManyLichtrinhInput[]
    skipDuplicates?: boolean
  }

  export type LichtrinhCTCreateWithoutLichtrinhInput = {
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Goidichvu?: GoidichvuCreateNestedOneWithoutLichtrinhCTInput
  }

  export type LichtrinhCTUncheckedCreateWithoutLichtrinhInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Goidichvu_id: number
  }

  export type LichtrinhCTCreateOrConnectWithoutLichtrinhInput = {
    where: LichtrinhCTWhereUniqueInput
    create: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput>
  }

  export type LichtrinhCTCreateManyLichtrinhInputEnvelope = {
    data: LichtrinhCTCreateManyLichtrinhInput | LichtrinhCTCreateManyLichtrinhInput[]
    skipDuplicates?: boolean
  }

  export type DanhgiaCreateWithoutLichtrinhInput = {
    noidung?: string | null
    User?: UserCreateNestedOneWithoutDanhgiaInput
  }

  export type DanhgiaUncheckedCreateWithoutLichtrinhInput = {
    id?: number
    noidung?: string | null
    User_id: number
  }

  export type DanhgiaCreateOrConnectWithoutLichtrinhInput = {
    where: DanhgiaWhereUniqueInput
    create: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput>
  }

  export type DanhgiaCreateManyLichtrinhInputEnvelope = {
    data: DanhgiaCreateManyLichtrinhInput | DanhgiaCreateManyLichtrinhInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLichtrinhInput = {
    update: XOR<UserUpdateWithoutLichtrinhInput, UserUncheckedUpdateWithoutLichtrinhInput>
    create: XOR<UserCreateWithoutLichtrinhInput, UserUncheckedCreateWithoutLichtrinhInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLichtrinhInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLichtrinhInput, UserUncheckedUpdateWithoutLichtrinhInput>
  }

  export type UserUpdateWithoutLichtrinhInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role?: RoleUpdateOneWithoutUserNestedInput
    Hoadon?: HoadonUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
    Hoadon?: HoadonUncheckedUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutUserNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HoadonUpsertWithWhereUniqueWithoutLichtrinhInput = {
    where: HoadonWhereUniqueInput
    update: XOR<HoadonUpdateWithoutLichtrinhInput, HoadonUncheckedUpdateWithoutLichtrinhInput>
    create: XOR<HoadonCreateWithoutLichtrinhInput, HoadonUncheckedCreateWithoutLichtrinhInput>
  }

  export type HoadonUpdateWithWhereUniqueWithoutLichtrinhInput = {
    where: HoadonWhereUniqueInput
    data: XOR<HoadonUpdateWithoutLichtrinhInput, HoadonUncheckedUpdateWithoutLichtrinhInput>
  }

  export type HoadonUpdateManyWithWhereWithoutLichtrinhInput = {
    where: HoadonScalarWhereInput
    data: XOR<HoadonUpdateManyMutationInput, HoadonUncheckedUpdateManyWithoutLichtrinhInput>
  }

  export type LichtrinhCTUpsertWithWhereUniqueWithoutLichtrinhInput = {
    where: LichtrinhCTWhereUniqueInput
    update: XOR<LichtrinhCTUpdateWithoutLichtrinhInput, LichtrinhCTUncheckedUpdateWithoutLichtrinhInput>
    create: XOR<LichtrinhCTCreateWithoutLichtrinhInput, LichtrinhCTUncheckedCreateWithoutLichtrinhInput>
  }

  export type LichtrinhCTUpdateWithWhereUniqueWithoutLichtrinhInput = {
    where: LichtrinhCTWhereUniqueInput
    data: XOR<LichtrinhCTUpdateWithoutLichtrinhInput, LichtrinhCTUncheckedUpdateWithoutLichtrinhInput>
  }

  export type LichtrinhCTUpdateManyWithWhereWithoutLichtrinhInput = {
    where: LichtrinhCTScalarWhereInput
    data: XOR<LichtrinhCTUpdateManyMutationInput, LichtrinhCTUncheckedUpdateManyWithoutLichtrinhInput>
  }

  export type LichtrinhCTScalarWhereInput = {
    AND?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
    OR?: LichtrinhCTScalarWhereInput[]
    NOT?: LichtrinhCTScalarWhereInput | LichtrinhCTScalarWhereInput[]
    id?: IntFilter<"LichtrinhCT"> | number
    soluong?: IntFilter<"LichtrinhCT"> | number
    thanhtien?: IntFilter<"LichtrinhCT"> | number
    noikhoihanh?: StringNullableFilter<"LichtrinhCT"> | string | null
    ngaykhoihanh?: DateTimeNullableFilter<"LichtrinhCT"> | Date | string | null
    lichtrinhdichuyen?: StringNullableFilter<"LichtrinhCT"> | string | null
    Lichtrinh_id?: IntFilter<"LichtrinhCT"> | number
    Goidichvu_id?: IntFilter<"LichtrinhCT"> | number
  }

  export type DanhgiaUpsertWithWhereUniqueWithoutLichtrinhInput = {
    where: DanhgiaWhereUniqueInput
    update: XOR<DanhgiaUpdateWithoutLichtrinhInput, DanhgiaUncheckedUpdateWithoutLichtrinhInput>
    create: XOR<DanhgiaCreateWithoutLichtrinhInput, DanhgiaUncheckedCreateWithoutLichtrinhInput>
  }

  export type DanhgiaUpdateWithWhereUniqueWithoutLichtrinhInput = {
    where: DanhgiaWhereUniqueInput
    data: XOR<DanhgiaUpdateWithoutLichtrinhInput, DanhgiaUncheckedUpdateWithoutLichtrinhInput>
  }

  export type DanhgiaUpdateManyWithWhereWithoutLichtrinhInput = {
    where: DanhgiaScalarWhereInput
    data: XOR<DanhgiaUpdateManyMutationInput, DanhgiaUncheckedUpdateManyWithoutLichtrinhInput>
  }

  export type LichtrinhCreateWithoutLichtrinhCTInput = {
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User?: UserCreateNestedOneWithoutLichtrinhInput
    Hoadon?: HoadonCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUncheckedCreateWithoutLichtrinhCTInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User_id: number
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhCreateOrConnectWithoutLichtrinhCTInput = {
    where: LichtrinhWhereUniqueInput
    create: XOR<LichtrinhCreateWithoutLichtrinhCTInput, LichtrinhUncheckedCreateWithoutLichtrinhCTInput>
  }

  export type GoidichvuCreateWithoutLichtrinhCTInput = {
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem?: DiadiemCreateNestedOneWithoutGoidichvuInput
    Booking?: BookingCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuUncheckedCreateWithoutLichtrinhCTInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem_id: number
    Booking?: BookingUncheckedCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuCreateOrConnectWithoutLichtrinhCTInput = {
    where: GoidichvuWhereUniqueInput
    create: XOR<GoidichvuCreateWithoutLichtrinhCTInput, GoidichvuUncheckedCreateWithoutLichtrinhCTInput>
  }

  export type LichtrinhUpsertWithoutLichtrinhCTInput = {
    update: XOR<LichtrinhUpdateWithoutLichtrinhCTInput, LichtrinhUncheckedUpdateWithoutLichtrinhCTInput>
    create: XOR<LichtrinhCreateWithoutLichtrinhCTInput, LichtrinhUncheckedCreateWithoutLichtrinhCTInput>
    where?: LichtrinhWhereInput
  }

  export type LichtrinhUpdateToOneWithWhereWithoutLichtrinhCTInput = {
    where?: LichtrinhWhereInput
    data: XOR<LichtrinhUpdateWithoutLichtrinhCTInput, LichtrinhUncheckedUpdateWithoutLichtrinhCTInput>
  }

  export type LichtrinhUpdateWithoutLichtrinhCTInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutLichtrinhNestedInput
    Hoadon?: HoadonUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateWithoutLichtrinhCTInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Hoadon?: HoadonUncheckedUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutLichtrinhNestedInput
  }

  export type GoidichvuUpsertWithoutLichtrinhCTInput = {
    update: XOR<GoidichvuUpdateWithoutLichtrinhCTInput, GoidichvuUncheckedUpdateWithoutLichtrinhCTInput>
    create: XOR<GoidichvuCreateWithoutLichtrinhCTInput, GoidichvuUncheckedCreateWithoutLichtrinhCTInput>
    where?: GoidichvuWhereInput
  }

  export type GoidichvuUpdateToOneWithWhereWithoutLichtrinhCTInput = {
    where?: GoidichvuWhereInput
    data: XOR<GoidichvuUpdateWithoutLichtrinhCTInput, GoidichvuUncheckedUpdateWithoutLichtrinhCTInput>
  }

  export type GoidichvuUpdateWithoutLichtrinhCTInput = {
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem?: DiadiemUpdateOneWithoutGoidichvuNestedInput
    Booking?: BookingUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuUncheckedUpdateWithoutLichtrinhCTInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem_id?: IntFieldUpdateOperationsInput | number
    Booking?: BookingUncheckedUpdateManyWithoutGoidichvuNestedInput
  }

  export type DiadiemCreateWithoutGoidichvuInput = {
    tendiadiem?: string | null
    diachi?: string | null
    mota?: string | null
    hinhanh?: string | null
  }

  export type DiadiemUncheckedCreateWithoutGoidichvuInput = {
    id?: number
    tendiadiem?: string | null
    diachi?: string | null
    mota?: string | null
    hinhanh?: string | null
  }

  export type DiadiemCreateOrConnectWithoutGoidichvuInput = {
    where: DiadiemWhereUniqueInput
    create: XOR<DiadiemCreateWithoutGoidichvuInput, DiadiemUncheckedCreateWithoutGoidichvuInput>
  }

  export type LichtrinhCTCreateWithoutGoidichvuInput = {
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh?: LichtrinhCreateNestedOneWithoutLichtrinhCTInput
  }

  export type LichtrinhCTUncheckedCreateWithoutGoidichvuInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh_id: number
  }

  export type LichtrinhCTCreateOrConnectWithoutGoidichvuInput = {
    where: LichtrinhCTWhereUniqueInput
    create: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput>
  }

  export type LichtrinhCTCreateManyGoidichvuInputEnvelope = {
    data: LichtrinhCTCreateManyGoidichvuInput | LichtrinhCTCreateManyGoidichvuInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutGoidichvuInput = {
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    createdAt?: Date | string
    status?: string
    User?: UserCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutGoidichvuInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    user_id?: number | null
    createdAt?: Date | string
    status?: string
  }

  export type BookingCreateOrConnectWithoutGoidichvuInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput>
  }

  export type BookingCreateManyGoidichvuInputEnvelope = {
    data: BookingCreateManyGoidichvuInput | BookingCreateManyGoidichvuInput[]
    skipDuplicates?: boolean
  }

  export type DiadiemUpsertWithoutGoidichvuInput = {
    update: XOR<DiadiemUpdateWithoutGoidichvuInput, DiadiemUncheckedUpdateWithoutGoidichvuInput>
    create: XOR<DiadiemCreateWithoutGoidichvuInput, DiadiemUncheckedCreateWithoutGoidichvuInput>
    where?: DiadiemWhereInput
  }

  export type DiadiemUpdateToOneWithWhereWithoutGoidichvuInput = {
    where?: DiadiemWhereInput
    data: XOR<DiadiemUpdateWithoutGoidichvuInput, DiadiemUncheckedUpdateWithoutGoidichvuInput>
  }

  export type DiadiemUpdateWithoutGoidichvuInput = {
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiadiemUncheckedUpdateWithoutGoidichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    tendiadiem?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichtrinhCTUpsertWithWhereUniqueWithoutGoidichvuInput = {
    where: LichtrinhCTWhereUniqueInput
    update: XOR<LichtrinhCTUpdateWithoutGoidichvuInput, LichtrinhCTUncheckedUpdateWithoutGoidichvuInput>
    create: XOR<LichtrinhCTCreateWithoutGoidichvuInput, LichtrinhCTUncheckedCreateWithoutGoidichvuInput>
  }

  export type LichtrinhCTUpdateWithWhereUniqueWithoutGoidichvuInput = {
    where: LichtrinhCTWhereUniqueInput
    data: XOR<LichtrinhCTUpdateWithoutGoidichvuInput, LichtrinhCTUncheckedUpdateWithoutGoidichvuInput>
  }

  export type LichtrinhCTUpdateManyWithWhereWithoutGoidichvuInput = {
    where: LichtrinhCTScalarWhereInput
    data: XOR<LichtrinhCTUpdateManyMutationInput, LichtrinhCTUncheckedUpdateManyWithoutGoidichvuInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutGoidichvuInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutGoidichvuInput, BookingUncheckedUpdateWithoutGoidichvuInput>
    create: XOR<BookingCreateWithoutGoidichvuInput, BookingUncheckedCreateWithoutGoidichvuInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutGoidichvuInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutGoidichvuInput, BookingUncheckedUpdateWithoutGoidichvuInput>
  }

  export type BookingUpdateManyWithWhereWithoutGoidichvuInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutGoidichvuInput>
  }

  export type GoidichvuCreateWithoutDiadiemInput = {
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutGoidichvuInput
    Booking?: BookingCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuUncheckedCreateWithoutDiadiemInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutGoidichvuInput
    Booking?: BookingUncheckedCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuCreateOrConnectWithoutDiadiemInput = {
    where: GoidichvuWhereUniqueInput
    create: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput>
  }

  export type GoidichvuCreateManyDiadiemInputEnvelope = {
    data: GoidichvuCreateManyDiadiemInput | GoidichvuCreateManyDiadiemInput[]
    skipDuplicates?: boolean
  }

  export type GoidichvuUpsertWithWhereUniqueWithoutDiadiemInput = {
    where: GoidichvuWhereUniqueInput
    update: XOR<GoidichvuUpdateWithoutDiadiemInput, GoidichvuUncheckedUpdateWithoutDiadiemInput>
    create: XOR<GoidichvuCreateWithoutDiadiemInput, GoidichvuUncheckedCreateWithoutDiadiemInput>
  }

  export type GoidichvuUpdateWithWhereUniqueWithoutDiadiemInput = {
    where: GoidichvuWhereUniqueInput
    data: XOR<GoidichvuUpdateWithoutDiadiemInput, GoidichvuUncheckedUpdateWithoutDiadiemInput>
  }

  export type GoidichvuUpdateManyWithWhereWithoutDiadiemInput = {
    where: GoidichvuScalarWhereInput
    data: XOR<GoidichvuUpdateManyMutationInput, GoidichvuUncheckedUpdateManyWithoutDiadiemInput>
  }

  export type GoidichvuScalarWhereInput = {
    AND?: GoidichvuScalarWhereInput | GoidichvuScalarWhereInput[]
    OR?: GoidichvuScalarWhereInput[]
    NOT?: GoidichvuScalarWhereInput | GoidichvuScalarWhereInput[]
    id?: IntFilter<"Goidichvu"> | number
    tengoi?: StringNullableFilter<"Goidichvu"> | string | null
    mota?: StringNullableFilter<"Goidichvu"> | string | null
    gia?: IntFilter<"Goidichvu"> | number
    thoiluongngay?: StringNullableFilter<"Goidichvu"> | string | null
    trangthai?: StringNullableFilter<"Goidichvu"> | string | null
    hinhanh?: StringNullableFilter<"Goidichvu"> | string | null
    sochoconlai?: IntNullableFilter<"Goidichvu"> | number | null
    Diadiem_id?: IntFilter<"Goidichvu"> | number
  }

  export type LichtrinhCreateWithoutDanhgiaInput = {
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User?: UserCreateNestedOneWithoutLichtrinhInput
    Hoadon?: HoadonCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUncheckedCreateWithoutDanhgiaInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User_id: number
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhCreateOrConnectWithoutDanhgiaInput = {
    where: LichtrinhWhereUniqueInput
    create: XOR<LichtrinhCreateWithoutDanhgiaInput, LichtrinhUncheckedCreateWithoutDanhgiaInput>
  }

  export type UserCreateWithoutDanhgiaInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role?: RoleCreateNestedOneWithoutUserInput
    Lichtrinh?: LichtrinhCreateNestedManyWithoutUserInput
    Hoadon?: HoadonCreateNestedManyWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDanhgiaInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
    Lichtrinh?: LichtrinhUncheckedCreateNestedManyWithoutUserInput
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutUserInput
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDanhgiaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDanhgiaInput, UserUncheckedCreateWithoutDanhgiaInput>
  }

  export type LichtrinhUpsertWithoutDanhgiaInput = {
    update: XOR<LichtrinhUpdateWithoutDanhgiaInput, LichtrinhUncheckedUpdateWithoutDanhgiaInput>
    create: XOR<LichtrinhCreateWithoutDanhgiaInput, LichtrinhUncheckedCreateWithoutDanhgiaInput>
    where?: LichtrinhWhereInput
  }

  export type LichtrinhUpdateToOneWithWhereWithoutDanhgiaInput = {
    where?: LichtrinhWhereInput
    data: XOR<LichtrinhUpdateWithoutDanhgiaInput, LichtrinhUncheckedUpdateWithoutDanhgiaInput>
  }

  export type LichtrinhUpdateWithoutDanhgiaInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutLichtrinhNestedInput
    Hoadon?: HoadonUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateWithoutDanhgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Hoadon?: HoadonUncheckedUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutLichtrinhNestedInput
  }

  export type UserUpsertWithoutDanhgiaInput = {
    update: XOR<UserUpdateWithoutDanhgiaInput, UserUncheckedUpdateWithoutDanhgiaInput>
    create: XOR<UserCreateWithoutDanhgiaInput, UserUncheckedCreateWithoutDanhgiaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDanhgiaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDanhgiaInput, UserUncheckedUpdateWithoutDanhgiaInput>
  }

  export type UserUpdateWithoutDanhgiaInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role?: RoleUpdateOneWithoutUserNestedInput
    Lichtrinh?: LichtrinhUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUpdateManyWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDanhgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh?: LichtrinhUncheckedUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUncheckedUpdateManyWithoutUserNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoidichvuCreateWithoutBookingInput = {
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem?: DiadiemCreateNestedOneWithoutGoidichvuInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuUncheckedCreateWithoutBookingInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
    Diadiem_id: number
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutGoidichvuInput
  }

  export type GoidichvuCreateOrConnectWithoutBookingInput = {
    where: GoidichvuWhereUniqueInput
    create: XOR<GoidichvuCreateWithoutBookingInput, GoidichvuUncheckedCreateWithoutBookingInput>
  }

  export type UserCreateWithoutBookingInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role?: RoleCreateNestedOneWithoutUserInput
    Lichtrinh?: LichtrinhCreateNestedManyWithoutUserInput
    Hoadon?: HoadonCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
    Lichtrinh?: LichtrinhUncheckedCreateNestedManyWithoutUserInput
    Hoadon?: HoadonUncheckedCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type GoidichvuUpsertWithoutBookingInput = {
    update: XOR<GoidichvuUpdateWithoutBookingInput, GoidichvuUncheckedUpdateWithoutBookingInput>
    create: XOR<GoidichvuCreateWithoutBookingInput, GoidichvuUncheckedCreateWithoutBookingInput>
    where?: GoidichvuWhereInput
  }

  export type GoidichvuUpdateToOneWithWhereWithoutBookingInput = {
    where?: GoidichvuWhereInput
    data: XOR<GoidichvuUpdateWithoutBookingInput, GoidichvuUncheckedUpdateWithoutBookingInput>
  }

  export type GoidichvuUpdateWithoutBookingInput = {
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem?: DiadiemUpdateOneWithoutGoidichvuNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    Diadiem_id?: IntFieldUpdateOperationsInput | number
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutGoidichvuNestedInput
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role?: RoleUpdateOneWithoutUserNestedInput
    Lichtrinh?: LichtrinhUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh?: LichtrinhUncheckedUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUncheckedUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HoadonCreateWithoutThanhtoanInput = {
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User?: UserCreateNestedOneWithoutHoadonInput
    Lichtrinh?: LichtrinhCreateNestedOneWithoutHoadonInput
  }

  export type HoadonUncheckedCreateWithoutThanhtoanInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Lichtrinh_id: number
  }

  export type HoadonCreateOrConnectWithoutThanhtoanInput = {
    where: HoadonWhereUniqueInput
    create: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput>
  }

  export type HoadonCreateManyThanhtoanInputEnvelope = {
    data: HoadonCreateManyThanhtoanInput | HoadonCreateManyThanhtoanInput[]
    skipDuplicates?: boolean
  }

  export type HoadonUpsertWithWhereUniqueWithoutThanhtoanInput = {
    where: HoadonWhereUniqueInput
    update: XOR<HoadonUpdateWithoutThanhtoanInput, HoadonUncheckedUpdateWithoutThanhtoanInput>
    create: XOR<HoadonCreateWithoutThanhtoanInput, HoadonUncheckedCreateWithoutThanhtoanInput>
  }

  export type HoadonUpdateWithWhereUniqueWithoutThanhtoanInput = {
    where: HoadonWhereUniqueInput
    data: XOR<HoadonUpdateWithoutThanhtoanInput, HoadonUncheckedUpdateWithoutThanhtoanInput>
  }

  export type HoadonUpdateManyWithWhereWithoutThanhtoanInput = {
    where: HoadonScalarWhereInput
    data: XOR<HoadonUpdateManyMutationInput, HoadonUncheckedUpdateManyWithoutThanhtoanInput>
  }

  export type UserCreateWithoutHoadonInput = {
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role?: RoleCreateNestedOneWithoutUserInput
    Lichtrinh?: LichtrinhCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaCreateNestedManyWithoutUserInput
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHoadonInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
    Role_id: number
    Lichtrinh?: LichtrinhUncheckedCreateNestedManyWithoutUserInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutUserInput
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHoadonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHoadonInput, UserUncheckedCreateWithoutHoadonInput>
  }

  export type ThanhtoanCreateWithoutHoadonInput = {
    phuongthuc?: string | null
    sotien: number
    trangthai?: string | null
    ngaythanhtoan?: Date | string
  }

  export type ThanhtoanUncheckedCreateWithoutHoadonInput = {
    id?: number
    phuongthuc?: string | null
    sotien: number
    trangthai?: string | null
    ngaythanhtoan?: Date | string
  }

  export type ThanhtoanCreateOrConnectWithoutHoadonInput = {
    where: ThanhtoanWhereUniqueInput
    create: XOR<ThanhtoanCreateWithoutHoadonInput, ThanhtoanUncheckedCreateWithoutHoadonInput>
  }

  export type LichtrinhCreateWithoutHoadonInput = {
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User?: UserCreateNestedOneWithoutLichtrinhInput
    LichtrinhCT?: LichtrinhCTCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhUncheckedCreateWithoutHoadonInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
    User_id: number
    LichtrinhCT?: LichtrinhCTUncheckedCreateNestedManyWithoutLichtrinhInput
    Danhgia?: DanhgiaUncheckedCreateNestedManyWithoutLichtrinhInput
  }

  export type LichtrinhCreateOrConnectWithoutHoadonInput = {
    where: LichtrinhWhereUniqueInput
    create: XOR<LichtrinhCreateWithoutHoadonInput, LichtrinhUncheckedCreateWithoutHoadonInput>
  }

  export type UserUpsertWithoutHoadonInput = {
    update: XOR<UserUpdateWithoutHoadonInput, UserUncheckedUpdateWithoutHoadonInput>
    create: XOR<UserCreateWithoutHoadonInput, UserUncheckedCreateWithoutHoadonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHoadonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHoadonInput, UserUncheckedUpdateWithoutHoadonInput>
  }

  export type UserUpdateWithoutHoadonInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role?: RoleUpdateOneWithoutUserNestedInput
    Lichtrinh?: LichtrinhUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHoadonInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Role_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh?: LichtrinhUncheckedUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutUserNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThanhtoanUpsertWithoutHoadonInput = {
    update: XOR<ThanhtoanUpdateWithoutHoadonInput, ThanhtoanUncheckedUpdateWithoutHoadonInput>
    create: XOR<ThanhtoanCreateWithoutHoadonInput, ThanhtoanUncheckedCreateWithoutHoadonInput>
    where?: ThanhtoanWhereInput
  }

  export type ThanhtoanUpdateToOneWithWhereWithoutHoadonInput = {
    where?: ThanhtoanWhereInput
    data: XOR<ThanhtoanUpdateWithoutHoadonInput, ThanhtoanUncheckedUpdateWithoutHoadonInput>
  }

  export type ThanhtoanUpdateWithoutHoadonInput = {
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThanhtoanUncheckedUpdateWithoutHoadonInput = {
    id?: IntFieldUpdateOperationsInput | number
    phuongthuc?: NullableStringFieldUpdateOperationsInput | string | null
    sotien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaythanhtoan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LichtrinhUpsertWithoutHoadonInput = {
    update: XOR<LichtrinhUpdateWithoutHoadonInput, LichtrinhUncheckedUpdateWithoutHoadonInput>
    create: XOR<LichtrinhCreateWithoutHoadonInput, LichtrinhUncheckedCreateWithoutHoadonInput>
    where?: LichtrinhWhereInput
  }

  export type LichtrinhUpdateToOneWithWhereWithoutHoadonInput = {
    where?: LichtrinhWhereInput
    data: XOR<LichtrinhUpdateWithoutHoadonInput, LichtrinhUncheckedUpdateWithoutHoadonInput>
  }

  export type LichtrinhUpdateWithoutHoadonInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateWithoutHoadonInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhCreateManyUserInput = {
    id?: number
    tenlichtrinh?: string | null
    ngaytao?: Date | string
    ghichu?: string | null
  }

  export type HoadonCreateManyUserInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    Thanhtoan_id: number
    Lichtrinh_id: number
  }

  export type DanhgiaCreateManyUserInput = {
    id?: number
    noidung?: string | null
    Lichtrinh_id: number
  }

  export type BookingCreateManyUserInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    tour_id: number
    createdAt?: Date | string
    status?: string
  }

  export type LichtrinhUpdateWithoutUserInput = {
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    Hoadon?: HoadonUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
    Hoadon?: HoadonUncheckedUpdateManyWithoutLichtrinhNestedInput
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutLichtrinhNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutLichtrinhNestedInput
  }

  export type LichtrinhUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenlichtrinh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ghichu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HoadonUpdateWithoutUserInput = {
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    Thanhtoan?: ThanhtoanUpdateOneWithoutHoadonNestedInput
    Lichtrinh?: LichtrinhUpdateOneWithoutHoadonNestedInput
  }

  export type HoadonUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type HoadonUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type DanhgiaUpdateWithoutUserInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh?: LichtrinhUpdateOneWithoutDanhgiaNestedInput
  }

  export type DanhgiaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type DanhgiaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutUserInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Goidichvu?: GoidichvuUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    hoten?: string | null
    email?: string | null
    matkhau?: string | null
    sodienthoai?: string | null
    diachi?: string | null
    trangthai?: string | null
    creatAT?: Date | string
    updateAt?: Date | string
    isLocked?: boolean
  }

  export type UserUpdateWithoutRoleInput = {
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Lichtrinh?: LichtrinhUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUpdateManyWithoutUserNestedInput
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    Lichtrinh?: LichtrinhUncheckedUpdateManyWithoutUserNestedInput
    Hoadon?: HoadonUncheckedUpdateManyWithoutUserNestedInput
    Danhgia?: DanhgiaUncheckedUpdateManyWithoutUserNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    matkhau?: NullableStringFieldUpdateOperationsInput | string | null
    sodienthoai?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    creatAT?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HoadonCreateManyLichtrinhInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Thanhtoan_id: number
  }

  export type LichtrinhCTCreateManyLichtrinhInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Goidichvu_id: number
  }

  export type DanhgiaCreateManyLichtrinhInput = {
    id?: number
    noidung?: string | null
    User_id: number
  }

  export type HoadonUpdateWithoutLichtrinhInput = {
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutHoadonNestedInput
    Thanhtoan?: ThanhtoanUpdateOneWithoutHoadonNestedInput
  }

  export type HoadonUncheckedUpdateWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
  }

  export type HoadonUncheckedUpdateManyWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Thanhtoan_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTUpdateWithoutLichtrinhInput = {
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Goidichvu?: GoidichvuUpdateOneWithoutLichtrinhCTNestedInput
  }

  export type LichtrinhCTUncheckedUpdateWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Goidichvu_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTUncheckedUpdateManyWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Goidichvu_id?: IntFieldUpdateOperationsInput | number
  }

  export type DanhgiaUpdateWithoutLichtrinhInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutDanhgiaNestedInput
  }

  export type DanhgiaUncheckedUpdateWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type DanhgiaUncheckedUpdateManyWithoutLichtrinhInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTCreateManyGoidichvuInput = {
    id?: number
    soluong: number
    thanhtien: number
    noikhoihanh?: string | null
    ngaykhoihanh?: Date | string | null
    lichtrinhdichuyen?: string | null
    Lichtrinh_id: number
  }

  export type BookingCreateManyGoidichvuInput = {
    id?: number
    hoten: string
    sodienthoai: string
    soluong: number
    sotien: number
    user_id?: number | null
    createdAt?: Date | string
    status?: string
  }

  export type LichtrinhCTUpdateWithoutGoidichvuInput = {
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh?: LichtrinhUpdateOneWithoutLichtrinhCTNestedInput
  }

  export type LichtrinhCTUncheckedUpdateWithoutGoidichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type LichtrinhCTUncheckedUpdateManyWithoutGoidichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    soluong?: IntFieldUpdateOperationsInput | number
    thanhtien?: IntFieldUpdateOperationsInput | number
    noikhoihanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaykhoihanh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lichtrinhdichuyen?: NullableStringFieldUpdateOperationsInput | string | null
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutGoidichvuInput = {
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutGoidichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyWithoutGoidichvuInput = {
    id?: IntFieldUpdateOperationsInput | number
    hoten?: StringFieldUpdateOperationsInput | string
    sodienthoai?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    sotien?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GoidichvuCreateManyDiadiemInput = {
    id?: number
    tengoi?: string | null
    mota?: string | null
    gia: number
    thoiluongngay?: string | null
    trangthai?: string | null
    hinhanh?: string | null
    sochoconlai?: number | null
  }

  export type GoidichvuUpdateWithoutDiadiemInput = {
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    LichtrinhCT?: LichtrinhCTUpdateManyWithoutGoidichvuNestedInput
    Booking?: BookingUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuUncheckedUpdateWithoutDiadiemInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
    LichtrinhCT?: LichtrinhCTUncheckedUpdateManyWithoutGoidichvuNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutGoidichvuNestedInput
  }

  export type GoidichvuUncheckedUpdateManyWithoutDiadiemInput = {
    id?: IntFieldUpdateOperationsInput | number
    tengoi?: NullableStringFieldUpdateOperationsInput | string | null
    mota?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    thoiluongngay?: NullableStringFieldUpdateOperationsInput | string | null
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    sochoconlai?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoadonCreateManyThanhtoanInput = {
    id?: number
    ngayxuat?: Date | string
    tongtien: number
    trangthai?: string | null
    User_id: number
    Lichtrinh_id: number
  }

  export type HoadonUpdateWithoutThanhtoanInput = {
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutHoadonNestedInput
    Lichtrinh?: LichtrinhUpdateOneWithoutHoadonNestedInput
  }

  export type HoadonUncheckedUpdateWithoutThanhtoanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }

  export type HoadonUncheckedUpdateManyWithoutThanhtoanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ngayxuat?: DateTimeFieldUpdateOperationsInput | Date | string
    tongtien?: IntFieldUpdateOperationsInput | number
    trangthai?: NullableStringFieldUpdateOperationsInput | string | null
    User_id?: IntFieldUpdateOperationsInput | number
    Lichtrinh_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LichtrinhCountOutputTypeDefaultArgs instead
     */
    export type LichtrinhCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LichtrinhCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoidichvuCountOutputTypeDefaultArgs instead
     */
    export type GoidichvuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoidichvuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiadiemCountOutputTypeDefaultArgs instead
     */
    export type DiadiemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiadiemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThanhtoanCountOutputTypeDefaultArgs instead
     */
    export type ThanhtoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThanhtoanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LichtrinhDefaultArgs instead
     */
    export type LichtrinhArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LichtrinhDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LichtrinhCTDefaultArgs instead
     */
    export type LichtrinhCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LichtrinhCTDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoidichvuDefaultArgs instead
     */
    export type GoidichvuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoidichvuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiadiemDefaultArgs instead
     */
    export type DiadiemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiadiemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DanhgiaDefaultArgs instead
     */
    export type DanhgiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DanhgiaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThanhtoanDefaultArgs instead
     */
    export type ThanhtoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThanhtoanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HoadonDefaultArgs instead
     */
    export type HoadonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HoadonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gopyDefaultArgs instead
     */
    export type gopyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gopyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoidungDefaultArgs instead
     */
    export type NoidungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoidungDefaultArgs<ExtArgs>

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