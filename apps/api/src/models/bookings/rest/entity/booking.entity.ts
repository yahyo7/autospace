import { $Enums, Booking } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  id: number
  createdAt: Date
  updatedAt: Date
  pricePerHour: number
  totalPrice: number
  startTime: Date
  endTime: Date
  vehicleNumber: string
  phoneNumber: string
  passcode: string
  status: $Enums.BookingStatus
  slotId: number
  customerId: string
}
