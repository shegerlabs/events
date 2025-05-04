/**
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from '@prisma/client/runtime/library'
import * as $Class from './internal/class.js'
import * as Prisma from './internal/prismaNamespace.js'
export * as $Enums from './enums.js'
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor
export type PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	Log = $Class.LogOptions<ClientOptions>,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = $Class.PrismaClient<ClientOptions, Log, ExtArgs>
export { Prisma }
/**
 * Model User
 *
 */
export type User = Prisma.UserModel
//# sourceMappingURL=client.d.ts.map
