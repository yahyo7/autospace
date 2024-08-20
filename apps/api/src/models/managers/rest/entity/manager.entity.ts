import { Manager } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
  companyId: number
}
