const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_cross_reg_detail_analyse', {
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "cust_id"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "one_id"
    },
    is_from_yuexiuhui: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册悦秀会"
    },
    is_from_yuexianghui_office: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册悦享会"
    },
    is_from_yuexianghui_market: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册悦享汇"
    },
    is_from_fangbao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册房宝"
    },
    is_from_changzu: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否长租客户"
    },
    is_from_wuye: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否物业客户"
    },
    is_from_pifa: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否批发市场客户"
    },
    is_from_yanglao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否养老客户"
    },
    is_from_sales_system: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否销售系统登记客户"
    },
    is_from_hsh: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册皇上皇family"
    },
    is_from_fx: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册风行生活"
    },
    is_from_member: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否注册会员商城"
    },
    is_from_others: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否其他业务客户"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_cross_reg_detail_analyse',
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
