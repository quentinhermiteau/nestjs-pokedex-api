import { ApiProperty } from '@nestjs/swagger';

export class TypeDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public image: string;
}
