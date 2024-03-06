import { ApiProperty } from "@nestjs/swagger";

export class UserEntity {
    @ApiProperty({
        type: String,
        example: "shinpeiz",
    })
    username: string


}