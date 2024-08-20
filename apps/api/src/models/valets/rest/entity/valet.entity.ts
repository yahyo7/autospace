import { Valet } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
  image: string
  licenceID: string
  companyId: number
}
