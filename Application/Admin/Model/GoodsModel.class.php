<?php

/**
 * Created by www.itcast.cn.
 * User: lcc
 * Date: 2017-02-24
 * Time: 14:56
 */
namespace Admin\Model;
use Think\Model;
class GoodsModel extends Model
{
    protected $_validate=[
        ['goods_name','require',"商品名称不能为空!",1],
        ['market_price','require',"商品价格不能为空!",1],
        ['shop_price','require',"商品价格不能为空!",1],
        ['shop_price','currency',"商品价格为货币单位!",1],
        ['store_num','require',"商品库存必须大于0！",1],
    ];

}