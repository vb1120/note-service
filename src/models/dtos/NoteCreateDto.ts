import { Expose } from 'class-transformer'
import { IsDefined, IsString, IsUUID } from 'class-validator'
import { InferAttributes } from 'sequelize'
import { Note } from '../Note'

export class NoteCreateDto {
    @IsDefined()
    @IsString()
    @Expose()
    description: InferAttributes<Note>['description']

    @IsDefined()
    @IsString()
    @Expose()
    content: InferAttributes<Note>['content']

    @IsDefined()
    @IsUUID()
    @Expose()
    userUuid: InferAttributes<Note>['userUuid']
}
