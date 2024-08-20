import { $Enums, Slot } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class SlotEntity implements RestrictProperties<SlotEntity, Slot> {
  id: number
  createdAt: Date
  updatedAt: Date
  displayName: string
  pricePerHour: number
  length: number
  width: number
  height: number
  type: $Enums.SlotType
  garageId: number
}
