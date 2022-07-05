import { Expose } from 'class-transformer'
import { IsDefined, IsString, IsUUID } from 'class-validator'
import { InferAttributes } from 'sequelize'
import { Note } from '../Note'

export class NoteUpdateDto {
    @IsString()
    @Expose()
    description: InferAttributes<Note>['description']

    @IsString()
    @Expose()
    content: InferAttributes<Note>['content']

    @IsUUID()
    @Expose()
    userUuid: InferAttributes<Note>['userUuid']
}
