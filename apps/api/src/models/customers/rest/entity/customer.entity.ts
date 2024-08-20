import { Customer } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CustomerEntity
  implements RestrictProperties<CustomerEntity, Customer>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
}
