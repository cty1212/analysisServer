const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_purchase_detail_analyse_hsh', {
    pur_order_detail_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "采购订单明细ID"
    },
    pur_order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "采购订单ID"
    },
    pur_order_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单编号"
    },
    supplier_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "供应商"
    },
    supplier_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "供应商名称"
    },
    supplier_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "供应商类型"
    },
    material_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料ID"
    },
    material_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物流名称"
    },
    material_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料分类"
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
    customer_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户ID"
    },
    customer_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户名称"
    },
    group_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属集团"
    },
    org_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "采购组织"
    },
    dept_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "采购部门"
    },
    purchaser: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "采购员"
    },
    order_state: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "单据状态"
    },
    order_state_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "单据状态名称"
    },
    order_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单类型"
    },
    crow_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "行号"
    },
    psfinanceorg_v_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "结算财务组织"
    },
    version: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "版本号"
    },
    is_latest: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否最新版本"
    },
    arrv_sto_org_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "收货库存组织"
    },
    tax_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "扣税类别名称"
    },
    plan_arrival_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "计划到货日期"
    },
    dbilldate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单日期"
    },
    material_main_num: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "物料主数量"
    },
    material_num: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "物料数量"
    },
    material_quote_num: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "物料报价数量"
    },
    non_tax_net_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "无税净价"
    },
    tax_net_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "含税净价"
    },
    non_tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "无税金额"
    },
    tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "价税合计"
    },
    tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "税额"
    },
    tax_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "税率"
    },
    vbdef4: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "自定义项4"
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
    tableName: 'cdp_sale_order_purchase_detail_analyse_hsh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pur_order_detail_id" },
        ]
      },
    ]
  });
};
