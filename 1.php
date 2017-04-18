<?php
/**
 * Created by www.itcast.cn.
 * User: lcc
 * Date: 2017-03-29
 * Time: 19:16
 */

$time = date("H",time());
if(6>$time&&$time<12){
    header();
}
echo "------";
echo md5("admin");