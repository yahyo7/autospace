import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AddressWhereUniqueInput {
  id: number
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  id: number | Prisma.IntFilter<'Address'>
  createdAt: string | Date | Prisma.DateTimeFilter<'Address'>
  updatedAt: string | Date | Prisma.DateTimeFilter<'Address'>
  address: string | Prisma.StringFilter<'Address'>
  lat: number | Prisma.FloatFilter<'Address'>
  lng: number | Prisma.FloatFilter<'Address'>
  garageId: number | Prisma.IntFilter<'Address'>
  Garage:
    | (Prisma.Without<Prisma.GarageRelationFilter, Prisma.GarageWhereInput> &
        Prisma.GarageWhereInput)
    | (Prisma.Without<Prisma.GarageWhereInput, Prisma.GarageRelationFilter> &
        Prisma.GarageRelationFilter)
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AddressWhereInput[]
  OR: AddressWhereInput[]
  NOT: AddressWhereInput[]
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput
  some?: AddressWhereInput
  none?: AddressWhereInput
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput
  isNot?: AddressWhereInput
}
