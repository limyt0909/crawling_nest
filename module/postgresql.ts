import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'dillon',
            password: '',
            database: 'testDB',
            synchronize: true,
            logging: true,
        }),
        // UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }