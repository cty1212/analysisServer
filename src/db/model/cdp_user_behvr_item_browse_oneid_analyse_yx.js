const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_user_behvr_item_browse_oneid_analyse_yx', {
    item_operation_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "商品详情页操作id"
    },
    open_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "open_id"
    },
    union_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "union_id"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户主档ID"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "oneid"
    },
    sku_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品编码"
    },
    matnr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料编码"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    referer_page_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "站内前向来源页"
    },
    active_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动ID"
    },
    active_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动名称"
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品名称"
    },
    item_series: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品系列"
    },
    is_exchange: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否换购"
    },
    item_label: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品标签"
    },
    promotion_information: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品促销信息"
    },
    button_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "按钮名称"
    },
    page_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "页面名称"
    },
    'module-type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "模块分类"
    },
    option_selected: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "功能选择"
    },
    event_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "事件时间"
    },
    event_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "事件编码"
    },
    is_first_login: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "账号是否首日登录"
    },
    is_purchase: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "本次浏览是否下单"
    },
    is_place_order: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "本次浏览是否加购"
    },
    browse_duration: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "浏览时长"
    },
    item_original_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品划线价"
    },
    item_current_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品页面价"
    }
  }, {
    sequelize,
    tableName: 'cdp_user_behvr_item_browse_oneid_analyse_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_operation_id" },
        ]
      },
    ]
  });
};
