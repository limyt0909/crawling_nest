import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { BaseResponse } from 'src/dtos/base-response.dto';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // response format 예외 path
        const excludePaths = ['/auth/login'];
        if (excludePaths.includes(context.switchToHttp().getRequest().url)) {
            return next.handle().pipe(
                map((value) => {
                    return value;
                }),
            );
        }

        return next.handle().pipe(
            map((value) => {
                const response: BaseResponse = {
                    result: true,
                    resultCode: 200,
                    message: '성공',
                    data: value,
                };
                return response;
            }),
        );
    }
}
