const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_ma_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    graph_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "活动ID"
    },
    graph_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动名称"
    },
    group_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "任务分组"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "活动开始时间"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "活动结束时间"
    },
    segment_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "人群包ID"
    },
    segment_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "人群包名称"
    },
    node_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "人群包人数"
    },
    sms_send_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "短信触达用户数"
    },
    sms_receive_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "短信触达成功用户数"
    },
    app_send_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "小程序触达用户数"
    },
    app_receive_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "小程序触达成功用户数"
    },
    hsh_open_app_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入小程序人数（皇上皇）"
    },
    hsh_item_browse_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入商详页用户数（皇上皇）"
    },
    hsh_add_cart_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "加购用户数（皇上皇）"
    },
    hsh_buy_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款用户数（皇上皇）"
    },
    hsh_order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款订单数（皇上皇）"
    },
    hsh_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "付款总金额（皇上皇）"
    },
    fxry_open_app_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入小程序人数（风行）"
    },
    fxry_item_browse_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入商详页用户数（风行）"
    },
    fxry_add_cart_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "加购用户数（风行）"
    },
    fxry_buy_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款用户数（风行）"
    },
    fxry_order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款订单数（风行）"
    },
    fxry_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "付款总金额（风行）"
    },
    yxdc_open_app_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入小程序人数（地产悦秀会）"
    },
    yxdc_item_browse_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入商详页用户数（地产悦秀会）"
    },
    yxdc_add_cart_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "加购用户数（地产悦秀会）"
    },
    yxdc_buy_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款用户数（地产悦秀会）"
    },
    yxdc_order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款订单数（地产悦秀会）"
    },
    yxdc_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "付款总金额（地产悦秀会）"
    },
    mem_open_app_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入小程序人数（会员商城）"
    },
    mem_item_browse_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进入商详页用户数（会员商城）"
    },
    mem_add_cart_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "加购用户数（会员商城）"
    },
    mem_buy_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款用户数（会员商城）"
    },
    mem_order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "付款订单数（会员商城）"
    },
    mem_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "付款总金额（会员商城）"
    },
    etl_create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ETL创建时间"
    },
    etl_modified_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ETL修改时间"
    }
  }, {
    sequelize,
    tableName: 'cdp_sale_order_ma_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "graph_id" },
          { name: "group_name" },
          { name: "segment_id" },
        ]
      },
    ]
  });
};
