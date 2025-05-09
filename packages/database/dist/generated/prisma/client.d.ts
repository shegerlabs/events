/**
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, Log = $Class.LogOptions<ClientOptions>, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<ClientOptions, Log, ExtArgs>;
export { Prisma };
/**
 * Model EntityType
 *
 */
export type EntityType = Prisma.EntityTypeModel;
/**
 * Model FieldType
 *
 */
export type FieldType = Prisma.FieldTypeModel;
/**
 * Model ValidationType
 *
 */
export type ValidationType = Prisma.ValidationTypeModel;
/**
 * Model FieldStatus
 *
 */
export type FieldStatus = Prisma.FieldStatusModel;
/**
 * Model FieldConfig
 *
 */
export type FieldConfig = Prisma.FieldConfigModel;
/**
 * Model Country
 *
 */
export type Country = Prisma.CountryModel;
/**
 * Model Language
 *
 */
export type Language = Prisma.LanguageModel;
/**
 * Model Title
 *
 */
export type Title = Prisma.TitleModel;
/**
 * Model Gender
 *
 */
export type Gender = Prisma.GenderModel;
/**
 * Model FieldDefinition
 *
 */
export type FieldDefinition = Prisma.FieldDefinitionModel;
/**
 * Model FieldValidation
 *
 */
export type FieldValidation = Prisma.FieldValidationModel;
/**
 * Model EventStatus
 *
 */
export type EventStatus = Prisma.EventStatusModel;
/**
 * Model UserStatus
 *
 */
export type UserStatus = Prisma.UserStatusModel;
/**
 * Model VenueStatus
 *
 */
export type VenueStatus = Prisma.VenueStatusModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Password
 *
 */
export type Password = Prisma.PasswordModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model Tenant
 *
 */
export type Tenant = Prisma.TenantModel;
/**
 * Model Venue
 *
 */
export type Venue = Prisma.VenueModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model Participant
 *
 */
export type Participant = Prisma.ParticipantModel;
//# sourceMappingURL=client.d.ts.map