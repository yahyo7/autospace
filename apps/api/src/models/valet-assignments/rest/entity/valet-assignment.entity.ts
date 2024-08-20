import { ValetAssignment } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment>
{
  bookingId: number
  createdAt: Date
  updatedAt: Date
  pickupLat: number
  pickupLng: number
  returnLat: number
  returnLng: number
  pickupValetId: string
  returnValetId: string
}
