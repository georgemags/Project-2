const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SourceMaterial extends Model {}

SourceMaterial.init(
    {
        source_mat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'SourceMaterial'
      }
);
module.exports = SourceMaterial;