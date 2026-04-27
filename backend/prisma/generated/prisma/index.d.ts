
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
 * Model Journaling
 * 
 */
export type Journaling = $Result.DefaultSelection<Prisma.$JournalingPayload>
/**
 * Model Execution
 * 
 */
export type Execution = $Result.DefaultSelection<Prisma.$ExecutionPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Mood
 * 
 */
export type Mood = $Result.DefaultSelection<Prisma.$MoodPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model CopingStrategy
 * 
 */
export type CopingStrategy = $Result.DefaultSelection<Prisma.$CopingStrategyPayload>
/**
 * Model PeerStory
 * 
 */
export type PeerStory = $Result.DefaultSelection<Prisma.$PeerStoryPayload>
/**
 * Model StorySupport
 * 
 */
export type StorySupport = $Result.DefaultSelection<Prisma.$StorySupportPayload>
/**
 * Model StoryComment
 * 
 */
export type StoryComment = $Result.DefaultSelection<Prisma.$StoryCommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MoodType: {
  HAPPY: 'HAPPY',
  SAD: 'SAD',
  ANXIOUS: 'ANXIOUS',
  EXCITED: 'EXCITED',
  ANGRY: 'ANGRY',
  CALM: 'CALM',
  STRESSED: 'STRESSED',
  NEUTRAL: 'NEUTRAL',
  GRATEFUL: 'GRATEFUL',
  LONELY: 'LONELY'
};

export type MoodType = (typeof MoodType)[keyof typeof MoodType]

}

export type MoodType = $Enums.MoodType

