import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/mysql"

export interface UserInstance extends Model{
    id: number
    email: string
    password: string
}

export const User = sequelize.define<UserInstance>('User',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        
    }
    
},{
    tableName: 'user',
    timestamps: false
})