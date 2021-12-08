import { Prop } from '@nestjs/mongoose';

export class SocialMedia {
  @Prop({ required: false })
  facebook?: string;

  @Prop({ required: false })
  instagram?: string;

  @Prop({ required: false })
  whatsapp?: string;

  @Prop({ required: false })
  phone?: string;

  @Prop({ required: false })
  email?: string;

  @Prop({ required: false })
  website?: string;
}

export class Address {
  @Prop({ required: false })
  zipcode?: string;

  @Prop({ required: false })
  street?: string;

  @Prop({ required: false })
  number?: string;

  @Prop({ required: false })
  complement?: string;

  @Prop({ required: false })
  neighborhood?: string;

  @Prop({ required: false })
  city?: string;

  @Prop({ required: false })
  state?: string;
}

export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop({ select: false })
  password: string;

  @Prop()
  role: string;

  @Prop()
  profilePicture?: string;

  @Prop()
  aboutMe?: string;

  @Prop()
  address?: Address;

  @Prop()
  socialMedia: SocialMedia;
}
