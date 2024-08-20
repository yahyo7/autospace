import { $Enums, BookingTimeline } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  id: number
  timestamp: Date
  status: $Enums.BookingStatus
  bookingId: number
  valetId: string
  managerId: string
}
