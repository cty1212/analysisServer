const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_label_detail_analyse', {
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "客户ID"
    },
    menber_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "会员平台统一ID"
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "性别"
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "年龄"
    },
    age_range: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "年龄区间"
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属省份"
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属城市"
    },
    reg_section_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "注册板块编码"
    },
    reg_section: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "注册板块"
    },
    reg_source: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "注册来源"
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "注册日期"
    },
    is_new_cust: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否新用户"
    },
    first_buy_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "第一单日期"
    },
    last_buy_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后一单日期"
    },
    is_not_buy_cust: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否未购买用户"
    },
    order_amt_td: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "总交易金额（截止到当前）"
    },
    order_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "总交易订单数（截止到当前）"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_label_detail_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
};
