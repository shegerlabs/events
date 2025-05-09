/**
 * This file exports the `User` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    failedLoginAttempts: number | null;
    lockCount: number | null;
    version: number | null;
};
export type UserSumAggregateOutputType = {
    failedLoginAttempts: number | null;
    lockCount: number | null;
    version: number | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    userStatusId: string | null;
    countryId: string | null;
    languageId: string | null;
    titleId: string | null;
    genderId: string | null;
    tenantId: string | null;
    failedLoginAttempts: number | null;
    lastFailedLoginAt: Date | null;
    lockedAt: Date | null;
    lockReason: string | null;
    lockCount: number | null;
    autoUnlockAt: Date | null;
    lastLoginAt: Date | null;
    version: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    userStatusId: string | null;
    countryId: string | null;
    languageId: string | null;
    titleId: string | null;
    genderId: string | null;
    tenantId: string | null;
    failedLoginAttempts: number | null;
    lastFailedLoginAt: Date | null;
    lockedAt: Date | null;
    lockReason: string | null;
    lockCount: number | null;
    autoUnlockAt: Date | null;
    lastLoginAt: Date | null;
    version: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    firstName: number;
    lastName: number;
    userStatusId: number;
    countryId: number;
    languageId: number;
    titleId: number;
    genderId: number;
    tenantId: number;
    failedLoginAttempts: number;
    lastFailedLoginAt: number;
    lockedAt: number;
    lockReason: number;
    lockCount: number;
    autoUnlockAt: number;
    lastLoginAt: number;
    metadata: number;
    version: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    failedLoginAttempts?: true;
    lockCount?: true;
    version?: true;
};
export type UserSumAggregateInputType = {
    failedLoginAttempts?: true;
    lockCount?: true;
    version?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    userStatusId?: true;
    countryId?: true;
    languageId?: true;
    titleId?: true;
    genderId?: true;
    tenantId?: true;
    failedLoginAttempts?: true;
    lastFailedLoginAt?: true;
    lockedAt?: true;
    lockReason?: true;
    lockCount?: true;
    autoUnlockAt?: true;
    lastLoginAt?: true;
    version?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    userStatusId?: true;
    countryId?: true;
    languageId?: true;
    titleId?: true;
    genderId?: true;
    tenantId?: true;
    failedLoginAttempts?: true;
    lastFailedLoginAt?: true;
    lockedAt?: true;
    lockReason?: true;
    lockCount?: true;
    autoUnlockAt?: true;
    lastLoginAt?: true;
    version?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    firstName?: true;
    lastName?: true;
    userStatusId?: true;
    countryId?: true;
    languageId?: true;
    titleId?: true;
    genderId?: true;
    tenantId?: true;
    failedLoginAttempts?: true;
    lastFailedLoginAt?: true;
    lockedAt?: true;
    lockReason?: true;
    lockCount?: true;
    autoUnlockAt?: true;
    lastLoginAt?: true;
    metadata?: true;
    version?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId: string | null;
    countryId: string | null;
    languageId: string | null;
    titleId: string | null;
    genderId: string | null;
    tenantId: string | null;
    failedLoginAttempts: number;
    lastFailedLoginAt: Date | null;
    lockedAt: Date | null;
    lockReason: string | null;
    lockCount: number;
    autoUnlockAt: Date | null;
    lastLoginAt: Date | null;
    metadata: runtime.JsonValue | null;
    version: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    userStatusId?: Prisma.StringNullableFilter<"User"> | string | null;
    countryId?: Prisma.StringNullableFilter<"User"> | string | null;
    languageId?: Prisma.StringNullableFilter<"User"> | string | null;
    titleId?: Prisma.StringNullableFilter<"User"> | string | null;
    genderId?: Prisma.StringNullableFilter<"User"> | string | null;
    tenantId?: Prisma.StringNullableFilter<"User"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"User"> | number;
    lastFailedLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockReason?: Prisma.StringNullableFilter<"User"> | string | null;
    lockCount?: Prisma.IntFilter<"User"> | number;
    autoUnlockAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"User">;
    version?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    userStatus?: Prisma.XOR<Prisma.UserStatusNullableScalarRelationFilter, Prisma.UserStatusWhereInput> | null;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    language?: Prisma.XOR<Prisma.LanguageNullableScalarRelationFilter, Prisma.LanguageWhereInput> | null;
    title?: Prisma.XOR<Prisma.TitleNullableScalarRelationFilter, Prisma.TitleWhereInput> | null;
    gender?: Prisma.XOR<Prisma.GenderNullableScalarRelationFilter, Prisma.GenderWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
    roles?: Prisma.RoleListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    password?: Prisma.XOR<Prisma.PasswordNullableScalarRelationFilter, Prisma.PasswordWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    userStatusId?: Prisma.SortOrderInput | Prisma.SortOrder;
    countryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    languageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    genderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lastFailedLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    autoUnlockAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    userStatus?: Prisma.UserStatusOrderByWithRelationInput;
    country?: Prisma.CountryOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    title?: Prisma.TitleOrderByWithRelationInput;
    gender?: Prisma.GenderOrderByWithRelationInput;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    password?: Prisma.PasswordOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    username?: string;
    tenantId_email?: Prisma.UserTenantIdEmailCompoundUniqueInput;
    tenantId_username?: Prisma.UserTenantIdUsernameCompoundUniqueInput;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    userStatusId?: Prisma.StringNullableFilter<"User"> | string | null;
    countryId?: Prisma.StringNullableFilter<"User"> | string | null;
    languageId?: Prisma.StringNullableFilter<"User"> | string | null;
    titleId?: Prisma.StringNullableFilter<"User"> | string | null;
    genderId?: Prisma.StringNullableFilter<"User"> | string | null;
    tenantId?: Prisma.StringNullableFilter<"User"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"User"> | number;
    lastFailedLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockReason?: Prisma.StringNullableFilter<"User"> | string | null;
    lockCount?: Prisma.IntFilter<"User"> | number;
    autoUnlockAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"User">;
    version?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    userStatus?: Prisma.XOR<Prisma.UserStatusNullableScalarRelationFilter, Prisma.UserStatusWhereInput> | null;
    country?: Prisma.XOR<Prisma.CountryNullableScalarRelationFilter, Prisma.CountryWhereInput> | null;
    language?: Prisma.XOR<Prisma.LanguageNullableScalarRelationFilter, Prisma.LanguageWhereInput> | null;
    title?: Prisma.XOR<Prisma.TitleNullableScalarRelationFilter, Prisma.TitleWhereInput> | null;
    gender?: Prisma.XOR<Prisma.GenderNullableScalarRelationFilter, Prisma.GenderWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
    roles?: Prisma.RoleListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    password?: Prisma.XOR<Prisma.PasswordNullableScalarRelationFilter, Prisma.PasswordWhereInput> | null;
}, "id" | "email" | "username" | "tenantId_email" | "tenantId_username">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    userStatusId?: Prisma.SortOrderInput | Prisma.SortOrder;
    countryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    languageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    titleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    genderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lastFailedLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    autoUnlockAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    userStatusId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    countryId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    languageId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    titleId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    genderId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    tenantId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    failedLoginAttempts?: Prisma.IntWithAggregatesFilter<"User"> | number;
    lastFailedLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    lockedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    lockReason?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    lockCount?: Prisma.IntWithAggregatesFilter<"User"> | number;
    autoUnlockAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"User">;
    version?: Prisma.IntWithAggregatesFilter<"User"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserTenantIdEmailCompoundUniqueInput = {
    tenantId: string;
    email: string;
};
export type UserTenantIdUsernameCompoundUniqueInput = {
    tenantId: string;
    username: string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    userStatusId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    genderId?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lastFailedLoginAt?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    lockReason?: Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    autoUnlockAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    userStatusId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    genderId?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lastFailedLoginAt?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    lockReason?: Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    autoUnlockAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    userStatusId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    titleId?: Prisma.SortOrder;
    genderId?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    failedLoginAttempts?: Prisma.SortOrder;
    lastFailedLoginAt?: Prisma.SortOrder;
    lockedAt?: Prisma.SortOrder;
    lockReason?: Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    autoUnlockAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    failedLoginAttempts?: Prisma.SortOrder;
    lockCount?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput> | Prisma.UserCreateWithoutCountryInput[] | Prisma.UserUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCountryInput | Prisma.UserCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.UserCreateManyCountryInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput> | Prisma.UserCreateWithoutCountryInput[] | Prisma.UserUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCountryInput | Prisma.UserCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.UserCreateManyCountryInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput> | Prisma.UserCreateWithoutCountryInput[] | Prisma.UserUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCountryInput | Prisma.UserCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutCountryInput | Prisma.UserUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.UserCreateManyCountryInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutCountryInput | Prisma.UserUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutCountryInput | Prisma.UserUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput> | Prisma.UserCreateWithoutCountryInput[] | Prisma.UserUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCountryInput | Prisma.UserCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutCountryInput | Prisma.UserUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.UserCreateManyCountryInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutCountryInput | Prisma.UserUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutCountryInput | Prisma.UserUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput> | Prisma.UserCreateWithoutLanguageInput[] | Prisma.UserUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLanguageInput | Prisma.UserCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.UserCreateManyLanguageInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput> | Prisma.UserCreateWithoutLanguageInput[] | Prisma.UserUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLanguageInput | Prisma.UserCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.UserCreateManyLanguageInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput> | Prisma.UserCreateWithoutLanguageInput[] | Prisma.UserUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLanguageInput | Prisma.UserCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput | Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.UserCreateManyLanguageInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput | Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLanguageInput | Prisma.UserUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput> | Prisma.UserCreateWithoutLanguageInput[] | Prisma.UserUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLanguageInput | Prisma.UserCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput | Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.UserCreateManyLanguageInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput | Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLanguageInput | Prisma.UserUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput> | Prisma.UserCreateWithoutTitleInput[] | Prisma.UserUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTitleInput | Prisma.UserCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.UserCreateManyTitleInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutTitleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput> | Prisma.UserCreateWithoutTitleInput[] | Prisma.UserUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTitleInput | Prisma.UserCreateOrConnectWithoutTitleInput[];
    createMany?: Prisma.UserCreateManyTitleInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput> | Prisma.UserCreateWithoutTitleInput[] | Prisma.UserUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTitleInput | Prisma.UserCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTitleInput | Prisma.UserUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.UserCreateManyTitleInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTitleInput | Prisma.UserUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTitleInput | Prisma.UserUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput> | Prisma.UserCreateWithoutTitleInput[] | Prisma.UserUncheckedCreateWithoutTitleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTitleInput | Prisma.UserCreateOrConnectWithoutTitleInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTitleInput | Prisma.UserUpsertWithWhereUniqueWithoutTitleInput[];
    createMany?: Prisma.UserCreateManyTitleInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTitleInput | Prisma.UserUpdateWithWhereUniqueWithoutTitleInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTitleInput | Prisma.UserUpdateManyWithWhereWithoutTitleInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutGenderInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput> | Prisma.UserCreateWithoutGenderInput[] | Prisma.UserUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenderInput | Prisma.UserCreateOrConnectWithoutGenderInput[];
    createMany?: Prisma.UserCreateManyGenderInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutGenderInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput> | Prisma.UserCreateWithoutGenderInput[] | Prisma.UserUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenderInput | Prisma.UserCreateOrConnectWithoutGenderInput[];
    createMany?: Prisma.UserCreateManyGenderInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutGenderNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput> | Prisma.UserCreateWithoutGenderInput[] | Prisma.UserUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenderInput | Prisma.UserCreateOrConnectWithoutGenderInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutGenderInput | Prisma.UserUpsertWithWhereUniqueWithoutGenderInput[];
    createMany?: Prisma.UserCreateManyGenderInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutGenderInput | Prisma.UserUpdateWithWhereUniqueWithoutGenderInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutGenderInput | Prisma.UserUpdateManyWithWhereWithoutGenderInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput> | Prisma.UserCreateWithoutGenderInput[] | Prisma.UserUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenderInput | Prisma.UserCreateOrConnectWithoutGenderInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutGenderInput | Prisma.UserUpsertWithWhereUniqueWithoutGenderInput[];
    createMany?: Prisma.UserCreateManyGenderInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutGenderInput | Prisma.UserUpdateWithWhereUniqueWithoutGenderInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutGenderInput | Prisma.UserUpdateManyWithWhereWithoutGenderInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutUserStatusInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput> | Prisma.UserCreateWithoutUserStatusInput[] | Prisma.UserUncheckedCreateWithoutUserStatusInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserStatusInput | Prisma.UserCreateOrConnectWithoutUserStatusInput[];
    createMany?: Prisma.UserCreateManyUserStatusInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutUserStatusInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput> | Prisma.UserCreateWithoutUserStatusInput[] | Prisma.UserUncheckedCreateWithoutUserStatusInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserStatusInput | Prisma.UserCreateOrConnectWithoutUserStatusInput[];
    createMany?: Prisma.UserCreateManyUserStatusInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutUserStatusNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput> | Prisma.UserCreateWithoutUserStatusInput[] | Prisma.UserUncheckedCreateWithoutUserStatusInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserStatusInput | Prisma.UserCreateOrConnectWithoutUserStatusInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutUserStatusInput | Prisma.UserUpsertWithWhereUniqueWithoutUserStatusInput[];
    createMany?: Prisma.UserCreateManyUserStatusInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutUserStatusInput | Prisma.UserUpdateWithWhereUniqueWithoutUserStatusInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutUserStatusInput | Prisma.UserUpdateManyWithWhereWithoutUserStatusInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutUserStatusNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput> | Prisma.UserCreateWithoutUserStatusInput[] | Prisma.UserUncheckedCreateWithoutUserStatusInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserStatusInput | Prisma.UserCreateOrConnectWithoutUserStatusInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutUserStatusInput | Prisma.UserUpsertWithWhereUniqueWithoutUserStatusInput[];
    createMany?: Prisma.UserCreateManyUserStatusInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutUserStatusInput | Prisma.UserUpdateWithWhereUniqueWithoutUserStatusInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutUserStatusInput | Prisma.UserUpdateManyWithWhereWithoutUserStatusInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutPasswordInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordInput, Prisma.UserUncheckedCreateWithoutPasswordInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPasswordNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordInput, Prisma.UserUncheckedCreateWithoutPasswordInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordInput;
    upsert?: Prisma.UserUpsertWithoutPasswordInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPasswordInput, Prisma.UserUpdateWithoutPasswordInput>, Prisma.UserUncheckedUpdateWithoutPasswordInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRolesInput | Prisma.UserUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput> | Prisma.UserCreateWithoutRolesInput[] | Prisma.UserUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput | Prisma.UserCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRolesInput | Prisma.UserUpsertWithWhereUniqueWithoutRolesInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRolesInput | Prisma.UserUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRolesInput | Prisma.UserUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateWithoutCountryInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutCountryInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutCountryInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput>;
};
export type UserCreateManyCountryInputEnvelope = {
    data: Prisma.UserCreateManyCountryInput | Prisma.UserCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutCountryInput, Prisma.UserUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCountryInput, Prisma.UserUncheckedCreateWithoutCountryInput>;
};
export type UserUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCountryInput, Prisma.UserUncheckedUpdateWithoutCountryInput>;
};
export type UserUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutCountryInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    userStatusId?: Prisma.StringNullableFilter<"User"> | string | null;
    countryId?: Prisma.StringNullableFilter<"User"> | string | null;
    languageId?: Prisma.StringNullableFilter<"User"> | string | null;
    titleId?: Prisma.StringNullableFilter<"User"> | string | null;
    genderId?: Prisma.StringNullableFilter<"User"> | string | null;
    tenantId?: Prisma.StringNullableFilter<"User"> | string | null;
    failedLoginAttempts?: Prisma.IntFilter<"User"> | number;
    lastFailedLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lockReason?: Prisma.StringNullableFilter<"User"> | string | null;
    lockCount?: Prisma.IntFilter<"User"> | number;
    autoUnlockAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"User">;
    version?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
};
export type UserCreateWithoutLanguageInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutLanguageInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutLanguageInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput>;
};
export type UserCreateManyLanguageInputEnvelope = {
    data: Prisma.UserCreateManyLanguageInput | Prisma.UserCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutLanguageInput, Prisma.UserUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLanguageInput, Prisma.UserUncheckedCreateWithoutLanguageInput>;
};
export type UserUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLanguageInput, Prisma.UserUncheckedUpdateWithoutLanguageInput>;
};
export type UserUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutLanguageInput>;
};
export type UserCreateWithoutTitleInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutTitleInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutTitleInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput>;
};
export type UserCreateManyTitleInputEnvelope = {
    data: Prisma.UserCreateManyTitleInput | Prisma.UserCreateManyTitleInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutTitleInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutTitleInput, Prisma.UserUncheckedUpdateWithoutTitleInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTitleInput, Prisma.UserUncheckedCreateWithoutTitleInput>;
};
export type UserUpdateWithWhereUniqueWithoutTitleInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTitleInput, Prisma.UserUncheckedUpdateWithoutTitleInput>;
};
export type UserUpdateManyWithWhereWithoutTitleInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutTitleInput>;
};
export type UserCreateWithoutGenderInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutGenderInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutGenderInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput>;
};
export type UserCreateManyGenderInputEnvelope = {
    data: Prisma.UserCreateManyGenderInput | Prisma.UserCreateManyGenderInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutGenderInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutGenderInput, Prisma.UserUncheckedUpdateWithoutGenderInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutGenderInput, Prisma.UserUncheckedCreateWithoutGenderInput>;
};
export type UserUpdateWithWhereUniqueWithoutGenderInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutGenderInput, Prisma.UserUncheckedUpdateWithoutGenderInput>;
};
export type UserUpdateManyWithWhereWithoutGenderInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutGenderInput>;
};
export type UserCreateWithoutUserStatusInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserStatusInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserStatusInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput>;
};
export type UserCreateManyUserStatusInputEnvelope = {
    data: Prisma.UserCreateManyUserStatusInput | Prisma.UserCreateManyUserStatusInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutUserStatusInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserStatusInput, Prisma.UserUncheckedUpdateWithoutUserStatusInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserStatusInput, Prisma.UserUncheckedCreateWithoutUserStatusInput>;
};
export type UserUpdateWithWhereUniqueWithoutUserStatusInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserStatusInput, Prisma.UserUncheckedUpdateWithoutUserStatusInput>;
};
export type UserUpdateManyWithWhereWithoutUserStatusInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutUserStatusInput>;
};
export type UserCreateWithoutPasswordInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPasswordInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPasswordInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordInput, Prisma.UserUncheckedCreateWithoutPasswordInput>;
};
export type UserUpsertWithoutPasswordInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPasswordInput, Prisma.UserUncheckedUpdateWithoutPasswordInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordInput, Prisma.UserUncheckedCreateWithoutPasswordInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPasswordInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPasswordInput, Prisma.UserUncheckedUpdateWithoutPasswordInput>;
};
export type UserUpdateWithoutPasswordInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPasswordInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutRolesInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutRolesInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutRolesInput>;
};
export type UserCreateWithoutTenantInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userStatus?: Prisma.UserStatusCreateNestedOneWithoutUsersInput;
    country?: Prisma.CountryCreateNestedOneWithoutUsersInput;
    language?: Prisma.LanguageCreateNestedOneWithoutUsersInput;
    title?: Prisma.TitleCreateNestedOneWithoutUsersInput;
    gender?: Prisma.GenderCreateNestedOneWithoutUsersInput;
    roles?: Prisma.RoleCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutTenantInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutUsersInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    password?: Prisma.PasswordUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>;
};
export type UserCreateManyTenantInputEnvelope = {
    data: Prisma.UserCreateManyTenantInput | Prisma.UserCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>;
};
export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>;
};
export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutTenantInput>;
};
export type UserCreateManyCountryInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCreateManyLanguageInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutLanguageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCreateManyTitleInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutTitleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCreateManyGenderInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutGenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutGenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutGenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCreateManyUserStatusInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    tenantId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutUserStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutUserStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCreateManyTenantInput = {
    id?: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userStatusId?: string | null;
    countryId?: string | null;
    languageId?: string | null;
    titleId?: string | null;
    genderId?: string | null;
    failedLoginAttempts?: number;
    lastFailedLoginAt?: Date | string | null;
    lockedAt?: Date | string | null;
    lockReason?: string | null;
    lockCount?: number;
    autoUnlockAt?: Date | string | null;
    lastLoginAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userStatus?: Prisma.UserStatusUpdateOneWithoutUsersNestedInput;
    country?: Prisma.CountryUpdateOneWithoutUsersNestedInput;
    language?: Prisma.LanguageUpdateOneWithoutUsersNestedInput;
    title?: Prisma.TitleUpdateOneWithoutUsersNestedInput;
    gender?: Prisma.GenderUpdateOneWithoutUsersNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutUsersNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    password?: Prisma.PasswordUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    userStatusId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    failedLoginAttempts?: Prisma.IntFieldUpdateOperationsInput | number;
    lastFailedLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lockReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockCount?: Prisma.IntFieldUpdateOperationsInput | number;
    autoUnlockAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    roles: number;
    sessions: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    userStatusId?: boolean;
    countryId?: boolean;
    languageId?: boolean;
    titleId?: boolean;
    genderId?: boolean;
    tenantId?: boolean;
    failedLoginAttempts?: boolean;
    lastFailedLoginAt?: boolean;
    lockedAt?: boolean;
    lockReason?: boolean;
    lockCount?: boolean;
    autoUnlockAt?: boolean;
    lastLoginAt?: boolean;
    metadata?: boolean;
    version?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    password?: boolean | Prisma.User$passwordArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    userStatusId?: boolean;
    countryId?: boolean;
    languageId?: boolean;
    titleId?: boolean;
    genderId?: boolean;
    tenantId?: boolean;
    failedLoginAttempts?: boolean;
    lastFailedLoginAt?: boolean;
    lockedAt?: boolean;
    lockReason?: boolean;
    lockCount?: boolean;
    autoUnlockAt?: boolean;
    lastLoginAt?: boolean;
    metadata?: boolean;
    version?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    userStatusId?: boolean;
    countryId?: boolean;
    languageId?: boolean;
    titleId?: boolean;
    genderId?: boolean;
    tenantId?: boolean;
    failedLoginAttempts?: boolean;
    lastFailedLoginAt?: boolean;
    lockedAt?: boolean;
    lockReason?: boolean;
    lockCount?: boolean;
    autoUnlockAt?: boolean;
    lastLoginAt?: boolean;
    metadata?: boolean;
    version?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    userStatusId?: boolean;
    countryId?: boolean;
    languageId?: boolean;
    titleId?: boolean;
    genderId?: boolean;
    tenantId?: boolean;
    failedLoginAttempts?: boolean;
    lastFailedLoginAt?: boolean;
    lockedAt?: boolean;
    lockReason?: boolean;
    lockCount?: boolean;
    autoUnlockAt?: boolean;
    lastLoginAt?: boolean;
    metadata?: boolean;
    version?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "username" | "firstName" | "lastName" | "userStatusId" | "countryId" | "languageId" | "titleId" | "genderId" | "tenantId" | "failedLoginAttempts" | "lastFailedLoginAt" | "lockedAt" | "lockReason" | "lockCount" | "autoUnlockAt" | "lastLoginAt" | "metadata" | "version" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    password?: boolean | Prisma.User$passwordArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userStatus?: boolean | Prisma.User$userStatusArgs<ExtArgs>;
    country?: boolean | Prisma.User$countryArgs<ExtArgs>;
    language?: boolean | Prisma.User$languageArgs<ExtArgs>;
    title?: boolean | Prisma.User$titleArgs<ExtArgs>;
    gender?: boolean | Prisma.User$genderArgs<ExtArgs>;
    tenant?: boolean | Prisma.User$tenantArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        userStatus: Prisma.$UserStatusPayload<ExtArgs> | null;
        country: Prisma.$CountryPayload<ExtArgs> | null;
        language: Prisma.$LanguagePayload<ExtArgs> | null;
        title: Prisma.$TitlePayload<ExtArgs> | null;
        gender: Prisma.$GenderPayload<ExtArgs> | null;
        tenant: Prisma.$TenantPayload<ExtArgs> | null;
        roles: Prisma.$RolePayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        password: Prisma.$PasswordPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        userStatusId: string | null;
        countryId: string | null;
        languageId: string | null;
        titleId: string | null;
        genderId: string | null;
        tenantId: string | null;
        failedLoginAttempts: number;
        lastFailedLoginAt: Date | null;
        lockedAt: Date | null;
        lockReason: string | null;
        lockCount: number;
        autoUnlockAt: Date | null;
        lastLoginAt: Date | null;
        metadata: runtime.JsonValue | null;
        version: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
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
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userStatus<T extends Prisma.User$userStatusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userStatusArgs<ExtArgs>>): Prisma.Prisma__UserStatusClient<runtime.Types.Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    country<T extends Prisma.User$countryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$countryArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.User$languageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$languageArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    title<T extends Prisma.User$titleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$titleArgs<ExtArgs>>): Prisma.Prisma__TitleClient<runtime.Types.Result.GetResult<Prisma.$TitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    gender<T extends Prisma.User$genderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$genderArgs<ExtArgs>>): Prisma.Prisma__GenderClient<runtime.Types.Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tenant<T extends Prisma.User$tenantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$tenantArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    roles<T extends Prisma.User$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    password<T extends Prisma.User$passwordArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$passwordArgs<ExtArgs>>): Prisma.Prisma__PasswordClient<runtime.Types.Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly userStatusId: Prisma.FieldRef<"User", 'String'>;
    readonly countryId: Prisma.FieldRef<"User", 'String'>;
    readonly languageId: Prisma.FieldRef<"User", 'String'>;
    readonly titleId: Prisma.FieldRef<"User", 'String'>;
    readonly genderId: Prisma.FieldRef<"User", 'String'>;
    readonly tenantId: Prisma.FieldRef<"User", 'String'>;
    readonly failedLoginAttempts: Prisma.FieldRef<"User", 'Int'>;
    readonly lastFailedLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly lockedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly lockReason: Prisma.FieldRef<"User", 'String'>;
    readonly lockCount: Prisma.FieldRef<"User", 'Int'>;
    readonly autoUnlockAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"User", 'Json'>;
    readonly version: Prisma.FieldRef<"User", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.userStatus
 */
