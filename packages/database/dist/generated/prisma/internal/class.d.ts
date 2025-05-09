/**
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EntityTypes
   * const entityTypes = await prisma.entityType.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = LogOptions<ClientOptions>, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>): PrismaClient<ClientOptions, U, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EntityTypes
 * const entityTypes = await prisma.entityType.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = LogOptions<ClientOptions>, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Add a middleware
     * @deprecated since 4.16.0. For new code, prefer client extensions instead.
     * @see https://pris.ly/d/extensions
     */
    $use(cb: Prisma.Middleware): void;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.entityType`: Exposes CRUD operations for the **EntityType** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more EntityTypes
  * const entityTypes = await prisma.entityType.findMany()
  * ```
  */
    get entityType(): Prisma.EntityTypeDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.fieldType`: Exposes CRUD operations for the **FieldType** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FieldTypes
      * const fieldTypes = await prisma.fieldType.findMany()
      * ```
      */
    get fieldType(): Prisma.FieldTypeDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.validationType`: Exposes CRUD operations for the **ValidationType** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ValidationTypes
      * const validationTypes = await prisma.validationType.findMany()
      * ```
      */
    get validationType(): Prisma.ValidationTypeDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.fieldStatus`: Exposes CRUD operations for the **FieldStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FieldStatuses
      * const fieldStatuses = await prisma.fieldStatus.findMany()
      * ```
      */
    get fieldStatus(): Prisma.FieldStatusDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.fieldConfig`: Exposes CRUD operations for the **FieldConfig** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FieldConfigs
      * const fieldConfigs = await prisma.fieldConfig.findMany()
      * ```
      */
    get fieldConfig(): Prisma.FieldConfigDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.country`: Exposes CRUD operations for the **Country** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Countries
      * const countries = await prisma.country.findMany()
      * ```
      */
    get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.language`: Exposes CRUD operations for the **Language** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Languages
      * const languages = await prisma.language.findMany()
      * ```
      */
    get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.title`: Exposes CRUD operations for the **Title** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Titles
      * const titles = await prisma.title.findMany()
      * ```
      */
    get title(): Prisma.TitleDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.gender`: Exposes CRUD operations for the **Gender** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Genders
      * const genders = await prisma.gender.findMany()
      * ```
      */
    get gender(): Prisma.GenderDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.fieldDefinition`: Exposes CRUD operations for the **FieldDefinition** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FieldDefinitions
      * const fieldDefinitions = await prisma.fieldDefinition.findMany()
      * ```
      */
    get fieldDefinition(): Prisma.FieldDefinitionDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.fieldValidation`: Exposes CRUD operations for the **FieldValidation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FieldValidations
      * const fieldValidations = await prisma.fieldValidation.findMany()
      * ```
      */
    get fieldValidation(): Prisma.FieldValidationDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.eventStatus`: Exposes CRUD operations for the **EventStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventStatuses
      * const eventStatuses = await prisma.eventStatus.findMany()
      * ```
      */
    get eventStatus(): Prisma.EventStatusDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.userStatus`: Exposes CRUD operations for the **UserStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserStatuses
      * const userStatuses = await prisma.userStatus.findMany()
      * ```
      */
    get userStatus(): Prisma.UserStatusDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.venueStatus`: Exposes CRUD operations for the **VenueStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VenueStatuses
      * const venueStatuses = await prisma.venueStatus.findMany()
      * ```
      */
    get venueStatus(): Prisma.VenueStatusDelegate<ExtArgs, ClientOptions>;
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
     * `prisma.password`: Exposes CRUD operations for the **Password** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Passwords
      * const passwords = await prisma.password.findMany()
      * ```
      */
    get password(): Prisma.PasswordDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Verifications
      * const verifications = await prisma.verification.findMany()
      * ```
      */
    get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Permissions
      * const permissions = await prisma.permission.findMany()
      * ```
      */
    get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tenants
      * const tenants = await prisma.tenant.findMany()
      * ```
      */
    get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Venues
      * const venues = await prisma.venue.findMany()
      * ```
      */
    get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.event.findMany()
      * ```
      */
    get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Participants
      * const participants = await prisma.participant.findMany()
      * ```
      */
    get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map