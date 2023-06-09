import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/mysql"

export interface nickInstance extends Model{
    id: number
    nick: string
    xp: number

}

export const Nick = sequelize.define<nickInstance>('Nick',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nick:{
        type: DataTypes.STRING,
        allowNull: false
    },
    xp:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
    
},{
    tableName: 'home',
    timestamps: false
})