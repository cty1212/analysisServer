var DataTypes = require("sequelize").DataTypes;
var _cdp_business_cust_type_analyse = require("./cdp_business_cust_type_analyse");
var _cdp_cust_cross_reg_detail_analyse = require("./cdp_cust_cross_reg_detail_analyse");
var _cdp_cust_cross_reg_stat_analyse = require("./cdp_cust_cross_reg_stat_analyse");
var _cdp_cust_label_detail_analyse = require("./cdp_cust_label_detail_analyse");
var _cdp_cust_life_cycle_stat_analyse = require("./cdp_cust_life_cycle_stat_analyse");
var _cdp_cust_ma_activity_detail = require("./cdp_cust_ma_activity_detail");
var _cdp_cust_ma_oneid_maping = require("./cdp_cust_ma_oneid_maping");
var _cdp_cust_mem_overview_stat_analyse = require("./cdp_cust_mem_overview_stat_analyse");
var _cdp_cust_overview_stat_analyse = require("./cdp_cust_overview_stat_analyse");
var _cdp_cust_reg_source_stat_analyse = require("./cdp_cust_reg_source_stat_analyse");
var _cdp_cust_region_stat_analyse = require("./cdp_cust_region_stat_analyse");
var _cdp_cust_repurchase_stat_analyse = require("./cdp_cust_repurchase_stat_analyse");
var _cdp_cust_wecom_add_detail = require("./cdp_cust_wecom_add_detail");
var _cdp_cust_wecom_employee_chat_data = require("./cdp_cust_wecom_employee_chat_data");
var _cdp_cust_wecom_group_chat_data = require("./cdp_cust_wecom_group_chat_data");
var _cdp_sale_order_detail_oneid_analyse_yx = require("./cdp_sale_order_detail_oneid_analyse_yx");
var _cdp_sale_order_ma_stat_analyse = require("./cdp_sale_order_ma_stat_analyse");
var _cdp_sale_order_oneid_analyse_yx = require("./cdp_sale_order_oneid_analyse_yx");
var _cdp_sale_order_oper_wecom_stat = require("./cdp_sale_order_oper_wecom_stat");
var _cdp_sale_order_outbound_detail_analyse_hsh = require("./cdp_sale_order_outbound_detail_analyse_hsh");
var _cdp_sale_order_purchase_detail_analyse_hsh = require("./cdp_sale_order_purchase_detail_analyse_hsh");
var _cdp_sale_order_tob_purchase_stat_yx = require("./cdp_sale_order_tob_purchase_stat_yx");
var _cdp_sale_order_tob_stat_yx = require("./cdp_sale_order_tob_stat_yx");
var _cdp_sale_order_toc_offline_stat_yx = require("./cdp_sale_order_toc_offline_stat_yx");
var _cdp_sale_order_toc_online_stat_yx = require("./cdp_sale_order_toc_online_stat_yx");
var _cdp_sale_order_toc_stat_fx = require("./cdp_sale_order_toc_stat_fx");
var _cdp_sale_order_wecom_detail_analyse = require("./cdp_sale_order_wecom_detail_analyse");
var _cdp_sale_order_wecom_stat_analyse = require("./cdp_sale_order_wecom_stat_analyse");
var _cdp_user_behvr_item_add_oneid_analyse_yx = require("./cdp_user_behvr_item_add_oneid_analyse_yx");
var _cdp_user_behvr_item_browse_oneid_analyse_yx = require("./cdp_user_behvr_item_browse_oneid_analyse_yx");
var _cdp_user_behvr_page_browse_oneid_analyse_yx = require("./cdp_user_behvr_page_browse_oneid_analyse_yx");
var _ex_sale_content_yx = require("./ex_sale_content_yx");
var _ex_sale_dealer_order_yx = require("./ex_sale_dealer_order_yx");
var _ex_sale_dealer_yx = require("./ex_sale_dealer_yx");
var _ex_sale_ecommerce_yx = require("./ex_sale_ecommerce_yx");
var _ex_sale_miniapps_yx = require("./ex_sale_miniapps_yx");
var _ex_sale_stores_yx = require("./ex_sale_stores_yx");
var _ex_sale_supplier_order_yx = require("./ex_sale_supplier_order_yx");
var _ex_sale_supplier_yx = require("./ex_sale_supplier_yx");
var _pub_oa_company = require("./pub_oa_company");
var _pub_target = require("./pub_target");

