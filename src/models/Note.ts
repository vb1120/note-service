import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes
} from 'sequelize'
import { sequelize } from '../db'

// order of InferAttributes & InferCreationAttributes is important.
export class Note extends Model<
    InferAttributes<Note>,
    InferCreationAttributes<Note>
> {
    // 'CreationOptional' is a special type that marks the field as optional
    // when creating an instance of the model (such as using Model.create()).
    declare id: CreationOptional<number>
    declare description: string
    declare content: string
    declare userUuid: string
}

// Model initialization
Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userUuid: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        tableName: 'notes'
    }
)
