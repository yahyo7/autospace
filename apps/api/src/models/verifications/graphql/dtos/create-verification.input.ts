import { InputType, PickType } from '@nestjs/graphql'
import { Verification } from '../entity/verification.entity'

@InputType()
export class CreateVerificationInput extends PickType(
  Verification,
  ['createdAt', 'updatedAt', 'garageId'],
  InputType,
) {}