export type User$userStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: Prisma.UserStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserStatus
     */
    omit?: Prisma.UserStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserStatusInclude<ExtArgs> | null;
    where?: Prisma.UserStatusWhereInput;
};
/**
 * User.country
 */
export type User$countryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: Prisma.CountrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Country
     */
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where?: Prisma.CountryWhereInput;
};
/**
 * User.language
 */
export type User$languageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Language
     */
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where?: Prisma.LanguageWhereInput;
};
/**
 * User.title
 */
export type User$titleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Title
     */
    select?: Prisma.TitleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Title
     */
    omit?: Prisma.TitleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TitleInclude<ExtArgs> | null;
    where?: Prisma.TitleWhereInput;
};
/**
 * User.gender
 */
export type User$genderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: Prisma.GenderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gender
     */
    omit?: Prisma.GenderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GenderInclude<ExtArgs> | null;
    where?: Prisma.GenderWhereInput;
};
/**
 * User.tenant
 */
export type User$tenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: Prisma.TenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tenant
     */
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
};
/**
 * User.roles
 */
export type User$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: Prisma.RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
/**
 * User.sessions
 */
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * User.password
 */
export type User$passwordArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: Prisma.PasswordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Password
     */
    omit?: Prisma.PasswordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasswordInclude<ExtArgs> | null;
    where?: Prisma.PasswordWhereInput;
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map