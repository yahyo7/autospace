import { Garage } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  id: number
  createdAt: Date
  updatedAt: Date
  displayName: string
  description: string
  images: string[]
  companyId: number
}
