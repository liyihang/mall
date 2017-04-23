<?php

/**
 * Created by www.itcast.cn.
 * User: lcc
 * Date: 2017-02-24
 * Time: 14:56
 */
namespace Admin\Model;

use Think\Model;
use Think\Exception;

class PrivModel extends Model
{

    protected $_validate = [
        ['privilege_name', 'require', "验证码不能为空!", 1],



    ];


}