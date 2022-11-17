const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_outbound_detail_analyse_hsh', {
    outb_order_detail_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "出库单表体主键"
    },
    outb_order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "出库单表头主键"
    },
    outb_bill_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "出库单单据号"
    },
    outdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出库日期"
    },
    source_bill_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源单据号"
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "源头单据表头主键"
    },
    order_detail_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "源头单据表体主键"
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "源头单据号"
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "源头单据日期"
    },
    sale_customer_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售单客户编码"
    },
    outb_customer_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "出库单客户编码"
    },
    outb_customer_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "出库单客户名称"
    },
    customer_areacl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户所属地区"
    },
    customer_province: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户所属省份"
    },
    customer_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户所属城市"
    },
    channel: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售渠道编码"
    },
    channel_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售渠道名称"
    },
    order_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单类型"
    },
    sale_org_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售组织"
    },
    sale_org_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售组织（最新版本）"
    },
    group_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "集团"
    },
    org_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "库存组织（最新版本）"
    },
    org_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "库存组织"
    },
    dept_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "部门"
    },
    base_currency: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "本位币"
    },
    warehouse: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "库存仓库"
    },
    salesman: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "业务员"
    },
    vnote: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "备注"
    },
    largess: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "赠品"
    },
    batch_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "批次号"
    },
    material_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料编码"
    },
    material_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料编码（最新版本）"
    },
    material_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物流名称"
    },
    main_measure_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "主单位ID"
    },
    main_measure_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "主单位名称"
    },
    measure_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "计量单位ID"
    },
    measure_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "计量单位名称"
    },
    quote_measure_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "报价单位ID"
    },
    quote_measure_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "报价单位名称"
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "币种"
    },
    tax_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "税率"
    },
    tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "价税合计"
    },
    non_tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "无税金额"
    },
    material_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "实发主数量"
    },
    material_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "单品折扣"
    },
    total_confirm_receive_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计确认应收数量"
    },
    total_confirm_receive_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计确认应收金额"
    },
    total_invoice_down_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计下游发票确认应收数量"
    },
    total_invoice_down_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计下游发票确认应收金额"
    },
    total_invoice_total_pay_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计出库及下游发票收款核销金额"
    },
    total_square_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计确认应收及下游发票收款数量"
    },
    total_square_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计确认应收及下游发票收款金额"
    },
    total_balance_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计确认应收及下游发票收款金额-累计出库及下游发票收款核销金额"
    },
    total_invoice_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计开票主数量"
    },
    total_wast_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计途损主数量"
    },
    total_sign_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计签收主数量"
    },
    total_back_num: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "累计出库退回主数量"
    },
    dr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "逻辑删除标识"
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
    tableName: 'cdp_sale_order_outbound_detail_analyse_hsh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "outb_order_detail_id" },
        ]
      },
    ]
  });
};
