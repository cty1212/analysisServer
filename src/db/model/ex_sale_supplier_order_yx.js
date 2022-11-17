const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_sale_supplier_order_yx', {
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
    supply_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "供应商类别"
    },
    supply_category: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "供货品类"
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
    tableName: 'ex_sale_supplier_order_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time" },
          { name: "created_company_name" },
          { name: "supply_type" },
          { name: "supply_category" },
          { name: "target_name" },
        ]
      },
    ]
  });
};
