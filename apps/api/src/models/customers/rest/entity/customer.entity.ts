import { Customer } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CustomerEntity
  implements RestrictProperties<CustomerEntity, Customer>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
}