export const MoodType: typeof $Enums.MoodType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journaling`: Exposes CRUD operations for the **Journaling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journalings
    * const journalings = await prisma.journaling.findMany()
    * ```
    */
  get journaling(): Prisma.JournalingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.execution`: Exposes CRUD operations for the **Execution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executions
    * const executions = await prisma.execution.findMany()
    * ```
    */
  get execution(): Prisma.ExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moods
    * const moods = await prisma.mood.findMany()
    * ```
    */
  get mood(): Prisma.MoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.copingStrategy`: Exposes CRUD operations for the **CopingStrategy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CopingStrategies
    * const copingStrategies = await prisma.copingStrategy.findMany()
    * ```
    */
  get copingStrategy(): Prisma.CopingStrategyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peerStory`: Exposes CRUD operations for the **PeerStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeerStories
    * const peerStories = await prisma.peerStory.findMany()
    * ```
    */
  get peerStory(): Prisma.PeerStoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storySupport`: Exposes CRUD operations for the **StorySupport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorySupports
    * const storySupports = await prisma.storySupport.findMany()
    * ```
    */
  get storySupport(): Prisma.StorySupportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storyComment`: Exposes CRUD operations for the **StoryComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryComments
    * const storyComments = await prisma.storyComment.findMany()
    * ```
    */
  get storyComment(): Prisma.StoryCommentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Journaling: 'Journaling',
    Execution: 'Execution',
    Conversation: 'Conversation',
    Message: 'Message',
    Mood: 'Mood',
    Feedback: 'Feedback',
    CopingStrategy: 'CopingStrategy',
    PeerStory: 'PeerStory',
    StorySupport: 'StorySupport',
    StoryComment: 'StoryComment'
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
      modelProps: "user" | "journaling" | "execution" | "conversation" | "message" | "mood" | "feedback" | "copingStrategy" | "peerStory" | "storySupport" | "storyComment"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Journaling: {
        payload: Prisma.$JournalingPayload<ExtArgs>
        fields: Prisma.JournalingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          findFirst: {
            args: Prisma.JournalingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          findMany: {
            args: Prisma.JournalingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>[]
          }
          create: {
            args: Prisma.JournalingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          createMany: {
            args: Prisma.JournalingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>[]
          }
          delete: {
            args: Prisma.JournalingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          update: {
            args: Prisma.JournalingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          deleteMany: {
            args: Prisma.JournalingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>[]
          }
          upsert: {
            args: Prisma.JournalingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalingPayload>
          }
          aggregate: {
            args: Prisma.JournalingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournaling>
          }
          groupBy: {
            args: Prisma.JournalingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalingCountArgs<ExtArgs>
            result: $Utils.Optional<JournalingCountAggregateOutputType> | number
          }
        }
      }
      Execution: {
        payload: Prisma.$ExecutionPayload<ExtArgs>
        fields: Prisma.ExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findFirst: {
            args: Prisma.ExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findMany: {
            args: Prisma.ExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          create: {
            args: Prisma.ExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          createMany: {
            args: Prisma.ExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          delete: {
            args: Prisma.ExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          update: {
            args: Prisma.ExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          aggregate: {
            args: Prisma.ExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecution>
          }
          groupBy: {
            args: Prisma.ExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Mood: {
        payload: Prisma.$MoodPayload<ExtArgs>
        fields: Prisma.MoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findFirst: {
            args: Prisma.MoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findMany: {
            args: Prisma.MoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          create: {
            args: Prisma.MoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          createMany: {
            args: Prisma.MoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          delete: {
            args: Prisma.MoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          update: {
            args: Prisma.MoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          deleteMany: {
            args: Prisma.MoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          upsert: {
            args: Prisma.MoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          aggregate: {
            args: Prisma.MoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMood>
          }
          groupBy: {
            args: Prisma.MoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCountArgs<ExtArgs>
            result: $Utils.Optional<MoodCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      CopingStrategy: {
        payload: Prisma.$CopingStrategyPayload<ExtArgs>
        fields: Prisma.CopingStrategyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CopingStrategyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CopingStrategyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          findFirst: {
            args: Prisma.CopingStrategyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CopingStrategyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          findMany: {
            args: Prisma.CopingStrategyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>[]
          }
          create: {
            args: Prisma.CopingStrategyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          createMany: {
            args: Prisma.CopingStrategyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CopingStrategyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>[]
          }
          delete: {
            args: Prisma.CopingStrategyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          update: {
            args: Prisma.CopingStrategyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          deleteMany: {
            args: Prisma.CopingStrategyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CopingStrategyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CopingStrategyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>[]
          }
          upsert: {
            args: Prisma.CopingStrategyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopingStrategyPayload>
          }
          aggregate: {
            args: Prisma.CopingStrategyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCopingStrategy>
          }
          groupBy: {
            args: Prisma.CopingStrategyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CopingStrategyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CopingStrategyCountArgs<ExtArgs>
            result: $Utils.Optional<CopingStrategyCountAggregateOutputType> | number
          }
        }
      }
      PeerStory: {
        payload: Prisma.$PeerStoryPayload<ExtArgs>
        fields: Prisma.PeerStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeerStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeerStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          findFirst: {
            args: Prisma.PeerStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeerStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          findMany: {
            args: Prisma.PeerStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>[]
          }
          create: {
            args: Prisma.PeerStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          createMany: {
            args: Prisma.PeerStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeerStoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>[]
          }
          delete: {
            args: Prisma.PeerStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          update: {
            args: Prisma.PeerStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          deleteMany: {
            args: Prisma.PeerStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeerStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeerStoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>[]
          }
          upsert: {
            args: Prisma.PeerStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerStoryPayload>
          }
          aggregate: {
            args: Prisma.PeerStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeerStory>
          }
          groupBy: {
            args: Prisma.PeerStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeerStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeerStoryCountArgs<ExtArgs>
            result: $Utils.Optional<PeerStoryCountAggregateOutputType> | number
          }
        }
      }
      StorySupport: {
        payload: Prisma.$StorySupportPayload<ExtArgs>
        fields: Prisma.StorySupportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorySupportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorySupportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          findFirst: {
            args: Prisma.StorySupportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorySupportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          findMany: {
            args: Prisma.StorySupportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>[]
          }
          create: {
            args: Prisma.StorySupportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          createMany: {
            args: Prisma.StorySupportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorySupportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>[]
          }
          delete: {
            args: Prisma.StorySupportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          update: {
            args: Prisma.StorySupportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          deleteMany: {
            args: Prisma.StorySupportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorySupportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorySupportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>[]
          }
          upsert: {
            args: Prisma.StorySupportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySupportPayload>
          }
          aggregate: {
            args: Prisma.StorySupportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorySupport>
          }
          groupBy: {
            args: Prisma.StorySupportGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorySupportGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorySupportCountArgs<ExtArgs>
            result: $Utils.Optional<StorySupportCountAggregateOutputType> | number
          }
        }
      }
      StoryComment: {
        payload: Prisma.$StoryCommentPayload<ExtArgs>
        fields: Prisma.StoryCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          findFirst: {
            args: Prisma.StoryCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          findMany: {
            args: Prisma.StoryCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>[]
          }
          create: {
            args: Prisma.StoryCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          createMany: {
            args: Prisma.StoryCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>[]
          }
          delete: {
            args: Prisma.StoryCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          update: {
            args: Prisma.StoryCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          deleteMany: {
            args: Prisma.StoryCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>[]
          }
          upsert: {
            args: Prisma.StoryCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryCommentPayload>
          }
          aggregate: {
            args: Prisma.StoryCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryComment>
          }
          groupBy: {
            args: Prisma.StoryCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCommentCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCommentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    journaling?: JournalingOmit
    execution?: ExecutionOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    mood?: MoodOmit
    feedback?: FeedbackOmit
    copingStrategy?: CopingStrategyOmit
    peerStory?: PeerStoryOmit
    storySupport?: StorySupportOmit
    storyComment?: StoryCommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    moods: number
    executions: number
    journalings: number
    copingStrategies: number
    peerStories: number
    storySupports: number
    storyComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moods?: boolean | UserCountOutputTypeCountMoodsArgs
    executions?: boolean | UserCountOutputTypeCountExecutionsArgs
    journalings?: boolean | UserCountOutputTypeCountJournalingsArgs
    copingStrategies?: boolean | UserCountOutputTypeCountCopingStrategiesArgs
    peerStories?: boolean | UserCountOutputTypeCountPeerStoriesArgs
    storySupports?: boolean | UserCountOutputTypeCountStorySupportsArgs
    storyComments?: boolean | UserCountOutputTypeCountStoryCommentsArgs
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
  export type UserCountOutputTypeCountMoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJournalingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCopingStrategiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopingStrategyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPeerStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeerStoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStorySupportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorySupportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoryCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryCommentWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type PeerStoryCountOutputType
   */

  export type PeerStoryCountOutputType = {
    supports: number
    comments: number
  }

  export type PeerStoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supports?: boolean | PeerStoryCountOutputTypeCountSupportsArgs
    comments?: boolean | PeerStoryCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PeerStoryCountOutputType without action
   */
  export type PeerStoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStoryCountOutputType
     */
    select?: PeerStoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeerStoryCountOutputType without action
   */
  export type PeerStoryCountOutputTypeCountSupportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorySupportWhereInput
  }

  /**
   * PeerStoryCountOutputType without action
   */
  export type PeerStoryCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    name?: true
    email?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string | null
    name: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    googleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moods?: boolean | User$moodsArgs<ExtArgs>
    executions?: boolean | User$executionsArgs<ExtArgs>
    journalings?: boolean | User$journalingsArgs<ExtArgs>
    copingStrategies?: boolean | User$copingStrategiesArgs<ExtArgs>
    peerStories?: boolean | User$peerStoriesArgs<ExtArgs>
    storySupports?: boolean | User$storySupportsArgs<ExtArgs>
    storyComments?: boolean | User$storyCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moods?: boolean | User$moodsArgs<ExtArgs>
    executions?: boolean | User$executionsArgs<ExtArgs>
    journalings?: boolean | User$journalingsArgs<ExtArgs>
    copingStrategies?: boolean | User$copingStrategiesArgs<ExtArgs>
    peerStories?: boolean | User$peerStoriesArgs<ExtArgs>
    storySupports?: boolean | User$storySupportsArgs<ExtArgs>
    storyComments?: boolean | User$storyCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      moods: Prisma.$MoodPayload<ExtArgs>[]
      executions: Prisma.$ExecutionPayload<ExtArgs>[]
      journalings: Prisma.$JournalingPayload<ExtArgs>[]
      copingStrategies: Prisma.$CopingStrategyPayload<ExtArgs>[]
      peerStories: Prisma.$PeerStoryPayload<ExtArgs>[]
      storySupports: Prisma.$StorySupportPayload<ExtArgs>[]
      storyComments: Prisma.$StoryCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string | null
      name: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moods<T extends User$moodsArgs<ExtArgs> = {}>(args?: Subset<T, User$moodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executions<T extends User$executionsArgs<ExtArgs> = {}>(args?: Subset<T, User$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    journalings<T extends User$journalingsArgs<ExtArgs> = {}>(args?: Subset<T, User$journalingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    copingStrategies<T extends User$copingStrategiesArgs<ExtArgs> = {}>(args?: Subset<T, User$copingStrategiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peerStories<T extends User$peerStoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$peerStoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storySupports<T extends User$storySupportsArgs<ExtArgs> = {}>(args?: Subset<T, User$storySupportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storyComments<T extends User$storyCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$storyCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.moods
   */
  export type User$moodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    cursor?: MoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * User.executions
   */
  export type User$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    cursor?: ExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * User.journalings
   */
  export type User$journalingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    where?: JournalingWhereInput
    orderBy?: JournalingOrderByWithRelationInput | JournalingOrderByWithRelationInput[]
    cursor?: JournalingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalingScalarFieldEnum | JournalingScalarFieldEnum[]
  }

  /**
   * User.copingStrategies
   */
  export type User$copingStrategiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    where?: CopingStrategyWhereInput
    orderBy?: CopingStrategyOrderByWithRelationInput | CopingStrategyOrderByWithRelationInput[]
    cursor?: CopingStrategyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CopingStrategyScalarFieldEnum | CopingStrategyScalarFieldEnum[]
  }

  /**
   * User.peerStories
   */
  export type User$peerStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    where?: PeerStoryWhereInput
    orderBy?: PeerStoryOrderByWithRelationInput | PeerStoryOrderByWithRelationInput[]
    cursor?: PeerStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeerStoryScalarFieldEnum | PeerStoryScalarFieldEnum[]
  }

  /**
   * User.storySupports
   */
  export type User$storySupportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    where?: StorySupportWhereInput
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    cursor?: StorySupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorySupportScalarFieldEnum | StorySupportScalarFieldEnum[]
  }

  /**
   * User.storyComments
   */
  export type User$storyCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    where?: StoryCommentWhereInput
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    cursor?: StoryCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryCommentScalarFieldEnum | StoryCommentScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Journaling
   */

  export type AggregateJournaling = {
    _count: JournalingCountAggregateOutputType | null
    _avg: JournalingAvgAggregateOutputType | null
    _sum: JournalingSumAggregateOutputType | null
    _min: JournalingMinAggregateOutputType | null
    _max: JournalingMaxAggregateOutputType | null
  }

  export type JournalingAvgAggregateOutputType = {
    moodScore: number | null
  }

  export type JournalingSumAggregateOutputType = {
    moodScore: number | null
  }

  export type JournalingMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    moodType: $Enums.MoodType | null
    moodScore: number | null
  }

  export type JournalingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    moodType: $Enums.MoodType | null
    moodScore: number | null
  }

  export type JournalingCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    userId: number
    moodType: number
    moodScore: number
    tags: number
    _all: number
  }


  export type JournalingAvgAggregateInputType = {
    moodScore?: true
  }

  export type JournalingSumAggregateInputType = {
    moodScore?: true
  }

  export type JournalingMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moodType?: true
    moodScore?: true
  }

  export type JournalingMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moodType?: true
    moodScore?: true
  }

  export type JournalingCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moodType?: true
    moodScore?: true
    tags?: true
    _all?: true
  }

  export type JournalingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journaling to aggregate.
     */
    where?: JournalingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journalings to fetch.
     */
    orderBy?: JournalingOrderByWithRelationInput | JournalingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journalings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journalings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journalings
    **/
    _count?: true | JournalingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalingMaxAggregateInputType
  }

  export type GetJournalingAggregateType<T extends JournalingAggregateArgs> = {
        [P in keyof T & keyof AggregateJournaling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournaling[P]>
      : GetScalarType<T[P], AggregateJournaling[P]>
  }




  export type JournalingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalingWhereInput
    orderBy?: JournalingOrderByWithAggregationInput | JournalingOrderByWithAggregationInput[]
    by: JournalingScalarFieldEnum[] | JournalingScalarFieldEnum
    having?: JournalingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalingCountAggregateInputType | true
    _avg?: JournalingAvgAggregateInputType
    _sum?: JournalingSumAggregateInputType
    _min?: JournalingMinAggregateInputType
    _max?: JournalingMaxAggregateInputType
  }

  export type JournalingGroupByOutputType = {
    id: string
    title: string | null
    content: string
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    moodType: $Enums.MoodType | null
    moodScore: number | null
    tags: string[]
    _count: JournalingCountAggregateOutputType | null
    _avg: JournalingAvgAggregateOutputType | null
    _sum: JournalingSumAggregateOutputType | null
    _min: JournalingMinAggregateOutputType | null
    _max: JournalingMaxAggregateOutputType | null
  }

  type GetJournalingGroupByPayload<T extends JournalingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalingGroupByOutputType[P]>
            : GetScalarType<T[P], JournalingGroupByOutputType[P]>
        }
      >
    >


  export type JournalingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moodType?: boolean
    moodScore?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journaling"]>

  export type JournalingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moodType?: boolean
    moodScore?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journaling"]>

  export type JournalingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moodType?: boolean
    moodScore?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journaling"]>

  export type JournalingSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moodType?: boolean
    moodScore?: boolean
    tags?: boolean
  }

  export type JournalingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isPrivate" | "createdAt" | "updatedAt" | "userId" | "moodType" | "moodScore" | "tags", ExtArgs["result"]["journaling"]>
  export type JournalingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JournalingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journaling"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: string
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      moodType: $Enums.MoodType | null
      moodScore: number | null
      tags: string[]
    }, ExtArgs["result"]["journaling"]>
    composites: {}
  }

  type JournalingGetPayload<S extends boolean | null | undefined | JournalingDefaultArgs> = $Result.GetResult<Prisma.$JournalingPayload, S>

  type JournalingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalingCountAggregateInputType | true
    }

  export interface JournalingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journaling'], meta: { name: 'Journaling' } }
    /**
     * Find zero or one Journaling that matches the filter.
     * @param {JournalingFindUniqueArgs} args - Arguments to find a Journaling
     * @example
     * // Get one Journaling
     * const journaling = await prisma.journaling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalingFindUniqueArgs>(args: SelectSubset<T, JournalingFindUniqueArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journaling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalingFindUniqueOrThrowArgs} args - Arguments to find a Journaling
     * @example
     * // Get one Journaling
     * const journaling = await prisma.journaling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalingFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journaling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingFindFirstArgs} args - Arguments to find a Journaling
     * @example
     * // Get one Journaling
     * const journaling = await prisma.journaling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalingFindFirstArgs>(args?: SelectSubset<T, JournalingFindFirstArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journaling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingFindFirstOrThrowArgs} args - Arguments to find a Journaling
     * @example
     * // Get one Journaling
     * const journaling = await prisma.journaling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalingFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journalings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journalings
     * const journalings = await prisma.journaling.findMany()
     * 
     * // Get first 10 Journalings
     * const journalings = await prisma.journaling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalingWithIdOnly = await prisma.journaling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalingFindManyArgs>(args?: SelectSubset<T, JournalingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journaling.
     * @param {JournalingCreateArgs} args - Arguments to create a Journaling.
     * @example
     * // Create one Journaling
     * const Journaling = await prisma.journaling.create({
     *   data: {
     *     // ... data to create a Journaling
     *   }
     * })
     * 
     */
    create<T extends JournalingCreateArgs>(args: SelectSubset<T, JournalingCreateArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journalings.
     * @param {JournalingCreateManyArgs} args - Arguments to create many Journalings.
     * @example
     * // Create many Journalings
     * const journaling = await prisma.journaling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalingCreateManyArgs>(args?: SelectSubset<T, JournalingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journalings and returns the data saved in the database.
     * @param {JournalingCreateManyAndReturnArgs} args - Arguments to create many Journalings.
     * @example
     * // Create many Journalings
     * const journaling = await prisma.journaling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journalings and only return the `id`
     * const journalingWithIdOnly = await prisma.journaling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalingCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Journaling.
     * @param {JournalingDeleteArgs} args - Arguments to delete one Journaling.
     * @example
     * // Delete one Journaling
     * const Journaling = await prisma.journaling.delete({
     *   where: {
     *     // ... filter to delete one Journaling
     *   }
     * })
     * 
     */
    delete<T extends JournalingDeleteArgs>(args: SelectSubset<T, JournalingDeleteArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journaling.
     * @param {JournalingUpdateArgs} args - Arguments to update one Journaling.
     * @example
     * // Update one Journaling
     * const journaling = await prisma.journaling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalingUpdateArgs>(args: SelectSubset<T, JournalingUpdateArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journalings.
     * @param {JournalingDeleteManyArgs} args - Arguments to filter Journalings to delete.
     * @example
     * // Delete a few Journalings
     * const { count } = await prisma.journaling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalingDeleteManyArgs>(args?: SelectSubset<T, JournalingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journalings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journalings
     * const journaling = await prisma.journaling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalingUpdateManyArgs>(args: SelectSubset<T, JournalingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journalings and returns the data updated in the database.
     * @param {JournalingUpdateManyAndReturnArgs} args - Arguments to update many Journalings.
     * @example
     * // Update many Journalings
     * const journaling = await prisma.journaling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Journalings and only return the `id`
     * const journalingWithIdOnly = await prisma.journaling.updateManyAndReturn({
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
    updateManyAndReturn<T extends JournalingUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Journaling.
     * @param {JournalingUpsertArgs} args - Arguments to update or create a Journaling.
     * @example
     * // Update or create a Journaling
     * const journaling = await prisma.journaling.upsert({
     *   create: {
     *     // ... data to create a Journaling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journaling we want to update
     *   }
     * })
     */
    upsert<T extends JournalingUpsertArgs>(args: SelectSubset<T, JournalingUpsertArgs<ExtArgs>>): Prisma__JournalingClient<$Result.GetResult<Prisma.$JournalingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journalings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingCountArgs} args - Arguments to filter Journalings to count.
     * @example
     * // Count the number of Journalings
     * const count = await prisma.journaling.count({
     *   where: {
     *     // ... the filter for the Journalings we want to count
     *   }
     * })
    **/
    count<T extends JournalingCountArgs>(
      args?: Subset<T, JournalingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journaling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JournalingAggregateArgs>(args: Subset<T, JournalingAggregateArgs>): Prisma.PrismaPromise<GetJournalingAggregateType<T>>

    /**
     * Group by Journaling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalingGroupByArgs} args - Group by arguments.
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
      T extends JournalingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalingGroupByArgs['orderBy'] }
        : { orderBy?: JournalingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JournalingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journaling model
   */
  readonly fields: JournalingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journaling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Journaling model
   */
  interface JournalingFieldRefs {
    readonly id: FieldRef<"Journaling", 'String'>
    readonly title: FieldRef<"Journaling", 'String'>
    readonly content: FieldRef<"Journaling", 'String'>
    readonly isPrivate: FieldRef<"Journaling", 'Boolean'>
    readonly createdAt: FieldRef<"Journaling", 'DateTime'>
    readonly updatedAt: FieldRef<"Journaling", 'DateTime'>
    readonly userId: FieldRef<"Journaling", 'String'>
    readonly moodType: FieldRef<"Journaling", 'MoodType'>
    readonly moodScore: FieldRef<"Journaling", 'Int'>
    readonly tags: FieldRef<"Journaling", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Journaling findUnique
   */
  export type JournalingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter, which Journaling to fetch.
     */
    where: JournalingWhereUniqueInput
  }

  /**
   * Journaling findUniqueOrThrow
   */
  export type JournalingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter, which Journaling to fetch.
     */
    where: JournalingWhereUniqueInput
  }

  /**
   * Journaling findFirst
   */
  export type JournalingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter, which Journaling to fetch.
     */
    where?: JournalingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journalings to fetch.
     */
    orderBy?: JournalingOrderByWithRelationInput | JournalingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journalings.
     */
    cursor?: JournalingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journalings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journalings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journalings.
     */
    distinct?: JournalingScalarFieldEnum | JournalingScalarFieldEnum[]
  }

  /**
   * Journaling findFirstOrThrow
   */
  export type JournalingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter, which Journaling to fetch.
     */
    where?: JournalingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journalings to fetch.
     */
    orderBy?: JournalingOrderByWithRelationInput | JournalingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journalings.
     */
    cursor?: JournalingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journalings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journalings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journalings.
     */
    distinct?: JournalingScalarFieldEnum | JournalingScalarFieldEnum[]
  }

  /**
   * Journaling findMany
   */
  export type JournalingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter, which Journalings to fetch.
     */
    where?: JournalingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journalings to fetch.
     */
    orderBy?: JournalingOrderByWithRelationInput | JournalingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journalings.
     */
    cursor?: JournalingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journalings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journalings.
     */
    skip?: number
    distinct?: JournalingScalarFieldEnum | JournalingScalarFieldEnum[]
  }

  /**
   * Journaling create
   */
  export type JournalingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * The data needed to create a Journaling.
     */
    data: XOR<JournalingCreateInput, JournalingUncheckedCreateInput>
  }

  /**
   * Journaling createMany
   */
  export type JournalingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journalings.
     */
    data: JournalingCreateManyInput | JournalingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Journaling createManyAndReturn
   */
  export type JournalingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * The data used to create many Journalings.
     */
    data: JournalingCreateManyInput | JournalingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journaling update
   */
  export type JournalingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * The data needed to update a Journaling.
     */
    data: XOR<JournalingUpdateInput, JournalingUncheckedUpdateInput>
    /**
     * Choose, which Journaling to update.
     */
    where: JournalingWhereUniqueInput
  }

  /**
   * Journaling updateMany
   */
  export type JournalingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journalings.
     */
    data: XOR<JournalingUpdateManyMutationInput, JournalingUncheckedUpdateManyInput>
    /**
     * Filter which Journalings to update
     */
    where?: JournalingWhereInput
    /**
     * Limit how many Journalings to update.
     */
    limit?: number
  }

  /**
   * Journaling updateManyAndReturn
   */
  export type JournalingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * The data used to update Journalings.
     */
    data: XOR<JournalingUpdateManyMutationInput, JournalingUncheckedUpdateManyInput>
    /**
     * Filter which Journalings to update
     */
    where?: JournalingWhereInput
    /**
     * Limit how many Journalings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Journaling upsert
   */
  export type JournalingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * The filter to search for the Journaling to update in case it exists.
     */
    where: JournalingWhereUniqueInput
    /**
     * In case the Journaling found by the `where` argument doesn't exist, create a new Journaling with this data.
     */
    create: XOR<JournalingCreateInput, JournalingUncheckedCreateInput>
    /**
     * In case the Journaling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalingUpdateInput, JournalingUncheckedUpdateInput>
  }

  /**
   * Journaling delete
   */
  export type JournalingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
    /**
     * Filter which Journaling to delete.
     */
    where: JournalingWhereUniqueInput
  }

  /**
   * Journaling deleteMany
   */
  export type JournalingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journalings to delete
     */
    where?: JournalingWhereInput
    /**
     * Limit how many Journalings to delete.
     */
    limit?: number
  }

  /**
   * Journaling without action
   */
  export type JournalingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journaling
     */
    select?: JournalingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journaling
     */
    omit?: JournalingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalingInclude<ExtArgs> | null
  }


  /**
   * Model Execution
   */

  export type AggregateExecution = {
    _count: ExecutionCountAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  export type ExecutionMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    externalId: string | null
  }

  export type ExecutionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    externalId: string | null
  }

  export type ExecutionCountAggregateOutputType = {
    id: number
    title: number
    type: number
    chatId: number
    createdAt: number
    updatedAt: number
    userId: number
    externalId: number
    _all: number
  }


  export type ExecutionMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    externalId?: true
  }

  export type ExecutionMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    externalId?: true
  }

  export type ExecutionCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    externalId?: true
    _all?: true
  }

  export type ExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Execution to aggregate.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executions
    **/
    _count?: true | ExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionMaxAggregateInputType
  }

  export type GetExecutionAggregateType<T extends ExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecution[P]>
      : GetScalarType<T[P], AggregateExecution[P]>
  }




  export type ExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithAggregationInput | ExecutionOrderByWithAggregationInput[]
    by: ExecutionScalarFieldEnum[] | ExecutionScalarFieldEnum
    having?: ExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionCountAggregateInputType | true
    _min?: ExecutionMinAggregateInputType
    _max?: ExecutionMaxAggregateInputType
  }

  export type ExecutionGroupByOutputType = {
    id: string
    title: string
    type: string
    chatId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    externalId: string | null
    _count: ExecutionCountAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  type GetExecutionGroupByPayload<T extends ExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    externalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    externalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    externalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    externalId?: boolean
  }

  export type ExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "chatId" | "createdAt" | "updatedAt" | "userId" | "externalId", ExtArgs["result"]["execution"]>
  export type ExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Execution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      chatId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      externalId: string | null
    }, ExtArgs["result"]["execution"]>
    composites: {}
  }

  type ExecutionGetPayload<S extends boolean | null | undefined | ExecutionDefaultArgs> = $Result.GetResult<Prisma.$ExecutionPayload, S>

  type ExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionCountAggregateInputType | true
    }

  export interface ExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Execution'], meta: { name: 'Execution' } }
    /**
     * Find zero or one Execution that matches the filter.
     * @param {ExecutionFindUniqueArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionFindUniqueArgs>(args: SelectSubset<T, ExecutionFindUniqueArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Execution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionFindUniqueOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionFindFirstArgs>(args?: SelectSubset<T, ExecutionFindFirstArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executions
     * const executions = await prisma.execution.findMany()
     * 
     * // Get first 10 Executions
     * const executions = await prisma.execution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionWithIdOnly = await prisma.execution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionFindManyArgs>(args?: SelectSubset<T, ExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Execution.
     * @param {ExecutionCreateArgs} args - Arguments to create a Execution.
     * @example
     * // Create one Execution
     * const Execution = await prisma.execution.create({
     *   data: {
     *     // ... data to create a Execution
     *   }
     * })
     * 
     */
    create<T extends ExecutionCreateArgs>(args: SelectSubset<T, ExecutionCreateArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executions.
     * @param {ExecutionCreateManyArgs} args - Arguments to create many Executions.
     * @example
     * // Create many Executions
     * const execution = await prisma.execution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionCreateManyArgs>(args?: SelectSubset<T, ExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Executions and returns the data saved in the database.
     * @param {ExecutionCreateManyAndReturnArgs} args - Arguments to create many Executions.
     * @example
     * // Create many Executions
     * const execution = await prisma.execution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Executions and only return the `id`
     * const executionWithIdOnly = await prisma.execution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Execution.
     * @param {ExecutionDeleteArgs} args - Arguments to delete one Execution.
     * @example
     * // Delete one Execution
     * const Execution = await prisma.execution.delete({
     *   where: {
     *     // ... filter to delete one Execution
     *   }
     * })
     * 
     */
    delete<T extends ExecutionDeleteArgs>(args: SelectSubset<T, ExecutionDeleteArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Execution.
     * @param {ExecutionUpdateArgs} args - Arguments to update one Execution.
     * @example
     * // Update one Execution
     * const execution = await prisma.execution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionUpdateArgs>(args: SelectSubset<T, ExecutionUpdateArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executions.
     * @param {ExecutionDeleteManyArgs} args - Arguments to filter Executions to delete.
     * @example
     * // Delete a few Executions
     * const { count } = await prisma.execution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionDeleteManyArgs>(args?: SelectSubset<T, ExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executions
     * const execution = await prisma.execution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionUpdateManyArgs>(args: SelectSubset<T, ExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions and returns the data updated in the database.
     * @param {ExecutionUpdateManyAndReturnArgs} args - Arguments to update many Executions.
     * @example
     * // Update many Executions
     * const execution = await prisma.execution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Executions and only return the `id`
     * const executionWithIdOnly = await prisma.execution.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Execution.
     * @param {ExecutionUpsertArgs} args - Arguments to update or create a Execution.
     * @example
     * // Update or create a Execution
     * const execution = await prisma.execution.upsert({
     *   create: {
     *     // ... data to create a Execution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Execution we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionUpsertArgs>(args: SelectSubset<T, ExecutionUpsertArgs<ExtArgs>>): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCountArgs} args - Arguments to filter Executions to count.
     * @example
     * // Count the number of Executions
     * const count = await prisma.execution.count({
     *   where: {
     *     // ... the filter for the Executions we want to count
     *   }
     * })
    **/
    count<T extends ExecutionCountArgs>(
      args?: Subset<T, ExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionAggregateArgs>(args: Subset<T, ExecutionAggregateArgs>): Prisma.PrismaPromise<GetExecutionAggregateType<T>>

    /**
     * Group by Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionGroupByArgs} args - Group by arguments.
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
      T extends ExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Execution model
   */
  readonly fields: ExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Execution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Execution model
   */
  interface ExecutionFieldRefs {
    readonly id: FieldRef<"Execution", 'String'>
    readonly title: FieldRef<"Execution", 'String'>
    readonly type: FieldRef<"Execution", 'String'>
    readonly chatId: FieldRef<"Execution", 'String'>
    readonly createdAt: FieldRef<"Execution", 'DateTime'>
    readonly updatedAt: FieldRef<"Execution", 'DateTime'>
    readonly userId: FieldRef<"Execution", 'String'>
    readonly externalId: FieldRef<"Execution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Execution findUnique
   */
  export type ExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution findUniqueOrThrow
   */
  export type ExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution findFirst
   */
  export type ExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution findFirstOrThrow
   */
  export type ExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution findMany
   */
  export type ExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Executions to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }

  /**
   * Execution create
   */
  export type ExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Execution.
     */
    data: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
  }

  /**
   * Execution createMany
   */
  export type ExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Executions.
     */
    data: ExecutionCreateManyInput | ExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Execution createManyAndReturn
   */
  export type ExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many Executions.
     */
    data: ExecutionCreateManyInput | ExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Execution update
   */
  export type ExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Execution.
     */
    data: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
    /**
     * Choose, which Execution to update.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution updateMany
   */
  export type ExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executions.
     */
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyInput>
    /**
     * Filter which Executions to update
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to update.
     */
    limit?: number
  }

  /**
   * Execution updateManyAndReturn
   */
  export type ExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * The data used to update Executions.
     */
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyInput>
    /**
     * Filter which Executions to update
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Execution upsert
   */
  export type ExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Execution to update in case it exists.
     */
    where: ExecutionWhereUniqueInput
    /**
     * In case the Execution found by the `where` argument doesn't exist, create a new Execution with this data.
     */
    create: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
    /**
     * In case the Execution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
  }

  /**
   * Execution delete
   */
  export type ExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter which Execution to delete.
     */
    where: ExecutionWhereUniqueInput
  }

  /**
   * Execution deleteMany
   */
  export type ExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executions to delete
     */
    where?: ExecutionWhereInput
    /**
     * Limit how many Executions to delete.
     */
    limit?: number
  }

  /**
   * Execution without action
   */
  export type ExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Execution
     */
    omit?: ExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    role: string | null
    createdAt: Date | null
    updateAt: Date | null
    conversationId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    role: string | null
    createdAt: Date | null
    updateAt: Date | null
    conversationId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    role: number
    createdAt: number
    updateAt: number
    conversationId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    role?: true
    createdAt?: true
    updateAt?: true
    conversationId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    role?: true
    createdAt?: true
    updateAt?: true
    conversationId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    role?: true
    createdAt?: true
    updateAt?: true
    conversationId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    role: string
    createdAt: Date
    updateAt: Date
    conversationId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    conversationId?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    conversationId?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    conversationId?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    conversationId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "role" | "createdAt" | "updateAt" | "conversationId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      role: string
      createdAt: Date
      updateAt: Date
      conversationId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updateAt: FieldRef<"Message", 'DateTime'>
    readonly conversationId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Mood
   */

  export type AggregateMood = {
    _count: MoodCountAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  export type MoodMinAggregateOutputType = {
    id: string | null
    userId: string | null
    text: string | null
    moodType: string | null
    createdAt: Date | null
  }

  export type MoodMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    text: string | null
    moodType: string | null
    createdAt: Date | null
  }

  export type MoodCountAggregateOutputType = {
    id: number
    userId: number
    text: number
    moodType: number
    createdAt: number
    _all: number
  }


  export type MoodMinAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    moodType?: true
    createdAt?: true
  }

  export type MoodMaxAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    moodType?: true
    createdAt?: true
  }

  export type MoodCountAggregateInputType = {
    id?: true
    userId?: true
    text?: true
    moodType?: true
    createdAt?: true
    _all?: true
  }

  export type MoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mood to aggregate.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moods
    **/
    _count?: true | MoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodMaxAggregateInputType
  }

  export type GetMoodAggregateType<T extends MoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMood[P]>
      : GetScalarType<T[P], AggregateMood[P]>
  }




  export type MoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithAggregationInput | MoodOrderByWithAggregationInput[]
    by: MoodScalarFieldEnum[] | MoodScalarFieldEnum
    having?: MoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCountAggregateInputType | true
    _min?: MoodMinAggregateInputType
    _max?: MoodMaxAggregateInputType
  }

  export type MoodGroupByOutputType = {
    id: string
    userId: string
    text: string
    moodType: string
    createdAt: Date
    _count: MoodCountAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  type GetMoodGroupByPayload<T extends MoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodGroupByOutputType[P]>
            : GetScalarType<T[P], MoodGroupByOutputType[P]>
        }
      >
    >


  export type MoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    text?: boolean
    moodType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    text?: boolean
    moodType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    text?: boolean
    moodType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectScalar = {
    id?: boolean
    userId?: boolean
    text?: boolean
    moodType?: boolean
    createdAt?: boolean
  }

  export type MoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "text" | "moodType" | "createdAt", ExtArgs["result"]["mood"]>
  export type MoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mood"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      text: string
      moodType: string
      createdAt: Date
    }, ExtArgs["result"]["mood"]>
    composites: {}
  }

  type MoodGetPayload<S extends boolean | null | undefined | MoodDefaultArgs> = $Result.GetResult<Prisma.$MoodPayload, S>

  type MoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodCountAggregateInputType | true
    }

  export interface MoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mood'], meta: { name: 'Mood' } }
    /**
     * Find zero or one Mood that matches the filter.
     * @param {MoodFindUniqueArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodFindUniqueArgs>(args: SelectSubset<T, MoodFindUniqueArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodFindUniqueOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodFindFirstArgs>(args?: SelectSubset<T, MoodFindFirstArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moods
     * const moods = await prisma.mood.findMany()
     * 
     * // Get first 10 Moods
     * const moods = await prisma.mood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodWithIdOnly = await prisma.mood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodFindManyArgs>(args?: SelectSubset<T, MoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mood.
     * @param {MoodCreateArgs} args - Arguments to create a Mood.
     * @example
     * // Create one Mood
     * const Mood = await prisma.mood.create({
     *   data: {
     *     // ... data to create a Mood
     *   }
     * })
     * 
     */
    create<T extends MoodCreateArgs>(args: SelectSubset<T, MoodCreateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moods.
     * @param {MoodCreateManyArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodCreateManyArgs>(args?: SelectSubset<T, MoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moods and returns the data saved in the database.
     * @param {MoodCreateManyAndReturnArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mood.
     * @param {MoodDeleteArgs} args - Arguments to delete one Mood.
     * @example
     * // Delete one Mood
     * const Mood = await prisma.mood.delete({
     *   where: {
     *     // ... filter to delete one Mood
     *   }
     * })
     * 
     */
    delete<T extends MoodDeleteArgs>(args: SelectSubset<T, MoodDeleteArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mood.
     * @param {MoodUpdateArgs} args - Arguments to update one Mood.
     * @example
     * // Update one Mood
     * const mood = await prisma.mood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodUpdateArgs>(args: SelectSubset<T, MoodUpdateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moods.
     * @param {MoodDeleteManyArgs} args - Arguments to filter Moods to delete.
     * @example
     * // Delete a few Moods
     * const { count } = await prisma.mood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodDeleteManyArgs>(args?: SelectSubset<T, MoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodUpdateManyArgs>(args: SelectSubset<T, MoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods and returns the data updated in the database.
     * @param {MoodUpdateManyAndReturnArgs} args - Arguments to update many Moods.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoodUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mood.
     * @param {MoodUpsertArgs} args - Arguments to update or create a Mood.
     * @example
     * // Update or create a Mood
     * const mood = await prisma.mood.upsert({
     *   create: {
     *     // ... data to create a Mood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mood we want to update
     *   }
     * })
     */
    upsert<T extends MoodUpsertArgs>(args: SelectSubset<T, MoodUpsertArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCountArgs} args - Arguments to filter Moods to count.
     * @example
     * // Count the number of Moods
     * const count = await prisma.mood.count({
     *   where: {
     *     // ... the filter for the Moods we want to count
     *   }
     * })
    **/
    count<T extends MoodCountArgs>(
      args?: Subset<T, MoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodAggregateArgs>(args: Subset<T, MoodAggregateArgs>): Prisma.PrismaPromise<GetMoodAggregateType<T>>

    /**
     * Group by Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodGroupByArgs} args - Group by arguments.
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
      T extends MoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodGroupByArgs['orderBy'] }
        : { orderBy?: MoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mood model
   */
  readonly fields: MoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mood model
   */
  interface MoodFieldRefs {
    readonly id: FieldRef<"Mood", 'String'>
    readonly userId: FieldRef<"Mood", 'String'>
    readonly text: FieldRef<"Mood", 'String'>
    readonly moodType: FieldRef<"Mood", 'String'>
    readonly createdAt: FieldRef<"Mood", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mood findUnique
   */
  export type MoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findUniqueOrThrow
   */
  export type MoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findFirst
   */
  export type MoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findFirstOrThrow
   */
  export type MoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findMany
   */
  export type MoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Moods to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood create
   */
  export type MoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Mood.
     */
    data: XOR<MoodCreateInput, MoodUncheckedCreateInput>
  }

  /**
   * Mood createMany
   */
  export type MoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood createManyAndReturn
   */
  export type MoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mood update
   */
  export type MoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Mood.
     */
    data: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
    /**
     * Choose, which Mood to update.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood updateMany
   */
  export type MoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood updateManyAndReturn
   */
  export type MoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mood upsert
   */
  export type MoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Mood to update in case it exists.
     */
    where: MoodWhereUniqueInput
    /**
     * In case the Mood found by the `where` argument doesn't exist, create a new Mood with this data.
     */
    create: XOR<MoodCreateInput, MoodUncheckedCreateInput>
    /**
     * In case the Mood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
  }

  /**
   * Mood delete
   */
  export type MoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter which Mood to delete.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood deleteMany
   */
  export type MoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moods to delete
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to delete.
     */
    limit?: number
  }

  /**
   * Mood without action
   */
  export type MoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "createdAt", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly name: FieldRef<"Feedback", 'String'>
    readonly email: FieldRef<"Feedback", 'String'>
    readonly subject: FieldRef<"Feedback", 'String'>
    readonly message: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
  }


  /**
   * Model CopingStrategy
   */

  export type AggregateCopingStrategy = {
    _count: CopingStrategyCountAggregateOutputType | null
    _avg: CopingStrategyAvgAggregateOutputType | null
    _sum: CopingStrategySumAggregateOutputType | null
    _min: CopingStrategyMinAggregateOutputType | null
    _max: CopingStrategyMaxAggregateOutputType | null
  }

  export type CopingStrategyAvgAggregateOutputType = {
    duration: number | null
    completedCount: number | null
    rating: number | null
  }

  export type CopingStrategySumAggregateOutputType = {
    duration: number | null
    completedCount: number | null
    rating: number | null
  }

  export type CopingStrategyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    title: string | null
    description: string | null
    practiceType: string | null
    duration: number | null
    difficulty: string | null
    isSaved: boolean | null
    completedCount: number | null
    rating: number | null
    culturalNote: string | null
    createdAt: Date | null
  }

  export type CopingStrategyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    title: string | null
    description: string | null
    practiceType: string | null
    duration: number | null
    difficulty: string | null
    isSaved: boolean | null
    completedCount: number | null
    rating: number | null
    culturalNote: string | null
    createdAt: Date | null
  }

  export type CopingStrategyCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    title: number
    description: number
    practiceType: number
    steps: number
    duration: number
    difficulty: number
    isSaved: number
    completedCount: number
    rating: number
    culturalNote: number
    createdAt: number
    _all: number
  }


  export type CopingStrategyAvgAggregateInputType = {
    duration?: true
    completedCount?: true
    rating?: true
  }

  export type CopingStrategySumAggregateInputType = {
    duration?: true
    completedCount?: true
    rating?: true
  }

  export type CopingStrategyMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    description?: true
    practiceType?: true
    duration?: true
    difficulty?: true
    isSaved?: true
    completedCount?: true
    rating?: true
    culturalNote?: true
    createdAt?: true
  }

  export type CopingStrategyMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    description?: true
    practiceType?: true
    duration?: true
    difficulty?: true
    isSaved?: true
    completedCount?: true
    rating?: true
    culturalNote?: true
    createdAt?: true
  }

  export type CopingStrategyCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    description?: true
    practiceType?: true
    steps?: true
    duration?: true
    difficulty?: true
    isSaved?: true
    completedCount?: true
    rating?: true
    culturalNote?: true
    createdAt?: true
    _all?: true
  }

  export type CopingStrategyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CopingStrategy to aggregate.
     */
    where?: CopingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopingStrategies to fetch.
     */
    orderBy?: CopingStrategyOrderByWithRelationInput | CopingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CopingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CopingStrategies
    **/
    _count?: true | CopingStrategyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CopingStrategyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CopingStrategySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CopingStrategyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CopingStrategyMaxAggregateInputType
  }

  export type GetCopingStrategyAggregateType<T extends CopingStrategyAggregateArgs> = {
        [P in keyof T & keyof AggregateCopingStrategy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCopingStrategy[P]>
      : GetScalarType<T[P], AggregateCopingStrategy[P]>
  }




  export type CopingStrategyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopingStrategyWhereInput
    orderBy?: CopingStrategyOrderByWithAggregationInput | CopingStrategyOrderByWithAggregationInput[]
    by: CopingStrategyScalarFieldEnum[] | CopingStrategyScalarFieldEnum
    having?: CopingStrategyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CopingStrategyCountAggregateInputType | true
    _avg?: CopingStrategyAvgAggregateInputType
    _sum?: CopingStrategySumAggregateInputType
    _min?: CopingStrategyMinAggregateInputType
    _max?: CopingStrategyMaxAggregateInputType
  }

  export type CopingStrategyGroupByOutputType = {
    id: string
    userId: string
    category: string
    title: string
    description: string
    practiceType: string
    steps: string[]
    duration: number
    difficulty: string
    isSaved: boolean
    completedCount: number
    rating: number | null
    culturalNote: string | null
    createdAt: Date
    _count: CopingStrategyCountAggregateOutputType | null
    _avg: CopingStrategyAvgAggregateOutputType | null
    _sum: CopingStrategySumAggregateOutputType | null
    _min: CopingStrategyMinAggregateOutputType | null
    _max: CopingStrategyMaxAggregateOutputType | null
  }

  type GetCopingStrategyGroupByPayload<T extends CopingStrategyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CopingStrategyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CopingStrategyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CopingStrategyGroupByOutputType[P]>
            : GetScalarType<T[P], CopingStrategyGroupByOutputType[P]>
        }
      >
    >


  export type CopingStrategySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    practiceType?: boolean
    steps?: boolean
    duration?: boolean
    difficulty?: boolean
    isSaved?: boolean
    completedCount?: boolean
    rating?: boolean
    culturalNote?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copingStrategy"]>

  export type CopingStrategySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    practiceType?: boolean
    steps?: boolean
    duration?: boolean
    difficulty?: boolean
    isSaved?: boolean
    completedCount?: boolean
    rating?: boolean
    culturalNote?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copingStrategy"]>

  export type CopingStrategySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    practiceType?: boolean
    steps?: boolean
    duration?: boolean
    difficulty?: boolean
    isSaved?: boolean
    completedCount?: boolean
    rating?: boolean
    culturalNote?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copingStrategy"]>

  export type CopingStrategySelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    practiceType?: boolean
    steps?: boolean
    duration?: boolean
    difficulty?: boolean
    isSaved?: boolean
    completedCount?: boolean
    rating?: boolean
    culturalNote?: boolean
    createdAt?: boolean
  }

  export type CopingStrategyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "title" | "description" | "practiceType" | "steps" | "duration" | "difficulty" | "isSaved" | "completedCount" | "rating" | "culturalNote" | "createdAt", ExtArgs["result"]["copingStrategy"]>
  export type CopingStrategyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CopingStrategyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CopingStrategyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CopingStrategyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CopingStrategy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      title: string
      description: string
      practiceType: string
      steps: string[]
      duration: number
      difficulty: string
      isSaved: boolean
      completedCount: number
      rating: number | null
      culturalNote: string | null
      createdAt: Date
    }, ExtArgs["result"]["copingStrategy"]>
    composites: {}
  }

  type CopingStrategyGetPayload<S extends boolean | null | undefined | CopingStrategyDefaultArgs> = $Result.GetResult<Prisma.$CopingStrategyPayload, S>

  type CopingStrategyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CopingStrategyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CopingStrategyCountAggregateInputType | true
    }

  export interface CopingStrategyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CopingStrategy'], meta: { name: 'CopingStrategy' } }
    /**
     * Find zero or one CopingStrategy that matches the filter.
     * @param {CopingStrategyFindUniqueArgs} args - Arguments to find a CopingStrategy
     * @example
     * // Get one CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CopingStrategyFindUniqueArgs>(args: SelectSubset<T, CopingStrategyFindUniqueArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CopingStrategy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CopingStrategyFindUniqueOrThrowArgs} args - Arguments to find a CopingStrategy
     * @example
     * // Get one CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CopingStrategyFindUniqueOrThrowArgs>(args: SelectSubset<T, CopingStrategyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CopingStrategy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyFindFirstArgs} args - Arguments to find a CopingStrategy
     * @example
     * // Get one CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CopingStrategyFindFirstArgs>(args?: SelectSubset<T, CopingStrategyFindFirstArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CopingStrategy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyFindFirstOrThrowArgs} args - Arguments to find a CopingStrategy
     * @example
     * // Get one CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CopingStrategyFindFirstOrThrowArgs>(args?: SelectSubset<T, CopingStrategyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CopingStrategies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CopingStrategies
     * const copingStrategies = await prisma.copingStrategy.findMany()
     * 
     * // Get first 10 CopingStrategies
     * const copingStrategies = await prisma.copingStrategy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const copingStrategyWithIdOnly = await prisma.copingStrategy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CopingStrategyFindManyArgs>(args?: SelectSubset<T, CopingStrategyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CopingStrategy.
     * @param {CopingStrategyCreateArgs} args - Arguments to create a CopingStrategy.
     * @example
     * // Create one CopingStrategy
     * const CopingStrategy = await prisma.copingStrategy.create({
     *   data: {
     *     // ... data to create a CopingStrategy
     *   }
     * })
     * 
     */
    create<T extends CopingStrategyCreateArgs>(args: SelectSubset<T, CopingStrategyCreateArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CopingStrategies.
     * @param {CopingStrategyCreateManyArgs} args - Arguments to create many CopingStrategies.
     * @example
     * // Create many CopingStrategies
     * const copingStrategy = await prisma.copingStrategy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CopingStrategyCreateManyArgs>(args?: SelectSubset<T, CopingStrategyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CopingStrategies and returns the data saved in the database.
     * @param {CopingStrategyCreateManyAndReturnArgs} args - Arguments to create many CopingStrategies.
     * @example
     * // Create many CopingStrategies
     * const copingStrategy = await prisma.copingStrategy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CopingStrategies and only return the `id`
     * const copingStrategyWithIdOnly = await prisma.copingStrategy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CopingStrategyCreateManyAndReturnArgs>(args?: SelectSubset<T, CopingStrategyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CopingStrategy.
     * @param {CopingStrategyDeleteArgs} args - Arguments to delete one CopingStrategy.
     * @example
     * // Delete one CopingStrategy
     * const CopingStrategy = await prisma.copingStrategy.delete({
     *   where: {
     *     // ... filter to delete one CopingStrategy
     *   }
     * })
     * 
     */
    delete<T extends CopingStrategyDeleteArgs>(args: SelectSubset<T, CopingStrategyDeleteArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CopingStrategy.
     * @param {CopingStrategyUpdateArgs} args - Arguments to update one CopingStrategy.
     * @example
     * // Update one CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CopingStrategyUpdateArgs>(args: SelectSubset<T, CopingStrategyUpdateArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CopingStrategies.
     * @param {CopingStrategyDeleteManyArgs} args - Arguments to filter CopingStrategies to delete.
     * @example
     * // Delete a few CopingStrategies
     * const { count } = await prisma.copingStrategy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CopingStrategyDeleteManyArgs>(args?: SelectSubset<T, CopingStrategyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CopingStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CopingStrategies
     * const copingStrategy = await prisma.copingStrategy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CopingStrategyUpdateManyArgs>(args: SelectSubset<T, CopingStrategyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CopingStrategies and returns the data updated in the database.
     * @param {CopingStrategyUpdateManyAndReturnArgs} args - Arguments to update many CopingStrategies.
     * @example
     * // Update many CopingStrategies
     * const copingStrategy = await prisma.copingStrategy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CopingStrategies and only return the `id`
     * const copingStrategyWithIdOnly = await prisma.copingStrategy.updateManyAndReturn({
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
    updateManyAndReturn<T extends CopingStrategyUpdateManyAndReturnArgs>(args: SelectSubset<T, CopingStrategyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CopingStrategy.
     * @param {CopingStrategyUpsertArgs} args - Arguments to update or create a CopingStrategy.
     * @example
     * // Update or create a CopingStrategy
     * const copingStrategy = await prisma.copingStrategy.upsert({
     *   create: {
     *     // ... data to create a CopingStrategy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CopingStrategy we want to update
     *   }
     * })
     */
    upsert<T extends CopingStrategyUpsertArgs>(args: SelectSubset<T, CopingStrategyUpsertArgs<ExtArgs>>): Prisma__CopingStrategyClient<$Result.GetResult<Prisma.$CopingStrategyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CopingStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyCountArgs} args - Arguments to filter CopingStrategies to count.
     * @example
     * // Count the number of CopingStrategies
     * const count = await prisma.copingStrategy.count({
     *   where: {
     *     // ... the filter for the CopingStrategies we want to count
     *   }
     * })
    **/
    count<T extends CopingStrategyCountArgs>(
      args?: Subset<T, CopingStrategyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CopingStrategyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CopingStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CopingStrategyAggregateArgs>(args: Subset<T, CopingStrategyAggregateArgs>): Prisma.PrismaPromise<GetCopingStrategyAggregateType<T>>

    /**
     * Group by CopingStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopingStrategyGroupByArgs} args - Group by arguments.
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
      T extends CopingStrategyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CopingStrategyGroupByArgs['orderBy'] }
        : { orderBy?: CopingStrategyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CopingStrategyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCopingStrategyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CopingStrategy model
   */
  readonly fields: CopingStrategyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CopingStrategy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CopingStrategyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CopingStrategy model
   */
  interface CopingStrategyFieldRefs {
    readonly id: FieldRef<"CopingStrategy", 'String'>
    readonly userId: FieldRef<"CopingStrategy", 'String'>
    readonly category: FieldRef<"CopingStrategy", 'String'>
    readonly title: FieldRef<"CopingStrategy", 'String'>
    readonly description: FieldRef<"CopingStrategy", 'String'>
    readonly practiceType: FieldRef<"CopingStrategy", 'String'>
    readonly steps: FieldRef<"CopingStrategy", 'String[]'>
    readonly duration: FieldRef<"CopingStrategy", 'Int'>
    readonly difficulty: FieldRef<"CopingStrategy", 'String'>
    readonly isSaved: FieldRef<"CopingStrategy", 'Boolean'>
    readonly completedCount: FieldRef<"CopingStrategy", 'Int'>
    readonly rating: FieldRef<"CopingStrategy", 'Int'>
    readonly culturalNote: FieldRef<"CopingStrategy", 'String'>
    readonly createdAt: FieldRef<"CopingStrategy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CopingStrategy findUnique
   */
  export type CopingStrategyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which CopingStrategy to fetch.
     */
    where: CopingStrategyWhereUniqueInput
  }

  /**
   * CopingStrategy findUniqueOrThrow
   */
  export type CopingStrategyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which CopingStrategy to fetch.
     */
    where: CopingStrategyWhereUniqueInput
  }

  /**
   * CopingStrategy findFirst
   */
  export type CopingStrategyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which CopingStrategy to fetch.
     */
    where?: CopingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopingStrategies to fetch.
     */
    orderBy?: CopingStrategyOrderByWithRelationInput | CopingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CopingStrategies.
     */
    cursor?: CopingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CopingStrategies.
     */
    distinct?: CopingStrategyScalarFieldEnum | CopingStrategyScalarFieldEnum[]
  }

  /**
   * CopingStrategy findFirstOrThrow
   */
  export type CopingStrategyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which CopingStrategy to fetch.
     */
    where?: CopingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopingStrategies to fetch.
     */
    orderBy?: CopingStrategyOrderByWithRelationInput | CopingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CopingStrategies.
     */
    cursor?: CopingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CopingStrategies.
     */
    distinct?: CopingStrategyScalarFieldEnum | CopingStrategyScalarFieldEnum[]
  }

  /**
   * CopingStrategy findMany
   */
  export type CopingStrategyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which CopingStrategies to fetch.
     */
    where?: CopingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopingStrategies to fetch.
     */
    orderBy?: CopingStrategyOrderByWithRelationInput | CopingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CopingStrategies.
     */
    cursor?: CopingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopingStrategies.
     */
    skip?: number
    distinct?: CopingStrategyScalarFieldEnum | CopingStrategyScalarFieldEnum[]
  }

  /**
   * CopingStrategy create
   */
  export type CopingStrategyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * The data needed to create a CopingStrategy.
     */
    data: XOR<CopingStrategyCreateInput, CopingStrategyUncheckedCreateInput>
  }

  /**
   * CopingStrategy createMany
   */
  export type CopingStrategyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CopingStrategies.
     */
    data: CopingStrategyCreateManyInput | CopingStrategyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CopingStrategy createManyAndReturn
   */
  export type CopingStrategyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * The data used to create many CopingStrategies.
     */
    data: CopingStrategyCreateManyInput | CopingStrategyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CopingStrategy update
   */
  export type CopingStrategyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * The data needed to update a CopingStrategy.
     */
    data: XOR<CopingStrategyUpdateInput, CopingStrategyUncheckedUpdateInput>
    /**
     * Choose, which CopingStrategy to update.
     */
    where: CopingStrategyWhereUniqueInput
  }

  /**
   * CopingStrategy updateMany
   */
  export type CopingStrategyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CopingStrategies.
     */
    data: XOR<CopingStrategyUpdateManyMutationInput, CopingStrategyUncheckedUpdateManyInput>
    /**
     * Filter which CopingStrategies to update
     */
    where?: CopingStrategyWhereInput
    /**
     * Limit how many CopingStrategies to update.
     */
    limit?: number
  }

  /**
   * CopingStrategy updateManyAndReturn
   */
  export type CopingStrategyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * The data used to update CopingStrategies.
     */
    data: XOR<CopingStrategyUpdateManyMutationInput, CopingStrategyUncheckedUpdateManyInput>
    /**
     * Filter which CopingStrategies to update
     */
    where?: CopingStrategyWhereInput
    /**
     * Limit how many CopingStrategies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CopingStrategy upsert
   */
  export type CopingStrategyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * The filter to search for the CopingStrategy to update in case it exists.
     */
    where: CopingStrategyWhereUniqueInput
    /**
     * In case the CopingStrategy found by the `where` argument doesn't exist, create a new CopingStrategy with this data.
     */
    create: XOR<CopingStrategyCreateInput, CopingStrategyUncheckedCreateInput>
    /**
     * In case the CopingStrategy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CopingStrategyUpdateInput, CopingStrategyUncheckedUpdateInput>
  }

  /**
   * CopingStrategy delete
   */
  export type CopingStrategyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
    /**
     * Filter which CopingStrategy to delete.
     */
    where: CopingStrategyWhereUniqueInput
  }

  /**
   * CopingStrategy deleteMany
   */
  export type CopingStrategyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CopingStrategies to delete
     */
    where?: CopingStrategyWhereInput
    /**
     * Limit how many CopingStrategies to delete.
     */
    limit?: number
  }

  /**
   * CopingStrategy without action
   */
  export type CopingStrategyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopingStrategy
     */
    select?: CopingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopingStrategy
     */
    omit?: CopingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopingStrategyInclude<ExtArgs> | null
  }


  /**
   * Model PeerStory
   */

  export type AggregatePeerStory = {
    _count: PeerStoryCountAggregateOutputType | null
    _avg: PeerStoryAvgAggregateOutputType | null
    _sum: PeerStorySumAggregateOutputType | null
    _min: PeerStoryMinAggregateOutputType | null
    _max: PeerStoryMaxAggregateOutputType | null
  }

  export type PeerStoryAvgAggregateOutputType = {
    supportCount: number | null
  }

  export type PeerStorySumAggregateOutputType = {
    supportCount: number | null
  }

  export type PeerStoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    category: string | null
    isApproved: boolean | null
    isAnonymous: boolean | null
    supportCount: number | null
    createdAt: Date | null
  }

  export type PeerStoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    category: string | null
    isApproved: boolean | null
    isAnonymous: boolean | null
    supportCount: number | null
    createdAt: Date | null
  }

  export type PeerStoryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    category: number
    tags: number
    isApproved: number
    isAnonymous: number
    supportCount: number
    createdAt: number
    _all: number
  }


  export type PeerStoryAvgAggregateInputType = {
    supportCount?: true
  }

  export type PeerStorySumAggregateInputType = {
    supportCount?: true
  }

  export type PeerStoryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    category?: true
    isApproved?: true
    isAnonymous?: true
    supportCount?: true
    createdAt?: true
  }

  export type PeerStoryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    category?: true
    isApproved?: true
    isAnonymous?: true
    supportCount?: true
    createdAt?: true
  }

  export type PeerStoryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    category?: true
    tags?: true
    isApproved?: true
    isAnonymous?: true
    supportCount?: true
    createdAt?: true
    _all?: true
  }

  export type PeerStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeerStory to aggregate.
     */
    where?: PeerStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeerStories to fetch.
     */
    orderBy?: PeerStoryOrderByWithRelationInput | PeerStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeerStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeerStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeerStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeerStories
    **/
    _count?: true | PeerStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeerStoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeerStorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeerStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeerStoryMaxAggregateInputType
  }

  export type GetPeerStoryAggregateType<T extends PeerStoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePeerStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeerStory[P]>
      : GetScalarType<T[P], AggregatePeerStory[P]>
  }




  export type PeerStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeerStoryWhereInput
    orderBy?: PeerStoryOrderByWithAggregationInput | PeerStoryOrderByWithAggregationInput[]
    by: PeerStoryScalarFieldEnum[] | PeerStoryScalarFieldEnum
    having?: PeerStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeerStoryCountAggregateInputType | true
    _avg?: PeerStoryAvgAggregateInputType
    _sum?: PeerStorySumAggregateInputType
    _min?: PeerStoryMinAggregateInputType
    _max?: PeerStoryMaxAggregateInputType
  }

  export type PeerStoryGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    category: string
    tags: string[]
    isApproved: boolean
    isAnonymous: boolean
    supportCount: number
    createdAt: Date
    _count: PeerStoryCountAggregateOutputType | null
    _avg: PeerStoryAvgAggregateOutputType | null
    _sum: PeerStorySumAggregateOutputType | null
    _min: PeerStoryMinAggregateOutputType | null
    _max: PeerStoryMaxAggregateOutputType | null
  }

  type GetPeerStoryGroupByPayload<T extends PeerStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeerStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeerStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeerStoryGroupByOutputType[P]>
            : GetScalarType<T[P], PeerStoryGroupByOutputType[P]>
        }
      >
    >


  export type PeerStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    supports?: boolean | PeerStory$supportsArgs<ExtArgs>
    comments?: boolean | PeerStory$commentsArgs<ExtArgs>
    _count?: boolean | PeerStoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peerStory"]>

  export type PeerStorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peerStory"]>

  export type PeerStorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peerStory"]>

  export type PeerStorySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: boolean
    createdAt?: boolean
  }

  export type PeerStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "category" | "tags" | "isApproved" | "isAnonymous" | "supportCount" | "createdAt", ExtArgs["result"]["peerStory"]>
  export type PeerStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    supports?: boolean | PeerStory$supportsArgs<ExtArgs>
    comments?: boolean | PeerStory$commentsArgs<ExtArgs>
    _count?: boolean | PeerStoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeerStoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PeerStoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PeerStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeerStory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      supports: Prisma.$StorySupportPayload<ExtArgs>[]
      comments: Prisma.$StoryCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      category: string
      tags: string[]
      isApproved: boolean
      isAnonymous: boolean
      supportCount: number
      createdAt: Date
    }, ExtArgs["result"]["peerStory"]>
    composites: {}
  }

  type PeerStoryGetPayload<S extends boolean | null | undefined | PeerStoryDefaultArgs> = $Result.GetResult<Prisma.$PeerStoryPayload, S>

  type PeerStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeerStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeerStoryCountAggregateInputType | true
    }

  export interface PeerStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeerStory'], meta: { name: 'PeerStory' } }
    /**
     * Find zero or one PeerStory that matches the filter.
     * @param {PeerStoryFindUniqueArgs} args - Arguments to find a PeerStory
     * @example
     * // Get one PeerStory
     * const peerStory = await prisma.peerStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeerStoryFindUniqueArgs>(args: SelectSubset<T, PeerStoryFindUniqueArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeerStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeerStoryFindUniqueOrThrowArgs} args - Arguments to find a PeerStory
     * @example
     * // Get one PeerStory
     * const peerStory = await prisma.peerStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeerStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PeerStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeerStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryFindFirstArgs} args - Arguments to find a PeerStory
     * @example
     * // Get one PeerStory
     * const peerStory = await prisma.peerStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeerStoryFindFirstArgs>(args?: SelectSubset<T, PeerStoryFindFirstArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeerStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryFindFirstOrThrowArgs} args - Arguments to find a PeerStory
     * @example
     * // Get one PeerStory
     * const peerStory = await prisma.peerStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeerStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PeerStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeerStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeerStories
     * const peerStories = await prisma.peerStory.findMany()
     * 
     * // Get first 10 PeerStories
     * const peerStories = await prisma.peerStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peerStoryWithIdOnly = await prisma.peerStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeerStoryFindManyArgs>(args?: SelectSubset<T, PeerStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeerStory.
     * @param {PeerStoryCreateArgs} args - Arguments to create a PeerStory.
     * @example
     * // Create one PeerStory
     * const PeerStory = await prisma.peerStory.create({
     *   data: {
     *     // ... data to create a PeerStory
     *   }
     * })
     * 
     */
    create<T extends PeerStoryCreateArgs>(args: SelectSubset<T, PeerStoryCreateArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeerStories.
     * @param {PeerStoryCreateManyArgs} args - Arguments to create many PeerStories.
     * @example
     * // Create many PeerStories
     * const peerStory = await prisma.peerStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeerStoryCreateManyArgs>(args?: SelectSubset<T, PeerStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeerStories and returns the data saved in the database.
     * @param {PeerStoryCreateManyAndReturnArgs} args - Arguments to create many PeerStories.
     * @example
     * // Create many PeerStories
     * const peerStory = await prisma.peerStory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeerStories and only return the `id`
     * const peerStoryWithIdOnly = await prisma.peerStory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeerStoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PeerStoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeerStory.
     * @param {PeerStoryDeleteArgs} args - Arguments to delete one PeerStory.
     * @example
     * // Delete one PeerStory
     * const PeerStory = await prisma.peerStory.delete({
     *   where: {
     *     // ... filter to delete one PeerStory
     *   }
     * })
     * 
     */
    delete<T extends PeerStoryDeleteArgs>(args: SelectSubset<T, PeerStoryDeleteArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeerStory.
     * @param {PeerStoryUpdateArgs} args - Arguments to update one PeerStory.
     * @example
     * // Update one PeerStory
     * const peerStory = await prisma.peerStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeerStoryUpdateArgs>(args: SelectSubset<T, PeerStoryUpdateArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeerStories.
     * @param {PeerStoryDeleteManyArgs} args - Arguments to filter PeerStories to delete.
     * @example
     * // Delete a few PeerStories
     * const { count } = await prisma.peerStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeerStoryDeleteManyArgs>(args?: SelectSubset<T, PeerStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeerStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeerStories
     * const peerStory = await prisma.peerStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeerStoryUpdateManyArgs>(args: SelectSubset<T, PeerStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeerStories and returns the data updated in the database.
     * @param {PeerStoryUpdateManyAndReturnArgs} args - Arguments to update many PeerStories.
     * @example
     * // Update many PeerStories
     * const peerStory = await prisma.peerStory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeerStories and only return the `id`
     * const peerStoryWithIdOnly = await prisma.peerStory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PeerStoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PeerStoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeerStory.
     * @param {PeerStoryUpsertArgs} args - Arguments to update or create a PeerStory.
     * @example
     * // Update or create a PeerStory
     * const peerStory = await prisma.peerStory.upsert({
     *   create: {
     *     // ... data to create a PeerStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeerStory we want to update
     *   }
     * })
     */
    upsert<T extends PeerStoryUpsertArgs>(args: SelectSubset<T, PeerStoryUpsertArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeerStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryCountArgs} args - Arguments to filter PeerStories to count.
     * @example
     * // Count the number of PeerStories
     * const count = await prisma.peerStory.count({
     *   where: {
     *     // ... the filter for the PeerStories we want to count
     *   }
     * })
    **/
    count<T extends PeerStoryCountArgs>(
      args?: Subset<T, PeerStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeerStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeerStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeerStoryAggregateArgs>(args: Subset<T, PeerStoryAggregateArgs>): Prisma.PrismaPromise<GetPeerStoryAggregateType<T>>

    /**
     * Group by PeerStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerStoryGroupByArgs} args - Group by arguments.
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
      T extends PeerStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeerStoryGroupByArgs['orderBy'] }
        : { orderBy?: PeerStoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeerStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeerStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeerStory model
   */
  readonly fields: PeerStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeerStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeerStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supports<T extends PeerStory$supportsArgs<ExtArgs> = {}>(args?: Subset<T, PeerStory$supportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends PeerStory$commentsArgs<ExtArgs> = {}>(args?: Subset<T, PeerStory$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PeerStory model
   */
  interface PeerStoryFieldRefs {
    readonly id: FieldRef<"PeerStory", 'String'>
    readonly userId: FieldRef<"PeerStory", 'String'>
    readonly title: FieldRef<"PeerStory", 'String'>
    readonly content: FieldRef<"PeerStory", 'String'>
    readonly category: FieldRef<"PeerStory", 'String'>
    readonly tags: FieldRef<"PeerStory", 'String[]'>
    readonly isApproved: FieldRef<"PeerStory", 'Boolean'>
    readonly isAnonymous: FieldRef<"PeerStory", 'Boolean'>
    readonly supportCount: FieldRef<"PeerStory", 'Int'>
    readonly createdAt: FieldRef<"PeerStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeerStory findUnique
   */
  export type PeerStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter, which PeerStory to fetch.
     */
    where: PeerStoryWhereUniqueInput
  }

  /**
   * PeerStory findUniqueOrThrow
   */
  export type PeerStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter, which PeerStory to fetch.
     */
    where: PeerStoryWhereUniqueInput
  }

  /**
   * PeerStory findFirst
   */
  export type PeerStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter, which PeerStory to fetch.
     */
    where?: PeerStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeerStories to fetch.
     */
    orderBy?: PeerStoryOrderByWithRelationInput | PeerStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeerStories.
     */
    cursor?: PeerStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeerStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeerStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeerStories.
     */
    distinct?: PeerStoryScalarFieldEnum | PeerStoryScalarFieldEnum[]
  }

  /**
   * PeerStory findFirstOrThrow
   */
  export type PeerStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter, which PeerStory to fetch.
     */
    where?: PeerStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeerStories to fetch.
     */
    orderBy?: PeerStoryOrderByWithRelationInput | PeerStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeerStories.
     */
    cursor?: PeerStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeerStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeerStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeerStories.
     */
    distinct?: PeerStoryScalarFieldEnum | PeerStoryScalarFieldEnum[]
  }

  /**
   * PeerStory findMany
   */
  export type PeerStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter, which PeerStories to fetch.
     */
    where?: PeerStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeerStories to fetch.
     */
    orderBy?: PeerStoryOrderByWithRelationInput | PeerStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeerStories.
     */
    cursor?: PeerStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeerStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeerStories.
     */
    skip?: number
    distinct?: PeerStoryScalarFieldEnum | PeerStoryScalarFieldEnum[]
  }

  /**
   * PeerStory create
   */
  export type PeerStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PeerStory.
     */
    data: XOR<PeerStoryCreateInput, PeerStoryUncheckedCreateInput>
  }

  /**
   * PeerStory createMany
   */
  export type PeerStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeerStories.
     */
    data: PeerStoryCreateManyInput | PeerStoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeerStory createManyAndReturn
   */
  export type PeerStoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * The data used to create many PeerStories.
     */
    data: PeerStoryCreateManyInput | PeerStoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeerStory update
   */
  export type PeerStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PeerStory.
     */
    data: XOR<PeerStoryUpdateInput, PeerStoryUncheckedUpdateInput>
    /**
     * Choose, which PeerStory to update.
     */
    where: PeerStoryWhereUniqueInput
  }

  /**
   * PeerStory updateMany
   */
  export type PeerStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeerStories.
     */
    data: XOR<PeerStoryUpdateManyMutationInput, PeerStoryUncheckedUpdateManyInput>
    /**
     * Filter which PeerStories to update
     */
    where?: PeerStoryWhereInput
    /**
     * Limit how many PeerStories to update.
     */
    limit?: number
  }

  /**
   * PeerStory updateManyAndReturn
   */
  export type PeerStoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * The data used to update PeerStories.
     */
    data: XOR<PeerStoryUpdateManyMutationInput, PeerStoryUncheckedUpdateManyInput>
    /**
     * Filter which PeerStories to update
     */
    where?: PeerStoryWhereInput
    /**
     * Limit how many PeerStories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeerStory upsert
   */
  export type PeerStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PeerStory to update in case it exists.
     */
    where: PeerStoryWhereUniqueInput
    /**
     * In case the PeerStory found by the `where` argument doesn't exist, create a new PeerStory with this data.
     */
    create: XOR<PeerStoryCreateInput, PeerStoryUncheckedCreateInput>
    /**
     * In case the PeerStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeerStoryUpdateInput, PeerStoryUncheckedUpdateInput>
  }

  /**
   * PeerStory delete
   */
  export type PeerStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
    /**
     * Filter which PeerStory to delete.
     */
    where: PeerStoryWhereUniqueInput
  }

  /**
   * PeerStory deleteMany
   */
  export type PeerStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeerStories to delete
     */
    where?: PeerStoryWhereInput
    /**
     * Limit how many PeerStories to delete.
     */
    limit?: number
  }

  /**
   * PeerStory.supports
   */
  export type PeerStory$supportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    where?: StorySupportWhereInput
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    cursor?: StorySupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorySupportScalarFieldEnum | StorySupportScalarFieldEnum[]
  }

  /**
   * PeerStory.comments
   */
  export type PeerStory$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    where?: StoryCommentWhereInput
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    cursor?: StoryCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryCommentScalarFieldEnum | StoryCommentScalarFieldEnum[]
  }

  /**
   * PeerStory without action
   */
  export type PeerStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerStory
     */
    select?: PeerStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeerStory
     */
    omit?: PeerStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerStoryInclude<ExtArgs> | null
  }


  /**
   * Model StorySupport
   */

  export type AggregateStorySupport = {
    _count: StorySupportCountAggregateOutputType | null
    _min: StorySupportMinAggregateOutputType | null
    _max: StorySupportMaxAggregateOutputType | null
  }

  export type StorySupportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storyId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type StorySupportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storyId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type StorySupportCountAggregateOutputType = {
    id: number
    userId: number
    storyId: number
    type: number
    createdAt: number
    _all: number
  }


  export type StorySupportMinAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    type?: true
    createdAt?: true
  }

  export type StorySupportMaxAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    type?: true
    createdAt?: true
  }

  export type StorySupportCountAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type StorySupportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorySupport to aggregate.
     */
    where?: StorySupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySupports to fetch.
     */
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorySupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorySupports
    **/
    _count?: true | StorySupportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorySupportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorySupportMaxAggregateInputType
  }

  export type GetStorySupportAggregateType<T extends StorySupportAggregateArgs> = {
        [P in keyof T & keyof AggregateStorySupport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorySupport[P]>
      : GetScalarType<T[P], AggregateStorySupport[P]>
  }




  export type StorySupportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorySupportWhereInput
    orderBy?: StorySupportOrderByWithAggregationInput | StorySupportOrderByWithAggregationInput[]
    by: StorySupportScalarFieldEnum[] | StorySupportScalarFieldEnum
    having?: StorySupportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorySupportCountAggregateInputType | true
    _min?: StorySupportMinAggregateInputType
    _max?: StorySupportMaxAggregateInputType
  }

  export type StorySupportGroupByOutputType = {
    id: string
    userId: string
    storyId: string
    type: string
    createdAt: Date
    _count: StorySupportCountAggregateOutputType | null
    _min: StorySupportMinAggregateOutputType | null
    _max: StorySupportMaxAggregateOutputType | null
  }

  type GetStorySupportGroupByPayload<T extends StorySupportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorySupportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorySupportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorySupportGroupByOutputType[P]>
            : GetScalarType<T[P], StorySupportGroupByOutputType[P]>
        }
      >
    >


  export type StorySupportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySupport"]>

  export type StorySupportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySupport"]>

  export type StorySupportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySupport"]>

  export type StorySupportSelectScalar = {
    id?: boolean
    userId?: boolean
    storyId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type StorySupportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storyId" | "type" | "createdAt", ExtArgs["result"]["storySupport"]>
  export type StorySupportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }
  export type StorySupportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }
  export type StorySupportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }

  export type $StorySupportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorySupport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      story: Prisma.$PeerStoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storyId: string
      type: string
      createdAt: Date
    }, ExtArgs["result"]["storySupport"]>
    composites: {}
  }

  type StorySupportGetPayload<S extends boolean | null | undefined | StorySupportDefaultArgs> = $Result.GetResult<Prisma.$StorySupportPayload, S>

  type StorySupportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorySupportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorySupportCountAggregateInputType | true
    }

  export interface StorySupportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorySupport'], meta: { name: 'StorySupport' } }
    /**
     * Find zero or one StorySupport that matches the filter.
     * @param {StorySupportFindUniqueArgs} args - Arguments to find a StorySupport
     * @example
     * // Get one StorySupport
     * const storySupport = await prisma.storySupport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorySupportFindUniqueArgs>(args: SelectSubset<T, StorySupportFindUniqueArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorySupport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorySupportFindUniqueOrThrowArgs} args - Arguments to find a StorySupport
     * @example
     * // Get one StorySupport
     * const storySupport = await prisma.storySupport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorySupportFindUniqueOrThrowArgs>(args: SelectSubset<T, StorySupportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorySupport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportFindFirstArgs} args - Arguments to find a StorySupport
     * @example
     * // Get one StorySupport
     * const storySupport = await prisma.storySupport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorySupportFindFirstArgs>(args?: SelectSubset<T, StorySupportFindFirstArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorySupport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportFindFirstOrThrowArgs} args - Arguments to find a StorySupport
     * @example
     * // Get one StorySupport
     * const storySupport = await prisma.storySupport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorySupportFindFirstOrThrowArgs>(args?: SelectSubset<T, StorySupportFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorySupports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorySupports
     * const storySupports = await prisma.storySupport.findMany()
     * 
     * // Get first 10 StorySupports
     * const storySupports = await prisma.storySupport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storySupportWithIdOnly = await prisma.storySupport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorySupportFindManyArgs>(args?: SelectSubset<T, StorySupportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorySupport.
     * @param {StorySupportCreateArgs} args - Arguments to create a StorySupport.
     * @example
     * // Create one StorySupport
     * const StorySupport = await prisma.storySupport.create({
     *   data: {
     *     // ... data to create a StorySupport
     *   }
     * })
     * 
     */
    create<T extends StorySupportCreateArgs>(args: SelectSubset<T, StorySupportCreateArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorySupports.
     * @param {StorySupportCreateManyArgs} args - Arguments to create many StorySupports.
     * @example
     * // Create many StorySupports
     * const storySupport = await prisma.storySupport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorySupportCreateManyArgs>(args?: SelectSubset<T, StorySupportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorySupports and returns the data saved in the database.
     * @param {StorySupportCreateManyAndReturnArgs} args - Arguments to create many StorySupports.
     * @example
     * // Create many StorySupports
     * const storySupport = await prisma.storySupport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorySupports and only return the `id`
     * const storySupportWithIdOnly = await prisma.storySupport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorySupportCreateManyAndReturnArgs>(args?: SelectSubset<T, StorySupportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorySupport.
     * @param {StorySupportDeleteArgs} args - Arguments to delete one StorySupport.
     * @example
     * // Delete one StorySupport
     * const StorySupport = await prisma.storySupport.delete({
     *   where: {
     *     // ... filter to delete one StorySupport
     *   }
     * })
     * 
     */
    delete<T extends StorySupportDeleteArgs>(args: SelectSubset<T, StorySupportDeleteArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorySupport.
     * @param {StorySupportUpdateArgs} args - Arguments to update one StorySupport.
     * @example
     * // Update one StorySupport
     * const storySupport = await prisma.storySupport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorySupportUpdateArgs>(args: SelectSubset<T, StorySupportUpdateArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorySupports.
     * @param {StorySupportDeleteManyArgs} args - Arguments to filter StorySupports to delete.
     * @example
     * // Delete a few StorySupports
     * const { count } = await prisma.storySupport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorySupportDeleteManyArgs>(args?: SelectSubset<T, StorySupportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorySupports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorySupports
     * const storySupport = await prisma.storySupport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorySupportUpdateManyArgs>(args: SelectSubset<T, StorySupportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorySupports and returns the data updated in the database.
     * @param {StorySupportUpdateManyAndReturnArgs} args - Arguments to update many StorySupports.
     * @example
     * // Update many StorySupports
     * const storySupport = await prisma.storySupport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorySupports and only return the `id`
     * const storySupportWithIdOnly = await prisma.storySupport.updateManyAndReturn({
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
    updateManyAndReturn<T extends StorySupportUpdateManyAndReturnArgs>(args: SelectSubset<T, StorySupportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorySupport.
     * @param {StorySupportUpsertArgs} args - Arguments to update or create a StorySupport.
     * @example
     * // Update or create a StorySupport
     * const storySupport = await prisma.storySupport.upsert({
     *   create: {
     *     // ... data to create a StorySupport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorySupport we want to update
     *   }
     * })
     */
    upsert<T extends StorySupportUpsertArgs>(args: SelectSubset<T, StorySupportUpsertArgs<ExtArgs>>): Prisma__StorySupportClient<$Result.GetResult<Prisma.$StorySupportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorySupports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportCountArgs} args - Arguments to filter StorySupports to count.
     * @example
     * // Count the number of StorySupports
     * const count = await prisma.storySupport.count({
     *   where: {
     *     // ... the filter for the StorySupports we want to count
     *   }
     * })
    **/
    count<T extends StorySupportCountArgs>(
      args?: Subset<T, StorySupportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorySupportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorySupport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorySupportAggregateArgs>(args: Subset<T, StorySupportAggregateArgs>): Prisma.PrismaPromise<GetStorySupportAggregateType<T>>

    /**
     * Group by StorySupport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySupportGroupByArgs} args - Group by arguments.
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
      T extends StorySupportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorySupportGroupByArgs['orderBy'] }
        : { orderBy?: StorySupportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorySupportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorySupportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorySupport model
   */
  readonly fields: StorySupportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorySupport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorySupportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    story<T extends PeerStoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeerStoryDefaultArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StorySupport model
   */
  interface StorySupportFieldRefs {
    readonly id: FieldRef<"StorySupport", 'String'>
    readonly userId: FieldRef<"StorySupport", 'String'>
    readonly storyId: FieldRef<"StorySupport", 'String'>
    readonly type: FieldRef<"StorySupport", 'String'>
    readonly createdAt: FieldRef<"StorySupport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StorySupport findUnique
   */
  export type StorySupportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter, which StorySupport to fetch.
     */
    where: StorySupportWhereUniqueInput
  }

  /**
   * StorySupport findUniqueOrThrow
   */
  export type StorySupportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter, which StorySupport to fetch.
     */
    where: StorySupportWhereUniqueInput
  }

  /**
   * StorySupport findFirst
   */
  export type StorySupportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter, which StorySupport to fetch.
     */
    where?: StorySupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySupports to fetch.
     */
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorySupports.
     */
    cursor?: StorySupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorySupports.
     */
    distinct?: StorySupportScalarFieldEnum | StorySupportScalarFieldEnum[]
  }

  /**
   * StorySupport findFirstOrThrow
   */
  export type StorySupportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter, which StorySupport to fetch.
     */
    where?: StorySupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySupports to fetch.
     */
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorySupports.
     */
    cursor?: StorySupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySupports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorySupports.
     */
    distinct?: StorySupportScalarFieldEnum | StorySupportScalarFieldEnum[]
  }

  /**
   * StorySupport findMany
   */
  export type StorySupportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter, which StorySupports to fetch.
     */
    where?: StorySupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySupports to fetch.
     */
    orderBy?: StorySupportOrderByWithRelationInput | StorySupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorySupports.
     */
    cursor?: StorySupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySupports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySupports.
     */
    skip?: number
    distinct?: StorySupportScalarFieldEnum | StorySupportScalarFieldEnum[]
  }

  /**
   * StorySupport create
   */
  export type StorySupportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * The data needed to create a StorySupport.
     */
    data: XOR<StorySupportCreateInput, StorySupportUncheckedCreateInput>
  }

  /**
   * StorySupport createMany
   */
  export type StorySupportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorySupports.
     */
    data: StorySupportCreateManyInput | StorySupportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorySupport createManyAndReturn
   */
  export type StorySupportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * The data used to create many StorySupports.
     */
    data: StorySupportCreateManyInput | StorySupportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorySupport update
   */
  export type StorySupportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * The data needed to update a StorySupport.
     */
    data: XOR<StorySupportUpdateInput, StorySupportUncheckedUpdateInput>
    /**
     * Choose, which StorySupport to update.
     */
    where: StorySupportWhereUniqueInput
  }

  /**
   * StorySupport updateMany
   */
  export type StorySupportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorySupports.
     */
    data: XOR<StorySupportUpdateManyMutationInput, StorySupportUncheckedUpdateManyInput>
    /**
     * Filter which StorySupports to update
     */
    where?: StorySupportWhereInput
    /**
     * Limit how many StorySupports to update.
     */
    limit?: number
  }

  /**
   * StorySupport updateManyAndReturn
   */
  export type StorySupportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * The data used to update StorySupports.
     */
    data: XOR<StorySupportUpdateManyMutationInput, StorySupportUncheckedUpdateManyInput>
    /**
     * Filter which StorySupports to update
     */
    where?: StorySupportWhereInput
    /**
     * Limit how many StorySupports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorySupport upsert
   */
  export type StorySupportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * The filter to search for the StorySupport to update in case it exists.
     */
    where: StorySupportWhereUniqueInput
    /**
     * In case the StorySupport found by the `where` argument doesn't exist, create a new StorySupport with this data.
     */
    create: XOR<StorySupportCreateInput, StorySupportUncheckedCreateInput>
    /**
     * In case the StorySupport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorySupportUpdateInput, StorySupportUncheckedUpdateInput>
  }

  /**
   * StorySupport delete
   */
  export type StorySupportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
    /**
     * Filter which StorySupport to delete.
     */
    where: StorySupportWhereUniqueInput
  }

  /**
   * StorySupport deleteMany
   */
  export type StorySupportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorySupports to delete
     */
    where?: StorySupportWhereInput
    /**
     * Limit how many StorySupports to delete.
     */
    limit?: number
  }

  /**
   * StorySupport without action
   */
  export type StorySupportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySupport
     */
    select?: StorySupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySupport
     */
    omit?: StorySupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySupportInclude<ExtArgs> | null
  }


  /**
   * Model StoryComment
   */

  export type AggregateStoryComment = {
    _count: StoryCommentCountAggregateOutputType | null
    _min: StoryCommentMinAggregateOutputType | null
    _max: StoryCommentMaxAggregateOutputType | null
  }

  export type StoryCommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storyId: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type StoryCommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storyId: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type StoryCommentCountAggregateOutputType = {
    id: number
    userId: number
    storyId: number
    content: number
    isApproved: number
    createdAt: number
    _all: number
  }


  export type StoryCommentMinAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    content?: true
    isApproved?: true
    createdAt?: true
  }

  export type StoryCommentMaxAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    content?: true
    isApproved?: true
    createdAt?: true
  }

  export type StoryCommentCountAggregateInputType = {
    id?: true
    userId?: true
    storyId?: true
    content?: true
    isApproved?: true
    createdAt?: true
    _all?: true
  }

  export type StoryCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryComment to aggregate.
     */
    where?: StoryCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryComments to fetch.
     */
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryComments
    **/
    _count?: true | StoryCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryCommentMaxAggregateInputType
  }

  export type GetStoryCommentAggregateType<T extends StoryCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryComment[P]>
      : GetScalarType<T[P], AggregateStoryComment[P]>
  }




  export type StoryCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryCommentWhereInput
    orderBy?: StoryCommentOrderByWithAggregationInput | StoryCommentOrderByWithAggregationInput[]
    by: StoryCommentScalarFieldEnum[] | StoryCommentScalarFieldEnum
    having?: StoryCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCommentCountAggregateInputType | true
    _min?: StoryCommentMinAggregateInputType
    _max?: StoryCommentMaxAggregateInputType
  }

  export type StoryCommentGroupByOutputType = {
    id: string
    userId: string
    storyId: string
    content: string
    isApproved: boolean
    createdAt: Date
    _count: StoryCommentCountAggregateOutputType | null
    _min: StoryCommentMinAggregateOutputType | null
    _max: StoryCommentMaxAggregateOutputType | null
  }

  type GetStoryCommentGroupByPayload<T extends StoryCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryCommentGroupByOutputType[P]>
            : GetScalarType<T[P], StoryCommentGroupByOutputType[P]>
        }
      >
    >


  export type StoryCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyComment"]>

  export type StoryCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyComment"]>

  export type StoryCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storyId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyComment"]>

  export type StoryCommentSelectScalar = {
    id?: boolean
    userId?: boolean
    storyId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
  }

  export type StoryCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storyId" | "content" | "isApproved" | "createdAt", ExtArgs["result"]["storyComment"]>
  export type StoryCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }
  export type StoryCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }
  export type StoryCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    story?: boolean | PeerStoryDefaultArgs<ExtArgs>
  }

  export type $StoryCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryComment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      story: Prisma.$PeerStoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storyId: string
      content: string
      isApproved: boolean
      createdAt: Date
    }, ExtArgs["result"]["storyComment"]>
    composites: {}
  }

  type StoryCommentGetPayload<S extends boolean | null | undefined | StoryCommentDefaultArgs> = $Result.GetResult<Prisma.$StoryCommentPayload, S>

  type StoryCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCommentCountAggregateInputType | true
    }

  export interface StoryCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryComment'], meta: { name: 'StoryComment' } }
    /**
     * Find zero or one StoryComment that matches the filter.
     * @param {StoryCommentFindUniqueArgs} args - Arguments to find a StoryComment
     * @example
     * // Get one StoryComment
     * const storyComment = await prisma.storyComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryCommentFindUniqueArgs>(args: SelectSubset<T, StoryCommentFindUniqueArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoryComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryCommentFindUniqueOrThrowArgs} args - Arguments to find a StoryComment
     * @example
     * // Get one StoryComment
     * const storyComment = await prisma.storyComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentFindFirstArgs} args - Arguments to find a StoryComment
     * @example
     * // Get one StoryComment
     * const storyComment = await prisma.storyComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryCommentFindFirstArgs>(args?: SelectSubset<T, StoryCommentFindFirstArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentFindFirstOrThrowArgs} args - Arguments to find a StoryComment
     * @example
     * // Get one StoryComment
     * const storyComment = await prisma.storyComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoryComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryComments
     * const storyComments = await prisma.storyComment.findMany()
     * 
     * // Get first 10 StoryComments
     * const storyComments = await prisma.storyComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyCommentWithIdOnly = await prisma.storyComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryCommentFindManyArgs>(args?: SelectSubset<T, StoryCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoryComment.
     * @param {StoryCommentCreateArgs} args - Arguments to create a StoryComment.
     * @example
     * // Create one StoryComment
     * const StoryComment = await prisma.storyComment.create({
     *   data: {
     *     // ... data to create a StoryComment
     *   }
     * })
     * 
     */
    create<T extends StoryCommentCreateArgs>(args: SelectSubset<T, StoryCommentCreateArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoryComments.
     * @param {StoryCommentCreateManyArgs} args - Arguments to create many StoryComments.
     * @example
     * // Create many StoryComments
     * const storyComment = await prisma.storyComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCommentCreateManyArgs>(args?: SelectSubset<T, StoryCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryComments and returns the data saved in the database.
     * @param {StoryCommentCreateManyAndReturnArgs} args - Arguments to create many StoryComments.
     * @example
     * // Create many StoryComments
     * const storyComment = await prisma.storyComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryComments and only return the `id`
     * const storyCommentWithIdOnly = await prisma.storyComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoryComment.
     * @param {StoryCommentDeleteArgs} args - Arguments to delete one StoryComment.
     * @example
     * // Delete one StoryComment
     * const StoryComment = await prisma.storyComment.delete({
     *   where: {
     *     // ... filter to delete one StoryComment
     *   }
     * })
     * 
     */
    delete<T extends StoryCommentDeleteArgs>(args: SelectSubset<T, StoryCommentDeleteArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoryComment.
     * @param {StoryCommentUpdateArgs} args - Arguments to update one StoryComment.
     * @example
     * // Update one StoryComment
     * const storyComment = await prisma.storyComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryCommentUpdateArgs>(args: SelectSubset<T, StoryCommentUpdateArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoryComments.
     * @param {StoryCommentDeleteManyArgs} args - Arguments to filter StoryComments to delete.
     * @example
     * // Delete a few StoryComments
     * const { count } = await prisma.storyComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryCommentDeleteManyArgs>(args?: SelectSubset<T, StoryCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryComments
     * const storyComment = await prisma.storyComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryCommentUpdateManyArgs>(args: SelectSubset<T, StoryCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryComments and returns the data updated in the database.
     * @param {StoryCommentUpdateManyAndReturnArgs} args - Arguments to update many StoryComments.
     * @example
     * // Update many StoryComments
     * const storyComment = await prisma.storyComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoryComments and only return the `id`
     * const storyCommentWithIdOnly = await prisma.storyComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoryCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoryComment.
     * @param {StoryCommentUpsertArgs} args - Arguments to update or create a StoryComment.
     * @example
     * // Update or create a StoryComment
     * const storyComment = await prisma.storyComment.upsert({
     *   create: {
     *     // ... data to create a StoryComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryComment we want to update
     *   }
     * })
     */
    upsert<T extends StoryCommentUpsertArgs>(args: SelectSubset<T, StoryCommentUpsertArgs<ExtArgs>>): Prisma__StoryCommentClient<$Result.GetResult<Prisma.$StoryCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoryComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentCountArgs} args - Arguments to filter StoryComments to count.
     * @example
     * // Count the number of StoryComments
     * const count = await prisma.storyComment.count({
     *   where: {
     *     // ... the filter for the StoryComments we want to count
     *   }
     * })
    **/
    count<T extends StoryCommentCountArgs>(
      args?: Subset<T, StoryCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryCommentAggregateArgs>(args: Subset<T, StoryCommentAggregateArgs>): Prisma.PrismaPromise<GetStoryCommentAggregateType<T>>

    /**
     * Group by StoryComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCommentGroupByArgs} args - Group by arguments.
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
      T extends StoryCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryCommentGroupByArgs['orderBy'] }
        : { orderBy?: StoryCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryComment model
   */
  readonly fields: StoryCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    story<T extends PeerStoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeerStoryDefaultArgs<ExtArgs>>): Prisma__PeerStoryClient<$Result.GetResult<Prisma.$PeerStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoryComment model
   */
  interface StoryCommentFieldRefs {
    readonly id: FieldRef<"StoryComment", 'String'>
    readonly userId: FieldRef<"StoryComment", 'String'>
    readonly storyId: FieldRef<"StoryComment", 'String'>
    readonly content: FieldRef<"StoryComment", 'String'>
    readonly isApproved: FieldRef<"StoryComment", 'Boolean'>
    readonly createdAt: FieldRef<"StoryComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoryComment findUnique
   */
  export type StoryCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter, which StoryComment to fetch.
     */
    where: StoryCommentWhereUniqueInput
  }

  /**
   * StoryComment findUniqueOrThrow
   */
  export type StoryCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter, which StoryComment to fetch.
     */
    where: StoryCommentWhereUniqueInput
  }

  /**
   * StoryComment findFirst
   */
  export type StoryCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter, which StoryComment to fetch.
     */
    where?: StoryCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryComments to fetch.
     */
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryComments.
     */
    cursor?: StoryCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryComments.
     */
    distinct?: StoryCommentScalarFieldEnum | StoryCommentScalarFieldEnum[]
  }

  /**
   * StoryComment findFirstOrThrow
   */
  export type StoryCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter, which StoryComment to fetch.
     */
    where?: StoryCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryComments to fetch.
     */
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryComments.
     */
    cursor?: StoryCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryComments.
     */
    distinct?: StoryCommentScalarFieldEnum | StoryCommentScalarFieldEnum[]
  }

  /**
   * StoryComment findMany
   */
  export type StoryCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter, which StoryComments to fetch.
     */
    where?: StoryCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryComments to fetch.
     */
    orderBy?: StoryCommentOrderByWithRelationInput | StoryCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryComments.
     */
    cursor?: StoryCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryComments.
     */
    skip?: number
    distinct?: StoryCommentScalarFieldEnum | StoryCommentScalarFieldEnum[]
  }

  /**
   * StoryComment create
   */
  export type StoryCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryComment.
     */
    data: XOR<StoryCommentCreateInput, StoryCommentUncheckedCreateInput>
  }

  /**
   * StoryComment createMany
   */
  export type StoryCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryComments.
     */
    data: StoryCommentCreateManyInput | StoryCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryComment createManyAndReturn
   */
  export type StoryCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * The data used to create many StoryComments.
     */
    data: StoryCommentCreateManyInput | StoryCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryComment update
   */
  export type StoryCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryComment.
     */
    data: XOR<StoryCommentUpdateInput, StoryCommentUncheckedUpdateInput>
    /**
     * Choose, which StoryComment to update.
     */
    where: StoryCommentWhereUniqueInput
  }

  /**
   * StoryComment updateMany
   */
  export type StoryCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryComments.
     */
    data: XOR<StoryCommentUpdateManyMutationInput, StoryCommentUncheckedUpdateManyInput>
    /**
     * Filter which StoryComments to update
     */
    where?: StoryCommentWhereInput
    /**
     * Limit how many StoryComments to update.
     */
    limit?: number
  }

  /**
   * StoryComment updateManyAndReturn
   */
  export type StoryCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * The data used to update StoryComments.
     */
    data: XOR<StoryCommentUpdateManyMutationInput, StoryCommentUncheckedUpdateManyInput>
    /**
     * Filter which StoryComments to update
     */
    where?: StoryCommentWhereInput
    /**
     * Limit how many StoryComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryComment upsert
   */
  export type StoryCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryComment to update in case it exists.
     */
    where: StoryCommentWhereUniqueInput
    /**
     * In case the StoryComment found by the `where` argument doesn't exist, create a new StoryComment with this data.
     */
    create: XOR<StoryCommentCreateInput, StoryCommentUncheckedCreateInput>
    /**
     * In case the StoryComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryCommentUpdateInput, StoryCommentUncheckedUpdateInput>
  }

  /**
   * StoryComment delete
   */
  export type StoryCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
    /**
     * Filter which StoryComment to delete.
     */
    where: StoryCommentWhereUniqueInput
  }

  /**
   * StoryComment deleteMany
   */
  export type StoryCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryComments to delete
     */
    where?: StoryCommentWhereInput
    /**
     * Limit how many StoryComments to delete.
     */
    limit?: number
  }

  /**
   * StoryComment without action
   */
  export type StoryCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryComment
     */
    select?: StoryCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryComment
     */
    omit?: StoryCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryCommentInclude<ExtArgs> | null
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
    googleId: 'googleId',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JournalingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    moodType: 'moodType',
    moodScore: 'moodScore',
    tags: 'tags'
  };

  export type JournalingScalarFieldEnum = (typeof JournalingScalarFieldEnum)[keyof typeof JournalingScalarFieldEnum]


  export const ExecutionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    externalId: 'externalId'
  };

  export type ExecutionScalarFieldEnum = (typeof ExecutionScalarFieldEnum)[keyof typeof ExecutionScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    role: 'role',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    conversationId: 'conversationId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MoodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    text: 'text',
    moodType: 'moodType',
    createdAt: 'createdAt'
  };

  export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const CopingStrategyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    title: 'title',
    description: 'description',
    practiceType: 'practiceType',
    steps: 'steps',
    duration: 'duration',
    difficulty: 'difficulty',
    isSaved: 'isSaved',
    completedCount: 'completedCount',
    rating: 'rating',
    culturalNote: 'culturalNote',
    createdAt: 'createdAt'
  };

  export type CopingStrategyScalarFieldEnum = (typeof CopingStrategyScalarFieldEnum)[keyof typeof CopingStrategyScalarFieldEnum]


  export const PeerStoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    category: 'category',
    tags: 'tags',
    isApproved: 'isApproved',
    isAnonymous: 'isAnonymous',
    supportCount: 'supportCount',
    createdAt: 'createdAt'
  };

  export type PeerStoryScalarFieldEnum = (typeof PeerStoryScalarFieldEnum)[keyof typeof PeerStoryScalarFieldEnum]


  export const StorySupportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storyId: 'storyId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type StorySupportScalarFieldEnum = (typeof StorySupportScalarFieldEnum)[keyof typeof StorySupportScalarFieldEnum]


  export const StoryCommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storyId: 'storyId',
    content: 'content',
    isApproved: 'isApproved',
    createdAt: 'createdAt'
  };

  export type StoryCommentScalarFieldEnum = (typeof StoryCommentScalarFieldEnum)[keyof typeof StoryCommentScalarFieldEnum]


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
   * Reference to a field of type 'MoodType'
   */
  export type EnumMoodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodType'>
    


  /**
   * Reference to a field of type 'MoodType[]'
   */
  export type ListEnumMoodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moods?: MoodListRelationFilter
    executions?: ExecutionListRelationFilter
    journalings?: JournalingListRelationFilter
    copingStrategies?: CopingStrategyListRelationFilter
    peerStories?: PeerStoryListRelationFilter
    storySupports?: StorySupportListRelationFilter
    storyComments?: StoryCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moods?: MoodOrderByRelationAggregateInput
    executions?: ExecutionOrderByRelationAggregateInput
    journalings?: JournalingOrderByRelationAggregateInput
    copingStrategies?: CopingStrategyOrderByRelationAggregateInput
    peerStories?: PeerStoryOrderByRelationAggregateInput
    storySupports?: StorySupportOrderByRelationAggregateInput
    storyComments?: StoryCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moods?: MoodListRelationFilter
    executions?: ExecutionListRelationFilter
    journalings?: JournalingListRelationFilter
    copingStrategies?: CopingStrategyListRelationFilter
    peerStories?: PeerStoryListRelationFilter
    storySupports?: StorySupportListRelationFilter
    storyComments?: StoryCommentListRelationFilter
  }, "id" | "googleId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JournalingWhereInput = {
    AND?: JournalingWhereInput | JournalingWhereInput[]
    OR?: JournalingWhereInput[]
    NOT?: JournalingWhereInput | JournalingWhereInput[]
    id?: StringFilter<"Journaling"> | string
    title?: StringNullableFilter<"Journaling"> | string | null
    content?: StringFilter<"Journaling"> | string
    isPrivate?: BoolFilter<"Journaling"> | boolean
    createdAt?: DateTimeFilter<"Journaling"> | Date | string
    updatedAt?: DateTimeFilter<"Journaling"> | Date | string
    userId?: StringFilter<"Journaling"> | string
    moodType?: EnumMoodTypeNullableFilter<"Journaling"> | $Enums.MoodType | null
    moodScore?: IntNullableFilter<"Journaling"> | number | null
    tags?: StringNullableListFilter<"Journaling">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JournalingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moodType?: SortOrderInput | SortOrder
    moodScore?: SortOrderInput | SortOrder
    tags?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JournalingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JournalingWhereInput | JournalingWhereInput[]
    OR?: JournalingWhereInput[]
    NOT?: JournalingWhereInput | JournalingWhereInput[]
    title?: StringNullableFilter<"Journaling"> | string | null
    content?: StringFilter<"Journaling"> | string
    isPrivate?: BoolFilter<"Journaling"> | boolean
    createdAt?: DateTimeFilter<"Journaling"> | Date | string
    updatedAt?: DateTimeFilter<"Journaling"> | Date | string
    userId?: StringFilter<"Journaling"> | string
    moodType?: EnumMoodTypeNullableFilter<"Journaling"> | $Enums.MoodType | null
    moodScore?: IntNullableFilter<"Journaling"> | number | null
    tags?: StringNullableListFilter<"Journaling">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JournalingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moodType?: SortOrderInput | SortOrder
    moodScore?: SortOrderInput | SortOrder
    tags?: SortOrder
    _count?: JournalingCountOrderByAggregateInput
    _avg?: JournalingAvgOrderByAggregateInput
    _max?: JournalingMaxOrderByAggregateInput
    _min?: JournalingMinOrderByAggregateInput
    _sum?: JournalingSumOrderByAggregateInput
  }

  export type JournalingScalarWhereWithAggregatesInput = {
    AND?: JournalingScalarWhereWithAggregatesInput | JournalingScalarWhereWithAggregatesInput[]
    OR?: JournalingScalarWhereWithAggregatesInput[]
    NOT?: JournalingScalarWhereWithAggregatesInput | JournalingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Journaling"> | string
    title?: StringNullableWithAggregatesFilter<"Journaling"> | string | null
    content?: StringWithAggregatesFilter<"Journaling"> | string
    isPrivate?: BoolWithAggregatesFilter<"Journaling"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Journaling"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journaling"> | Date | string
    userId?: StringWithAggregatesFilter<"Journaling"> | string
    moodType?: EnumMoodTypeNullableWithAggregatesFilter<"Journaling"> | $Enums.MoodType | null
    moodScore?: IntNullableWithAggregatesFilter<"Journaling"> | number | null
    tags?: StringNullableListFilter<"Journaling">
  }

  export type ExecutionWhereInput = {
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    id?: StringFilter<"Execution"> | string
    title?: StringFilter<"Execution"> | string
    type?: StringFilter<"Execution"> | string
    chatId?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
    updatedAt?: DateTimeFilter<"Execution"> | Date | string
    userId?: StringFilter<"Execution"> | string
    externalId?: StringNullableFilter<"Execution"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExecutionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    chatId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    title?: StringFilter<"Execution"> | string
    type?: StringFilter<"Execution"> | string
    chatId?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
    updatedAt?: DateTimeFilter<"Execution"> | Date | string
    userId?: StringFilter<"Execution"> | string
    externalId?: StringNullableFilter<"Execution"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    chatId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    _count?: ExecutionCountOrderByAggregateInput
    _max?: ExecutionMaxOrderByAggregateInput
    _min?: ExecutionMinOrderByAggregateInput
  }

  export type ExecutionScalarWhereWithAggregatesInput = {
    AND?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    OR?: ExecutionScalarWhereWithAggregatesInput[]
    NOT?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Execution"> | string
    title?: StringWithAggregatesFilter<"Execution"> | string
    type?: StringWithAggregatesFilter<"Execution"> | string
    chatId?: StringNullableWithAggregatesFilter<"Execution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Execution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Execution"> | Date | string
    userId?: StringWithAggregatesFilter<"Execution"> | string
    externalId?: StringNullableWithAggregatesFilter<"Execution"> | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    title?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    title?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    conversationId?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    conversationId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    role?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type MoodWhereInput = {
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    id?: StringFilter<"Mood"> | string
    userId?: StringFilter<"Mood"> | string
    text?: StringFilter<"Mood"> | string
    moodType?: StringFilter<"Mood"> | string
    createdAt?: DateTimeFilter<"Mood"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    userId?: StringFilter<"Mood"> | string
    text?: StringFilter<"Mood"> | string
    moodType?: StringFilter<"Mood"> | string
    createdAt?: DateTimeFilter<"Mood"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodType?: SortOrder
    createdAt?: SortOrder
    _count?: MoodCountOrderByAggregateInput
    _max?: MoodMaxOrderByAggregateInput
    _min?: MoodMinOrderByAggregateInput
  }

  export type MoodScalarWhereWithAggregatesInput = {
    AND?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    OR?: MoodScalarWhereWithAggregatesInput[]
    NOT?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mood"> | string
    userId?: StringWithAggregatesFilter<"Mood"> | string
    text?: StringWithAggregatesFilter<"Mood"> | string
    moodType?: StringWithAggregatesFilter<"Mood"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mood"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    name?: StringFilter<"Feedback"> | string
    email?: StringFilter<"Feedback"> | string
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    name?: StringFilter<"Feedback"> | string
    email?: StringFilter<"Feedback"> | string
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    name?: StringWithAggregatesFilter<"Feedback"> | string
    email?: StringWithAggregatesFilter<"Feedback"> | string
    subject?: StringWithAggregatesFilter<"Feedback"> | string
    message?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type CopingStrategyWhereInput = {
    AND?: CopingStrategyWhereInput | CopingStrategyWhereInput[]
    OR?: CopingStrategyWhereInput[]
    NOT?: CopingStrategyWhereInput | CopingStrategyWhereInput[]
    id?: StringFilter<"CopingStrategy"> | string
    userId?: StringFilter<"CopingStrategy"> | string
    category?: StringFilter<"CopingStrategy"> | string
    title?: StringFilter<"CopingStrategy"> | string
    description?: StringFilter<"CopingStrategy"> | string
    practiceType?: StringFilter<"CopingStrategy"> | string
    steps?: StringNullableListFilter<"CopingStrategy">
    duration?: IntFilter<"CopingStrategy"> | number
    difficulty?: StringFilter<"CopingStrategy"> | string
    isSaved?: BoolFilter<"CopingStrategy"> | boolean
    completedCount?: IntFilter<"CopingStrategy"> | number
    rating?: IntNullableFilter<"CopingStrategy"> | number | null
    culturalNote?: StringNullableFilter<"CopingStrategy"> | string | null
    createdAt?: DateTimeFilter<"CopingStrategy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CopingStrategyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    practiceType?: SortOrder
    steps?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    isSaved?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrderInput | SortOrder
    culturalNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CopingStrategyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CopingStrategyWhereInput | CopingStrategyWhereInput[]
    OR?: CopingStrategyWhereInput[]
    NOT?: CopingStrategyWhereInput | CopingStrategyWhereInput[]
    userId?: StringFilter<"CopingStrategy"> | string
    category?: StringFilter<"CopingStrategy"> | string
    title?: StringFilter<"CopingStrategy"> | string
    description?: StringFilter<"CopingStrategy"> | string
    practiceType?: StringFilter<"CopingStrategy"> | string
    steps?: StringNullableListFilter<"CopingStrategy">
    duration?: IntFilter<"CopingStrategy"> | number
    difficulty?: StringFilter<"CopingStrategy"> | string
    isSaved?: BoolFilter<"CopingStrategy"> | boolean
    completedCount?: IntFilter<"CopingStrategy"> | number
    rating?: IntNullableFilter<"CopingStrategy"> | number | null
    culturalNote?: StringNullableFilter<"CopingStrategy"> | string | null
    createdAt?: DateTimeFilter<"CopingStrategy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CopingStrategyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    practiceType?: SortOrder
    steps?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    isSaved?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrderInput | SortOrder
    culturalNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CopingStrategyCountOrderByAggregateInput
    _avg?: CopingStrategyAvgOrderByAggregateInput
    _max?: CopingStrategyMaxOrderByAggregateInput
    _min?: CopingStrategyMinOrderByAggregateInput
    _sum?: CopingStrategySumOrderByAggregateInput
  }

  export type CopingStrategyScalarWhereWithAggregatesInput = {
    AND?: CopingStrategyScalarWhereWithAggregatesInput | CopingStrategyScalarWhereWithAggregatesInput[]
    OR?: CopingStrategyScalarWhereWithAggregatesInput[]
    NOT?: CopingStrategyScalarWhereWithAggregatesInput | CopingStrategyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CopingStrategy"> | string
    userId?: StringWithAggregatesFilter<"CopingStrategy"> | string
    category?: StringWithAggregatesFilter<"CopingStrategy"> | string
    title?: StringWithAggregatesFilter<"CopingStrategy"> | string
    description?: StringWithAggregatesFilter<"CopingStrategy"> | string
    practiceType?: StringWithAggregatesFilter<"CopingStrategy"> | string
    steps?: StringNullableListFilter<"CopingStrategy">
    duration?: IntWithAggregatesFilter<"CopingStrategy"> | number
    difficulty?: StringWithAggregatesFilter<"CopingStrategy"> | string
    isSaved?: BoolWithAggregatesFilter<"CopingStrategy"> | boolean
    completedCount?: IntWithAggregatesFilter<"CopingStrategy"> | number
    rating?: IntNullableWithAggregatesFilter<"CopingStrategy"> | number | null
    culturalNote?: StringNullableWithAggregatesFilter<"CopingStrategy"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CopingStrategy"> | Date | string
  }

  export type PeerStoryWhereInput = {
    AND?: PeerStoryWhereInput | PeerStoryWhereInput[]
    OR?: PeerStoryWhereInput[]
    NOT?: PeerStoryWhereInput | PeerStoryWhereInput[]
    id?: StringFilter<"PeerStory"> | string
    userId?: StringFilter<"PeerStory"> | string
    title?: StringFilter<"PeerStory"> | string
    content?: StringFilter<"PeerStory"> | string
    category?: StringFilter<"PeerStory"> | string
    tags?: StringNullableListFilter<"PeerStory">
    isApproved?: BoolFilter<"PeerStory"> | boolean
    isAnonymous?: BoolFilter<"PeerStory"> | boolean
    supportCount?: IntFilter<"PeerStory"> | number
    createdAt?: DateTimeFilter<"PeerStory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    supports?: StorySupportListRelationFilter
    comments?: StoryCommentListRelationFilter
  }

  export type PeerStoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isApproved?: SortOrder
    isAnonymous?: SortOrder
    supportCount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    supports?: StorySupportOrderByRelationAggregateInput
    comments?: StoryCommentOrderByRelationAggregateInput
  }

  export type PeerStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PeerStoryWhereInput | PeerStoryWhereInput[]
    OR?: PeerStoryWhereInput[]
    NOT?: PeerStoryWhereInput | PeerStoryWhereInput[]
    userId?: StringFilter<"PeerStory"> | string
    title?: StringFilter<"PeerStory"> | string
    content?: StringFilter<"PeerStory"> | string
    category?: StringFilter<"PeerStory"> | string
    tags?: StringNullableListFilter<"PeerStory">
    isApproved?: BoolFilter<"PeerStory"> | boolean
    isAnonymous?: BoolFilter<"PeerStory"> | boolean
    supportCount?: IntFilter<"PeerStory"> | number
    createdAt?: DateTimeFilter<"PeerStory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    supports?: StorySupportListRelationFilter
    comments?: StoryCommentListRelationFilter
  }, "id">

  export type PeerStoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isApproved?: SortOrder
    isAnonymous?: SortOrder
    supportCount?: SortOrder
    createdAt?: SortOrder
    _count?: PeerStoryCountOrderByAggregateInput
    _avg?: PeerStoryAvgOrderByAggregateInput
    _max?: PeerStoryMaxOrderByAggregateInput
    _min?: PeerStoryMinOrderByAggregateInput
    _sum?: PeerStorySumOrderByAggregateInput
  }

  export type PeerStoryScalarWhereWithAggregatesInput = {
    AND?: PeerStoryScalarWhereWithAggregatesInput | PeerStoryScalarWhereWithAggregatesInput[]
    OR?: PeerStoryScalarWhereWithAggregatesInput[]
    NOT?: PeerStoryScalarWhereWithAggregatesInput | PeerStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PeerStory"> | string
    userId?: StringWithAggregatesFilter<"PeerStory"> | string
    title?: StringWithAggregatesFilter<"PeerStory"> | string
    content?: StringWithAggregatesFilter<"PeerStory"> | string
    category?: StringWithAggregatesFilter<"PeerStory"> | string
    tags?: StringNullableListFilter<"PeerStory">
    isApproved?: BoolWithAggregatesFilter<"PeerStory"> | boolean
    isAnonymous?: BoolWithAggregatesFilter<"PeerStory"> | boolean
    supportCount?: IntWithAggregatesFilter<"PeerStory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PeerStory"> | Date | string
  }

  export type StorySupportWhereInput = {
    AND?: StorySupportWhereInput | StorySupportWhereInput[]
    OR?: StorySupportWhereInput[]
    NOT?: StorySupportWhereInput | StorySupportWhereInput[]
    id?: StringFilter<"StorySupport"> | string
    userId?: StringFilter<"StorySupport"> | string
    storyId?: StringFilter<"StorySupport"> | string
    type?: StringFilter<"StorySupport"> | string
    createdAt?: DateTimeFilter<"StorySupport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    story?: XOR<PeerStoryScalarRelationFilter, PeerStoryWhereInput>
  }

  export type StorySupportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    story?: PeerStoryOrderByWithRelationInput
  }

  export type StorySupportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_storyId?: StorySupportUserIdStoryIdCompoundUniqueInput
    AND?: StorySupportWhereInput | StorySupportWhereInput[]
    OR?: StorySupportWhereInput[]
    NOT?: StorySupportWhereInput | StorySupportWhereInput[]
    userId?: StringFilter<"StorySupport"> | string
    storyId?: StringFilter<"StorySupport"> | string
    type?: StringFilter<"StorySupport"> | string
    createdAt?: DateTimeFilter<"StorySupport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    story?: XOR<PeerStoryScalarRelationFilter, PeerStoryWhereInput>
  }, "id" | "userId_storyId">

  export type StorySupportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: StorySupportCountOrderByAggregateInput
    _max?: StorySupportMaxOrderByAggregateInput
    _min?: StorySupportMinOrderByAggregateInput
  }

  export type StorySupportScalarWhereWithAggregatesInput = {
    AND?: StorySupportScalarWhereWithAggregatesInput | StorySupportScalarWhereWithAggregatesInput[]
    OR?: StorySupportScalarWhereWithAggregatesInput[]
    NOT?: StorySupportScalarWhereWithAggregatesInput | StorySupportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorySupport"> | string
    userId?: StringWithAggregatesFilter<"StorySupport"> | string
    storyId?: StringWithAggregatesFilter<"StorySupport"> | string
    type?: StringWithAggregatesFilter<"StorySupport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StorySupport"> | Date | string
  }

  export type StoryCommentWhereInput = {
    AND?: StoryCommentWhereInput | StoryCommentWhereInput[]
    OR?: StoryCommentWhereInput[]
    NOT?: StoryCommentWhereInput | StoryCommentWhereInput[]
    id?: StringFilter<"StoryComment"> | string
    userId?: StringFilter<"StoryComment"> | string
    storyId?: StringFilter<"StoryComment"> | string
    content?: StringFilter<"StoryComment"> | string
    isApproved?: BoolFilter<"StoryComment"> | boolean
    createdAt?: DateTimeFilter<"StoryComment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    story?: XOR<PeerStoryScalarRelationFilter, PeerStoryWhereInput>
  }

  export type StoryCommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    story?: PeerStoryOrderByWithRelationInput
  }

  export type StoryCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryCommentWhereInput | StoryCommentWhereInput[]
    OR?: StoryCommentWhereInput[]
    NOT?: StoryCommentWhereInput | StoryCommentWhereInput[]
    userId?: StringFilter<"StoryComment"> | string
    storyId?: StringFilter<"StoryComment"> | string
    content?: StringFilter<"StoryComment"> | string
    isApproved?: BoolFilter<"StoryComment"> | boolean
    createdAt?: DateTimeFilter<"StoryComment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    story?: XOR<PeerStoryScalarRelationFilter, PeerStoryWhereInput>
  }, "id">

  export type StoryCommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    _count?: StoryCommentCountOrderByAggregateInput
    _max?: StoryCommentMaxOrderByAggregateInput
    _min?: StoryCommentMinOrderByAggregateInput
  }

  export type StoryCommentScalarWhereWithAggregatesInput = {
    AND?: StoryCommentScalarWhereWithAggregatesInput | StoryCommentScalarWhereWithAggregatesInput[]
    OR?: StoryCommentScalarWhereWithAggregatesInput[]
    NOT?: StoryCommentScalarWhereWithAggregatesInput | StoryCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoryComment"> | string
    userId?: StringWithAggregatesFilter<"StoryComment"> | string
    storyId?: StringWithAggregatesFilter<"StoryComment"> | string
    content?: StringWithAggregatesFilter<"StoryComment"> | string
    isApproved?: BoolWithAggregatesFilter<"StoryComment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StoryComment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalingCreateInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
    user: UserCreateNestedOneWithoutJournalingsInput
  }

  export type JournalingUncheckedCreateInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
  }

  export type JournalingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
    user?: UserUpdateOneRequiredWithoutJournalingsNestedInput
  }

  export type JournalingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type JournalingCreateManyInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
  }

  export type JournalingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type JournalingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type ExecutionCreateInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    externalId?: string | null
    user: UserCreateNestedOneWithoutExecutionsInput
  }

  export type ExecutionUncheckedCreateInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    externalId?: string | null
  }

  export type ExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type ExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionCreateManyInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    externalId?: string | null
  }

  export type ExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationCreateInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
    conversationId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
    conversationId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodCreateInput = {
    id?: string
    text: string
    moodType: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMoodsInput
  }

  export type MoodUncheckedCreateInput = {
    id?: string
    userId: string
    text: string
    moodType: string
    createdAt?: Date | string
  }

  export type MoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoodsNestedInput
  }

  export type MoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCreateManyInput = {
    id?: string
    userId: string
    text: string
    moodType: string
    createdAt?: Date | string
  }

  export type MoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopingStrategyCreateInput = {
    id?: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCopingStrategiesInput
  }

  export type CopingStrategyUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
  }

  export type CopingStrategyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCopingStrategiesNestedInput
  }

  export type CopingStrategyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopingStrategyCreateManyInput = {
    id?: string
    userId: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
  }

  export type CopingStrategyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopingStrategyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerStoryCreateInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPeerStoriesInput
    supports?: StorySupportCreateNestedManyWithoutStoryInput
    comments?: StoryCommentCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    supports?: StorySupportUncheckedCreateNestedManyWithoutStoryInput
    comments?: StoryCommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeerStoriesNestedInput
    supports?: StorySupportUpdateManyWithoutStoryNestedInput
    comments?: StoryCommentUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supports?: StorySupportUncheckedUpdateManyWithoutStoryNestedInput
    comments?: StoryCommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
  }

  export type PeerStoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerStoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportCreateInput = {
    id?: string
    type?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStorySupportsInput
    story: PeerStoryCreateNestedOneWithoutSupportsInput
  }

  export type StorySupportUncheckedCreateInput = {
    id?: string
    userId: string
    storyId: string
    type?: string
    createdAt?: Date | string
  }

  export type StorySupportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStorySupportsNestedInput
    story?: PeerStoryUpdateOneRequiredWithoutSupportsNestedInput
  }

  export type StorySupportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportCreateManyInput = {
    id?: string
    userId: string
    storyId: string
    type?: string
    createdAt?: Date | string
  }

  export type StorySupportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentCreateInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStoryCommentsInput
    story: PeerStoryCreateNestedOneWithoutCommentsInput
  }

  export type StoryCommentUncheckedCreateInput = {
    id?: string
    userId: string
    storyId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type StoryCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoryCommentsNestedInput
    story?: PeerStoryUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type StoryCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentCreateManyInput = {
    id?: string
    userId: string
    storyId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type StoryCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MoodListRelationFilter = {
    every?: MoodWhereInput
    some?: MoodWhereInput
    none?: MoodWhereInput
  }

  export type ExecutionListRelationFilter = {
    every?: ExecutionWhereInput
    some?: ExecutionWhereInput
    none?: ExecutionWhereInput
  }

  export type JournalingListRelationFilter = {
    every?: JournalingWhereInput
    some?: JournalingWhereInput
    none?: JournalingWhereInput
  }

  export type CopingStrategyListRelationFilter = {
    every?: CopingStrategyWhereInput
    some?: CopingStrategyWhereInput
    none?: CopingStrategyWhereInput
  }

  export type PeerStoryListRelationFilter = {
    every?: PeerStoryWhereInput
    some?: PeerStoryWhereInput
    none?: PeerStoryWhereInput
  }

  export type StorySupportListRelationFilter = {
    every?: StorySupportWhereInput
    some?: StorySupportWhereInput
    none?: StorySupportWhereInput
  }

  export type StoryCommentListRelationFilter = {
    every?: StoryCommentWhereInput
    some?: StoryCommentWhereInput
    none?: StoryCommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CopingStrategyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeerStoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorySupportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumMoodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodType | EnumMoodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMoodTypeNullableFilter<$PrismaModel> | $Enums.MoodType | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JournalingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moodType?: SortOrder
    moodScore?: SortOrder
    tags?: SortOrder
  }

  export type JournalingAvgOrderByAggregateInput = {
    moodScore?: SortOrder
  }

  export type JournalingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moodType?: SortOrder
    moodScore?: SortOrder
  }

  export type JournalingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moodType?: SortOrder
    moodScore?: SortOrder
  }

  export type JournalingSumOrderByAggregateInput = {
    moodScore?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMoodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodType | EnumMoodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMoodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MoodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMoodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMoodTypeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    externalId?: SortOrder
  }

  export type ExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    externalId?: SortOrder
  }

  export type ExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    externalId?: SortOrder
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    conversationId?: SortOrder
  }

  export type MoodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodType?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodType?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    text?: SortOrder
    moodType?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
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

  export type CopingStrategyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    practiceType?: SortOrder
    steps?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    isSaved?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrder
    culturalNote?: SortOrder
    createdAt?: SortOrder
  }

  export type CopingStrategyAvgOrderByAggregateInput = {
    duration?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrder
  }

  export type CopingStrategyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    practiceType?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    isSaved?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrder
    culturalNote?: SortOrder
    createdAt?: SortOrder
  }

  export type CopingStrategyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    practiceType?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    isSaved?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrder
    culturalNote?: SortOrder
    createdAt?: SortOrder
  }

  export type CopingStrategySumOrderByAggregateInput = {
    duration?: SortOrder
    completedCount?: SortOrder
    rating?: SortOrder
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

  export type PeerStoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isApproved?: SortOrder
    isAnonymous?: SortOrder
    supportCount?: SortOrder
    createdAt?: SortOrder
  }

  export type PeerStoryAvgOrderByAggregateInput = {
    supportCount?: SortOrder
  }

  export type PeerStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isApproved?: SortOrder
    isAnonymous?: SortOrder
    supportCount?: SortOrder
    createdAt?: SortOrder
  }

  export type PeerStoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isApproved?: SortOrder
    isAnonymous?: SortOrder
    supportCount?: SortOrder
    createdAt?: SortOrder
  }

  export type PeerStorySumOrderByAggregateInput = {
    supportCount?: SortOrder
  }

  export type PeerStoryScalarRelationFilter = {
    is?: PeerStoryWhereInput
    isNot?: PeerStoryWhereInput
  }

  export type StorySupportUserIdStoryIdCompoundUniqueInput = {
    userId: string
    storyId: string
  }

  export type StorySupportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type StorySupportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type StorySupportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryCommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryCommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type ExecutionCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput> | ExecutionCreateWithoutUserInput[] | ExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutUserInput | ExecutionCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionCreateManyUserInputEnvelope
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type JournalingCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput> | JournalingCreateWithoutUserInput[] | JournalingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalingCreateOrConnectWithoutUserInput | JournalingCreateOrConnectWithoutUserInput[]
    createMany?: JournalingCreateManyUserInputEnvelope
    connect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
  }

  export type CopingStrategyCreateNestedManyWithoutUserInput = {
    create?: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput> | CopingStrategyCreateWithoutUserInput[] | CopingStrategyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CopingStrategyCreateOrConnectWithoutUserInput | CopingStrategyCreateOrConnectWithoutUserInput[]
    createMany?: CopingStrategyCreateManyUserInputEnvelope
    connect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
  }

  export type PeerStoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput> | PeerStoryCreateWithoutUserInput[] | PeerStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeerStoryCreateOrConnectWithoutUserInput | PeerStoryCreateOrConnectWithoutUserInput[]
    createMany?: PeerStoryCreateManyUserInputEnvelope
    connect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
  }

  export type StorySupportCreateNestedManyWithoutUserInput = {
    create?: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput> | StorySupportCreateWithoutUserInput[] | StorySupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutUserInput | StorySupportCreateOrConnectWithoutUserInput[]
    createMany?: StorySupportCreateManyUserInputEnvelope
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
  }

  export type StoryCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput> | StoryCommentCreateWithoutUserInput[] | StoryCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutUserInput | StoryCommentCreateOrConnectWithoutUserInput[]
    createMany?: StoryCommentCreateManyUserInputEnvelope
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
  }

  export type MoodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type ExecutionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput> | ExecutionCreateWithoutUserInput[] | ExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutUserInput | ExecutionCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionCreateManyUserInputEnvelope
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type JournalingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput> | JournalingCreateWithoutUserInput[] | JournalingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalingCreateOrConnectWithoutUserInput | JournalingCreateOrConnectWithoutUserInput[]
    createMany?: JournalingCreateManyUserInputEnvelope
    connect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
  }

  export type CopingStrategyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput> | CopingStrategyCreateWithoutUserInput[] | CopingStrategyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CopingStrategyCreateOrConnectWithoutUserInput | CopingStrategyCreateOrConnectWithoutUserInput[]
    createMany?: CopingStrategyCreateManyUserInputEnvelope
    connect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
  }

  export type PeerStoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput> | PeerStoryCreateWithoutUserInput[] | PeerStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeerStoryCreateOrConnectWithoutUserInput | PeerStoryCreateOrConnectWithoutUserInput[]
    createMany?: PeerStoryCreateManyUserInputEnvelope
    connect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
  }

  export type StorySupportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput> | StorySupportCreateWithoutUserInput[] | StorySupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutUserInput | StorySupportCreateOrConnectWithoutUserInput[]
    createMany?: StorySupportCreateManyUserInputEnvelope
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
  }

  export type StoryCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput> | StoryCommentCreateWithoutUserInput[] | StoryCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutUserInput | StoryCommentCreateOrConnectWithoutUserInput[]
    createMany?: StoryCommentCreateManyUserInputEnvelope
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoodUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutUserInput | MoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutUserInput | MoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutUserInput | MoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type ExecutionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput> | ExecutionCreateWithoutUserInput[] | ExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutUserInput | ExecutionCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutUserInput | ExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionCreateManyUserInputEnvelope
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutUserInput | ExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutUserInput | ExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type JournalingUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput> | JournalingCreateWithoutUserInput[] | JournalingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalingCreateOrConnectWithoutUserInput | JournalingCreateOrConnectWithoutUserInput[]
    upsert?: JournalingUpsertWithWhereUniqueWithoutUserInput | JournalingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalingCreateManyUserInputEnvelope
    set?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    disconnect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    delete?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    connect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    update?: JournalingUpdateWithWhereUniqueWithoutUserInput | JournalingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalingUpdateManyWithWhereWithoutUserInput | JournalingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalingScalarWhereInput | JournalingScalarWhereInput[]
  }

  export type CopingStrategyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput> | CopingStrategyCreateWithoutUserInput[] | CopingStrategyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CopingStrategyCreateOrConnectWithoutUserInput | CopingStrategyCreateOrConnectWithoutUserInput[]
    upsert?: CopingStrategyUpsertWithWhereUniqueWithoutUserInput | CopingStrategyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CopingStrategyCreateManyUserInputEnvelope
    set?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    disconnect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    delete?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    connect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    update?: CopingStrategyUpdateWithWhereUniqueWithoutUserInput | CopingStrategyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CopingStrategyUpdateManyWithWhereWithoutUserInput | CopingStrategyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CopingStrategyScalarWhereInput | CopingStrategyScalarWhereInput[]
  }

  export type PeerStoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput> | PeerStoryCreateWithoutUserInput[] | PeerStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeerStoryCreateOrConnectWithoutUserInput | PeerStoryCreateOrConnectWithoutUserInput[]
    upsert?: PeerStoryUpsertWithWhereUniqueWithoutUserInput | PeerStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeerStoryCreateManyUserInputEnvelope
    set?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    disconnect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    delete?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    connect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    update?: PeerStoryUpdateWithWhereUniqueWithoutUserInput | PeerStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeerStoryUpdateManyWithWhereWithoutUserInput | PeerStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeerStoryScalarWhereInput | PeerStoryScalarWhereInput[]
  }

  export type StorySupportUpdateManyWithoutUserNestedInput = {
    create?: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput> | StorySupportCreateWithoutUserInput[] | StorySupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutUserInput | StorySupportCreateOrConnectWithoutUserInput[]
    upsert?: StorySupportUpsertWithWhereUniqueWithoutUserInput | StorySupportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StorySupportCreateManyUserInputEnvelope
    set?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    disconnect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    delete?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    update?: StorySupportUpdateWithWhereUniqueWithoutUserInput | StorySupportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StorySupportUpdateManyWithWhereWithoutUserInput | StorySupportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
  }

  export type StoryCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput> | StoryCommentCreateWithoutUserInput[] | StoryCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutUserInput | StoryCommentCreateOrConnectWithoutUserInput[]
    upsert?: StoryCommentUpsertWithWhereUniqueWithoutUserInput | StoryCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCommentCreateManyUserInputEnvelope
    set?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    disconnect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    delete?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    update?: StoryCommentUpdateWithWhereUniqueWithoutUserInput | StoryCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryCommentUpdateManyWithWhereWithoutUserInput | StoryCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
  }

  export type MoodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutUserInput | MoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutUserInput | MoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutUserInput | MoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type ExecutionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput> | ExecutionCreateWithoutUserInput[] | ExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutUserInput | ExecutionCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutUserInput | ExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionCreateManyUserInputEnvelope
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutUserInput | ExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutUserInput | ExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type JournalingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput> | JournalingCreateWithoutUserInput[] | JournalingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalingCreateOrConnectWithoutUserInput | JournalingCreateOrConnectWithoutUserInput[]
    upsert?: JournalingUpsertWithWhereUniqueWithoutUserInput | JournalingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalingCreateManyUserInputEnvelope
    set?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    disconnect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    delete?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    connect?: JournalingWhereUniqueInput | JournalingWhereUniqueInput[]
    update?: JournalingUpdateWithWhereUniqueWithoutUserInput | JournalingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalingUpdateManyWithWhereWithoutUserInput | JournalingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalingScalarWhereInput | JournalingScalarWhereInput[]
  }

  export type CopingStrategyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput> | CopingStrategyCreateWithoutUserInput[] | CopingStrategyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CopingStrategyCreateOrConnectWithoutUserInput | CopingStrategyCreateOrConnectWithoutUserInput[]
    upsert?: CopingStrategyUpsertWithWhereUniqueWithoutUserInput | CopingStrategyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CopingStrategyCreateManyUserInputEnvelope
    set?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    disconnect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    delete?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    connect?: CopingStrategyWhereUniqueInput | CopingStrategyWhereUniqueInput[]
    update?: CopingStrategyUpdateWithWhereUniqueWithoutUserInput | CopingStrategyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CopingStrategyUpdateManyWithWhereWithoutUserInput | CopingStrategyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CopingStrategyScalarWhereInput | CopingStrategyScalarWhereInput[]
  }

  export type PeerStoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput> | PeerStoryCreateWithoutUserInput[] | PeerStoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeerStoryCreateOrConnectWithoutUserInput | PeerStoryCreateOrConnectWithoutUserInput[]
    upsert?: PeerStoryUpsertWithWhereUniqueWithoutUserInput | PeerStoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeerStoryCreateManyUserInputEnvelope
    set?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    disconnect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    delete?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    connect?: PeerStoryWhereUniqueInput | PeerStoryWhereUniqueInput[]
    update?: PeerStoryUpdateWithWhereUniqueWithoutUserInput | PeerStoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeerStoryUpdateManyWithWhereWithoutUserInput | PeerStoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeerStoryScalarWhereInput | PeerStoryScalarWhereInput[]
  }

  export type StorySupportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput> | StorySupportCreateWithoutUserInput[] | StorySupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutUserInput | StorySupportCreateOrConnectWithoutUserInput[]
    upsert?: StorySupportUpsertWithWhereUniqueWithoutUserInput | StorySupportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StorySupportCreateManyUserInputEnvelope
    set?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    disconnect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    delete?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    update?: StorySupportUpdateWithWhereUniqueWithoutUserInput | StorySupportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StorySupportUpdateManyWithWhereWithoutUserInput | StorySupportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
  }

  export type StoryCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput> | StoryCommentCreateWithoutUserInput[] | StoryCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutUserInput | StoryCommentCreateOrConnectWithoutUserInput[]
    upsert?: StoryCommentUpsertWithWhereUniqueWithoutUserInput | StoryCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCommentCreateManyUserInputEnvelope
    set?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    disconnect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    delete?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    update?: StoryCommentUpdateWithWhereUniqueWithoutUserInput | StoryCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryCommentUpdateManyWithWhereWithoutUserInput | StoryCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
  }

  export type JournalingCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutJournalingsInput = {
    create?: XOR<UserCreateWithoutJournalingsInput, UserUncheckedCreateWithoutJournalingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumMoodTypeFieldUpdateOperationsInput = {
    set?: $Enums.MoodType | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JournalingUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutJournalingsNestedInput = {
    create?: XOR<UserCreateWithoutJournalingsInput, UserUncheckedCreateWithoutJournalingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalingsInput
    upsert?: UserUpsertWithoutJournalingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJournalingsInput, UserUpdateWithoutJournalingsInput>, UserUncheckedUpdateWithoutJournalingsInput>
  }

  export type UserCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<UserCreateWithoutExecutionsInput, UserUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExecutionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<UserCreateWithoutExecutionsInput, UserUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExecutionsInput
    upsert?: UserUpsertWithoutExecutionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExecutionsInput, UserUpdateWithoutExecutionsInput>, UserUncheckedUpdateWithoutExecutionsInput>
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMoodsInput = {
    create?: XOR<UserCreateWithoutMoodsInput, UserUncheckedCreateWithoutMoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMoodsNestedInput = {
    create?: XOR<UserCreateWithoutMoodsInput, UserUncheckedCreateWithoutMoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodsInput
    upsert?: UserUpsertWithoutMoodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodsInput, UserUpdateWithoutMoodsInput>, UserUncheckedUpdateWithoutMoodsInput>
  }

  export type CopingStrategyCreatestepsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCopingStrategiesInput = {
    create?: XOR<UserCreateWithoutCopingStrategiesInput, UserUncheckedCreateWithoutCopingStrategiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCopingStrategiesInput
    connect?: UserWhereUniqueInput
  }

  export type CopingStrategyUpdatestepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCopingStrategiesNestedInput = {
    create?: XOR<UserCreateWithoutCopingStrategiesInput, UserUncheckedCreateWithoutCopingStrategiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCopingStrategiesInput
    upsert?: UserUpsertWithoutCopingStrategiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCopingStrategiesInput, UserUpdateWithoutCopingStrategiesInput>, UserUncheckedUpdateWithoutCopingStrategiesInput>
  }

  export type PeerStoryCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPeerStoriesInput = {
    create?: XOR<UserCreateWithoutPeerStoriesInput, UserUncheckedCreateWithoutPeerStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeerStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type StorySupportCreateNestedManyWithoutStoryInput = {
    create?: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput> | StorySupportCreateWithoutStoryInput[] | StorySupportUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutStoryInput | StorySupportCreateOrConnectWithoutStoryInput[]
    createMany?: StorySupportCreateManyStoryInputEnvelope
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
  }

  export type StoryCommentCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput> | StoryCommentCreateWithoutStoryInput[] | StoryCommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutStoryInput | StoryCommentCreateOrConnectWithoutStoryInput[]
    createMany?: StoryCommentCreateManyStoryInputEnvelope
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
  }

  export type StorySupportUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput> | StorySupportCreateWithoutStoryInput[] | StorySupportUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutStoryInput | StorySupportCreateOrConnectWithoutStoryInput[]
    createMany?: StorySupportCreateManyStoryInputEnvelope
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
  }

  export type StoryCommentUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput> | StoryCommentCreateWithoutStoryInput[] | StoryCommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutStoryInput | StoryCommentCreateOrConnectWithoutStoryInput[]
    createMany?: StoryCommentCreateManyStoryInputEnvelope
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
  }

  export type PeerStoryUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPeerStoriesNestedInput = {
    create?: XOR<UserCreateWithoutPeerStoriesInput, UserUncheckedCreateWithoutPeerStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeerStoriesInput
    upsert?: UserUpsertWithoutPeerStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPeerStoriesInput, UserUpdateWithoutPeerStoriesInput>, UserUncheckedUpdateWithoutPeerStoriesInput>
  }

  export type StorySupportUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput> | StorySupportCreateWithoutStoryInput[] | StorySupportUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutStoryInput | StorySupportCreateOrConnectWithoutStoryInput[]
    upsert?: StorySupportUpsertWithWhereUniqueWithoutStoryInput | StorySupportUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StorySupportCreateManyStoryInputEnvelope
    set?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    disconnect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    delete?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    update?: StorySupportUpdateWithWhereUniqueWithoutStoryInput | StorySupportUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StorySupportUpdateManyWithWhereWithoutStoryInput | StorySupportUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
  }

  export type StoryCommentUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput> | StoryCommentCreateWithoutStoryInput[] | StoryCommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutStoryInput | StoryCommentCreateOrConnectWithoutStoryInput[]
    upsert?: StoryCommentUpsertWithWhereUniqueWithoutStoryInput | StoryCommentUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryCommentCreateManyStoryInputEnvelope
    set?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    disconnect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    delete?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    update?: StoryCommentUpdateWithWhereUniqueWithoutStoryInput | StoryCommentUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryCommentUpdateManyWithWhereWithoutStoryInput | StoryCommentUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
  }

  export type StorySupportUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput> | StorySupportCreateWithoutStoryInput[] | StorySupportUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySupportCreateOrConnectWithoutStoryInput | StorySupportCreateOrConnectWithoutStoryInput[]
    upsert?: StorySupportUpsertWithWhereUniqueWithoutStoryInput | StorySupportUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StorySupportCreateManyStoryInputEnvelope
    set?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    disconnect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    delete?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    connect?: StorySupportWhereUniqueInput | StorySupportWhereUniqueInput[]
    update?: StorySupportUpdateWithWhereUniqueWithoutStoryInput | StorySupportUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StorySupportUpdateManyWithWhereWithoutStoryInput | StorySupportUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
  }

  export type StoryCommentUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput> | StoryCommentCreateWithoutStoryInput[] | StoryCommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StoryCommentCreateOrConnectWithoutStoryInput | StoryCommentCreateOrConnectWithoutStoryInput[]
    upsert?: StoryCommentUpsertWithWhereUniqueWithoutStoryInput | StoryCommentUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StoryCommentCreateManyStoryInputEnvelope
    set?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    disconnect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    delete?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    connect?: StoryCommentWhereUniqueInput | StoryCommentWhereUniqueInput[]
    update?: StoryCommentUpdateWithWhereUniqueWithoutStoryInput | StoryCommentUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StoryCommentUpdateManyWithWhereWithoutStoryInput | StoryCommentUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStorySupportsInput = {
    create?: XOR<UserCreateWithoutStorySupportsInput, UserUncheckedCreateWithoutStorySupportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorySupportsInput
    connect?: UserWhereUniqueInput
  }

  export type PeerStoryCreateNestedOneWithoutSupportsInput = {
    create?: XOR<PeerStoryCreateWithoutSupportsInput, PeerStoryUncheckedCreateWithoutSupportsInput>
    connectOrCreate?: PeerStoryCreateOrConnectWithoutSupportsInput
    connect?: PeerStoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStorySupportsNestedInput = {
    create?: XOR<UserCreateWithoutStorySupportsInput, UserUncheckedCreateWithoutStorySupportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorySupportsInput
    upsert?: UserUpsertWithoutStorySupportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStorySupportsInput, UserUpdateWithoutStorySupportsInput>, UserUncheckedUpdateWithoutStorySupportsInput>
  }

  export type PeerStoryUpdateOneRequiredWithoutSupportsNestedInput = {
    create?: XOR<PeerStoryCreateWithoutSupportsInput, PeerStoryUncheckedCreateWithoutSupportsInput>
    connectOrCreate?: PeerStoryCreateOrConnectWithoutSupportsInput
    upsert?: PeerStoryUpsertWithoutSupportsInput
    connect?: PeerStoryWhereUniqueInput
    update?: XOR<XOR<PeerStoryUpdateToOneWithWhereWithoutSupportsInput, PeerStoryUpdateWithoutSupportsInput>, PeerStoryUncheckedUpdateWithoutSupportsInput>
  }

  export type UserCreateNestedOneWithoutStoryCommentsInput = {
    create?: XOR<UserCreateWithoutStoryCommentsInput, UserUncheckedCreateWithoutStoryCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoryCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PeerStoryCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PeerStoryCreateWithoutCommentsInput, PeerStoryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PeerStoryCreateOrConnectWithoutCommentsInput
    connect?: PeerStoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStoryCommentsNestedInput = {
    create?: XOR<UserCreateWithoutStoryCommentsInput, UserUncheckedCreateWithoutStoryCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoryCommentsInput
    upsert?: UserUpsertWithoutStoryCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoryCommentsInput, UserUpdateWithoutStoryCommentsInput>, UserUncheckedUpdateWithoutStoryCommentsInput>
  }

  export type PeerStoryUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PeerStoryCreateWithoutCommentsInput, PeerStoryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PeerStoryCreateOrConnectWithoutCommentsInput
    upsert?: PeerStoryUpsertWithoutCommentsInput
    connect?: PeerStoryWhereUniqueInput
    update?: XOR<XOR<PeerStoryUpdateToOneWithWhereWithoutCommentsInput, PeerStoryUpdateWithoutCommentsInput>, PeerStoryUncheckedUpdateWithoutCommentsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMoodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodType | EnumMoodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMoodTypeNullableFilter<$PrismaModel> | $Enums.MoodType | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMoodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoodType | EnumMoodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MoodType[] | ListEnumMoodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMoodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MoodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMoodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMoodTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type MoodCreateWithoutUserInput = {
    id?: string
    text: string
    moodType: string
    createdAt?: Date | string
  }

  export type MoodUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    moodType: string
    createdAt?: Date | string
  }

  export type MoodCreateOrConnectWithoutUserInput = {
    where: MoodWhereUniqueInput
    create: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput>
  }

  export type MoodCreateManyUserInputEnvelope = {
    data: MoodCreateManyUserInput | MoodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionCreateWithoutUserInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    externalId?: string | null
  }

  export type ExecutionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    externalId?: string | null
  }

  export type ExecutionCreateOrConnectWithoutUserInput = {
    where: ExecutionWhereUniqueInput
    create: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput>
  }

  export type ExecutionCreateManyUserInputEnvelope = {
    data: ExecutionCreateManyUserInput | ExecutionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JournalingCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
  }

  export type JournalingUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
  }

  export type JournalingCreateOrConnectWithoutUserInput = {
    where: JournalingWhereUniqueInput
    create: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput>
  }

  export type JournalingCreateManyUserInputEnvelope = {
    data: JournalingCreateManyUserInput | JournalingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CopingStrategyCreateWithoutUserInput = {
    id?: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
  }

  export type CopingStrategyUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
  }

  export type CopingStrategyCreateOrConnectWithoutUserInput = {
    where: CopingStrategyWhereUniqueInput
    create: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput>
  }

  export type CopingStrategyCreateManyUserInputEnvelope = {
    data: CopingStrategyCreateManyUserInput | CopingStrategyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PeerStoryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    supports?: StorySupportCreateNestedManyWithoutStoryInput
    comments?: StoryCommentCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    supports?: StorySupportUncheckedCreateNestedManyWithoutStoryInput
    comments?: StoryCommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryCreateOrConnectWithoutUserInput = {
    where: PeerStoryWhereUniqueInput
    create: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput>
  }

  export type PeerStoryCreateManyUserInputEnvelope = {
    data: PeerStoryCreateManyUserInput | PeerStoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StorySupportCreateWithoutUserInput = {
    id?: string
    type?: string
    createdAt?: Date | string
    story: PeerStoryCreateNestedOneWithoutSupportsInput
  }

  export type StorySupportUncheckedCreateWithoutUserInput = {
    id?: string
    storyId: string
    type?: string
    createdAt?: Date | string
  }

  export type StorySupportCreateOrConnectWithoutUserInput = {
    where: StorySupportWhereUniqueInput
    create: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput>
  }

  export type StorySupportCreateManyUserInputEnvelope = {
    data: StorySupportCreateManyUserInput | StorySupportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoryCommentCreateWithoutUserInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    story: PeerStoryCreateNestedOneWithoutCommentsInput
  }

  export type StoryCommentUncheckedCreateWithoutUserInput = {
    id?: string
    storyId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type StoryCommentCreateOrConnectWithoutUserInput = {
    where: StoryCommentWhereUniqueInput
    create: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput>
  }

  export type StoryCommentCreateManyUserInputEnvelope = {
    data: StoryCommentCreateManyUserInput | StoryCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodWhereUniqueInput
    update: XOR<MoodUpdateWithoutUserInput, MoodUncheckedUpdateWithoutUserInput>
    create: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput>
  }

  export type MoodUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodWhereUniqueInput
    data: XOR<MoodUpdateWithoutUserInput, MoodUncheckedUpdateWithoutUserInput>
  }

  export type MoodUpdateManyWithWhereWithoutUserInput = {
    where: MoodScalarWhereInput
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodScalarWhereInput = {
    AND?: MoodScalarWhereInput | MoodScalarWhereInput[]
    OR?: MoodScalarWhereInput[]
    NOT?: MoodScalarWhereInput | MoodScalarWhereInput[]
    id?: StringFilter<"Mood"> | string
    userId?: StringFilter<"Mood"> | string
    text?: StringFilter<"Mood"> | string
    moodType?: StringFilter<"Mood"> | string
    createdAt?: DateTimeFilter<"Mood"> | Date | string
  }

  export type ExecutionUpsertWithWhereUniqueWithoutUserInput = {
    where: ExecutionWhereUniqueInput
    update: XOR<ExecutionUpdateWithoutUserInput, ExecutionUncheckedUpdateWithoutUserInput>
    create: XOR<ExecutionCreateWithoutUserInput, ExecutionUncheckedCreateWithoutUserInput>
  }

  export type ExecutionUpdateWithWhereUniqueWithoutUserInput = {
    where: ExecutionWhereUniqueInput
    data: XOR<ExecutionUpdateWithoutUserInput, ExecutionUncheckedUpdateWithoutUserInput>
  }

  export type ExecutionUpdateManyWithWhereWithoutUserInput = {
    where: ExecutionScalarWhereInput
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyWithoutUserInput>
  }

  export type ExecutionScalarWhereInput = {
    AND?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    OR?: ExecutionScalarWhereInput[]
    NOT?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    id?: StringFilter<"Execution"> | string
    title?: StringFilter<"Execution"> | string
    type?: StringFilter<"Execution"> | string
    chatId?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
    updatedAt?: DateTimeFilter<"Execution"> | Date | string
    userId?: StringFilter<"Execution"> | string
    externalId?: StringNullableFilter<"Execution"> | string | null
  }

  export type JournalingUpsertWithWhereUniqueWithoutUserInput = {
    where: JournalingWhereUniqueInput
    update: XOR<JournalingUpdateWithoutUserInput, JournalingUncheckedUpdateWithoutUserInput>
    create: XOR<JournalingCreateWithoutUserInput, JournalingUncheckedCreateWithoutUserInput>
  }

  export type JournalingUpdateWithWhereUniqueWithoutUserInput = {
    where: JournalingWhereUniqueInput
    data: XOR<JournalingUpdateWithoutUserInput, JournalingUncheckedUpdateWithoutUserInput>
  }

  export type JournalingUpdateManyWithWhereWithoutUserInput = {
    where: JournalingScalarWhereInput
    data: XOR<JournalingUpdateManyMutationInput, JournalingUncheckedUpdateManyWithoutUserInput>
  }

  export type JournalingScalarWhereInput = {
    AND?: JournalingScalarWhereInput | JournalingScalarWhereInput[]
    OR?: JournalingScalarWhereInput[]
    NOT?: JournalingScalarWhereInput | JournalingScalarWhereInput[]
    id?: StringFilter<"Journaling"> | string
    title?: StringNullableFilter<"Journaling"> | string | null
    content?: StringFilter<"Journaling"> | string
    isPrivate?: BoolFilter<"Journaling"> | boolean
    createdAt?: DateTimeFilter<"Journaling"> | Date | string
    updatedAt?: DateTimeFilter<"Journaling"> | Date | string
    userId?: StringFilter<"Journaling"> | string
    moodType?: EnumMoodTypeNullableFilter<"Journaling"> | $Enums.MoodType | null
    moodScore?: IntNullableFilter<"Journaling"> | number | null
    tags?: StringNullableListFilter<"Journaling">
  }

  export type CopingStrategyUpsertWithWhereUniqueWithoutUserInput = {
    where: CopingStrategyWhereUniqueInput
    update: XOR<CopingStrategyUpdateWithoutUserInput, CopingStrategyUncheckedUpdateWithoutUserInput>
    create: XOR<CopingStrategyCreateWithoutUserInput, CopingStrategyUncheckedCreateWithoutUserInput>
  }

  export type CopingStrategyUpdateWithWhereUniqueWithoutUserInput = {
    where: CopingStrategyWhereUniqueInput
    data: XOR<CopingStrategyUpdateWithoutUserInput, CopingStrategyUncheckedUpdateWithoutUserInput>
  }

  export type CopingStrategyUpdateManyWithWhereWithoutUserInput = {
    where: CopingStrategyScalarWhereInput
    data: XOR<CopingStrategyUpdateManyMutationInput, CopingStrategyUncheckedUpdateManyWithoutUserInput>
  }

  export type CopingStrategyScalarWhereInput = {
    AND?: CopingStrategyScalarWhereInput | CopingStrategyScalarWhereInput[]
    OR?: CopingStrategyScalarWhereInput[]
    NOT?: CopingStrategyScalarWhereInput | CopingStrategyScalarWhereInput[]
    id?: StringFilter<"CopingStrategy"> | string
    userId?: StringFilter<"CopingStrategy"> | string
    category?: StringFilter<"CopingStrategy"> | string
    title?: StringFilter<"CopingStrategy"> | string
    description?: StringFilter<"CopingStrategy"> | string
    practiceType?: StringFilter<"CopingStrategy"> | string
    steps?: StringNullableListFilter<"CopingStrategy">
    duration?: IntFilter<"CopingStrategy"> | number
    difficulty?: StringFilter<"CopingStrategy"> | string
    isSaved?: BoolFilter<"CopingStrategy"> | boolean
    completedCount?: IntFilter<"CopingStrategy"> | number
    rating?: IntNullableFilter<"CopingStrategy"> | number | null
    culturalNote?: StringNullableFilter<"CopingStrategy"> | string | null
    createdAt?: DateTimeFilter<"CopingStrategy"> | Date | string
  }

  export type PeerStoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PeerStoryWhereUniqueInput
    update: XOR<PeerStoryUpdateWithoutUserInput, PeerStoryUncheckedUpdateWithoutUserInput>
    create: XOR<PeerStoryCreateWithoutUserInput, PeerStoryUncheckedCreateWithoutUserInput>
  }

  export type PeerStoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PeerStoryWhereUniqueInput
    data: XOR<PeerStoryUpdateWithoutUserInput, PeerStoryUncheckedUpdateWithoutUserInput>
  }

  export type PeerStoryUpdateManyWithWhereWithoutUserInput = {
    where: PeerStoryScalarWhereInput
    data: XOR<PeerStoryUpdateManyMutationInput, PeerStoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PeerStoryScalarWhereInput = {
    AND?: PeerStoryScalarWhereInput | PeerStoryScalarWhereInput[]
    OR?: PeerStoryScalarWhereInput[]
    NOT?: PeerStoryScalarWhereInput | PeerStoryScalarWhereInput[]
    id?: StringFilter<"PeerStory"> | string
    userId?: StringFilter<"PeerStory"> | string
    title?: StringFilter<"PeerStory"> | string
    content?: StringFilter<"PeerStory"> | string
    category?: StringFilter<"PeerStory"> | string
    tags?: StringNullableListFilter<"PeerStory">
    isApproved?: BoolFilter<"PeerStory"> | boolean
    isAnonymous?: BoolFilter<"PeerStory"> | boolean
    supportCount?: IntFilter<"PeerStory"> | number
    createdAt?: DateTimeFilter<"PeerStory"> | Date | string
  }

  export type StorySupportUpsertWithWhereUniqueWithoutUserInput = {
    where: StorySupportWhereUniqueInput
    update: XOR<StorySupportUpdateWithoutUserInput, StorySupportUncheckedUpdateWithoutUserInput>
    create: XOR<StorySupportCreateWithoutUserInput, StorySupportUncheckedCreateWithoutUserInput>
  }

  export type StorySupportUpdateWithWhereUniqueWithoutUserInput = {
    where: StorySupportWhereUniqueInput
    data: XOR<StorySupportUpdateWithoutUserInput, StorySupportUncheckedUpdateWithoutUserInput>
  }

  export type StorySupportUpdateManyWithWhereWithoutUserInput = {
    where: StorySupportScalarWhereInput
    data: XOR<StorySupportUpdateManyMutationInput, StorySupportUncheckedUpdateManyWithoutUserInput>
  }

  export type StorySupportScalarWhereInput = {
    AND?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
    OR?: StorySupportScalarWhereInput[]
    NOT?: StorySupportScalarWhereInput | StorySupportScalarWhereInput[]
    id?: StringFilter<"StorySupport"> | string
    userId?: StringFilter<"StorySupport"> | string
    storyId?: StringFilter<"StorySupport"> | string
    type?: StringFilter<"StorySupport"> | string
    createdAt?: DateTimeFilter<"StorySupport"> | Date | string
  }

  export type StoryCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: StoryCommentWhereUniqueInput
    update: XOR<StoryCommentUpdateWithoutUserInput, StoryCommentUncheckedUpdateWithoutUserInput>
    create: XOR<StoryCommentCreateWithoutUserInput, StoryCommentUncheckedCreateWithoutUserInput>
  }

  export type StoryCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: StoryCommentWhereUniqueInput
    data: XOR<StoryCommentUpdateWithoutUserInput, StoryCommentUncheckedUpdateWithoutUserInput>
  }

  export type StoryCommentUpdateManyWithWhereWithoutUserInput = {
    where: StoryCommentScalarWhereInput
    data: XOR<StoryCommentUpdateManyMutationInput, StoryCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type StoryCommentScalarWhereInput = {
    AND?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
    OR?: StoryCommentScalarWhereInput[]
    NOT?: StoryCommentScalarWhereInput | StoryCommentScalarWhereInput[]
    id?: StringFilter<"StoryComment"> | string
    userId?: StringFilter<"StoryComment"> | string
    storyId?: StringFilter<"StoryComment"> | string
    content?: StringFilter<"StoryComment"> | string
    isApproved?: BoolFilter<"StoryComment"> | boolean
    createdAt?: DateTimeFilter<"StoryComment"> | Date | string
  }

  export type UserCreateWithoutJournalingsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJournalingsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJournalingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJournalingsInput, UserUncheckedCreateWithoutJournalingsInput>
  }

  export type UserUpsertWithoutJournalingsInput = {
    update: XOR<UserUpdateWithoutJournalingsInput, UserUncheckedUpdateWithoutJournalingsInput>
    create: XOR<UserCreateWithoutJournalingsInput, UserUncheckedCreateWithoutJournalingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJournalingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJournalingsInput, UserUncheckedUpdateWithoutJournalingsInput>
  }

  export type UserUpdateWithoutJournalingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJournalingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExecutionsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExecutionsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExecutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExecutionsInput, UserUncheckedCreateWithoutExecutionsInput>
  }

  export type UserUpsertWithoutExecutionsInput = {
    update: XOR<UserUpdateWithoutExecutionsInput, UserUncheckedUpdateWithoutExecutionsInput>
    create: XOR<UserCreateWithoutExecutionsInput, UserUncheckedCreateWithoutExecutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExecutionsInput, UserUncheckedUpdateWithoutExecutionsInput>
  }

  export type UserUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updateAt?: DateTimeFilter<"Message"> | Date | string
    conversationId?: StringFilter<"Message"> | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMoodsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodsInput, UserUncheckedCreateWithoutMoodsInput>
  }

  export type UserUpsertWithoutMoodsInput = {
    update: XOR<UserUpdateWithoutMoodsInput, UserUncheckedUpdateWithoutMoodsInput>
    create: XOR<UserCreateWithoutMoodsInput, UserUncheckedCreateWithoutMoodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodsInput, UserUncheckedUpdateWithoutMoodsInput>
  }

  export type UserUpdateWithoutMoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCopingStrategiesInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCopingStrategiesInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCopingStrategiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCopingStrategiesInput, UserUncheckedCreateWithoutCopingStrategiesInput>
  }

  export type UserUpsertWithoutCopingStrategiesInput = {
    update: XOR<UserUpdateWithoutCopingStrategiesInput, UserUncheckedUpdateWithoutCopingStrategiesInput>
    create: XOR<UserCreateWithoutCopingStrategiesInput, UserUncheckedCreateWithoutCopingStrategiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCopingStrategiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCopingStrategiesInput, UserUncheckedUpdateWithoutCopingStrategiesInput>
  }

  export type UserUpdateWithoutCopingStrategiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCopingStrategiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPeerStoriesInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPeerStoriesInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPeerStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPeerStoriesInput, UserUncheckedCreateWithoutPeerStoriesInput>
  }

  export type StorySupportCreateWithoutStoryInput = {
    id?: string
    type?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStorySupportsInput
  }

  export type StorySupportUncheckedCreateWithoutStoryInput = {
    id?: string
    userId: string
    type?: string
    createdAt?: Date | string
  }

  export type StorySupportCreateOrConnectWithoutStoryInput = {
    where: StorySupportWhereUniqueInput
    create: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput>
  }

  export type StorySupportCreateManyStoryInputEnvelope = {
    data: StorySupportCreateManyStoryInput | StorySupportCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StoryCommentCreateWithoutStoryInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStoryCommentsInput
  }

  export type StoryCommentUncheckedCreateWithoutStoryInput = {
    id?: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type StoryCommentCreateOrConnectWithoutStoryInput = {
    where: StoryCommentWhereUniqueInput
    create: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput>
  }

  export type StoryCommentCreateManyStoryInputEnvelope = {
    data: StoryCommentCreateManyStoryInput | StoryCommentCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPeerStoriesInput = {
    update: XOR<UserUpdateWithoutPeerStoriesInput, UserUncheckedUpdateWithoutPeerStoriesInput>
    create: XOR<UserCreateWithoutPeerStoriesInput, UserUncheckedCreateWithoutPeerStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPeerStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPeerStoriesInput, UserUncheckedUpdateWithoutPeerStoriesInput>
  }

  export type UserUpdateWithoutPeerStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPeerStoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StorySupportUpsertWithWhereUniqueWithoutStoryInput = {
    where: StorySupportWhereUniqueInput
    update: XOR<StorySupportUpdateWithoutStoryInput, StorySupportUncheckedUpdateWithoutStoryInput>
    create: XOR<StorySupportCreateWithoutStoryInput, StorySupportUncheckedCreateWithoutStoryInput>
  }

  export type StorySupportUpdateWithWhereUniqueWithoutStoryInput = {
    where: StorySupportWhereUniqueInput
    data: XOR<StorySupportUpdateWithoutStoryInput, StorySupportUncheckedUpdateWithoutStoryInput>
  }

  export type StorySupportUpdateManyWithWhereWithoutStoryInput = {
    where: StorySupportScalarWhereInput
    data: XOR<StorySupportUpdateManyMutationInput, StorySupportUncheckedUpdateManyWithoutStoryInput>
  }

  export type StoryCommentUpsertWithWhereUniqueWithoutStoryInput = {
    where: StoryCommentWhereUniqueInput
    update: XOR<StoryCommentUpdateWithoutStoryInput, StoryCommentUncheckedUpdateWithoutStoryInput>
    create: XOR<StoryCommentCreateWithoutStoryInput, StoryCommentUncheckedCreateWithoutStoryInput>
  }

  export type StoryCommentUpdateWithWhereUniqueWithoutStoryInput = {
    where: StoryCommentWhereUniqueInput
    data: XOR<StoryCommentUpdateWithoutStoryInput, StoryCommentUncheckedUpdateWithoutStoryInput>
  }

  export type StoryCommentUpdateManyWithWhereWithoutStoryInput = {
    where: StoryCommentScalarWhereInput
    data: XOR<StoryCommentUpdateManyMutationInput, StoryCommentUncheckedUpdateManyWithoutStoryInput>
  }

  export type UserCreateWithoutStorySupportsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStorySupportsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storyComments?: StoryCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStorySupportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStorySupportsInput, UserUncheckedCreateWithoutStorySupportsInput>
  }

  export type PeerStoryCreateWithoutSupportsInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPeerStoriesInput
    comments?: StoryCommentCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryUncheckedCreateWithoutSupportsInput = {
    id?: string
    userId: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    comments?: StoryCommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryCreateOrConnectWithoutSupportsInput = {
    where: PeerStoryWhereUniqueInput
    create: XOR<PeerStoryCreateWithoutSupportsInput, PeerStoryUncheckedCreateWithoutSupportsInput>
  }

  export type UserUpsertWithoutStorySupportsInput = {
    update: XOR<UserUpdateWithoutStorySupportsInput, UserUncheckedUpdateWithoutStorySupportsInput>
    create: XOR<UserCreateWithoutStorySupportsInput, UserUncheckedCreateWithoutStorySupportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStorySupportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStorySupportsInput, UserUncheckedUpdateWithoutStorySupportsInput>
  }

  export type UserUpdateWithoutStorySupportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStorySupportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storyComments?: StoryCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeerStoryUpsertWithoutSupportsInput = {
    update: XOR<PeerStoryUpdateWithoutSupportsInput, PeerStoryUncheckedUpdateWithoutSupportsInput>
    create: XOR<PeerStoryCreateWithoutSupportsInput, PeerStoryUncheckedCreateWithoutSupportsInput>
    where?: PeerStoryWhereInput
  }

  export type PeerStoryUpdateToOneWithWhereWithoutSupportsInput = {
    where?: PeerStoryWhereInput
    data: XOR<PeerStoryUpdateWithoutSupportsInput, PeerStoryUncheckedUpdateWithoutSupportsInput>
  }

  export type PeerStoryUpdateWithoutSupportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeerStoriesNestedInput
    comments?: StoryCommentUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryUncheckedUpdateWithoutSupportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: StoryCommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type UserCreateWithoutStoryCommentsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodCreateNestedManyWithoutUserInput
    executions?: ExecutionCreateNestedManyWithoutUserInput
    journalings?: JournalingCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryCreateNestedManyWithoutUserInput
    storySupports?: StorySupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoryCommentsInput = {
    id?: string
    googleId?: string | null
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutUserInput
    executions?: ExecutionUncheckedCreateNestedManyWithoutUserInput
    journalings?: JournalingUncheckedCreateNestedManyWithoutUserInput
    copingStrategies?: CopingStrategyUncheckedCreateNestedManyWithoutUserInput
    peerStories?: PeerStoryUncheckedCreateNestedManyWithoutUserInput
    storySupports?: StorySupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoryCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoryCommentsInput, UserUncheckedCreateWithoutStoryCommentsInput>
  }

  export type PeerStoryCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPeerStoriesInput
    supports?: StorySupportCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
    supports?: StorySupportUncheckedCreateNestedManyWithoutStoryInput
  }

  export type PeerStoryCreateOrConnectWithoutCommentsInput = {
    where: PeerStoryWhereUniqueInput
    create: XOR<PeerStoryCreateWithoutCommentsInput, PeerStoryUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutStoryCommentsInput = {
    update: XOR<UserUpdateWithoutStoryCommentsInput, UserUncheckedUpdateWithoutStoryCommentsInput>
    create: XOR<UserCreateWithoutStoryCommentsInput, UserUncheckedCreateWithoutStoryCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoryCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoryCommentsInput, UserUncheckedUpdateWithoutStoryCommentsInput>
  }

  export type UserUpdateWithoutStoryCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUpdateManyWithoutUserNestedInput
    executions?: ExecutionUpdateManyWithoutUserNestedInput
    journalings?: JournalingUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoryCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutUserNestedInput
    executions?: ExecutionUncheckedUpdateManyWithoutUserNestedInput
    journalings?: JournalingUncheckedUpdateManyWithoutUserNestedInput
    copingStrategies?: CopingStrategyUncheckedUpdateManyWithoutUserNestedInput
    peerStories?: PeerStoryUncheckedUpdateManyWithoutUserNestedInput
    storySupports?: StorySupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeerStoryUpsertWithoutCommentsInput = {
    update: XOR<PeerStoryUpdateWithoutCommentsInput, PeerStoryUncheckedUpdateWithoutCommentsInput>
    create: XOR<PeerStoryCreateWithoutCommentsInput, PeerStoryUncheckedCreateWithoutCommentsInput>
    where?: PeerStoryWhereInput
  }

  export type PeerStoryUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PeerStoryWhereInput
    data: XOR<PeerStoryUpdateWithoutCommentsInput, PeerStoryUncheckedUpdateWithoutCommentsInput>
  }

  export type PeerStoryUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeerStoriesNestedInput
    supports?: StorySupportUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supports?: StorySupportUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type MoodCreateManyUserInput = {
    id?: string
    text: string
    moodType: string
    createdAt?: Date | string
  }

  export type ExecutionCreateManyUserInput = {
    id?: string
    title: string
    type?: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    externalId?: string | null
  }

  export type JournalingCreateManyUserInput = {
    id?: string
    title?: string | null
    content: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moodType?: $Enums.MoodType | null
    moodScore?: number | null
    tags?: JournalingCreatetagsInput | string[]
  }

  export type CopingStrategyCreateManyUserInput = {
    id?: string
    category: string
    title: string
    description: string
    practiceType?: string
    steps?: CopingStrategyCreatestepsInput | string[]
    duration?: number
    difficulty?: string
    isSaved?: boolean
    completedCount?: number
    rating?: number | null
    culturalNote?: string | null
    createdAt?: Date | string
  }

  export type PeerStoryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    category?: string
    tags?: PeerStoryCreatetagsInput | string[]
    isApproved?: boolean
    isAnonymous?: boolean
    supportCount?: number
    createdAt?: Date | string
  }

  export type StorySupportCreateManyUserInput = {
    id?: string
    storyId: string
    type?: string
    createdAt?: Date | string
  }

  export type StoryCommentCreateManyUserInput = {
    id?: string
    storyId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type MoodUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    moodType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JournalingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type JournalingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type JournalingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodType?: NullableEnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: JournalingUpdatetagsInput | string[]
  }

  export type CopingStrategyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopingStrategyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopingStrategyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    practiceType?: StringFieldUpdateOperationsInput | string
    steps?: CopingStrategyUpdatestepsInput | string[]
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    completedCount?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    culturalNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerStoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supports?: StorySupportUpdateManyWithoutStoryNestedInput
    comments?: StoryCommentUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supports?: StorySupportUncheckedUpdateManyWithoutStoryNestedInput
    comments?: StoryCommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type PeerStoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PeerStoryUpdatetagsInput | string[]
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    supportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: PeerStoryUpdateOneRequiredWithoutSupportsNestedInput
  }

  export type StorySupportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: PeerStoryUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type StoryCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportCreateManyStoryInput = {
    id?: string
    userId: string
    type?: string
    createdAt?: Date | string
  }

  export type StoryCommentCreateManyStoryInput = {
    id?: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type StorySupportUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStorySupportsNestedInput
  }

  export type StorySupportUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorySupportUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoryCommentsNestedInput
  }

  export type StoryCommentUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCommentUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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