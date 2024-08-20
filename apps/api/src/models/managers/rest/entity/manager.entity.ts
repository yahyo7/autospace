import { Manager } from '@prisma/client'
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
