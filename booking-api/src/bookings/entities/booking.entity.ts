import { Building } from './../../buildings/entities/building.entity';
import { Company } from './../../companies/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
@ObjectType()
export class Booking {
  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Prop({type: Types.ObjectId, ref: 'Company'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  company: Company

  @Prop({type: Types.ObjectId, ref: 'Building'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  building: Building

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  bookedBy: string

  @Prop()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  startDate: Date

  @Prop()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  endDate: Date


}

export const BookingSchema = SchemaFactory.createForClass(Booking);

