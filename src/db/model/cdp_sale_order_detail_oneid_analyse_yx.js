const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_detail_oneid_analyse_yx', {
    order_detail_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "订单明细ID"
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单号"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户ID"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "oneid"
    },
    union_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "union_id"
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单id"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    order_item_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单明细行号"
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单日期"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单完结日期"
    },
    order_create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单创建时间"
    },
    order_update_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单更新时间"
    },
    item_type_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品类型代码"
    },
    item_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品类型名称"
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
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品名称"
    },
    ware_info_hsh_first_cate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-一级分类"
    },
    ware_info_hsh_spu: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-SPU"
    },
    ware_info_hsh_product_method: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-加工工艺"
    },
    ware_info_hsh_package: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-包装"
    },
    ware_info_hsh_cook_method: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-食用方法"
    },
    ware_info_hsh_taste: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-口味"
    },
    ware_info_hsh_meal_cate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-肉类"
    },
    ware_info_hsh_industriy_site: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-商品行业位置"
    },
    ware_info_hsh_market_position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-市场定位"
    },
    ware_info_hsh_inner_position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "皇上皇-品牌内定位"
    },
    ware_info_fx_first_cate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-一级分类"
    },
    ware_info_fx_second_cate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-二级分类"
    },
    ware_info_fx_brand: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-品牌"
    },
    ware_info_fx_net_weght: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "风行-净含量"
    },
    ware_info_fx_sugar_content: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-含糖量"
    },
    ware_info_fx_taste: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-口味"
    },
    ware_info_fx_storage_condition: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-储运条件"
    },
    ware_info_fx_stage: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-商品生命阶段"
    },
    ware_info_fx_market_position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-市场定位"
    },
    ware_info_fx_inner_position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "风行-品牌内定位"
    },
    dt_unit: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "计量单位"
    },
    item_base_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品原价"
    },
    item_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品单价"
    },
    pmpt_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品总金额"
    },
    coupon_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "优惠券抵扣金额"
    },
    integral_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "会员积分抵扣金额"
    },
    other_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "其他折扣金额"
    },
    after_dsc_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "折后价格"
    },
    total_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "折扣金额"
    },
    order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "数量"
    },
    order_cond_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "组合套餐的商品件数"
    },
    refund_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "退款金额"
    },
    order_cancel_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "取消数量"
    },
    order_gift_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "赠品数量"
    }
  }, {
    sequelize,
    tableName: 'cdp_sale_order_detail_oneid_analyse_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_detail_id" },
        ]
      },
    ]
  });
};