function initModels(sequelize) {
  var cdp_business_cust_type_analyse = _cdp_business_cust_type_analyse(sequelize, DataTypes);
  var cdp_cust_cross_reg_detail_analyse = _cdp_cust_cross_reg_detail_analyse(sequelize, DataTypes);
  var cdp_cust_cross_reg_stat_analyse = _cdp_cust_cross_reg_stat_analyse(sequelize, DataTypes);
  var cdp_cust_label_detail_analyse = _cdp_cust_label_detail_analyse(sequelize, DataTypes);
  var cdp_cust_life_cycle_stat_analyse = _cdp_cust_life_cycle_stat_analyse(sequelize, DataTypes);
  var cdp_cust_ma_activity_detail = _cdp_cust_ma_activity_detail(sequelize, DataTypes);
  var cdp_cust_ma_oneid_maping = _cdp_cust_ma_oneid_maping(sequelize, DataTypes);
  var cdp_cust_mem_overview_stat_analyse = _cdp_cust_mem_overview_stat_analyse(sequelize, DataTypes);
  var cdp_cust_overview_stat_analyse = _cdp_cust_overview_stat_analyse(sequelize, DataTypes);
  var cdp_cust_reg_source_stat_analyse = _cdp_cust_reg_source_stat_analyse(sequelize, DataTypes);
  var cdp_cust_region_stat_analyse = _cdp_cust_region_stat_analyse(sequelize, DataTypes);
  var cdp_cust_repurchase_stat_analyse = _cdp_cust_repurchase_stat_analyse(sequelize, DataTypes);
  var cdp_cust_wecom_add_detail = _cdp_cust_wecom_add_detail(sequelize, DataTypes);
  var cdp_cust_wecom_employee_chat_data = _cdp_cust_wecom_employee_chat_data(sequelize, DataTypes);
  var cdp_cust_wecom_group_chat_data = _cdp_cust_wecom_group_chat_data(sequelize, DataTypes);
  var cdp_sale_order_detail_oneid_analyse_yx = _cdp_sale_order_detail_oneid_analyse_yx(sequelize, DataTypes);
  var cdp_sale_order_ma_stat_analyse = _cdp_sale_order_ma_stat_analyse(sequelize, DataTypes);
  var cdp_sale_order_oneid_analyse_yx = _cdp_sale_order_oneid_analyse_yx(sequelize, DataTypes);
  var cdp_sale_order_oper_wecom_stat = _cdp_sale_order_oper_wecom_stat(sequelize, DataTypes);
  var cdp_sale_order_outbound_detail_analyse_hsh = _cdp_sale_order_outbound_detail_analyse_hsh(sequelize, DataTypes);
  var cdp_sale_order_purchase_detail_analyse_hsh = _cdp_sale_order_purchase_detail_analyse_hsh(sequelize, DataTypes);
  var cdp_sale_order_tob_purchase_stat_yx = _cdp_sale_order_tob_purchase_stat_yx(sequelize, DataTypes);
  var cdp_sale_order_tob_stat_yx = _cdp_sale_order_tob_stat_yx(sequelize, DataTypes);
  var cdp_sale_order_toc_offline_stat_yx = _cdp_sale_order_toc_offline_stat_yx(sequelize, DataTypes);
  var cdp_sale_order_toc_online_stat_yx = _cdp_sale_order_toc_online_stat_yx(sequelize, DataTypes);
  var cdp_sale_order_toc_stat_fx = _cdp_sale_order_toc_stat_fx(sequelize, DataTypes);
  var cdp_sale_order_wecom_detail_analyse = _cdp_sale_order_wecom_detail_analyse(sequelize, DataTypes);
  var cdp_sale_order_wecom_stat_analyse = _cdp_sale_order_wecom_stat_analyse(sequelize, DataTypes);
  var cdp_user_behvr_item_add_oneid_analyse_yx = _cdp_user_behvr_item_add_oneid_analyse_yx(sequelize, DataTypes);
  var cdp_user_behvr_item_browse_oneid_analyse_yx = _cdp_user_behvr_item_browse_oneid_analyse_yx(sequelize, DataTypes);
  var cdp_user_behvr_page_browse_oneid_analyse_yx = _cdp_user_behvr_page_browse_oneid_analyse_yx(sequelize, DataTypes);
  var ex_sale_content_yx = _ex_sale_content_yx(sequelize, DataTypes);
  var ex_sale_dealer_order_yx = _ex_sale_dealer_order_yx(sequelize, DataTypes);
  var ex_sale_dealer_yx = _ex_sale_dealer_yx(sequelize, DataTypes);
  var ex_sale_ecommerce_yx = _ex_sale_ecommerce_yx(sequelize, DataTypes);
  var ex_sale_miniapps_yx = _ex_sale_miniapps_yx(sequelize, DataTypes);
  var ex_sale_stores_yx = _ex_sale_stores_yx(sequelize, DataTypes);
  var ex_sale_supplier_order_yx = _ex_sale_supplier_order_yx(sequelize, DataTypes);
  var ex_sale_supplier_yx = _ex_sale_supplier_yx(sequelize, DataTypes);
  var pub_oa_company = _pub_oa_company(sequelize, DataTypes);
  var pub_target = _pub_target(sequelize, DataTypes);


  return {
    cdp_business_cust_type_analyse,
    cdp_cust_cross_reg_detail_analyse,
    cdp_cust_cross_reg_stat_analyse,
    cdp_cust_label_detail_analyse,
    cdp_cust_life_cycle_stat_analyse,
    cdp_cust_ma_activity_detail,
    cdp_cust_ma_oneid_maping,
    cdp_cust_mem_overview_stat_analyse,
    cdp_cust_overview_stat_analyse,
    cdp_cust_reg_source_stat_analyse,
    cdp_cust_region_stat_analyse,
    cdp_cust_repurchase_stat_analyse,
    cdp_cust_wecom_add_detail,
    cdp_cust_wecom_employee_chat_data,
    cdp_cust_wecom_group_chat_data,
    cdp_sale_order_detail_oneid_analyse_yx,
    cdp_sale_order_ma_stat_analyse,
    cdp_sale_order_oneid_analyse_yx,
    cdp_sale_order_oper_wecom_stat,
    cdp_sale_order_outbound_detail_analyse_hsh,
    cdp_sale_order_purchase_detail_analyse_hsh,
    cdp_sale_order_tob_purchase_stat_yx,
    cdp_sale_order_tob_stat_yx,
    cdp_sale_order_toc_offline_stat_yx,
    cdp_sale_order_toc_online_stat_yx,
    cdp_sale_order_toc_stat_fx,
    cdp_sale_order_wecom_detail_analyse,
    cdp_sale_order_wecom_stat_analyse,
    cdp_user_behvr_item_add_oneid_analyse_yx,
    cdp_user_behvr_item_browse_oneid_analyse_yx,
    cdp_user_behvr_page_browse_oneid_analyse_yx,
    ex_sale_content_yx,
    ex_sale_dealer_order_yx,
    ex_sale_dealer_yx,
    ex_sale_ecommerce_yx,
    ex_sale_miniapps_yx,
    ex_sale_stores_yx,
    ex_sale_supplier_order_yx,
    ex_sale_supplier_yx,
    pub_oa_company,
    pub_target,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
