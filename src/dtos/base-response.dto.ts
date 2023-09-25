import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse {
    @ApiProperty({
        example: true,
        description: 'true/false',
    })
    result: boolean;

    @ApiProperty({
        example: 200,
        description: 'API 응답 코드',
    })
    resultCode: number;

    @ApiProperty({
        example: '성공',
        description: 'API 응답 메시지',
    })
    message: string;

    @ApiProperty({
        example: 'Array',
        description: '데이터',
    })
    data?;
}
