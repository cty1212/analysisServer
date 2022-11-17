const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_sale_stores_yx', {
    time: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "时间维度-月份"
    },
    created_company_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "所属公司名称"
    },
    area: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "区域"
    },
    business_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "业态"
    },
    target_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "指标名称"
    },
    target_value: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "当期数值"
    },
    create_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "创建人"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    }
  }, {
    sequelize,
    tableName: 'ex_sale_stores_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time" },
          { name: "created_company_name" },
          { name: "area" },
          { name: "business_type" },
          { name: "target_name" },
        ]
      },
    ]
  });
};
